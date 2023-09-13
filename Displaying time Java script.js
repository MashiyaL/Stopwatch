
//displaying time start
const today= new Date();
document.write(today)
//end

////displaying time start with function
function startTime(){
    const today= new Date();
    document.write(today)  
}
startTime();
//end
//extract hours 
function startTime(){
    const today= new Date();
    var hours=today.getHours();
    document.write(hours); 
}
startTime();
//end
//extract minutes hours and seconds 
function startTime(){
    const today=new Date();
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();
    document.write(hours+":"+minutes+":"+seconds);
}
startTime();
//end 
//displaying time digitally
function startTime(){
    const today=new Date();
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();
   
    hours=checkTime(hours);
    minutes=checkTime(minutes);
    seconds=checkTime(seconds);
    document.write(hours+":"+minutes+":"+seconds);
    } 
startTime();  
function checkTime(i){
        if(i<10){
            i="0"+i;
        }
      return i; 
    }
    

checkTime();
//end