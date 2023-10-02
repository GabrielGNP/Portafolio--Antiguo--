function ChecksOPCont(OP){
    document.getElementById("CheckOP"+OP).checked = true;
    for( i=0; i<4;i++){
        var lavel = document.getElementById("CheckOP"+i).parentNode;
        if (document.getElementById("CheckOP"+i).checked){ 
            lavel.className = "LabelOPContCheck";
        }else{
            lavel.className = "LabelOPCont";
        }
        document.getElementById("FirstContainer").style.visibility = "hidden";
    }
        

    switch (OP){
        case 0:
            show( document.getElementById("Biografía"));
            hide(document.getElementById("Aplicaciones"));
            hide(document.getElementById("Blog"))
            hide(document.getElementById("Contactos"));
            break;
        case 1:
            hide(document.getElementById("Biografía"));
            show(document.getElementById("Aplicaciones"));
            hide(document.getElementById("Contactos"));
            hide(document.getElementById("Blog"));
            break;
        case 2:
            hide(document.getElementById("Biografía"));
            hide(document.getElementById("Aplicaciones"));
            show(document.getElementById("Contactos"));
            hide(document.getElementById("Blog"));
            break;
        case 3:
            hide(document.getElementById("Biografía"));
            hide(document.getElementById("Aplicaciones"));
            hide(document.getElementById("Contactos"));
            show(document.getElementById("Blog"));
            break;
    }
}

function hide(obj){
    obj.style.visibility = "hidden";
    obj.style.width = "0px";
    obj.style.height = "0px";
}
function show(obj){
    obj.style.visibility = "visible";
    obj.style.width = "";
    obj.style.height = "";
}

function ActOPCont(OP){
    document.getElementById("CheckOP"+OP).checked=true;
    ChecksOPCont(OP);    
}
