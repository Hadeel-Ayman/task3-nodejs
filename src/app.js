const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use("/public", express.static("public"));

app.set("view engine", "hbs");
const path = require('path')

const viewDirect = path.join(__dirname, "../ViewsApp/views")
app.set("views", viewDirect)

const hbs = require("hbs");
const partialsPAth = path.join(__dirname, "../ViewsApp/partials")

hbs.registerPartials(partialsPAth)

app.get("/", (req, res) => {
  res.render("index", {
    name: "Hadeel Ayman",
    SubTitle: "Hello to my portfolio",
    job: "Developer & Designer",
    btn1: "Watch More",
    btn2: "Subscribe",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    title: "Login Page",
    SubTitle: "Log in for the existing user",
    href: "/regiester",
    button: "Login",
  });
});

app.get("/regiester", (req, res) => {
  res.render("regiester", {
    title: "Regiester Page",
    SubTitle: "regiester the new user",
    href: "/login",
    button: "Regiester",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    img: "../public/images/girl.jpg",
    content:
      "I am a front-end web developer.I am a full stack web developer I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.",
    job: "Developer & Designer",
    valueOfBtn: "Let’s Talk",
  });
});

app.get("/service", (req, res) => {
  res.render("service", {
    title: "My Services",
    SubTitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ",
    title1: `web development`,
    title2: `marketing`,
    title3: `Advertising`,
    btn: 'Learn More'
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact me",
    SubTitle: "I am available for freelancer work. Connect with me via phone or email",
    btn: 'Submit',
    img: '../public/images/girl.jpg'
  });
});



app.listen(port, () => {
  console.log(`the port ${port}`);
});
