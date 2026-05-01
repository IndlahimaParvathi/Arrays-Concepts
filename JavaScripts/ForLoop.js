document.getElementById("btnCude").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
        var content='';
 for (i=0; i<=number; i++){
    content=content+"<p>"+(i*i*i)+"</P>" 
    }
     document.getElementById("pResult").innerHTML=content; 
});



document.getElementById("btnSquare").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    var content='';
    for (i=0; i<=number; i++){
       content=content+"<p>"+(i*i)+"</P>" 
    }
     document.getElementById("pResult").innerHTML=content;  
});




document.getElementById("btnNumberPrinter").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    var content='';
    for (i=0; i<=number; i++){
     content=content+"<p>"+i+"</P>"     
    }
       document.getElementById("pResult").innerHTML=content;
});




document.getElementById("btnEven").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
        var content='';
    for (i=2; i<=number; i=i+2){
    content=content+"<p>"+i+"</P>"     
    }
     document.getElementById("pResult").innerHTML=content;
});




document.getElementById("btnOdd").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    var content='';
    for (i=1; i<=number; i=i+2){
        content=content+"<p>"+i+"</P>" 
    }
     document.getElementById("pResult").innerHTML=content;
});





document.getElementById("btnDecrease").addEventListener("click",function(){
    debugger;
    var number=Number(document.getElementById("txtNumber").value);
    var content="";
    for (i=100; i>=number; i--){
       content=content+"<p>"+i+"</P>"
    }
    document.getElementById("pResult").innerHTML=content; 
});




