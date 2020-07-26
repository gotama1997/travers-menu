for (const item1 of document.getElementsByClassName('nav-list nav-list-root')[0].children) {
    if(item1){
        item1.children[0].id = "N1" ;
   var text1 =  item1.children[0].children[0].innerText;
    if(item1.children[1]){
        for (const item2 of item1.children[1].children[0].children) {
            if(item2.className!="separator"&&item2.children[0]){
                item2.children[0].children[0].id = "N2 - " +text1 ;
                let text2 = item2.children[0].children[0].innerText;
                for (const item3 of item2.children[0].children[1].children) {
                    item3.children[0].id = "N3 - "+text2+" - "+text1;
                }
            }
        }
    }
    }
}
