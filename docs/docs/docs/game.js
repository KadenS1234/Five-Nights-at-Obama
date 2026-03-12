let hour = 12
let obamaDistance = 5
let doorClosed = false

function updateStatus() {
    document.getElementById("status").innerText =
        "Time: " + hour + " AM | Obama distance: " + obamaDistance
}

function checkCamera() {

    if (obamaDistance > 0) {
        obamaDistance--
    }

    if (obamaDistance == 0 && !doorClosed) {
        loseGame()
    }

    updateStatus()
}

function closeDoor() {
    doorClosed = true
    document.getElementById("status").innerText = "Door Closed!"
}

function gameLoop() {

    hour++

    if (hour == 6) {
        winGame()
    }

    if (!doorClosed && Math.random() < 0.4) {
        obamaDistance--
    }

    if (obamaDistance <= 0 && !doorClosed) {
        loseGame()
    }

    updateStatus()

}

function loseGame() {
    alert("Obama got you!")
    location.reload()
}

function winGame() {
    alert("You survived the night!")
    location.reload()
}

setInterval(gameLoop, 5000)
