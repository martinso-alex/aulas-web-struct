var start = function(){
	$.ajax({
		type: "POST",
		url: 'controller/LoginController.php',
		data: {func:'start'},
		success: function(data){
			$('#spa-content').html(data);
		}
	});
}

var login = function(){
	$(document).on('click','#login',function(){
		$.ajax({
			type: "POST",
			url: 'controller/LoginController.php',
			data: {func:'login'},
			success: function(data){
				$('#spa-content').html(data);
			}
		});
	});
}

var logout = function(){
	$(document).on('click','#logout',function(){
		$.ajax({
			type: "POST",
			url: 'controller/LoginController.php',
			data: {func:'logout'},
			success: function(data){
				$('#spa-content').html(data);
			}
		});
	});
}

$(document).ready(start);
$(document).ready(login);
$(document).ready(logout);