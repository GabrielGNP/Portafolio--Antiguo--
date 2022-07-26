window.onload = function(){
    hide(document.getElementById("Biografía"));
    hide(document.getElementById("Aplicaciones"));
    hide(document.getElementById("Contactos"));
    hide(document.getElementById("Blog"));
};



window.onresize = function(){
    resizing();
}
var opSel = -1;
function ChecksOPCont(OP){
    document.getElementById("CheckOP"+OP).checked = true;
    for( i=0; i<4;i++){
        var lavel = document.getElementById("CheckOP"+i).parentNode;
        if (document.getElementById("CheckOP"+i).checked){ 
            lavel.className = "LabelOPContCheck";
        }else{
            lavel.className = "LabelOPCont";
        }
        //document.getElementById("FirstContainer").style.visibility = "hidden";
    }

    if (OP == 0){
        var date = new Date;
        var dayborn = new Date;
        dayborn.setFullYear(1999);
        dayborn.setMonth(2);
        dayborn.setDate(16);
        var years = parseInt((Math.abs(date-dayborn))/(1000 * 3600 * 24*365));//date.getTime() - dayborn.getTime();
        document.getElementById("BioDiv1").innerHTML=" "+years;
    } 
  

    var FirstContainer =  document.getElementById("FirstContainer");
    var Biografia = document.getElementById("Biografía");
    var Aplicaciones = document.getElementById("Aplicaciones");
    var Contactos = document.getElementById("Contactos");
    var Blog = document.getElementById("Blog");
    document.getElementById("dialogBio1").open = true;
    document.getElementById("dialogBio2").open = true;
    document.getElementById("dialogBio3").open = true;
    document.getElementById("dialogBio4").open = true;
    OpenDialog("dialogBio1");
    OpenDialog("dialogBio2");
    OpenDialog("dialogBio3");
    OpenDialog("dialogBio4");
    switch(opSel){
        case -1:
            switch (OP){
                case 0:
                    //FirstContainer.style.transform = "translate(1000,0)";
                   
                    FirstContainer.style.left = "-4000px";
                    setTimeout( hide(FirstContainer), 1);
                    //hide(FirstContainer);
                    show(Biografia);
                    Biografia.style.left = "0px";
                    break;
                case 1:
                    FirstContainer.style.left = "-4000px";
                    Biografia.style.left = "-4000px";
                    setTimeout( hide(FirstContainer), 1);
                    //hide(FirstContainer);
                    show(Aplicaciones);
                    Aplicaciones.style.left = "0px";
                    break;
                case 2:
                    FirstContainer.style.left = "-4000px";
                    Biografia.style.left = "-4000px";
                    Aplicaciones.style.left = "-4000px";
                    setTimeout( hide(FirstContainer), 1);
                    //hide(FirstContainer);
                    show(Contactos);
                    Contactos.style.left = "0px";
                    break;
                case 3:
                    FirstContainer.style.left = "-4000px";
                    Biografia.style.left = "-4000px";
                    Aplicaciones.style.left = "-4000px";
                    Contactos.style.left = "-4000px";
                    setTimeout( hide(FirstContainer), 1);
                    //hide(FirstContainer);
                    show(Blog);
                    Blog.style.left = "0px";
                    break;
            }
            break;
        case 0: 
            switch (OP){
                case 1:
                    Biografia.style.left = "-4000px";
                    setTimeout(hide(Biografia), 1);
                    //hide(Biografia);

                    show(Aplicaciones);
                    Aplicaciones.style.left = "0px";

                    break;
                case 2:
                    Biografia.style.left = "-4000px";
                    setTimeout(hide(Biografia), 1);
                    //hide(Biografia);

                    Aplicaciones.style.left = "-4000px";

                    show(Contactos);
                    Contactos.style.left = "0px";
                    break;
                case 3:
                    Biografia.style.left = "-4000px";
                    setTimeout(hide(Biografia), 1);
                    //hide(Biografia);

                    Aplicaciones.style.left = "-4000px";
                    Contactos.style.left = "-4000px";

                    show(Blog);
                    Blog.style.left = "0px";
                    break;
            }
            break;
        case 1:
            switch (OP){
                case 0:
                    Aplicaciones.style.left = "4000px";
                    setTimeout(hide(Aplicaciones), 1);
                    //hide(Aplicaciones);

                    show(Biografia)
                    Biografia.style.left = "0px";
                    break;
                case 2:
                    Aplicaciones.style.left = "-4000px";
                    setTimeout(hide(Aplicaciones), 1);
                    //hide(Aplicaciones);

                    show(Contactos)
                    Contactos.style.left = "0px";
                    break;
                case 3:
                    Aplicaciones.style.left = "-4000px";
                    setTimeout(hide(Aplicaciones), 1);
                    //hide(Aplicaciones);

                    Contactos.style.left = "-4000px";
                    show(Blog);
                    Blog.style.left = "0px";
                    break;
            }
            break;
        case 2:
            switch (OP){
                case 0:
                    Contactos.style.left = "4000px";
                    setTimeout(hide(Contactos), 1);
                    //hide(Contactos);
                    Aplicaciones.style.left = "4000px";

                    show(Biografia)
                    Biografia.style.left = "0px";
                   
                    break;
                case 1:
                    Contactos.style.left = "4000px";
                    setTimeout(hide(Contactos), 1);
                    //hide(Contactos);
                    show(Aplicaciones)
                    Aplicaciones.style.left = "0px";
                    break;
                case 3:
                    Contactos.style.left = "-4000px";
                    setTimeout(hide(Contactos), 1);
                    //hide(Contactos);

                    show(Blog);
                    Blog.style.left = "0px";
                    break;
            }
            break;
        case 3:
            switch (OP){
                case 0:
                    Blog.style.left = "4000px";
                    setTimeout(hide(Blog), 1);
                    //hide(Blog);

                    show(Biografia)
                    Biografia.style.left = "0";
                    Aplicaciones.style.left = "4000px";
                    Contactos.style.left = "4000px";
                    break;
                case 1:
                    Blog.style.left = "4000px";
                    setTimeout(hide(Blog), 1);
                    //hide(Blog);

                    show(Aplicaciones)
                    Aplicaciones.style.left = "0";
                    Contactos.style.left = "4000px";
                    break;
                case 2:
                    Blog.style.left = "4000px";
                    setTimeout(hide(Blog), 1);
                    //hide(Blog);

                    show(Contactos);
                    Contactos.style.left = "0px";
                    break;
            }
            break;
    }

    opSel = OP;
    
}

