document.getElementById("btnCude").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    for (i=0; i<=number; i++){
        console.log(i*i*i)
    }
    
});
