function changeNavState() {
    document.querySelectorAll('nav button').forEach(button => {
        button.classList.toggle('hidden')
    })
    document.querySelector('nav ul').classList.toggle('open')
}
document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', changeNavState)
})