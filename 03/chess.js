
var board = document.getElementById("board");
var temp = 1;
var str = '';
for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        if(i%2 ==0) {
            if (temp % 2 == 0) {
                str += '<span class="black" id="' + temp + '"></span>';
                temp++;
                //document.getElementById(temp).addEventListener('click', chageColor(temp));
            } else {
                str += '<span class="white" id="' + temp + '"></span>';
                temp++;
            }
        } else {
            if (temp % 2 == 1) {
                str += '<span class="black" id="' + temp + '"></span>';
                temp++;
            } else {
                str += '<span class="white" id="' + temp + '"></span>';
                temp++;
            }
        }
    }
}

board.innerHTML = str;


var flag = 0;
for(var i = 1; i <= 16; i++ ) {
    document.getElementById(i).addEventListener('click', function chageColor(schema){
        if(flag == 0) {
            this.setAttribute("style", "background-color: red");
            flag = 1;
        } else {
            this.setAttribute("style", "background-color: " + schema.toElement.className);
            flag = 0;
        }
    });
}

