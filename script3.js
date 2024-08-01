









function date(a){
    var s =new Date(a);
    document.getElementById("day").innerHTML="Day is :"+ s.getDate();
    document.getElementById("month").innerHTML="Month is :" +(parseInt(s.getMonth())+1);
    document.getElementById("year").innerHTML="Year is :" + s.getFullYear();

}