var newId = 0;
function addNewKind() {
    var kind = document.getElementsByName('kind[]');
    var p = kind[newId].parentNode;
    var newKind = kind[newId].cloneNode(true);
    if (kind[newId].value === ''){
        window.alert('Veuillez remplir le champ précédent avant de vouloir en ajouter un autre');
    }
    else {
        newId++;
        newKind.id += newId;
        newKind.value = '';
        newKind.removeAttribute('required');
        p.appendChild(newKind);
    }
}

var newId2 = 0;
function addNewSrc() {
    var src = document.getElementsByName('src[]');
    var p = src[newId2].parentNode;
    var newSrc = src[newId2].cloneNode(true);
    if (src[newId2].value === ''){
        window.alert('Veuillez remplir le champ précédent avant de vouloir en ajouter un autre');
    }
    else {
        newId2++;
        newSrc.id += newId2;
        newSrc.value = '';
        newSrc.removeAttribute('required');
        p.appendChild(newSrc);
    }
}

function viewRange(o){
    document.getElementById('view').firstChild.nodeValue = o.value;
}

function verifyDate() {
    var devDate = document.getElementById('id_devDate').value;
    var finishDate = document.getElementById('id_finishDate').value;
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
    if (devDate !== '') {
        if (devDate >= finishDate){
            window.alert('La date de développement ne peut pas être plus vieille ou égale à la date de sortie');
            document.getElementById('id_devDate').value = '';
            return false;
        }
        else {
            return true;
        }
    }
    else if (finishDate > today){
        window.alert('Veuillez mettre un jeu déjà sorti');
        return false;
    }
    else {
        return true;
    }
}

function verifyDate2() {
    var finishDate = document.getElementById('id_finishDate').value;
    var sellDate = document.getElementById('id_dateSell').value;
    if (sellDate !== ''){
        if (sellDate < finishDate){
            window.alert("C'est impossible d'avoir un date de sortie plus vieille que la date de copies vendues");
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}

function badRates() {
    var rate = document.getElementById('id_rate').value;
    if (rate === '0'){
        return confirm('Êtes-vous sûr de mettre la note de 0 à ce jeu ?');
    }
    else {
        return true;
    }
}

function verifyRequired() {
    var name = document.getElementById('id_name').value;
    var nameGame = document.getElementById('id_nameGame').value;
    var date = document.getElementById('id_finishDate').value;
    var devSite = document.getElementById('id_devSite').value;
    var nbr = document.getElementById('id_nbrSell').value;
    var price = document.getElementById('id_price').value;
    var kind = document.getElementById('id_kind').value;
    var goal = document.getElementById('id_goal').value;
    var src = document.getElementById('id_src').value;
    var view = document.getElementById('id_view').value;
    var rate = document.getElementById('id_rate').value;
    if (name === '' || nameGame === '' || date === '' || devSite === '' || nbr === '' || price === '' || kind === '' || goal === '' || src === '' || view === '' || rate === ''){
        window.alert('Vous devez remplir tous les champs qui ont une étoile, ils sont obligatoires');
        return false;
    }
    else {
        return true;
    }
}

function verify() {
    if (verifyRequired() && verifyDate() && verifyDate2() && badRates()){
        window.alert('Tout est bon vous pouvez envoyer');
        return true;
    }
    return false;
}