var urlApi = "http://api.tvmaze.com/shows";
$(document).ready(function(){
	//Peticion
	$.ajax({
		url : urlApi,
		success : function(data, status, request){
			console.log(data);
			recorrerData(data);
		},
		error : function(data, status, request){
			console.log(error);
		},
		complete : function(data, status, request){
			console.log('complete');
		}

	});
});

function recorrerData(shows){
	//Utilizando each de UNDERSCORE 

	_.each(shows, renderShows);
}

function renderShows(lista){
	console.log(lista);
	renderTemplate(lista);
}

function renderTemplate(show){
	//<%=  %>
	var template = 
				'<article>' +
					'<div class="row">' +
						'<div class="col-xs-12">' +
							'<h1> <%= show.name %> </h1>' +
						'</div>' +
					'</div>' +
					'<div class="row">' +
						'<div class="col-xs-4">' +
							'<img src=<%= "show.image.original" %>>' +
						'</div>' +
						'<div class="col-xs-8">' +
							'<p><%= show.summary %></p>' +
						'</div>' +
					'</div>' +
				'</article>' ;

	var compiled = _.template(template);
		compiled(show);

	$('#show').append(template);

}