const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: "Welcome",
		pageContent: "Welcome to Home page"
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: "About Us",
		pageContent: "Welcome to About page"
	});
});

app.get('/dashboard', (req, res) => {
	res.render('dashboard.hbs', {
		pageTitle: "Dashboard",
		pageContent: "Welcome to Dashboard page"
	});
});

app.get('/shortcuts', (req, res) => {
	res.render('shortcuts.hbs', {
		pageTitle: "Shortcuts",
		pageContent: "Welcome to Shortcuts page"
	});
});

app.get('/overview', (req, res) => {
	res.render('overview.hbs', {
		pageTitle: "Overview",
		pageContent: "Welcome to Overview page"
	});
});

app.get('/events', (req, res) => {
	res.render('events.hbs', {
		pageTitle: "Events",
		pageContent: "Welcome to Events page"
	});
});

app.get('/services', (req, res) => {
	res.render('services.hbs', {
		pageTitle: "Services",
		pageContent: "Welcome to Services page"
	});
});

app.get('/contact', (req, res) => {
	res.render('contact.hbs', {
		pageTitle: "Contact Us",
		pageContent: "Welcome to Contact page"
	});
});


app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is up and running at ${process.env.PORT}`);
});