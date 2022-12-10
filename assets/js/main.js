// Calculates height of each flex item cell in rotate-text

const rotateTextFlex = document.querySelector(".rotate-text")
const span = rotateTextFlex.querySelector("span")

const observer = new ResizeObserver((entries) => {
    const height = entries[0].contentRect.height;
    document.documentElement.style.setProperty('--rotate-text-height', height + "px")
    }
)

observer.observe(span)
console.log("hello world")