function hide(obj){
    obj.style.visibility = "hidden";
   // obj.style.width = "0px";
    obj.style.height = "0px";
   obj.style.top = "0px";
}
function show(obj){
    obj.style.visibility = "visible";
   // obj.style.width = "";
    obj.style.height = "";
    obj.style.top = "";
}

function ActOPCont(OP){
    document.getElementById("CheckOP"+OP).checked=true;
    ChecksOPCont(OP);    
}

function mostrar(nOP){
    show(document.getElementById("infApli"+nOP));
    document.getElementById("infApli"+nOP).style.animation = "colorText 1s 1";
    document.getElementById("imgPlay"+nOP).style.transition = "1s";
    document.getElementById("imgPlay"+nOP).style.filter = "opacity(1)";
    document.getElementById("imgPlay"+nOP).style.visibility = "visible";
    //document.getElementById("imgPlay"+nOP).style.textShadow = "0px 0px 6px #0048ff";
}

function ocultar(nOP){
    hide(document.getElementById("infApli"+nOP));
    document.getElementById("infApli"+nOP).style.animation = "transparentText 1s 1";
    document.getElementById("imgPlay"+nOP).style.transition = "0s";
    //document.getElementById("imgPlay"+nOP).style.textShadow = "";
    document.getElementById("imgPlay"+nOP).style.visibility = "hidden";
    document.getElementById("imgPlay"+nOP).style.filter = "opacity(0)";
}

function BtnEnter(Id){
    document.getElementById(Id).style.textShadow = "0px 0px 20px cyan";
}
function BtnLeave(Id){
    document.getElementById(Id).style.textShadow = "";
}

function OpenDialog(Id){
    var dialog = document.getElementById(Id);
    if (dialog.open == true){
        dialog.open = false;
        dialog.style.border = "0px";
        dialog.style.animation = "transparentText 1s 1";

        switch(Id){
            case "dialogBio1":
                document.getElementById("TitBio1").style.border = "1px solid rgba(104, 255, 255, 0.3)";
                document.getElementById("divDialog1").style.height = "0px";
                break;
            case "dialogBio2":
                document.getElementById("TitBio2").style.border = "1px solid rgba(104, 255, 255, 0.3)";
                document.getElementById("divDialog2").style.height = "0px";
                break;
            case "dialogBio3":
                document.getElementById("TitBio3").style.border = "1px solid rgba(104, 255, 255, 0.3)";
                document.getElementById("divDialog3").style.height = "0px";
                break;
            case "dialogBio4":
                document.getElementById("TitBio4").style.border = "1px solid rgba(104, 255, 255, 0.3)";
                document.getElementById("divDialog4").style.height = "0px";
                break;
        }
    }else{
        dialog.open = true;
        dialog.style.border = "1px solid rgba(104, 255, 255, 0.3)";
        dialog.style.borderTop = "0px";
        dialog.style.animation = "colorText 1s 1";
        var newheight =  dialog.clientHeight.toString();
        //console.log(newheight);
        switch(Id){
            case "dialogBio1":
                document.getElementById("TitBio1").style.borderBottom = "0px";
                document.getElementById("divDialog1").style.height = dialog.clientHeight.toString()+"px";
                document.getElementById("dialogBio1").style.width = (document.getElementById("TitBio1").clientWidth - 32).toString()+"px";
                break;
            case "dialogBio2":
                document.getElementById("TitBio2").style.borderBottom = "0px";
                document.getElementById("divDialog2").style.height = dialog.clientHeight.toString()+"px";
                document.getElementById("dialogBio2").style.width = (document.getElementById("TitBio2").clientWidth - 32).toString()+"px";
                break;
            case "dialogBio3":
                document.getElementById("TitBio3").style.borderBottom = "0px";
                document.getElementById("divDialog3").style.height = dialog.clientHeight.toString()+"px";
                document.getElementById("dialogBio3").style.width = (document.getElementById("TitBio3").clientWidth - 32).toString()+"px";
                break;
            case "dialogBio4":
                document.getElementById("TitBio4").style.borderBottom = "0px";
                document.getElementById("divDialog4").style.height = dialog.clientHeight.toString()+"px";
                document.getElementById("dialogBio4").style.width = (document.getElementById("TitBio4").clientWidth - 32).toString()+"px";
                break;
        }
    }
}

