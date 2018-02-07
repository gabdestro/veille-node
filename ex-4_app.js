const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/formulaire', (req, res) => {
	console.log(__dirname);
	res.sendFile( __dirname + "/public/html/" + "04_form.html" );
})

app.get('/', (req, res) => {
 	console.log('accueil')
 	res.end('<h1>Accueil</h1> <a href="http://127.0.0.1:8081/formulaire">formulaire</a> <a href="http://localhost:8081/membre">membre</a>')
})

app.get('/membre', (req, res) => {
 // Preparer l'output en format JSON
	console.log('la route /traiter_get')
// on utilise l'objet req.query pour récupérer les données GET
	reponse = {
		prenom:req.query.prenom,
		nom:req.query.nom,
		courriel:req.query.courriel
	};

	console.log(reponse);
	res.end(JSON.stringify(reponse));
})

let server = app.listen(8081, () => {
	let host = server.address().address
	let port = server.address().port
 
 	console.log("Exemple l'application écoute sur http://%s:%s", host, port)
})