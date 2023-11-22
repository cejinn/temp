// header
$(function(){
    // 일단 닫은 상태
    $(".dp2").hide();

    $("#header .gnb > li:eq(0)").on("mouseenter", function(){
        $(".dp2").hide();
        $(".dp2:eq(0)").show();
    }).on("mouseleave", function(){
        $(".dp2:eq(0)").hide();
    });


    $("#header .gnb > li:eq(1)").on("mouseenter", function(){
        $(".dp2").hide();
        $(".dp2:eq(1)").show();
    }).on("mouseleave", function(){
        $(".dp2:eq(1)").hide();
    });

    $("#header .gnb > li:eq(2)").on("mouseenter", function(){
        $(".dp2").hide();
        $(".dp2:eq(2)").show();
    }).on("mouseleave", function(){
        $(".dp2:eq(2)").hide();
    });
});
