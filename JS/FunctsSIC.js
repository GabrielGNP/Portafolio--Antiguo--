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
            document.documentElement.style.setProperty('--backgroundLight','#656e89');
            document.documentElement.style.setProperty('--background', '#bcd3fb');
            document.documentElement.style.setProperty('--backgroundDark', '#1b1c21');
            document.documentElement.style.setProperty('--backgroundHebyDark', '#2e2e2e');
            document.getElementById("titleText").style.color = "#c6c6c6";

            document.documentElement.style.setProperty('--TextColor', '#191919');
            document.documentElement.style.setProperty('--alert', '#c8451f');
            break;
    }
    
}

function ChangeColor(OP){

    console.log((getComputedStyle(document.documentElement).getPropertyValue('--colorbase')).trim());
    //document.documentElement.style.setProperty('--backgroundDark', 'green');
    
    switch (OP){
        case "Blue":
            document.documentElement.style.setProperty('--colorbase','#0946ff');
            document.documentElement.style.setProperty('--colorbaseDark','#072b9b');
            document.getElementById("img1").src="../imgs/SIC/v2B.png";
            document.getElementById("img2").src="../imgs/SIC/v2BOP.png";
            break;

        case "Red":
            document.documentElement.style.setProperty('--colorbase','#b22222');
            document.documentElement.style.setProperty('--colorbaseDark','#600c0c');
            document.getElementById("img1").src="../imgs/SIC/v2R.png";
            document.getElementById("img2").src="../imgs/SIC/v2ROP.png";
            break;

        case "Yelow":
            document.documentElement.style.setProperty('--colorbase','#ffa500');
            document.documentElement.style.setProperty('--colorbaseDark','#915e01');
            document.getElementById("img1").src="../imgs/SIC/v2Y.png";
            document.getElementById("img2").src="../imgs/SIC/v2YOP.png";
            break;

        case "Green":
            document.documentElement.style.setProperty('--colorbase','#9acd32');
            document.documentElement.style.setProperty('--colorbaseDark','#526f15');
            document.getElementById("img1").src="../imgs/SIC/v2G.png";
            document.getElementById("img2").src="../imgs/SIC/v2GOP.png";
            break;

        case "Cyan":
            document.documentElement.style.setProperty('--colorbase','#40e0d0');
            document.documentElement.style.setProperty('--colorbaseDark','#18887d');
            document.getElementById("img1").src="../imgs/SIC/v2C.png";
            document.getElementById("img2").src="../imgs/SIC/v2COP.png";
            break;

        case "LightBlue":
            document.documentElement.style.setProperty('--colorbase','#6495ed');
            document.documentElement.style.setProperty('--colorbaseDark','#335695');
            document.getElementById("img1").src="../imgs/SIC/v2LB.png";
            document.getElementById("img2").src="../imgs/SIC/v2LBOP.png";
            break;

        case "Purple":
            document.documentElement.style.setProperty('--colorbase','#9370db');
            document.documentElement.style.setProperty('--colorbaseDark','#54398a');
            document.getElementById("img1").src="../imgs/SIC/v2V.png";
            document.getElementById("img2").src="../imgs/SIC/v2VOP.png";
            break;
    }
    
}