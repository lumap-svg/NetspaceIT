var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	response.render('sample_data', {title : 'CLIENTS INFORMATION'});

});

router.post("/action", function(request, response, next){

	var action = request.body.action;

	if(action == 'fetch')
	{
		var query = "SELECT * FROM Clientell ORDER BY id";

		database.query(query, function(error, data){

			response.json({
				data:data
			});

		});
	}

	if(action == 'Add')
	{
		var first_name = request.body.first_name;

		var last_name = request.body.last_name;

		var email = request.body.email;

		var StartDate = request.body.Start_of_Subscription;

		var tel = request.body.tel;

		var duration = request.body.duration;

		var query = `
		INSERT INTO Clientell 
		(firstname, lastname, phoneNumber, StartSubscrition, email,duration) 
		VALUES ("${first_name}", "${last_name}", "${tel}", "${StartDate}", "${email}","${duration}")
		`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Added'
			});

		});
	}

	if(action == 'fetch_single')
	{
		const id = request.body.id;

		var query = `SELECT * FROM Clientell WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json(data[0]);

		});
	}

	if(action == 'Edit')
	{

		var id = request.body.id;

		var first_name = request.body.first_name;

		var last_name = request.body.last_name;

		var email = request.body.email;

		var StartDate = request.body.Start_of_Subscription;

		var tel = request.body.tel;

		var duration = request.body.duration;

			console.log( `selected id is ${id}`);
		

		var sql = `
		UPDATE Clientell 
		SET firstname = "${first_name}", 
		lastname = "${last_name}", 
		phoneNumber = "${tel}", 
		email = "${email}",
		StartSubscrition = "${StartDate}",
		duration = "${duration}"
		WHERE phoneNumber = "${tel}"
		`;

		database.query(sql, function(error, data,result){
			if(error)
			throw error;
			console.log(data);
			response.json({
				message : 'Data Edited'
			});
		});
	}

	if(action == 'delete')
	{
		var id = request.body.id;

		var query = `DELETE FROM Clientell WHERE id = "${id}"`;

		database.query(query, function(error, data){

			response.json({
				message : 'Data Deleted'
			});

		});
	}

});

module.exports = router;
