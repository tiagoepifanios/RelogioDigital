
    setInterval(function(){
        const time = document.querySelector("#time");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_nigth = "AM"
        if(hours > 12){
            day_nigth = "PM";
            hours = hours - 12;
        }
        if(hours > 12){
            hours = "0" + hours;
        }
        if(minutes < 10){
            hours = "0" + minutes;
        }
        if(seconds < 10){
            hours = "0" + seconds;
        }
        time.textContent = hours +":" + minutes + ":" + seconds +" " + day_nigth;
    })