const end_date = "22 July 2026  9:13 PM"
document.getElementById("endDate").innerText= end_date;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(end_date);
    const date= new Date();
    console.log(end, date);
    const diff= (date-end)/1000;
    console.log(diff);

    if(diff < 0) return;
    //convert into days;
    const sec=86400;
    const days= (diff/sec);
    console.log(days);
    console.log(Math.floor(days))
    inputs[0].value = Math.floor(days);
    //convert into hours.
    console.log((diff/3600)%24);
    console.log(Math.floor(diff/3600)%24);
    inputs[1].value= Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60)%60;
    inputs[3].value = Math.floor(diff) % 60;
 }
clock()

setInterval(
    () => {
        clock()
    },
    1000
)

