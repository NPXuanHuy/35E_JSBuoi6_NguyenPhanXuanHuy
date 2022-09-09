function baitap1 () {
    var n = 0;
    var S = 0;
    while(S < 10000){
        n++;
        S = S + n;
        
    }
        console.log("Số nguyên dương nhỏ nhất là: ", n);
}
baitap1()

/** Bài 2 */
function baitap2 () {
    var x = document.getElementById("soX").value*1;
    var n = document.getElementById("soN").value*1;
    var output = document.getElementById("showInfoTinhTong");
    var T = 1;
    var S = 0;
    for(i = 1; i <= n; i++){
        T = T * x;
        S = S + T;
        output.innerHTML = S;
    }
    output.style.display = "block"
}


/**Bài 3 */
function baitap3 () {
    var n = document.getElementById("giaThuaN").value*1;
    var output = document.getElementById("showInfoTinhGiaiThua");
    var giaiThua = 1;
    for(i = 1; i <= n; i++){
        giaiThua = giaiThua * i;
        output.innerHTML = giaiThua;
    }
    output.style.display = "block"
}

/**Bài 5 */
// hàm kiểm tra số nguyên tố
function kiem_tra_snt(n)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}
 
// Hàm in ra các số nguyên tố từ 1 tới n
function print_snt()
{
    // Lấy number
    var number = document.getElementById("number").value*1;

    // Lặp để in kết quả
    var html = '';
    for (var i = 1; i <= number; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiem_tra_snt(i)){
            html += i + ' <br/>';
        }
    }
    document.getElementById("result").innerHTML = html;
}