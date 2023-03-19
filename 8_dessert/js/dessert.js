// 요소가 너무 많으므로 반복문으로 생성하기
// 요소 생성 시 사용할 배열 및 변수
const menuData = [
    {
        menuName: "예산사과샌드",
        link: "https://paikdabang.com/wp-content/uploads/2023/02/예산사과샌드_thum-450x588.png",
        engName: "YESAN APPLE SANDWICH",
        text: ["아삭하게 씹히는 예산 사과와 풍미를 더하는 시나몬이 들어있는 샌드", " "],
        best: false,
        ingredient: false,
    },
    {
        menuName: "고메버터소금빵",
        link: "https://paikdabang.com/wp-content/uploads/2022/10/소금빵-450x588-450x588.png",
        engName: " ",
        text: ["프랑스산 고급 발효버터와 안데스산맥 빙하소금의 풍미가 가득", " "],
        best: false,
        ingredient: false,
    },
    {
        menuName: "공공치빵(초코맛)",
        link: "https://paikdabang.com/wp-content/uploads/2021/11/공공치빵_thum-450x588.png",
        engName: "WATER ROUX CREAM CHEESE BREAD (CHOCOLATE)",
        text: ["‘공’들여 ‘공’수한 크림’치’즈 ‘빵’ 쫄깃한 빵 속에 크림치즈와 생크림이 듬뿍! 초코크림이 한가득!", " "],
        best: true,
        ingredient: false,
    },
    {
        menuName: "크리미슈",
        link: "https://paikdabang.com/wp-content/uploads/2019/04/크리미슈-450x588.png",
        engName: "CREAMY CHOUX",
        text: ["비스킷과 부드러운 크림의 환상 조합!", " "],
        best: true,
        ingredient: false,
    },
    {
        menuName: "크리미단팥빵",
        link: "https://paikdabang.com/wp-content/uploads/2019/04/크리미단팥빵-450x588.png",
        engName: "CREAMY RED BEAN BUN",
        text: ["달콤한 팥과 크림이 듬뿍~", " "],
        best: false,
        ingredient: false,
    },
    {
        menuName: "노말한소프트",
        link: "https://paikdabang.com/wp-content/uploads/2018/05/노말한소프트-3-450x588.png",
        engName: "SOFT ICE CREAM",
        text: ["입안에서 부드럽게 사르륵 녹는 마성의 아이스크림", " "],
        best: true,
        ingredient: true,
        gram: 225,
        ingredientValue: [0, 333, 70, 20, 17, 4],
    },
    {
        menuName: "아포가토",
        link: "https://paikdabang.com/wp-content/uploads/2022/09/아포가토-450x588-450x588.png",
        engName: "AFFOGATO",
        text: ["소프트 아이스크림과 코코아파우더를 곁들여 더욱 맛있는 더블 에스프레소", " "],
        best: false,
        ingredient: true,
        gram: 235,
        ingredientValue: [154, 307, 79, 37, 10, 5],
    },
    {
        menuName: "달고나크런치",
        link: "https://paikdabang.com/wp-content/uploads/2018/05/달고나크런치-450x588.png",
        engName: "DALGONA CRUNCH ICE CREAM",
        text: ["바삭한 달고나와 부드러운 아이스크림이 잘 어울리는 달고나크런치", " "],
        best: false,
        ingredient: true,
        gram: 250,
        ingredientValue: ["-", 434, 122, 605, 15, 49],
    },
    {
        menuName: "긴페스츄리와플",
        link: "https://paikdabang.com/wp-content/uploads/2018/05/긴페스츄리와플-450x588.png",
        engName: "LONG PASTRY WAFFLE",
        text: [
            "약 23cm 길이의 기다란 페스츄리 와플입니다. 겹겹이 살아있는 버터의 고소한 풍미와 비정제 사탕수수 원당의 달콤함을 느껴보세요.",
            " ",
        ],
        best: false,
        ingredient: false,
    },
    {
        menuName: "큰마들렌(오리지널)",
        link: "https://paikdabang.com/wp-content/uploads/2018/05/큰마들렌오리지널-450x588.png",
        engName: "BIG MADELEINE(ORIGINAL)",
        text: ["약 13cm의 큰!마들렌", "촉촉하고 부드러운 플레인 맛으로 커피 메뉴와 함께 즐겨보세요."],
        best: false,
        ingredient: false,
    },
    {
        menuName: "네모머핀(초콜릿)",
        link: "https://paikdabang.com/wp-content/uploads/2018/05/네모머핀초콜릿-450x588.png",
        engName: "SQUARE MUFFIN(CHOCOLATE)",
        text: ["초코칩이 들어있는 진한 초코 맛 머핀", " "],
        best: false,
        ingredient: false,
    },
    {
        menuName: "사라다빵",
        link: "https://paikdabang.com/wp-content/uploads/2017/05/사라다빵-450x588.png",
        engName: "SALAD BREAD",
        text: ["어린시절 빵집에서 사먹던 추억의 감자 사라다빵", " "],
        best: true,
        ingredient: true,
        gram: 187.5,
        ingredientValue: [0, 386, 498, 8, 5, 9],
    },
    {
        menuName: "소세지빵",
        link: "https://paikdabang.com/wp-content/uploads/2017/05/소세지빵-450x588.png",
        engName: "SAUSAGE BREAD",
        text: ["소시지에 치즈를 듬뿍 얹고 옥수수까지 더한 소세지빵", " "],
        best: true,
        ingredient: true,
        gram: 192.5,
        ingredientValue: [0, 500, 679, 1, 11, 19],
    },
    {
        menuName: "빽그램핫도그",
        link: "https://paikdabang.com/wp-content/uploads/2017/05/빽그램핫도그-450x588.png",
        engName: "100 g HOT DOG",
        text: ["육즙 가득 두툼한 100 g 소시지가 들어있어 간편한 식사 대용으로 GOOD!", "* 미판매 매장이 있을 수 있습니다."],
        best: false,
        ingredient: false,
    },
    {
        menuName: "맛카롱(순우유)",
        link: "https://paikdabang.com/wp-content/uploads/2021/12/맛카롱순우유-450x588.png",
        engName: "MILK MACARON",
        text: ["진한 우유 향과 맛을", "그대로 간직한 맛카롱"],
        best: true,
        ingredient: false,
    },
    {
        menuName: "맛카롱(초코크런치)",
        link: "https://paikdabang.com/wp-content/uploads/2021/12/맛카롱초코크런치-450x588.png",
        engName: "CHOCOLATE CRUNCH MACARON ",
        text: ["입안 가득한 달달함!", "달콤 폭발 초코 맛카롱"],
        best: true,
        ingredient: false,
    },
    {
        menuName: "맛카롱(딸기크런치)",
        link: "https://paikdabang.com/wp-content/uploads/2021/12/맛카롱딸기크런치-450x588.png",
        engName: "STRAWBERRY CRUNCH MACRON ",
        text: ["자꾸자꾸 생각나는", "상큼달콤 딸기 맛카롱"],
        best: true,
        ingredient: false,
    },
];
const ingredientName = ["카페인 (mg)", "칼로리 (kcal)", "나트륨 (mg)", "당류 (g)", "포화지방 (g)", "단백질 (g)"];
const ItemsCnt = menuData.length; // 전체 메뉴 개수
let slideItemNum = 0; // best 메뉴 슬라이드 항목의 index

