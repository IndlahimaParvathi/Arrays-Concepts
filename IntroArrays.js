document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
    var index=document.getElementById("txtIndex").value;
    var shoppingapp=Number["myntra","ajio",'savana','flipkart','amazon']
    document.getElementById("pResult").innerHTML=shoppingapp[index];
}
)