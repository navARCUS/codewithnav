let scroll = window.pageYOffset;
window.onscroll= ()=>{
    if (window.scrollY > 75) {
        nav.style.backgroundColor = "rgba(241, 221, 221, 0.927)";
    }else{
        nav.style.backgroundColor = "transparent";
    }
}
console.log(scroll);
