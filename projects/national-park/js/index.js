// show and hide menu
document.querySelector('#menuButton').addEventListener("click", () => document.querySelector('nav ul').classList.toggle("hidden"))

// expand cards
document.querySelectorAll('.learn-more').forEach((button) => {
    button.addEventListener("click", ({currentTarget}) => {
        let cardToExpand
        switch (currentTarget.id) {
            case "learn-more-bighorn":
                cardToExpand = "bighorn"
                break
            case "learn-more-condor":
                cardToExpand = "condor"
                break
            case "learn-more-tarantula":
                cardToExpand = "tarantula"
                break
        }
        document.querySelector('.cards').style.display = "block"
        document.querySelector(`.${cardToExpand}`).classList.add("expanded")
        document.querySelectorAll('.card').forEach(card => {
            if (!card.classList.contains(cardToExpand)) card.classList.add("hidden")
        })
    })
})

document.querySelectorAll(".hide").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector('.cards').style.display = "grid"
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove("hidden")
            card.classList.remove("expanded")
        })
        document.querySelectorAll('.more-info').forEach(section => section.classList.add("hidden"))
    })
})