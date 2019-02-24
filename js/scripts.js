
$(document).ready(function(){
$("input[type='button']").click(function(){
//create an array for storing name ie quiz1 to quiz10
arr = [];
for (i = 1; i <= 10; i++) {
query = "quiz"+i;
arr.push(query);
}

//Do a form validation to check if all the questions have been answered
for (var index = 0; index < arr.length; index += 1) {
var radio = document.getElementsByName(arr[index]);
}
if (radio.checked == null)  {
  alert("please answer all the questions");
  document.location.reload();
  }
  else {
    alert("hatukuelewi");
  }

//Create an array for storing the checked values
arr2=[];
for (var index = 0; index < arr.length; index += 1) {
var questions = parseInt($("input[name=" + arr[index] + "]:checked").val());
arr2.push(questions);
}



//Do a total of the checked values collected
var total = 0;
for (var index = 0; index < arr2.length; index += 1) {
  total += arr2[index];
}
//Display the total marks
document.getElementById('finalscore').innerHTML="you have scored " + total + "%";


});
});

$(document).ready(function(){
  // scrolldown progress bar
$(window).scroll(function() {
  var s = $(window).scrollTop();
  var d = $(document).height();
  var c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressbar").attr('value', position);

});
});
