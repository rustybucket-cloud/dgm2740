document.querySelector("#menuButton")
    .addEventListener("click", ({currentTarget}) => currentTarget.parentElement.classList.toggle("open"))