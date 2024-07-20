$("h1,h2,h3,li").addClass("blue");
$("p").addClass("fancy");
$("button").mouseover(function(){$("button").css("background","red");})

$(".expand-improve").click(function(){
    $(".expand-improve").after("<ol><li></li></ol>");

})