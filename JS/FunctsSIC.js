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

