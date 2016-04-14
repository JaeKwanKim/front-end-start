console.log("openapi.js");

var apiKey = "6f103746b3b541df8a3ba8b1eadc53e7";
var btn = document.getElementById('input-btn');
var moreBtn = document.getElementById('moreButton');
var pageNum = 1;

var wrap = document.getElementById('wrap');
var template = document.getElementById('template').innerHTML;
var main = document.getElementById('main');

btn.addEventListener('click', function () {
    var mainText = main.value;
    var apiurl = 'https://apis.daum.net/search/vclip?q='+ mainText +'&apikey='+ apiKey +
        '&output=json&pageno='+pageNum;
    getJSON(apiurl, function (res) {
        console.log(res);
        var item = res.channel.item;
        // console.log(item);
        var html = tmpl(template, {list : item});
        wrap.innerHTML = html;
    });
    pageNum = 1;
});

moreBtn.addEventListener('click', function () {
    pageNum++;
    var mainText = main.value;
    var apiurl = 'https://apis.daum.net/search/vclip?q='+ mainText +'&apikey='+ apiKey +
        '&output=json&pageno='+pageNum;
    if(pageNum > 3) alert("더이상 찾을 수 없습니다");
    getJSON(apiurl, function (res) {
        console.log(res);
        var item = res.channel.item;
        var html = tmpl(template, {list : item});
        wrap.innerHTML += html;
    });
});