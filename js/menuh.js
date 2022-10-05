function desplegar(){
    document.getElementById("ocultar").style.display="block"
}
    function incognito(){
        document.getElementById("ocultar").style.display="none"
}
function agrupar(){
    var desplegar=document.getElementById("ocultar")
    if(ocultar.style.display=="block"){
        incognito()
    }else{
        desplegar()
    }
}