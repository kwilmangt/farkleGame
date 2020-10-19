
let rollButton = document.getElementById('roll')
let score1 = document.getElementById('score1')
let roll2Button = document.getElementById('roll2')
let roll3Button = document.getElementById('roll3')
let totalScore = 0
let finalTotalScore = 0
let playerScoreEl = document.getElementById('playerScore')
let aScore = 0
let bScore = 0
let cScore = 0
let dScore = 0
let eScore = 0
let fScore = 0
let total1 = 0
let total2 = 0
let total3 = 0
let total4 = 0
let total5 = 0
let total6 = 0
let pairCount = 0
let tripleCount = 0
let finishButton = document.getElementById('finish')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function playerRoll () {
    rollButton.classList.add('remove')
    roll2Button.classList.remove('remove')
    finishButton.classList.remove('remove')
    aDice1.classList.add('remove')
    aDice2.classList.add('remove')
    aDice3.classList.add('remove')
    aDice4.classList.add('remove')
    aDice5.classList.add('remove')
    aDice6.classList.add('remove')
    bDice1.classList.add('remove')
    bDice2.classList.add('remove')
    bDice3.classList.add('remove')
    bDice4.classList.add('remove')
    bDice5.classList.add('remove')
    bDice6.classList.add('remove')
    cDice1.classList.add('remove')
    cDice2.classList.add('remove')
    cDice3.classList.add('remove')
    cDice4.classList.add('remove')
    cDice5.classList.add('remove')
    cDice6.classList.add('remove')
    dDice1.classList.add('remove')
    dDice2.classList.add('remove')
    dDice3.classList.add('remove')
    dDice4.classList.add('remove')
    dDice5.classList.add('remove')
    dDice6.classList.add('remove')    
    eDice1.classList.add('remove')
    eDice2.classList.add('remove')
    eDice3.classList.add('remove')
    eDice4.classList.add('remove')
    eDice5.classList.add('remove')
    eDice6.classList.add('remove')
    fDice1.classList.add('remove')
    fDice2.classList.add('remove')
    fDice3.classList.add('remove')
    fDice4.classList.add('remove')
    fDice5.classList.add('remove')
    fDice6.classList.add('remove')
     a= getRandomInt(6) + 1
     b= getRandomInt(6) + 1
     c= getRandomInt(6) + 1
     d= getRandomInt(6) + 1
     e= getRandomInt(6) + 1
     f= getRandomInt(6) + 1
     aa= getRandomInt(6) + 1
     bb= getRandomInt(6) + 1
     cc= getRandomInt(6) + 1
     dd= getRandomInt(6) + 1
     ee= getRandomInt(6) + 1
     ff= getRandomInt(6) + 1
     aaa= getRandomInt(6) + 1
     bbb= getRandomInt(6) + 1
     ccc= getRandomInt(6) + 1
     ddd= getRandomInt(6) + 1
     eee= getRandomInt(6) + 1
     fff= getRandomInt(6) + 1
if (a === 1) {
    aDice1.classList.remove('remove')
}
if (a === 2) {
    aDice2.classList.remove('remove')
}
if (a === 3) {
    aDice3.classList.remove('remove')
}
if (a === 4) {
    aDice4.classList.remove('remove')
}
if (a === 5) {
    aDice5.classList.remove('remove')
}
if (a === 6) {
    aDice6.classList.remove('remove')
}
if (b === 1) {
    bDice1.classList.remove('remove')
}
if (b === 2) {
    bDice2.classList.remove('remove')
}
if (b === 3) {
    bDice3.classList.remove('remove')
}
if (b === 4) {
    bDice4.classList.remove('remove')
}
if (b === 5) {
    bDice5.classList.remove('remove')
}
if (b === 6) {
    bDice6.classList.remove('remove')
}
if (c === 1) {
    cDice1.classList.remove('remove')
}
if (c === 2) {
    cDice2.classList.remove('remove')
}
if (c === 3) {
    cDice3.classList.remove('remove')
}
if (c === 4) {
    cDice4.classList.remove('remove')
}
if (c === 5) {
    cDice5.classList.remove('remove')
}
if (c === 6) {
    cDice6.classList.remove('remove')
}
if (d === 1) {
    dDice1.classList.remove('remove')
}
if (d === 2) {
    dDice2.classList.remove('remove')
}
if (d === 3) {
    dDice3.classList.remove('remove')
}
if (d === 4) {
    dDice4.classList.remove('remove')
}
if (d === 5) {
    dDice5.classList.remove('remove')
}
if (d === 6) {
    dDice6.classList.remove('remove')
}
if (e === 1) {
    eDice1.classList.remove('remove')
}
if (e === 2) {
    eDice2.classList.remove('remove')
}
if (e === 3) {
    eDice3.classList.remove('remove')
}
if (e === 4) {
    eDice4.classList.remove('remove')
}
if (e === 5) {
    eDice5.classList.remove('remove')
}
if (e === 6) {
    eDice6.classList.remove('remove')
}
if (f === 1) {
    fDice1.classList.remove('remove')
}
if (f === 2) {
    fDice2.classList.remove('remove')
}
if (f === 3) {
    fDice3.classList.remove('remove')
}
if (f === 4) {
    fDice4.classList.remove('remove')
}
if (f === 5) {
    fDice5.classList.remove('remove')
}
if (f === 6) {
    fDice6.classList.remove('remove')
}
}
rollButton.addEventListener('click', playerRoll)



