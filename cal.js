function tambah() {
    var angka1 = parseFloat(document.calculator.angka1.value);
    var angka2 = parseFloat(document.calculator.angka2.value);
    var angka3 = parseFloat(document.calculator.angka3.value);
    var hasil = angka1 + angka2 + angka3;
    document.calculator.hasil.value = hasil;
}
function kurang() {
    var angka1 = parseFloat(document.calculator1.angka1.value);
    var angka2 = parseFloat(document.calculator1.angka2.value);
    var angka3 = parseFloat(document.calculator1.angka3.value);
    var hasil = angka1 - angka2 - angka3;
    document.calculator1.hasil.value = hasil;
}
function kali() {
    var angka1 = parseFloat(document.calculator2.angka1.value);
    var angka2 = parseFloat(document.calculator2.angka2.value);
    var angka3 = parseFloat(document.calculator2.angka3.value);
    var hasil = angka1 * angka2 * angka3;
    document.calculator2.hasil.value = hasil;
}
function bagi() {
    var angka1 = parseFloat(document.calculator3.angka1.value);
    var angka2 = parseFloat(document.calculator3.angka2.value);
    var angka3 = parseFloat(document.calculator3.angka3.value);
    var hasil = angka1 / angka2 / angka3;
    document.calculator3.hasil.value = hasil;
}