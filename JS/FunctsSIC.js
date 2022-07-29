function showInter(obj){
    console.log(obj.children[0]);
    obj.children[0].style.visibility = "visible";
    obj.children[0].style.height = "200px" ;
    //console.log(document.getElementById("LfCl").children);
    //document.getElementById("LfCl").children.style.visibility = "hidden";
}

function hiddeInter(obj){
    console.log(obj.children[0]);
    obj.children[0].style.visibility = "hidden";
    obj.children[0].style.height = "0px" ;
}




function ChangeDarkLight(OP){

    var CheckCD = document.getElementById("ChaD");
    var CheckCL = document.getElementById("ChaL");

    console.log((getComputedStyle(document.documentElement).getPropertyValue('--background')).trim());
    //document.documentElement.style.setProperty('--backgroundDark', 'green');
    
    switch (OP){
        case 0:
            CheckCL.checked = false;
            console.log("Modo Oscuro");
            CheckCL.style.color ="var(--TextColor)";
            CheckCL.style.fontSize = "15px";
            CheckCD.style.color ="var(--colorbase)";
            CheckCD.style.fontSize = "25px";
            document.documentElement.style.setProperty('--backgroundLight','#2a2a2a');
            document.documentElement.style.setProperty('--background', '#202326');
            document.documentElement.style.setProperty('--backgroundDark', '#1b1c21');
            document.documentElement.style.setProperty('--backgroundHebyDark', '#131416');

            document.documentElement.style.setProperty('--TextColor', '#c6c6c6');
            document.documentElement.style.setProperty('--alert', 'orange');
            
            break;
        case 1:
            CheckCD.checked = false;
            console.log("Modo Claro");
            CheckCL.style.color ="var(--colorbase)";
            CheckCL.style.fontSize = "25px";
            CheckCD.style.color ="var(--TextColor)";
            CheckCD.style.fontSize = "15px";
            document.documentElement.style.setProperty('--backgroundLight','#c6c6c6');
            document.documentElement.style.setProperty('--background', '#b9c7df');
            document.documentElement.style.setProperty('--backgroundDark', '#666666');
            document.documentElement.style.setProperty('--backgroundHebyDark', '#2e2e2e');

            document.documentElement.style.setProperty('--TextColor', '#191919');
            document.documentElement.style.setProperty('--alert', '#c8451f');
            break;
    }
    
}