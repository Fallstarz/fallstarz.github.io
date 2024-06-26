let backgroundColor = '#f4ecd8'; // Цвет телесного фона
let circleColor = '#7f0000'; // Темно-красный цвет заливки кругов
let circleStrokeColor = '#ffe4b5'; // Светло-персиковый цвет второй обводки кругов
let lineColor = '#ff0000'; // Красный цвет вертикальных линий
let circles = []; // Массив для хранения кругов
let bottomLineWidth = 2; // Начальная толщина нижней линии
let firstClick = false; // Флаг для отслеживания первого клика

function setup() {
  createCanvas(windowWidth, windowHeight); // Создаем холст размером окна браузера
  background(backgroundColor); // Устанавливаем цвет фона
}

function draw() {
  // Отрисовываем все круги из массива
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    
    // Вторая обводка
    stroke(circleStrokeColor);
    strokeWeight(6); // Толщина второй обводки
    noFill();
    ellipse(circle.x, circle.y, circle.radius * 2 + 12); // +12 для добавления пространства для второй обводки
    
    // Основной круг
    fill(circleColor); // Цвет заливки
    noStroke(); // Отключаем контур
    ellipse(circle.x, circle.y, circle.radius * 2); // Рисуем круг
    
    // Черный круг в середине (увеличенный)
    fill(0); // Черный цвет заливки
    let innerCircleRadius = circle.radius * 0.8; // Увеличиваем размер черного круга
    ellipse(circle.x, circle.y, innerCircleRadius * 2); // Рисуем черный круг в середине
    
    // Случайное количество и толщина красных вертикальных линий
    let numLines = floor(random(1, 5)); // Случайное количество линий от 1 до 4
    for (let j = 0; j < numLines; j++) {
      let lineWidth = random(1, 6); // Случайная толщина линии от 1 до 5
      stroke(lineColor); // Цвет линии
      strokeWeight(lineWidth); // Толщина линии
      let xOffset = random(-circle.radius, circle.radius); // Случайное смещение по X в пределах радиуса круга
      line(circle.x + xOffset, circle.y + circle.radius, circle.x + xOffset, height); // Рисуем линию вниз от круга до нижней границы холста
    }
  }
  
  // Рисуем нижнюю линию только после первого клика
  if (firstClick) {
    stroke(lineColor);
    strokeWeight(bottomLineWidth);
    line(0, height, width, height); // Рисуем линию от левого до правого края холста
  }
  
  // Увеличиваем толщину нижней линии в зависимости от количества кругов
  bottomLineWidth += circles.length * 0.01;
}

function mouseClicked() {
  // При первом клике мыши добавляем новый круг в случайное место без коллизий
  if (!firstClick) {
    firstClick = true; // Устанавливаем флаг первого клика
  }
  
  let valid = false;
  let newCircle;
  
  while (!valid) {
    newCircle = {
      x: random(width), // Случайная позиция по оси X
      y: random(height), // Случайная позиция по оси Y
      radius: random(20, 50) // Случайный радиус от 20 до 50 пикселей
    };
    
    // Проверяем коллизии с существующими кругами
    valid = true;
    for (let i = 0; i < circles.length; i++) {
      let existingCircle = circles[i];
      let distance = dist(newCircle.x, newCircle.y, existingCircle.x, existingCircle.y);
      if (distance < newCircle.radius + existingCircle.radius) {
        valid = false; // Если есть коллизия, помечаем круг как невалидный
        break;
      }
    }
  }
  
  circles.push(newCircle); // Добавляем круг в массив
}