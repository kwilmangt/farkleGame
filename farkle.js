
let rollButton = document.getElementById('roll')
let roll2Button = document.getElementById('roll2')
let roll3Button = document.getElementById('roll3')
let roll4Button = document.getElementById('roll4')
let finalTotalScore = 0
let playerScoreEl = document.getElementById('playerScore')
let win1El= document.getElementById('win1')
let finishButton = document.getElementById('finish')

let rollButton2 = document.getElementById('2roll')
let roll2Button2 = document.getElementById('2roll2')
let roll3Button2 = document.getElementById('2roll3')
let roll4Button2 = document.getElementById('2roll4')
let finalTotalScore2 = 0
let player2ScoreEl = document.getElementById('player2Score')
let win2El= document.getElementById('win2')
let finishButton2 = document.getElementById('finish2')

let totalScore = 0
let total1 = 0
let total2 = 0
let total3 = 0
let total4 = 0
let total5 = 0
let total6 = 0
let pairCount = 0
let tripleCount = 0

let aDice1 = document.getElementById('aDice1')
let aDice2 = document.getElementById('aDice2')
let aDice3 = document.getElementById('aDice3')
let aDice4 = document.getElementById('aDice4')
let aDice5 = document.getElementById('aDice5')
let aDice6 = document.getElementById('aDice6')
let bDice1 = document.getElementById('bDice1')
let bDice2 = document.getElementById('bDice2')
let bDice3 = document.getElementById('bDice3')
let bDice4 = document.getElementById('bDice4')
let bDice5 = document.getElementById('bDice5')
let bDice6 = document.getElementById('bDice6')
let cDice1 = document.getElementById('cDice1')
let cDice2 = document.getElementById('cDice2')
let cDice3 = document.getElementById('cDice3')
let cDice4 = document.getElementById('cDice4')
let cDice5 = document.getElementById('cDice5')
let cDice6 = document.getElementById('cDice6')
let dDice1 = document.getElementById('dDice1')
let dDice2 = document.getElementById('dDice2')
let dDice3 = document.getElementById('dDice3')
let dDice4 = document.getElementById('dDice4')
let dDice5 = document.getElementById('dDice5')
let dDice6 = document.getElementById('dDice6')
let eDice1 = document.getElementById('eDice1')
let eDice2 = document.getElementById('eDice2')
let eDice3 = document.getElementById('eDice3')
let eDice4 = document.getElementById('eDice4')
let eDice5 = document.getElementById('eDice5')
let eDice6 = document.getElementById('eDice6')
let fDice1 = document.getElementById('fDice1')
let fDice2 = document.getElementById('fDice2')
let fDice3 = document.getElementById('fDice3')
let fDice4 = document.getElementById('fDice4')
let fDice5 = document.getElementById('fDice5')
let fDice6 = document.getElementById('fDice6')

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


function keepDiceA () {
    aa=a
    aaa=aa
    aaaa=aaa
    if (a === 1){
        total1 = total1 + 1
        aDice1.classList.add('select')
    }
    if (a === 2){
        total2 = total2 + 1
        aDice2.classList.add('select')
    }
    if (a === 3){
        total3 = total3 + 1
        aDice3.classList.add('select')
    }
    if (a === 4){
        total4 = total4 + 1
        aDice4.classList.add('select')
    }
    if (a===5) {
        total5 = total5 + 1
        aDice5.classList.add('select')
    }
    if (a === 6){
        total6 = total6 + 1
        aDice6.classList.add('select')
    }
}
aDice1.addEventListener('click', keepDiceA)
aDice2.addEventListener('click', keepDiceA)
aDice3.addEventListener('click', keepDiceA)
aDice4.addEventListener('click', keepDiceA)
aDice5.addEventListener('click', keepDiceA)
aDice6.addEventListener('click', keepDiceA)



function keepDiceB () {
bb = b
bbb = bb
bbbb = bbb
if (b === 1){
    total1 = total1 + 1
    aDice1.classList.add('select')
}
if (b === 2){
    total2 = total2 + 1
    bDice2.classList.add('select')
}
if (b === 3){
    total3 = total3 + 1
    bDice3.classList.add('select')
}
if (b === 4){
    total4 = total4 + 1
    bDice4.classList.add('select')
}
if (b===5) {
    total5 = total5 + 1
    bDice5.classList.add('select')
}
if (b === 6){
    total6 = total6 + 1
    bDice6.classList.add('select')
}
}
bDice1.addEventListener('click', keepDiceB)
bDice2.addEventListener('click', keepDiceB)
bDice3.addEventListener('click', keepDiceB)
bDice4.addEventListener('click', keepDiceB)
bDice5.addEventListener('click', keepDiceB)
bDice6.addEventListener('click', keepDiceB)


