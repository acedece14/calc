(function () {

    window.onload = function () {
        const input = document.getElementById('input');
        const output = document.getElementById('output');
        window.calque = new Calque(input, output);
        input.focus();
    };

    $(document).ready(function () {
        loadData();
        $('#input').keyup(function () { saveData(); })
    });
})();

function saveData() {
    const savedText = $('#input').val();
    localStorage.setItem('textData', savedText);
}

function loadData() {
    const savedText = localStorage.getItem('textData');
    if (savedText) { $('#input').val(savedText); }
}