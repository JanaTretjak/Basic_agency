for (let i = 0; document.getElementsByClassName("hover").length; i++) {
    document.getElementsByClassName("hover")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("imgHover")[i].style.opacity = "1"
    })
    document.getElementsByClassName("hover")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("imgHover")[i].style.opacity = "0"
    })
}

function goBack() {
    window.history.back()
}
