function view_or_mask(o) {
    if (o.nextElementSibling.style.display === 'none' || o.nextElementSibling.style.display === ''){
        o.nextElementSibling.style.display = 'block';
        o.parentNode.style.listStyle = 'url("../../Images/moins.png")';
    }
    else {
        o.nextElementSibling.style.display = 'none';
        o.parentNode.style.listStyle = 'url("../../Images/plus.png")';
    }
}
