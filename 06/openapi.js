console.log("openapi.js");

var apiKey = "6f103746b3b541df8a3ba8b1eadc53e7";
var btn = document.getElementById('input-btn');
var pageNum = 1;

var wrap = document.getElementById('wrap');
var template = document.getElementById('template').innerHTML;

btn.addEventListener('click', function () {
    var main = document.getElementById('main').value;
    var apiurl = 'https://apis.daum.net/search/vclip?q='+ main +'&apikey='+ apiKey +
        '&output=json&pageno='+pageNum;
    getJSON(apiurl, function (res) {
        console.log(res);
        var item = res.channel.item;
        // console.log(item);
        var html = tmpl(template, {list : item});
        wrap.innerHTML = html;
    });
    pageNum++;
});
