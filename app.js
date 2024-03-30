let backImage = document.querySelector(".landing");
let leftFlip = document.querySelector(".left-click");
let rightFlip = document.querySelector(".right-click");
let bullets = document.querySelectorAll(".bullets li");
let design = document.querySelector(".design");

let chooseLi = document.querySelectorAll(".choose li");
let boxGalary = document.querySelectorAll(" .imgs-container .box.all");
let imageContain = document.querySelector(".portoflio .imgs-container");

let numChange = document.querySelectorAll(" .stats .number");
let statesSection = document.querySelector(" .stats ");

let skillsSection = document.querySelector(" .skills ");
let skillProg = document.querySelectorAll(" .skills .prog-holder .prog span");



let count = 1;

let photoArray = ["./images/Landing Photo/eHLODQnYO1KM5AjKf54WIf5L6uw.jpg", "./images/Landing Photo/wallpapersden.com_attack-on-titan-2-colossal-titan_7680x4320.jpg", "./images/Landing Photo/attack-on-titan-3.jpg"];

backImage.style.backgroundImage = `url("${photoArray[count]}")`;
bullets[count].classList.add("active");


leftFlip.addEventListener("click", function () {
    if (count === 0) {
        count = photoArray.length - 1;
        backImage.style.backgroundImage = `url("${photoArray[count]}")`;
        bullets.forEach(el => {
            el.classList.remove("active");
        });
        bullets[count].classList.add("active");
    } else {
        count--;
        backImage.style.backgroundImage = `url("${photoArray[count]}")`;
        bullets.forEach(el => {
            el.classList.remove("active");
        });
        bullets[count].classList.add("active");
    }
});

rightFlip.addEventListener("click", function () {

    if (count === photoArray.length - 1) {
        count = 0;
        backImage.style.backgroundImage = `url("${photoArray[count]}")`;

        bullets.forEach(el => {
            el.classList.remove("active");
        });
        bullets[count].classList.add("active");

    } else {
        count++;
        backImage.style.backgroundImage = `url("${photoArray[count]}")`;

        bullets.forEach(el => {
            el.classList.remove("active");
        });
        bullets[count].classList.add("active");

    }
});

setInterval(() => {
    if (count === photoArray.length - 1) {
        count = 0;
        backImage.style.backgroundImage = `url("${photoArray[count]}")`;

        // Design BackGround Image
        design.style.backgroundImage = `url("${photoArray[count]}")`;

        bullets.forEach(el => {
            el.classList.remove("active");
        });
        bullets[count].classList.add("active");

    } else {
        count++;
        backImage.style.backgroundImage = `url("${photoArray[count]}")`;

        // Design BackGround Image
        design.style.backgroundImage = `url("${photoArray[count]}")`;


        bullets.forEach(el => {
            el.classList.remove("active");
        });
        bullets[count].classList.add("active");

    }

}, 10000);

// Design BackGround Image
design.style.backgroundImage = `url("${photoArray[count]}")`;

chooseLi.forEach(el => {

    el.addEventListener('click', function () {

        chooseLi.forEach(e => e.classList.remove("active"));

        el.classList.add("active");
    })


    // filter galary
    el.addEventListener("click", function () {

        if (el.dataset.choose === ".all") {
            boxGalary.forEach(ele => ele.style.display = "block");

            imageContain.style = "grid-template-columns: repeat(4, 1fr);";
        } else if (el.dataset.choose === ".app") {

            boxGalary.forEach(ele => {
                ele.style.display = "none";

                document.querySelectorAll(el.dataset.choose).forEach(el => el.style = "display:block; opacity: 1");

            });

            imageContain.style = "grid-template-columns: repeat(2, 1fr); gap: 10px;";
        } else if (el.dataset.choose === ".photo") {

            boxGalary.forEach(ele => {
                ele.style.display = "none";

                document.querySelectorAll(el.dataset.choose).forEach(el => el.style = "display:block");
            });

            imageContain.style = "grid-template-columns: repeat(2, 1fr); gap: 10px";

        } else if (el.dataset.choose === ".web") {

            boxGalary.forEach(ele => {
                ele.style.display = "none";

                document.querySelectorAll(el.dataset.choose).forEach(el => el.style = "display:block");
            });

            imageContain.style = "grid-template-columns: repeat(2, 1fr); gap: 10px";

        } else if (el.dataset.choose === ".print") {

            boxGalary.forEach(ele => {
                ele.style.display = "none";

                document.querySelectorAll(el.dataset.choose).forEach(el => el.style = "display:block");
            });

            imageContain.style = "grid-template-columns: repeat(2, 1fr); gap: 10px";

        }
    })
});

let increaseStart = false;

window.onscroll = function () {

    if (window.scrollY >= statesSection.offsetTop - 400) {
        if (increaseStart === false) {
            numChange.forEach(el => {
                let intervalCounter = setInterval(() => {
                    el.textContent++;

                    if (el.textContent == el.dataset.num) {
                        clearInterval(intervalCounter);
                    }
                }, 2000 / el.dataset.num);

            })
        }
        increaseStart = true;
    }

    if (window.scrollY >= skillsSection.offsetTop - 300) {
        skillProg.forEach(el => {

            el.style.width = el.dataset.progress;
        })
    }
};


