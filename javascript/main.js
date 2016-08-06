$(document).ready(function(){
    $(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
});
function homw(){
    $(".home").fadeIn(3000);
    $(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
}
function edu(){
    $(".home").hide();
    $(".education").fadeIn(3000);
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
}
function coc(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").fadeIn(3000);
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
}
function exc(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").fadeIn(3000)
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
}
function tra(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").fadeIn(3000);
    $(".workshop").hide();
    $(".presentation").hide();
}
function ws(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").fadeIn(3000);
    $(".presentation").hide();
}
function pre(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").fadeIn(3000);
}
