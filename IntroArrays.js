document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
    var index=Number(document.getElementById("txtIndex").value);
    var shoppingApp=["myntra","ajio",'savana','flipkart','amazon'];
    document.getElementById("pResult").innerHTML=shoppingApp[index];

});



  document.getElementById("btnFirstElement").addEventListener("click",function(){
    debugger;

    var index=Number(document.getElementById("txtIndex").value);
     var shoppingApp=["myntra","ajio",'savana','flipkart','amazon'];
     document.getElementById("pResult").innerHTML=shoppingApp[0];

  });




    document.getElementById("length").addEventListener("click",function(){
        debugger;

     var shoppingApp=["myntra","ajio",'savana','flipkart','amazon'];
      document.getElementById("pResult").innerHTML=shoppingApp.length

         });




          document.getElementById("btnlastElement").addEventListener("click",function(){
        debugger;

     var shoppingApp=["myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','amazon',"myntra","ajio",'savana','flipkart','hima'];
      document.getElementById("pResult").innerHTML=shoppingApp[shoppingApp.length-1];        
     });
