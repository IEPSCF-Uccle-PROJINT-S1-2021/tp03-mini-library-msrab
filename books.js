const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}));
const books = [
	{
		'author': 'Guillaume Debré',
		'title': "L'affaire Lafayette",
		'category': 'historique'
	},{
		'author': 'Gérald Messadié',
		'title': "La conspiration Jeanne d'Arc",
		'category': 'historique'
	},{
		'author': 'J.R.R. Tolkien',
		'title': 'Le Seigneur des anneaux',
		'category': 'fantastique'
	},{
		'author': 'Michael Ende',
		'title': "L'Histoire sans fin",
		'category': 'fantastique'
	},{
		'author': 'Andrzej Sapkowski',
		'title': 'Le Sorceleur',
		'category': 'fantastique'
	},{
		'author': 'George R. R. Martin',
		'title': 'Le Trône de fer',
		'category': 'fantastique'
	},{
		'author': 'Hervé Bazin',
		'title': 'Vipère au poing',
		'category': 'autobiographie'
	},{
		'author': 'Marie Cardinal',
		'title': 'Les mots pour le dire',
		'category': 'autobiographie'
	},{
		'author': 'Giacomo Casanova',
		'title': 'Histoire de ma vie',
		'category': 'autobiographie'
	},
];

router.get('/search', (req, res) => {
	res.redirect('/books/form.html');
});

router.post('/list', (req, res) => {
	const category = req.body.category;
	console.log('categorie choisi ' + category);

	let copy = [];

	for(let i = 0; i < books.length; i++)
	{
		if(books[i].category === category)
		{
			console.log(' : '+ books[i]);
			copy.push(books[i]);
		}
	}

		console.log(' : '+copy);
		console.log(' : '+category);

	res.render('list', {
		list: copy
	});
});

module.exports = router;
