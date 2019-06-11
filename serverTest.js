const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Shane_Khan:Russia2020!@cluster0-seqez.mongodb.net/test?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useCreateIndex: true,
}).then (() => {
	console.log("Connected to DB");
}).catch(err => {
	console.log("ERROR:", err.message);	
});

const PostSchema = new mongoose.Schema({
	title: String,
	description: String,
});

const Post = mongoose.model("Post", PostSchema);

app.get('/', async (req, res) => {
	let post = await Post.create({title: "Test", description:"This is a test also"});
	res.send(post);
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
