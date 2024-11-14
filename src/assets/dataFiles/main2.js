


var godPath = "jsonFiles/godFiles/gods";
var path = "jsonFiles/itemFiles/items";
var targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix, targetitemSeven];
var statSheet = {
	Name: "N/A",
	"Intelligence": 0,
	"Strength": 0,
	"Mana": 0,
	"MP5": 0,
	"Health": 0,
	"Flat Penetration": 0,
	"% Penetration": 0,
	"Critical Strike Chance": 0,
	"Attack Speed": 0,
	'Lifesteal':0,
	"Basic Attack Damage": 0,
	"Magical Protection": 0,
	"Physical Protection": 0,
	"Cooldown Rate": 0,
};

var targetStatSheet = {
	Name: "Ymir",
	"Intelligence": 0,
	"Strength": 0,
	"Mana": 0,
	"MP5": 0,
	"Health": 0,
	"Flat Penetration": 0,
	"% Penetration": 0,
	"Critical Strike Chance": 0,
	"Attack Speed": 0,
	'Lifesteal':0,
	"Basic Attack Damage": 0,
	"Magical Protection": 0,
	"Physical Protection": 0,
	"Cooldown Rate": 0,
};
var procDamage = { Damage: 0, Mitigated: 0 };
var baseStrength = 0;
var cernPassive = false;
var healingOutput = 0;
var bracerStacks=0;
// for (var item of itemData){
// 	var toolTip = '';
// 	var itemStats =  itemSearch(item['name'])
	
// 		for (var stat in itemStats) {
// 			if (stat != "Item Icon") {
// 				if (stat != "Name") {
// 					if (stat != "cost") {
// 						if (stat != "Type") {
// 							if (stat != "Restriction") {
// 								if (stat != "ActiveFlag") {
// 									if (stat != "ChildItem") {
// 										if (stat == "Attack Speed") {
// 											var statName = "Attack Speed:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "%";
// 										}
// 										if (stat == "Health") {
// 											var statName = "Health:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "";
// 										}
// 										if (stat == "Intelligence") {
// 											var statName = "Intelligence:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "";
// 										}
// 										if (stat == "Strength") {
// 											var statName = "Strength:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "";
// 										}
// 										if (stat == "physicalProtection") {
// 											var statName = "Physical Protection:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "";
// 										}
// 										if (stat == "Mana") {
// 											var statName = "Mana:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "";
// 										}
// 										if (stat == "Magical Protection") {
// 											var statName = "Magical Protection:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "";
// 										}
// 										if (stat == "criticalChance") {
// 											var statName = "Critical Strike Chance:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "%";
// 										}
// 										if (stat == "passive") {
// 											toolTip += "\n" + itemStats[stat];
// 										}
	
// 										if (stat == "flatPenetration") {
// 											var statName = "Flat Penetration:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat];
// 										}
// 										if (stat == "percentPenetration") {
// 											var statName = "Penetration:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat] + "%";
// 										}
// 										if (stat == "Cooldown Rate") {
// 											var statName = "Cooldown Rate:";
// 											toolTip += "\n" + statName;
// 											toolTip += " " + itemStats[stat];
											
// 										}
// 									}
// 								}
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
	
	
// 	console.log("<div class='itemSelectors' data-tooltip="+'"' + toolTip+'"' + '\n' +'data-name='+'"'+ item['name']+'"' + '>'+'\n' + "<img onclick='itemSelection(this.src,this.id)'id="+'"' + item["name"] + '"'+ "src=" + '"'+ item['icon'] +'"'+  "class='item'>" +'\n' +  "</div>" )
// }





var explosiveBolts = 0;
var demonicStacks = 0;
var exeStacks = 0;
var totemStacks = 0;
var abilityRotation = [];
var morriganMark = false;
var dualityProcced = false;
var ravanaUlt = false;
var procItems = document.getElementsByClassName("itemProcs");
var results = document.getElementsByClassName("results");
var anhurPassiveStacks = 0;
var proccOne = "";
var proccTwo = "";
var proccThree = "";
var proccFour = "";
var proccFive = "";
var proccSix = "";
var procDamageList = [
	{ Damage: 0, Mitigated: 0 },
	{ Damage: 0, Mitigated: 0 },
	{ Damage: 0, Mitigated: 0 },
	{ Damage: 0, Mitigated: 0 },
	{ Damage: 0, Mitigated: 0 },
	{ Damage: 0, Mitigated: 0 },
];


// var itemNameList = []
// itemChanges = itemChanges.split('\n')
// for (var items of itemData) {
// 	itemNameList.push(items['name'])
// }
// for (var changes of itemChanges) {
// 	for (var items of itemNameList){
// 		if (changes.split(' -')[0] == items){

// 			var change = changes.split('from')
// 			console.log(items)
// 			 change = change[1].replace('to', ' ').replace('   ',' ').replace('.','').split(' ')[2]
// 			 for (item of itemData){
// 				if (item['name'] == items){
// 					item['stats']['Cooldown Rate'] = parseInt(change)
// 				}
// 			}
// 		}
		
// 	}
// }









var procCounts = [0, 0, 0, 0, 0, 0];
var procList = [proccOne, proccTwo, proccThree, proccFour, proccFive, proccSix];
var markActive = true;
var bumbasProcced = false;
var tyrStance = "assault";
var markMissingHealthPercent = 0;
var markRank = 1;
var ferociousStacks = 0;
var surtrPassive = 0;
var lightningCharges = 0;
var statLean = document.getElementById("statContainer");
var listBox = document.getElementById("listBox");
var currentHealthPercent = 0;
var missingHealthPercent = 100 - currentHealthPercent;
var shiftingSandsActive = false;
var shiftingSandsBuff = 8;
var itemProts = 0;
var tooltip = document.getElementsByClassName("godItems");
var maxPower = 1000;
var godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven];
var totalDamage = { Damage: 0, Mitigated: 0 };
var abilityCounter = 1;
var procCounter = 0;
var output = { Damage: 0, Mitigated: 0 };
var myrddinTimer = 0;
var myrddinCountdown = 0;
var dragonFormActive = false;
var godLevel = 20;
var targetLevel = 20;
var counter = 0;
var loadoutCounter = 0;
var stance = "N/A";
var abilityLoadoutForm = document.getElementsByClassName("abilityLoadoutForm");
var abilityLoadout = document.getElementsByClassName("abilityLoadout");
var abilityOne = document.getElementById("abilityOne");
var abilityTwo = document.getElementById("abilityTwo");
var abilityThree = document.getElementById("abilityThree");
var abilityFour = document.getElementById("abilityFour");
var hydrasProcced = false;
var procResults = document.getElementsByClassName("procResults");
var results = document.getElementsByClassName("results");
var setMarks = 0;
var setClones = 0;
var dualityDamage = 0;
var smallScreen = false;
var overlay = document.getElementsByClassName("overlay");
var statListBox = document.getElementById("statList");
var display = 1;
var buffList = [];
var mamanPassiveStacks = 0;
var poisonActive = true;

var x = window.matchMedia("(max-width: 700px)");
// import { godData } from "/SMITE-Damage-Calculator/static/js/Data.js";
// import { godDataa } from "/SMITE-Damage-Calculator/static/js/godData.js";
// import { itemData } from "/SMITE-Damage-Calculator/static/js/itemData.js";

// for (god of godDataa) {
// 	if (godList.includes(god["name"])) {
// 		for (var ability in god["abilities"]) {
// 			for (var desc in god["abilities"][ability]) {
// 				if (desc == "icon") {
// 					for (var abilities in godSearch(god["name"])["abilities"]) {
// 						if (god["abilities"][ability]["name"] == godSearch(god["name"])["abilities"][abilities]["name"]) {
// 							god["abilities"][ability]["icon"] = godSearch(god["name"])["abilities"][abilities]["icon"];
// 						}
// 					}

// 					// god['abilities'][ability][desc] = godSearch(god['name'])['abilities']
// 				}
// 			}
// 		}
// 	}

// 	console.log(god);
// }

var convergenceActive = false;
var itemNames = [];
var godNames = [];
function myFunction(x) {
	if (x.matches) {
		// If media query matches
		smallScreen = true;
	} else {
		smallScreen = false;
	}
}

var randomNum = 0;
var godLevelSlider = document.getElementById("godLevelSlider");
var godLevelDisplay = document.getElementById("godLevelDisplay");
var targetLevelSlider = document.getElementById("targetLevelSlider");
var targetLevelDisplay = document.getElementById("targetLevelDisplay");
godLevelSlider.oninput = function () {
	updateStatSheet("god");
	godLevelDisplay.innerHTML = "God Level: " + this.value;
};
targetLevelSlider.oninput = function () {
	updateStatSheet("target");
	targetLevelDisplay.innerHTML = "God Level: " + this.value;
};

myFunction(x);

x.addEventListener("change", function () {
	myFunction(x);
});

for (var godss of godDataa) {
	godNames.push(godss["name"]);
}

window.tooltipChange = function  tooltipChange(){
	var tooltip = document.querySelector('.godItems')
	tooltip.style.setProperty('--margin', '3%')
}


function autocomplete(inp, arr) {
	var currentFocus;

	inp.addEventListener("input", function (e) {
		var a,
			b,
			i,
			val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		this.parentNode.appendChild(a);

		var items = document.getElementsByClassName("item");

		for (var z = 0; z < items.length; z++) {
			var item = items[z];
			var itemName = items[z].id;
			if (itemName == arr[i]) {
				item.style.display = "inline";
			} else {
				item.style.display = "none";
			}
		}

		for (i = 0; i < arr.length; i++) {
			if (itemSearch(arr[i]) != undefined) {
				for (var tag in itemSearch(arr[i])["tag"]) {
					if (itemSearch(arr[i])["tag"][tag].toUpperCase().includes(val.toUpperCase())) {
						b = document.createElement("DIV");
						b.innerHTML = arr[i];

						b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
						if (items[arr[i]] != undefined) {
							items[arr[i]].style.display = "inline";
						}

						a.appendChild(b);
					}
				}

				if (arr[i].substr(0).toUpperCase().includes(val.toUpperCase())) {
					b = document.createElement("DIV");
					b.innerHTML = arr[i];

					b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

					if (items[arr[i]] != undefined) {
						items[arr[i]].style.display = "inline";
					}

					a.appendChild(b);
				}
			}
		}
	});

	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}
