const button = document.getElementsByTagName("input")
const spamtag = document.getElementsByTagName("spamtag")
let divarr = []
let arrcolor = []
let allDivs
let cuple = 0
let last
let bul=0
let mistake=0


const RandColor = num => 
{
    let red, green, blue, color
    for (let index = 0; index < num; index++) 
    {
        let rnd
        rnd = Math.random()
        red = Math.round(rnd * 1000) % 255

        rnd = Math.random()
        green = Math.round(rnd * 1000) % 255

        rnd = Math.random()
        blue = Math.round(rnd * 1000) % 255

        arrcolor.push("rgb(" + red + "," + green + "," + blue + ")")
    }
}


const RandPlaces = (num) => 
{
    allDivs = spamtag[0].getElementsByTagName("div")
    let count = 0
    let arrPlaces = []
    let rnd
    let isExit
    for (let index = 0; index < num * 2; index++) 
    {
        do 
        {
            rnd = Math.floor(Math.random() * (num * 2));
            isExit = arrPlaces.find(c => c == rnd)
        }
        while (isExit != undefined);
        arrPlaces.push(rnd)
        if (index % 2 == 0 &&index!=0)
            count++
        divarr[rnd] = arrcolor[count]
    }
}


const Loadplay = (num) => 
{
    idChooseLevel.style.display="none"
    button[0].style.display = "none"
    button[1].style.display = "none"
    button[2].style.display = "none"
    for (let index = 0; index < num * 2; index++) 
        spamtag[0].innerHTML += `<div class="size" onclick="changecolor(` + index + `)"></div>`
    spamtag[0].style.display = "block"
    RandColor(num)
    RandPlaces(num)
}


function changecolor(indx)
{   
    allDivs[indx].style.backgroundColor = divarr[indx]
    cuple++
    if (cuple % 2 == 0) 
        compare(last, indx)
    else
        last = indx
}


function compare(last, indx) 
{
    let countTry=0
    if (divarr[last] != divarr[indx]) 
    {
        mistake++
        setTimeout(()=>{
        allDivs[last].style.backgroundColor = "white"
        allDivs[indx].style.backgroundColor = "white"
        },1000);
    }
    else
    {
     bul++
     countTry=1
    }

    if(countTry==1)
    idShow.innerHTML=  `very good you hava ${bul} capels `
    
    if(countTry==0)
     idShow.innerHTML=  `mistke🤢 try again `

     if(bul==5)
     endGame()

    
}

const endGame=()=>
{
    idShow.innerHTML= `👏very good👏 you win after ${bul+mistake} try `
}