$(document).ready(function() {
  getInputs("dr", 3);

  getInputs("vu", 3);

  getInputs("ob-m", 5);

  getInputs("ob-n-m", 5);
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
      items.push($("#item"+num+"-"+inputId).val().toUpperCase());
    });
    items.sort();

    items.forEach(function(item){
      $(".receipt-"+inputId).append("<li>"+item+"</li>");
    });
  });
}
