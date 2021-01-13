function changeColor() {
    var textNode = document.getElementById('id_book');
    var color = document.getElementById('id_color').value;
    textNode.style.color = color;
}

function upY() {
    document.getElementById('upYes').style.display = 'block';
}
function upN() {
    document.getElementById('upYes').style.display = 'none';
}

function upYes() {
    var upY = document.getElementById('upYes').style.display;
    var upYes = document.getElementsByName('upYes[]');
    let j = 0;
    if (upY === 'block'){
        for (let i = 0; i <= 4; i++){
            if (upYes[i].checked === false){
                j++
            }
            if (j === 5){
                window.alert('Si vous suggérer des améliorations, merci de nous indiquez lesquels !');
            }
        }
    }
}

function other() {
    document.getElementsByName('upYes[]')[4].checked = true;
}

function checkOther() {
    var inputOther = document.getElementById('id_other');
    var textOther = document.getElementById('upOther');
    if (inputOther.checked && textOther.value === ''){
        window.alert("Vous avez sélectionnez autres améliorations mais vous n'avez pas suggérer d'autre améliorations, veuillez donc remplir le champs de saisie s'il vous plaît");
        textOther.placeholder = 'Veuillez remplir ce champ ou décoher la case autre';
    }
}

function verifyName(o, name) {
    var input = o.value;
    for (let i = 0; i < input.length; i++){
        let letterAscii = input.charCodeAt(i);
        if (letterAscii !== 32 && letterAscii !== 45 && (letterAscii < 65 || letterAscii > 90) && (letterAscii < 97 || letterAscii > 122)){
            window.alert('Vous devez écrire votre ' + name + " correctement, c'est à dire sans caractère spéciaux (à part '-' et 'espace')");
            o.value = '';
            o.placeholder = 'Votre ' + name + ' (sans caractère spéciaux)';
        }
    }
}

function verifyBirthDate() {
    var birth = document.getElementById('id_birth').value;
    var date = new Date();
    var day = '0';
    if (date.getDate() < 10){
        day = '0' + date.getDate();
    }
    else {
        day = date.getDate();
    }
    var month = '0';
    if (date.getMonth() < 10){
        month = '0' + (date.getMonth() + 1);
    }
    else {
        month = date.getMonth() + 1;
    }
    var today = date.getFullYear() + '-' + month + '-' + day;
    if (birth >= today){
        window.alert('Vous ne pouvez pas être agé de moins d\'un jour');
        document.getElementById('id_birth').value = '';
    }
}

