(function(){
    var datepicker = {};
    datepicker.getMonthDate = function (year, month) {
        var ret = [];//用来存储每一天的月份和日期
        if(!year || !month){//如果没有传入参数，直接获取今天的数据
            var today = new Date();
            year = today.getFullYear();//2020
            month = today.getMonth() + 1;//1~12之间的一个数，今天是8月份，返回7+1=8
        }
        var firstDay = new Date(year, month-1, 1);//获取当月第一天
        var firstDayWeekDay = firstDay.getDay();//获取星期几，才好判断排在第几列
        //if(firstDayWeekDay === 0){//周日
        //    firstDayWeekDay = 7;
        //}

        year = firstDay.getFullYear();//得到年份
        month = firstDay.getMonth() + 1;//得到月份

        var lastDayOfLastMonth = new Date(year, month-1, 0);//当月的第0天，就是上个月最后一天
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();//上个月最后一天的日期，是30还是31还是28。。。


        var preMonthDayCount = firstDayWeekDay - 1;//上个月最后一天是周几
        


        var lastDay = new Date(year, month, 0);//当月的最后一天
        var lastDate = lastDay.getDate();//返回1~31之间的一个整数，当月的最后一天日期

        for(var i=0; i<7*6; i++){//获取每一个位置的日期
            //var date = i + 1 - preMonthDayCount;
            var date = i - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            //上一月
            if(date <= 0){
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            }else if(date > lastDate){
                //下一月
                thisMonth = month + 1;
                showDate = showDate -lastDate;
            } 
            if(thisMonth === 0){
                thisMonth = 12;
            }
            if(thisMonth === 13){
                thisMonth = 1;
            }
            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            })
            
        }
        return {
            year: year,
            month:month,
            days: ret
        };
    }
    window.datepicker = datepicker;//该函数唯一暴露的对象
})();