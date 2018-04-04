// Will hold any functions from client side. For example, on click, run post request
var App = {};

// initialization
App.init = function() {
	$( document ).ready(function() {
		$("#btn").click(function(e) {
			e.preventDefault();
			console.log(JSON.stringify($('textarea').val()));
			$.ajax('/csv', {
			  method: "POST",
			  contentType: 'application/json',
			  data: JSON.stringify(JSON.parse($('textarea').val())),
			  success: function(data) {
			  	$.ajax('/csv', {
				  method: "GET",
				  success: function(csvText) {
				  	var lines = csvText.split('\n');
				  	for (var i=0; i < lines.length; i++) {
				  		$( "body" ).append( `<span>${lines[i]}</span><br>` );
				  	}
				  }, // append data to page
				  error: null
				});
			  }, 
			  error: null
			});
		})	
	})
}

App.init();
