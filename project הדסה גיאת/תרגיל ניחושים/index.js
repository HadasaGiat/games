var arr_guss
var ans
var number
var c_num;
var count = 0;
var x = "";
ans = "";
function check() {//בודקת את המספר שנכנס ותקינותו אם גדול קטן או שווה
    if(count<10){
        number = document.getElementById("try");
        ans = document.getElementById("answer");
        if (number.value < 100 && number.value > 0) {
            if (number.value > c_num) {
                ans.innerText = "נסה מספר נמוך יותר";
            }
            if (number.value < c_num) {
                ans.innerText = "נסה מספר גבוהה יותר";
            }
            if (number.value == c_num) {
                ans.innerText = "good";
                count=11
            }
        }
        else {
            ans.innerText = "worng"
            count--
        }
        arr_guss = document.getElementById("arr")
        arr_guss.innerText = x + number.value + ", "
        x = arr_guss.innerText
        number.value = ""
        count++;
    }
    if(count==10){
        ans.innerText="oh! no! the game is over☻"
    }
}


function new_game() {//מגרילה מספר חדש ומתחילה משחק חדש
    arr_guss = document.getElementById("arr");
    ans = document.getElementById("answer");
    c_num = Math.floor(Math.random() * 100);//ככה מגרילים מספרים
    arr_guss.innerText = "my guss:"
    x = "my guss:"
    ans.innerText=""
    count=0

}