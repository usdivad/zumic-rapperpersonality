/*
 * MAINDO
 */

//For local / usdivad.com
function main_local() {
	//var rappers;

	//JSON req
	$.getJSON("./src/rapper_stats.json", function(data) {
		//rappers = data;
		//$("#inputForm").append(createForm(data, allParams));
		$("#submitButton").click(function() {
			var r = getSubmit(data);
			$("#results").html(r);
		});
		//getSubmit(data);
		//test_parse(data);
		test_collected(data);

	}); //end JSON req
}

$(document).ready(function() {
	main_local();
	console.log("ready");
});
