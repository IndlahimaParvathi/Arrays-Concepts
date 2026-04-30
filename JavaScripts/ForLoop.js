document.getElementById("btnCude").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    for (i=0; i<=number; i++){
        console.log(i*i*i)
    }
    
});

document.getElementById("btnSquare").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    for (i=0; i<=number; i++){
        console.log(i*i)
    }
    
});

document.getElementById("btnNumberPrinter").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    for (i=0; i<=number; i++){
        console.log(i)
    }
    
});

document.getElementById("btnEven").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    for (i=2; i<=number; i=i+2){
        console.log(i)
    }
    
});

document.getElementById("btnOdd").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    for (i=1; i<=number; i=i+1){
        console.log(i)
    }
    
});