function autocompleteGods(inp, arr) {
	var currentFocus;
	inp.addEventListener("input", function (e) {
		var a,
			b,
			i,
			val = this.value;
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list2");
		a.setAttribute("class", "autocomplete-items2");
		this.parentNode.appendChild(a);

		var items = document.getElementsByClassName("godSearchList");

		for (var z = 0; z < items.length; z++) {
			var item = items[z];
			var itemName = items[z].id;
			if (itemName == arr[i]) {
				item.style.display = "inline";
			} else {
				item.style.display = "none";
			}
		}
		for (i = 0; i < arr.length; i++) {
			if (arr[i].substr(0).toUpperCase().includes(val.toUpperCase())) {
				b = document.createElement("DIV");

				b.innerHTML = arr[i];
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				items[arr[i]].style.display = "inline";
				b.addEventListener("click", function (e) {
					inp.value = this.getElementsByTagName("input2")[0].value;

					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = x.length - 1;
		x[currentFocus].classList.add("autocomplete-active2");
	}
	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active2");
		}
	}
	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName("autocomplete-items2");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}
autocompleteGods(document.getElementById("myInput2"), godNames);
window.updateLog = function updateLog(){
	var updateLog = document.getElementById('updateLog')
	if (updateLog.style.display == 'flex'){
		updateLog.style.display = 'none';
	}
	else{
		updateLog.style.display = 'flex';
	}
}
window.hideShow = function hideShow(godOrTarget) {
	var items = document.getElementsByClassName("godSearchList");
	document.getElementById("myInput2").value = "";
	for (var z = 0; z < items.length; z++) {
		var item = items[z];
		item.style.display = "inline";
	}
	if (godOrTarget == "god") {
		counter = 0;
		statLean.style.justifyContent = "right";
		listBox.style.justifyContent = "left";

		if (smallScreen == true) {
			statList.style.top = 70 + "vh";
			for (var i of overlay) {
				i.style.top = 25 + "%";
			}
		}
	} else {
		counter = 1;
		statLean.style.justifyContent = "left";
		listBox.style.justifyContent = "right";
		if (smallScreen == true) {
			statList.style.top = 171 + "vh";
			for (var i of overlay) {
				i.style.top = 121 + "%";
			}
		}
	}

	if (display == 0) {
		div.style.display = "none";
		display = 1;
	} else {
		div.style.display = "-webkit-box";
		display = 0;
	}
};
window.closeIntro = function closeIntro() {
	document.getElementById("websiteIntro").style.top = "1000vh";
};
window.hideShowItem = function hideShowItem(number, godOrTarget) {
	var listBox = document.getElementById("listBox");
	var items = document.getElementsByClassName("item");

	for (var z = 0; z < items.length; z++) {
		var item = items[z];
		item.style.display = "inline";
	}
	itemNumber = number;
	if (godOrTarget == "god") {
		counter = 0;
		if (smallScreen == true) {
			statList.style.top = 70 + "vh";
			for (var i of overlay) {
				i.style.top = 25 + "%";
			}
		}
	} else {
		counter = 1;
		if (smallScreen == true) {
			statList.style.top = 171 + "vh";
			for (var i of overlay) {
				i.style.top = 121 + "%";
			}
		}
	}
	if (counter == 0) {
		listBox.style.justifyContent = "left";
		itemNames = [];

		for (var items of itemData) {
			itemNames.push(items["name"]);
		}
	} else {
		listBox.style.justifyContent = "right";
		itemNames = [];

		for (var items of itemData) {
			itemNames.push(items["name"]);
		}
	}

	var items = document.getElementsByClassName("item");
	document.getElementById("myInput").value = "";

	if (itemDisplay == 0) {
		itemDiv.style.display = "none";
		itemDisplay = 1;
	} else {
		itemDiv.style.display = "-webkit-box";
		itemDisplay = 0;
	}
	autocomplete(document.getElementById("myInput"), itemNames);
};
window.hideShowBuffs = function hideShowBuffs(number, selectionName) {
	buffNumber = number;
	if (selectionName == "god") {
		statLean.style.justifyContent = "right";
		listBox.style.justifyContent = "left";
		counter = 0;
		if (smallScreen == true) {
			statList.style.top = 70 + "vh";
			for (var i of overlay) {
				i.style.top = 25 + "%";
			}
		}
	} else {
		statLean.style.justifyContent = "left";
		listBox.style.justifyContent = "right";
		counter = 1;
		if (smallScreen == true) {
			statList.style.top = 171 + "vh";
			for (var i of overlay) {
				i.style.top = 121 + "%";
			}
		}
	}
	if (buffDisplay == 0) {
		buffDiv.style.display = "none";
		buffDisplay = 1;
	} else {
		buffDiv.style.display = "block";
		buffDisplay = 0;
	}
};
window.buffSelection = function buffSelection(buff) {
	buffDisplay = 1;
	buffDiv.style.display = "none";
	if (buff == "Remove Buff") {
		buff.name = "";
		buff.src =
			"https://imgs.search.brave.com/SvgE9MupCXpSMrU9AqOCNJ5IpHmIYudCrzj349teX3M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMveXVhaS11c2Vy/LWludGVyZmFjZS12/b2wtMy8xMDAveXVh/aS0zLTEzLTEyOC5w/bmc";
	}

	if (counter == 0) {
		if (buffNumber == 1) {
			document.getElementById("buffOneForm").value = buff.name;
			document.getElementById("buffOne").src = buff.src;
			getBuffToolTip(buffNumber - 1, buff.name);
		}
		if (buffNumber == 2) {
			document.getElementById("buffTwoForm").value = buff.name;
			document.getElementById("buffTwo").src = buff.src;
			getBuffToolTip(buffNumber - 1, buff.name);
		}
		if (buffNumber == 3) {
			document.getElementById("buffThreeForm").value = buff.name;
			document.getElementById("buffThree").src = buff.src;
			getBuffToolTip(buffNumber - 1, buff.name);
		}
		if (buffNumber == 4) {
			document.getElementById("buffFourForm").value = buff.name;
			document.getElementById("buffFour").src = buff.src;
			getBuffToolTip(buffNumber - 1, buff.name);
		}
		if (buffNumber == 5) {
			document.getElementById("buffFiveForm").value = buff.name;
			document.getElementById("buffFive").src = buff.src;
			getBuffToolTip(buffNumber - 1, buff.name);
		}
		if (buffNumber == 6) {
			document.getElementById("buffSixForm").value = buff.name;
			document.getElementById("buffSix").src = buff.src;
			getBuffToolTip(buffNumber - 1, buff.name);
		}

		updateStatSheet("god");
	} else {
		if (buffNumber == 1) {
			document.getElementById("debuffOneForm").value = buff.name;
			document.getElementById("debuffOne").src = buff.src;
		}
		if (buffNumber == 2) {
			document.getElementById("debuffTwoForm").value = buff.name;
			document.getElementById("debuffTwo").src = buff.src;
		}
		if (buffNumber == 3) {
			document.getElementById("debuffThreeForm").value = buff.name;
			document.getElementById("debuffThree").src = buff.src;
		}
		if (buffNumber == 4) {
			document.getElementById("debuffFourForm").value = buff.name;
			document.getElementById("debuffFour").src = buff.src;
		}
		if (buffNumber == 5) {
			document.getElementById("debuffFiveForm").value = buff.name;
			document.getElementById("debuffFive").src = buff.src;
		}
		if (buffNumber == 6) {
			document.getElementById("debuffSixForm").value = buff.name;
			document.getElementById("debuffSix").src = buff.src;
		}
		updateStatSheet("target");
	}
};
window.itemSelection = function itemSelection(itemImage, selectionName) {
	itemDiv.style.display = "none";
	itemDisplay = 1;
	var toolTips = document.getElementsByClassName("godItems");

	if (selectionName == "Remove Item") {
		selectionName = "";
		itemImage =
			"https://imgs.search.brave.com/SvgE9MupCXpSMrU9AqOCNJ5IpHmIYudCrzj349teX3M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMveXVhaS11c2Vy/LWludGVyZmFjZS12/b2wtMy8xMDAveXVh/aS0zLTEzLTEyOC5w/bmc";
	}
	if (counter == 0) {
		var godNameSave = statSheet["Name"];
		godLevel = document.getElementById("godLevelSlider").value;
		statSheet = {
			Name: "N/A",
			"Intelligence": 0,
			"Strength": 0,
			"Mana": 0,
			"MP5": 0,
			"Health": 0,
			"Flat Penetration": 0,
			"% Penetration": 0,
			"Critical Strike Chance": 0,
			"Attack Speed": 0,
			'Lifesteal':0,
			"Basic Attack Damage": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			"Cooldown Rate":0
		};
		godSearch(godNameSave, godLevel);
		if (itemNumber == 1) {
			document.getElementById("itemOne").src = itemImage;
			getToolTip(itemNumber - 1, selectionName);
			itemOneForm.value = selectionName;
		}
		if (itemNumber == 2) {
			document.getElementById("itemTwo").src = itemImage;
			getToolTip(itemNumber - 1, selectionName);
			itemTwoForm.value = selectionName;
		}
		if (itemNumber == 3) {
			document.getElementById("itemThree").src = itemImage;
			getToolTip(itemNumber - 1, selectionName);
			itemThreeForm.value = selectionName;
		}
		if (itemNumber == 4) {
			document.getElementById("itemFour").src = itemImage;
			getToolTip(itemNumber - 1, selectionName);
			itemFourForm.value = selectionName;
		}
		if (itemNumber == 5) {
			document.getElementById("itemFive").src = itemImage;
			getToolTip(itemNumber - 1, selectionName);
			itemFiveForm.value = selectionName;
		}
		if (itemNumber == 6) {
			document.getElementById("itemSix").src = itemImage;
			getToolTip(itemNumber - 1, selectionName);
			itemSixForm.value = selectionName;
		}
		if (itemNumber == 7) {
			document.getElementById("itemSeven").src = itemImage;
			getToolTip(itemNumber - 1, selectionName);
			itemSevenForm.value = selectionName;
		}
		//God Build
		var itemOne = document.getElementById("itemOneForm").value;
		var itemTwo = document.getElementById("itemTwoForm").value;
		var itemThree = document.getElementById("itemThreeForm").value;
		var itemFour = document.getElementById("itemFourForm").value;
		var itemFive = document.getElementById("itemFiveForm").value;
		var itemSix = document.getElementById("itemSixForm").value;
		var itemSeven = document.getElementById("itemSevenForm").value;

		godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven];
		//Buffs
		var buffOne = document.getElementById("buffOneForm").value;
		var buffTwo = document.getElementById("buffTwoForm").value;
		var buffThree = document.getElementById("buffThreeForm").value;
		var buffFour = document.getElementById("buffFourForm").value;
		var buffFive = document.getElementById("buffFiveForm").value;
		var buffSix = document.getElementById("buffSixForm").value;

		var buffList = [buffOne, buffTwo, buffThree, buffFour, buffFive, buffSix];

		for (var item of godBuild) {
			addDamageItem(item);
		}
		for (var buff of buffList) {
			flatBuffs(buff, "god");
		}

		addGodPassive(statSheet["Name"]);
		for (var item of godBuild) {
			addItemPassive(item);
		}
		for (var buff of buffList) {
			percentBuffs(buff, "god");
		}

		

		var fullBuildCost = 0;
		for (var item of godBuild) {
			if (item != "") {
				fullBuildCost += getFullItemPrice(item);
			}
		}
		buildCost.innerHTML = "Gold Cost: " + fullBuildCost;
		updateStatSheet("god");
	} else {
		var godNameSave = targetStatSheet["Name"];

		godLevel = document.getElementById("targetLevelSlider").value;
		targetStatSheet = {
			Name: "N/A",
			"Intelligence": 0,
			"Strength": 0,
			"Mana": 0,
			"MP5": 0,
			"Health": 0,
			"Flat Penetration": 0,
			"% Penetration": 0,
			"Critical Strike Chance": 0,
			"Attack Speed": 0,
			'Lifesteal':0,
			"Basic Attack Damage": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
		};

		targetGodSearch(godNameSave, godLevel);
		if (itemNumber == 1) {
			document.getElementById("targetitemOne").src = itemImage;
			getToolTip(itemNumber + 6, selectionName);
			document.getElementById("targetItemOneForm").value = selectionName;
		}
		if (itemNumber == 2) {
			document.getElementById("targetitemTwo").src = itemImage;
			getToolTip(itemNumber + 6, selectionName);

			document.getElementById("targetItemTwoForm").value = selectionName;
		}
		if (itemNumber == 3) {
			document.getElementById("targetitemThree").src = itemImage;
			getToolTip(itemNumber + 6, selectionName);

			document.getElementById("targetItemThreeForm").value = selectionName;
		}
		if (itemNumber == 4) {
			document.getElementById("targetitemFour").src = itemImage;
			getToolTip(itemNumber + 6, selectionName);

			document.getElementById("targetItemFourForm").value = selectionName;
		}
		if (itemNumber == 5) {
			document.getElementById("targetitemFive").src = itemImage;
			getToolTip(itemNumber + 6, selectionName);

			document.getElementById("targetItemFiveForm").value = selectionName;
		}
		if (itemNumber == 6) {
			document.getElementById("targetitemSix").src = itemImage;
			getToolTip(itemNumber + 6, selectionName);

			document.getElementById("targetItemSixForm").value = selectionName;
		}
		if (itemNumber == 7) {
			document.getElementById("targetitemSeven").src = itemImage;
			getToolTip(itemNumber + 6, selectionName);

			document.getElementById("targetItemSevenForm").value = selectionName;
		}

		//Target Build

		var targetitemOne = document.getElementById("targetItemOneForm").value;
		var targetitemTwo = document.getElementById("targetItemTwoForm").value;
		var targetitemThree = document.getElementById("targetItemThreeForm").value;
		var targetitemFour = document.getElementById("targetItemFourForm").value;
		var targetitemFive = document.getElementById("targetItemFiveForm").value;
		var targetitemSix = document.getElementById("targetItemSixForm").value;
		var targetitemSeven = document.getElementById("targetItemSevenForm").value;

		var targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix, targetitemSeven];
		//Target Buffs
		var debuffOne = document.getElementById("debuffOneForm").value;
		var debuffTwo = document.getElementById("debuffTwoForm").value;
		var debuffThree = document.getElementById("debuffThreeForm").value;
		var debuffFour = document.getElementById("debuffFourForm").value;
		var debuffFive = document.getElementById("debuffFiveForm").value;
		var debuffSix = document.getElementById("debuffSixForm").value;

		var debuffList = [debuffOne, debuffTwo, debuffThree, debuffFour, debuffFive, debuffSix];

		for (var item of targetBuild) {
			addDefenseItem(item);
		}
		for (var debuff of debuffList) {
			flatBuffs(debuff, "target");
		}
		for (var debuff of debuffList) {
			percentBuffs(debuff, "target");
		}
		// for (var item of godBuild) {
		// 	addItemPassive(item);
		// }
		updateStatSheet("target");
	}
};

window.getToolTip = function getToolTip(toolTipNumber, selectionName) {
	var toolTips = document.getElementsByClassName("godItems");
	toolTips[toolTipNumber].dataset.name = "";
	toolTips[toolTipNumber].dataset.tooltip = "";
	if (selectionName == "") {
		toolTips[toolTipNumber].style.backgroundColor = "#10254a";
		toolTips[toolTipNumber].style.borderStyle = "none";
	} else {
		toolTips[toolTipNumber].dataset.name = selectionName;
		toolTips[toolTipNumber].dataset.tooltip += "\n" + "Price: " + getFullItemPrice(selectionName);
		var itemStats = itemSearch(selectionName);
		toolTips[toolTipNumber].style.backgroundColor = "#10254a";
		toolTips[toolTipNumber].style.borderStyle = "solid";

		for (var stat in itemStats) {
			if (stat != "Item Icon") {
				if (stat != "Name") {
					if (stat != "cost") {
						if (stat != "Type") {
							if (stat != "Restriction") {
								if (stat != "ActiveFlag") {
									if (stat != "ChildItem") {
										if (stat == "Attack Speed") {
											var statName = "Attack Speed:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "%";
										}
										if (stat == "Health") {
											var statName = "Health:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "";
										}
										if (stat == "Intelligence") {
											var statName = "Intelligence:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "";
										}
										if (stat == "Strength") {
											var statName = "Strength:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "";
										}
										if (stat == "Physical Protection") {
											var statName = "Physical Protection:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "";
										}
										if (stat == "Mana") {
											var statName = "Mana:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "";
										}
										if (stat == "Magical Protection") {
											var statName = "Magical Protection:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "";
										}
										if (stat == "Critical Chance") {
											var statName = "Critical Strike Chance:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "%";
										}
										if (stat == "passive") {
											toolTips[toolTipNumber].dataset.tooltip += "\n" + itemStats[stat];
										}

										if (stat == "Flat Penetration") {
											var statName = "Flat Penetration:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat];
										}
										if (stat == "Penetration") {
											var statName = "Penetration:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "%";
										}
										if (stat == "Cooldown Rate") {
											var statName = "Cooldown Rate:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat];
											
										}
										if (stat == "Lifesteal") {
											var statName = "Lifesteal:";
											toolTips[toolTipNumber].dataset.tooltip += "\n" + statName;
											toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat] + "%";
											
										}

									}
								}
							}
						}
					}
				}
			}
		}
	}
};

window.getPassiveToolTip = function getPassiveToolTip(godName){
	var toolTip = document.getElementsByClassName('godPassiveToolTip');
	var godPassive = godSearch(godName,20)['passive']
	toolTip[0].dataset.tooltip = godPassive['name'] +'\n'
	toolTip[0].dataset.tooltip += godPassive['shortDesc'] +'\n'
	
	
	

	
}

