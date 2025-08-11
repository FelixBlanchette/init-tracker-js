class Tracker {
    constructor(name, initiativeCount, lifePoints, isTurnTracker, isDead) {
        this._name = name
        this._initiativeCount = initiativeCount
        this._lifePoints = lifePoints
        this._isTurnTracker = isTurnTracker
        this._isDead = isDead
    }

    changeTurnTracker() {
        this._isTurnTracker = !this._isTurnTracker
    }

    killTracker() {
        this._isDead = !this._isDead
    }

    takeDamage() {
        this._lifePoints -= 1
    }

    healDamage() {
        this._lifePoints += 1
    }
}