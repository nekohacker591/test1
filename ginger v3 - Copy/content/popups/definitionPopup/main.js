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
    var title = getUrlParam("title");
    var description = getUrlParam("description");
    document.getElementById("dp-title").innerHTML = title;
    document.getElementById("dp-description").innerHTML = description;

    var close = document.querySelector(".ginger-dp-close");
    if(close) close.onclick = function(){dispatch('definitionPopup.close');};

    /*var more = document.querySelector(".ginger-dp-more");
    if(more) more.onclick = function(){dispatch('definitionPopup.definition',{text:title});};*/
    var titleSynonyms = document.querySelector(".ginger-dp-title-synonyms");
    if(titleSynonyms) titleSynonyms.onclick = function(){dispatch('definitionPopup.synonyms',{text:title});};
    var titleTranslate = document.querySelector(".ginger-dp-title-translate");
    if(titleTranslate) titleTranslate.onclick = function(){dispatch('definitionPopup.translate',{text:title});};
});
