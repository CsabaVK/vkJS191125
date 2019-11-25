function $($id){
    return document.getElementById($id);
}
window.onload =         function () {
    this.setInterval(   function () {
        io();
    }, 1000);
    //this.console.log(d);
    //io();
    //$('keret').style.backgroundColor = "red";
    //console.log("alma")
}
function io(){
    var d           = new Date();

    var year        = d.getFullYear(),
        month       = d.getMonth() + 1,
        day         = d.getDay(),

        hour        = d.getHours(),
        min         = d.getMinutes(),
        sec         = d.getSeconds(); 

    if (sec < 10) sec       = '0' + sec;
    if (min < 10) min       = '0' + min;
    if (hour < 10) hour     = '0' + hour;

    if (month < 10) month   = '0' + month;
    if (day < 10) day       = '0' + day;

    $('ido').innerHTML =    hour + ':' + min + ':' + sec,        
    $('date').innerHTML =   year + '-' + month + '-' + day;
}