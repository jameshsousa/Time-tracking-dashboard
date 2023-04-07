
//hide daily - weekly - monthly
var daily = document.getElementsByClassName("daily");
    for (var i=0;i<daily.length;i+=1){
        daily[i].style.display = 'none';
    }
// var weekly = document.getElementsByClassName("weekly");
//     for (var i=0;i<weekly.length;i+=1){
//         weekly[i].style.display = 'none';
//     }
var monthly = document.getElementsByClassName("monthly");
    for (var i=0;i<monthly.length;i+=1){
        monthly[i].style.display = 'none';
    }

// click on daily 
document.getElementById("daily").addEventListener("click", myDaily);

    function myDaily() {
    var daily = document.getElementsByClassName("daily");
    for (var i=0;i<daily.length;i+=1){
    daily[i].style.display = 'block';
    }
    var weekly = document.getElementsByClassName("weekly");
    for (var i=0;i<weekly.length;i+=1){
    weekly[i].style.display = 'none';
    }
    var monthly = document.getElementsByClassName("monthly");
    for (var i=0;i<monthly.length;i+=1){
    monthly[i].style.display = 'none';
    }
}

// click on weekly
document.getElementById("weekly").addEventListener("click", myWeekly);

    function myWeekly() {
    var daily = document.getElementsByClassName("daily");
    for (var i=0;i<daily.length;i+=1){
    daily[i].style.display = 'none';
    }
    var weekly = document.getElementsByClassName("weekly");
    for (var i=0;i<weekly.length;i+=1){
    weekly[i].style.display = 'block';
    }
    var monthly = document.getElementsByClassName("monthly");
    for (var i=0;i<monthly.length;i+=1){
    monthly[i].style.display = 'none';
    }
}

// click on monthly 
document.getElementById("monthly").addEventListener("click", myMonthly);

    function myMonthly() {
    var daily = document.getElementsByClassName("daily");
    for (var i=0;i<daily.length;i+=1){
    daily[i].style.display = 'none';
    }
    var weekly = document.getElementsByClassName("weekly");
    for (var i=0;i<weekly.length;i+=1){
    weekly[i].style.display = 'none';
    }
    var monthly = document.getElementsByClassName("monthly");
    for (var i=0;i<monthly.length;i+=1){
    monthly[i].style.display = 'block';
    }
}