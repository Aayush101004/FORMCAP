function gencap(min, max) {
    document.getElementById('genc').innerHTML = Math.floor(Math.random() * (max - min) + min);
}
function check() {
    let a = 0, b = 0, c = 0;
    let m = document.getElementById('name').value;
    let n = document.getElementById('age').value;
    let z = document.getElementById('phn').value;
    let x = document.getElementById('genc').innerText;
    let y = document.getElementById('capc').value;
    let o = document.getElementById('gend');
    if (isNumber(m)) {
        document.getElementById('res').style = "color:red;"
        document.getElementById('res').innerHTML = "Enter Correct Name";
        a = 1;
    }
    if (isEmpty(n) || isEmpty(m) || isEmpty(y) || isEmpty(z)) {
        document.getElementById('res').style = "color:red;"
        document.getElementById('res').innerHTML = "Enter all values";
        return;
    }
    if (z.length !== 10 || !isNumber(z)) {
        document.getElementById('res').style = "color:red;"
        document.getElementById('res').innerHTML = "Invalid Phone Number";
        b = 1;
    }
    if (x !== y) {
        document.getElementById('res').style = "color:red;"
        document.getElementById('res').innerHTML = "Invalid Captcha";
        c = 1;
    }
    if (a == 0 && b == 0 && c == 0) {
        document.getElementById('res').style = "color:green;"
        document.getElementById('res').innerHTML = "Form is submitted successfully";
    }
}
function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
function isEmpty(value) {
    return value.trim() === "";
}