window.getAbilityToolTip = function getAbilityToolTip(godName) {
	var toolTips = document.getElementsByClassName("godAbilityTooltips");
	
	toolTips[0].dataset.tooltip = godSearch(godName, 20)["abilities"]["A01"]["name"] + "\n";
	
	
	toolTips[0].dataset.tooltip +=
		godSearch(godName, 20)
			["abilities"]["A01"]["shortDesc"].replace("<Movement>", "")
			.replace("<Damage>", "")
			.replace("{Damage_Formula}", "")
			.replace("</>", "")
			.replace("<DamageMagical>", "")
			.replace("{FinalDamage_Formula}", "") + "\n";
	if (godSearch(godName, 20)["abilities"]["A01"]["valueKeys"]["Damage"] != undefined) {
		toolTips[0].dataset.tooltip +=
			"\n" +
			"Base Damage: " +
			String(godSearch(godName, 20)["abilities"]["A01"]["valueKeys"]["Damage"])
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/");
	}
	if (godSearch(godName, 20)["abilities"]["A01"]["scales"] != undefined) {
		toolTips[0].dataset.tooltip +=
			"\n" +
			"Scaling: " +
			Math.round(godSearch(godName, 20)["abilities"]["A01"]["scales"]["Damage_Scaling"][0]["values"][0] * 100) +
			"% " +
			godSearch(godName, 20)
				["abilities"]["A01"]["scales"]["Damage_Scaling"][0]["stat"].replace("PhysicalPower", "Strength")
				.replace("MagicalPower", "Intelligence");

		if (godSearch(godName, 20)["abilities"]["A01"]["scales"]["Damage_Scaling"][1] != undefined) {
			toolTips[0].dataset.tooltip +=
				" + " +
				Math.round(godSearch(godName, 20)["abilities"]["A01"]["scales"]["Damage_Scaling"][1]["values"][0] * 100) +
				"% " +
				godSearch(godName, 20)
					["abilities"]["A01"]["scales"]["Damage_Scaling"][1]["stat"].replace("PhysicalPower", "Strength")
					.replace("MagicalPower", "Intelligence");
		}
	}

	toolTips[1].dataset.tooltip = godSearch(godName, 20)["abilities"]["A02"]["name"] + "\n";
	toolTips[1].dataset.tooltip +=
		godSearch(godName, 20)
			["abilities"]["A02"]["shortDesc"].replace("<Movement>", "")
			.replace("<Damage>", "")
			.replace("{Damage_Formula}", "")
			.replace("</>", "")
			.replace("<DamageMagical>", "")
			.replace("{FinalDamage_Formula}", "") + "\n";
	if (godSearch(godName, 20)["abilities"]["A02"]["valueKeys"]["Damage"] != undefined) {
		toolTips[1].dataset.tooltip +=
			"\n" +
			"Base Damage: " +
			String(godSearch(godName, 20)["abilities"]["A02"]["valueKeys"]["Damage"])
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/");
	}
	if (godSearch(godName, 20)["abilities"]["A02"]["scales"] != undefined) {
		toolTips[1].dataset.tooltip +=
			"\n" +
			"Scaling: " +
			Math.round(godSearch(godName, 20)["abilities"]["A02"]["scales"]["Damage_Scaling"][0]["values"][0] * 100) +
			"% " +
			godSearch(godName, 20)
				["abilities"]["A02"]["scales"]["Damage_Scaling"][0]["stat"].replace("PhysicalPower", "Strength")
				.replace("MagicalPower", "Intelligence");
		if (godSearch(godName, 20)["abilities"]["A02"]["scales"]["Damage_Scaling"][1] != undefined) {
			toolTips[1].dataset.tooltip +=
				" + " +
				Math.round(godSearch(godName, 20)["abilities"]["A02"]["scales"]["Damage_Scaling"][1]["values"][0] * 100) +
				"% " +
				godSearch(godName, 20)
					["abilities"]["A02"]["scales"]["Damage_Scaling"][1]["stat"].replace("PhysicalPower", "Strength")
					.replace("MagicalPower", "Intelligence");
		}
	}
	toolTips[2].dataset.tooltip = godSearch(godName, 20)["abilities"]["A03"]["name"] + "\n";
	toolTips[2].dataset.tooltip +=
		godSearch(godName, 20)
			["abilities"]["A03"]["shortDesc"].replace("<Movement>", "")
			.replace("<Damage>", "")
			.replace("{Damage_Formula}", "")
			.replace("</>", "")
			.replace("<DamageMagical>", "")
			.replace("{FinalDamage_Formula}", "") + "\n";
	if (godSearch(godName, 20)["abilities"]["A03"]["valueKeys"]["Damage"] != undefined) {
		toolTips[2].dataset.tooltip +=
			"\n" +
			"Base Damage: " +
			String(godSearch(godName, 20)["abilities"]["A03"]["valueKeys"]["Damage"])
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/");
	}
	if (godSearch(godName, 20)["abilities"]["A03"]["scales"] != undefined) {
		toolTips[2].dataset.tooltip +=
			"\n" +
			"Scaling: " +
			Math.round(godSearch(godName, 20)["abilities"]["A03"]["scales"]["Damage_Scaling"][0]["values"][0] * 100) +
			"% " +
			godSearch(godName, 20)
				["abilities"]["A03"]["scales"]["Damage_Scaling"][0]["stat"].replace("PhysicalPower", "Strength")
				.replace("MagicalPower", "Intelligence");
		if (godSearch(godName, 20)["abilities"]["A03"]["scales"]["Damage_Scaling"][1] != undefined) {
			toolTips[2].dataset.tooltip +=
				" + " +
				Math.round(godSearch(godName, 20)["abilities"]["A03"]["scales"]["Damage_Scaling"][1]["values"][0] * 100) +
				"% " +
				godSearch(godName, 20)
					["abilities"]["A03"]["scales"]["Damage_Scaling"][1]["stat"].replace("PhysicalPower", "Strength")
					.replace("MagicalPower", "Intelligence");
		}
	}

	toolTips[3].dataset.tooltip = godSearch(godName, 20)["abilities"]["A04"]["name"] + "\n";
	toolTips[3].dataset.tooltip +=
		godSearch(godName, 20)
			["abilities"]["A04"]["shortDesc"].replace("<Movement>", "")
			.replace("<Damage>", "")
			.replace("{Damage_Formula}", "")
			.replace("</>", "")
			.replace("<DamageMagical>", "")
			.replace("{FinalDamage_Formula}", "") + "\n";
	if (godSearch(godName, 20)["abilities"]["A04"]["valueKeys"]["Damage"] != undefined) {
		toolTips[3].dataset.tooltip +=
			"\n" +
			"Base Damage: " +
			String(godSearch(godName, 20)["abilities"]["A04"]["valueKeys"]["Damage"])
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/")
				.replace(",", "/");
	}
	if (godSearch(godName, 20)["abilities"]["A04"]["scales"] != undefined) {
		toolTips[3].dataset.tooltip +=
			"\n" +
			"Scaling: " +
			Math.round(godSearch(godName, 20)["abilities"]["A04"]["scales"]["Damage_Scaling"][0]["values"][0] * 100) +
			"% " +
			godSearch(godName, 20)
				["abilities"]["A04"]["scales"]["Damage_Scaling"][0]["stat"].replace("PhysicalPower", "Strength")
				.replace("MagicalPower", "Intelligence");

		if (godSearch(godName, 20)["abilities"]["A04"]["scales"]["Damage_Scaling"][1] != undefined) {
			toolTips[3].dataset.tooltip +=
				" + " +
				Math.round(godSearch(godName, 20)["abilities"]["A04"]["scales"]["Damage_Scaling"][1]["values"][0] * 100) +
				"% " +
				godSearch(godName, 20)
					["abilities"]["A04"]["scales"]["Damage_Scaling"][1]["stat"].replace("PhysicalPower", "Strength")
					.replace("MagicalPower", "Intelligence");
		}
	}
	var cooldownRate = 0;
	for (var item of godBuild){
		for (var stat in itemSearch(item)){
			if (stat == 'Cooldown Rate'){
				cooldownRate += itemSearch(item)[stat]
			}
		}
		
	}
	var cooldownArray = []
	
	for (var CD of godSearch(godName, 20)["abilities"]["A01"]["valueKeys"]['Cooldown']){
		CD = ((100 * CD)/(cooldownRate + 100)).toFixed(1)
		
		cooldownArray.push(CD)
	}
	toolTips[0].dataset.tooltip += "\nCooldown: " + String(cooldownArray).replace(",", "/").replace(",", "/").replace(",", "/").replace(",", "/")

	cooldownArray = []
	for (var CD of godSearch(godName, 20)["abilities"]["A02"]["valueKeys"]['Cooldown']){
		CD = ((100 * CD)/(cooldownRate + 100)).toFixed(1)
		cooldownArray.push(CD)
	}
	toolTips[1].dataset.tooltip += "\nCooldown: " + String(cooldownArray).replace(",", "/").replace(",", "/").replace(",", "/").replace(",", "/")

	cooldownArray = []
	for (var CD of godSearch(godName, 20)["abilities"]["A03"]["valueKeys"]['Cooldown']){
		CD = ((100 * CD)/(cooldownRate + 100)).toFixed(1)
		cooldownArray.push(CD)
	}
	toolTips[2].dataset.tooltip += "\nCooldown: " + String(cooldownArray).replace(",", "/").replace(",", "/").replace(",", "/").replace(",", "/")

	cooldownArray = []
	for (var CD of godSearch(godName, 20)["abilities"]["A04"]["valueKeys"]['Cooldown']){
		CD = ((100 * CD)/(cooldownRate + 100)).toFixed(1)
		if (godBuild.includes('The World Stone')){
			CD = (CD * .8).toFixed(1)
		}
		cooldownArray.push(CD)
	}
	toolTips[3].dataset.tooltip += "\nCooldown: " + String(cooldownArray).replace(",", "/").replace(",", "/").replace(",", "/").replace(",", "/")
};

window.removeAbility = function removeAbility(ability, abilityNumber) {
	abilityLoadoutForm = document.getElementsByClassName("abilityLoadoutForm");
	loadoutCounter = abilityNumber - 1;

	ability.src = "";
	ability.innerHTML = "";
	ability.style.display = "none";
	results[abilityNumber - 1].innerHTML = "";
	abilityLoadoutForm[abilityNumber - 1].value = "";
};
window.hideShowStats = function hideShowStats(selection) {
	var statSheet = document.getElementById("statList");
	if (selection == "god") {
		counter = 0;
		if (smallScreen == true) {
			statList.style.top = 70 + "vh";
		}
		if (statSheet.style.display == "none") {
			statSheet.style.display = "flex";
			updateStatSheet(selection);
		} else {
			statSheet.style.display = "none";
		}
	} else {
		counter = 1;
		if (smallScreen == true) {
			statList.style.top = 171 + "vh";
		}
		if (statSheet.style.display == "none") {
			statSheet.style.display = "flex";
			updateStatSheet(selection);
		} else {
			statSheet.style.display = "none";
		}
	}
};

