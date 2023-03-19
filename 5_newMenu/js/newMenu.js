// 요소 생성 시 사용할 배열 및 변수
const menuData = [
    {
        menuName: "사과당근주스",
        link: "https://paikdabang.com/wp-content/uploads/2023/01/사과당근주스-450x588-450x588.jpg",
        engName: "APPLE CARROT JUICE",
        text: ["예천 사과와 제주 당근의 맛이 다채롭게 느껴지는 주스", " "],
        ingredient: true,
        gram: 587,
        ingredientValue: ["-", 200, 19, 40, 0, 1],
    },
    {
        menuName: "예천사과주스",
        link: "https://paikdabang.com/wp-content/uploads/2023/01/예천사과주스-450x588-450x588.jpg",
        engName: "YECHEON APPLE JUICE",
        text: ["새콤달콤한 풍미가 일품인 예천사과를 가득 담아낸 과일주스", " "],
        ingredient: true,
        gram: 571,
        ingredientValue: ["-", 190, 5, 39, 0, 1],
    },
    {
        menuName: "예산사과샌드",
        link: "https://paikdabang.com/wp-content/uploads/2023/02/예산사과샌드_thum-450x588.png",
        engName: "YESAN APPLE SANDWICH",
        text: ["아삭하게 씹히는 예산 사과와 풍미를 더하는 시나몬이 들어있는 샌드", " "],
        ingredient: false,
    },
];
const ingredientName = ["카페인 (mg)", "칼로리 (kcal)", "나트륨 (mg)", "당류 (g)", "포화지방 (g)", "단백질 (g)"];
const ItemsCnt = menuData.length; // 전체 메뉴 개수

// 1. 메뉴 슬라이드에 요소 생성
const slide = document.querySelector(".swiper-wrapper"); // 메뉴 슬라이드 감싸고있는 요소 가져오기

for (let i = 0; i < ItemsCnt; i++) {
    // (1) 각각의 항목 요소 생성
    slide.innerHTML += `<div class="swiper-slide"></div>`; // ■

    // (2) 처음 보이는 기본 요소(이미지, 메뉴명) 생성
    let slideItem = slide.children[i]; // ■
    slideItem.innerHTML += `<img src="${menuData[i]["link"]}" alt="" />`;
    slideItem.innerHTML += `<p class="best-tit">${menuData[i]["menuName"]}</p>`;
    slideItem.innerHTML += `<div class="info"></div>`; // ◆

    // (3) 클릭 시 나타나는 설명 요소 생성
    menuInfo = slideItem.children[2]; // ◆
    menuInfo.innerHTML += `<button class="close-btn" type="button"></button>`;
    menuInfo.innerHTML += `<h3 class="menu-tit1">${menuData[i]["menuName"]}</h3>`;
    menuInfo.innerHTML += `<div class="menu-tit2">${menuData[i]["engName"]}</div>`;
    menuInfo.innerHTML += `<p class="txt">${menuData[i]["text"][0]}<br />${menuData[i]["text"][1]}</p>`;
    menuInfo.innerHTML += `<div class="ingredient-table-wrap"></div>`; // ▲
    menuInfo.innerHTML += `<p class="msg">(매장 상황에 따라 판매하지 않을 수 있습니다.)</p>`;

    // menuData의 각 요소 중, "ingredient" key의 value가 true인 경우만
    if (menuData[i]["ingredient"]) {
        // (4-1) 설명 내용에 성분 테이블 생성
        ingreTable = menuInfo.children[4]; // ▲
        ingreTable.innerHTML += `<p>※ 1회 제공량 기준 : ${menuData[i]["gram"]}g</p>`;
        ingreTable.innerHTML += `<ul class="ingredient-table"></ul>`; // ◈

        // (4-2) 테이블 내용(성분) 생성
        ingreContents = ingreTable.children[1]; // ◈
        for (let j = 0; j < ingredientName.length; j++) {
            ingreContents.innerHTML += `<li><div>${ingredientName[j]}</div><div>${menuData[i]["ingredientValue"][j]}</div></li>`;
        }
    }
}

// 2. 슬라이드 스와이퍼
var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    watchOverflow: false, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정(false는 숨기지 않음)

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 3. 슬라이드 메뉴 이미지 클릭 시 설명 띄우기
const slideItems = document.querySelectorAll(".swiper-slide"); // 슬라이드 항목들 가져오기

slideItems.forEach((elem) => {
    elem.addEventListener("click", () => {
        let info = elem.children[2]; // 설명 요소 가져오기(슬라이드 항목의 4번째 자식요소인 .info div)

        // 설명 띄워져 있다면
        // (설명 요소의 calss 속성에 class="info show" 이런식으로 show가 있다면)
        if (info.classList.contains("show")) {
            info.classList.remove("show"); // class 속성의 값에서 show 제거
        }
        // 설명 띄워져 있지 않다면
        // (설명 요소의 calss 속성에 class="info" 이런식으로 show가 없다면)
        else {
            // 먼저 "모든" 슬라이드 설명 요소의 class 속성값에서 show 제거
            // (다른 항목 클릭했을 때 이전에 열려있던 설명창은 닫기 위해서)
            slideItems.forEach((i) => i.children[2].classList.remove("show"));
            info.classList.add("show"); // 그 다음에 "클릭된" 슬라이드 설명 요소의 class 속성값에 show 추가
        }
    });
});
