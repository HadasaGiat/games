const arrAllColor  = []
const arrChoosenColor= []
const arrRandom = []
const arrcheckColor = []
let exists
var num=500
let Choosen = ""
let level
countPlay=0
let isexist;
let rndPlace;
let countBul=0;
let countPgia=0;
const allBTN = document.getElementsByTagName("button");
function level_(l){
    level=l
    // inputColor.style.display="block"
    level1.style.display="none"
    level2.style.display="none"
    level3.style.display="none"
    id_begining.innerHTML=`בחר ${level} צבעים`
}
//פונקציה שבוחרת 6 צבעים ומעלימה את הכיתוב לאחר הבחירה
const chooseColor=(e)=>
{   
    arrAllColor.push(e.target.value)
    setTimeout(() => {
        id_begining.innerHTML = `עליך לבחור עוד ${level - arrAllColor.length} צבעים`
    }, num);
    num = 500
    if (arrAllColor.length==level)
    {
        console.log(arrAllColor);
        showAllcolors() 
        id_begining.style.display = "none"
        inputColor.style.display = "none"
    }
}

//פונקציה שמציגה את כל הצבעים שנבחרו על המסך
const showAllcolors=()=>
{
    let bigDiv = document.createElement("div")
    bigDiv.classList.add("classColors")
    bigDiv.id = "idColors"
    bigDiv.setAttribute("display", "flex")
    id_section.appendChild(bigDiv)
    let myDivFromDom=document.getElementById("idColors")
    for (let index = 0; index < arrAllColor.length; index++)
    {
        let newButtonColors = document.createElement("button")
        newButtonColors.classList.add("classNewButton")
        newButtonColors.id="idNewButton"
        newButtonColors.style.backgroundColor = arrAllColor[index]        
        newButtonColors.addEventListener("click",check)
        myDivFromDom.appendChild(newButtonColors)
    }
    randomToPlay()
} 

const check=(e)=>
{  
    arrChoosenColor.push(e.target.style.backgroundColor)
}

//פונקציה שמגרילה צבעים למערך
const randomToPlay=()=>
{
    for (let index = 0; index < 4; index++)
    {
        isexist = undefined
        do 
        {
            rndPlace = Math.floor(Math.random() * level)
            isexist = arrRandom.find(c => c == allBTN[rndPlace].style.backgroundColor)
        }
         while (isexist != undefined)
        arrRandom.push(rndPlace)
        arrRandom[index] = allBTN[rndPlace].style.backgroundColor;
    }
     addTurn()
}

//פונקציה שמוסיפה עוד ריבועים ריקים לבדיקה
const addTurn=()=>
{ 
    arrcheckColor.splice(0,4)
    arrChoosenColor.splice(0, 4)
    let containDiv=document.createElement("div")
    containDiv.classList.add("classContain_Div")
    id_contain.appendChild(containDiv)

    let div_con=document.createElement("div")
    div_con.classList.add("classDiv_con")
    containDiv.appendChild(div_con)

    div_con.innerHTML+="<br/>"
    for (let index = 0; index < 4; index++)
    {
        let newDivToCheck=document.createElement("div")
        newDivToCheck.classList.add("classNewDiv")
        newDivToCheck.setAttribute("id",`div${index+1}`)        
        newDivToCheck.addEventListener("click",colorToDiv)
        div_con.appendChild(newDivToCheck)
     }
     for (let index = 0; index < 4; index++)
     {       
         let divForBolPgia=document.createElement("div")
         divForBolPgia.classList.add("classDivForBolPgia")
         divForBolPgia.setAttribute("id",`div${index+1}`)
         divForBolPgia.setAttribute("display", "flex")        
         div_con.appendChild(divForBolPgia) 
         arrcheckColor.push(divForBolPgia)       
     } 
}


//פונקציה שצובעת את המקום המבוקש 
const colorToDiv=(e)=>
{   
    e.target.style.backgroundColor = arrAllColor[0]
    let idColors = document.getElementById("idColors")
    idColors.style.display = "block"
    e.target.style.backgroundColor = arrChoosenColor[arrChoosenColor.length -1]
    document.querySelector("#id")
     if(arrChoosenColor.length==4)
     {
         console.log(arrChoosenColor);
          checkBulOrPgia() 
          
     } 
}                                          

//פונקציה שבודקת בול ופגיעיה
const checkBulOrPgia=()=>
{      
    debugger  
        for (let index = 0; index < 4; index++) 
        {
            if (arrRandom.find(c => c == arrChoosenColor[index]))
            {
                if (arrChoosenColor[index] == arrRandom[index])
                    countBul++
                else
                    countPgia++
            }
    
        }
       colorBulAndPgia()
        if (countBul != 4)
        {
            countBul = 0;
            countPgia = 0;
            arrChoosenColor.splice(0, 4)
            addTurn()
        }
            else
            alert("you win!!!!!")      
}
    
// פונקציה שצובעת את הדיבים של הבול והפגיעה
const colorBulAndPgia =()=>
{
    for (let index = 0; index < countPgia; index++) {
        arrcheckColor[index].style.backgroundColor = "black"
    }
    for (let index = countPgia; index < countPgia + countBul; index++) {
        arrcheckColor[index].style.backgroundColor = "white"
        arrcheckColor[index].style.border = "3px solid black"
    }
    arrcheckColor.splice(0, 4) 
}





