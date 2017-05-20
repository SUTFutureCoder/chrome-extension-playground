/**
 * Created by FutureCoder on 2017/5/20.
 */
//回填部分
var sleepTimeHour   = localStorage.getItem("sleep_time_hour");
var sleepTimeMinute = localStorage.getItem("sleep_time_minute");

if (undefined == sleepTimeHour || undefined == sleepTimeMinute){
  //跳转到设置页面
  window.open("chrome-extension://gkkldlfboibnkdaammliejncbhgocjpd/options.html");
}

if (0 > sleepTimeHour || 23 < sleepTimeHour){
  sleepTimeHour = "0";
}
sleepTimeHour = sleepTimeHour > 9 ? sleepTimeHour : "0" + sleepTimeHour;

if (0 > sleepTimeMinute || 59 < sleepTimeMinute){
  sleepTimeMinute = "0";
}
sleepTimeMinute = sleepTimeMinute > 9 ? sleepTimeMinute : "0" + sleepTimeMinute;

document.getElementById("sleep_set").firstElementChild.innerHTML = sleepTimeHour + ":" + sleepTimeMinute;


//倒计时部分
//注意回填
// setInterval(function () {
//   //计算剩余时间
//   //离那个虚拟时间最近就算转换哪个，这个就是不能超过12个小时的原因
//   //当前
//   var currentTimeStamp = new Date().getTime();
//   //按照设定生成的昨天&今天两天的虚拟时间戳
//   //先生成今天的虚拟时间会更简单一些
//   var todayY = new Date().getFullYear();
//   var todayM = new Date().getMonth() + 1;
//   var todayD = new Date().getDate();
//   var virtualTimeStampToday = new Date(todayY + "-" + todayM + "-" + todayD + " " + sleepTimeHour + ":" + sleepTimeMinute + ":00").getTime();
//   var virtualTimeStampYesterday = virtualTimeStampToday - 24 * 60 * 60 * 1000;
//
//   if (virtualTimeStampToday - currentTimeStamp)
// }, 1000);

//提示部分
