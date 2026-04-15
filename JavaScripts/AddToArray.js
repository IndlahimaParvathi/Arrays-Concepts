
var animals = []
document.getElementById("btnAddToArray").addEventListener("click", function () {
    debugger;
    var inputTest = (document.getElementById("txtInputTest").value);
    
    animals.push(inputTest)

    document.getElementById("pResult").innerHTML = animals;
    document.getElementById("txtInputTest").value="";


});
