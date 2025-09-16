var coll = document.getElementsByClassName("collapsible");



for (var i = 0; i < coll.length; i++) {
   
    var content = coll[i].nextElementSibling;
    const arrow = coll[i].querySelector('.icon_left')

    if(content == null){continue;} 
    const cl = content.classList;
    const has_class = cl.contains("open") && cl.contains("close");
    if(!has_class) cl.add("loaded");
    

    coll[i].addEventListener("click", function() {
        var isopen = cl.contains("open");
        if (isopen) {
            cl.add("close");
            cl.remove("open");
            arrow.classList.remove("flipped");
            
        } else {
            cl.add("open");
            cl.remove("close");
            cl.remove("loaded");
            arrow.classList.add("flipped");
        }
    });
}