window.abilitySelection = function abilitySelection(ability) {
	//    else if(ability.name == ){
	//        abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityOne.name =
	//        abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityTwo.name =
	//        abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityThree.name =
	//        abilityFour.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityFour.name =
	//}

	var abilityLoadoutArray = [];

	for (var abil of abilityLoadout) {
		abilityLoadoutArray.push(abil.style.display);
	}
	for (var abili of abilityLoadoutArray) {
		if (abili == "none") {
			loadoutCounter = abilityLoadoutArray.indexOf(abili);
			break;
		}
	}
	if (ability.name == 'Shifter Of Seasons'){
		if (document.getElementById('godPassiveSlider').value == 1){
			abilityLoadoutForm[loadoutCounter].value = 'Shifter Of Seasons (Spring)'
		}
		else if (document.getElementById('godPassiveSlider').value == 2){
			abilityLoadoutForm[loadoutCounter].value = 'Shifter Of Seasons (Summer)'
		}
		else if (document.getElementById('godPassiveSlider').value == 3){
			abilityLoadoutForm[loadoutCounter].value = 'Shifter Of Seasons (Fall)'
		}
		else{
			abilityLoadoutForm[loadoutCounter].value  = 'Shifter Of Seasons'
		}
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
	}
	
	else if (ability.name == 'Bouncing Bubble (Moonstrike)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		console.log('moon')
		ability.name = 'Moonstrike (Bouncing Bubble)'
		ability.src = '/SMITE-Damage-Calculator/static/buffIcons/yemOneMoon.png'
	}
	else if(ability.name == 'Moonstrike (Bouncing Bubble)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		ability.name = 'Bouncing Bubble (Moonstrike)'
		ability.src = '/SMITE-Damage-Calculator/static/buffIcons/yemOneBubble.png'
	}
	else{
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
	}

	
};
window.godSelection = function godSelection(godImage, selectionName) {
	div.style.display = "none";

	if (counter == 0) {
		document.getElementById("godAbilities").style.visibility = "visible";
		var god = document.getElementById("godImage");
		var godPassiveDiv = document.getElementById("godPassive");
		var godPassiveSlider = document.getElementById("godPassiveSlider");
		var godPassiveDisplay = document.getElementById("godPassiveDisplay");
		god.src = godImage;
		var godName = document.getElementById("godName");
		if (selectionName != ''){
			getAbilityToolTip(selectionName);
			getPassiveToolTip(selectionName);
		}
		var tooltip = document.querySelector('.godPassiveToolTip')
		tooltip.style.setProperty('--scale', '1')


		
		godName.innerHTML = selectionName;
		godNameForm.value = selectionName;
		if (selectionName == "Chronos") {
			document.getElementById("godPassive").style.display = "flex";
		} 
		else if(selectionName == 'Cernunnos'){
			document.getElementById("godPassive").style.display = "flex";
		}
		else if (selectionName == "Surtr") {
			godPassiveDiv.style.display = "flex";
			godPassiveDisplay.innerHTML = "Passive Stacks: " + godPassiveSlider.value;
			godPassiveSlider.max = 999;
			godPassiveSlider.oninput = function () {
				godPassiveDisplay.innerHTML = "Passive Stacks: " + godPassiveSlider.value;
			};
		} else if (selectionName == "Cthulhu") {
			godPassiveDiv.style.display = "flex";
			godPassiveDisplay.innerHTML = "Passive Stacks: " + godPassiveSlider.value;
			godPassiveSlider.max = 5;
			godPassiveSlider.oninput = function () {
				godPassiveDisplay.innerHTML = "Passive Stacks: " + godPassiveSlider.value;
			};
		} else {
			godPassiveDiv.style.display = "none";
		}

		godLevel = document.getElementById("godLevelSlider").value;
		statSheet = {
			Name: "N/A",
			Name: "N/A",
			"Intelligence": 0,
			"Strength": 0,
			"Mana": 0,
			"MP5": 0,
			"Health": 0,
			"Flat Penetration": 0,
			"% Penetration": 0,
			"Critical Strike Chance": 0,
			"Attack Speed": 0,
			'Lifesteal':0,
			"Basic Attack Damage": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			"Cooldown Rate":0
		};
		godSearch(selectionName, godLevel);
		updateStatSheet("god");
		var itemType = statSheet["Type"];
		var items = document.getElementsByClassName("item");
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.id != "Remove Item") {
				var itemName = items[i].id;
				var itemStats = itemSearch(itemName);
			}
		}
		abilityCounter = 1;
		abilityClass = document.getElementsByClassName(selectionName);
		var basicImage = document.getElementById("basicAttack");
		// if (statSheet["Role"] == "Warrior") {
		// 	basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/meleePhysical.png";
		// }
		// if (statSheet["Role"] == "Assassin") {
		// 	basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/meleePhysical.png";
		// }
		// if (statSheet["Role"] == "Mage") {
		// 	basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/rangedMagic.png";
		// }
		// if (statSheet["Role"] == "Guardian") {
		// 	basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/meleeMagic.png";
		// }
		// if (statSheet["Role"] == "Hunter") {
		// 	basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/rangedPhysical.png";
		// }
		for (let i = 0; i < 4; i++) {
			if (abilityCounter == 1) {
				document.getElementById("abilityOne").src = godSearch(selectionName, 20)["abilities"]["A01"]["icon"];
				document.getElementById("abilityOne").style.display = "block";
				document.getElementById("abilityOne").name = godSearch(selectionName, 20)["abilities"]["A01"]["name"];
				abilityCounter++;
			}
			if (abilityCounter == 2) {
				document.getElementById("abilityTwo").src = godSearch(selectionName, 20)["abilities"]["A02"]["icon"];
				document.getElementById("abilityTwo").style.display = "block";
				document.getElementById("abilityTwo").name = godSearch(selectionName, 20)["abilities"]["A02"]["name"];
				abilityCounter++;
			}
			if (abilityCounter == 3) {
				document.getElementById("abilityThree").src = godSearch(selectionName, 20)["abilities"]["A03"]["icon"];
				document.getElementById("abilityThree").style.display = "block";
				document.getElementById("abilityThree").name = godSearch(selectionName, 20)["abilities"]["A03"]["name"];
				abilityCounter++;
			}
			if (abilityCounter == 4) {
				document.getElementById("abilityFour").src = godSearch(selectionName, 20)["abilities"]["A04"]["icon"];
				document.getElementById("abilityFour").style.display = "block";
				document.getElementById("abilityFour").name = godSearch(selectionName, 20)["abilities"]["A04"]["name"];
				abilityCounter++;
			}
		}
	} else {
		targetLevel = document.getElementById("targetLevelSlider").value;
		targetGod.src = godImage;
		document.getElementById("targetNameForm").value = selectionName;
		document.getElementById("targetGodName").innerHTML = selectionName;

		targetGodSearch(selectionName, targetLevel);

		updateStatSheet("target");
	}
	display = 1;
};
window.HelloWorld = function HelloWorld() {
	healingOutput = 0;
	bracerStacks=0;
	counter = 0;
	document.getElementById('healingOutput').style.display = 'none';
	var oathProc = false;
	explosiveBolts = 0;
	var anhurPassiveStacks = 0;
	surtrPassive = document.getElementById("godPassiveSlider").value;
	surtrPassive = parseInt(surtrPassive);
	ferociousStacks = 0;
	ravanaUlt = false;
	dualityProcced = false;
	dualityDamage = 0;
	bumbasProcced = false;
	demonicStacks = 0;
	exeStacks = 0;
	totemStacks = 0;
	markActive = false;
	morriganMark = false;
	lightningCharges = 0;
	poisonActive = false;
	var mamanPassiveDamage = { Damage: 0, Mitigated: 0 };
	var cernoPassiveDamage = { Damage: 0, Mitigated: 0 };
	shiftingSandsActive = false;
	shiftingSandsBuff = 8;
	mamanPassiveStacks = 0;
	itemProts = 0;
	convergenceActive = false;
	var convergenceCount = 5;
	hydrasProcced = false;
	godLevel = document.getElementById("godLevelSlider").value;
	targetLevel = document.getElementById("targetLevelSlider").value;
	procDamage = { Damage: 0, Mitigated: 0 };
	statSheet = {
		Name: "N/A",
		"Intelligence": 0,
		"Strength": 0,
		"Mana": 0,
		"MP5": 0,
		"Health": 0,
		"Flat Penetration": 0,
		"% Penetration": 0,
		"Critical Strike Chance": 0,
		"Attack Speed": 0,
		'Lifesteal':0,
		"Basic Attack Damage": 0,
		"Magical Protection": 0,
		"Physical Protection": 0,
		"Cooldown Rate":0
	};
	totalDamage = { Damage: 0, Mitigated: 0 };
	myrddinTimer = 1;
	myrddinCountdown = 0;
	var titansProcced = false;
	var shardProcced = false;
	var myrddinProcced = false;
	var pridwenProcced = false;
	var itemDiv = document.getElementById("itemList");
	results = document.getElementsByClassName("results");
	proccOne = "";
	proccTwo = "";
	proccThree = "";
	proccFour = "";
	proccFive = "";
	proccSix = "";
	procList = [proccOne, proccTwo, proccThree, proccFour, proccFive, proccSix];
	var procResults = document.getElementsByClassName("procResults");
	godSearch(document.getElementById("godNameForm").value, godLevel);
	targetGodSearch(document.getElementById("targetNameForm").value, targetLevel);
	for (var i = 0; i < procResults.length; i++) {
		procResults[i].innerHTML = "";
	}
	for (var i = 0; i < procItems.length; i++) {
		procItems[i].src = "";
		procItems[i].style.display = "none";
	}
	setMarks = 0;
	setClones = 0;
	procDamageList = [
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
	];

	//God Build
	var itemOne = document.getElementById("itemOneForm").value;
	var itemTwo = document.getElementById("itemTwoForm").value;
	var itemThree = document.getElementById("itemThreeForm").value;
	var itemFour = document.getElementById("itemFourForm").value;
	var itemFive = document.getElementById("itemFiveForm").value;
	var itemSix = document.getElementById("itemSixForm").value;
	var itemSeven = document.getElementById("itemSevenForm").value;
	godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven];

	//Target Build
	var targetitemOne = document.getElementById("targetItemOneForm").value;
	var targetitemTwo = document.getElementById("targetItemTwoForm").value;
	var targetitemThree = document.getElementById("targetItemThreeForm").value;
	var targetitemFour = document.getElementById("targetItemFourForm").value;
	var targetitemFive = document.getElementById("targetItemFiveForm").value;
	var targetitemSix = document.getElementById("targetItemSixForm").value;
	var targetitemSeven = document.getElementById("targetItemSevenForm").value;
	targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix, targetitemSeven];

	//Ability Rotation
	var abilityOne = document.getElementById("abilityOneForm").value;
	var abilityTwo = document.getElementById("abilityTwoForm").value;
	var abilityThree = document.getElementById("abilityThreeForm").value;
	var abilityFour = document.getElementById("abilityFourForm").value;
	var abilityFive = document.getElementById("abilityFiveForm").value;
	var abilitySix = document.getElementById("abilitySixForm").value;
	var abilitySeven = document.getElementById("abilitySevenForm").value;
	var abilityEight = document.getElementById("abilityEightForm").value;

	abilityRotation = [abilityOne, abilityTwo, abilityThree, abilityFour, abilityFive, abilitySix, abilitySeven, abilityEight];
	//Buffs

	var buffOne = document.getElementById("buffOneForm").value;
	var buffTwo = document.getElementById("buffTwoForm").value;
	var buffThree = document.getElementById("buffThreeForm").value;
	var buffFour = document.getElementById("buffFourForm").value;
	var buffFive = document.getElementById("buffFiveForm").value;
	var buffSix = document.getElementById("buffSixForm").value;

	var buffList = [buffOne, buffTwo, buffThree, buffFour, buffFive, buffSix];

	var debuffOne = document.getElementById("debuffOneForm").value;
	var debuffTwo = document.getElementById("debuffTwoForm").value;
	var debuffThree = document.getElementById("debuffThreeForm").value;
	var debuffFour = document.getElementById("debuffFourForm").value;
	var debuffFive = document.getElementById("debuffFiveForm").value;
	var debuffSix = document.getElementById("debuffSixForm").value;
	var debuffList = [debuffOne, debuffTwo, debuffThree, debuffFour, debuffFive, debuffSix];

	//Add damage items
	for (var i = 0; i < godBuild.length; i++) {
		var item = godBuild[i];
		if (item != "") {
			addDamageItem(item);
		}
	}

	for (var i = 0; i < buffList.length; i++) {
		var buff = buffList[i];
		flatBuffs(buff, "god");
	}

	addGodPassive(document.getElementById("godNameForm").value);
	
	for (var i = 0; i < godBuild.length; i++) {
		var item = godBuild[i];
		if (item != "") {
			addItemPassive(item);
		}
	}

	

	for (var i = 0; i < buffList.length; i++) {
		var buff = buffList[i];
		percentBuffs(buff, "god");
	}

	for (var i = 0; i < debuffList.length; i++) {
		var debuff = debuffList[i];
		flatBuffs(debuff, "target");
	}
	for (var i = 0; i < debuffList.length; i++) {
		var debuff = debuffList[i];
		percentBuffs(debuff, "target");
	}

	//Add defense items
	for (var i = 0; i < targetBuild.length; i++) {
		var item = targetBuild[i];
		if (item != "") {
			addDefenseItem(item);
			addItemPassive(item);
		}
	}

	targetStatSheet["Current Health"] = targetStatSheet["Health"];
	
	var abilityLevel = 1;
	//Rotation Calculation
	for (var j = 0; j < abilityRotation.length; j++) {
		var damageOutput = { Damage: 0, Mitigated: 0 };

		var ability = abilityRotation[j];

		if (ability != "") {
			if (ability == document.getElementById("abilityOne").name) {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}
			if (ability == document.getElementById("abilityTwo").name) {
				abilityLevel = document.getElementById("abilityTwoSlider").value;
			}
			if (ability == document.getElementById("abilityThree").name) {
				abilityLevel = document.getElementById("abilityThreeSlider").value;
			}
			if (ability == document.getElementById("abilityFour").name) {
				abilityLevel = document.getElementById("abilityFourSlider").value;
			}
			if (ability == 'Bouncing Bubble (Moonstrike)'){
				abilityLevel = document.getElementById('abilityOneSlider').value;
			}

			if (statSheet["Name"] == "Zeus") {
				if (ability == "basicAttack") {
					lightningCharges += 1;
				}
				if (ability == "Lightning Storm") {
					lightningCharges += 3;
				}
				if (ability == "Chain Lightning") {
					lightningCharges += 2;
				}
				if (lightningCharges > 3) {
					lightningCharges = 3;
				}
			}

			if (ability == 'Shifter Of Seasons (Summer)'){
				for (var k = abilityRotation.indexOf(ability); k < abilityRotation.length; k++ ){
					var basic = abilityRotation[k];
					if (basic.includes('Shifter Of Seasons')){
						if (basic.includes('Summer')!= true){
							break
						}
					}
					if (basic == 'basicAttack'){
						damageOutput['Damage'] += (calculateDamage('Shifter Of Seasons (Summer)',document.getElementById("abilityOneSlider").value))['Damage']
						damageOutput['Mitigated'] += (calculateDamage('Shifter Of Seasons (Summer)',document.getElementById("abilityOneSlider").value))['Mitigated'];
					}
				}

				if (damageOutput["Damage"] != 0) {
						results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
					}
	
					totalDamage["Damage"] += damageOutput["Damage"];
					totalDamage["Mitigated"] += damageOutput["Mitigated"];
			}

			else if (ability == 'Shifter Of Seasons (Spring)'){
				abilityLevel = document.getElementById("abilityOneSlider").value;
				for (var z = abilityRotation.indexOf(ability); z < abilityRotation.length; z++ ){

					var basic = abilityRotation[z];
					if (basic.includes('Shifter Of Seasons')){
						if (basic.includes('Spring')!= true){
							break
						}
					}
					if (basic == 'basicAttack'){
						healingOutput += (statSheet['Intelligence'] * 0.15)
						document.getElementById("healingOutput").innerHTML = "Healing Output: " + healingOutput
						document.getElementById('healingOutput').style.display = 'flex';
					}
				}
			}


			else if (ability != "basicAttack") {
				if (godBuild.includes("Hydra's Lament")) {
					hydrasProcced = true;
				}

				if (godBuild.includes("Bumba's Hammer")) {
					bumbasProcced = true;
				}

				damageOutput = calculateDamage(ability, abilityLevel);

				if (statSheet["Name"] == "Anhur") {
					if (ability != "Shifting Sands") {
						if (anhurPassiveStacks < 2) {
							targetStatSheet["Physical Protection"] -= 10;
							anhurPassiveStacks += 1;
						}
					}
				}
				

				if (godBuild.includes("Oath-Sworn Spear")) {
					if (oathProc == false) {
						oathProc = true;
						targetStatSheet["Physical Protection"] -= statSheet["Level"];
					} else if (godBuild.includes("Stone of Binding")) {
						targetStatSheet["Magical Protection"] -= 15;
						targetStatSheet["Physical Protection"] -= 15;
					}
				} 
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}

				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} else if (ability == "basicAttack") {
				results[j].innerHTML = calculateAutoDamage();
				if (statSheet["Name"] == "Anhur") {
					if (anhurPassiveStacks < 2) {
						targetStatSheet["Physical Protection"] -= 10;
						anhurPassiveStacks += 1;
					}
				}

				if (godBuild.includes("Death's Embrace")){
					healingOutput += Math.round((statSheet['Health'] * 0.014))
				}
				
				if (statSheet['Name'] == 'Cernunnos'){
						if (cernPassive == true){
							cernPassive = false
							targetStatSheet['Physical Protection'] *= .75
							targetStatSheet['Magical Protection'] *= .75
							targetStatSheet['Physical Protection'] -= (statSheet['Intelligence'] * .05)
							targetStatSheet['Magical Protection'] -= (statSheet['Intelligence'] * .05)
						}
				}

				if (godBuild.includes("The Executioner")) {
					exeStacks += 1;
					if (exeStacks < 5) {
						statSheet["% Penetration"] += 7.5;
					}
				} else if (godBuild.includes("Demonic Grip")) {
					demonicStacks += 1;
					if (demonicStacks < 5) {
						statSheet["% Penetration"] += 7.5;
					}
				}
			}
			if (buffAbility(ability, abilityLevel) != true) {
				for (var item of godBuild) {
					if (item != "") {
						if (ability != "") {
							if (ability.includes('Shifter Of Seasons')!= true){
								if (ability == "Brutalize") {
								perAutoProcDisplay(item, "basicAttack");
								perAutoProcDisplay(item, "basicAttack");
								perAutoProcDisplay(item, "basicAttack");
								perAutoProcDisplay(item, "basicAttack");
							}
							perAutoProcDisplay(item, ability);
							perAbilityProcDisplay(item, ability);
							perRotationProcDisplay(item, ability);
							}
							
						}
					}
				}
			}
		}
	}

	for (var damage in procDamageList) {
		totalDamage["Damage"] += procDamageList[damage]["Damage"];
		totalDamage["Mitigated"] += procDamageList[damage]["Mitigated"];
	}

	currentHealthPercent = (totalDamage["Damage"] / targetStatSheet["Health"]) * 100;
	missingHealthPercent = 100 - currentHealthPercent;
	markMissingHealthPercent = 100 - currentHealthPercent;

	if (missingHealthPercent > 60) {
		missingHealthPercent = 60;
	}
	var current = targetStatSheet["Health"];
	console.log(current - totalDamage['Damage'])
	if (current - totalDamage["Damage"] < 0) {
		document.getElementById("currentHealthStat").style.width = 0 + "%";
	} else {
		document.getElementById("currentHealthStat").style.width =
			((targetStatSheet["Health"] - totalDamage["Damage"]) / targetStatSheet["Health"]) * 100 + "%";
	}

	document.getElementById("damageOutput").innerHTML = "Damage Output: " + totalDamage["Damage"] + " (-" + totalDamage["Mitigated"] + ")";

	if (statSheet['Lifesteal'] > 0){
		healingOutput += Math.round((totalDamage["Damage"] *  (statSheet['Lifesteal']/100)))
		document.getElementById("healingOutput").innerHTML = "Healing Output: " + healingOutput
		document.getElementById('healingOutput').style.display = 'flex';
	}

	document.getElementById("currentHealthValue").innerHTML = targetStatSheet["Health"] - totalDamage["Damage"] + "/" + targetStatSheet["Health"];
	var abilityRotationLength = 0;
	for (var b = 0; b < abilityRotation.length; b++) {
		var basic = abilityRotation[b];
		if (basic != "") {
			abilityRotationLength += 1;
		}
	}

	if (abilityRotationLength == 1) {
		if (abilityRotation[0] == "basicAttack") {
				document.getElementById("damageOutput").innerHTML = "DPS: " + Math.round(totalDamage["Damage"] * statSheet['Attack Speed']);	
		}
	}
	else if(abilityRotationLength == 2){
		if (abilityRotation[0].includes('Shifter Of Seasons')){
			if (abilityRotation[1] == "basicAttack") {
					document.getElementById("damageOutput").innerHTML = "DPS: " + Math.round(totalDamage["Damage"] * statSheet['Attack Speed']);	
			}
		}
	}

};

