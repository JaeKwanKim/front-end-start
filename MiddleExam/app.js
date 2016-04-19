console.log("app.js");

function returnById(id) {
    return document.getElementById(id);
}

var apiKey = "6f103746b3b541df8a3ba8b1eadc53e7";
var template = document.getElementById("panelTemplate").innerHTML;
var panel = ["board", "vclip", "image", "knowledge", "blog", "cafe"];
var pageNum = 1;
var saveId = "vclip";

returnById("inputText").addEventListener("keyup", searchAction);
returnById("primaryBtn").addEventListener("click", searchAction);
returnById("moreBtn").addEventListener("click", moreShow);

function searchAction(event) {
    if(event.keyCode == 13 || event.type == "click") {
        if(returnById("inputText").value == "") {
            window.alert("검색어를 넣어주세요!!!");
        }
        event.preventDefault();
        // console.log(event);
        for (var i = 0; i < panel.length; i++) {
            returnById(panel[i]).addEventListener("click", panelClick);
        }
        render(saveId);
    }
}

function panelClick(event) {
    event.preventDefault();
    pageNum = 1;
    returnById(saveId).removeAttribute("class");
    saveId = event.currentTarget.id;
    returnById(saveId).setAttribute("class", "active");
    // console.log(event);
    render(saveId);
}

function moreShow() {
    pageNum++;
    if(pageNum > 3) {
        window.alert("Daum에서 제공해주는 페이지의 수는 최대 3페이지 입니다!!");
    } else {
        render(saveId, 1);
    }
}

function render(id, flag) {
    var wrap = returnById("wrap");
    if(flag != 1) showLoading(wrap);
    var apiurl = 'https://apis.daum.net/search/'+id+'?q='+ returnById("inputText").value +'&apikey='+ apiKey +
        '&output=json&pageno='+pageNum;
    getJSON(apiurl, function (res) {
        var item = res.channel.item;
        console.log(item);
        var html = tmpl(template, {list : item});
        if(pageNum != 1) {
            wrap.innerHTML += html;
        } else {
            wrap.innerHTML = html;
        }
    });
}

function showLoading(wrap) {
    if(returnById("loading") == null) {
        wrap.innerHTML = "<div id=\"loading\"><img src=\"ajax-loader.gif\" ></div>";
    } else {
        returnById("loading").style.display.remove();
    }
    wrap.onload = function () {
        returnById("loading").style.display = "none";
    }
}



