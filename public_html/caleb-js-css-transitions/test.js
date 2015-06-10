function popup(){
    var win=document.getElementById('ad');
    if((window.pageYOffset+window.innerHeight)>=document.body.offsetHeight){
        win.style.right='0px';
    }else{
        win.style.right='-452px';
    }
}
window.onscroll=popup;