function keepDiceA () {
    aa=a
    aaa=aa
    if (a === 1){
        total1 = total1 + 1
    }
    if (a === 2){
        total2 = total2 + 1
    }
    if (a === 3){
        total3 = total3 + 1
    }
    if (a === 4){
        total4 = total4 + 1
    }
    if (a===5) {
        total5 = total5 + 1
    }
    if (a === 6){
        total6 = total6 + 1
    }
}
aDice1.addEventListener('click', keepDiceA)
aDice2.addEventListener('click', keepDiceA)
aDice3.addEventListener('click', keepDiceA)
aDice4.addEventListener('click', keepDiceA)
aDice5.addEventListener('click', keepDiceA)
aDice6.addEventListener('click', keepDiceA)



function keepDiceB () {
bb=b
bbb=bb
if (b === 1){
    total1 = total1 + 1
}
if (b === 2){
    total2 = total2 + 1
}
if (b === 3){
    total3 = total3 + 1
}
if (b === 4){
    total4 = total4 + 1
}
if (b===5) {
    total5 = total5 + 1
}
if (b === 6){
    total6 = total6 + 1
}
}
bDice1.addEventListener('click', keepDiceB)
bDice2.addEventListener('click', keepDiceB)
bDice3.addEventListener('click', keepDiceB)
bDice4.addEventListener('click', keepDiceB)
bDice5.addEventListener('click', keepDiceB)
bDice6.addEventListener('click', keepDiceB)


function keepDiceC () {
   cc=c
   ccc=cc
   if (c === 1){
    total1 = total1 + 1
}
if (c === 2){
    total2 = total2 + 1
}
if (c === 3){
    total3 = total3 + 1
}
if (c === 4){
    total4 = total4 + 1
}
if (c===5) {
    total5 = total5 + 1
}
if (c === 6){
    total6 = total6 + 1
}
}
cDice1.addEventListener('click', keepDiceC)
cDice2.addEventListener('click', keepDiceC)
cDice3.addEventListener('click', keepDiceC)
cDice4.addEventListener('click', keepDiceC)
cDice5.addEventListener('click', keepDiceC)
cDice6.addEventListener('click', keepDiceC)


function keepDiceD () {
      dd=d 
      ddd=d
      if (d === 1){
        total1 = total1 + 1
    }
    if (d === 2){
        total2 = total2 + 1
    }
    if (d === 3){
        total3 = total3 + 1
    }
    if (d === 4){
        total4 = total4 + 1
    }
    if (d===5) {
        total5 = total5 + 1
    }
    if (d === 6){
        total6 = total6 + 1
    }
}
dDice1.addEventListener('click', keepDiceD)
dDice2.addEventListener('click', keepDiceD)
dDice3.addEventListener('click', keepDiceD)
dDice4.addEventListener('click', keepDiceD)
dDice5.addEventListener('click', keepDiceD)
dDice6.addEventListener('click', keepDiceD)

