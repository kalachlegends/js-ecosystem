$(document).ready(function() {
 $('.header_burger').click(function(event){ //при клике на бургер что дожно происхоидть
 	$('.header_burger,.navgation__header').toggleClass('active');//когда человек будет нажажимать на бургер будет добавляться класс active
 	$('body').toggleClass('lock');
 });
});
