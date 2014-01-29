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
		test_parse(data);

	}); //end JSON req
}

//For Wordpress integration
function main_wp() {

	var data = [{"Rapper":"Snoop Dogg","Decade":"1990s, 2000s, 2010s","Region":"West Coast","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"Legit pimp","CriminalHistory":"Might have killed someone","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Madlib","Decade":"1990s, 2000s, 2010s","Region":"West Coast","Fashion":"T shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Tyler, The Creator","Decade":"2000s, 2010s","Region":"West Coast","Fashion":"Hipster","Tattoos":"a few","Food_Fitness_BodyType":"average","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"MC Hammer","Decade":"1980s, 1990s","Region":"West Coast","Fashion":"Avant-garde","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Dumb","PimpHand":"Pussy whipped","CriminalHistory":"None","Sound":"Pop","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"None"},
	{"Rapper":"Dr. Dre","Decade":"1990s, 2000s, 2010s","Region":"West Coast","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"Athletic","Intelligence":"Smart","PimpHand":"Semi-Pimp","CriminalHistory":"Assault","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Kendrick Lamar","Decade":"2010s","Region":"West Coast","Fashion":"Hipster","Tattoos":"a few","Food_Fitness_BodyType":"average","Intelligence":"Smart","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Always changing","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"A$AP Ferg","Decade":"2000s, 2010s","Region":"Mid West, East Coast","Fashion":"Hipster","Tattoos":"many","Food_Fitness_BodyType":"Athletic","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Trap","DrinkOfChoice":"Beer, Bottom shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Chief Keef","Decade":"2010s","Region":"Mid West","Fashion":"Thuggin'","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Mentally incompetent","PimpHand":"Legit Pimp","CriminalHistory":"Might have killed someone, Drug dealer","Sound":"Trap","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"2 Chainz","Decade":"2000s, 2010s","Region":"Mid West","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"average","Intelligence":"Dumb","PimpHand":"Legit Pimp","CriminalHistory":"Drug dealer, Drug possession","Sound":"Trap, Pop","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Cocaine"},
	{"Rapper":"Chance The Rapper","Decade":"2010s","Region":"Mid West","Fashion":"Hipster","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Acid"},
	{"Rapper":"ICP","Decade":"1990s, 2000s, 2010s","Region":"Mid West","Fashion":"Thuggin'","Tattoos":"many","Food_Fitness_BodyType":"fat","Intelligence":"Mentally incompetent","PimpHand":"no standards","CriminalHistory":"Minor","Sound":"Underground/alternative","DrinkOfChoice":"Beer, Bottom shelf liquor","DrugOfChoice":"Crack, Pills"},
	{"Rapper":"Danny Brown","Decade":"2010s","Region":"Mid West","Fashion":"Hipster","Tattoos":"a few","Food_Fitness_BodyType":"skinny","Intelligence":"Street smart","PimpHand":"no standards","CriminalHistory":"Drug dealer, Drug possession","Sound":"Underground/alternative","DrinkOfChoice":"Beer","DrugOfChoice":"Molly, Weed"},
	{"Rapper":"Nelly","Decade":"1990s, 2000s, 2010s","Region":"Mid West","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Dumb","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Pop","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"},
	{"Rapper":"Bone Thugs N Harmony","Decade":"1990s, 2000s","Region":"Mid West","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"Skinny","Intelligence":"Smart","PimpHand":"Semi-Pimp","CriminalHistory":"Assault","Sound":"Dirty South, Classic","DrinkOfChoice":"Beer, Bottom shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"2 Pac","Decade":"1990s","Region":"West Coast","Fashion":"Thuggin'","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Legit Pimp","CriminalHistory":"Might have killed someone","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Macklemore","Decade":"2000s, 2010s","Region":"East Coast, West Coast","Fashion":"Avant-garde","Tattoos":"none","Food_Fitness_BodyType":"skinny","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Pop","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"Kanye West","Decade":"2000s, 2010s","Region":"East Coast, Mid West, Dirty South","Fashion":"Avant-garde","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Pussy whipped","CriminalHistory":"Assault","Sound":"Always changing","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Eminem","Decade":"1990s, 2000s, 2010s","Region":"East Coast, Mid West","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"no standards","CriminalHistory":"Assault","Sound":"Pop, Classic","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"none"},
	{"Rapper":"Wiz Khalifa","Decade":"2000s, 2010s","Region":"East Coast, Mid West","Fashion":"Hipster","Tattoos":"many","Food_Fitness_BodyType":"skinny","Intelligence":"Dumb","PimpHand":"Pussy whipped","CriminalHistory":"None","Sound":"Pop","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"},
	{"Rapper":"Riff Raff","Decade":"2000s, 2010s","Region":"East Coast, Dirty South, West Coast","Fashion":"Avant-garde","Tattoos":"many","Food_Fitness_BodyType":"skinny","Intelligence":"Mentally incompetent","PimpHand":"no standards","CriminalHistory":"Minor, Drug possession","Sound":"Trap, Underground/alternative","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"Weed, Molly, Cocaine"},
	{"Rapper":"Drake","Decade":"2000s, 2010s","Region":"East Coast, Dirty South, Mid West","Fashion":"Avant-garde","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"Pussy whipped","CriminalHistory":"None","Sound":"Pop, Underground/alternative","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Wale","Decade":"2000s, 2010s","Region":"East Coast, Dirty South","Fashion":"Upscale","Tattoos":"many","Food_Fitness_BodyType":"Athletic","Intelligence":"Street smart","PimpHand":"Pussy Whipped","CriminalHistory":"None","Sound":"Pop, Classic","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"},
	{"Rapper":"Pusha T","Decade":"1990s, 2000s, 2010s","Region":"East Coast, Dirty South","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"Drug dealer","Sound":"Trap","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Cocaine"},
	{"Rapper":"Lil' Kim","Decade":"1990s, 2000s","Region":"East Coast","Fashion":"Upscale","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Dumb","PimpHand":"Legit Pimp","CriminalHistory":"Minor","Sound":"Pop","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"},
	{"Rapper":"P Diddy","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Upscale","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"Legit Pimp","CriminalHistory":"Minor","Sound":"Pop","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"50 Cent","Decade":"2000s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Legit Pimp","CriminalHistory":"Might have killed someone","Sound":"Pop, Classic","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"LL Cool J","Decade":"1980s, 1990s, 2000s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Legit Pimp","CriminalHistory":"Assault","Sound":"Classic","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"Nicki Minaj","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"Upscale","Tattoos":"a few","Food_Fitness_BodyType":"average","Intelligence":"Street smart","PimpHand":"Legit Pimp","CriminalHistory":"None","Sound":"Pop","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"None"},
	{"Rapper":"The Notorious B.I.G.","Decade":"1990s","Region":"East Coast","Fashion":"Upscale","Tattoos":"a few","Food_Fitness_BodyType":"fat","Intelligence":"Street smart","PimpHand":"Legit Pimp","CriminalHistory":"Drug dealer","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Slick Rick","Decade":"1980s, 1990s, 2000s","Region":"East Coast","Fashion":"Upscale","Tattoos":"none","Food_Fitness_BodyType":"Skinny","Intelligence":"Street smart","PimpHand":"Legit Pimp","CriminalHistory":"Might have killed someone","Sound":"Classic","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Pills, Weed"},
	{"Rapper":"Q-Tip","Decade":"1990s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Classic","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"Deltron 3030","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"Hipster","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"None"},
	{"Rapper":"Mos Def aka Yasin Bey","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Classic, Underground/alternative","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"Talib Kweli","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Classic, Underground/alternative","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"},
	{"Rapper":"Dmx","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Thuggin'","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Mentally incompetent","PimpHand":"no standards","CriminalHistory":"Might have killed someone","Sound":"Classic","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"Weed, Cocaine, Crack"},
	{"Rapper":"ODB","Decade":"1990s","Region":"East Coast","Fashion":"t shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"average","Intelligence":"Dumb","PimpHand":"no standards","CriminalHistory":"Might have killed someone","Sound":"Classic","DrinkOfChoice":"Beer, Bottom shelf liquor","DrugOfChoice":"Crack, Cocaine"},
	{"Rapper":"Beastie Boys","Decade":"1980s, 1990s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"average","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"Minor","Sound":"Underground/alternative","DrinkOfChoice":"Beer","DrugOfChoice":"Weed"},
	{"Rapper":"Black Thought","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"Average","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Classic, Underground/alternative","DrinkOfChoice":"Beer","DrugOfChoice":"Weed"},
	{"Rapper":"Run- Dmc","Decade":"1980s, 1990s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"Average","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Classic","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"Fat Joe","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"fat","Intelligence":"Dumb","PimpHand":"no standards","CriminalHistory":"Might have killed someone","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"MF Doom","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Avant-garde","Tattoos":"none","Food_Fitness_BodyType":"fat","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Afrika Bambaataa","Decade":"1970s, 1980s, 1990s","Region":"East Coast","Fashion":"Avant-garde","Tattoos":"none","Food_Fitness_BodyType":"fat","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Classic, Underground/alternative","DrinkOfChoice":"","DrugOfChoice":"None"},
	{"Rapper":"Big Pun","Decade":"1990s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"fat","Intelligence":"Street smart","PimpHand":"no standards","CriminalHistory":"Assault","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Action Bronson","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"fat","Intelligence":"Street smart","PimpHand":"no standards","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed, Cocaine"},
	{"Rapper":"Chuck  D","Decade":"1980's, 1990s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"Fat","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"Minor","Sound":"Classic, Underground/alternative","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"Schoolboy Q","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"Hipster","Tattoos":"many","Food_Fitness_BodyType":"Fat","Intelligence":"Street smart","PimpHand":"no standards","CriminalHistory":"Drug dealer","Sound":"Underground/alternative","DrinkOfChoice":"Beer","DrugOfChoice":"Pills, Weed"},
	{"Rapper":"Mac Miller","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"Hipster","Tattoos":"many","Food_Fitness_BodyType":"skinny","Intelligence":"Smart","PimpHand":"no standards","CriminalHistory":"Drug possession","Sound":"Underground/alternative","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Acid"},
	{"Rapper":"Jay Z","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Upscale","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"Pussy whipped","CriminalHistory":"Drug dealer","Sound":"Always changing, Pop","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"},
	{"Rapper":"J. Cole","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"t shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"Pussy Whipped","CriminalHistory":"None","Sound":"Classic","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"},
	{"Rapper":"Joey Bada$$","Decade":"2010s","Region":"East Coast","Fashion":"Hipster","Tattoos":"a few","Food_Fitness_BodyType":"skinny","Intelligence":"Smart","PimpHand":"wouldn't you like to know","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Bottom shelf liquor, Beer","DrugOfChoice":"Weed"},
	{"Rapper":"Ja Rule","Decade":"2000s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Dumb","PimpHand":"Pussy whipped","CriminalHistory":"None","Sound":"Pop","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Redman","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Dumb","PimpHand":"Semi-Pimp","CriminalHistory":"Drug dealer","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Nas","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Upscale","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"Semi-Pimp","CriminalHistory":"Minor","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Busta Rhymes","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Avant-garde","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"Assault","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Lauryn Hill","Decade":"1990s, 2000s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"none","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Classic","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Method Man","Decade":"1990s, 2000s","Region":"East Coast","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"Athletic","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"Drug dealer","Sound":"Classic","DrinkOfChoice":"Beer, Bottom shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Missy Elliot","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Avant-garde","Tattoos":"none","Food_Fitness_BodyType":"fat","Intelligence":"Smart","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Ghostface Killah","Decade":"1990s, 2000s, 2010s","Region":"East Coast","Fashion":"Upscale","Tattoos":"a few","Food_Fitness_BodyType":"Fat","Intelligence":"Smart","PimpHand":"Semi-Pimp","CriminalHistory":"Drug dealer","Sound":"Classic","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"A$AP Rocky","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"Hipster","Tattoos":"a few","Food_Fitness_BodyType":"skinny","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"Assault","Sound":"Underground/alternative","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Molly"},
	{"Rapper":"French Montana","Decade":"2000s, 2010s","Region":"East Coast","Fashion":"Upscale","Tattoos":"a few","Food_Fitness_BodyType":"average","Intelligence":"Dumb","PimpHand":"Semi-Pimp","CriminalHistory":"Drug dealer","Sound":"Trap","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Cocaine"},
	{"Rapper":"Lil Wayne","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"T shirt & Jeans","Tattoos":"facial","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Legit pimp","CriminalHistory":"Minor","Sound":"Dirty South","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Lean, Weed"},
	{"Rapper":"Gucci Mane","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"Thuggin'","Tattoos":"facial","Food_Fitness_BodyType":"average","Intelligence":"Mentally incompetent","PimpHand":"Legit pimp","CriminalHistory":"Might have killed someone","Sound":"Dirty South, Trap","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Lean, Pills"},
	{"Rapper":"T- Pain","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"Avant-garde","Tattoos":"many","Food_Fitness_BodyType":"average","Intelligence":"Dumb","PimpHand":"no standards","CriminalHistory":"None","Sound":"Dirty South, Pop","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Vanilla Ice","Decade":"1990s","Region":"Dirty South","Fashion":"Avant-garde","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Dumb","PimpHand":"Pussy whipped","CriminalHistory":"None","Sound":"Classic, Pop","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"None"},
	{"Rapper":"Future","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"Avant-garde","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Dumb","PimpHand":"Pussy whipped","CriminalHistory":"Minor","Sound":"Pop, Trap","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Molly"},
	{"Rapper":"Andre 3000","Decade":"1990s, 2000s","Region":"Dirty South","Fashion":"Avant-garde","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Smart","PimpHand":"Pussy whipped","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Mountain Dew","DrugOfChoice":"None"},
	{"Rapper":"Childish Gambino","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"Hipster","Tattoos":"none","Food_Fitness_BodyType":"average","Intelligence":"Smart","PimpHand":"Pussy whipped","CriminalHistory":"None","Sound":"Underground/alternative","DrinkOfChoice":"Beer","DrugOfChoice":"Weed, Acid"},
	{"Rapper":"Ludacris","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"T shirt & Jeans","Tattoos":"many","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Dirty South","DrinkOfChoice":"Beer","DrugOfChoice":"Weed"},
	{"Rapper":"Big Krit","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"T shirt & Jeans","Tattoos":"a few","Food_Fitness_BodyType":"athletic","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Dirty South, Underground/alternative","DrinkOfChoice":"Bottom shelf liquor","DrugOfChoice":"Weed"},
	{"Rapper":"Paul Wall","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"Thuggin'","Tattoos":"many","Food_Fitness_BodyType":"fat","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"None","Sound":"Dirty South","DrinkOfChoice":"Top shelf liquor","DrugOfChoice":"Weed, Lean"},
	{"Rapper":"Rick Ross","Decade":"2000s, 2010s","Region":"Dirty South","Fashion":"Thuggin'","Tattoos":"many","Food_Fitness_BodyType":"fat","Intelligence":"Street smart","PimpHand":"Semi-Pimp","CriminalHistory":"Drug dealer","Sound":"Trap","DrinkOfChoice":"Champagne/Wine","DrugOfChoice":"Weed"}];

	$("#submitButton").click(function() {
		var r = getSubmit(data);
			$("#results").html(r);
		});
		//getSubmit(data);
		
	test_parse(data);

}

$(document).ready(function() {
	main_wp();
	console.log("ready");
})
