var num, total = 0;

for(var isEnd = false; isEnd === false; ){

    num = prompt("숫자를 입력하세요");

    if(num === null){
        alert("합은 "+ total +" 입니다");
        isEnd = true;
    }
    else {
        total += parseInt(num, 10);
    }
}

alert(total);