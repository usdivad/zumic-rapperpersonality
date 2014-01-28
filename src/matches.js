
//Find the most matches for a given rapper
function find_most_matches(rapper1, rapperList) {
	var matchesList = [];
	//get number of matches for each rapper
	for (var i=0; i<rapperList.length; i++) {
		var rapper2 = rapperList[i];
		//var matches = num_matches(rapper1, rapper2);
		var matches = match_score(rapper1, rapper2);
		if (typeof matches != "undefined") {
			rapper2["Matches"] = matches;
		}
		matchesList.push(rapper2);
	}

	//sort by matches in *descending* order
	matchesList.sort(function(a, b) {
		var aMatch = a["Matches"];
		var bMatch = b["Matches"];
		if (aMatch < bMatch) {
			return 1;
		}
		else if (aMatch > bMatch) {
			return -1;
		}
		else {
			return 0;
		}
	});

	return matchesList;
}

//Finds number of matches between any two rappers
function num_matches(rapper1, rapper2) {
	var n = 0;
	for (key in rapper1) {
		if (rapper1[key] == rapper2[key]) { //no e.c. needed?
			n++;
		}
	}
	return n;
}

//Finds number of matches, but takes into account multiple checkboxes
function match_score(rapper1, rapper2) {
	var score = 0;
	for (key in rapper1) {
			score += det_score(key, rapper1[key], rapper2[key]);
	}
	return score;
}

//Determines score for a given param: all inputs are strings
function det_score(key, value1, value2) {
	var score = 0;
	var unit;

	//For one unit -> each
	//Use avg amt of each
	var DECADE = (1/3) * 8;
	var REGION = (1/2) * 7;
	var SOUND = (1/3) * 7;
	var DRINK = (1/2) * 2;
	var DRUG = (1/7) * 4;


	//For one unit -> any
	/*
	var DECADE = 3;
	var REGION = 2;
	var SOUND = 4;
	var DRINK = 1;
	var DRUG = 1;
	*/

	//Params with multiple selection
	if (key == "Decade") {
		unit = DECADE;
	}
	else if (key == "Region") {
		unit = REGION;
	}
	else if (key == "Sound") {
		unit = SOUND;
	}
	else if (key == "DrinkOfChoice") {
		unit = DRINK;
	}
	else if (key == "DrugOfChoice") {
		unit = DRUG;
	}
	else {
		//Params without multiple selection
		if (value1[key] == value2[key]) {
			score = 1;
			return score;
		}
	}

	//console.log("value1: " + value1);
	//console.log(value1);

	var value1_arr = value1.split(",");
	var value2_arr = value2.split(",");

	for (var i=0; i<value1_arr.length; i++) {
		if (value2_arr.indexOf(value1_arr[i]) != -1) {
			//Add one unit for each match
			score += unit;
			
			//Add one unit for any match, then return
			/*
			score = unit;
			console.log("For " + key + ", " + value1 + " and " + value2 + " give a score of " + score);
			return score;
			*/
		}
	}
	//console.log("For " + key + ", " + value1 + " and " + value2 + " give a score of " + score);
	return score;
}


/*
function sort_weighted(rapper, rapperList) {
	var decade_list = ["1970s", "1980s", "1990s", "2000s", "2010s"];
	var sound_list = ["Classic", "Underground/alternative", "Pop", "Dirty South", "Trap", "Always changing"];
	var region_list = ["Dirty South", "West Coast", "East Coast", "Mid West"];
}
*/

function sort_decade(rapper, rapperList) {
	var rapper1 = rapper;
	var decade_distances = {
			"1970s": 0,
			"1980s": 2.5,
			"1990s": 5,
			"2000s": 7.5,
			"2010s": 10
		}

	var distanceList = [];
	//get number of distance for each rapper
	for (var i=0; i<rapperList.length; i++) {
		var rapper2 = rapperList[i];
		//var distance = num_distance(rapper1, rapper2);
		var decade1 = decade_distances[rapper1["Decade"]];
		var decade2 = decade_distances[rapper2["Decade"]];
		var distance = Math.abs(decade1 - decade2); //using attr_
		//console.log(distance);
		if (typeof distance != "undefined") {
			rapper2["Decade_Distance"] = distance;
		}
		distanceList.push(rapper2);
	}

	//sort by distance in *descending* order
	distanceList.sort(function(a, b) {
		var aDistance = a["Decade_Distance"];
		var bDistance = b["Decade_Distance"];
		if (aDistance < bDistance) {
			return 1;
		}
		else if (aDistance > bDistance) {
			return -1;
		}
		else {
			return 0;
		}
	});

	return distanceList;

}