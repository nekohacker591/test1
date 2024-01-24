var forwardMessages = function(){
    window.addEventListener('message', function (msg) {
        if(window.parent != window.self){
            window.parent.postMessage(msg.data, '*');    
        }        
    });
};

var getAllUrlParams = function(){
    var search = location.search.substring(1);
    return JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });
};

var serializeToQueryParams = function(params){
    var queryString = "";
    for (var key in params) {
        if (queryString != "") {
            queryString += "&";
        }
        queryString += key + "=" + encodeURIComponent(params[key]);
    }
    return queryString;
};

var init = function(){
    var urlParams = getAllUrlParams();
    var frame = document.querySelector("iframe");
    frame.src = urlParams.url+"?"+serializeToQueryParams(urlParams);
    var width = parseInt(urlParams.width);
    var height = parseInt(urlParams.height);
    //var data = urlParams.data;
    if(width) frame.style.width = width+"px";
    if(width) frame.style.height = height+"px";
    forwardMessages();
};

init();

