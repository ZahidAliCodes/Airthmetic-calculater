function plusPlay() {
    var firstValue = parseInt(document.getElementById('firstValue').value);
    var secondValue = parseInt(document.getElementById('secondValue').value);

    var result = firstValue + secondValue;
    document.getElementById('lastVal').innerHTML = result;

}
function minusPlay() {
    var firstValue = parseInt(document.getElementById('firstValue').value);
    var secondValue = parseInt(document.getElementById('secondValue').value);

    var result = firstValue - secondValue;
    document.getElementById('lastVal').innerHTML = result;

}
function multpPlay() {
    var firstValue = parseInt(document.getElementById('firstValue').value);
    var secondValue = parseInt(document.getElementById('secondValue').value);

    var result = firstValue * secondValue;
    document.getElementById('lastVal').innerHTML = result;

}
function divdPlay() {
    var firstValue = parseInt(document.getElementById('firstValue').value);
    var secondValue = parseInt(document.getElementById('secondValue').value);

    var result = firstValue / secondValue;
    document.getElementById('lastVal').innerHTML = result;

}