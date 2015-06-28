/* project items animations */
function scrollAndSlot() {
    var scroll = window.scrollY;
    var projectImg = document.getElementsByClassName('project-img');
    var projectDesc = document.getElementsByClassName('project-desc');

    /*console.log("Scroll: " + scroll);*/
    console.log("window width: " + window.innerWidth);

    if (scroll > 200) {
        animate(projectImg[0].children[0], projectDesc[0].children[0]);
    }

    if (scroll > 580) {
        animate(projectImg[1].children[0], projectDesc[1].children[0]);
    }

    if (scroll > 850) {
        animate(projectImg[2].children[0], projectDesc[2].children[0]);
    }
}

function animate(image, text) {
    image.style.webkitAnimationName = "imageSlotIn";
    image.style.webkitAnimationDuration = "1s";
    image.style.webkitAnimationTimingFunction = "ease-in-out";

    text.style.webkitAnimationName = "textSlotIn";
    text.style.webkitAnimationDuration = "1s";
    text.style.webkitAnimationTimingFunction = "ease-in-out";
}

/* navigatio bar toggles */
function toggleGameDevVisibility() {
    var gameDevTab = document.getElementById('game-dev-tab');
    var gameDev = document.getElementById('game-dev-project');

    var webDevTab = document.getElementById('web-dev-tab');
    var webDev = document.getElementById('web-dev-project');

    var aboutMeTab = document.getElementById('about-me-tab');
    var aboutMe = document.getElementById('about-me');

    if (gameDev.style.visibility == "hidden") {
        /*console.log("Hello");*/

        gameDev.style.visibility = "visible";
        gameDev.style.display = "block";
        if (gameDevTab.className != " tab-selected") {
            gameDevTab.className += " tab-selected";
        }

        webDev.style.visibility = "hidden";
        webDev.style.display = "none";
        webDevTab.className = "tab";

        aboutMe.style.visibility = "hidden";
        aboutMe.style.display = "none";
        aboutMeTab.className = "tab";
    }
}

function toggleWebDevVisibility() {
    var gameDevTab = document.getElementById('game-dev-tab');
    var gameDev = document.getElementById('game-dev-project');

    var webDevTab = document.getElementById('web-dev-tab');
    var webDev = document.getElementById('web-dev-project');

    var aboutMeTab = document.getElementById('about-me-tab');
    var aboutMe = document.getElementById('about-me');

    if (webDev.style.visibility == "hidden") {
        /*console.log("bye");*/

        webDev.style.visibility = "visible";
        webDev.style.display = "block";
        if (webDevTab.className != "tab tab-selected") {
            webDevTab.className += " tab-selected";
        }

        gameDev.style.visibility = "hidden";
        gameDev.style.display = "none";
        gameDevTab.className = "tab";

        aboutMe.style.visibility = "hidden";
        aboutMe.style.display = "none";
        aboutMeTab.className = "tab";
    }
}

function toggleAboutMeVisibility() {
    var gameDevTab = document.getElementById('game-dev-tab');
    var gameDev = document.getElementById('game-dev-project');

    var webDevTab = document.getElementById('web-dev-tab');
    var webDev = document.getElementById('web-dev-project');

    var aboutMeTab = document.getElementById('about-me-tab');
    var aboutMe = document.getElementById('about-me');

    if (aboutMe.style.visibility == "hidden") {
        /*console.log("bye");*/

        aboutMe.style.visibility = "visible";
        aboutMe.style.display = "block";
        if (aboutMeTab.className != "tab tab-selected") {
            aboutMeTab.className += " tab-selected";
        }

        gameDev.style.visibility = "hidden";
        gameDev.style.display = "none";
        gameDevTab.className = "tab";

        webDev.style.visibility = "hidden";
        webDev.style.display = "none";
        webDevTab.className = "tab";
    }
}
