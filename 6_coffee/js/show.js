const items = document.querySelectorAll(".coffee");
console.log(items);

items.forEach((elem) => {
    elem.addEventListener("click", () => {
        var target = elem.lastElementChild;
        if (target.classList.contains("show")) {
            target.classList.remove("show");
        } else {
            items.forEach((elem) => {
                elem.lastElementChild.classList.remove("show");
            });
            target.classList.add("show");
        }
    });
});

// function off(elem) {
//     console.log(elem);
//     console.log(target);
//     if ((target.style.display = "block")) {
//         target.style.display = "none";
//         console.log("사라져");
//     } else {
//         target.style.display = "block";
//         console.log("생겨");
//     }
// }
