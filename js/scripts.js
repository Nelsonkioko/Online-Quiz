/*$(document).ready(function(){
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
*/
$(document).ready(function(){
    $("input[type='button']").click(function(){
        var total=0;
        var num = 0;
        var arr = [];
        for(num=1;num<=10;num+=1) {
        var questions = parseInt($("input[name='quiz' + num]:checked").val());
        arr.push(questions);
        for (var index = 0; index < arr.length; index += 1)
        {
          total += arr[index];
          alert(arr);
        }

}

        document.getElementById('finalscore').innerHTML="you have scored " + total + "points";
    });

});


$(document).ready(function(){
  // scrolldown progress bar
$(window).scroll(function() {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  scrollPercent = (s / (d - c)) * 100;
  var position = scrollPercent;

  $("#progressbar").attr('value', position);

});
});
