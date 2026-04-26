documentgetElementById("pResult").addEventListener("Click",function(){
    debugger;
    var andGate=[[0,0,0],[0,1,0],[1,0,0],[1,1,1]];
    var inputIndex=document.getElementById("txtInputIndex").value

    document.getElementById("pResult").innerHTML=andGate[1];

    });