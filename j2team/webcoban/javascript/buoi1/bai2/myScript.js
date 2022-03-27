function year_calculate(){
    let year = parseInt(document.getElementById('year').value);
    let can = 0;
    let chi = 0;

    switch((year)){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
                days = 29;
            } else {
                days = 28;
            }
        }
    let result = `Tháng ${month} năm ${year} có ${days} ngày`;
            document.getElementById('result').value = result;
    } 