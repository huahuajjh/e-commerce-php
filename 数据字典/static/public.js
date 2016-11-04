function myshow() {
	document.getElementById('complex').style.display = "block";
}

function myhide() {
	document.getElementById('complex').style.display = "none";
}
$(document).ready(function(){
	
 	$(".btm-close").click(function(){
 		$(this).parent().css("display","none");
 	});
 
 });
 window.onload=function(){
 	$(".btm").animate({"bottom":"0"},600);
 	
 }

 $(document).ready(function() {
    var ScrolltoTop = $(".back");
    $(ScrolltoTop).hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() == "0") {
            $(ScrolltoTop).fadeOut("slow")
        } else {
            $(ScrolltoTop).fadeIn("slow")
        }
    });
    $(ScrolltoTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        },
        700)
    })
});
$(function() {

    $(".ibar .ibar-btn-item").hover(function(){
    	$(this).addClass("show");
    	$(this).find(".ibar-tool").stop().animate({right: "45px"},300);
    },function(){
    	$(this).removeClass("show");
    	$(this).find(".ibar-tool").stop().animate({right: "55px"},300);
    });

    $(".ibar .btn-customer").click(function(){
    	if($(this).hasClass("show")){
    		$(this).removeClass("show");
    		$(".ibar-intro").animate({right: "-280px"},300);
    	}else{
    		$(this).addClass("show");
    		$(".ibar-intro").animate({right: "40px"},300);
    	}
    })
    $(".ibar-intro").find(".ibar-colse").click(function(){
    	$(".ibar .btn-customer").removeClass("show")
    	$(".ibar-intro").animate({right: "-280px"},300);
    });

    $(".ibar .btn-gotop").click(function(){
    	$('html, body').animate({ scrollTop: 0 },300)
    })
});