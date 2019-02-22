$(document).ready(function(){
    $("input[type='button']").click(function(){
        
        var quesone = parseInt($("input[name='quiz1']:checked").val());
        var questwo = parseInt($("input[name='quiz2']:checked").val());
        var questhree = parseInt($("input[name='quiz3']:checked").val());
        var total = quesone + questwo + questhree;
        document.getElementById('finalscore').innerHTML="you have scored " + total + "points";
    });

});
