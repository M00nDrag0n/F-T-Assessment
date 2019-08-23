$(document).ready(function() {
  getInputs("dr", 3);

});

function getInputs(inputId, listCount){
  $("#form-" + inputId).submit(function(event){
    event.preventDefault();

    var inputNums = [];
    for(var i=1; i<=listCount; i++){
      
    }
  })
}
