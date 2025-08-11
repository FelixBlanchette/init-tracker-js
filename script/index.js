


let addTrackerOnClick = (nameInput, initCount, lifePoints) => {
    const t = new Tracker(nameInput, initCount, lifePoints, false, false)
    // addto tracker list
}

document.getElementById("trackerForm").addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    const initCount = document.getElementById("init").value
    const lifePoints = document.getElementById("lp").value

    console.log(`Add a tracker : {${name}, Initiative:${initCount}, LifePoints:${lifePoints}}`)
    const t = addTrackerOnClick(name, initCount, lifePoints)
    if (t != null) alert("Tracker created!")
})