function minMaxBuild(godName, abilityName) {
	var testedBuilds = [];
	var itemOne = "";
	var itemTwo = "";
	var itemThree = "";
	var itemFour = "";
	var itemFive = "";
	var itemSix = "";
	var itemSeven = "";
	var physicalProclist = ["The Crusher", "Heartseeker", "Bluestone Brooch", "Corrupted Bluestone", "Gladiator's Shield"];
	var itemList = [];

	for (var item of itemData) {
		if (item["tier"] == 3) {
			if (item["relic"] != !0) {
				if (item["tags"].includes("Category.Offensive")) {
					if (item["name"] != "Polynomicon") {
						itemList.push(item["name"]);
					}
				}
			}
		}
	}

	itemList.push("Soul Reaver");
	itemList.push("Bluestone Brooch");
	itemList.push("Archmage's Gem");

	console.log(itemList);
	var bestBuild = "";
	var currentBuild = [];
	var bestDamage = { "Damage": 0, "Mitigated": 0 };
	var testedBuilds = [[]];
	for (let i = 0; i < itemList.length; i++) {
		for (let j = i + 1; j < itemList.length; j++) {
			for (let k = j + 1; k < itemList.length; k++) {
				for (let l = k + 1; l < itemList.length; l++) {
					for (let m = l + 1; m < itemList.length; m++) {
						for (let n = m + 1; n < itemList.length; n++) {
							for (let o = n + 1; o < itemList.length; o++) {
								currentBuild = [itemList[i], itemList[j], itemList[k], itemList[l], itemList[m], itemList[n], itemList[o]];
								godBuild = currentBuild;
								statSheet = {
									Name: "N/A",
									"Intelligence": 0,
									"Strength": 0,
									"Mana": 0,
									"MP5": 0,
									"Health": 0,
									"Flat Penetration": 0,
									"% Penetration": 0,
									"Critical Strike Chance": 0,
									"Attack Speed": 0,
									"Basic Attack Damage": 0,
									"Magical Protection": 0,
									"Physical Protection": 0,
								};

								godSearch(godName, 20);
								addGodPassive(godName);
								targetGodSearch("The Morrigan", 20);
								targetStatSheet["Current Health"] = targetStatSheet["Health"];

								for (var item of currentBuild) {
									addDamageItem(item);
								}

								flatBuffs("Elixir of Intelligence", "god");
								flatBuffs("Elixir of Strength", "god");

								if (currentBuild.includes("Evolved Book of Thoth")) {
									addItemPassive("Evolved Book of Thoth");
									for (var item of currentBuild) {
										if (item != "Evolved Book of Thoth") {
											addItemPassive(item);
										}
									}
								} else {
									for (var item of currentBuild) {
										addItemPassive(item);
									}
								}

								var totalDamage = { "Damage": 0, "Mitigated": 0 };

								var damageDealt = calculateDamage(abilityName, 5);
								totalDamage["Damage"] += damageDealt["Damage"];
								totalDamage["Mitigated"] += damageDealt["Mitigated"];

								for (var item of currentBuild) {
									if (physicalProclist.includes(item) != true) {
										if (calculateMagicalProcDamage(item)["Damage"] != 0) {
											var damageDealt = calculateMagicalProcDamage(item);

											totalDamage["Damage"] += damageDealt["Damage"];
											totalDamage["Mitigated"] += damageDealt["Mitigated"];
										}
									}
								}

								for (var item of currentBuild) {
									if (physicalProclist.includes(item) == true) {
										if (calculatePhysicalProcDamage(item)["Damage"] != 0) {
											var damageDealt = calculatePhysicalProcDamage(item);

											totalDamage["Damage"] += damageDealt["Damage"];
											totalDamage["Mitigated"] += damageDealt["Mitigated"];
										}
									}
								}

								if (totalDamage["Damage"] > bestDamage["Damage"]) {
									bestDamage["Damage"] = totalDamage["Damage"];
									bestDamage["Mitigated"] = totalDamage["Mitigated"];
									bestBuild = currentBuild;
									console.log(statSheet);
								}
							}
						}
					}
				}
			}
		}
	}
	console.log("Best Build: " + bestBuild + " " + bestDamage["Damage"] + " " + bestDamage["Mitigated"]);
	console.log(targetStatSheet);
}

function buffAbility(abilityName, abilityRank) {
	var buffAbility = false;
	if (abilityName == "Agility") {
		statSheet["Strength"] += 20 + 5 * abilityRank;
		buffAbility = true;
	}

	if (abilityName == 'Shifter Of Seasons (Fall)'){
		cernPassive = true;
	}

	if (abilityName == 'Clay Soldiers'){
		statSheet['Flat Penetration'] += 6 + (4 * abilityRank)
	}
	if (abilityName == "Pillar Of Agony") {
		targetStatSheet["Magical Protection"] *= 0.9;
		targetStatSheet["Magical Protection"] -= 7 + abilityRank * 3;
	}
	if (abilityName == "Scent of Death") {
		statSheet["Flat Penetration"] += 3 * abilityRank + 5;
		buffAbility = true;
	}

	if (abilityName == "Chug") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + (10 + 5 * abilityRank);
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (10 + 5 * abilityRank);
		statSheet["Intelligence"] += 5 + abilityRank * 5;
		statSheet["Strength"] += 2 + abilityRank * 4;
		buffAbility = true;
	}

	if (abilityName == "Explosive Bolts") {
		if (abilityRank != 1) {
			statSheet["Critical Strike Chance"] += 3 * abilityRank;
		}
		explosiveBolts = abilityRank * 0.03;
		buffAbility = true;
	}
	if (abilityName == "Seething Howl") {
		statSheet["Strength"] += 5 + 10 * abilityRank;
		buffAbility = true;
	}

	if (abilityName == "Shifting Sands") {
		shiftingSandsActive = true;
		shiftingSandsBuff = 5 + 3 * abilityRank;
		buffAbility = true;
	}
	return buffAbility;
}

function getBasicDamage() {
	var basicDamage = 0;
	var AttackSpeedSave = statSheet['Attack Speed']
	basicDamage = (godSearch(statSheet['Name'], statSheet['Level']))['Basic Attack Damage']
	statSheet['Attack Speed'] = AttackSpeedSave
	if (explosiveBolts > 0) {
		basicDamage += statSheet["Basic Attack Damage"] =
			statSheet["Intelligence"] * (0.2 * (1 + explosiveBolts)) + statSheet["Strength"] * (1 + explosiveBolts);
	}
	else if (statSheet["Name"] == "Ymir") {
		basicDamage += statSheet["Basic Attack Damage"] = statSheet["Strength"] * 1.85 + statSheet["Intelligence"] * 0.37;
	}
	else if (statSheet["Name"] == "Athena") {
		if(athenaPassive == true) {
			
		}
		basicDamage += ((statSheet["Strength"] * 1.25) + (statSheet["Intelligence"] * 0.55));
		basicDamage *= 1.25;
	}else{
		basicDamage += (statSheet["Intelligence"] * 0.2 ) + statSheet["Strength"];
	}


	if (godBuild.includes('Dagger of Frenzy')){
		basicDamage += 40;
	}
	if (godBuild.includes('Bracer Of The Abyss')){
		basicDamage += (bracerStacks * 15)
	}

	statSheet['Basic Attack Damage'] = basicDamage
	return basicDamage;
}
function getFullItemPrice(item) {
	var fullItemPrice = 0;

	fullItemPrice += itemSearch(item)["cost"];
	return fullItemPrice;
}
function itemSearch(itemName) {
	if (itemName != "") {
		for (var item of itemData) {
			if (item != undefined) {
				if (item["name"] == itemName) {
					if (item["relic"] != !0) {
						if (item["stats"] != undefined) {
							var itemStats = item["stats"];

							if (item["tags"] != undefined) {
								itemStats["tag"] = item["tags"];
							}

							if (item["totalCost"] != 0) {
								itemStats["cost"] = item["totalCost"];
							}

							if (item["passive"] != "") {
								itemStats["passive"] = item["passive"];
							}

							itemStats["Item Icon"] = item["icon"];
						}
					}

					return itemStats;
				}
			}
		}
	}
}
function godSearch(godName, godLevel) {
	var baseStats = "";
	for (var i = 0; i < godDataa.length; i++) {
		var god = godDataa[i];
		if (god["name"] == godName) {
			baseStats = god["baseStats"];
		}
	}
	for (var i = 0; i < godDataa.length; i++) {
		var god = godDataa[i];
		if (god["name"] == godName) {
			god["HealthPerLevel"] = (baseStats["MaxHealth"]["rate"]) * 1.15;
			god['passive'] = god['passive']
			statSheet["Level"] = godLevel;
			god["Health"] = baseStats["MaxHealth"][1];
			god["Mana"] = baseStats["MaxMana"][1];
			god["ManaPerLevel"] = baseStats["MaxMana"]["rate"];
			god["MagicProtection"] = baseStats["MagicalProtection"][1];
			god["MagicProtectionPerLevel"] = baseStats["MagicalProtection"]["rate"];
			god["PhysicalProtection"] = baseStats["PhysicalProtection"][1];
			god["PhysicalProtectionPerLevel"] = baseStats["PhysicalProtection"]["rate"];
			god["Attack Speed"] = baseStats["BaseAttackSpeed"][1];
			god["Attack Speed Per Level"] = baseStats["AttackSpeedPercent"]["rate"] / 100;
			if (baseStats['InhandPower'][1] != 0){
				god['Base Auto Damage'] = baseStats["InhandPower"][1];
				god['Basic Damage Per Level'] = baseStats["InhandPower"]["rate"];
			}
			else{
				god['Base Auto Damage'] = baseStats['PhysicalPower'][1]
				god['Basic Damage Per Level'] = baseStats['PhysicalPower']['rate']
			}

			
			
			
			
			statSheet["Type"] = god["Type"];
			godLevel = godLevel - 1;
			god['Basic Attack Damage'] = god['Base Auto Damage'] + Math.round(god["Basic Damage Per Level"] * godLevel);
			statSheet['Basic Attack Damage'] = god['Basic Attack Damage']
			statSheet["Name"] = god["name"];
			statSheet["Health"] = Math.round(god["Health"] + godLevel * god["HealthPerLevel"]);
			statSheet["Mana"] = Math.round(god["Mana"] + godLevel * god["ManaPerLevel"]);
			statSheet["Physical Protection"] = Math.round(god["PhysicalProtection"] + godLevel * god["PhysicalProtectionPerLevel"]);
			statSheet["Magical Protection"] = Math.round(god["MagicProtection"] + godLevel * god["MagicProtectionPerLevel"]);
			statSheet["Attack Speed"] = god["Attack Speed"] + godLevel * god["Attack Speed Per Level"];

			return god;
		}
	}
}
function targetGodSearch(godName, godLevel) {
	var baseStats = "";
	for (var i = 0; i < godDataa.length; i++) {
		var god = godDataa[i];
		if (god["name"] == godName) {
			baseStats = god["baseStats"];
		}
	}
	for (var i = 0; i < godDataa.length; i++) {
		var god = godDataa[i];

		if (god["name"] == godName) {
			god["HealthPerLevel"] = (baseStats["MaxHealth"]["rate"]) * 1.15;
			god["Health"] = baseStats["MaxHealth"][1];
			god["Mana"] = baseStats["MaxMana"][1];
			god["ManaPerLevel"] = baseStats["MaxMana"]["rate"];
			god["MagicProtection"] = baseStats["MagicalProtection"][1];
			god["MagicProtectionPerLevel"] = baseStats["MagicalProtection"]["rate"];
			god["PhysicalProtection"] = baseStats["PhysicalProtection"][1];
			god["PhysicalProtectionPerLevel"] = baseStats["PhysicalProtection"]["rate"];
			god["Attack Speed"] = baseStats["BaseAttackSpeed"][1];
			god["Attack Speed Per Level"] = baseStats["AttackSpeedPercent"]["rate"] / 100;
			if (baseStats['InhandPower'][1] != 0){
				god['Base Auto Damage'] = baseStats["InhandPower"][1];
				god['Basic Damage Per Level'] = baseStats["InhandPower"]["rate"];
			}
			else{
				god['Base Auto Damage'] = baseStats['PhysicalPower'][1]
				god['Basic Damage Per Level'] = baseStats['PhysicalPower']['rate']
			}
		
			godLevel = godLevel - 1;
			targetStatSheet["Name"] = god["name"];
			targetStatSheet["Health"] = Math.round(god["Health"] + godLevel * god["HealthPerLevel"]);
			targetStatSheet["Mana"] = Math.round(god["Mana"] + godLevel * god["ManaPerLevel"]);
			targetStatSheet["Attack Speed"] = god["Attack Speed"] + godLevel * god["Attack Speed Per Level"];
			targetStatSheet["Physical Protection"] = Math.round(god["PhysicalProtection"] + godLevel * god["PhysicalProtectionPerLevel"]);
			targetStatSheet["Magical Protection"] = Math.round(god["MagicProtection"] + godLevel * god["MagicProtectionPerLevel"]);

			return god;
		}
	}
}

function flatBuffs(buffName, godOrTarget) {
	if (godOrTarget == "god") {
		if (buffName == "Elixir of Strength") {
			statSheet["Strength"] = Math.round(statSheet["Strength"] + 75);
		} else if (buffName == "Elixir of Intelligence") {
			statSheet["Intelligence"] = Math.round(statSheet["Intelligence"] + 120);
		}
		if (buffName == "Fire Giant") {
			statSheet["Strength"] = Math.round(statSheet["Strength"] + 50);
			statSheet["Intelligence"] = Math.round(statSheet["Intelligence"] + 50);
		}
	} else {
	}
}

window.getBuffToolTip = function getBuffToolTip(toolTipNumber, selectionName) {
	var toolTips = document.getElementsByClassName("godBuff");
	toolTips[toolTipNumber].dataset.name = "";
	toolTips[toolTipNumber].dataset.tooltip = "";
	if (selectionName == "") {
		toolTips[toolTipNumber].style.backgroundColor = "#10254a";
		toolTips[toolTipNumber].style.borderStyle = "none";
	} else {
		toolTips[toolTipNumber].dataset.name = selectionName;
		toolTips[toolTipNumber].style.backgroundColor = "#10254a";
		toolTips[toolTipNumber].style.borderStyle = "solid";

		toolTips[toolTipNumber].dataset.tooltip += "\n" + getBuffInfo(selectionName);
	}
};

window.getBuffInfo = function getBuffInfo(buffName) {
	var buffInfo = "";

	if (buffName == "Elixir of Intelligence") {
		buffInfo = "This consumable increases your Intelligence by 120 permanently. ";
	}
	if (buffName == "Elixir of Strength") {
		buffInfo = "This consumable increases your Strength by 75 permanently. ";
	}
	if (buffName == "Fire Giant") {
		buffInfo = "Increases your Strength and Intelligence by 50. (Will be adding higher tier FG buffs later) ";
	}

	return buffInfo;
};

function percentBuffs(buffName, godOrTarget) {
	if (godOrTarget == "god") {
	}
}

