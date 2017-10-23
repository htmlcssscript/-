export function dataScope(value1, value2) {
            var getDate = function (str) {
                var tempDate = new Date();
                var list = str.split("-");
                tempDate.setFullYear(list[0]);
                tempDate.setMonth(list[1] - 1);
                tempDate.setDate(list[2]);
                return tempDate;
            }
            var date1 = getDate(value1);
            var date2 = getDate(value2);
            if (date1 > date2) {
                var tempDate = date1;
                date1 = date2;
                date2 = tempDate;
            }
            date1.setDate(date1.getDate() + 1);
            var dateArr = [];
            var i = 0;
            while (!(date1.getFullYear() == date2.getFullYear() &&
                    date1.getMonth() == date2.getMonth() && date1.getDate() == date2
                    .getDate())) {
                var dayStr = date1.getDate().toString();
                if (dayStr.length == 1) {
                    dayStr = "0" + dayStr;
                }
                dateArr[i] = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" +
                    dayStr;
                i++;
                /* 
                * document.write("<div style='display:block'>" + date1.getFullYear() + 
                * "-" + (date1.getMonth() + 1) + "-" + date1.getDate() + "</div>"); 
                */
                // document.write(dateArr[i] + "<br>");  
                date1.setDate(date1.getDate() + 1);
            }
            return dateArr;
    }
