function recap() {
    if (verify()){
        var pseudo = document.getElementById('id_name').value;
        var gameName = document.getElementById('id_nameGame').value;
        var date = document.getElementById('id_finishDate').value;
        var dev = document.getElementById('id_devSite').value;
        var sell = document.getElementById('id_nbrSell').value;
        var price = document.getElementById('id_price').value;
        var kind = document.getElementsByName('kind[]');
        var goal = document.getElementById('id_goal').value;
        var src = document.getElementsByName('src[]');
        var view = document.getElementById('id_view').value;
        var rate = document.getElementById('id_rate').value;
        var kinds = [];
        for (let i = 0; i < kind.length; i++){
            if (kind[i].value !== ''){
                kinds.push(kind[i].value);
            }
        }
        var srcs = [];
        for (let i = 0; i < src.length; i++){
            if (src[i].value !== ''){
                srcs.push(src[i].value);
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
        var p9 = document.createElement('p');
        var p10 = document.createElement('p');
        var p11 = document.createElement('p');
        var h3 = document.createElement('h3');
        var h31 = document.createElement('h3');
        var h32 = document.createElement('h3');
        var h33 = document.createElement('h3');
        var a = document.createElement('a');
        var a2 = document.createElement('a');
        var a3 = document.createElement('a');
        var ul = document.createElement('ul');
        var ul2 = document.createElement('ul');
        footer.appendChild(p).appendChild(document.createTextNode('Formulaire envoyé le ' + today + ' à ' + h + 'h' + m + ' :'));
        footer.appendChild(h3).appendChild(document.createTextNode('Informations générales'));
        footer.appendChild(p1).appendChild(document.createTextNode('Pseudo : ' + pseudo));
        footer.appendChild(p2).appendChild(document.createTextNode('Nom du jeu : ' + gameName));
        footer.appendChild(h31).appendChild(document.createTextNode('Caractéristiques du jeu'));
        footer.appendChild(p3).appendChild(document.createTextNode('Date de sortie : ' + date));
        a.href = dev;
        footer.appendChild(p9).appendChild(document.createTextNode('Développé par : '));
        p9.appendChild(a).appendChild(document.createTextNode(dev));
        footer.appendChild(p4).appendChild(document.createTextNode('Copies vendues : ' + sell));
        footer.appendChild(p5).appendChild(document.createTextNode('Prix : ' + price + '€'));
        footer.appendChild(h32).appendChild(document.createTextNode('Résumé du jeu'));
        if (kinds.length === 1){
            a2.href = kinds[0];
            footer.appendChild(p10).appendChild(document.createTextNode('Genre : '));
            p10.appendChild(a2).appendChild(document.createTextNode(kinds[0]));
        }
        else {
            footer.appendChild(ul).appendChild(document.createTextNode('Genres :'));
            for (let i = 0; i < kinds.length; i++){
                let ak = document.createElement('a');
                ak.href = kinds[i];
                ul.appendChild(document.createElement('li')).appendChild(ak).appendChild(document.createTextNode(kinds[i]));
            }
        }
        footer.appendChild(p6).appendChild(document.createTextNode('But : ' + goal));
        if (srcs.length === 1){
            a3.href = srcs[0];
            footer.appendChild(p11).appendChild(document.createTextNode('Source : '));
            p11.appendChild(a3).appendChild(document.createTextNode(srcs[0]));
        }
        else {
            footer.appendChild(ul2).appendChild(document.createTextNode('Sources :'));
            for (let i = 0; i < srcs.length; i++){
                let as = document.createElement('a');
                as.href = srcs[i];
                ul2.appendChild(document.createElement('li')).appendChild(as).appendChild(document.createTextNode(srcs[i]));
            }
        }
        footer.appendChild(h33).appendChild(document.createTextNode('Avis'));
        footer.appendChild(p7).appendChild(document.createTextNode('Votre avis : ' + view));
        footer.appendChild(p8).appendChild(document.createTextNode('Note : ' + rate + '/10'));
    }
}