function updateStatSheet(selection) {
	var statLean = document.getElementById("statContainer");
	var visualAttackSpeed = 0;
	var listBox = document.getElementById("listBox");
	var visualCritChance = 0;
	if (selection == 'god') {
		var godNameSave = statSheet["Name"];
		
		godLevel = document.getElementById("godLevelSlider").value;
		statSheet = {
			Name: "N/A",
			"Intelligence": 0,
			"Strength": 0,
			"Mana": 0,
			"MP5": 0,
			"Health": 0,
			"Flat Penetration": 0,
			"% Penetration": 0,
			"Critical Strike Chance": 0,
			"Attack Speed": 0,
			'Lifesteal':0,
			"Basic Attack Damage": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			"Cooldown Rate":0
		};

		

		//God Build
		var itemOne = document.getElementById("itemOneForm").value;
		var itemTwo = document.getElementById("itemTwoForm").value;
		var itemThree = document.getElementById("itemThreeForm").value;
		var itemFour = document.getElementById("itemFourForm").value;
		var itemFive = document.getElementById("itemFiveForm").value;
		var itemSix = document.getElementById("itemSixForm").value;
		var itemSeven = document.getElementById("itemSevenForm").value;
		godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix, itemSeven];
		//Buffs
		var buffOne = document.getElementById("buffOneForm").value;
		var buffTwo = document.getElementById("buffTwoForm").value;
		var buffThree = document.getElementById("buffThreeForm").value;
		var buffFour = document.getElementById("buffFourForm").value;
		var buffFive = document.getElementById("buffFiveForm").value;
		var buffSix = document.getElementById("buffSixForm").value;

		var buffList = [buffOne, buffTwo, buffThree, buffFour, buffFive, buffSix];
		getAbilityToolTip(godNameSave);	
		godSearch(godNameSave, godLevel);
		

		for (var item of godBuild) {
			addDamageItem(item);
		}
		for (var buff of buffList) {
			flatBuffs(buff, "god");
		}
		addGodPassive(statSheet["Name"]);
		for (var item of godBuild) {
			addItemPassive(item);
		}
		for (var buff of buffList) {
			percentBuffs(buff, "god");
		}
		
		var fullBuildCost = 0;
		for (var item of godBuild) {
			if (item != "") {
				fullBuildCost += getFullItemPrice(item);
			}
		}
		
		
		buildCost.innerHTML = "Gold Cost: " + fullBuildCost;
	} else {
		var godNameSave = targetStatSheet["Name"];
		godLevel = document.getElementById("targetLevelSlider").value;
		targetStatSheet = {
			Name: "N/A",
			"Intelligence": 0,
			"Strength": 0,
			"Mana": 0,
			"MP5": 0,
			"Health": 0,
			"Flat Penetration": 0,
			"% Penetration": 0,
			"Critical Strike Chance": 0,
			"Attack Speed": 0,
			'Lifesteal':0,
			"Basic Attack Damage": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			"Cooldown Rate":0
		};
		targetGodSearch(godNameSave, godLevel);

		//Target Build

		var targetitemOne = document.getElementById("targetItemOneForm").value;
		var targetitemTwo = document.getElementById("targetItemTwoForm").value;
		var targetitemThree = document.getElementById("targetItemThreeForm").value;
		var targetitemFour = document.getElementById("targetItemFourForm").value;
		var targetitemFive = document.getElementById("targetItemFiveForm").value;
		var targetitemSix = document.getElementById("targetItemSixForm").value;
		var targetitemSeven = document.getElementById("targetItemSevenForm").value;

		var targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix, targetitemSeven];
		//Target Buffs

		var debuffOne = document.getElementById("debuffOneForm").value;
		var debuffTwo = document.getElementById("debuffTwoForm").value;
		var debuffThree = document.getElementById("debuffThreeForm").value;
		var debuffFour = document.getElementById("debuffFourForm").value;
		var debuffFive = document.getElementById("debuffFiveForm").value;
		var debuffSix = document.getElementById("debuffSixForm").value;

		var debuffList = [debuffOne, debuffTwo, debuffThree, debuffFour, debuffFive, debuffSix];
		for (var item of targetBuild) {
			addDefenseItem(item);
		}
		for (var debuff of debuffList) {
			flatBuffs(debuff, "target");
		}
		for (var debuff of debuffList) {
			percentBuffs(debuff, "target");
		}
	
	}
	if (selection == "god") {
		statLean.style.justifyContent = "right";
		listBox.style.justifyContent = "left";
		visualAttackSpeed = statSheet["Attack Speed"];
		visualCritChance = statSheet["Critical Strike Chance"];
		if (statSheet["Attack Speed"] > 2.5) {
			visualAttackSpeed = 2.5;
		}
		if (statSheet["Critical Strike Chance"] > 100) {
			visualCritChance = 100;
		}

		if (statSheet["type"] == "Magical") {
			document.getElementById("strengthStatValue").innerHTML = statSheet["Strength"];
			document.getElementById("intStatValue").innerHTML = statSheet["Intelligence"];
			document.getElementById("intStat").style.width = (statSheet["Intelligence"] / 2000) * 100 + "%";
			document.getElementById("strengthStat").style.width = (statSheet["Strength"] / 1000) * 100 + "%";
		} else {
			document.getElementById("strengthStatValue").innerHTML = statSheet["Strength"];
			document.getElementById("intStatValue").innerHTML = statSheet["Intelligence"];
			document.getElementById("intStat").style.width = (statSheet["Intelligence"] / 2000) * 100 + "%";
			document.getElementById("strengthStat").style.width = (statSheet["Strength"] / 1000) * 100 + "%";
		}
		getBasicDamage();
		document.getElementById("basicDamageValue").innerHTML = Math.round(statSheet["Basic Attack Damage"]);
		document.getElementById("basicDamageStat").style.width = (statSheet["Basic Attack Damage"] / 1000) * 100 + "%";
		document.getElementById("healthStatValue").innerHTML = statSheet["Health"];
		document.getElementById('cooldownStatValue').innerHTML = statSheet['Cooldown Rate']
		document.getElementById('lifestealStatValue').innerHTML = statSheet['Lifesteal']
		if (statSheet['Lifesteal'] > 100){
			document.getElementById('lifestealStat').style.width = 100 + '%'
		}
		else{
			document.getElementById('lifestealStat').style.width = (statSheet['Lifesteal']) + '%'
		}

		if (statSheet['Cooldown Rate'] > 100){
			document.getElementById('cooldownStat').style.width = 100 + '%'
		}
		else{
			document.getElementById('cooldownStat').style.width = (statSheet['Cooldown Rate']) + '%'
		}

		
		document.getElementById("physProtValue").innerHTML = statSheet["Physical Protection"];
		document.getElementById("magProtValue").innerHTML = statSheet["Magical Protection"];
		document.getElementById("manaStatValue").innerHTML = statSheet["Mana"];
		document.getElementById("manaStat").style.width = (statSheet["Mana"] / 10000) * 100 + "%";
		document.getElementById("physProt").style.width = (statSheet["Physical Protection"] / 400) * 100 + "%";
		document.getElementById("healthStat").style.width = (statSheet["Health"] / 4000) * 100 + "%";
		document.getElementById("magProt").style.width = (statSheet["Magical Protection"] / 400) * 100 + "%";
		document.getElementById("attackSpeedStat").style.width = (visualAttackSpeed / 2.5) * 100 + "%";
		console.log(statSheet['Attack Speed'])
		document.getElementById("attackSpeedStatValue").innerHTML = statSheet["Attack Speed"].toFixed(2);
		document.getElementById("criticalStrikeValue").innerHTML = statSheet["Critical Strike Chance"];
		document.getElementById("criticalStrikeStat").style.width = visualCritChance + "%";
		document.getElementById("percentPenValue").innerHTML = statSheet["% Penetration"];
		document.getElementById("percentPen").style.width = (statSheet["% Penetration"] / 100) * 100 + "%";
		document.getElementById("flatPenValue").innerHTML = statSheet["Flat Penetration"];
		document.getElementById("flatPen").style.width = (statSheet["Flat Penetration"] / 50) * 100 + "%";

	} else {
		visualAttackSpeed = targetStatSheet["Attack Speed"];
		visualCritChance = targetStatSheet["Critical Strike Chance"];
		if (targetStatSheet["Attack Speed"] > 2.5) {
			visualAttackSpeed = 2.5;
		}
		if (targetStatSheet["Critical Strike Chance"] > 100) {
			visualCritChance = 100;
		}
		

		statLean.style.justifyContent = "left";
		listBox.style.justifyContent = "right";

		if (targetStatSheet["type"] == "Magical") {
			document.getElementById("strengthStatValue").innerHTML = targetStatSheet["Strength"];
			document.getElementById("intStatValue").innerHTML = targetStatSheet["Intelligence"];
			document.getElementById("percentPenValue").innerHTML = targetStatSheet["% Penetration"];

			document.getElementById("intStat").style.width = (targetStatSheet["Intelligence"] / 1000) * 100 + "%";
			document.getElementById("strengthStat").style.width = (targetStatSheet["Strength"] / 500) * 100 + "%";
			document.getElementById("percentPen").style.width = (targetStatSheet["% Penetration"] / 40) * 100 + "%";
		} else {
			document.getElementById("strengthStatValue").innerHTML = targetStatSheet["Strength"];
			document.getElementById("intStatValue").innerHTML = targetStatSheet["Intelligence"];
			document.getElementById("percentPenValue").innerHTML = targetStatSheet["% Penetration"];

			document.getElementById("intStat").style.width = (targetStatSheet["Intelligence"] / 1000) * 100 + "%";
			document.getElementById("strengthStat").style.width = (targetStatSheet["Strength"] / 500) * 100 + "%";
			document.getElementById("percentPen").style.width = (targetStatSheet["% Penetration"] / 40) * 100 + "%";
		}
		document.getElementById("flatPenValue").innerHTML = targetStatSheet["Flat Penetration"];
		document.getElementById("flatPen").style.width = (targetStatSheet["Flat Penetration"] / 50) * 100 + "%";
		document.getElementById("basicDamageValue").innerHTML = targetStatSheet["Basic Attack Damage"];
		document.getElementById("basicDamageStat").style.width = (targetStatSheet["Basic Attack Damage"] / 500) * 100 + "%";
		document.getElementById("healthStatValue").innerHTML = targetStatSheet["Health"];
		document.getElementById("physProtValue").innerHTML = targetStatSheet["Physical Protection"];
		document.getElementById("magProtValue").innerHTML = targetStatSheet["Magical Protection"];
		document.getElementById("manaStatValue").innerHTML = targetStatSheet["Mana"];
		document.getElementById("manaStat").style.width = (targetStatSheet["Mana"] / 3000) * 100 + "%";
		document.getElementById("physProt").style.width = (targetStatSheet["Physical Protection"] / 325) * 100 + "%";
		document.getElementById("healthStat").style.width = (targetStatSheet["Health"] / 4000) * 100 + "%";
		document.getElementById("magProt").style.width = (targetStatSheet["Magical Protection"] / 325) * 100 + "%";
		document.getElementById("attackSpeedStat").style.width = (visualAttackSpeed / 2.5) * 100 + "%";
		document.getElementById("attackSpeedStatValue").innerHTML = targetStatSheet["Attack Speed"].toFixed(2);
		document.getElementById("criticalStrikeValue").innerHTML = targetStatSheet["Critical Strike Chance"];
		document.getElementById("criticalStrikeStat").style.width = visualCritChance + "%";
	}
}
function addGodPassive(godName) {
	if (godName == "Neith") {
		statSheet["Intelligence"] += 3 * godLevel;
	}

	if (godName == "Amaterasu") {
		var abilityOne = document.getElementById('abilityOneSlider').value;

		statSheet["Strength"] += 10 + (abilityOne * 4);
		statSheet["Strength"] += Math.round((((statSheet["Intelligence"]) * .05)));
		statSheet["Intelligence"] += 14 + (abilityOne * 4);
		statSheet["Intelligence"] += Math.round(((statSheet["Intelligence"] * .03)));
	}


	if (godName == "Ares") {
		statSheet["Intelligence"] += statSheet["Level"] * 1;
		statSheet["Strength"] += statSheet["Level"] * 1;
	}

	if (godName == "Sol") {
		statSheet["Intelligence"] += 25;
		statSheet["Strength"] += 25;
		statSheet["Basic Attack Damage"] *= 1.15;
		statSheet["Attack Speed"] *= 1.3;
	}

	if (godName === "Kukulkan") {
		var itemMana = 0;
		for (var i = 0; i < godBuild.length; i++) {
			if (godBuild[i] != "") {
				if ("Mana" in itemSearch(godBuild[i])) {
					itemMana = itemMana + parseInt(itemSearch(godBuild[i])["Mana"]);
				}
			}
		}
		statSheet["Intelligence"] = Math.round(statSheet["Intelligence"] + itemMana * 0.07);
	}
}
function perAutoProcDisplay(itemName, ability) {
	var validProcList = ["Bragi's Harp", "Bumba's Hammer", "Polynomicon", "Qin's Blade", 'Sun Beam Bow'];
	var physicalProclist = ["Qin's Blade"];

	var procSlot = 0;

	if (ability == "basicAttack") {
		if (validProcList.includes(itemName)) {
			for (var j = 0; j < procList.length; j++) {
				var proc = procList[j];
				procSlot = j;
				if (proc == "") {
					procCounts[procSlot] = 1;
					procList[j] = itemName;
					procItems[j].style.display = "flex";
					procResults[j].style.display = "block";
					procItems[j].src = itemSearch(itemName)["Item Icon"];
					if (physicalProclist.includes(itemName)) {
						procDamageList[procSlot]["Damage"] = calculatePhysicalProcDamage(itemName)["Damage"];
						procDamageList[procSlot]["Mitigated"] = calculatePhysicalProcDamage(itemName)["Mitigated"];
					} else {
						procDamageList[procSlot]["Damage"] = calculateMagicalProcDamage(itemName)["Damage"];
						procDamageList[procSlot]["Mitigated"] = calculateMagicalProcDamage(itemName)["Mitigated"];
					}

					j = 30;
				} else if (proc == itemName) {
					if (addDamageProc(itemName) != 0) {
						procCounts[procSlot] += 1;
						if (physicalProclist.includes(itemName)) {
							procDamageList[procSlot]["Damage"] += calculatePhysicalProcDamage(itemName)["Damage"];
							procDamageList[procSlot]["Mitigated"] += calculatePhysicalProcDamage(itemName)["Mitigated"];
						} else {
							procDamageList[procSlot]["Damage"] += calculateMagicalProcDamage(itemName)["Damage"];
							procDamageList[procSlot]["Mitigated"] += calculateMagicalProcDamage(itemName)["Mitigated"];
						}
					}
					j = 30;
				}
			}
		}
	}

	if (procDamageList[procSlot]["Damage"] != 0) {
		if (procCounts[procSlot] > 1) {
			procResults[procSlot].innerHTML =
				procDamageList[procSlot]["Damage"] + " (-" + procDamageList[procSlot]["Mitigated"] + ")" + " [" + "x" + procCounts[procSlot] + "]";
		} else {
			procResults[procSlot].innerHTML = procDamageList[procSlot]["Damage"] + " (-" + procDamageList[procSlot]["Mitigated"] + ")";
		}
	}
}
function perAbilityProcDisplay(itemName, ability) {
	var validProcList = [
		"The Crusher",
		"Heartseeker",
		"Soul Reaver",
		"Bluestone Brooch",
		"Corrupted Bluestone",
		"Gladiator's Shield",
		"Tablet of Destinies",
		"Bancroft's Claw",
	];
	var physicalProclist = ["The Crusher", "Heartseeker", "Bluestone Brooch", "Corrupted Bluestone", "Gladiator's Shield"];
	var procSlot = 0;

	if (ability != "basicAttack") {
		if (validProcList.includes(itemName)) {
			for (var j = 0; j < procList.length; j++) {
				var proc = procList[j];
				procSlot = j;
				if (proc == "") {
					procCounts[procSlot] = 1;
					procList[j] = itemName;
					procItems[j].style.display = "flex";
					procResults[j].style.display = "block";
					procItems[j].src = itemSearch(itemName)["Item Icon"];
					if (physicalProclist.includes(itemName)) {
						var procDamage = calculatePhysicalProcDamage(itemName);
						procDamageList[procSlot]["Damage"] += procDamage["Damage"];
						procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
					} else {
						var procDamage = calculateMagicalProcDamage(itemName);
						procDamageList[procSlot]["Damage"] += procDamage["Damage"];
						procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
					}

					j = 30;
				} else if (proc == itemName) {
					if (physicalProclist.includes(itemName)) {
						if (itemName == "Corrupted Bluestone") {
							procDamageList[procSlot]["Damage"] = 0;
							procDamageList[procSlot]["Mitigated"] = 0;
						} else {
							procCounts[procSlot] += 1;
							var procDamage = calculatePhysicalProcDamage(itemName);
							procDamageList[procSlot]["Damage"] += procDamage["Damage"];
							procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
						}
					} else {
						procCounts[procSlot] += 1;
						var procDamage = calculateMagicalProcDamage(itemName);
						procDamageList[procSlot]["Damage"] += procDamage["Damage"];
						procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
					}
					j = 30;
				}
			}
		}
	}

	if (procDamageList[procSlot]["Damage"] != 0) {
		if (procCounts[procSlot] > 1) {
			procResults[procSlot].innerHTML =
				procDamageList[procSlot]["Damage"] + " (-" + procDamageList[procSlot]["Mitigated"] + ")" + " [" + "x" + procCounts[procSlot] + "]";
		} else {
			procResults[procSlot].innerHTML = procDamageList[procSlot]["Damage"] + " (-" + procDamageList[procSlot]["Mitigated"] + ")";
		}
	}
}

