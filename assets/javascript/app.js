var peopleArr = ["Homer Simpson", "Arnold Schwarzenegger", "Stephen Colbert", "Ryan Gosling"];
var createPeopleButtons = function(){
	for (var i = 0; i < peopleArr.length; i++) {
		var person = peopleArr[i];
		var newButton = $('<button class="btnPerson">');
		newButton.attr("data-name", person.split(' ').join('+'));
		newButton.text(person);
		if(i==0){

			$('#buttonHolder').html(newButton);

		} else {

			$('#buttonHolder').append(newButton);

		};
		
	};
}




$('document').ready(function () {

	createPeopleButtons();

	$("body").on('click', '.btnPerson', function () {

		var answer = $(this).attr('data-name');
		
    });
    
});