function keepDiceE () {
        ee=e 
        eee= ee
        if (e === 1){
            total1 = total1 + 1
        }
        if (e === 2){
            total2 = total2 + 1
        }
        if (e === 3){
            total3 = total3 + 1
        }
        if (e === 4){
            total4 = total4 + 1
        }
        if (e===5) {
            total5 = total5 + 1
        }
        if (e === 6){
            total6 = total6 + 1
        }
}
eDice1.addEventListener('click', keepDiceE)
eDice2.addEventListener('click', keepDiceE)
eDice3.addEventListener('click', keepDiceE)
eDice4.addEventListener('click', keepDiceE)
eDice5.addEventListener('click', keepDiceE)
eDice6.addEventListener('click', keepDiceE)

function keepDiceF () {
      ff=f
      fff=ff
    if (f === 1){
        total1 = total1 + 1
    }
    if (f === 2){
        total2 = total2 + 1
    }
    if (f === 3){
        total3 = total3 + 1
    }
    if (f === 4){
        total4 = total4 + 1
    }
    if (f===5) {
        total5 = total5 + 1
    }
    if (f === 6){
        total6 = total6 + 1
    }
}
fDice1.addEventListener('click', keepDiceF)
fDice2.addEventListener('click', keepDiceF)
fDice3.addEventListener('click', keepDiceF)
fDice4.addEventListener('click', keepDiceF)
fDice5.addEventListener('click', keepDiceF)
fDice6.addEventListener('click', keepDiceF)


roll2Button.addEventListener('click', Roll2)
function Roll2 () {
    roll3Button.classList.remove('remove')
    roll2Button.classList.add('remove')
a=aa
b=bb
c=cc
d=dd
e=ee
f=ff
    aDice1.classList.add('remove')
    aDice2.classList.add('remove')
    aDice3.classList.add('remove')
    aDice4.classList.add('remove')
    aDice5.classList.add('remove')
    aDice6.classList.add('remove')
    bDice1.classList.add('remove')
    bDice2.classList.add('remove')
    bDice3.classList.add('remove')
    bDice4.classList.add('remove')
    bDice5.classList.add('remove')
    bDice6.classList.add('remove')
    cDice1.classList.add('remove')
    cDice2.classList.add('remove')
    cDice3.classList.add('remove')
    cDice4.classList.add('remove')
    cDice5.classList.add('remove')
    cDice6.classList.add('remove')
    dDice1.classList.add('remove')
    dDice2.classList.add('remove')
    dDice3.classList.add('remove')
    dDice4.classList.add('remove')
    dDice5.classList.add('remove')
    dDice6.classList.add('remove')    
    eDice1.classList.add('remove')
    eDice2.classList.add('remove')
    eDice3.classList.add('remove')
    eDice4.classList.add('remove')
    eDice5.classList.add('remove')
    eDice6.classList.add('remove')
    fDice1.classList.add('remove')
    fDice2.classList.add('remove')
    fDice3.classList.add('remove')
    fDice4.classList.add('remove')
    fDice5.classList.add('remove')
    fDice6.classList.add('remove')
if (a === 1) {
    aDice1.classList.remove('remove')
}
if (a === 2) {
    aDice2.classList.remove('remove')
}
if (a === 3) {
    aDice3.classList.remove('remove')
}
if (a === 4) {
    aDice4.classList.remove('remove')
}
if (a === 5) {
    aDice5.classList.remove('remove')
}
if (a === 6) {
    aDice6.classList.remove('remove')
}
if (b === 1) {
    bDice1.classList.remove('remove')
}
if (b === 2) {
    bDice2.classList.remove('remove')
}
if (b === 3) {
    bDice3.classList.remove('remove')
}
if (b === 4) {
    bDice4.classList.remove('remove')
}
if (b === 5) {
    bDice5.classList.remove('remove')
}
if (b === 6) {
    bDice6.classList.remove('remove')
}
if (c === 1) {
    cDice1.classList.remove('remove')
}
if (c === 2) {
    cDice2.classList.remove('remove')
}
if (c === 3) {
    cDice3.classList.remove('remove')
}
if (c === 4) {
    cDice4.classList.remove('remove')
}
if (c === 5) {
    cDice5.classList.remove('remove')
}
if (c === 6) {
    cDice6.classList.remove('remove')
}
if (d === 1) {
    dDice1.classList.remove('remove')
}
if (d === 2) {
    dDice2.classList.remove('remove')
}
if (d === 3) {
    dDice3.classList.remove('remove')
}
if (d === 4) {
    dDice4.classList.remove('remove')
}
if (d === 5) {
    dDice5.classList.remove('remove')
}
if (d === 6) {
    dDice6.classList.remove('remove')
}
if (e === 1) {
    eDice1.classList.remove('remove')
}
if (e === 2) {
    eDice2.classList.remove('remove')
}
if (e === 3) {
    eDice3.classList.remove('remove')
}
if (e === 4) {
    eDice4.classList.remove('remove')
}
if (e === 5) {
    eDice5.classList.remove('remove')
}
if (e === 6) {
    eDice6.classList.remove('remove')
}
if (f === 1) {
    fDice1.classList.remove('remove')
}
if (f === 2) {
    fDice2.classList.remove('remove')
}
if (f === 3) {
    fDice3.classList.remove('remove')
}
if (f === 4) {
    fDice4.classList.remove('remove')
}
if (f === 5) {
    fDice5.classList.remove('remove')
}
if (f === 6) {
    fDice6.classList.remove('remove')
}
}


