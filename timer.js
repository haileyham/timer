const set = document.querySelector(".timerNumber");
const start = document.querySelector(".startBtn");
const reset = document.querySelector(".resetBtn");

set.addEventListener("click", function () {
  start.classList.add("startBtnRun");
  reset.classList.add("resetBtnRun");
});

start.addEventListener("click", function () {
  console.log("start");
  reset.classList.add("resetBtnRun");
  start.classList.add("pauseBtnRun");


  if('.pauseBtnRun')
  function 타이머() {
    const countSec = document.querySelector(".countNumberSec");
    let count = 10;
    setInterval(function () {
      count -= 1;
      if (count >= 0) {
        countSec.textContent = count;
      } else {
        alert('끝났따(❁´◡`❁ 이거 계속 뜬다 어떡하징)');
        clearTimeout(타이머);
      }
    }, 1000);
  }
  타이머();
});

reset.addEventListener("click", function () {

});