function perRotationProcDisplay(itemName, ability) {
	var validProcList = ["Archmage's Gem", "Sundering Axe", "Warrior's Axe", "Soul Gem", "Glorious Pridwen"];
	var validAutoProcList = [];
	var physicalProclist = [];
	var procSlot = 0;

	if (validProcList.includes(itemName)) {
		if (validAutoProcList.includes(itemName)) {
			if (ability == "basicAttack") {
				for (var j = 0; j < procList.length; j++) {
					var proc = procList[j];
					procSlot = j;
					if (procList.includes(itemName)) {
						j = 30;
					}

					if (proc == "") {
						procCounts[procSlot] = 1;

						procList[j] = itemName;
						procItems[j].style.display = "flex";
						procResults[j].style.display = "block";
						procItems[j].src = itemSearch(itemName)["Item Icon"];

						if (physicalProclist.includes(itemName)) {
							var procDamage = calculatePhysicalProcDamage(itemName);
							procDamageList[procSlot]["Damage"] += procDamage["Damage"];
							procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
						} else {
							var procDamage = calculateMagicalProcDamage(itemName);
							procDamageList[procSlot]["Damage"] += procDamage["Damage"];
							procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
						}

						j = 30;
					}
				}
			}
		} else {
			for (var j = 0; j < procList.length; j++) {
				var proc = procList[j];
				procSlot = j;
				if (procList.includes(itemName)) {
					j = 30;
				}
				if (proc == "") {
					procCounts[procSlot] = 1;

					procList[j] = itemName;
					procItems[j].style.display = "flex";
					procResults[j].style.display = "block";
					procItems[j].src = itemSearch(itemName)["Item Icon"];
					if (physicalProclist.includes(itemName)) {
						var procDamage = calculatePhysicalProcDamage(itemName);
						procDamageList[procSlot]["Damage"] += procDamage["Damage"];
						procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
					} else {
						var procDamage = calculateMagicalProcDamage(itemName);
						procDamageList[procSlot]["Damage"] += procDamage["Damage"];
						procDamageList[procSlot]["Mitigated"] += procDamage["Mitigated"];
					}
					j = 30;
				}
			}
		}
	}
	if (procDamageList[procSlot]["Damage"] != 0) {
		if (procCounts[procSlot] > 1) {
			procResults[procSlot].innerHTML =
				procDamageList[procSlot]["Damage"] + " (-" + procDamageList[procSlot]["Mitigated"] + ")" + " [" + "x" + procCounts[procSlot] + "]";
		} else {
			procResults[procSlot].innerHTML = procDamageList[procSlot]["Damage"] + " (-" + procDamageList[procSlot]["Mitigated"] + ")";
		}
	}
}

function addItemPassive(itemName) {
	var itemPassiveName = itemName;
	var itemMana = 0;
	if (counter == 0) {
		if (itemPassiveName === "Evolved Book of Thoth") {
			for (var i = 0; i < godBuild.length; i++) {
				if (godBuild[i] != "") {
					if ("Mana" in itemSearch(godBuild[i])) {
						itemMana = itemMana + parseInt(itemSearch(godBuild[i])["Mana"]);
					}
				}
			}
			statSheet["Intelligence"] = statSheet["Intelligence"] + itemMana * 0.06;
		}

		if (itemPassiveName === "Evolved Transcendence") {
			for (var i = 0; i < godBuild.length; i++) {
				if (godBuild[i] != "") {
					if ("Mana" in itemSearch(godBuild[i])) {
						itemMana = itemMana + parseInt(itemSearch(godBuild[i])["Mana"]);
					}
				}
			}
			statSheet["Strength"] = statSheet["Strength"] + (0.02 * itemMana);
		}

		if (itemPassiveName === "Rod of Tahuti") {
			statSheet["Intelligence"] = Math.round(statSheet["Intelligence"] * 1.2);
		}
		if (itemPassiveName == 'Dagger of Frenzy'){
			statSheet['Basic Attack Damage'] += 40;
		}

		if (itemPassiveName == 'Obsidian Shard'){
			if(godBuild.includes("Titan's Bane")){
				statSheet['% Penetration'] -= 20
			}
		}

		if (itemPassiveName === "Dreamer's Idol") {
			statSheet["Intelligence"] = Math.round(statSheet["Intelligence"] * 1.2);
		}
		if (itemPassiveName === "Avatar's Parashu") {
			statSheet["Strength"] = Math.round(statSheet["Strength"] * 1.2);
		}

		if (itemPassiveName == "Stone of Binding") {
			targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - 0.8 * statSheet["Level"];
			targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] - 0.8 * statSheet["Level"];
		}

		if (itemPassiveName == "Bumba's Spear"){
			statSheet['Strength'] = Math.round(statSheet['Strength'] * 1.1)
			statSheet['Intelligence'] = Math.round(statSheet['Intelligence']* 1.1)
		}

		if (itemPassiveName === "Evolved Gauntlet of Thebes") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + 10;
			statSheet["Magical Protection"] = statSheet["Magical Protection"] + 10;
		}
		if (itemPassiveName === "Evolved Prophetic Cloak") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + 15;
			statSheet["Magical Protection"] = statSheet["Magical Protection"] + 15;
		}
		if (itemPassiveName === "Void Shield") {
			targetStatSheet["Physical Protection"] *= 0.9;
		}
		if (itemPassiveName === "Void Stone") {
			targetStatSheet["Magical Protection"] *= 0.9;
		}
		if (itemPassiveName === "Triton's Conch") {
			statSheet["Strength"] += Math.round((7 + (statSheet["Level"] * 0.5)));
			statSheet["Intelligence"] = statSheet["Intelligence"] + (10 + parseInt(statSheet['Level']));
		}
	}
	return statSheet;
}

function addDamageItem(itemName) {
	var itemStats = itemSearch(itemName);
	for (var stat in itemStats) {
		if (stat === "Intelligence") {
			statSheet["Intelligence"] = statSheet["Intelligence"] + parseInt(itemStats["Intelligence"]);
		} else if (stat === "Penetration") {
			statSheet["% Penetration"] += parseInt(itemStats["Penetration"]);
		} else if (stat === "Flat Penetration") {
			statSheet["Flat Penetration"] += parseInt(itemStats["Flat Penetration"]);
		} else if (stat === "Mana") {
			statSheet["Mana"] = statSheet["Mana"] + parseInt(itemStats["Mana"]);
		}  else if (stat === "MP5") {
			statSheet["MP5"] = statSheet["MP5"] + parseInt(itemStats["MP5"]);
		} else if (stat === "Strength") {
			statSheet["Strength"] = statSheet["Strength"] + parseInt(itemStats["Strength"]);
		} else if (stat === "Critical Chance") {
			statSheet["Critical Strike Chance"] = statSheet["Critical Strike Chance"] + parseInt(itemStats["Critical Chance"]);
		} else if (stat == "physicalProtection") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + parseInt(itemStats["Physical Protection"]);
		} else if (stat == "Magical Protection") {
			statSheet["Magical Protection"] = statSheet["Magical Protection"] + parseInt(itemStats["Magical Protection"]);
		} else if (stat == "Health") {
			statSheet["Health"] = statSheet["Health"] + parseInt(itemStats["Health"]);
		} else if (stat == "Attack Speed") {
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + parseInt(itemStats["Attack Speed"]) / 100;
			console.log(statSheet['Attack Speed'])
		}
		else if (stat == 'Lifesteal'){
			console.log(parseInt(itemStats['Lifesteal']))
			statSheet['Lifesteal'] += parseInt(itemStats['Lifesteal'])
		}

		else if (stat == 'Cooldown Rate'){
			statSheet['Cooldown Rate'] += parseInt(itemStats['Cooldown Rate'])
			
		}
	}

	return statSheet;
}
function addDefenseItem(itemName) {
	
	var itemStats = itemSearch(itemName);
	for (var stat in itemStats) {
		if (stat === "Intelligence") {
			targetStatSheet["Intelligence"] = targetStatSheet["Intelligence"] + parseInt(itemStats["Intelligence"]);
		} else if (stat === "percentPenetration") {
			targetStatSheet["% Penetration"] += parseInt(itemStats["percentPenetration"]);
		} else if (stat === "flatPenetration") {
			targetStatSheet["Flat Penetration"] += parseInt(itemStats["flatPenetration"]);
		} else if (stat === "Mana") {
			targetStatSheet["Mana"] = targetStatSheet["Mana"] + parseInt(itemStats["Mana"]);
		}  else if (stat === "MP5") {
			targetStatSheet["MP5"] = targetStatSheet["MP5"] + parseInt(itemStats["MP5"]);
		} else if (stat === "Strength") {
			targetStatSheet["Strength"] = targetStatSheet["Strength"] + parseInt(itemStats["Strength"]);
		} else if (stat === "criticalChance") {
			targetStatSheet["Critical Strike Chance"] = targetStatSheet["Critical Strike Chance"] + parseInt(itemStats["criticalChance"]);
		} else if (stat == "physicalProtection") {
			targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] + parseInt(itemStats["physicalProtection"]);
		} else if (stat == "Magical Protection") {
			targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] + parseInt(itemStats["Magical Protection"]);
		} else if (stat == "Health") {
			targetStatSheet["Health"] = targetStatSheet["Health"] + parseInt(itemStats["Health"]);
		} else if (stat == "Attack Speed") {
			targetStatSheet["Attack Speed"] = targetStatSheet["Attack Speed"] + parseInt(itemStats["Attack Speed"]) / 100;
		}
		else if (stat == 'Lifesteal'){
			targetStatSheet['Lifesteal'] += parseInt(itemStats['Lifesteal'])
		}

		else if (stat == 'Cooldown Rate'){
			targetStatSheet['Cooldown Rate'] += parseInt(itemStats['Cooldown Rate'])
			
		}
	}
	
	return targetStatSheet;
}
function getStatSheet() {
	return String(statSheet);
}

