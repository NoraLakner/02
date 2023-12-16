// (1. módszer)
function paralelogrammaTerulet1(a, m) {
    var terület = a * m;
    return terület;
}
// (2. módszer)
function paralelogrammaTerulet2(a, b, szög) {
    // Szöget radiánba konvertáljuk, mert a kód azt követeli majd meg
    var szögRad = (szög * Math.PI) / 180;
    var terület = a * b * Math.sin(szögRad);
    return terület;
}
function updateHtmlContent(area) {
    var resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.innerText = "Paralelogramma ter\u00FClete: ".concat(area);
    }
}
