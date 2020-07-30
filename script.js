  for (const itr1 of document.getElementsByClassName("nav-item-root")) {
        var text1 = itr1.children[0].children[0].innerText.trim();
        itr1.children[0].id = ("N1").trim();
        for (const itr2 of itr1.children[1].children[0].children) {
            if(itr2.className!="separator"){
                var text2 = itr2.children[0].children[0].innerText.trim();
                itr2.children[0].children[0].id=("N2 - "+text1).trim();
                if(text1!="Catálogos en Línea"){
for (const itr3 of itr2.children[0].children[1].children) {
                   var text3 = itr3.children[0].innerText.trim();
                   itr3.children[0].id = ("N3 - "+text2+" - "+text1).trim();
                }
                }
                
            }
        }
    }
