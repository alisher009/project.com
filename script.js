// ------------------------------------Header----------------------------\\
let anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        let blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
// --------------------------------------END--------------------------------\\
let links = document.querySelectorAll('li')
links.forEach(l => {
    l.onclick = () => {
        for(let item of links) {
            item.classList.remove('active')
        }
        l.classList.add('active')
    }
})