document.write(""); function OpenChatBox(url) { var iHeight = 600; var iWidth = 710; var iTop = (window.screen.availHeight - 30 - iHeight) / 2; //获得窗口的垂直位置; var iLeft = (window.screen.availWidth - 10 - iWidth) / 2; //获得窗口的水平位置; window.open(url, '_blank', 'height=' + iHeight + ', width=' + iWidth + ', top=' + iTop + ', left=' + iLeft + ', toolbar=no, menubar=no, scrollbars=no,resizable=no, location=no, status=no'); //window.open(url, window, 'dialogWidth:700px; dialogHeight:600px;help:1;status:1;resizeable:0;'); } //获取窗口高度 function getWindowHeight() { var windowHeight = 0; if (typeof (window.innerHeight) == 'number') { windowHeight = window.innerHeight; } else { if (document.documentElement && document.documentElement.clientHeight) { windowHeight = document.documentElement.clientHeight; } else { if (document.body && document.body.clientHeight) { windowHeight = document.body.clientHeight; } } } return windowHeight; } //获取窗口宽度 function getWindowWidth() { var windowWidth = 0; if (typeof (window.innerWidth) == 'number') { windowWidth = window.innerWidth; } else { if (document.documentElement && document.documentElement.clientWidth) { windowWidth = document.documentElement.clientWidth; } else { if (document.body && document.body.clientWidth) { windowWidth = document.body.clientWidth; } } } return windowWidth; } function ResetLeftDivpostion() { var _move = false; var _x, _y; var index_x, index_y; jQuery("#KFRightScreen").bind("mousedown", downIndex); jQuery(document).bind("mousemove", mmove); jQuery(document).bind("mouseup", mup); jQuery("#KFRightScreen").css("cursor", "move"); //jQuery("#KFRightScreen").css("-moz-user-select", "none"); function mmove(event) { if (_move) { var x = event.pageX - _x; var y = event.pageY - _y; if(x>getWindowWidth()-10) x=getWindowWidth()-10 if(y>getWindowHeight()-10) y=getWindowHeight()-10 jQuery("#KFRightScreen").css({ top: y, left: x }); showDiv(x, y); } var tishi=document.getElementById("KFBoxTitle"); //e = e||event; event = event || window.event; var obj = event.srcElement?event.srcElement:event.target; while(obj) { if(obj.id=="KFCenterScreen"||obj.id=="KFRightScreen"){ tishi.style.display="block";