//Nested Arrays Demo - Data Structures
//Each Nested Object are indexed.

var posts = [
	{
		title: "Cats are cool",
		author: "Nae",
		comments: ["Awesome", "Excellent"]
	}, 
	{
		title: "Cats are slick and cool",
		author: "Everyone who has owned a cat",
		comments: ["Amazing", "Genius"]
	}
]
//to retrieve the second Object post and second Comment. 
posts[1].comments[1]

//to retrieve Malfoy
var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: "true",
};

someObject.friends[0].name


