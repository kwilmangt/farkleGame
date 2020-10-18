
let rollButton = document.getElementById('roll')
let score1 = document.getElementById('score1')
let roll2Button = document.getElementById('roll2')
let roll3Button = document.getElementById('roll3')


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function playerRoll () {
    rollButton.classList.add('remove')
    roll2Button.classList.remove('remove')

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
    if (a === 1) {
        aa=1 
        aaa=1  
    }
    if (a === 2) {
      aa=2
      aaa=2   
    }
    if (a === 3) {
     aa=3
     aaa=3 
    }
    if (a === 4) {
      aa=4
      aaa=4 
    }
    if (a === 5) {
      aa=5
      aaa=5   
    }
    if (a === 6) {
      aa=6
      aaa=6  
    }
}
aDice1.addEventListener('click', keepDiceA)
aDice2.addEventListener('click', keepDiceA)
aDice3.addEventListener('click', keepDiceA)
aDice4.addEventListener('click', keepDiceA)
aDice5.addEventListener('click', keepDiceA)
aDice6.addEventListener('click', keepDiceA)



function keepDiceB () {
    if (b === 1) {
       bb =1
       bbb=1    
    }
    if (b === 2) {
      bb=2
      bbb=2 
    }
    if (b === 3) {
     bb=3
     bbb=3
    }
    if (b === 4) {
      bb=4
      bbb=4 
    }
    if (b === 5) {
      bb=5  
      bbb=5 
    }
    if (b === 6) {
      bb=6 
      bbb=6
    }
}
bDice1.addEventListener('click', keepDiceB)
bDice2.addEventListener('click', keepDiceB)
bDice3.addEventListener('click', keepDiceB)
bDice4.addEventListener('click', keepDiceB)
bDice5.addEventListener('click', keepDiceB)
bDice6.addEventListener('click', keepDiceB)


function keepDiceC () {
    if (c === 1) {
        cc=1 
        ccc=1  
    }
    if (c === 2) {
      cc=2  
      ccc=2 
    }
    if (c === 3) {
     cc=3
     ccc=3
    }
    if (c === 4) {
      cc=4
      ccc=4 
    }
    if (c === 5) {
      cc=5 
       ccc=5
     
    }
    if (c === 6) {
      cc=6 
      ccc=6
    }
}
cDice1.addEventListener('click', keepDiceC)
cDice2.addEventListener('click', keepDiceC)
cDice3.addEventListener('click', keepDiceC)
cDice4.addEventListener('click', keepDiceC)
cDice5.addEventListener('click', keepDiceC)
cDice6.addEventListener('click', keepDiceC)


function keepDiceD () {
    if (d === 1) {
       dd =1 
       ddd=1  
    }
    if ( d=== 2) {
      dd=2  
      ddd=2
    }
    if (d === 3) {
     dd=3
     ddd=3
    }
    if (d === 4) {
      dd=4
      ddd=4
    }
    if (d === 5) {
      dd=5  
      ddd=5
    }
    if (d === 6) {
      dd=6 
      ddd=6
    }
}
dDice1.addEventListener('click', keepDiceD)
dDice2.addEventListener('click', keepDiceD)
dDice3.addEventListener('click', keepDiceD)
dDice4.addEventListener('click', keepDiceD)
dDice5.addEventListener('click', keepDiceD)
dDice6.addEventListener('click', keepDiceD)

function keepDiceE () {
    if (e === 1) {
        ee=1  
        eee= 1
    }
    if (e === 2) {
      ee=2 
      eee=2 
    }
    if (e === 3) {
     ee=3
     eee=3
    }
    if (e === 4) {
      ee=4
      eee=4
    }
    if (e === 5) {
      ee=5 
      eee=5 
    }
    if (e === 6) {
      ee=6 
      eee=6
    }
}
eDice1.addEventListener('click', keepDiceE)
eDice2.addEventListener('click', keepDiceE)
eDice3.addEventListener('click', keepDiceE)
eDice4.addEventListener('click', keepDiceE)
eDice5.addEventListener('click', keepDiceE)
eDice6.addEventListener('click', keepDiceE)

function keepDiceF () {
    if (f === 1) {
        ff=1 
        fff=1  
    }
    if (f === 2) {
      ff=2 
      fff=2 
    }
    if (f === 3) {
     ff=3
     fff=3
    }
    if (f === 4) {
      ff=4
      fff=4
    }
    if (f === 5) {
      ff=5 
      fff=5 
    }
    if (f === 6) {
      ff=6 
      fff=6
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






