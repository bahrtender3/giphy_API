var peopleArr = ["Homer Simpson", "Undertail", "Stephen Colbert", "Ryan Gosling"];
var createPeopleButtons = function () {
	for (var i = 0; i < peopleArr.length; i++) {
		var person = peopleArr[i];
		var newButton = $('<button class="btnPerson">');
		newButton.attr("data-name", person.split(' ').join('+'));
		newButton.text(person);
		if (i == 0) {

			$('#buttonHolder').html(newButton);

		} else {

			$('#buttonHolder').append(newButton);

		};

	};
}




$('document').ready(function () {

	createPeopleButtons();

	$("body").on('click', '.btnPerson', function () {

		var person = $(this).attr("data-name");
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
			person + "&api_key=dc6zaTOxFJmzC&limit=6";

		$.ajax({
			url: queryURL,
			method: "GET"
		})
			.done(function (response) {
				console.log(response);
				var results = response.data;

				for (var i = 0; i < results.length; i++) {
					var gifDiv = $("<div class='gifHolder'>");

					var rating = results[i].rating;

					var p = $("<p>").text("Rating: " + rating);

					var personImage = $("<img class ='gifImage'>");
					personImage.attr("src", results[i].images.original_still.url);
					personImage.attr('data-play', results[i].images.original.url);
					personImage.attr('data-pause', results[i].images.original_still.url);
					personImage.attr('data-state', 'pause');
					gifDiv.prepend(personImage);
					gifDiv.prepend(p);

					if (i == 0) {
						$("#peopleGifs").html(gifDiv);
					} else {
						$("#peopleGifs").append(gifDiv);
					};
				}
			});

	});

	$("body").on('click', '.gifImage', function () {
		var giph = $(this);
		if (giph.attr('data-state') == 'pause') {
			giph.attr('src', giph.attr('data-play'));
			giph.attr('data-state', 'play');
		} else {
			giph.attr('src', giph.attr('data-pause'));
			giph.attr('data-state', 'pause');
		}
	});

	$("#people-form").on("click", function (event) {
		event.preventDefault();
		var name = $('#person-input').val();
		if(name != ""){
		peopleArr.push(name);
		console.log(peopleArr)
		createPeopleButtons();
		};

	});



});
