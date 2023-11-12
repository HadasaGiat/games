const city= ['modiin','arad','ashdod','jerusalem','hifa','tveria']
const contry = ['china', 'amerika','israel','brazil','spein','levanon']
const food=['rice','salad','chicken','candy','onion','tomato']
const subject=['city','contry','food']
const arrDiv=[]
let Language
let Spaceindex
let mistake=0
let count=0
let arrletter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


const game =()=>{   
let myDiv = document.getElementById("bu1");
myDiv.style.display="none"
    let frame=document.createElement("div")
    frame.setAttribute("id","frames")
    let place=document.getElementById("catch")
    place.appendChild(frame)
    
    for (let index = 0; index < 3; index++)
    {
        let kategory =document.createElement("div")
        kategory.innerText=subject[index]
        frame.appendChild(kategory)
     kategory.classList.add("subject_but")
     kategory.addEventListener("click",rand_word)      
    }
}

const rand_word = (e) =>{
    let frame=document.getElementById("frames") 
    frame.style.display="none" 
    let sub = e.target.innerText
    let x=Math.floor(Math.random()*6)
    let arr=[]
    switch(sub){
        case 'city':
            arr=city
            break;
        case 'contry':
            arr=contry
            break;
            case 'food':
            arr=food
            break;
    }
    console.log (arr[x])
    buildWord(arr[x]);
}

const buildWord=(y)=>{
   
    let place =document.getElementById("catch")
    for (let index = 0; index < y.length; index++)
    {
        let myGuss=document.createElement("div") 
        myGuss.setAttribute("id",`gussi${index}`)
        myGuss.classList.add("gussiClass")
        place.appendChild(myGuss)
        arrDiv.push(myGuss)
    }

    let gussPlace = document.createElement("input")
    gussPlace.setAttribute("id","lineGuss")
    gussPlace.setAttribute("type","text")
    place.appendChild(gussPlace)
    gussPlace.style.display="block"
    gussPlace.addEventListener("keyup",()=>{
        checkLetter(y,gussPlace.value)
        gussPlace.value=""
    })   
   
    img.style.display="block" 
    pictureCoverwrapper.style.display = "grid"    
}


const checkLetter=(y,letter)=>{
    let b=0
    
    if(mistake==10)
    endGame()
    console.log(letter)   
    for (let index = 0; index < y.length; index++) 
    {      
        if(letter==y[index])
        {
            arrDiv[index].innerText=letter
            b=1
            count++
            console.log(count);
            if(count==(y.length+1))
            {
                lineGuss.style.display="none"
                theWinner.style.display="block"
                img.style.display="none"
                myPid.style.display="none"
                aside.style.display="none"
                pictureCover.style.display="none"
            }
        }      
    }
    const pictureCover = document.getElementsByClassName("pictureCover")
    if (b==0)
    {
        english(letter)
        pictureCover[mistake].style.display = "none"
        mistake++ 
        img.style.width-="20px"
        aside.innerHTML=`  you hava  ${10-mistake} times to try`
    }
}
   
const english = (letter) => 
{
    debugger
    // arrletter.push="a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,"
    for (let index = 0; index < arrletter.length; index++) {
       if (letter==arrletter[index]) 
       {
            arrletter[index]=""
       }
       myPid.innerHTML=arrletter
    }
}

    const endGame=()=>
    {
        contain.innerText= `game over 😢😢😢😢😢😢`
        lineGuss.style.display="none"
        img.style.display="none"
        myPid.style.display="none" 
        aside.style.display="none"
        pictureCover.style.display="none"
    }
    
