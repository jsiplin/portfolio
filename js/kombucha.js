$("h1,h2,h3,li").addClass("blue");
$("p").addClass("fancy");

$(".expand-improve").click(function(){
    $("body > div.alert.alert-primary > ol").remove();
    $(".expand-improve").after("<ol> \
            <li>HTML Added</li>\
            <li>Cascading style sheet linked</li>\
            <li>JavaScript enabled</li>\
            <li>Boostrap @5.3.0</li>\
            <li>Jquery 3.7.1</li>\
            <li>This Drop Down</li>\
            <li><button>Collapse</button></li>\
        </ol>");
        $("body > div.alert.alert-primary > ol > li > button").on
        ("click",function(){$("body > div.alert.alert-primary > ol").remove()});
})