// 1. best 메뉴 슬라이드에 요소 생성
const slide = document.querySelector(".swiper-wrapper"); // best 메뉴 슬라이드 감싸고있는 요소 가져오기

// 전체 메뉴 개수만큼 반복하며
for (let i = 0; i < ItemsCnt; i++) {
    // 전체 메뉴 중 best 메뉴만 슬라이드 메뉴로 생성
    // 즉, menuData의 각 요소 중, "best" key의 value가 true인 경우만
    if (menuData[i]["best"]) {
        // (1) 각각의 항목 요소 생성
        // 요소.innerHTML -> 해당 요소의 내부 HTML
        slide.innerHTML += `<div class="swiper-slide"></div>`; // ■

        // (2) 처음 보이는 기본 요소(이미지, 메뉴명, BEST 아이콘) 생성
        // 요소.children -> 해당 요소의 자식 요소 객체 배열
        let slideItem = slide.children[slideItemNum]; // 위 ■에서 생성한 div.swiper-slide 요소 가져오기
        slideItemNum++;
        slideItem.innerHTML += `<img src="${menuData[i]["link"]}" alt="" />`;
        slideItem.innerHTML += `<p class="best-tit">${menuData[i]["menuName"]}</p>`;
        slideItem.innerHTML += `<span class="best-icon">best</span>`;
        slideItem.innerHTML += `<div class="info"></div>`; // ◆

        // (3) 클릭 시 나타나는 설명 요소 생성
        let menuInfo = slideItem.children[3]; // 위 ◆에서 생성한 div.info 요소 가져오기
        menuInfo.innerHTML += `<button class="close-btn" type="button"></button>`;
        menuInfo.innerHTML += `<h3 class="menu-tit1">${menuData[i]["menuName"]}</h3>`;
        menuInfo.innerHTML += `<div class="menu-tit2">${menuData[i]["engName"]}</div>`;
        menuInfo.innerHTML += `<p class="txt">${menuData[i]["text"][0]}<br />${menuData[i]["text"][1]}</p>`;
        menuInfo.innerHTML += `<div class="ingredient-table-wrap"></div>`; // ▲
        menuInfo.innerHTML += `<p class="msg">(매장 상황에 따라 판매하지 않을 수 있습니다.)</p>`;

        // menuData의 각 요소 중, "ingredient" key의 value가 true인 경우만
        if (menuData[i]["ingredient"]) {
            // (4-1) 설명 내용에 성분 테이블 생성
            let ingreTable = menuInfo.children[4]; // 위 ▲에서 생성한 div.ingredient-table-wrap 요소 가져오기
            ingreTable.innerHTML += `<p>※ 1회 제공량 기준 : ${menuData[i]["gram"]}g</p>`;
            ingreTable.innerHTML += `<ul class="ingredient-table"></ul>`; // ◈

            // (4-2) 테이블 내용(성분) 생성
            let ingreContents = ingreTable.children[1]; // 위 ◈에서 생성한 ul.ingredient-table 요소 가져오기
            // ul 안에 li 6개 만들기
            // 각 li 안에는 div 2개 (ex. 카페인 154 / 이런식으로)
            for (let j = 0; j < ingredientName.length; j++) {
                ingreContents.innerHTML += `<li><div>${ingredientName[j]}</div><div>${menuData[i]["ingredientValue"][j]}</div></li>`;
            }
        }
    }
}

