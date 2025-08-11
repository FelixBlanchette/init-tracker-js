
const trackerContainer = document.querySelector(".tracker-container")
let trackerList = []
let turnTracker = null

const addTrackerOnClick = (nameInput, initCount, lifePoints) => {
    const t = new Tracker(nameInput, initCount, lifePoints, false, false)
    console.log(t)
    trackerList.push(t)
    renderTracker()
    return t
}

const renderTracker = () => {
    trackerContainer.innerHTML = ""

    trackerList.forEach(tracker => {
        const card = document.createElement("div")
        card.classList.add("tracker-card")

        if (tracker._isTurnTracker) card.classList.add("turn")
        if (tracker._isDead) card.classList.add("dead")

        card.innerHTML = `
            <h3>${tracker._name}</h3>
            <p><strong>Initiative:</strong>${tracker._initiativeCount}</p>
            <p><strong>Life Points:</strong>${tracker._lifePoints}</p>
            `
        console.log(trackerContainer)
        trackerContainer.appendChild(card)
    })
}

const nextTurnOnClick = () => {
    if (turnTracker == null) {
        turnTracker = trackerList[0]
        trackerList[0].changeTurnTracker()
    }
}

document.getElementById("trackerForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const initCount = document.getElementById("init").value
    const lifePoints = document.getElementById("lp").value

    const t = addTrackerOnClick(name, initCount, lifePoints)
    console.log(t)
    if (t != null) alert("Tracker created!")
})