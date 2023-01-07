var websocket = "";
var logo_server = "http://192.168.1.103:8002/logo/rest/getChannelLogo?channel_name="

var writeToScreen = function(message) {
    var div = document.createElement('div');
    var d = new Date();
    div.innerHTML = "[";
    div.innerHTML += d.getHours() > 9 ? d.getHours() : "0" + d.getHours();
    div.innerHTML += ":";
    div.innerHTML += d.getMinutes() > 9 ? d.getMinutes() : "0" + d.getMinutes();
    div.innerHTML += ":";
    div.innerHTML += d.getSeconds() > 9 ? d.getSeconds() : "0" + d.getSeconds();
    div.innerHTML += "] ";
    div.innerHTML += message;

    document.getElementById('output').insertBefore(div, document.getElementById('output').firstChild);
};

var socketOpen = function(message) {
    writeToScreen("WS Open: " + message.data);
};
var socketClose = function(message) {
    writeToScreen("WS Close: " + message.data);
}
var socketError = function(message) {
    writeToScreen("WS Error: " + message.data);
    websocket = "";
};
var socketMessage = function(message) {
    writeToScreen("WS Message: " + message.data);
};

var socketExit = function() {
    websocket.send("{\"event\":\"exit\"}");
}

function connectWS() {
    var wsProtocol = getWSProto();
    if (wsProtocol == null) {
        console.warn("error: invalid websocket protocol: " + wsProtocol);
        return;
    }
    var url = wsProtocol + '//' + document.getElementById("ipaddress").value + '/foo';
    websocket = new WebSocket(url);
    websocket.onopen = socketOpen;
    websocket.onclose = socketClose;
    websocket.onmessage = socketMessage;
    websocket.onerror = socketError;

    localStorage.ipaddress = document.getElementById("ipaddress").value;
}

function sendCustomEvent() {
    if (websocket) {
        websocket.send(document.getElementById('customevent').value)
    }
}

function getChannelList() {
    var listUrl = window.location.protocol + "//" + document.getElementById("ipaddress").value + "/list";
    $.ajax({
        url: listUrl
    }).done(function(data) {
        console.log("data: " + data);
        if (data == "") {
            console.log("data empty");
            return;
        } else {
            createChannelList(eval("(" + data + ")").channellist);
        }
    });
}

function createChannelList(channelList) {
    var channelListDiv = document.getElementById("channel_list");
    for (channel in channelList) {
        var newch = document.createElement("div");
        newch["class"] = "channel";
        newch.innerHTML = channelList[channel].name;
        var newimg = document.createElement("img");
        newimg["src"] = "./tv.png";
        newimg.setAttribute("data-original", logo_server + channelList[channel].name);
        newimg.setAttribute("class", "lazy");
        newch.appendChild(newimg);
        channelListDiv.appendChild(newch);
    }
    $("img.lazy").lazyload();
}

function mute() {
    if (websocket) {
        websocket.send("{\"event\":\"mute\"}");
    }
}

function volume_up() {
    if (websocket) {
        websocket.send("{\"event\":\"v+\"}");
    }
}

function volume_down() {
    if (websocket) {
        websocket.send("{\"event\":\"v-\"}");
    }
}

function memc() {
    if (websocket) {
        websocket.send("{\"event\":\"memc\"}");
    }
}

function backlight_up() {
    if (websocket) {
        websocket.send("{\"event\":\"bl+\"}");
    }
}

function backlight_down() {
    if (websocket) {
        websocket.send("{\"event\":\"bl-\"}");
    }
}

function power() {
    if (websocket) {
        websocket.send("{\"event\":\"power\"}");
    }
}

function init() {
    if (localStorage.ipaddress)
        document.getElementById("ipaddress").value = localStorage.ipaddress;
    else
        document.getElementById("ipaddress").value = window.location.host;

    connectWS();
}

function getWSProto() {
    console.log(window.location.protocol);
    if (window.location.protocol == "http:")
        return "ws:";
    else if (window.location.protocol == "https:")
        return "wss:";
    return null;
}

function floodReq() {
    for (var i = 0; i < 1000; i++) {
        getChannelList();
    }
}