function getTargetStatSheet() {
	return String(targetStatSheet);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
function addDamageProc(itemName) {
	var damageAdded = 0;
	itemProts = 0;
	var godStats = statSheet;
	var godProts = godStats["Physical Protection"] + godStats["Magical Protection"];
	var statProts = statSheet["Magical Protection"] + statSheet["Physical Protection"];

	for (var b = 0; b < godBuild.length; b++) {
		var itemStats = itemSearch(godBuild[b]);
		for (var stat in itemStats) {
			if (stat.includes("physicalProtection")) {
				itemProts += parseInt(itemStats[stat]);
			} else if (stat.includes("Magical Protection")) {
				itemProts += parseInt(itemStats[stat]);
			}
		}
	}
	if (itemName == "Gladiator's Shield") {
		damageAdded = 15 + (itemProts * 0.3);
	}
	if (itemName == "Sun Beam Bow") {
		damageAdded = 40 + (statSheet['Basic Attack Damage'] *.4)
	}
	if (itemName == 'Glorious Pridwen'){
		damageAdded = (statSheet['Magical Protection'] + statSheet['Physical Protection']) * 1.1
	}
	
	if (itemName == "Polynomicon") {
		damageAdded = statSheet["Intelligence"] * 0.65;
	}
	if (itemName == "Bragi's Harp") {
		damageAdded = 10 + statSheet["Level"] * 3;
	} else if (itemName === "Bumba's Hammer") {
		damageAdded = 40;
	}

	if (itemName == "The Crusher") {
		damageAdded = statSheet["Strength"] * 0.3;
		if (procCounts[procList.indexOf(itemName)] > 1) {
			damageAdded = damageAdded * 0.5;
		}
	}

	if (itemName == "Bluestone Brooch") {
		var currentHealth = targetStatSheet["Current Health"];

		for (var i = 0; i < 4; i++) {
			
			damageAdded += 30 + currentHealth * 0.01875;

			currentHealth -= 30 + currentHealth * 0.01875;
		}

		if (procCounts[procList.indexOf(itemName)] > 1) {
			damageAdded = damageAdded * 0.5;
		}
	}

	if (itemName == "Sundering Axe") {
		damageAdded = 150 + (itemProts * .1);
	}

	if (itemName == "Soul Reaver") {
		var currentHealth = targetStatSheet["Current Health"];
		for (var i = 0; i < 4; i++) {
			damageAdded += currentHealth * 0.025;
			currentHealth -= currentHealth * 0.025;
		}

		if (damageAdded < targetStatSheet["Health"] * 0.025) {
			damageAdded = targetStatSheet["Health"] * 0.025;
		}
	}
	if (itemName == "Archmage's Gem") {
		damageAdded = statSheet["Intelligence"] * 0.4;
	}
	if (itemName == "Qin's Blade") {
		damageAdded = targetStatSheet["Health"] * 0.04;
	}
	if (itemName == "Heartseeker") {
		damageAdded = ((statSheet["Strength"] * 0.02) / 100) * targetStatSheet["Health"];
	}
	if (itemName == "Soul Gem") {
		damageAdded = statSheet["Intelligence"] * 0.3;
	}

	return damageAdded;
}

function abilitySearch(abilityName, abilityRank) {
	var abilityDamage = { "Base Damage": 0, "Scaling": 0, "ScalingType": "N/A", "TickCount": 1 };
	for (var god of godDataa) {
		for (var ability in god["abilities"]) {
			if (god["abilities"][ability]["name"] == abilityName) {
				if (god["abilities"][ability]["valueKeys"]["Damage"] != undefined) {
					abilityDamage["Base Damage"] = god["abilities"][ability]["valueKeys"]["Damage"][abilityRank - 1];
				}
				if (god["abilities"][ability]["scales"] != undefined) {
					abilityDamage["Scaling"] = god["abilities"][ability]["scales"]["Damage_Scaling"][0]["values"][abilityRank - 1];
				}
				if (god["abilities"][ability]["scales"] != undefined) {
					abilityDamage["ScalingType"] = god["abilities"][ability]["scales"]["Damage_Scaling"][0]["stat"];
				}

				if (god["abilities"][ability]["valueKeys"]["AttackCount"] != undefined) {
					abilityDamage["TickCount"] = god["abilities"][ability]["valueKeys"]["AttackCount"][abilityRank - 1];
				}
			}
		}
	}

	return abilityDamage;
}

function calculateDamage(abilityName, abilityRank) {
	output = { "Damage": 0, "Mitigated": 0 };

	var tickCount = 1;
	tickCount = abilitySearch(abilityName, abilityRank)["TickCount"];
	var damageOutput = 0;

	if (abilityName == "Brutalize") {
		tickCount = 4;
	}
	if (abilityName == "Air Strike") {
		tickCount = 2;
	}
	if (abilityName == "Dazzling Offensive") {
		tickCount = 3;
	}
	if (abilityName == "Vanish") {
		tickCount = 4;
	}
	if (abilityName == "Grasping Hands") {
		tickCount = 4;
	}
	if (abilityName == "Searing Flesh") {
		tickCount = 8;
	}
	if (abilityName == 'Death Gaze'){
		tickCount = 25;
	}
	if (abilityName == "Pillar Of Agony") {
		tickCount = 8;
	}
	if (abilityName == "Stellar Burst") {
		tickCount = 2;
	}
	if (abilityName == "Solar Blessing") {
		tickCount = 6;
	}
	
	if (abilityName == "Whirlwind") {
		tickCount = 6;
	}



	for (var tick = tickCount; tick > 0; ) {
		tick = tick - 1;
		var abilityDamage = abilitySearch(abilityName, abilityRank);
		var abilityScaling = abilityDamage["Scaling"];
		var powerValue = 0;

		if (abilityDamage["ScalingType"] == "MagicalPower") {
			powerValue = statSheet["Intelligence"];
		} else if (abilityDamage["ScalingType"] == "PhysicalPower") {
			powerValue = statSheet["Strength"];
		}
		var baseDamage = abilityDamage["Base Damage"];
		if (statSheet["Type"] == "Magical") {
			var targetProtection = targetStatSheet["Magical Protection"];
			var flatPenetration = statSheet["Flat Penetration"];
			var percentPenetration = statSheet["% Penetration"];
		} else {
			var targetProtection = targetStatSheet["Physical Protection"];
			var flatPenetration = statSheet["Flat Penetration"];
			var percentPenetration = statSheet["% Penetration"];
		}
		if (godBuild.includes("Totem of Death")) {
			totemStacks += 1;
			if (totemStacks < 5) {
				statSheet["% Penetration"] += 7.5;
			}
		}
		percentPenetration = percentPenetration / 100;

		
		if (abilityName == 'Shifter Of Seasons (Summer)'){
			
			if (statSheet['Strength'] < statSheet['Intelligence']){
				targetProtection = targetStatSheet['Magical Protection']
			}
			else{
				targetProtection = targetStatSheet['Physical Protection']
			}
		}
		var actualProtection = targetProtection * (1 - percentPenetration) - flatPenetration;

		if (actualProtection < 0) {
			actualProtection = 0;
		}

		if (abilityName == "Death Scythe") {
			baseDamage += targetStatSheet["Health"] * 0.1;
		}

		if (abilityName.includes('Shifter Of Seasons')!= true){
			if (godBuild.includes('Bracer Of The Abyss')){
			if(bracerStacks > 4){
				bracerStacks+=1
			}
		}
		}
		

		if (abilityName == "Death Gaze") {
			if (tick > 23) {
				baseDamage = 110 + (30 * abilityRank)
				abilityScaling = 1
			}
			else{
				baseDamage = 22 + (5 * abilityRank)
				abilityScaling = .22
			}
		}
		var scalingDamage = abilityScaling * powerValue;

		if (abilityName == 'Dark Omen'){
			for (var ability of abilityRotation){
				if (ability == 'Dark Omen'){
					if (abilityRotation.indexOf('Dark Omen') == (abilityRotation.indexOf('Deadly Aspects') - 1)){
						baseDamage *=2
						scalingDamage *=2
						morriganMark = false;
						break;
					}
				}
			}
		}
		
		if (abilityName == 'Shifter Of Seasons'){
			baseDamage = 0;
			scalingDamage = 0;
		}

		if (abilityName == 'Shifter Of Seasons (Summer)'){
			baseDamage = 5 * abilityRank;
			if (statSheet['Strength'] < statSheet['Intelligence']){
				scalingDamage = (((abilityRank) * .03) + .07) * statSheet['Intelligence']
			}
			else{
				scalingDamage = (((abilityRank) * .03) + .07) * statSheet['Strength']
			}
		}

		if (abilityName == "Spell Eater") {
			baseDamage *= 2.2;
			scalingDamage *= 2.2;
		}
		if (abilityName == "Sickening Strike") {
			baseDamage += targetStatSheet['Health'] * (0.045 + (abilityRank * .005));
		}

		if (abilityName == "Supernova") {
			if (tick > 1) {
				baseDamage *= 0.3;
				scalingDamage *= 3;
			}
		}
		

		if (abilityName == "Dazzling Offensive") {
			if (tick == 1) {
				baseDamage *= 1.2;
				scalingDamage *= 1.2;
			}
			if (tick == 0) {
				baseDamage *= 1.4;
				scalingDamage *= 1.4;
			}
		}


		if (abilityName == "World Weaver") {
			scalingDamage = statSheet["Strength"] + statSheet["Intelligence"];
		}

		if (abilityName == "Heavenly Reflection") {
			scalingDamage = (statSheet["Strength"] * .65) + (statSheet["Intelligence"] *.60);
		}

		if (abilityName == "Uproarious Rocket") {
			scalingDamage = (statSheet["Strength"] * .85) + (statSheet["Intelligence"] * .85);
		}
		if (abilityName == "The Wild Hunt") {
			scalingDamage = (statSheet["Strength"] * .65) + (statSheet["Intelligence"]);
		}
		if (abilityName == "Fool's Gold") {
			scalingDamage = ((statSheet["Strength"] * .75) + (statSheet["Intelligence"] * .5)) * 1.3;
			baseDamage *= 1.3
		}
		if (abilityName == "The Wild Hunt") {
			scalingDamage = (statSheet["Strength"] * .65) + (statSheet["Intelligence"]);
		}
		if (abilityName == "Alluring Spirits") {
			scalingDamage = (statSheet["Strength"] * .65) + (statSheet["Intelligence"] *.4);
		}



		if (abilityName == "Dazzling Offensive") {
			scalingDamage = (statSheet["Strength"] * .45) + (statSheet["Intelligence"] *.35);
		}
		if (abilityName == "Spirit Arrow") {
			scalingDamage = (statSheet["Strength"] *.9) + (statSheet["Intelligence"] * 0.5);
		}
		if (abilityName == "Bouncing Bubble (Moonstrike)"){
			scalingDamage *= 1.5
			baseDamage *= 1.5	
		}
		if (abilityName == 'Life of the Party'){
			baseDamage += targetStatSheet['Health'] * .1
			baseDamage += (targetStatSheet['Health'] * (((statSheet['Magical Protection'] + statSheet['Physical Protection']) * .05)/100))
		}
		if (abilityName == "Moonstrike (Bouncing Bubble)"){
			scalingDamage = .4 * statSheet['Intelligence']
			baseDamage =  	25 + (abilityRank * 40)
		}
		if (abilityName == "Vivid Gaze"){
			scalingDamage *= 1.25
			baseDamage *= 1.25
		}
		if (abilityName == "Glacial Strike") {
			scalingDamage = statSheet["Strength"] * 0.55 + statSheet["Intelligence"] * 0.7;
		}
		if (abilityName == "Thunder Strike") {
			scalingDamage = statSheet["Strength"] * 0.8 + statSheet["Intelligence"] * 0.6;
		}
		if (abilityName == "Bramble Blast") {
			scalingDamage = statSheet["Strength"] * 0.55 + statSheet["Intelligence"] * (0.8 + (0.07 + 0.01 * abilityRank));
		}
		if (abilityName == "Storm Call") {
			scalingDamage = statSheet["Strength"] * 1.1 + statSheet["Intelligence"];
		}
		if (abilityName == "The Wild Hunt") {
			scalingDamage = statSheet["Intelligence"];
		}
		if (abilityName == "Raven Shout") {
			scalingDamage = statSheet["Strength"] * 0.5 + statSheet["Intelligence"] * 0.55;
		}
		if (abilityName == "Shield Bash") {
			scalingDamage += statSheet["Physical Protection"] * 0.3 + statSheet["Magical Protection"] * 0.3;
		}
		if (abilityName == "Shackles") {
			scalingDamage = statSheet["Strength"] * 0.9 + statSheet["Intelligence"] * 1.2;
		}
		if (abilityName == "Searing Flesh") {
			if (abilityRank < 3) {
				scalingDamage = targetStatSheet["Health"] * 0.01 + statSheet["Intelligence"] * 0.07;
			} else if (abilityRank < 5) {
				scalingDamage = targetStatSheet["Health"] * 0.02 + statSheet["Intelligence"] * 0.07;
			} else {
				scalingDamage = targetStatSheet["Health"] * 0.03 + statSheet["Intelligence"] * 0.07;
			}
		}

		if (abilityName == "Belly Flop") {
			scalingDamage = statSheet["Strength"] * 0.85 + (statSheet["Physical Protection"] + statSheet["Magical Protection"]) * 0.6;
		}
		if (abilityName == "Chug") {
			scalingDamage = (statSheet["Physical Protection"] + statSheet["Magical Protection"]) * (0.55 + 0.05 * abilityRank);
		}
		if (abilityName == "Shards Of Ice") {
			scalingDamage = (statSheet["Physical Protection"] + statSheet["Magical Protection"]) * 0.3 + statSheet["Intelligence"] * 1.6;
		}

		if (abilityName == "Pursue The Weak") {
			scalingDamage = statSheet["Intelligence"] * 1.35 + (statSheet["Strength"] * 1.6);
		}

		var preMitigated = baseDamage + scalingDamage;

		if (abilityName == "Detonate Charge") {
			console.log(preMitigated);
			preMitigated *= 1 + 0.7 * (lightningCharges - 1);
			console.log(preMitigated);
		}
		if (abilityName == "Brutalize") {
			if (statSheet["Critical Strike Chance"] > 0) {
				var critDamage = 0;
				var damageMultiplier = 1;
				var roll = getRandomInt(100);
				if (roll <= statSheet["Critical Strike Chance"]) {
					if (godBuild.includes("Deathbringer")) {
						damageMultiplier = 1.9;
					} else if (godBuild.includes("Devoted Deathbringer")) {
						damageMultiplier = 1.9;
					} else if (godBuild.includes("Malicious Deathbringer")) {
						damageMultiplier = 1.9;
					} else {
						damageMultiplier = 1.65;
					}

					critDamage += preMitigated * damageMultiplier;
				} else {
					critDamage += preMitigated;
				}
				preMitigated = critDamage;
			}
		}

		var damageOutput = (100 * preMitigated) / (actualProtection + 100);

		if (abilityName == 'Searing Pain'){
			damageOutput += Math.round(targetStatSheet['Health'] * .05)
		}
		var damageMitigated = preMitigated - damageOutput;

		damageOutput = Math.round(damageOutput);
		damageMitigated = Math.round(damageMitigated);

		output["Damage"] += damageOutput;
		output["Mitigated"] += damageMitigated;
	}
	targetStatSheet["Current Health"] = targetStatSheet["Current Health"] - output["Damage"];

	return output;
}
function calculatePhysicalProcDamage(procItem) {
	var damageAdded = addDamageProc(procItem);
	var targetProtection = targetStatSheet["Physical Protection"];
	var flatPenetration = statSheet["Flat Penetration"];
	var percentPenetration = statSheet["% Penetration"] / 100;

	var actualProtection = targetProtection * (1 - percentPenetration) - flatPenetration;

	if (actualProtection < 0) {
		actualProtection = 0;
	}
	var preMitigated = damageAdded;
	var damageOutput = (100 * damageAdded) / (actualProtection + 100);
	var damageMitigated = preMitigated - damageOutput;

	damageOutput = Math.round(damageOutput);
	damageMitigated = Math.round(damageMitigated);
	targetStatSheet["Current Health"] -= damageOutput;

	output["Damage"] = damageOutput;
	output["Mitigated"] = damageMitigated;
	return output;
}
function calculateMagicalProcDamage(procItem) {
	var damageAdded = addDamageProc(procItem);
	var targetProtection = targetStatSheet["Magical Protection"];
	var flatPenetration = statSheet["Flat Penetration"];
	var percentPenetration = statSheet["% Penetration"] / 100;

	var actualProtection = targetProtection * (1 - percentPenetration) - flatPenetration;
	if (procItem == "Warrior's Axe") {
		actualProtection = 0;
	}
	if (procItem == "Sundering Axe") {
		actualProtection = 0;
	}
	if (procItem == "Bumba's Hammer") {
		actualProtection = 0;
	}

	var preMitigated = damageAdded;
	if (actualProtection < 0) {
		actualProtection = 0;
	}

	var damageOutput = (100 * damageAdded) / (actualProtection + 100);

	var damageMitigated = preMitigated - damageOutput;
	damageOutput = Math.round(damageOutput);

	damageMitigated = Math.round(damageMitigated);
	targetStatSheet["Current Health"] -= damageOutput;

	output["Damage"] = damageOutput;
	output["Mitigated"] = damageMitigated;
	return output;
}
function calculateAutoDamage() {
	var godStats = statSheet;
	var basicDamage = getBasicDamage();
	if (godStats["Type"] == "Magical") {
		var targetProtection = targetStatSheet["Magical Protection"];
		var flatPenetration = statSheet["Flat Penetration"];
		var percentPenetration = statSheet["% Penetration"] / 100;
	} else {
		var targetProtection = targetStatSheet["Physical Protection"];
		var flatPenetration = statSheet["Flat Penetration"];
		var percentPenetration = statSheet["% Penetration"] / 100;
	}
	var damageMultiplier = 0;

	if (statSheet["Critical Strike Chance"] > 0) {
		var critDamage = 0;
		damageMultiplier = 1;
		var roll = getRandomInt(100);
		if (roll <= statSheet["Critical Strike Chance"]) {
			if (godBuild.includes("Deathbringer")) {
				damageMultiplier = 1.9;
			} else if (godBuild.includes("Devoted Deathbringer")) {
				damageMultiplier = 1.9;
			} else if (godBuild.includes("Malicious Deathbringer")) {
				damageMultiplier = 1.9;
			} else {
				damageMultiplier = 1.65;
			}


			critDamage += basicDamage * damageMultiplier;
		} else {
			critDamage += basicDamage;
		}
		basicDamage = critDamage;
	}
	if (statSheet["Name"] == "Zeus") {
		basicDamage = basicDamage * (1 + 0.2 * lightningCharges);
	}

	var preMitigated = basicDamage;

	if (shiftingSandsActive == true) {
		basicDamage = basicDamage * (1 + shiftingSandsBuff / 100);
		preMitigated = preMitigated * (1 + shiftingSandsBuff / 100);
	}
	if (markActive == true) {
		var markDamageIncrease = 0;
		var m = markMissingHealthPercent;

		for (var i = 0; i < 10; i++) {
			if (m > 9) {
				markDamageIncrease += 1 + 1 * markRank;

				m -= 10;
			}
		}
		markDamageIncrease = 1 + markDamageIncrease / 100;

		if (markDamageIncrease != 0) {
			basicDamage = basicDamage * markDamageIncrease;
			preMitigated = preMitigated * markDamageIncrease;
		}
	}

	if (hydrasProcced == true) {
		basicDamage = basicDamage * 1.3;
		preMitigated = preMitigated * 1.3;
		hydrasProcced = false;
	}

	var actualProtection = targetProtection * (1 - percentPenetration) - flatPenetration;
	if (actualProtection < 0) {
		actualProtection = 0;
	}
	var damageOutput = (100 * basicDamage) / (actualProtection + 100);

	var damageMitigated = preMitigated - damageOutput;
	damageOutput = Math.round(damageOutput);
	damageMitigated = Math.round(damageMitigated);
	targetStatSheet["Current Health"] -= damageOutput;
	totalDamage["Damage"] += damageOutput;
	totalDamage["Mitigated"] += damageMitigated;
	return [damageOutput + " (-" + damageMitigated + ")"];
}
