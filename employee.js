var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require("cors");

app.use(bodyParser.urlencoded({ "extended": "true" }));
    app.use(bodyParser.json());
    app.use(bodyParser.json({ type: "application/vdn.api+json" }));
	app.use(cors());


var dataStorage = {

	Employee: [{
		f: "Eric",
		l: "Schmidt",
		subjects: [1, 7],
		roles: [1],
		ID: 0
	}],

	Subjects: [{
		name: "English",
		room: 0
	}, {
		name: "Math",
		room: 1
	}, {
		name: "Science",
		room: 2
	}, {
		name: "Web Design",
		room: 3
	}, {
		name: "Database",
		room: 4
	}, {
		name: "Social Studies",
		room: 5
	}, {
		name: "Art",
		room: 6
	}, {
		name: "Robotics",
		room: 7
	}],

	Role: [

		{
			num: 0,
			name: "Admin",
			pay: 72000
		}, {
			num: 1,
			name: "Teacher",
			pay: 54000
		}, {
			num: 2,
			name: "Teacher Assistant",
			pay: 47000
		}, {
			num: 3,
			name: "Lead Teacher",
			pay: 10000
		}, {
			num: 4,
			name: "Training Instructor",
			pay: 70000
		}

	],

	Room: [
		300, 
		301,
		302,
		303,
		304,
		305,
		306,
		307
	]
};

app.get("/", function(request, respond){

	respond.send("Route works");

});

app.get("/Teacher/Add", function(request, respond){

	respond.send(dataStorage)

});

app.post("/Teacher/Add", function(request, respond){
	
	var object = request.body;

	dataStorage.Employee.push(request.body);
	object["ID"] = dataStorage.Employee.length - 1;

	respond.json({
		data: dataStorage.Employee
	})

});

app.get("/Employee", function(request, respond){

	respond.send(dataStorage)

});

app.listen(8081, function(){
    console.log("Server Started");
});









