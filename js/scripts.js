$(document).ready(function() {
  getInputs("dr", 3);

});

function getInputs(inputId, listCount){
  $("#form-" + inputId).submit(function(event){
    event.preventDefault();

    var inputNums = [];
    for(var i=1; i<=listCount; i++){
      inputNums.push(i);
    }
    var items=[];
    inputNums.forEach(function(num){
      items.push($("#item"+num+"-"+inputId).val().toUppercase());
    });
    items.sort();
  })
}
