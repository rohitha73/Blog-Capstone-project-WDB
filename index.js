import express from "express";
import bodyParser from "body-parser"
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home2", (req, res) => {
    res.render("home2.ejs");
});

app.get("/create", (req, res) => {
    res.render("createblog.ejs");
});

app.get("/big-story", (req, res) => {
    res.render("big-story.ejs");
});

app.get("/iphone-story", (req, res) => {
    res.render("iphone-story.ejs");
});

app.get("/crypto-story", (req, res) => {
    res.render("crypto-story.ejs");
});

app.get("/wildlife-story", (req, res) => {
    res.render("wildlife-story.ejs");
});

app.get("/loan-story", (req, res) => {
    res.render("loan-story.ejs");
});

app.get('/home2', (req, res) => {
    res.render('home2.ejs'); 
});


let blogId = 1; // Initialize a variable to assign unique IDs to blogs

let blogs = []; // Array to store blogs

app.post("/submit", (req, res) => {
    const title = req.body["title"];
    const content = req.body["content"];
    const author = req.body["author"];
    const id = blogId++; // Assign a unique ID and increment the counter
    blogs.push({ id, title, content, author }); // Add the blog to the array
    res.render("home2.ejs", { blogs: blogs });
});

app.get("/submit", (req, res) => {
    const blogIdToDelete = parseInt(req.body["id"], 10); // Get the blog ID to delete
    blogs = blogs.filter(blog => blog.id !== blogIdToDelete); // Remove the blog with the matching ID
    res.render("home2.ejs", { blogs: blogs }); // Render the updated list of blogs
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
    });



