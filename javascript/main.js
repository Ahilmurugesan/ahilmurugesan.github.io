$(document).ready(function(){
    $(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
});
function edu(){
    $(".home").hide();
    $(".education").show();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
}
function coc(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").show();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
}
function exc(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").show();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").hide();
}
function tra(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").show();
    $(".workshop").hide();
    $(".presentation").hide();
}
function ws(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").show();
    $(".presentation").hide();
}
function pre(){
 	$(".home").hide();
 	$(".education").hide();
    $(".cocurricular").hide();
    $(".extracurricular").hide();
    $(".trainings").hide();
    $(".workshop").hide();
    $(".presentation").show();
}