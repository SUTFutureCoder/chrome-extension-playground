/**
 * Created by iWM on 2017/5/18.
 */

function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      callback(xhr.responseText);
    }
  };
  xhr.send();
}

httpRequest("http://whois.pconline.com.cn/ip.jsp", function (ip) {
  document.getElementById("ip_div").innerText = ip;
});