class Tracker {
    constructor(name, initiativeCount, lifePoints) {
        this._name = name
        this._initiativeCount = Number(initiativeCount)
        this._lifePoints = Number(lifePoints)
        this._isTurnTracker = false
        this._isDead = false
    }

    changeTurnTracker() {
        this._isTurnTracker = !this._isTurnTracker
    }

    killTracker() {
        this._isDead = !this._isDead
    }

    takeDamage() {
        this._lifePoints -= 1
        if (this._lifePoints <= 0 && this._isDead == false) this.killTracker()
    }

    healDamage() {
        this._lifePoints += 1
        if (this._lifePoints >= 1 && this._isDead == true) this.killTracker()
    }
}