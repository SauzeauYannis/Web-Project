function recap() {
    var name = document.getElementById('id_name').value;
    var firstName = document.getElementById('id_firstName').value;
    var woman = document.getElementById('id_woman').checked;
    var man = document.getElementById('id_man').checked;
    var birth = document.getElementById('id_birth').value;
    var mail = document.getElementById('id_mail').value;
    var upYes = document.getElementById('id_yes').value;
    var upYesTrue = document.getElementsByName('upYes[]');
    var upNo = document.getElementById('id_no').value;
    var book = document.getElementById('id_book').value;
    if ((woman === false && man === false) || (upYes === false && upNo === false) || name === '' || firstName === '' || birth === '' || mail === '' || book === ''){
        window.alert('Vous devez remplir tous les champs qui ont une étoile, ils sont obligatoires');
    }
    else {
        var gender = '';
        var up = [];
        if (woman){
            gender = 'Féminin';
        }
        else {
            gender = 'Masculin';
        }
        if (upYes){
            if (upYesTrue[0].checked){
                up.push('XML');
            }
            if (upYesTrue[1].checked){
                up.push('HTML');
            }
            if (upYesTrue[2].checked){
                up.push('CSS');
            }
            if (upYesTrue[3].checked){
                up.push('JavaScript');
            }
            if (upYesTrue[4].checked) {
                window.other = document.getElementById('upOther').value;
                up.push('Autre : ' + other);
            }
        }
        var d = new Date();
        var day = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
        var month = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
        var h = d.getHours();
        var m = d.getMinutes();
        if(m < 10) {
            m = '0' + m;
        }
        var today = day[d.getDay()] + ' ' + d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
        var footer = document.getElementsByTagName('footer')[0];
        var p = document.createElement('p');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        var p4 = document.createElement('p');
        var p5 = document.createElement('p');
        var p6 = document.createElement('p');
        var p7 = document.createElement('p');
        var p8 = document.createElement('p');
        var h3 = document.createElement('h3');
        var h31 = document.createElement('h3');
        var ul = document.createElement('ul');
        footer.appendChild(p).appendChild(document.createTextNode('Formulaire envoyé le ' + today + ' à ' + h + 'h' + m + ' :'));
        footer.appendChild(h3).appendChild(document.createTextNode('Qui êtes-vous ?'));
        footer.appendChild(p1).appendChild(document.createTextNode('Nom : ' + name));
        footer.appendChild(p2).appendChild(document.createTextNode('Prénom : ' + firstName));
        footer.appendChild(p3).appendChild(document.createTextNode('Sexe : ' + gender));
        footer.appendChild(p4).appendChild(document.createTextNode('Date de naissance : ' + birth));
        footer.appendChild(p5).appendChild(document.createTextNode('Email : ' + mail));
        footer.appendChild(h31).appendChild(document.createTextNode('Ce que vous avez à dire :'));
        if (up.length === 0){
            footer.appendChild(p6).appendChild(document.createTextNode('Suggérez-vous des améliorations pour ce site ? : Non'));
        }
        else {
            footer.appendChild(p6).appendChild(document.createTextNode('Suggérez-vous des améliorations pour ce site ? : Oui'));
            footer.appendChild(p7).appendChild(document.createTextNode('Que doit-on améliorer ?'));
            footer.appendChild(ul);
            for (let i = 0; i < up.length; i++){
                document.getElementsByTagName('ul')[0].appendChild(document.createElement('li')).appendChild(document.createTextNode(up[i]));
            }
        }
        footer.appendChild(p8).appendChild(document.createTextNode('Livre d\'or : ' + book));
    }
}