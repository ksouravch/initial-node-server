const express = require('express');
const hbs = require('hbs');
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home.hbs');
});

app.get('/about', (req, res) => {
	res.render('about.hbs');
});

app.get('/dashboard', (req, res) => {
	res.render('dashboard.hbs');
});

app.get('/shortcuts', (req, res) => {
	res.render('shortcuts.hbs');
});

app.get('/overview', (req, res) => {
	res.render('overview.hbs');
});

app.get('/events', (req, res) => {
	res.render('events.hbs');
});

app.get('/services', (req, res) => {
	res.render('services.hbs');
});

app.get('/contact', (req, res) => {
	res.render('contact.hbs');
});


app.listen(process.env.PORT || 3000, () => {
	console.log(`Server is up and running at ${process.env.PORT}`);
});