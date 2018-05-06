





function setTime() {
    let date = new Date();
    let dayName;
    let monthName;


switch(date.getDay()) {
    case 0:
        dayName = 'Sun';
        break;
    case 1:
        dayName = 'Mon';
        break;
    case 2:
        dayName = 'Tue';
        break;
    case 3:
        dayName = 'Wed';
        break;
    case 4:
        dayName = 'Thur';
        break;
    case 5:
        dayName = 'Fri';
        break;
    case 6:
        dayName = 'Sat';
        break;
    default:
        break;
}

switch(date.getMonth()) {
    case 0:
        monthName = 'Jan';
        break;
    case 1:
        monthName = 'Feb';
        break;
    case 2:
        monthName = 'Mar';
        break;
    case 3:
        monthName = 'Apr';
        break;
    case 4:
        monthName = 'May';
        break;
    case 5:
        monthName = 'Jun';
        break;
    case 6:
        monthName = 'Jul';
        break;
    case 7:
        monthName = 'Aug';
        break;
    case 8:
        monthName = 'Sep';
        break;

    case 9:
        monthName = 'Oct';
        break;

    case 10:
        monthName = 'Nov';
        break;

    case 11:
        monthName = 'Dec';
        break;
    default:
        break;
}
    let timeElement = document.querySelector("#time");
    let dayDate = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
        
        timeElement.innerHTML = dayName + ' ' + monthName + ' ' 
        + dayDate + ',' + hour + ':' + minute +
        ':' + seconds;
    }
setInterval(setTime, 1);