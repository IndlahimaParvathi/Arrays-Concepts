document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
   var names = ["hima" ,"nandini", "likhitha", "Sony", "sowji"];
    index=document.getElementById("txtIndex").value
    changeName=document.getElementById("txtChangeName").value
    document.getElementById("pResult").innerHTML=names

    names[index] = changeName;
    document.getElementById("pResultMutable").innerHTML = names;

});