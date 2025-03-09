let total = 10;
let player_win = 0;
let computer_win = 0;
let result = "게임 시작!"

document.querySelector('#count').textContent = total;
document.querySelector('#player').textContent = player_win;
document.querySelector('#computer').textContent = computer_win;
document.querySelector('#result').textContent = result;

function game (player) {
  total -= 1;
  if (total <= 0) {
    document.querySelector('#count').textContent = 0;
    result = "게임 종료"
    if (player_win == computer_win) {
      result += " 무승부"
    } else if (player_win < computer_win) {
      result = " 컴퓨터 승리"
    } else {
      result += " 플레이어 승리"
    }
    document.querySelector('#result').textContent = result;
    return 
  }
  let computer = Math.floor(Math.random() * 3)
  if (player == computer) {
    result = "무승부"
  } else if ((player == '1' && computer == '2') || (player == '0' && computer == '1') || (player == '2' && computer == '0')) {
    computer_win += 1;
    result = "컴퓨터 승리"
  } else {
    player_win += 1;
    result = "플레이어 승리"
  }
  document.querySelector('#count').textContent = total;
  document.querySelector('#player').textContent = player_win;
  document.querySelector('#computer').textContent = computer_win;
  document.querySelector('#result').textContent = result;
}