function resizing(){
    if (!!document.getElementById("dialogBio1")){
        document.getElementById("divDialog1").style.height = document.getElementById("dialogBio1").clientHeight.toString()+"px";
        document.getElementById("dialogBio1").style.width = (document.getElementById("TitBio1").clientWidth - 32).toString()+"px";
    }
    if (!!document.getElementById("dialogBio2")){
        document.getElementById("divDialog2").style.height = document.getElementById("dialogBio2").clientHeight.toString()+"px";
        document.getElementById("dialogBio2").style.width = (document.getElementById("TitBio2").clientWidth - 32).toString()+"px";
    }
    if (!!document.getElementById("dialogBio3")){
        document.getElementById("divDialog3").style.height = document.getElementById("dialogBio3").clientHeight.toString()+"px";
        document.getElementById("dialogBio3").style.width = (document.getElementById("TitBio3").clientWidth - 32).toString()+"px";
    }
    if (!!document.getElementById("dialogBio4")){
        document.getElementById("divDialog4").style.height = document.getElementById("dialogBio4").clientHeight.toString()+"px";
        document.getElementById("dialogBio4").style.width = (document.getElementById("TitBio4").clientWidth - 32).toString()+"px";
    }
}

function rotate(id){
    //console.log(id);

    id.style.animation = "rotateIcon 1s";
    setTimeout(function(){
        //KITrotate(id);
        id.style.animation = "";
    },1001); 
}
/*
function ShowPDF(Obj){
    if (!document.getElementById("DivDiploma")){
        var NewIMG = document.createElement("img");
        NewIMG.src = "Files/Diploma Git y GitHub.png";
        NewIMG.style = "height: 50px;";

        var NewDIV = document.createElement("div");
        NewDIV.id = "DivDiploma";
        NewDIV.appendChild(NewIMG);
        console.log(Obj);
        Obj.appendChild(NewDIV);
    }
    
}*/


function showProyect(nOP){
    switch (nOP){
        case 0:
            text = "Aun no tengo una presentación visual de este proyecto, "+
            "<br> dentro de poco estará disponible, de momento puedo dejarle un poco de información al respecto."+
            "<br><br> Gracias y disculpe."+
            "<br><br>"+
            "<br>Este proyecto está construido con el lenguaje C#, es una API para Windows."+
            "<br> Para su creación se utilizó el motor de visual studio 2019"+
            "<br> El objetivo de este programa es el de poder integrar un contador de clicks del ratón y pulsaciones en el teclado junto con un autoclicker."+
            "<br> También integra la posibilidad de utilizar macros (ejecuciónes de un conjunto de comandos) configurados por el usuario. <br><br>";            
            MensNotific(text);
            break;
    }
    
    
}

function MensNotific(text){
    var plantilla = 
    '<div id="MensInf" style="height: 200px; width:400px; position: absolute; top: 40%; left: 35%; background: #373737; overflow-y: auto;">'+
        '<div style="height: 30px; width:100%; max-width:400px; background:linear-gradient(180deg, #181818, #373737); text-align: right; position:fixed">'
            +'<button class="ButOPCont" style="margin: 0px; border: 0px; height: 100%; background:transparent;" onclick="DeleteHTML(`MensInf`)"> X</button>'
        +'</div>'
        +'<div style="text-align:center; padding-top: 35px;">'+text+'</div>'
    +'</div>';
    
    var block = '<div id="displayblack" style=" position:absolute; top:0px; background : #181818d9; height: '+(document.getElementById("totalDocument").clientHeight+100).toString()+"px"+'; width:100%"></div>';
    
    document.getElementById("totalDocument").insertAdjacentHTML("beforeend", block) ;
    document.getElementById("totalDocument").style.overflow = "hidden";
    document.getElementById("displayblack").insertAdjacentHTML("beforeend", plantilla) ;
    
}

function DeleteHTML(ObjId){
    console.log(document.getElementById(ObjId));
    document.getElementById(ObjId).remove();
    if (!!document.getElementById("displayblack")){
        document.getElementById("displayblack").remove();
        document.getElementById("totalDocument").style.overflow = "";
    }
}