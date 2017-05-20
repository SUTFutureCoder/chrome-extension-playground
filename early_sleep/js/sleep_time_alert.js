/**
 * Created by FutureCoder on 2017/5/20.
 */
//注意，连续两个小时每分钟进行强制alert
setInterval(function (){
  //轮询获取最新的时间
  var sleepTimeHour   = localStorage.getItem("sleep_time_hour");
  var sleepTimeMinute = localStorage.getItem("sleep_time_minute");

  if (sleepTimeHour == undefined || sleepTimeMinute == undefined){
    return 0;
  }

  sleepTimeHour   = sleepTimeHour > 9 ? sleepTimeHour : "0" + sleepTimeHour;
  sleepTimeMinute = sleepTimeMinute > 9 ? sleepTimeMinute : "0" + sleepTimeMinute;

  var sleepAlertHour  = localStorage.getItem("sleep_alert");
  if (sleepAlertHour == undefined || sleepAlertHour < 0 || sleepAlertHour > 12){
    sleepAlertHour = "8";
  }
  sleepAlertHour = parseInt(sleepAlertHour, 10);

  //使用虚拟时间戳，生成昨天和今天
  //当前
  var currentTimeStamp = new Date().getTime();
  //按照设定生成的昨天&今天两天的虚拟时间戳
  //先生成今天的虚拟时间会更简单一些
  var todayY = new Date().getFullYear();
  var todayM = new Date().getMonth() + 1;
  var todayD = new Date().getDate();
  var virtualTimeStampToday = new Date(todayY + "-" + todayM + "-" + todayD + " " + sleepTimeHour + ":" + sleepTimeMinute + ":00").getTime();
  var virtualTimeStampYesterday = virtualTimeStampToday - 24 * 60 * 60 * 1000;

  //开始判断当前时间和两个时间的时间差
  if (((currentTimeStamp - virtualTimeStampToday) > 0 && (currentTimeStamp - virtualTimeStampToday) < sleepAlertHour * 60 * 60 * 1000)
      || (( currentTimeStamp - virtualTimeStampYesterday) > 0 && (currentTimeStamp - virtualTimeStampYesterday < sleepAlertHour * 60 * 60 * 1000))){
    alert("快去睡觉！");
  }
}, 1000);