
$(document).ready(function(){
$("input[type='button']").click(function(){
//create an array for storing name ie quiz1 to quiz10
arr = [];
for (i = 1; i <= 10; i++) {
query = "quiz"+i;
arr.push(query);
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
document.getElementById('finalscore').innerHTML="you have scored " + total + "%";

if (arr2 === "")  {
  alert("please answer all the questions");
}
});
});

/*
$(document).ready(function(){
$("input[type='button']").click(function(){
var question1 = parseInt($("input[name='quiz1']:checked").val());
var question2 = parseInt($("input[name='quiz2']:checked").val());
var question3 = parseInt($("input[name='quiz3']:checked").val());
var question4 = parseInt($("input[name='quiz4']:checked").val());
var question5 = parseInt($("input[name='quiz5']:checked").val());
var question6 = parseInt($("input[name='quiz6']:checked").val());
var question7 = parseInt($("input[name='quiz7']:checked").val());
var question8 = parseInt($("input[name='quiz8']:checked").val());
var question9 = parseInt($("input[name='quiz9']:checked").val());
var question10 = parseInt($("input[name='quiz10']:checked").val());
var total = question1 + question2 + question3 +  question4 +  question5 + question6 + question7 + question8 + question9 + question10;
document.getElementById('finalscore').innerHTML="you have scored " + total + "%";
});
});
*/


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
