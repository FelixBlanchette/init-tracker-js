


let addTrackerOnClick = (nameInput, initCount, lifePoints) => {
    const t = new Tracker(nameInput, initCount, lifePoints, false, false)
    // addto tracker list
    return t
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