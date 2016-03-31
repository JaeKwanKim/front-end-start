var str = '';
var wrap = document.getElementById('wrap');
var models = [];
var template = document.getElementById('template').innerHTML;
for(var i=1; i <= 9; i++) {
    // str += ("<h2>"+i+"단 시작 .. </h2>");
    models[i] = [];

    for(var j=1; j<=9; j++){
        // str += (i + "*" + j + "= " + (i*j) + "<br>");
        models[i][j] = i * j;
    }
}

var html = tmpl(template, {list: models});
// console.log(models);
wrap.innerHTML = html;