// 2. 메뉴 테이블에 요소 생성
const table = document.querySelector(".table-wrapper"); // 메뉴 테이블 감싸고있는 요소 가져오기

for (let i = 0; i < ItemsCnt; i++) {
    // (1) 각각의 항목 요소 생성
    table.innerHTML += `<li></li>`; // ■

    // (2) 처음 보이는 기본 요소(이미지, 메뉴명) 생성
    let tableItem = table.children[i]; // ■
    tableItem.innerHTML += `<img src="${menuData[i]["link"]}" alt="" />`;
    tableItem.innerHTML += `<p>${menuData[i]["menuName"]}</p>`;
    tableItem.innerHTML += `<div class="info"></div>`; // ◆

    // (3) 클릭 시 나타나는 설명 요소 생성
    menuInfo = tableItem.children[2]; // ◆
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

// 3. 슬라이드 이미지 클릭 시 설명 띄우기
const slideItems = document.querySelectorAll(".swiper-slide"); // 슬라이드의 항목들 가져오기
const tableItems = document.querySelectorAll(".table-wrapper > li"); // 테이블의 항목들 가져오기

slideItems.forEach((elem) => {
    elem.addEventListener("click", () => {
        let info = elem.children[3]; // 설명 요소 가져오기(슬라이드 항목의 4번째 자식요소인 div.info)

        // 설명 띄워져 있다면
        // (설명 요소의 calss 속성에 class="info show" 이런식으로 show가 있다면)
        if (info.classList.contains("show")) {
            info.classList.remove("show"); // class 속성의 값에서 show 제거
        }
        // 설명 띄워져 있지 않다면
        // (설명 요소의 calss 속성에 class="info" 이런식으로 show가 없다면)
        else {
            // 먼저 "모든" 슬라이드 설명 요소 & "모든" 테이블 설명 요소의 class 속성값에서 show 제거
            // (다른 항목 클릭했을 때 이전에 열려있던 설명창은 닫기 위해서)
            slideItems.forEach((i) => i.children[3].classList.remove("show"));
            tableItems.forEach((i) => i.children[2].classList.remove("show"));
            info.classList.add("show"); // 그 다음에 "클릭된" 슬라이드 설명 요소의 class 속성값에 show 추가
        }
    });
});

// 4. 슬라이드 스와이퍼
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

// 5. 테이블 메뉴 이미지 클릭 시 설명 띄우기
tableItems.forEach((elem) => {
    elem.addEventListener("click", () => {
        var info = elem.children[2]; // 설명 요소 가져오기(테이블 항목의 3번째 자식요소인 div.info)

        // 설명 띄워져 있다면
        // (설명 요소의 calss 속성에 class="info show" 이런식으로 show가 있다면)
        if (info.classList.contains("show")) {
            info.classList.remove("show"); // class 속성의 값에서 show 제거
        }
        // 설명 띄워져 있지 않다면
        // (설명 요소의 calss 속성에 class="info" 이런식으로 show가 없다면)
        else {
            // 먼저 "모든" 슬라이드 설명 요소 & "모든" 테이블 설명 요소의 class 속성값에서 show 제거
            // (다른 항목 클릭했을 때 이전에 열려있던 설명창은 닫기 위해서)
            slideItems.forEach((i) => i.children[3].classList.remove("show"));
            tableItems.forEach((i) => i.children[2].classList.remove("show"));
            info.classList.add("show"); // 그 다음에 "클릭된" 테이블 설명 요소의 class 속성값에 show 추가
        }
    });
});