function keepDiceC () {
   cc = c
   ccc = cc
   cccc = ccc
if (c === 1){
    total1 = total1 + 1
    cDice1.classList.add('select')
}
if (c === 2){
    total2 = total2 + 1
    cDice2.classList.add('select')
}
if (c === 3){
    total3 = total3 + 1
    cDice3.classList.add('select')
}
if (c === 4){
    total4 = total4 + 1
    cDice4.classList.add('select')
}
if (c===5) {
    total5 = total5 + 1
    cDice5.classList.add('select')
}
if (c === 6){
    total6 = total6 + 1
    cDice6.classList.add('select')
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
      ddd=dd
      dddd=ddd
    if (d === 1){
        total1 = total1 + 1
        dDice1.classList.add('select')
    }
    if (d === 2){
        total2 = total2 + 1
        dDice2.classList.add('select')
    }
    if (d === 3){
        total3 = total3 + 1
        dDice3.classList.add('select')
    }
    if (d === 4){
        total4 = total4 + 1
        dDice4.classList.add('select')
    }
    if (d===5) {
        total5 = total5 + 1
        dDice5.classList.add('select')
    }
    if (d === 6){
        total6 = total6 + 1
        dDice6.classList.add('select')
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
        eeee = eee
        if (e === 1){
            total1 = total1 + 1
            eDice1.classList.add('select')
        }
        if (e === 2){
            total2 = total2 + 1
            eDice2.classList.add('select')
        }
        if (e === 3){
            total3 = total3 + 1
            eDice3.classList.add('select')
        }
        if (e === 4){
            total4 = total4 + 1
            eDice4.classList.add('select')
        }
        if (e===5) {
            total5 = total5 + 1
            eDice5.classList.add('select')
        }
        if (e === 6){
            total6 = total6 + 1
            eDice6.classList.add('select')
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
      ffff=fff
    if (f === 1){
        total1 = total1 + 1
        fDice1.classList.add('select')
    }
    if (f === 2){
        total2 = total2 + 1
        fDice2.classList.add('select')
    }
    if (f === 3){
        total3 = total3 + 1
        fDice3.classList.add('select')
    }
    if (f === 4){
        total4 = total4 + 1
        fDice4.classList.add('select')
    }
    if (f===5) {
        total5 = total5 + 1
        fDice5.classList.add('select')
    }
    if (f === 6){
        total6 = total6 + 1
        fDice6.classList.add('select')
    }
}
fDice1.addEventListener('click', keepDiceF)
fDice2.addEventListener('click', keepDiceF)
fDice3.addEventListener('click', keepDiceF)
fDice4.addEventListener('click', keepDiceF)
fDice5.addEventListener('click', keepDiceF)
fDice6.addEventListener('click', keepDiceF)


rollButton.addEventListener('click', playerRoll)
function playerRoll () {
    rollButton.classList.add('remove')
    roll2Button.classList.remove('remove')
    finishButton.classList.remove('remove')
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
aaaa= getRandomInt(6) + 1
bbbb= getRandomInt(6) + 1
cccc= getRandomInt(6) + 1
dddd= getRandomInt(6) + 1
eeee= getRandomInt(6) + 1
ffff= getRandomInt(6) + 1
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
    roll4Button.classList.remove('remove')
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

roll4Button.addEventListener('click', Roll4)
function Roll4 () {
    roll4Button.classList.add('remove')

a=aaaa
b=bbbb
c=cccc
d=dddd
e=eeee
f=ffff
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
        totalScore = totalScore +200
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
        totalScore = totalScore +100
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
        totalScore= totalScore + 500
        tripleCount = tripleCount + 1
    }
    if (total6 === 3) {
        totalScore= totalScore + 600
        tripleCount = tripleCount + 1
    }
if (tripleCount === 2){
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
finalTotalScore= finalTotalScore + totalScore

playerScoreEl.innerHTML = finalTotalScore

total1=0
total2=0
total3=0
total4=0
total5=0
total6=0
totalScore=0
rollButton2.classList.remove('remove')
roll2Button.classList.add('remove')
roll3Button.classList.add('remove')
roll4Button.classList.add('remove')
finishButton.classList.add('remove')
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
    aDice1.classList.remove('select')
    aDice2.classList.remove('select')
    aDice3.classList.remove('select')
    aDice4.classList.remove('select')
    aDice5.classList.remove('select')
    aDice6.classList.remove('select')
    bDice1.classList.remove('select')
    bDice2.classList.remove('select')
    bDice3.classList.remove('select')
    bDice4.classList.remove('select')
    bDice5.classList.remove('select')
    bDice6.classList.remove('select')
    cDice1.classList.remove('select')
    cDice2.classList.remove('select')
    cDice3.classList.remove('select')
    cDice4.classList.remove('select')
    cDice5.classList.remove('select')
    cDice6.classList.remove('select')
    dDice1.classList.remove('select')
    dDice2.classList.remove('select')
    dDice3.classList.remove('select')
    dDice4.classList.remove('select')
    dDice5.classList.remove('select')
    dDice6.classList.remove('select')
    eDice1.classList.remove('select')
    eDice2.classList.remove('select')
    eDice3.classList.remove('select')
    eDice4.classList.remove('select')
    eDice5.classList.remove('select')
    eDice6.classList.remove('select')
    fDice1.classList.remove('select')
    fDice2.classList.remove('select')
    fDice3.classList.remove('select')
    fDice4.classList.remove('select')
    fDice5.classList.remove('select')
    fDice6.classList.remove('select')
if (finalTotalScore >= 10000) {
    win1El.classList.remove('remove')
}
}

rollButton2.addEventListener('click', player2Roll)
function player2Roll () {
    rollButton2.classList.add('remove')
    roll2Button2.classList.remove('remove')
    finishButton2.classList.remove('remove')
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
aaaa= getRandomInt(6) + 1
bbbb= getRandomInt(6) + 1
cccc= getRandomInt(6) + 1
dddd= getRandomInt(6) + 1
eeee= getRandomInt(6) + 1
ffff= getRandomInt(6) + 1
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

roll2Button2.addEventListener('click', Roll2second)
function Roll2second () {
    roll3Button2.classList.remove('remove')
    roll2Button2.classList.add('remove')
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

roll3Button2.addEventListener('click', Roll3second)
function Roll3second () {
    roll3Button2.classList.add('remove')
    roll4Button2.classList.remove('remove')
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

roll4Button2.addEventListener('click', Roll4second)
function Roll4second () {
    roll4Button2.classList.add('remove')

a=aaaa
b=bbbb
c=cccc
d=dddd
e=eeee
f=ffff
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

finishButton2.addEventListener('click', finishTurn2)
function finishTurn2 () {
    if (total1 === 1) {
        totalScore = totalScore +100
    }
    if (total5 === 1) {
        totalScore = totalScore +50
    }
    if (total1 === 2){
        pairCount = pairCount + 1
        totalScore = totalScore +200
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
        totalScore = totalScore +100
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
        totalScore= totalScore + 500
        tripleCount = tripleCount + 1
    }
    if (total6 === 3) {
        totalScore= totalScore + 600
        tripleCount = tripleCount + 1
    }
if (tripleCount === 2){
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
finalTotalScore2= finalTotalScore2 + totalScore

player2ScoreEl.innerHTML = finalTotalScore2

total1=0
total2=0
total3=0
total4=0
total5=0
total6=0
totalScore=0
rollButton.classList.remove('remove')
roll3Button2.classList.add('remove')
roll2Button2.classList.add('remove')
roll4Button2.classList.add('remove')
finishButton2.classList.add('remove')
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
    aDice1.classList.remove('select')
    aDice2.classList.remove('select')
    aDice3.classList.remove('select')
    aDice4.classList.remove('select')
    aDice5.classList.remove('select')
    aDice6.classList.remove('select')
    bDice1.classList.remove('select')
    bDice2.classList.remove('select')
    bDice3.classList.remove('select')
    bDice4.classList.remove('select')
    bDice5.classList.remove('select')
    bDice6.classList.remove('select')
    cDice1.classList.remove('select')
    cDice2.classList.remove('select')
    cDice3.classList.remove('select')
    cDice4.classList.remove('select')
    cDice5.classList.remove('select')
    cDice6.classList.remove('select')
    dDice1.classList.remove('select')
    dDice2.classList.remove('select')
    dDice3.classList.remove('select')
    dDice4.classList.remove('select')
    dDice5.classList.remove('select')
    dDice6.classList.remove('select')
    eDice1.classList.remove('select')
    eDice2.classList.remove('select')
    eDice3.classList.remove('select')
    eDice4.classList.remove('select')
    eDice5.classList.remove('select')
    eDice6.classList.remove('select')
    fDice1.classList.remove('select')
    fDice2.classList.remove('select')
    fDice3.classList.remove('select')
    fDice4.classList.remove('select')
    fDice5.classList.remove('select')
    fDice6.classList.remove('select')
if (finalTotalScore2 >= 10000) {
    win2El.classList.remove('remove')
}
}