roll3Button.addEventListener('click', Roll3)
function Roll3 () {
    roll3Button.classList.add('remove')

a=aaa
b=bbb
c=ccc
d=ddd
e=eee
f=fff
    aDice1.classList.add('remove')
    aDice2.classList.add('remove')
    aDice3.classList.add('remove')
    aDice4.classList.add('remove')
    aDice5.classList.add('remove')
    aDice6.classList.add('remove')
    bDice1.classList.add('remove')
    bDice2.classList.add('remove')
    bDice3.classList.add('remove')
    bDice4.classList.add('remove')
    bDice5.classList.add('remove')
    bDice6.classList.add('remove')
    cDice1.classList.add('remove')
    cDice2.classList.add('remove')
    cDice3.classList.add('remove')
    cDice4.classList.add('remove')
    cDice5.classList.add('remove')
    cDice6.classList.add('remove')
    dDice1.classList.add('remove')
    dDice2.classList.add('remove')
    dDice3.classList.add('remove')
    dDice4.classList.add('remove')
    dDice5.classList.add('remove')
    dDice6.classList.add('remove')    
    eDice1.classList.add('remove')
    eDice2.classList.add('remove')
    eDice3.classList.add('remove')
    eDice4.classList.add('remove')
    eDice5.classList.add('remove')
    eDice6.classList.add('remove')
    fDice1.classList.add('remove')
    fDice2.classList.add('remove')
    fDice3.classList.add('remove')
    fDice4.classList.add('remove')
    fDice5.classList.add('remove')
    fDice6.classList.add('remove')
if (a === 1) {
    aDice1.classList.remove('remove')
}
if (a === 2) {
    aDice2.classList.remove('remove')
}
if (a === 3) {
    aDice3.classList.remove('remove')
}
if (a === 4) {
    aDice4.classList.remove('remove')
}
if (a === 5) {
    aDice5.classList.remove('remove')
}
if (a === 6) {
    aDice6.classList.remove('remove')
}
if (b === 1) {
    bDice1.classList.remove('remove')
}
if (b === 2) {
    bDice2.classList.remove('remove')
}
if (b === 3) {
    bDice3.classList.remove('remove')
}
if (b === 4) {
    bDice4.classList.remove('remove')
}
if (b === 5) {
    bDice5.classList.remove('remove')
}
if (b === 6) {
    bDice6.classList.remove('remove')
}
if (c === 1) {
    cDice1.classList.remove('remove')
}
if (c === 2) {
    cDice2.classList.remove('remove')
}
if (c === 3) {
    cDice3.classList.remove('remove')
}
if (c === 4) {
    cDice4.classList.remove('remove')
}
if (c === 5) {
    cDice5.classList.remove('remove')
}
if (c === 6) {
    cDice6.classList.remove('remove')
}
if (d === 1) {
    dDice1.classList.remove('remove')
}
if (d === 2) {
    dDice2.classList.remove('remove')
}
if (d === 3) {
    dDice3.classList.remove('remove')
}
if (d === 4) {
    dDice4.classList.remove('remove')
}
if (d === 5) {
    dDice5.classList.remove('remove')
}
if (d === 6) {
    dDice6.classList.remove('remove')
}
if (e === 1) {
    eDice1.classList.remove('remove')
}
if (e === 2) {
    eDice2.classList.remove('remove')
}
if (e === 3) {
    eDice3.classList.remove('remove')
}
if (e === 4) {
    eDice4.classList.remove('remove')
}
if (e === 5) {
    eDice5.classList.remove('remove')
}
if (e === 6) {
    eDice6.classList.remove('remove')
}
if (f === 1) {
    fDice1.classList.remove('remove')
}
if (f === 2) {
    fDice2.classList.remove('remove')
}
if (f === 3) {
    fDice3.classList.remove('remove')
}
if (f === 4) {
    fDice4.classList.remove('remove')
}
if (f === 5) {
    fDice5.classList.remove('remove')
}
if (f === 6) {
    fDice6.classList.remove('remove')
}
}

