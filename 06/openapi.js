console.log("openapi.js");

var apiKey = "6f103746b3b541df8a3ba8b1eadc53e7";

var btn = document.getElementById('input-btn');
btn.addEventListener('click', function (event) {
    var main = document.getElementById('main').value;
    var apiurl = 'https://apis.daum.net/search/vclip?q='+ main +'&apikey='+ apiKey +
        '&output=json';
    render(apiurl);
    console.log(main);
});

// console.log(apiurl)

getJSON(apiurl, function(res){
    console.log(res);


});