let d = new Date();
let day = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
let month = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

function dateHour() {
    let dateNode = document.getElementsByTagName('footer')[0].appendChild(document.createElement('p'));
    let h = d.getHours();
    let m = d.getMinutes();
    if(m < 10) {
        m = '0' + m;
    }
    let today = day[d.getDay()] + ' ' + d.getDate() + ' ' + month[d.getMonth()] + ' ' + d.getFullYear();
    dateNode.appendChild(document.createTextNode('Vous avez ouvert ce site le ' + today + ' à ' + h + 'h' + m + ' !'));
}

let source = ['Images/assassins_creed_iii_physique.jpg','Images/dark_souls_physique.jpg','Images/dofus_physique.jpg','Images/hollowknight_physique.jpg','Images/minecraft_physique.jpg','Images/overwatch_physique.jpg','Images/team_fortress_II_physique.jpg','Images/the_crew_physique.jpg','Images/watch_dogs_physique.jpg','Images/apex_legends_physique.jpg'];
let alt = ['Version physique de Assassin\'s creed III','Version physique de Dark souls','Version physique de Dofus','Version physique de Hollow knight','Version physique de Minecraft','Version physique de Overwatch','Version physique de Team Fortress II','Version physique de The Crew','Version physique de Watch Dogs','Version physique de Apex legends'];
let description = [];
let i = 0;
let j = 0;

function changeImage() {
    if (j % 2 === 1){
        document.getElementById('images').src = source[i];
        document.getElementById('images').alt = alt[i];
        document.getElementById('images').title = 'Cliquez pour arrêter de faire défiler les images';
        if (i < source.length - 1){
            i++;
        }
        else {
            i = 0;
        }
        setTimeout('changeImage()',2500);
    }
    else {
        document.getElementById('images').src = source[(i - 1)];
        document.getElementById('images').alt = alt[(i - 1)];
        document.getElementById('images').title = 'Cliquez pour faire défiler les boite PC de chaque jeu présent sur le site';
    }
}