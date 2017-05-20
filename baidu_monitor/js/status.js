/**
 * Created by iWM on 2017/5/18.
 */

function httpRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status>=200 && xhr.status< 300){
        callback(true);
      } else {
        callback(false);
      }
    }
  };
  xhr.onerror = function () {
    callback(false);
  };
  xhr.send();
}

setInterval(function () {
  httpRequest('https://www.baidu.com/', function (status) {
    chrome.browserAction.setIcon({path: './images/' + (status ? 'online.png' : 'offline.png')});
  });
}, 1000);
