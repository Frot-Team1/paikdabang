window.addEventListener("scroll", function () {
    var topBtn = document.getElementById("topbtn");

    if (window.pageYOffset > 100) {
        // 스크롤이 일정 이상 내려갔을 때
        topBtn.style.display = "block"; // 보이게 함
    } else {
        topBtn.style.display = "none"; // 숨김
    }

    topBtn.addEventListener("click", function () {
        window.scrollTo(0, 0); // 페이지 상단으로 이동
    });
});
