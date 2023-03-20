const tableItems = document.querySelectorAll(".on > li");

tableItems.forEach((elem) => {
  elem.addEventListener("click", () => {
    var popup = elem.children[2];

    if (popup.classList.contains("show")) {
      popup.classList.remove("show");
    } else {
      tableItems.forEach((i) => i.children[2].classList.remove("show"));
      popup.classList.add("show");
    }
  });
});
