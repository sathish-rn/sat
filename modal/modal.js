$(document).ready(function(){
	var tar = $('.modal-btn').data('target');
	var elem = document.getElementById(tar);
	$('.modal-btn').on('click', modalShow);
	$('.close').on('click', xClose);
	$(window).on('click', wClose);

	function modalShow() {
		console.log(tar);
		$('#'+tar).show();
	}
	function xClose() {
		$('.modal').fadeOut(1000);
	}
	function wClose(e) {
		if (e.target == elem){
				$('.modal').fadeOut(1000);
				console.log("hw", elem);
			}
	}
});