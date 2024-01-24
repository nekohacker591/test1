function getUrlParam(name) {
    var url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var dispatch = function(cmd,data){
    window.parent.postMessage({cmd:cmd,data:data}, '*');
};

window.addEventListener("load", function() {
    var word = getUrlParam("word");
    var token = getUrlParam("token");

    document.querySelector(".ginger-addedtopd-body>b").innerHTML = word;
    document.querySelector(".ginger-addedtopd-foot>a").href = "https://www.gingersoftware.com/PersonalDictionary/"+token;
    document.querySelector(".ginger-addedtopd-head-close").onclick = function(){dispatch('addedToPdPopup.close');};
    document.querySelector(".ginger-addedtopd-foot-submit").onclick = function(){
        if(document.getElementById("gotit").checked){
            dispatch('addedToPdPopup.close',{dontShowItAnyMore:true});
        } else {
            dispatch('addedToPdPopup.close');
        }
    };
});
