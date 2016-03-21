
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

function chageColor(id) {
    //location.reload();
}

for(var i = 1; i <= 16; i++ ) {
    document.getElementById(i).addEventListener('click', function chageColor(){
        this.setAttribute("style", "background-color: red");
    });
}

