// CUSTOM JS FILE //

function init() {
  renderFeels();
}

function renderFeels(){
	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			console.log(response);

			var people = response.people;

			for(var i=0;i<people.length;i++){
				var htmlToAdd = '<div class="col-md-3">'+
					'<h1>'+people[i].want+'</h1>'+
					'<h1>'+people[i].need+'</h1>'+
					'<h1>'+people[i].have+'</h1>'+
				'</div>';
			
				jQuery("#people-holder").append(htmlToAdd);
			}



		}
	})	
}


window.addEventListener('load', init())