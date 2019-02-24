
$(document).ready(function(){
$("input[type='button']").click(function(){
//create an array for storing name ie quiz1 to quiz10
arr = [];
for (i = 1; i <= 10; i++) {
query = "quiz"+i;
arr.push(query);
}

//Do a form validation to check if all the questions have been answered
var inputs = document.getElementById("quiz").elements;
   var count  = 0;
   for (var i = 0; i < inputs.length; i++) {
       if (inputs[i].type == 'radio' && inputs[i].checked) {
           count++;
       }
   }
   if(count<10) {
     alert("please answer all the questions");
     document.location.reload();
   }
   else {
     alert("Thank you for answering all the questions");
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
  var a = $(window).scrollTop();
  var b = $(document).height();
  var c = $(window).height();
  scrollPercent = (a / (b - c)) * 100; 
  var position = scrollPercent;

  $("#progressbar").attr('value', position); //setting the value of the progressbar

});
});
