let words = "CSS is super cool"; //add more words as needed

const ANIMATION_DURATION = 4000; // ms

//seperate eah character into it's own div
const character = words.split("").forEach((char, i) => {
    function createElement(offset) {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;
        return div;
    }

    document.getElementById("spiral").append(createElement(0));
    document.getElementById("spiral2").append(createElement(-1 * (ANIMATION_DURATION / 2)));

});