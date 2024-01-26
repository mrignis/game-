function startGame() {
  // Отримуємо доступ до елементів
  var headerStart = document.querySelector(".header-start");
  var gameMain = document.getElementById("game-main");

  // Змінюємо стиль для приховання заголовка
  headerStart.style.display = "none";

  // Змінюємо стиль для показу блоку main
  gameMain.style.display = "block";
}

function playGame(choice) {
  // Логіка вашої гри тут
  // Наприклад, виведення результату гри в елемент з id "result"
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "You chose: " + choice;
}
