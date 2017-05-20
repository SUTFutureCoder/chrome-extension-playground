/**
 * Created by FutureCoder on 2017/5/20.
 */
//用于配置早睡时间
var sleepTimeHour   = localStorage.getItem("sleep_time_hour");
var sleepTimeMinute = localStorage.getItem("sleep_time_minute");
var sleepAlertHour  = localStorage.getItem("sleep_alert");

//回填早睡时间
if (sleepTimeHour == undefined || sleepTimeHour < 0 || sleepTimeHour > 23){
  sleepTimeHour = "0";
}
if (sleepTimeMinute == undefined || sleepTimeMinute < 0 || sleepTimeMinute > 59){
  sleepTimeMinute = "0";
}
if (sleepAlertHour == undefined){
  sleepAlertHour = "8";
}

//开始回填
document.getElementById("sleep_time_hour").value = sleepTimeHour > 9 ? sleepTimeHour : "0" + sleepTimeHour;
document.getElementById("sleep_time_minute").value = sleepTimeMinute > 9 ? sleepTimeMinute : "0" + sleepTimeMinute;
document.getElementById("sleep_alert_crontab").value = sleepAlertHour;


//绑定事件

function saveTime(){
  var inputSleepTimeHour   = parseInt(document.getElementById("sleep_time_hour").value, 10);
  var inputSleepTimeMinute = parseInt(document.getElementById("sleep_time_minute").value, 10);
  var inputSleepAlertHour = parseInt(document.getElementById("sleep_alert_crontab").value, 10);
  if (inputSleepTimeHour < 0 || inputSleepTimeHour > 23){
    document.getElementById("sleep_time_hour").value= "00";
    alert("请输入0~23的小时值");
    return 0;
  }

  if (inputSleepTimeMinute < 0 || inputSleepTimeMinute > 59){
    document.getElementById("sleep_time_minute").value = "00";
    alert("请输入0~59的分钟值");
    return 0;
  }

  if (inputSleepAlertHour < 0 || inputSleepAlertHour > 12) {
    document.getElementById("sleep_alert_crontab").value = sleepAlertHour;
    alert("请输入0~12小时提醒时间值");
  }
  //存入localstorage
  localStorage.setItem("sleep_time_hour", inputSleepTimeHour);
  localStorage.setItem("sleep_time_minute", inputSleepTimeMinute);
  localStorage.setItem("sleep_alert", inputSleepAlertHour);
  alert("保存成功~");
}
document.getElementById("save").onclick = saveTime;
