//Create an Array of movies with a title + rating. hasWatched properties. Loop through

var movies = [
	{
		title: "Harry Potter",
		rating: "5",
		hasWatched: true,
	},
	{
		title: "Terminator",
		rating: "2",
		hasWatched: true,
	},
	{
		title: "Frozen",
		rating: "1",
		hasWatched: false,
	},
	{
		title: "Tangled",
		rating: "4",
		hasWatched: false,
	}
];

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating +" stars";
	console.log(result)
});


//RETURNS
You have watched "Harry Potter" - 5 stars
You have watched "Terminator" - 2 stars
You have not seen "Frozen" - 1 stars
You have not seen "Tangled" - 4 stars