$(document).ready(function(){
    $(".class").mouseover(function(){
        $(".class_sub").css("visibility", "visible");
    });
	$(".class").mouseleave(function(){
        $(".class_sub").css("visibility", "hidden");
    });
	
	$(".announce").mouseover(function(){
        $(".announce_sub").css("visibility", "visible");
    });
	$(".announce").mouseleave(function(){
        $(".announce_sub").css("visibility", "hidden");
    });
	
	$(".department").mouseover(function(){
        $(".department_sub").css("visibility", "visible");
    });
	$(".department").mouseleave(function(){
        $(".department_sub").css("visibility", "hidden");
    });
	
	$(".research").mouseover(function(){
        $(".research_sub").css("visibility", "visible");
    });
	$(".research").mouseleave(function(){
        $(".research_sub").css("visibility", "hidden");
    });
});