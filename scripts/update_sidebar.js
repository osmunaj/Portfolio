
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const str = window.location.href;
const spl = str.split('/');
const current = spl[spl.length-1]


const links = document.querySelectorAll('.link');

links.forEach((link) => {

    link.classList.remove('selected');
    let link_str = link.href;
    const spl2 = link_str.split('/');
    link_str = spl2[spl2.length-1];
    console.log(link_str);
    if(link_str == current){
        link.classList.add('selected');
    }
});