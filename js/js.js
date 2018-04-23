$(document).ready(function(){
    $(".class").mouseover(function(){
        $(".class_sub").css("visibility", "visible");
    });
	$(".class").mouseleave(function(){
        $(".class_sub").css("visibility", "hidden");
    });
});