finishButton.addEventListener('click', finishTurn)
function finishTurn () {
    if (total1 === 1) {
        totalScore = totalScore +100
    }
    if (total5 === 1) {
        totalScore = totalScore +50
    }

    if (total1 === 2){
        pairCount = pairCount + 1
    }
    if (total2 === 2) {
        pairCount = pairCount + 1
    }
    if (total3 === 2) {
        pairCount = pairCount + 1
    }
    if (total4 === 2) {
        pairCount = pairCount + 1
    }
    if (total5 === 2) {
        pairCount = pairCount + 1
    }
    if (total6 === 2) {
        pairCount = pairCount + 1
    }
    if (pairCount === 3) {
        totalScore= totalScore + 1500
    }

    if (total1 === 3) {
        totalScore= totalScore + 300
        tripleCount = tripleCount + 1 
    }
    if (total2 === 3) {
        totalScore= totalScore + 200
        tripleCount = tripleCount + 1
    }
    if (total3 === 3) {
        totalScore= totalScore + 300
        tripleCount = tripleCount + 1
    }
    if (total4 === 3) {
        totalScore= totalScore + 400
        tripleCount = tripleCount + 1
    }
    if (total5 === 3) {
        totalScore= totalScore + 350
        tripleCount = tripleCount + 1
    }
    if (total6 === 3) {
        totalScore= totalScore + 600
        tripleCount = tripleCount + 1
    }
if (tripleCount === 0){
    totalScore === totalScore + 2500
}
    if (total1 === 4){
        totalScore = totalScore + 1000
    }
    if (total2 === 4) {
        totalScore = totalScore + 1000
    }
    if (total3 === 4) {
        totalScore = totalScore + 1000
    }
    if (total4 === 4) {
        totalScore = totalScore + 1000
    }
    if (total5 === 4) {
        totalScore = totalScore + 1000
    }
    if (total6 === 4) {
        totalScore = totalScore + 1000
    }
    if (total1 === 5){
        totalScore = totalScore + 2000
    }
    if (total2 === 5) {
        totalScore = totalScore + 2000
    }
    if (total3 === 5) {
        totalScore = totalScore + 2000
    }
    if (total4 === 5) {
        totalScore = totalScore + 2000
    }
    if (total5 === 5) {
        totalScore = totalScore + 2000
    }
    if (total6 === 5) {
        totalScore = totalScore + 2000
    }

    if (total1 === 6){
        totalScore = totalScore + 3000
    }
    if (total2 === 6) {
        totalScore = totalScore + 3000
    }
    if (total3 === 6) {
        totalScore = totalScore + 3000
    }
    if (total4 === 6) {
        totalScore = totalScore + 3000
    }
    if (total5 === 6) {
        totalScore = totalScore + 3000
    }
    if (total6 === 6) {
        totalScore = totalScore + 3000
    }
finalTotalScore= totalScore+aScore+bScore+cScore+dScore+eScore+fScore

playerScoreEl.innerHTML = finalTotalScore
}
