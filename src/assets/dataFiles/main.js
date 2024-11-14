//Variables

var targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix];
var statSheet = {
	Name: "N/A",
	"Magical Power": 0,
	"Magical Penetration": 0,
	Mana: 0,
	MP5: 0,
	"% Magical Penetration": 0,
	"Magical Lifesteal": 0,
	"Physical Power": 0,
	"Physical Penetration": 0,
	"% Physical Penetration": 0,
	"Physical Lifesteal": 0,
	"Critical Strike Chance": 0,
	"% Physical Protection Shred": 0,
	"Magical Protection": 0,
	"Physical Protection": 0,
	Health: 0,
	"Basic Damage": 0,
	"% Magical Protection Shred": 0,
	"Attack Speed": 0,
	"Basic Attack Damage": 0,
};

var morriganMark = false;
var tempDamageOutput = 0;
var tempTick = 0;
var unburdenActive = false;
var chronosPower = false;
var targetStatSheet = {
	Name: "N/A",
	"Magical Power": 0,
	"Magical Penetration": 0,
	Mana: 0,
	MP5: 0,
	"% Magical Penetration": 0,
	"Magical Lifesteal": 0,
	"Physical Power": 0,
	"Physical Penetration": 0,
	"% Physical Penetration": 0,
	"Physical Lifesteal": 0,
	"Critical Strike Chance": 0,
	"% Physical Protection Shred": 0,
	"Magical Protection": 0,
	"Physical Protection": 0,
	Health: 0,
	"Basic Damage": 0,
	"% Magical Protection Shred": 0,
	"Attack Speed": 0,
	"Basic Attack Damage": 0,
};

var debuffList = [];
var chernoPassiveDamage = {Damage: 0, Mitigated:0};
var cyclopeanCD = 0;
var bumbasProcced = false;
var hydrasProcced = false;
var chernoPassiveStacks = 0;
var ravanaUlt = false;
var markActive = true;
var mamanMarkProcs = 0;
var piercingColdDebuff = false;
var tyrStance = "assault";
var mamanMark = true;
var markMissingHealthPercent = 0;
var markRank = 1;
var ferociousStacks = 0;
var procItems = document.getElementsByClassName("itemProcs");
var surtrPassive = 0;
var lightningCharges = 0;
var statLean = document.getElementById("statContainer");
var listBox = document.getElementById("listBox");
var currentHealthPercent = 0;
var missingHealthPercent = 0;
var shiftingSandsActive = false;
var shiftingSandsBuff = 8;
var itemProts = 0;
var proccOne = "";
var proccTwo = "";
var procCounts = [0, 0, 0, 0, 0, 0];
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
var procList = [proccOne, proccTwo, proccThree, proccFour, proccFive, proccSix];
var godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];
var totalDamage = { Damage: 0, Mitigated: 0 };
var abilityRotation = [];
var abilityCounter = 1;
var output = { Damage: 0, Mitigated: 0 };
var myrddinTimer = 0;
var myrddinCountdown = 0;
var dragonFormActive = false;
var godLevel = 20;
var targetLevel = 20;
var counter = 0;
var loadoutCounter = 0;
var abilityLoadoutForm = document.getElementsByClassName("abilityLoadoutForm");
var abilityLoadout = document.getElementsByClassName("abilityLoadout");
var abilityOne = document.getElementById("abilityOne");
var abilityTwo = document.getElementById("abilityTwo");
var abilityThree = document.getElementById("abilityThree");
var abilityFour = document.getElementById("abilityFour");
var procResults = document.getElementsByClassName("procResults");
var results = document.getElementsByClassName("results");
var setMarks = 0;
var setClones = 0;
var smallScreen = false;
var overlay = document.getElementsByClassName("overlay");
var display = 1;
var buffList = [];
var mamanPassiveStacks = 0;
var poisonActive = true;
var godLevelSlider = document.getElementById("godLevelSlider");
var godLevelDisplay = document.getElementById("godLevelDisplay");
var targetLevelSlider = document.getElementById("targetLevelSlider");
var convergenceActive = false;
var itemNames = [];
var godNames = [];
var targetLevelDisplay = document.getElementById("targetLevelDisplay");
var mamanPassiveDamage = { "Damage": 0,"Mitigated":0 };

//Imports

// import { godData } from "/SMITE-Damage-Calculator/static/js/Data.js";
// import { itemData } from "/SMITE-Damage-Calculator/static/js/Data.js";



var x = window.matchMedia("(max-width: 700px)");
function myFunction(x) {
	if (x.matches) {
		// If media query matches
		smallScreen = true;
	} else {
		smallScreen = false;
	}
}

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

for (var godss of godData) {
	godNames.push(godss["Name"]);
}

function autocomplete(inp, arr) {
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
			if (arr[i].substr(0).toUpperCase().includes(val.toUpperCase())) {
				b = document.createElement("DIV");
				b.innerHTML = arr[i];
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				items[arr[i]].style.display = "inline";
				b.addEventListener("click", function (e) {
					inp.value = this.getElementsByTagName("input")[0].value;
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
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
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
	/*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
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
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list2");
		a.setAttribute("class", "autocomplete-items2");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/

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

				//b.innerHTML = "<strong>" + arr[i].substr(0,val.length) + "</strong>";
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
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = x.length - 1;
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active2");
	}
	function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active2");
		}
	}
	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
    except the one passed as an argument:*/
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
			if (items["ActiveFlag"] == "y") {
				if (items["Restriction"] == statSheet["Type"]) itemNames.push(items["Name"]);
			}
			if (items["ActiveFlag"] == "y") {
				if (items["Restriction"] == "None") itemNames.push(items["Name"]);
			}
		}
	} else {
		listBox.style.justifyContent = "right";
		itemNames = [];

		for (var items of itemData) {
			if (items["ActiveFlag"] == "y") {
				if (items["Restriction"] == targetStatSheet["Type"]) itemNames.push(items["Name"]);
			}
			if (items["ActiveFlag"] == "y") {
				if (items["Restriction"] == "None") itemNames.push(items["Name"]);
			}
		}
	}
	if (counter == 0) {
		var itemType = statSheet["Type"];
	} else {
		var itemType = targetStatSheet["Type"];
	}

	var items = document.getElementsByClassName("item");
	document.getElementById("myInput").value = "";
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		if (item.id == "Remove Item") {
			item.style.display = "inline";
		}
		if (item.id != "Remove Item") {
			var itemName = items[i].id;
			var itemRestriction = itemSearch(itemName);
			itemRestriction = itemRestriction["Restriction"];
			if (itemRestriction != itemType) {
				item.style.display = "None";
			}
			if (itemRestriction == "None") {
				item.style.display = "inline";
			}
			if (itemRestriction == itemType) {
				item.style.display = "inline";
			}
		}
	}

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
	var listBox = document.getElementById("listBox");
	if (selectionName == "god") {
		counter = 0;
		listBox.style.justifyContent = "left";
		if (smallScreen == true) {
			statList.style.top = 70 + "vh";
			for (var i of overlay) {
				i.style.top = 25 + "%";
			}
		}
	} else {
		counter = 1;
		listBox.style.justifyContent = "right";
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
			getBuffToolTip(buffNumber -1, buff.name)
		}
		if (buffNumber == 2) {
			document.getElementById("buffTwoForm").value = buff.name;
			document.getElementById("buffTwo").src = buff.src;
			getBuffToolTip(buffNumber -1, buff.name)
		}
		if (buffNumber == 3) {
			document.getElementById("buffThreeForm").value = buff.name;
			document.getElementById("buffThree").src = buff.src;
			getBuffToolTip(buffNumber -1, buff.name)
		}
		if (buffNumber == 4) {
			document.getElementById("buffFourForm").value = buff.name;
			document.getElementById("buffFour").src = buff.src;
			getBuffToolTip(buffNumber -1, buff.name)
		}
		if (buffNumber == 5) {
			document.getElementById("buffFiveForm").value = buff.name;
			document.getElementById("buffFive").src = buff.src;
			getBuffToolTip(buffNumber -1, buff.name)
		}
		if (buffNumber == 6) {
			document.getElementById("buffSixForm").value = buff.name;
			document.getElementById("buffSix").src = buff.src;
			getBuffToolTip(buffNumber -1, buff.name)
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
			"Magical Power": 0,
			"Magical Penetration": 0,
			Mana: 0,
			MP5: 0,
			"% Magical Penetration": 0,
			"Magical Lifesteal": 0,
			"Physical Power": 0,
			"Physical Penetration": 0,
			"% Physical Penetration": 0,
			"Physical Lifesteal": 0,
			"Critical Strike Chance": 0,
			"% Physical Protection Shred": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			Health: 0,
			"Basic Damage": 0,
			"% Magical Protection Shred": 0,
			"Attack Speed": 0,
			"Basic Attack Damage": 0,
			"Basic Damage": 0,
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
		//God Build
		var itemOne = document.getElementById("itemOneForm").value;
		var itemTwo = document.getElementById("itemTwoForm").value;
		var itemThree = document.getElementById("itemThreeForm").value;
		var itemFour = document.getElementById("itemFourForm").value;
		var itemFive = document.getElementById("itemFiveForm").value;
		var itemSix = document.getElementById("itemSixForm").value;
		godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];
		//Buffs
		var buffOne = document.getElementById("buffOneForm").value;
		var buffTwo = document.getElementById("buffTwoForm").value;
		var buffThree = document.getElementById("buffThreeForm").value;
		var buffFour = document.getElementById("buffFourForm").value;
		var buffFive = document.getElementById("buffFiveForm").value;
		var buffSix = document.getElementById("buffSixForm").value;

		buffList = [buffOne, buffTwo, buffThree, buffFour, buffFive, buffSix];

		for (var item of godBuild) {
			addDamageItem(item);
		}
		for (var buff of buffList) {
			flatBuffs(buff, "god");
		}
		for (var item of godBuild) {
			addItemPassive(item);
		}
		for (var buff of buffList) {
			percentBuffs(buff, "god");
		}
		if (godBuild.includes("Bumba's Spear")) {
			statSheet["Magical Power"] = Math.round(statSheet["Magical Power"] * 1.1);
			statSheet["Physical Power"] = Math.round(statSheet["Physical Power"] * 1.1);
		}

		addGodPassive(statSheet["Name"]);
		if (statSheet["Type"] == "Magical") {
			statSheet["Basic Attack Damage"] =
				statSheet["Basic Damage"]["Scaling"] * statSheet["Magical Power"] +
				statSheet["Basic Damage"]["Base Damage"] +
				statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
		} else {
			statSheet["Basic Attack Damage"] =
				statSheet["Basic Damage"]["Scaling"] * statSheet["Physical Power"] +
				statSheet["Basic Damage"]["Base Damage"] +
				statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
		}

		for (var item of godBuild) {
			var itemStats = itemSearch(item);

			for (var stat in itemStats) {
				if (stat == "Basic Attack Damage") {
					statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] + parseInt(itemStats["Basic Attack Damage"]);
				}
			}
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
			"Magical Power": 0,
			"Magical Penetration": 0,
			Mana: 0,
			MP5: 0,
			"% Magical Penetration": 0,
			"Magical Lifesteal": 0,
			"Physical Power": 0,
			"Physical Penetration": 0,
			"% Physical Penetration": 0,
			"Physical Lifesteal": 0,
			"Critical Strike Chance": 0,
			"% Physical Protection Shred": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			Health: 0,
			"Basic Damage": 0,
			"% Magical Protection Shred": 0,
			"Attack Speed": 0,
		};
		targetGodSearch(godNameSave, godLevel);
		if (itemNumber == 1) {
			document.getElementById("targetitemOne").src = itemImage;
			getToolTip(itemNumber + 5, selectionName);
			document.getElementById("targetItemOneForm").value = selectionName;
		}
		if (itemNumber == 2) {
			document.getElementById("targetitemTwo").src = itemImage;
			getToolTip(itemNumber + 5, selectionName);

			document.getElementById("targetItemTwoForm").value = selectionName;
		}
		if (itemNumber == 3) {
			document.getElementById("targetitemThree").src = itemImage;
			getToolTip(itemNumber + 5, selectionName);

			document.getElementById("targetItemThreeForm").value = selectionName;
		}
		if (itemNumber == 4) {
			document.getElementById("targetitemFour").src = itemImage;
			getToolTip(itemNumber + 5, selectionName);

			document.getElementById("targetItemFourForm").value = selectionName;
		}
		if (itemNumber == 5) {
			document.getElementById("targetitemFive").src = itemImage;
			getToolTip(itemNumber + 5, selectionName);

			document.getElementById("targetItemFiveForm").value = selectionName;
		}
		if (itemNumber == 6) {
			document.getElementById("targetitemSix").src = itemImage;
			getToolTip(itemNumber + 5, selectionName);

			document.getElementById("targetItemSixForm").value = selectionName;
		}
		//Target Build

		var targetitemOne = document.getElementById("targetItemOneForm").value;
		var targetitemTwo = document.getElementById("targetItemTwoForm").value;
		var targetitemThree = document.getElementById("targetItemThreeForm").value;
		var targetitemFour = document.getElementById("targetItemFourForm").value;
		var targetitemFive = document.getElementById("targetItemFiveForm").value;
		var targetitemSix = document.getElementById("targetItemSixForm").value;
		var targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix];
		//Target Buffs
		var debuffOne = document.getElementById("debuffOneForm").value;
		var debuffTwo = document.getElementById("debuffTwoForm").value;
		var debuffThree = document.getElementById("debuffThreeForm").value;
		var debuffFour = document.getElementById("debuffFourForm").value;
		var debuffFive = document.getElementById("debuffFiveForm").value;
		var debuffSix = document.getElementById("debuffSixForm").value;

		debuffList = [debuffOne, debuffTwo, debuffThree, debuffFour, debuffFive, debuffSix];

		for (var item of targetBuild) {
			addDefenseItem(item);
		}
		for (var debuff of debuffList) {
			flatBuffs(debuff, "target");
		}
		for (var debuff of debuffList) {
			percentBuffs(debuff, "target");
		}
		for (var item of godBuild) {
			addItemPassive(item);
		}
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
		toolTips[toolTipNumber].dataset.name = itemSearch(selectionName)["Name"];
		toolTips[toolTipNumber].dataset.tooltip += "\n" + "Price: " + getFullItemPrice(selectionName);
		var itemStats = itemSearch(selectionName);
		toolTips[toolTipNumber].style.backgroundColor = "#10254a";
		toolTips[toolTipNumber].style.borderStyle = "solid";

		for (var stat in itemStats) {
			if (stat != "Item Icon") {
				if (stat != "Name") {
					if (stat != "Price") {
						if (stat != "Type") {
							if (stat != "Restriction") {
								if (stat != "ActiveFlag") {
									if (stat != "ChildItem") {
										toolTips[toolTipNumber].dataset.tooltip += "\n" + stat;
										toolTips[toolTipNumber].dataset.tooltip += " " + itemStats[stat];
									}
								}
							}
						}
					}
				}
			}
		}
		toolTips[toolTipNumber].dataset.tooltip += "\n" + getItemPassiveTooltip(selectionName);
	}
};
window.getBuffToolTip = function getBuffToolTip(toolTipNumber, selectionName){
	var toolTips = document.getElementsByClassName("godBuff");
	toolTips[toolTipNumber].dataset.name = "";
	toolTips[toolTipNumber].dataset.tooltip = "";
	if (selectionName == "") {
		toolTips[toolTipNumber].style.backgroundColor = "#10254a";
		toolTips[toolTipNumber].style.borderStyle = "none";
	} else {
		toolTips[toolTipNumber].dataset.name = selectionName
		toolTips[toolTipNumber].style.backgroundColor = "#10254a";
		toolTips[toolTipNumber].style.borderStyle = "solid";
		
		toolTips[toolTipNumber].dataset.tooltip += "\n" + getBuffInfo(selectionName);

		
	}

}

window.getBuffInfo = function getBuffInfo(buffName){
	var buffInfo = '';
	if (buffName == 'Red Buff'){
		buffInfo = 'Increases Physical and Magical Power by 10%, plus an additional flat +10 Magical Power and +5 Physical Power.'
	}
	if (buffName == 'Purple Buff'){
		buffInfo = 'Increases attack speed by 10%, Magical Basic Attack Damage by 10, and Physical Basic Attack Damage by 12.'
	}
	if (buffName == 'Fire Giant'){
		buffInfo = "Grants +75 Magical Power, +55 Physical Power and Regen 3% of your health and 2% of your mana every 5 seconds for the buff duration. Your damage versus Towers and Phoenixes is increased by 25%."
	}
	if (buffName == 'Evolved Fire Giant'){
		buffInfo = 'This buff grants +100 magical power, +65 physical power and Regen 3% of your health and 2% of your mana every 5 seconds for the buff duration. Your damage versus Towers and Phoenixes is increased by 40% and you ignore 75% of backdoor protections.'
	}
	if (buffName == 'Yellow Tiki'){
		buffInfo = 'Grants + 5 Magical and Physical Penetration and 5% Magical and Physical Penetration.'
	}
	if (buffName == 'Yellow Tiki T2'){
		buffInfo = 'Grants + 7 Magical and Physical Penetration and 5% Magical and Physical Penetration.'
	}
	if (buffName == 'Yellow Tiki T3'){
		buffInfo = 'Grants + 10 Magical and Physical Penetration and 5% Magical and Physical Penetration.'
	}
	if (buffName == 'Potion of Power'){
		buffInfo = 'This consumable increases your Physical Power by 40, Magical Power by 70 and Penetration by 10 for 5 minutes or until you are killed.'
	}
	if (buffName == 'Elixir of Power'){
		buffInfo = 'This consumable increases your Magical and Physical Power by 25%, increases damage done to Structures by 25%, and grants 10% Penetration for 6 minutes. This effect persists through death.'
	}
	if (buffName == 'Elixir of Defense'){
		buffInfo = 'This consumable provides 50 Magical and Physical Protection, 10% Damage Mitigation, 20% Crowd Control Reduction, and decreases damage taken from Structures by 25% for 6 minutes. This effect persists through death.'
	}
	if (buffName == 'Purple Tiki'){
		buffInfo = 'Grants 10% Attack Speed'
	}
	if (buffName == 'Green Tiki'){
		buffInfo = 'Grants +8% Maximum Health and Mana'
	}
	if (buffName == 'Green Buff'){
		buffInfo = 'Grants +100 maximum Health and Mana, plus an additional 30 for every 50 total protections on the wearer. Also grants +10 HP5 and MP5'
	}
	if (buffName == 'Red Tiki'){
		buffInfo = 'Grants +10% Lifesteal and Physical Ability Lifesteal'
	}





	return buffInfo
}
window.getAbilityToolTip = function getAbilityToolTip(godName) {
	var toolTips = document.getElementsByClassName("godAbilityTooltips");

	toolTips[0].dataset.tooltip = godSearch(godName, 20)["Ability One"]["Summary"];
	toolTips[1].dataset.tooltip = godSearch(godName, 20)["Ability Two"]["Summary"];
	toolTips[2].dataset.tooltip = godSearch(godName, 20)["Ability Three"]["Summary"];
	toolTips[3].dataset.tooltip = godSearch(godName, 20)["Ability Four"]["Summary"];

	toolTips[0].dataset.tooltip += "\n" + godSearch(godName, 20)["Ability One"]["Description"]["itemDescription"]["description"] + "\n";
	toolTips[1].dataset.tooltip += "\n" + godSearch(godName, 20)["Ability Two"]["Description"]["itemDescription"]["description"] + "\n";
	toolTips[2].dataset.tooltip += "\n" + godSearch(godName, 20)["Ability Three"]["Description"]["itemDescription"]["description"] + "\n";
	toolTips[3].dataset.tooltip += "\n" + godSearch(godName, 20)["Ability Four"]["Description"]["itemDescription"]["description"] + "\n";

	var Description = godSearch(godName, 20)["Ability One"];
	Description = Description["Description"]["itemDescription"]["rankitems"];
	for (var j = 0; j < Description.length; j++) {
		var desc = Description[j];

		toolTips[0].dataset.tooltip += "\n" + desc["description"];
		toolTips[0].dataset.tooltip += "\n" + desc["value"] + "\n";
	}
	var Description = godSearch(godName, 20)["Ability Two"];
	Description = Description["Description"]["itemDescription"]["rankitems"];
	for (var j = 0; j < Description.length; j++) {
		var desc = Description[j];

		toolTips[1].dataset.tooltip += "\n" + desc["description"];
		toolTips[1].dataset.tooltip += "\n" + desc["value"] + "\n";
	}
	var Description = godSearch(godName, 20)["Ability Three"];
	Description = Description["Description"]["itemDescription"]["rankitems"];
	for (var j = 0; j < Description.length; j++) {
		var desc = Description[j];

		toolTips[2].dataset.tooltip += "\n" + desc["description"];
		toolTips[2].dataset.tooltip += "\n" + desc["value"] + "\n";
	}
	var Description = godSearch(godName, 20)["Ability Four"];
	Description = Description["Description"]["itemDescription"]["rankitems"];

	for (var j = 0; j < Description.length; j++) {
		var desc = Description[j];

		toolTips[3].dataset.tooltip += "\n" + desc["description"];
		toolTips[3].dataset.tooltip += "\n" + desc["value"] + "\n";
	}
};
window.removeAbility = function removeAbility(ability, abilityNumber) {
	abilityLoadoutForm = document.getElementsByClassName("abilityLoadoutForm");
	loadoutCounter = abilityNumber - 1;
	ability.src = " ";
	ability.innerHTML = "";
	ability.style.display = "none";
	results[abilityNumber - 1].innerHTML = "";
	abilityLoadoutForm[abilityNumber - 1].value = "";
};
window.hideShowStats = function hideShowStats(selection) {
	var statSheet = document.getElementById("statList");
	if (selection == "god") {
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
	if (ability.name == "Wield Axes (Wield Bow)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/thrown-axe.jpg";
		abilityOne.name = "Thrown Axe";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/invigorate.jpg";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/glory-bound.jpg";
		abilityThree.name = "Glory Bound";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/wield-bow.jpg";
		ability.name = "Wield Bow (Wield Axes)";
	} else if (ability.name == "Wield Bow (Wield Axes)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/bladed-arrow.jpg";
		abilityOne.name = "Bladed Arrow (Thrown Axe)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/expose-weakness.jpg";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/hail-of-arrows.jpg";
		abilityThree.name = "Hail of Arrows (Glory Bound)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/wield-axes.jpg";
		ability.name = "Wield Axes (Wield Bow)";
	} else if (ability.name == "Switch Stances (Light)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/restoration.jpg";
		abilityOne.name = "Restoration (Decay)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/cleanse.jpg";
		abilityTwo.name = "Cleanse (Hinder)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/inspire.jpg";
		abilityThree.name = "Inspiration (Repulse)";
		abilityFour.src = "https:///SMITE-Damage-Calculator/static.wikia.nocookie.net/smite_gamepedia/images/d/df/Icons_Hel_A04_S2.png";
		ability.name = "Switch Stances (Dark)";
	} else if (ability.name == "Switch Stances (Dark)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/decay.jpg";
		abilityOne.name = "Decay (Restoration)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/hinder.jpg";
		abilityTwo.name = "Hinder (Cleanse)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/repulse.jpg";
		abilityThree.name = "Repulse (Inspiration)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/switch-stances.jpg";
		ability.name = "Switch Stances (Light)";
	} else if (ability.name == "Shapeshift (Bear)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/maul-prey.jpg";
		abilityOne.name = "Maul Prey (Energy Surge)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/ferocious-roar.jpg";
		abilityTwo.name = "Ferocious Roar (Entangling Vines)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/heavy-charge.jpg";
		abilityThree.name = "Heavy Charge (Life Tap)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/shapeshift.jpg";
		ability.name = "Shapeshift (Druid)";
	} else if (ability.name == "Shapeshift (Druid)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/energy-surge.jpg";
		abilityOne.name = "Energy Surge (Maul Prey)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/entangling-vines.jpg";
		abilityTwo.name = "Entangling Vines (Ferocious Roar)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/life-tap.jpg";
		abilityThree.name = "Life Tap (Heavy Charge)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/shapeshift.jpg";
		ability.name = "Shapeshift (Bear)";
	} else if (ability.name == "Mount up") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/shining-gallop.jpg";
		abilityOne.name = "Shining Gallop";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/crashing-dive.jpg";
		abilityTwo.name = "Crashing Dive";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/quick-turn.jpg";
		abilityThree.name = "Quick Turn";
	} else if (ability.name == "The Grand Joust") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/shining-gallop.jpg";
		abilityOne.name = "Shining Gallop";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/crashing-dive.jpg";
		abilityTwo.name = "Crashing Dive";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/quick-turn.jpg";
		abilityThree.name = "Quick Turn";
	} else if (ability.name == "Shining Gallop") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/piercing-thrust.jpg";
		abilityOne.name = "Piercing Thrust";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/skilled-strikes.jpg";
		abilityTwo.name = "Skilled Strikes";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/mount-up.jpg";
		abilityThree.name = "Mount up";
	} else if (ability.name == "Crashing Dive") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/piercing-thrust.jpg";
		abilityOne.name = "Piercing Thrust";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/skilled-strikes.jpg";
		abilityTwo.name = "Skilled Strikes";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/mount-up.jpg";
		abilityThree.name = "Mount up";
	} else if (ability.name == "Grounding Dive") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/consume.jpg";
		abilityOne.name = "Consume";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/outburst.jpg";
		abilityTwo.name = "Outburst";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/rising-flight.jpg";
		abilityThree.name = "Rising Flight";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/tempest-of-undoing.jpg";
		abilityFour.name = "Tempest of Undoing";
	} else if (ability.name == "Rising Flight") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/primordial-onslaught.jpg";
		abilityOne.name = "Primordial Onslaught";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/ruination.jpg";
		abilityTwo.name = "Ruination";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/grounding-dive.jpg";
		abilityThree.name = "Grounding Dive";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/children-of-creation.jpg";
		abilityFour.name = "Children of Creation";
	} else if (ability.name == "Children of Creation") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/summon-serpents.jpg";
		abilityOne.name = "Summon Serpents";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/summon-beast.jpg";
		abilityTwo.name = "Summon Beast";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/summon-storm.jpg";
		abilityThree.name = "Summon Storm";
	} else if (ability.name == "Summon Storm") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/primordial-onslaught.jpg";
		abilityOne.name = "Primordial Onslaught";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/ruination.jpg";
		abilityTwo.name = "Ruination";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/grounding-dive.jpg";
		abilityThree.name = "Grounding Dive";
	} else if (ability.name == "Summon Beast") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/primordial-onslaught.jpg";
		abilityOne.name = "Primordial Onslaught";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/ruination.jpg";
		abilityTwo.name = "Ruination";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/grounding-dive.jpg";
		abilityThree.name = "Grounding Dive";
	} else if (ability.name == "Summon Serpents") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/primordial-onslaught.jpg";
		abilityOne.name = "Primordial Onslaught";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/ruination.jpg";
		abilityTwo.name = "Ruination";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/grounding-dive.jpg";
		abilityThree.name = "Grounding Dive";
	} else if (ability.name == "Draconic Corruption") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		dragonFormActive = true;
		abilityOne.src = "/SMITE-Damage-Calculator/static/buffIcons/fafnirDragon1.png";
		abilityOne.name = "Cursed Strength (Dragon)";
		abilityTwo.src = "/SMITE-Damage-Calculator/static/buffIcons/fafnirDragon2.jpg";
		abilityThree.src = "/SMITE-Damage-Calculator/static/buffIcons/fafnirDragon3.jpg ";
		abilityThree.name = "Underhanded Tactics (Dragon)";
		abilityFour.name = "Draconic Corruption (Dragon)";
	} else if (ability.name == "Draconic Corruption (Dragon)") {
		dragonFormActive = false;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/cursed-strength.jpg";
		abilityOne.name = "Cursed Strength";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/coerce.jpg";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/underhanded-tactics.jpg";
		abilityThree.name = "Underhanded Tactics";
		abilityFour.name = "Draconic Corruption";
	} else if (ability.name == "Elemental Mastery") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/elemental-mastery.jpg";
		abilityOne.name = "Elemental Mastery (Void)";
		abilityTwo.src = "/SMITE-Damage-Calculator/static/buffIcons/merlinFireUlt.jpg";
		abilityTwo.name = "Elemental Mastery (Fire)";
		abilityThree.src = "/SMITE-Damage-Calculator/static/buffIcons/merlinIceUlt.jpg";
		abilityThree.name = "Elemental Mastery (Ice)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/elemental-mastery.jpg";
		abilityFour.name = "Elemental Mastery";
	} else if (ability.name == "Elemental Mastery (Fire)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/radiate.jpg";
		abilityOne.name = "Radiate";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/dragonfire.jpg";
		abilityTwo.name = "Dragonfire";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/flicker.jpg";
		abilityThree.name = "Flicker";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/elemental-mastery.jpg";
		abilityFour.name = "Elemental Mastery";
	} else if (ability.name == "Elemental Mastery (Ice)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/frostbolt.jpg";
		abilityOne.name = "Frostbolt";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/blizzard.jpg";
		abilityTwo.name = "Blizzard";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/flicker.jpg";
		abilityThree.name = "Flicker";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/elemental-mastery.jpg";
		abilityFour.name = "Elemental Mastery";
	} else if (ability.name == "Elemental Mastery (Void)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/eclipse.jpg";
		abilityOne.name = "Eclipse";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/vortex.jpg";
		abilityTwo.name = "Vortex";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/flicker.jpg";
		abilityThree.name = "Flicker";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/elemental-mastery.jpg";
		abilityFour.name = "Elemental Mastery";
	} else if (ability.name == "Descend into Madness") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/sever.jpg";
		abilityOne.name = "Sever";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/devastate.jpg";
		abilityTwo.name = "Devastate";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/transfuse.jpg";
		abilityThree.name = "Transfuse";
		abilityFour.name = "Descend into Madness (Cancel)";
	} else if (ability.name == "Descend into Madness (Cancel)") {
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/sanity-break.jpg";
		abilityOne.name = "Sanity Break";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/the-mire.jpg";
		abilityTwo.name = "The Mire";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/rushing-terror.jpg";
		abilityThree.name = "Rushing Terror";
		abilityFour.name = "Descend into Madness";
	} else if (ability.name == "Overhead Slash (Hamstring)") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/hamstring.jpg";
		abilityOne.name = "Hamstring";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/uppercut.jpg ";
		abilityTwo.name = "Uppercut";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/bladestorm.jpg";
		abilityThree.name = "Bladestorm";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/excaliburs-wrath.jpg";
		abilityFour.name = "Excalibur's Wrath";
	} else if (ability.name == "Battle Stomp (Uppercut)") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/hamstring.jpg";
		abilityOne.name = "Hamstring";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/uppercut.jpg ";
		abilityTwo.name = "Uppercut";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/bladestorm.jpg";
		abilityThree.name = "Bladestorm";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/excaliburs-wrath.jpg";
		abilityFour.name = "Excalibur's Wrath";
	} else if (ability.name == "Twin Cleave (Bladestorm)") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/hamstring.jpg";
		abilityOne.name = "Hamstring";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/uppercut.jpg ";
		abilityTwo.name = "Uppercut";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/bladestorm.jpg";
		abilityThree.name = "Bladestorm";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/excaliburs-wrath.jpg";
		abilityFour.name = "Excalibur's Wrath";
	} else if (ability.name == "Hamstring") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/overhead-slash.jpg";
		abilityOne.name = "Overhead Slash (Hamstring)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/battle-stomp.jpg ";
		abilityTwo.name = "Battle Stomp (Uppercut)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/twin-cleave.jpg";
		abilityThree.name = "Twin Cleave (Bladestorm)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/sundering-strike.jpg";
		abilityFour.name = "Sundering Strike (Excalibur's Wrath)";
	} else if (ability.name == "Uppercut") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/overhead-slash.jpg";
		abilityOne.name = "Overhead Slash (Hamstring)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/battle-stomp.jpg ";
		abilityTwo.name = "Battle Stomp (Uppercut)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/twin-cleave.jpg";
		abilityThree.name = "Twin Cleave (Bladestorm)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/sundering-strike.jpg";
		abilityFour.name = "Sundering Strike (Excalibur's Wrath)";
	} else if (ability.name == "Bladestorm") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/overhead-slash.jpg";
		abilityOne.name = "Overhead Slash (Hamstring)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/battle-stomp.jpg ";
		abilityTwo.name = "Battle Stomp (Uppercut)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/twin-cleave.jpg";
		abilityThree.name = "Twin Cleave (Bladestorm)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/sundering-strike.jpg";
		abilityFour.name = "Sundering Strike (Excalibur's Wrath)";
	} else if (ability.name == "Excalibur's Wrath") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/overhead-slash.jpg";
		abilityOne.name = "Overhead Slash (Hamstring)";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/battle-stomp.jpg ";
		abilityTwo.name = "Battle Stomp (Uppercut)";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/twin-cleave.jpg";
		abilityThree.name = "Twin Cleave (Bladestorm)";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/sundering-strike.jpg";
		abilityFour.name = "Sundering Strike (Excalibur's Wrath)";
	} else if (ability.name == "Sundering Strike (Excalibur's Wrath)") {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/hamstring.jpg";
		abilityOne.name = "Hamstring";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/uppercut.jpg ";
		abilityTwo.name = "Uppercut";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/bladestorm.jpg";
		abilityThree.name = "Bladestorm";
		abilityFour.src = "https://webcdn.hirezstudios.com/smite/god-abilities/excaliburs-wrath.jpg";
		abilityFour.name = "Excalibur's Wrath";
	} else if (ability.name == "Change Stance") {
		var abilityRank = document.getElementById("abilityThreeSlider").value;
		abilityOne.src = "/SMITE-Damage-Calculator/static/buffIcons/tyrDefense1.jpg";
		abilityOne.name = "Fearless (Defense)";
		abilityTwo.src = "/SMITE-Damage-Calculator/static/buffIcons/tyrDefense2.jpg";
		abilityThree.src = "/SMITE-Damage-Calculator/static/buffIcons/tyrDefense3.jpg";
		abilityThree.name = "Change Stance (Assault)";
		abilityFour.name = "Lawbringer (Defense)";
		tyrStance = "defense";
	} else if (ability.name == "Change Stance (Assault)") {
		var abilityRank = document.getElementById("abilityThreeSlider").value;
		abilityOne.src = "https://webcdn.hirezstudios.com/smite/god-abilities/fearless.jpg";
		abilityTwo.src = "https://webcdn.hirezstudios.com/smite/god-abilities/power-cleave.jpg";
		abilityThree.src = "https://webcdn.hirezstudios.com/smite/god-abilities/change-stance.jpg";
		abilityOne.name = "Fearless";
		abilityThree.name = "Change Stance";
		abilityFour.name = "Lawbringer";
		tyrStance = "assault";
	}
	   else if(ability.name == 'Party Trick'){
	       abilityOne.src ='/SMITE-Damage-Calculator/static/buffIcons/mamanCancel.png'
	       abilityOne.name = 'Party Trick (Cancel)'
	       abilityTwo.src = '/SMITE-Damage-Calculator/static/buffIcons/mamanStomp.png'
	       abilityTwo.name = 'Party Trick (Stomp)'
		   abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
	       abilityThree.name = 'Party Trick (1 Tick)'
	   }
	   else if(ability.name == 'Madame Fangs'){
		abilityOne.src ='/SMITE-Damage-Calculator/static/buffIcons/maman2Full.png'
		abilityOne.name = 'Madame Fangs (Initial)'
		abilityTwo.src = '/SMITE-Damage-Calculator/static/buffIcons/DRedmaman2.png'
		abilityTwo.name = 'Madame Fangs (Subsequent)'
	}
	else if(ability.name == 'Madame Fangs (Initial)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
		
	}
	else if(ability.name == 'Madame Fangs (Subsequent)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
	}
	   else if(ability.name == 'Spirit Seize'){
		abilityOne.src ='/SMITE-Damage-Calculator/static/buffIcons/maman3Cancel.png'
		abilityOne.name = 'Spirit Seize (Cancel)'
		abilityTwo.src = '/SMITE-Damage-Calculator/static/buffIcons/maman3Eject.png'
		abilityTwo.name = 'Spirit Seize (Eject)'
		abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg'
		abilityThree.name = 'Spirit Seize (1 Tick)'
	}
	else if(ability.name == 'Spirit Seize (Cancel)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
		abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg'
		abilityThree.name = 'Spirit Seize'
	}
	else if(ability.name == 'Spirit Seize (1 Tick)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
		abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg'
		abilityThree.name = 'Spirit Seize'
	}

	else if(ability.name == 'Spirit Seize (Eject)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
		abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg'
		abilityThree.name = 'Spirit Seize'
	}

	   else if(ability.name == 'Party Trick (Stomp)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
		abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg'
		abilityThree.name = 'Spirit Seize'
	}
	else if(ability.name == 'Party Trick (Cancel)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
		abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg'
		abilityThree.name = 'Spirit Seize'
	}
	else if(ability.name == 'Party Trick (1 Tick)'){
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
		abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/party-trick.jpg'
		abilityOne.name = 'Party Trick'
		abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/madame-fangs.jpg'
		abilityTwo.name = 'Madame Fangs'
		abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/spirit-seize.jpg'
		abilityThree.name = 'Spirit Seize'
	}


	//    else if(ability.name == ){
	//        abilityOne.src ='https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityOne.name =
	//        abilityTwo.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityTwo.name =
	//        abilityThree.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityThree.name =
	//        abilityFour.src = 'https://webcdn.hirezstudios.com/smite/god-abilities/ '
	//        abilityFour.name =
	//    }
	else {
		abilityLoadout[loadoutCounter].src = ability.src;
		abilityLoadout[loadoutCounter].style.display = "flex";
		abilityLoadoutForm[loadoutCounter].value = ability.name;
		loadoutCounter++;
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
		getAbilityToolTip(selectionName);
		godName.innerHTML = selectionName;
		godNameForm.value = selectionName;
		console.log(selectionName)
		if (selectionName == "Chronos") {
			
			document.getElementById("godPassive").style.display = "flex";
		} 
		if (selectionName == "Apollo") {
			
			document.getElementById("godPassive").style.display = "flex";
			godPassiveDiv.style.display = "flex";
			godPassiveDisplay.innerHTML = "Audacity Stacks (Out of 10): " + godPassiveSlider.value;
			godPassiveSlider.max = 10;
			godPassiveSlider.oninput = function () {
				godPassiveDisplay.innerHTML = "Audacity Stacks (Out of 10): " + godPassiveSlider.value;
			}
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
			"Magical Power": 0,
			"Magical Penetration": 0,
			Mana: 0,
			MP5: 0,
			"% Magical Penetration": 0,
			"Magical Lifesteal": 0,
			"Physical Power": 0,
			"Physical Penetration": 0,
			"% Physical Penetration": 0,
			"Physical Lifesteal": 0,
			"Critical Strike Chance": 0,
			"% Physical Protection Shred": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			Health: 0,
			"Basic Damage": 0,
			"% Magical Protection Shred": 0,
			"Attack Speed": 0,
			"Basic Attack Damage": 0,
		};
		var godStats = godSearch(selectionName, godLevel);
		updateStatSheet("god");
		var itemType = statSheet["Type"];
		var items = document.getElementsByClassName("item");
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.id != "Remove Item") {
				var itemName = items[i].id;
				var itemStats = itemSearch(itemName);

				var itemRestriction = itemStats["Restriction"];

				if (itemRestriction != itemType) {
					item.style.display = "None";
				}
				if (itemRestriction == "None") {
					item.style.display = "inline";
				}
				if (itemRestriction == itemType) {
					item.style.display = "inline";
				}
			}
		}
		abilityCounter = 1;
		
		if (statSheet["Role"] == "Warrior") {
			basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/meleePhysical.png";
		}
		if (statSheet["Role"] == "Assassin") {
			basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/meleePhysical.png";
		}
		if (statSheet["Role"] == "Mage") {
			basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/rangedMagic.png";
		}
		if (statSheet["Role"] == "Guardian") {
			basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/meleeMagic.png";
		}
		if (statSheet["Role"] == "Hunter") {
			basicAttack.src = "/SMITE-Damage-Calculator/static/buffIcons/rangedPhysical.png";
		}
		for (let i = 0; i < 4; i++) {
			if (abilityCounter == 1) {
				document.getElementById("abilityOne").src = godStats['Ability One']['URL']
				document.getElementById("abilityOne").style.display = "block";
				document.getElementById("abilityOne").name = godStats['Ability One']['Summary']
				abilityCounter++;
			}
			if (abilityCounter == 2) {
				document.getElementById("abilityTwo").src = godStats['Ability Two']['URL']
				document.getElementById("abilityTwo").style.display = "block";
				document.getElementById("abilityTwo").name = godStats['Ability Two']['Summary']
				abilityCounter++;
			}
			if (abilityCounter == 3) {
				document.getElementById("abilityThree").src = godStats['Ability Three']['URL']
				document.getElementById("abilityThree").style.display = "block";
				document.getElementById("abilityThree").name = godStats['Ability Three']['Summary']
				abilityCounter++;
			}
			if (abilityCounter == 4) {
				document.getElementById("abilityFour").src = godStats['Ability Four']['URL']
				document.getElementById("abilityFour").style.display = "block";
				document.getElementById("abilityFour").name = godStats['Ability Four']['Summary']
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
		var itemType = targetStatSheet["Type"];
		var items = document.getElementsByClassName("item");
		var itemType = statSheet["Type"];
		var items = document.getElementsByClassName("item");
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			if (item.id != "Remove Item") {
				var itemName = items[i].id;
				var itemRestriction = itemSearch(itemName)["Restriction"];
				if (itemRestriction != itemType) {
					item.style.display = "None";
				}
				if (itemRestriction == "None") {
					item.style.display = "inline";
				}
				if (itemRestriction == itemType) {
					item.style.display = "inline";
				}
			}
		}
	}
	display = 1;
};
var polyProcced = false;
window.HelloWorld = function HelloWorld() {
	polyProcced = false;
	unburdenActive = false;
	chronosPower = false;
	procDamageList = [
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
		{ Damage: 0, Mitigated: 0 },
	];
	chernoPassiveDamage = {Damage: 0, Mitigated:0};
	cyclopeanCD = 0;
	var stoneCuttingStacks = 0;
	var ichaivalStacks = 0;
	chernoPassiveStacks = 0;
	var hecateStacks = 0;
	morriganMark = false;
	mamanMarkProcs = 0;
	tempDamageOutput = 0;
	tempTick=0;
	missingHealthPercent = 0;
	procCounts = [0, 0, 0, 0, 0, 0];
	surtrPassive = document.getElementById("godPassiveSlider").value;
	surtrPassive = parseInt(surtrPassive);
	ferociousStacks = 0;
	ravanaUlt = false;
	piercingColdDebuff = false;
	markActive = false;
	mamanMark = false;
	lightningCharges = 0;
	poisonActive = false;
	mamanPassiveDamage = { "Damage": 0, "Mitigated": 0 };
	currentHealthPercent = 0;
	shiftingSandsActive = false;
	shiftingSandsBuff = 8;
	mamanPassiveStacks = 0;
	itemProts = 0;
	convergenceActive = false;
	var convergenceCount = 5;
	bumbasProcced = false;
	hydrasProcced = false;
	godLevel = document.getElementById("godLevelSlider").value;
	targetLevel = document.getElementById("targetLevelSlider").value;
	statSheet = {
		"Magical Power": 0,
		"Magical Penetration": 0,
		Mana: 0,
		MP5: 0,
		"% Magical Penetration": 0,
		"Magical Lifesteal": 0,
		"Physical Power": 0,
		"Physical Penetration": 0,
		"% Physical Penetration": 0,
		"Physical Lifesteal": 0,
		"Critical Strike Chance": 0,
		"% Physical Protection Shred": 0,
		"% Magical Protection Shred": 0,
		"Attack Speed": 0,
		"Basic Damage": 0,
		"Basic Attack Damage": 0,
	};
	totalDamage = { Damage: 0, Mitigated: 0 };
	myrddinTimer = 1;
	myrddinCountdown = 0;
	var titansProcced = false;
	var shardProcced = false;
	var myrddinProcced = false;
	var results = document.getElementsByClassName("results");
	proccOne = "";
	proccTwo = "";
	proccThree = "";
	proccFour = "";
	proccFive = "";
	proccSix = "";
	var preBuffPower = 0;
	procList = [proccOne, proccTwo, proccThree, proccFour, proccFive, proccSix];
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

	//God Build
	var itemOne = document.getElementById("itemOneForm").value;
	var itemTwo = document.getElementById("itemTwoForm").value;
	var itemThree = document.getElementById("itemThreeForm").value;
	var itemFour = document.getElementById("itemFourForm").value;
	var itemFive = document.getElementById("itemFiveForm").value;
	var itemSix = document.getElementById("itemSixForm").value;
	godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];

	//Target Build
	var targetitemOne = document.getElementById("targetItemOneForm").value;
	var targetitemTwo = document.getElementById("targetItemTwoForm").value;
	var targetitemThree = document.getElementById("targetItemThreeForm").value;
	var targetitemFour = document.getElementById("targetItemFourForm").value;
	var targetitemFive = document.getElementById("targetItemFiveForm").value;
	var targetitemSix = document.getElementById("targetItemSixForm").value;
	targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix];

	//Ability Rotation
	var abilityOne = document.getElementById("abilityOneForm").value;
	var abilityTwo = document.getElementById("abilityTwoForm").value;
	var abilityThree = document.getElementById("abilityThreeForm").value;
	var abilityFour = document.getElementById("abilityFourForm").value;
	var abilityFive = document.getElementById("abilityFiveForm").value;
	var abilitySix = document.getElementById("abilitySixForm").value;
	var abilitySeven = document.getElementById("abilitySevenForm").value;
	var abilityEight = document.getElementById("abilityEightForm").value;

	var abilityNine = document.getElementById("abilityNineForm").value;
	var abilityTen = document.getElementById("abilityTenForm").value;
	var abilityEleven = document.getElementById("abilityElevenForm").value;
	var abilityTwelve = document.getElementById("abilityTwelveForm").value;
	var abilityThirteen = document.getElementById("abilityThirteenForm").value;
	var abilityFourteen = document.getElementById("abilityFourteenForm").value;
	var abilityFifteen = document.getElementById("abilityFifteenForm").value;
	var abilitySixteen = document.getElementById("abilitySixteenForm").value;

	abilityRotation = [abilityOne, abilityTwo, abilityThree, abilityFour, abilityFive, abilitySix, abilitySeven, abilityEight, abilityNine, abilityTen, abilityEleven,abilityTwelve, abilityThirteen, abilityFourteen, abilityFifteen, abilitySixteen];
	//Buffs

	var buffOne = document.getElementById("buffOneForm").value;
	var buffTwo = document.getElementById("buffTwoForm").value;
	var buffThree = document.getElementById("buffThreeForm").value;
	var buffFour = document.getElementById("buffFourForm").value;
	var buffFive = document.getElementById("buffFiveForm").value;
	var buffSix = document.getElementById("buffSixForm").value;

	buffList = [buffOne, buffTwo, buffThree, buffFour, buffFive, buffSix];

	var debuffOne = document.getElementById("debuffOneForm").value;
	var debuffTwo = document.getElementById("debuffTwoForm").value;
	var debuffThree = document.getElementById("debuffThreeForm").value;
	var debuffFour = document.getElementById("debuffFourForm").value;
	var debuffFive = document.getElementById("debuffFiveForm").value;
	var debuffSix = document.getElementById("debuffSixForm").value;
	 debuffList = [debuffOne, debuffTwo, debuffThree, debuffFour, debuffFive, debuffSix];

	//Add damage items
	for (var i = 0; i < godBuild.length; i++) {
		var item = godBuild[i];
		if (item != "") {
			addDamageItem(item);
		}
	}

	addGodPassive(document.getElementById("godNameForm").value);

	for (var i = 0; i < buffList.length; i++) {
		var buff = buffList[i];
		flatBuffs(buff, "god");
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
	if (statSheet["Type"] == "Magical") {
		statSheet["Basic Attack Damage"] =
			statSheet["Basic Damage"]["Scaling"] * statSheet["Magical Power"] +
			statSheet["Basic Damage"]["Base Damage"] +
			statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
	} else {
		statSheet["Basic Attack Damage"] =
			statSheet["Basic Damage"]["Scaling"] * statSheet["Physical Power"] +
			statSheet["Basic Damage"]["Base Damage"] +
			statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
	}
	for (var item of godBuild) {
		var itemStats = itemSearch(item);
		for (var stat in itemStats) {
			if (stat == "Basic Attack Damage") {
				statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] + parseInt(itemStats["Basic Attack Damage"]);
			}
		}
	}

	//Add defense items
	for (var i = 0; i < targetBuild.length; i++) {
		var item = targetBuild[i];
		if (item != "") {
			addDefenseItem(item);
			addItemPassive(item);
		}
	}
	for (var i = 0; i < godBuild.length; i++) {
		var item = godBuild[i];
		if (item != "") {
			addItemPassive(item);
		}
	}

	targetStatSheet["Current Health"] = targetStatSheet["Health"];

	var abilityLevel = 1;
	
	//Rotation Calculation
	preBuffPower = statSheet['Magical Power']
	for (var j = 0; j < abilityRotation.length; j++) {
		var damageOutput = { Damage: 0, Mitigated: 0 };

		var ability = abilityRotation[j];
		if (ability == "Vicious Barrage"){
			ability = "basicAttack";
		}

		if (ability != "") {
			if (ability != 'Madame Fangs (Subsequent)'){
				for (var item of godBuild) {
					if (item != "") {
						perAutoProcDisplay(item, ability);
						perRotationProcDisplay(item, ability);
						perAbilityProcDisplay(item, ability);
					}
				}
			}
			


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
			if (ability.includes("Party Trick")) {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}
			if (ability.includes("Spirit Seize")) {
				abilityLevel = document.getElementById("abilityThreeSlider").value;
			}
			if (ability.includes("Madame Fangs")) {
				abilityLevel = document.getElementById("abilityTwoSlider").value;
			}
			if (ability == "Frostbolt") {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}
			if (ability == "Blizzard") {
				abilityLevel = document.getElementById("abilityTwoSlider").value;
			}
			if (ability == "Radiate") {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}
			if (ability == "Dragonfire") {
				abilityLevel = document.getElementById("abilityTwoSlider").value;
			}
			if (ability == "Eclipse") {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}
			if (ability == "Vortex") {
				abilityLevel = document.getElementById("abilityTwoSlider").value;
			}
			if (ability == "Sanity Break") {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}
			if (ability == "The Mire") {
				abilityLevel = document.getElementById("abilityTwoSlider").value;
			}
			if (ability == "Rushing Terror") {
				abilityLevel = document.getElementById("abilityThreeSlider").value;
			}
			if (ability == "Excalibur's Wrath") {
				abilityLevel = document.getElementById("abilityFourSlider").value;
			}
			if (ability == "Lawbringer (Defense)") {
				abilityLevel = document.getElementById("abilityFourSlider").value;
			}
			if (ability == "Lawbringer") {
				abilityLevel = document.getElementById("abilityFourSlider").value;
			}
			if (ability == "Fearless (Defense)") {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}
			if (ability == "Fearless") {
				abilityLevel = document.getElementById("abilityOneSlider").value;
			}

			buffAbility(ability, abilityLevel);

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

			if (statSheet['Name'] == "Chernobog"){
				if (ability == "basicAttack"){
					chernoPassiveStacks += 1;
				}
			}

			if (godBuild.includes("Staff of Myrddin")) {
				if (myrddinProcced == false) {
					if (ability == document.getElementById("abilityFour").name) {
						myrddinTimer = 1.15;
						myrddinProcced = true;
					}
					if (ability == "Summon Beast") {
						myrddinTimer = 1.15;
						myrddinProcced = true;
					}
					if (ability == "Summon Storm") {
						myrddinTimer = 1.15;
						myrddinProcced = true;
					}
					if (ability == "Summon Serpents") {
						myrddinTimer = 1.15;
						myrddinProcced = true;
					}
				} else {
					myrddinCountdown += 1;
					myrddinTimer = 1.15 - myrddinCountdown * 0.01875;
				}
			}

			if (ability == "Kingslayer") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var abil = abilityRotation[b];
					if (abil == "basicAttack") {
						setMarks += 1;
					}
					if (abil == "Sandstorm") {
						setMarks += 15;
					}
				}
				while (setMarks > 3) {
					damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
					damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
					setMarks -= 4;
					setClones += 1;
					console.log(setClones)
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} 
			
			
			else if (ability == "Irradiate") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var basic = abilityRotation[b];
					if (basic == "basicAttack") {
						damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} 
			
			else if (ability == "Astral Strike") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var basic = abilityRotation[b];
					if (basic == "basicAttack") {
						damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			}
			else if (ability == "Spot Weakness") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var basic = abilityRotation[b];
					if (basic == "basicAttack") {
						damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} else if (ability == "Sickle Storm") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var basic = abilityRotation[b];
					if (basic == "basicAttack") {
						damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} else if (ability == "Convergence") {
				convergenceActive = true;
				for (var b = 0; b < abilityRotation.length; b++) {
					var basic = abilityRotation[b];
					if (basic == "basicAttack") {
						if (convergenceCount == 0) {
							convergenceActive = false;
						}
						if (convergenceActive == true) {
							convergenceCount = convergenceCount - 1;
							damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
							damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
						}
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} else if (ability == "Coerce") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var damage = abilityRotation[b];
					if (damage != "Coerce") {
						if (damage != ''){
							if (damage == 'basicAttack'){
								
								damageOutput["Damage"] += Math.round(calculateAutoDamage()["Damage"] * (.04 * abilityLevel));
								damageOutput["Mitigated"] += Math.round(calculateAutoDamage()["Mitigated"] * (.04 * abilityLevel));
							}
							else{
								damageOutput["Damage"] += Math.round(calculateDamage(damage, 5)["Damage"] * (.04 * abilityLevel));
								damageOutput["Mitigated"] += Math.round(calculateDamage(damage, 5)["Mitigated"] * (.04 * abilityLevel));
							}
							
							
						}
						
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} else if (ability == "Butcher Blades") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var basic = abilityRotation[b];
					if (basic == "basicAttack") {
						damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} else if (ability == "Pulse") {
				for (var b = 0; b < abilityRotation.length; b++) {
					var basic = abilityRotation[b];
					if (basic == "basicAttack") {
						damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}
				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			} else if (ability == "basicAttack") {
				var autoDamage = calculateAutoDamage()
				
				results[j].innerHTML = autoDamage['Damage'] + " (-" + autoDamage["Mitigated"] + ")";

				if (godBuild.includes("The Executioner")) {
					statSheet["% Physical Protection Shred"] += 7;
					if (statSheet["% Physical Protection Shred"] > 28) {
						statSheet["% Physical Protection Shred"] = 28;
					}
				}
			 	if (godBuild.includes('Stone Cutting Sword')){
					stoneCuttingStacks += 1;
					if (stoneCuttingStacks > 3){
						stoneCuttingStacks = 3;
					}
					else{
						targetStatSheet['Physical Protection'] -= 7;
						statSheet['Physical Protection'] +=7;
					}
				}

				if (godBuild.includes('Ichaival')){
					ichaivalStacks += 1;
					if (ichaivalStacks > 4){
						ichaivalStacks = 4;
					}
					else{
						statSheet['Physical Power'] = statSheet['Physical Power'] + 5;
						
					}
				}

				else if (godBuild.includes('Ring of Hecate')){
					
					if (dragonFormActive == true){
						hecateStacks = 3
					}
					else{
						hecateStacks += 1;
					}
					if (hecateStacks > 3){
						hecateStacks = 3;
					}
					else{
						statSheet['Magical Power'] = preBuffPower
						statSheet['Magical Power'] *= 1 + (.05 * hecateStacks);
					}
				}
				
				if (godBuild.includes("The Ferocious Executioner")) {
					statSheet["% Physical Protection Shred"] += 7;
					if (statSheet["% Physical Protection Shred"] > 28) {
						statSheet["% Physical Protection Shred"] = 28;
					}
					ferociousStacks += 1;
				} else if (godBuild.includes("Demonic Grip")) {
					if (dragonFormActive == true){
						statSheet["% Magical Protection Shred"] += 30;
					}
					else{
						statSheet["% Magical Protection Shred"] += 10;
					}
					
					if (statSheet["% Magical Protection Shred"] > 30) {
						statSheet["% Magical Protection Shred"] = 30;
					}
				}
				
				totalDamage["Damage"] += autoDamage['Damage']
				totalDamage["Mitigated"] += autoDamage['Mitigated']
			} else {
				if (godBuild.includes("Hydra's Lament")) {
					hydrasProcced = true;
				}
				if (godBuild.includes("Bumba's Hammer")) {
					bumbasProcced = true;
				}
				 

				if (ability == "Flurry") {
					for (var tickCount = 0; tickCount < 4; tickCount++) {
						damageOutput["Damage"] += calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] += calculateDamage(ability, abilityLevel)["Mitigated"];
						targetStatSheet["Physical Protection"] -= 7;
					}
				}

				if (godBuild.includes("Titan's Bane")) {
					if (titansProcced == false) {
						statSheet["% Physical Penetration"] += 20;
						damageOutput["Damage"] = calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] = calculateDamage(ability, abilityLevel)["Mitigated"];
						statSheet["% Physical Penetration"] -= 20;
						titansProcced = true;
					} else {
						damageOutput["Damage"] = calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] = calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				} else if (godBuild.includes("Obsidian Shard")) {
					if (shardProcced == false) {
						statSheet["% Magical Penetration"] += 20;
						damageOutput["Damage"] = calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] = calculateDamage(ability, abilityLevel)["Mitigated"];
						statSheet["% Magical Penetration"] -= 20;
						shardProcced = true;
					} else {
						damageOutput["Damage"] = calculateDamage(ability, abilityLevel)["Damage"];
						damageOutput["Mitigated"] = calculateDamage(ability, abilityLevel)["Mitigated"];
					}
				} else {
					damageOutput = calculateDamage(ability, abilityLevel);
				}
				if (damageOutput["Damage"] != 0) {
					results[j].innerHTML = damageOutput["Damage"] + " (-" + damageOutput["Mitigated"] + ")";
				}

				totalDamage["Damage"] += damageOutput["Damage"];
				totalDamage["Mitigated"] += damageOutput["Mitigated"];
			}

			
			
		}
	}

	var current = targetStatSheet["Health"];
	if (current - totalDamage["Damage"] < 0) {
		document.getElementById("currentHealthStat").style.width = 0 + "%";
	} else {
		document.getElementById("currentHealthStat").style.width =
			((targetStatSheet["Health"] - totalDamage["Damage"]) / targetStatSheet["Health"]) * 100 + "%";
	}

	if (mamanPassiveDamage["Damage"] != 0) {
		totalDamage["Damage"] += mamanPassiveDamage["Damage"];
		totalDamage["Mitigated"] += mamanPassiveDamage["Mitigated"];
	}
	if (chernoPassiveDamage["Damage"] != 0) {
		totalDamage["Damage"] += chernoPassiveDamage["Damage"];
		totalDamage["Mitigated"] += chernoPassiveDamage["Mitigated"];
	}
	for (var damage in procDamageList) {
		totalDamage["Damage"] += procDamageList[damage]["Damage"];
		totalDamage["Mitigated"] += procDamageList[damage]["Mitigated"];
	}

	document.getElementById("damageOutput").innerHTML = "Damage Output: " + totalDamage["Damage"] + " (-" + totalDamage["Mitigated"] + ")";
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
			if (statSheet["Attack Speed"] > 2.5) {
				document.getElementById("damageOutput").innerHTML = "DPS: " + Math.round(totalDamage["Damage"] * 2.5);
			} else {
				document.getElementById("damageOutput").innerHTML = "DPS: " + Math.round(totalDamage["Damage"] * statSheet["Attack Speed"]);
			}
		}
	}
};

function buffAbility(abilityName, abilityRank) {
	
	if (abilityName == "Unburden"){
		unburdenActive = true;
	}
	
	if (abilityName == "Agility") {
		statSheet['Physical Power'] += 15 + (5*abilityRank)
		getBasicDamage();
	}
	if (abilityName == 'Accelerate'){
		var section = document.getElementById('godPassiveSlider').value
		
		if (section == 3){
			statSheet['Magical Power'] *= 1.35
			console.log(statSheet['Magical Power'])
		}
	}
	if (abilityName == "Vicious Barrage"){
		statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.25 + abilityRank * 0.05);
		chernoPassiveStacks +=1;
	}


	
	if (abilityName == "Madame Fangs (Initial)"){
		mamanMark = true;
	}
	if (abilityName == "Explosion of Souls"){
		mamanMark = true;
	}
	if (abilityName == "Deathbane") {
		targetStatSheet["Physical Protection"] = Math.round(targetStatSheet["Physical Protection"] * 0.95);
	}
	if (abilityName == "Mystic Rush") {
		ravanaUlt = true;
		console.log("RUSH");
	}
	if (abilityName == "Piercing Cold") {
		piercingColdDebuff = true;
	}

	if (abilityName == "Twin Cleave (Bladestorm)") {
		targetStatSheet["Physical Protection"] = 0.8;
		targetStatSheet["Magical Protection"] = 0.8;
	}

	if (abilityName == "Fracture") {
		targetStatSheet["Physical Protection"] -= 5 + 5 * abilityRank;
		targetStatSheet["Magical Protection"] -= 5 + 5 * abilityRank;
	}
	if (abilityName == "Sickle Storm") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.4 + abilityRank * 0.05);
		statSheet["Basic Attack Damage"] =
			1 * statSheet["Physical Power"] + statSheet["Basic Damage"]["Base Damage"] + statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
	}
	if (abilityName == "Descend into Madness") {
		statSheet["Health"] = statSheet["Health"] * 1.25;
	}

	if (abilityName == "Mark of the Golden Crow") {
		markActive = true;
		markRank = abilityRank;
	}

	if (abilityName == "Stinger") {
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] * 0.9;
	}

	if (abilityName == "Ferocious Roar") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + 15 + abilityRank * 5;
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + 15 + abilityRank * 5;
	}
	if (abilityName == "Hive") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (abilityRank * 0.1);
	}
	if (abilityName == "Hinder (Cleanse)") {
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] * 0.95;
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] * 0.95;
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - 5 * abilityRank;
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] - 5 * abilityRank;
	}
	if (abilityName == "Vengeful Assault") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.3 + abilityRank * 0.1);
		getBasicDamage();
	}
	if (abilityName == "Radiant Glory") {
		statSheet["Physical Power"] = statSheet["Physical Power"] * (1 + (0.05 + 0.01 * abilityRank));
		statSheet["Physical Protection"] = statSheet["Physical Protection"] * (0.75 + 0.25 * abilityRank);
		statSheet["Magical Protection"] = statSheet["Magical Protection"] * (0.75 + 0.25 * abilityRank);
		getBasicDamage();
	}
	if (abilityName == "Gravity Surge") {
		statSheet["Physical Power"] = statSheet["Physical Power"] + (10 + 10 * abilityRank);
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.45 + abilityRank * 0.05);
		getBasicDamage();
	}
	if (abilityName == "Colossal Fury") {
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (20 + abilityRank * 5);
		statSheet["Physical Power"] = statSheet["Physical Power"] + (20 + abilityRank * 5);
		getBasicDamage();
	}
	if (abilityName == "Chug") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + (10 + 5 * abilityRank);
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (10 + 5 * abilityRank);
		statSheet["Magical Power"] = statSheet["Magical Power"] + abilityRank * 7;
		getBasicDamage();
	}
	if (abilityName == "Screech") {
		statSheet["Physical Power"] = statSheet["Physical Power"] + (10 + 5 * abilityRank);
		getBasicDamage();
	}
	if (abilityName == "Ghastly Breath") {
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - (2 + 3 * abilityRank);
	}
	if (abilityName == "Torrent") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + 5 * abilityRank;
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + 5 * abilityRank;
	}

	if (abilityName == "72 Transformations") {
		if (statSheet["Name"] == "Erlang Shen") {
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.1 + abilityRank * 0.05);
		}
	}
	if (abilityName == "Dispel Magic") {
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] * 0.9;
	}

	if (abilityName == "Seething Howl") {
		statSheet["Physical Power"] = statSheet["Physical Power"] + (5 + 15 * abilityRank);
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * 0.25;
		getBasicDamage();
	}
	if (abilityName == "Dharmic Pillars") {
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - 10 * abilityRank;
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] - 10 * abilityRank;
	}
	if (abilityName == "Taolu Assault") {
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - 3 * abilityRank;
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] - 3 * abilityRank;
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + 3 * abilityRank;
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + 3 * abilityRank;
	}
	if (abilityName == "72 Transformations") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.075 + abilityRank * 0.025);
	}
	if (abilityName == "Mitigate Wounds") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + (10 + 10 * abilityRank);
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (10 + 10 * abilityRank);
	}
	if (abilityName == "Sickle Storm") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.4 + abilityRank * 0.05);
	}

	if (abilityName == "Explosive Bolts") {
		if (abilityRank != 1) {
			statSheet["Critical Strike Chance"] = statSheet["Critical Strike Chance"] + 5 * (abilityRank - 1);
		}
		statSheet['Basic Damage']['Scaling'] = 1.1
		getBasicDamage();
	}
	if (abilityName == "Incense") {
		statSheet["Physical Power"] = statSheet["Physical Power"] + (5 + 5 * abilityRank);
		getBasicDamage();
	}
	if (abilityName == "Rising Dawn") {
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] * (1 - 0.05 * abilityRank);
	}
	if (abilityName == "Viper Shot") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.3 + abilityRank * 0.1);
		getBasicDamage();
	}
	if (abilityName == "Maximum Velocity") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.2 + abilityRank * 0.1);
	}
	if (abilityName == "Flaming Spear") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.175 + abilityRank * 0.075);
		statSheet["Critical Strike Chance"] = statSheet["Critical Strike Chance"] + 20;
	}
	if (abilityName == "Trident") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.025 + abilityRank * 0.025);
		statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] * 1.25;
	}
	if (abilityName == "Wind Fire Wheels") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + (25 + 5 * abilityRank);
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (25 + 5 * abilityRank);
	}
	if (abilityName == "Divine Judgement") {
		var stolenMagical = targetStatSheet["Magical Protection"] * 0.25;
		var stolenPhysical = targetStatSheet["Physical Protection"] * 0.25;
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] * 0.25;
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] * 0.25;
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + stolenMagical;
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + stolenPhysical;
	}
	if (abilityName == "Overflowing Divinity") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * 0.4;
	}
	if (abilityName == "Trident") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.025 + abilityRank * 0.025);
	}
	if (abilityName == "Solar Blessing") {
		statSheet["Magical Power"] = statSheet["Magical Power"] + (15 + 5 * abilityRank);
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + (5 + 5 * abilityRank);
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (5 + 5 * abilityRank);
	}
	if (abilityName == "Infinite Arrows") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.35 + abilityRank * 0.05);
	}
	if (abilityName == "Crush") {
		if (abilityRank == 5) {
			targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] * 0.85;
		}
	}
	if (abilityName == "Wisps") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + (5 + 5 * abilityRank);
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (5 + 5 * abilityRank);
	}
	if (abilityName == "Verdant Growth") {
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] * 95;
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] * 0.95;
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - 5 * abilityRank;
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] - 5 * abilityRank;
	}
	if (abilityName == "Expose Weakness (Invigorate)") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.15 + abilityRank * 0.05);
	}
	if (abilityName == "Darkest of Nights") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.1 + abilityRank * 0.1);
	}
	if (abilityName == "Sky-Cutting Axe") {
		statSheet["Magical Protection"] = statSheet["Magical Protection"] + (15 + 5 * abilityRank);
		statSheet["Physical Protection"] = statSheet["Physical Protection"] + (15 + 5 * abilityRank);
	}
	if (abilityName == "Aegis Assault") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (0.1 + abilityRank * 0.05);
	}
	if (abilityName == "Flames of the Phoenix") {
		targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - (2 + 2 * abilityRank);
		targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] - (2 + 2 * abilityRank);
	}
	if (abilityName == "Shifting Sands") {
		shiftingSandsActive = true;
		shiftingSandsBuff = 5 + 3 * abilityRank;
	}
	if (abilityName == "Branching Bola") {
		statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] + 10 * abilityRank;
	}
	if (abilityName == "Poison Darts") {
		poisonActive = true;
	}
	
}
function getBasicDamage() {
	if (statSheet["Type"] == "Magical") {
		if (unburdenActive == true){
			if (buffList.includes("Elixir of Power")){
				statSheet['Basic Attack Damage'] = (23 + (statSheet['Level'] * 6)) * 1.25  
			}
			else{
				statSheet['Basic Attack Damage'] = 23 + (statSheet['Level'] * 6)
			}
			
		}

		else if(buffList.includes("Elixir of Power")){
			statSheet["Basic Attack Damage"] =
			(statSheet["Basic Damage"]["Scaling"] * statSheet["Magical Power"]) +
			((statSheet["Basic Damage"]["Base Damage"] +
			(statSheet["Basic Damage"]["Per Level"] * statSheet["Level"]))*1.25);
		}
		
		else{
			statSheet["Basic Attack Damage"] =
			statSheet["Basic Damage"]["Scaling"] * statSheet["Magical Power"] +
			statSheet["Basic Damage"]["Base Damage"] +
			statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
		}

		
			

	} else {
		
		if(buffList.includes("Elixir of Power")){
			statSheet["Basic Attack Damage"] =
			(statSheet["Basic Damage"]["Scaling"] * statSheet["Physical Power"]) +
			((statSheet["Basic Damage"]["Base Damage"] +
			(statSheet["Basic Damage"]["Per Level"] * statSheet["Level"])) * 1.25);
		}
		else{
			statSheet["Basic Attack Damage"] =
			(statSheet["Basic Damage"]["Scaling"] * statSheet["Physical Power"]) +
			statSheet["Basic Damage"]["Base Damage"] +
			(statSheet["Basic Damage"]["Per Level"] * statSheet["Level"]);
		}
			
		
		
	}
	
}
function getFullItemPrice(item) {
	var fullItemPrice = 0;
	var childItem = null;
	fullItemPrice += itemSearch(item)["Price"];
	childItem = itemSearch(item)["ChildItem"];
	for (var i = 0; i < 3; i++) {
		if (childItem == null) {
			break;
		}

		fullItemPrice += itemSearch(childItem)["Price"];
		childItem = itemSearch(childItem)["ChildItem"];
	}
	return fullItemPrice;
}
function itemSearch(itemName) {
	if (itemName != "") {
		for (var item of itemData) {
			if (item["Name"] == itemName) {
				var itemStats = item;
				itemStats["Item Icon"] = item["Item Icon"];
				itemStats["ChildItem"] = item["ChildItem"];

				return itemStats;
			}
		}
	}
}
function godSearch(godName, godLevel) {
	for (var i = 0; i < godData.length; i++) {
		var god = godData[i];
		if (god["Name"] == godName) {
			statSheet["Name"] = god["Name"];
			statSheet["Level"] = godLevel;
			statSheet["Health"] = Math.round(god["Health"] * 0.714 + godLevel * (god["HealthPerLevel"] * 0.951));
			statSheet["Mana"] = god["Mana"] + godLevel * god["ManaPerLevel"];
			statSheet["Physical Protection"] = Math.round(god["PhysicalProtection"] * 0.714 + godLevel * (god["PhysicalProtectionPerLevel"] * 0.932));
			statSheet["Magical Protection"] = Math.round(god["MagicProtection"] * 0.78 + godLevel * (god["MagicProtectionPerLevel"] * 0.812));
			statSheet["Basic Damage"] = god["Basic Damage"];
			statSheet["Type"] = god["Type"];
			statSheet["Role"] = god["Role"];
			statSheet["Attack Speed"] = god["Attack Speed"] + godLevel * god["Attack Speed Per Level"];
			statSheet["Base Attack Speed"] = god["Attack Speed"];
			if (statSheet["Type"] == "Magical") {
				statSheet["Basic Attack Damage"] =
					statSheet["Basic Damage"]["Scaling"] * statSheet["Magical Power"] +
					statSheet["Basic Damage"]["Base Damage"] +
					statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
			} else {
				statSheet["Basic Attack Damage"] =
					statSheet["Basic Damage"]["Scaling"] * statSheet["Physical Power"] +
					statSheet["Basic Damage"]["Base Damage"] +
					statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
			}
			return god;
		}
	}
}
function targetGodSearch(godName, godLevel) {
	for (var i = 0; i < godData.length; i++) {
		var god = godData[i];
		if (god["Name"] == godName) {
			targetStatSheet["Name"] = god["Name"];
			targetStatSheet["Level"] = godLevel;
			targetStatSheet["Health"] = Math.round(god["Health"] * 0.714 + godLevel * (god["HealthPerLevel"] * 0.951));
			targetStatSheet["Mana"] = god["Mana"] + godLevel * god["ManaPerLevel"];
			targetStatSheet["Physical Protection"] = Math.round(
				god["PhysicalProtection"] * 0.714 + godLevel * (god["PhysicalProtectionPerLevel"] * 0.932)
			);
			targetStatSheet["Magical Protection"] = Math.round(god["MagicProtection"] * 0.78 + godLevel * (god["MagicProtectionPerLevel"] * 0.812));
			targetStatSheet["Basic Damage"] = god["Basic Damage"];
			targetStatSheet["Type"] = god["Type"];
			targetStatSheet["Role"] = god["Role"];
			targetStatSheet["Attack Speed"] = god["Attack Speed"] + godLevel * god["Attack Speed Per Level"];
			targetStatSheet["Base Attack Speed"] = god["Attack Speed"];
			return targetStatSheet;
		}
	}
}
function flatBuffs(buffName, godOrTarget) {
	if (godOrTarget == "god") {
		if (buffName == "Red Buff") {
			statSheet["Magical Power"] = Math.round(statSheet["Magical Power"] + 10);
			statSheet["Physical Power"] = Math.round(statSheet["Physical Power"] + 5);
		} else if (buffName == "Potion of Power") {
			statSheet["Magical Penetration"] = statSheet["Magical Penetration"] + 10;
			statSheet["Magical Power"] = statSheet["Magical Power"] + 70;
			statSheet["Physical Power"] = statSheet["Physical Power"] + 40;
			statSheet["Physical Penetration"] = statSheet["Physical Penetration"] + 10;
		} else if (buffName == "Fire Giant") {
			statSheet["Magical Power"] = statSheet["Magical Power"] + 75;
			statSheet["Physical Power"] = statSheet["Physical Power"] + 55;
		} else if (buffName == "Evolved Fire Giant") {
			statSheet["Magical Power"] = statSheet["Magical Power"] + 100;
			statSheet["Physical Power"] = statSheet["Physical Power"] + 65;
		} else if (buffName == "Yellow Tiki") {
			statSheet["% Magical Penetration"] = statSheet["% Magical Penetration"] + 5;
			statSheet["Magical Penetration"] = statSheet["Magical Penetration"] + 5;
			statSheet["% Physical Penetration"] = statSheet["% Physical Penetration"] + 5;
			statSheet["Physical Penetration"] = statSheet["Physical Penetration"] + 5;
		}
		else if(buffName == 'Contest of Gods') {
			statSheet['Physical Power'] += 5 + (1.5 * statSheet['Level']);
			statSheet['Magical Power'] += 10 + (2 * statSheet['Level']);
		}
		else if (buffName == "Yellow Tiki T2") {
			statSheet["% Magical Penetration"] = statSheet["% Magical Penetration"] + 5;
			statSheet["Magical Penetration"] = statSheet["Magical Penetration"] + 7;
			statSheet["% Physical Penetration"] = statSheet["% Physical Penetration"] + 5;
			statSheet["Physical Penetration"] = statSheet["Physical Penetration"] + 7;
		}
		else if (buffName == "Yellow Tiki T3") {
			statSheet["% Magical Penetration"] = statSheet["% Magical Penetration"] + 5;
			statSheet["Magical Penetration"] = statSheet["Magical Penetration"] + 10;
			statSheet["% Physical Penetration"] = statSheet["% Physical Penetration"] + 5;
			statSheet["Physical Penetration"] = statSheet["Physical Penetration"] + 10;
		}
	} else {
		if (buffName == "Red Buff") {
			targetStatSheet["Magical Power"] = Math.round(targetStatSheet["Magical Power"] + 10);
			targetStatSheet["Physical Power"] = Math.round(targetStatSheet["Physical Power"] + 5);
		} else if (buffName == "Potion of Power") {
			targetStatSheet["Magical Penetration"] = targetStatSheet["Magical Penetration"] + 10;
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] + 70;
			targetStatSheet["Physical Power"] = targetStatSheet["Physical Power"] + 40;
			targetStatSheet["Physical Penetration"] = targetStatSheet["Physical Penetration"] + 10;
		} else if (buffName == "Fire Giant") {
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] + 75;
			targetStatSheet["Physical Power"] = targetStatSheet["Physical Power"] + 55;
		} else if (buffName == "Evolved Fire Giant") {
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] + 100;
			targetStatSheet["Physical Power"] = targetStatSheet["Physical Power"] + 65;
		} else if (buffName == "Yellow Tiki") {
			targetStatSheet["% Magical Penetration"] = targetStatSheet["% Magical Penetration"] + 5;
			targetStatSheet["Magical Penetration"] = targetStatSheet["Magical Penetration"] + 5;
			targetStatSheet["% Physical Penetration"] = targetStatSheet["% Physical Penetration"] + 5;
			targetStatSheet["Physical Penetration"] = targetStatSheet["Physical Penetration"] + 5;
		}
		else if (buffName == "Yellow Tiki T2") {
			targetStatSheet["% Magical Penetration"] = targetStatSheet["% Magical Penetration"] + 5;
			targetStatSheet["Magical Penetration"] = targetStatSheet["Magical Penetration"] + 7;
			targetStatSheet["% Physical Penetration"] = targetStatSheet["% Physical Penetration"] + 5;
			targetStatSheet["Physical Penetration"] = targetStatSheet["Physical Penetration"] + 7;
		}
		else if (buffName == "Yellow Tiki T3") {
			targetStatSheet["% Magical Penetration"] = targetStatSheet["% Magical Penetration"] + 5;
			targetStatSheet["Magical Penetration"] = targetStatSheet["Magical Penetration"] + 10;
			targetStatSheet["% Physical Penetration"] = targetStatSheet["% Physical Penetration"] + 5;
			targetStatSheet["Physical Penetration"] = targetStatSheet["Physical Penetration"] + 10;
		}
	}
}
function percentBuffs(buffName, godOrTarget) {
	if (godOrTarget == "god") {
	
		if (buffName == "Red Buff") {
			statSheet["Magical Power"] = Math.round(statSheet["Magical Power"] * 1.1);
			statSheet["Physical Power"] = Math.round(statSheet["Physical Power"] * 1.1);
		} else if (buffName == "Elixir of Power") {
			statSheet["Magical Power"] = Math.round(statSheet["Magical Power"] * 1.25);
			statSheet["Physical Power"] = Math.round(statSheet["Physical Power"] * 1.25);
			statSheet["% Physical Penetration"] = statSheet["% Physical Penetration"] + 10;
			statSheet["% Magical Penetration"] = statSheet["% Magical Penetration"] + 10;
		} 
		

		else if(buffName == 'Bracer of Radiance') {
			statSheet['Physical Power'] *= 1.1;
			statSheet['Magical Power'] *= 1.1;
		}
		else if (buffName == "Red Tiki") {
			statSheet["Magical Lifesteal"] = statSheet["Magical Lifesteal"] + 10;
		} else if (buffName == "Purple Tiki") {
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * 0.1;
		} else if (buffName == "Green Buff") {
			var totalProts = statSheet["Magical Protection"] + statSheet["Physical Protection"];
			var buffCounter = 0;

			for (var i = totalProts; i > 50; ) {
				buffCounter = buffCounter + 1;
				i -= 50;
			}
			statSheet["Health"] = statSheet["Health"] + 100 + buffCounter * 30;
			statSheet["Mana"] = statSheet["Mana"] + 100 + buffCounter * 30;
		} else if (buffName == "Green Tiki") {
			statSheet["Mana"] = Math.round(statSheet["Mana"] * 1.1);
			statSheet["Health"] = Math.round(statSheet["Health"] * 1.1);
		} else if (buffName == "Yellow Buff") {
		} else if (buffName == "Elixir of Defense") {
			statSheet["Magical Protection"] = Math.round(statSheet["Magical Protection"] + 50);
			statSheet["Physical Protection"] = Math.round(statSheet["Physical Protection"] + 50);
			itemProts = itemProts + 100;
		}
		
	} else {
		if (buffName == "Elixir of Power") {
			targetStatSheet["Magical Power"] = Math.round(targetStatSheet["Magical Power"] * 1.25);
			targetStatSheet["Physical Power"] = Math.round(targetStatSheet["Physical Power"] * 1.25);
			targetStatSheet["% Physical Penetration"] = targetStatSheet["% Physical Penetration"] + 10;
			targetStatSheet["% Magical Penetration"] = targetStatSheet["% Magical Penetration"] + 10;
		} else if (buffName == "Red Tiki") {
			targetStatSheet["Magical Lifesteal"] = targetStatSheet["Magical Lifesteal"] + 10;
		} else if (buffName == "Purple Tiki") {
			targetStatSheet["Attack Speed"] = targetStatSheet["Attack Speed"] + targetStatSheet["Base Attack Speed"] * 0.1;
		} else if (buffName == "Green Buff") {
			var totalProts = targetStatSheet["Magical Protection"] + targetStatSheet["Physical Protection"];
			var buffCounter = 0;

			for (var i = totalProts; i > 50; ) {
				buffCounter = buffCounter + 1;
				i -= 50;
			}
			targetStatSheet["Health"] = targetStatSheet["Health"] + 100 + buffCounter * 30;
			targetStatSheet["Mana"] = targetStatSheet["Mana"] + 100 + buffCounter * 30;
		} else if (buffName == "Green Tiki") {
			targetStatSheet["Mana"] = Math.round(targetStatSheet["Mana"] * 1.1);
			targetStatSheet["Health"] = Math.round(targetStatSheet["Health"] * 1.1);
		} else if (buffName == "Yellow Buff") {
		} else if (buffName == "Elixir of Defense") {
			targetStatSheet["Magical Protection"] = Math.round(targetStatSheet["Magical Protection"] + 50);
			targetStatSheet["Physical Protection"] = Math.round(targetStatSheet["Physical Protection"] + 50);
		}
	}
}
function updateStatSheet(selection) {
	var statLean = document.getElementById("statContainer");
	var visualAttackSpeed = 0;
	var listBox = document.getElementById("listBox");
	var visualCritChance = 0;
	if (counter == 0) {
		var godNameSave = statSheet["Name"];
		godLevel = document.getElementById("godLevelSlider").value;
		statSheet = {
			Name: "N/A",
			"Magical Power": 0,
			"Magical Penetration": 0,
			Mana: 0,
			MP5: 0,
			"% Magical Penetration": 0,
			"Magical Lifesteal": 0,
			"Physical Power": 0,
			"Physical Penetration": 0,
			"% Physical Penetration": 0,
			"Physical Lifesteal": 0,
			"Critical Strike Chance": 0,
			"% Physical Protection Shred": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			Health: 0,
			"Basic Damage": 0,
			"% Magical Protection Shred": 0,
			"Attack Speed": 0,
			"Basic Attack Damage": 0,
			"Basic Damage": 0,
		};
		godSearch(godNameSave, godLevel);

		//God Build
		var itemOne = document.getElementById("itemOneForm").value;
		var itemTwo = document.getElementById("itemTwoForm").value;
		var itemThree = document.getElementById("itemThreeForm").value;
		var itemFour = document.getElementById("itemFourForm").value;
		var itemFive = document.getElementById("itemFiveForm").value;
		var itemSix = document.getElementById("itemSixForm").value;
		godBuild = [itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix];
		//Buffs
		var buffOne = document.getElementById("buffOneForm").value;
		var buffTwo = document.getElementById("buffTwoForm").value;
		var buffThree = document.getElementById("buffThreeForm").value;
		var buffFour = document.getElementById("buffFourForm").value;
		var buffFive = document.getElementById("buffFiveForm").value;
		var buffSix = document.getElementById("buffSixForm").value;

		buffList = [buffOne, buffTwo, buffThree, buffFour, buffFive, buffSix];
		addGodPassive(statSheet["Name"]);
		for (var item of godBuild) {
			addDamageItem(item);
		}
		for (var buff of buffList) {
			flatBuffs(buff, "god");
		}
		for (var item of godBuild) {
			addItemPassive(item);
		}
		for (var buff of buffList) {
			percentBuffs(buff, "god");
		}
		if (godBuild.includes("Bumba's Spear")) {
			statSheet["Physical Power"] = statSheet["Physical Power"] * 1.1;
			statSheet["Magical Power"] = statSheet["Magical Power"] * 1.1;
		}

		getBasicDamage();

		for (var item of godBuild) {
			var itemStats = itemSearch(item);

			for (var stat in itemStats) {
				if (stat == "Basic Attack Damage") {
					statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] + parseInt(itemStats["Basic Attack Damage"]);
				}
			}
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
			"Magical Power": 0,
			"Magical Penetration": 0,
			Mana: 0,
			MP5: 0,
			"% Magical Penetration": 0,
			"Magical Lifesteal": 0,
			"Physical Power": 0,
			"Physical Penetration": 0,
			"% Physical Penetration": 0,
			"Physical Lifesteal": 0,
			"Critical Strike Chance": 0,
			"% Physical Protection Shred": 0,
			"Magical Protection": 0,
			"Physical Protection": 0,
			Health: 0,
			"Basic Damage": 0,
			"% Magical Protection Shred": 0,
			"Attack Speed": 0,
		};
		targetGodSearch(godNameSave, godLevel);

		//Target Build

		var targetitemOne = document.getElementById("targetItemOneForm").value;
		var targetitemTwo = document.getElementById("targetItemTwoForm").value;
		var targetitemThree = document.getElementById("targetItemThreeForm").value;
		var targetitemFour = document.getElementById("targetItemFourForm").value;
		var targetitemFive = document.getElementById("targetItemFiveForm").value;
		var targetitemSix = document.getElementById("targetItemSixForm").value;
		var targetBuild = [targetitemOne, targetitemTwo, targetitemThree, targetitemFour, targetitemFive, targetitemSix];
		//Target Buffs

		var debuffOne = document.getElementById("debuffOneForm").value;
		var debuffTwo = document.getElementById("debuffTwoForm").value;
		var debuffThree = document.getElementById("debuffThreeForm").value;
		var debuffFour = document.getElementById("debuffFourForm").value;
		var debuffFive = document.getElementById("debuffFiveForm").value;
		var debuffSix = document.getElementById("debuffSixForm").value;

		 debuffList = [debuffOne, debuffTwo, debuffThree, debuffFour, debuffFive, debuffSix];
		for (var item of targetBuild) {
			addDefenseItem(item);
		}
		for (var debuff of debuffList) {
			flatBuffs(debuff, "target");
		}
		for (var debuff of debuffList) {
			percentBuffs(debuff, "target");
		}
		for (var item of godBuild) {
			addItemPassive(item);
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
		if (statSheet["% Magical Penetration"] > 40) {
			statSheet["% Magical Penetration"] = 40;
		}
		if (statSheet["% Physical Penetration"] > 40) {
			statSheet["% Physical Penetration"] = 40;
		}
		if (statSheet["Magical Penetration"] > 50) {
			statSheet["Magical Penetration"] = 50;
		}
		if (statSheet["Physical Penetration"] > 50) {
			statSheet["Physical Penetration"] = 50;
		}

		if (statSheet["Type"] == "Magical") {
			document.getElementById("powerStatValue").innerHTML = statSheet["Magical Power"];
			document.getElementById("flatPenValue").innerHTML = statSheet["Magical Penetration"];
			document.getElementById("percentPenValue").innerHTML = statSheet["% Magical Penetration"];
			document.getElementById("powerStat").style.width = (statSheet["Magical Power"] / 1000) * 100 + "%";
			document.getElementById("flatPen").style.width = (statSheet["Magical Penetration"] / 50) * 100 + "%";
			document.getElementById("percentPen").style.width = (statSheet["% Magical Penetration"] / 40) * 100 + "%";
		} else {
			document.getElementById("powerStatValue").innerHTML = Math.round(statSheet["Physical Power"]);

			document.getElementById("flatPenValue").innerHTML = Math.round(statSheet["Physical Penetration"]);
			document.getElementById("percentPenValue").innerHTML = Math.round(statSheet["% Physical Penetration"]);
			document.getElementById("powerStat").style.width = (statSheet["Physical Power"] / 500) * 100 + "%";
			document.getElementById("flatPen").style.width = (statSheet["Physical Penetration"] / 50) * 100 + "%";
			document.getElementById("percentPen").style.width = (statSheet["% Physical Penetration"] / 40) * 100 + "%";
		}
		document.getElementById("basicDamageValue").innerHTML = Math.round(statSheet["Basic Attack Damage"]);
		document.getElementById("basicDamageStat").style.width = (statSheet["Basic Attack Damage"] / 500) * 100 + "%";
		document.getElementById("healthStatValue").innerHTML = statSheet["Health"];
		document.getElementById("physProtValue").innerHTML = statSheet["Physical Protection"];
		document.getElementById("magProtValue").innerHTML = statSheet["Magical Protection"];
		document.getElementById("manaStatValue").innerHTML = statSheet["Mana"];
		document.getElementById("manaStat").style.width = (statSheet["Mana"] / 3000) * 100 + "%";
		document.getElementById("physProt").style.width = (statSheet["Physical Protection"] / 325) * 100 + "%";
		document.getElementById("healthStat").style.width = (statSheet["Health"] / 4000) * 100 + "%";
		document.getElementById("magProt").style.width = (statSheet["Magical Protection"] / 325) * 100 + "%";
		document.getElementById("attackSpeedStat").style.width = (visualAttackSpeed / 2.5) * 100 + "%";
		document.getElementById("attackSpeedStatValue").innerHTML = statSheet["Attack Speed"].toFixed(2);
		document.getElementById("criticalStrikeValue").innerHTML = statSheet["Critical Strike Chance"];
		document.getElementById("criticalStrikeStat").style.width = visualCritChance + "%";
	} else {
		visualAttackSpeed = targetStatSheet["Attack Speed"];
		visualCritChance = targetStatSheet["Critical Strike Chance"];
		if (targetStatSheet["Attack Speed"] > 2.5) {
			visualAttackSpeed = 2.5;
		}
		if (targetStatSheet["Critical Strike Chance"] > 100) {
			visualCritChance = 100;
		}
		if (targetStatSheet["% Magical Penetration"] > 40) {
			targetStatSheet["% Magical Penetration"] = 40;
		}
		if (targetStatSheet["% Physical Penetration"] > 40) {
			targetStatSheet["% Physical Penetration"] = 40;
		}
		if (targetStatSheet["Magical Penetration"] > 50) {
			targetStatSheet["Magical Penetration"] = 50;
		}
		if (targetStatSheet["Physical Penetration"] > 50) {
			targetStatSheet["Physical Penetration"] = 50;
		}
		statLean.style.justifyContent = "left";
		listBox.style.justifyContent = "right";

		if (targetStatSheet["Type"] == "Magical") {
			document.getElementById("powerStatValue").innerHTML = targetStatSheet["Magical Power"];
			document.getElementById("flatPenValue").innerHTML = targetStatSheet["Magical Penetration"];
			document.getElementById("percentPenValue").innerHTML = targetStatSheet["% Magical Penetration"];
			document.getElementById("powerStat").style.width = (targetStatSheet["Magical Power"] / 1000) * 100 + "%";
			document.getElementById("flatPen").style.width = (targetStatSheet["Magical Penetration"] / 50) * 100 + "%";
			document.getElementById("percentPen").style.width = (targetStatSheet["% Magical Penetration"] / 40) * 100 + "%";
		} else {
			document.getElementById("powerStatValue").innerHTML = targetStatSheet["Physical Power"];
			document.getElementById("flatPenValue").innerHTML = targetStatSheet["Physical Penetration"];
			document.getElementById("percentPenValue").innerHTML = targetStatSheet["% Physical Penetration"];
			document.getElementById("powerStat").style.width = (targetStatSheet["Physical Power"] / 500) * 100 + "%";
			document.getElementById("flatPen").style.width = (targetStatSheet["Physical Penetration"] / 50) * 100 + "%";
			document.getElementById("percentPen").style.width = (targetStatSheet["% Physical Penetration"] / 40) * 100 + "%";
		}
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
	if (godName == "Scylla") {
		statSheet["Magical Power"] += 5 * godLevel;
	}
	if (godName == "Tyr") {
		var abilityRank = document.getElementById("abilityThreeSlider").value;
		if (tyrStance == "defense") {
			statSheet["Magical Protection"] += 4 + 8 * abilityRank;
			statSheet["Physical Protection"] += 4 + 8 * abilityRank;
			statSheet["Physical Power"] += (4 + 8 * abilityRank) / 2;
		} else if (tyrStance == "assault") {
			statSheet["Magical Protection"] += (4 + 8 * abilityRank) / 2;
			statSheet["Physical Protection"] += (4 + 8 * abilityRank) / 2;
			statSheet["Physical Power"] += 4 + 8 * abilityRank;
		}
	}

	if (godName == "Serqet") {
		var abilityRank = document.getElementById("abilityFourSlider").value;
		console.log(abilityRank);
		statSheet["Critical Strike Chance"] = statSheet["Critical Strike Chance"] + 5 * (abilityRank - 1);
	}
	if (godName == "Kukulkan") {
		statSheet["Magical Power"] += statSheet["Mana"] * 0.04;
	}

	if (godName == "Thoth") {
		statSheet["Magical Penetration"] += 15;
		statSheet["% Magical Penetration"] += 5;
	}
	if (godName == "Danzaburou") {
		statSheet["Physical Power"] += 40;
	}
	if (godName == "Janus") {
		statSheet["% Magical Penetration"] += 20;
	}

	if (godName == "Vamana") {
		statSheet["Attack Speed"] = statSheet["Attack Speed"] + (statSheet["Base Attack Speed"] * (statSheet["Physical Protection"] * 0.15)) / 100;
		statSheet["Physical Power"] = statSheet["Physical Power"] + statSheet["Physical Protection"] * 0.2;
	}

	if (godName == "Discordia") {
		statSheet["Magical Power"] += 50;
	}
	if (godName == "Chronos") {
		var section = document.getElementById("godPassiveSlider").value;

		statSheet["Magical Power"] += (6 * statSheet['Level']);
		statSheet["Basic Damage"]["Scaling"] = 0.2;
		
		if (section == 4) {
			statSheet["Basic Damage"]["Scaling"] = 0.55;
		}
	}
	if (godName == 'Apollo'){
		var passiveStacks = document.getElementById("godPassiveSlider").value;
		if (passiveStacks > 9){
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + (statSheet["Base Attack Speed"] * 1);
		}
		
	}
	if (godName == "Achilles") {
		statSheet["Physical Power"] += 33;
	}
	if (godName == "Sun Wukong") {
		statSheet["Physical Power"] += 40;
	}
	if (godName == "Awilix") {
		statSheet["Physical Power"] = statSheet["Physical Power"] * 1.3;
	}
	//    if (godName == 'Arachne'){
	//
	//    }
	if (godName == "Hercules") {
		statSheet["Physical Power"] += 72;
	}
	if (godName == "Vamana") {
		statSheet["Physical Power"] += statSheet["Physical Protection"] * 0.2;
	}
	if (godName == "Nox") {
		statSheet["Magical Power"] = statSheet["Magical Power"] * 1.12;
	}
	if (godName == "Cthulhu") {
		var passiveStacks = document.getElementById("godPassiveSlider").value;
		statSheet["Magical Power"] = statSheet["Magical Power"] + passiveStacks * 25;
	}

	//Sol, hel, anhur, arachne, merc, terra, zeus, loki, ullr, change, cern, thor, cu chu, nem, ares,
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
			statSheet["Magical Power"] = statSheet["Magical Power"] + itemMana * 0.07;
		}
		if (itemPassiveName === "Typhon's Fang") {
			statSheet["Magical Power"] = statSheet["Magical Power"] + 1.5 * statSheet["Magical Lifesteal"];
		}
		if (itemPassiveName === "Evolved Transcendence") {
			statSheet["Physical Power"] = statSheet["Physical Power"] + 0.02 * statSheet["Mana"];
		}
		if (itemPassiveName === "Doom Orb") {
			statSheet["Magical Power"] = statSheet["Magical Power"] + 20;
		}
		if (itemPassiveName === "Nimble Bancroft's Talon") {
			var bonusPower = 0;
			bonusPower = statSheet["Magical Power"] / 30;
			console.log(bonusPower);
			statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] + bonusPower;
			console.log(statSheet["Basic Attack Damage"]);
		}

		if (itemPassiveName === "Pendulum of Ages") {
			statSheet["Magical Power"] += 70;
		}
		if (itemPassiveName === "Corrupted Bluestone") {
			statSheet["Physical Protection"] = Math.round(statSheet["Physical Protection"] * 1.25);
			statSheet["Magical Protection"] = Math.round(statSheet["Magical Protection"] * 1.25);
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * 0.5;
		}
		if (itemPassiveName === "Protector of the Jungle") {
			statSheet["Magical Power"] = Math.round(statSheet["Magical Power"] * 1.15);
			statSheet["Physical Power"] = Math.round(statSheet["Physical Power"] * 1.15);
			statSheet["Physical Protection"] = Math.round(statSheet["Physical Protection"] * 1.07);
			statSheet["Magical Protection"] = Math.round(statSheet["Magical Protection"] * 1.07);
		}
		if (itemPassiveName == "Void Doumaru") {
			targetStatSheet["Magical Protection"] = Math.round(targetStatSheet["Magical Protection"] * 0.9);
		}

		if (itemPassiveName == "Stone of Binding") {
			targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] - 0.8 * statSheet["Level"];
			targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] - 0.8 * statSheet["Level"];
		}
		if (itemPassiveName == "Silverbranch Bow") {
			if (statSheet["Attack Speed"] > 2.5) {
				var overCap = statSheet["Attack Speed"] - 2.5;
				var bonusPower = 3 * (overCap / 0.02);
				if (bonusPower > 120) {
					bonusPower = 120;
				}
				statSheet["Physical Power"] = statSheet["Physical Power"] + bonusPower;
			}
		}
		if (itemPassiveName === "Stormseeker") {
			var stormseekerStacks = 350;
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (stormseekerStacks * 0.0025);
		}
		if (itemPassiveName === "Evolved Gauntlet of Thebes") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + 10;
			statSheet["Magical Protection"] = statSheet["Magical Protection"] + 10;
		}
		if (itemPassiveName === "Evolved Prophetic Cloak") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + 15;
			statSheet["Magical Protection"] = statSheet["Magical Protection"] + 15;
		}
		if (itemPassiveName === "Shogun's Kusari") {
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * 0.3;
		}
		if (itemPassiveName === "Sentinel's Embrace") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + 30;
			statSheet["Magical Protection"] = statSheet["Magical Protection"] + 30;
		}
		if (itemPassiveName === "Pythagorem's Piece") {
			statSheet["Magical Lifesteal"] = statSheet["Magical Lifesteal"] + 9;
			statSheet["Physical Lifesteal"] = statSheet["Physical Lifesteal"] + 9;
			statSheet["Magical Power"] = statSheet["Magical Power"] + 15;
			statSheet["Physical Power"] = statSheet["Physical Power"] + 15;
		}
		if (itemPassiveName === "Hunter's Cowl") {
			statSheet["Attack Speed"] = statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * 0.2;
		}
		if (itemPassiveName === "Leader's Cowl") {
			statSheet["Physical Power"] = statSheet["Physical Power"] * 1.05;
			statSheet["Magical Power"] = statSheet["Magical Power"] * 1.05;
		}
		if (itemPassiveName === "Sovereignty") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + 15;
		}
		if (itemPassiveName.includes("Amulet")) {
			if (itemPassiveName != "Tainted Amulet") {
				statSheet["Magical Protection"] = statSheet["Magical Protection"] + 15;
			}
		}
		if (itemPassiveName === "Devoted Deathbringer") {
			statSheet["Critical Strike Chance"] = statSheet["Critical Strike Chance"] * 1.2;
			if (statSheet["Critical Strike Chance"] > 100) {
				var overCap = statSheet["Critical Strike Chance"] - 100;
				var bonusPower = 0;
				for (overCap; overCap > 4; overCap -= 5) {
					bonusPower = bonusPower + 5;
				}
				statSheet["Physical Power"] = statSheet["Physical Power"] + bonusPower;
				console.log(statSheet["Physical Power"]);
			}
		}
	} else {
		if (itemPassiveName === "Evolved Book of Thoth") {
			for (var i = 0; i < godBuild.length; i++) {
				if (godBuild[i] != "") {
					if ("Mana" in itemSearch(godBuild[i])) {
						itemMana = itemMana + parseInt(itemSearch(godBuild[i])["Mana"]);
					}
				}
			}
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] + itemMana * 0.07;
		}
		if (itemPassiveName === "Typhon's Fang") {
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] + 1.5 * targetStatSheet["Magical Lifesteal"];
		}
		if (itemPassiveName === "Evolved Transcendence") {
			targetStatSheet["Physical Power"] = targetStatSheet["Physical Power"] + 0.02 * targetStatSheet["Mana"];
		}
		if (itemPassiveName === "Bumba's Spear") {
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] * 1.1;
			targetStatSheet["Physical Power"] = targetStatSheet["Physical Power"] * 1.1;
		}
		if (itemPassiveName === "Corrupted Bluestone") {
			targetStatSheet["Physical Protection"] = Math.round(targetStatSheet["Physical Protection"] * 1.25);
			targetStatSheet["Magical Protection"] = Math.round(targetStatSheet["Magical Protection"] * 1.25);
			targetStatSheet["Attack Speed"] = targetStatSheet["Attack Speed"] + targetStatSheet["Base Attack Speed"] * 0.5;
		}
		if (itemPassiveName === "Doom Orb") {
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] + 20;
		}
		if (itemPassiveName === "Pendulum of Ages") {
			targetStatSheet["Magical Power"] += 70;
		}
		if (itemPassiveName === "Protector of the Jungle") {
			targetStatSheet["Magical Power"] = Math.round(targetStatSheet["Magical Power"] * 1.15);
			targetStatSheet["Physical Power"] = Math.round(targetStatSheet["Physical Power"] * 1.15);
			targetStatSheet["Physical Protection"] = Math.round(targetStatSheet["Physical Protection"] * 1.07);
			targetStatSheet["Magical Protection"] = Math.round(targetStatSheet["Magical Protection"] * 1.07);
		}
		if (itemPassiveName == "Silverbranch Bow") {
			if (targetStatSheet["Attack Speed"] > 2.5) {
				var overCap = targetStatSheet["Attack Speed"] - 2.5;
				var bonusPower = 3 * (overCap / 0.02);
				targetStatSheet["Physical Power"] = targetStatSheet["Physical Power"] + bonusPower;
			}
		}
	}

	return statSheet;
}
function perAutoProcDisplay(itemName, ability) {
	var validProcList = ["Axe of Animosity", "Qin's Sais", "Telkhines Ring", "Odysseus' Bow", "Manikin Mace", "Equinox", "Bumba's Hammer", "Cyclopean Ring", "Polynomicon"];
	var physicalProclist = ["Qin's Sais", "Odysseus' Bow", "Equinox", "Manikin Mace"];
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
					if (addDamageProc(itemName)!= 0){
						if (itemName == 'Cyclopean Ring'){
							cyclopeanCD = 0;
						}
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
		"Bancroft's Claw"
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
						procDamageList[procSlot]["Damage"] += calculatePhysicalProcDamage(itemName)["Damage"];
						procDamageList[procSlot]["Mitigated"] += calculatePhysicalProcDamage(itemName)["Mitigated"];
					} else {
						procDamageList[procSlot]["Damage"] += calculateMagicalProcDamage(itemName)["Damage"];
						procDamageList[procSlot]["Mitigated"] += calculateMagicalProcDamage(itemName)["Mitigated"];
					}

					j = 30;
				} else if (proc == itemName) {
					if (physicalProclist.includes(itemName)) {
						if (itemName == "Corrupted Bluestone"){
							procDamageList[procSlot]["Damage"] = 0;
							procDamageList[procSlot]["Mitigated"] = 0;
						}
						
						if (ability == 'Spawn of Set'){
							procCounts[procSlot] += setClones;
							procDamageList[procSlot]["Damage"] += (Math.round(calculatePhysicalProcDamage(itemName)["Damage"] * .5)) * setClones;
							procDamageList[procSlot]["Mitigated"] += Math.round(calculatePhysicalProcDamage(itemName)["Mitigated"] * .5) * setClones;
						}
						else{
							procCounts[procSlot] += 1;
							procDamageList[procSlot]["Damage"] += calculatePhysicalProcDamage(itemName)["Damage"];
							procDamageList[procSlot]["Mitigated"] += calculatePhysicalProcDamage(itemName)["Mitigated"];
						}
						
					} else {
						procCounts[procSlot] += 1;
						procDamageList[procSlot]["Damage"] += calculateMagicalProcDamage(itemName)["Damage"];
						procDamageList[procSlot]["Mitigated"] += calculateMagicalProcDamage(itemName)["Mitigated"];
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
	var validProcList = [
		"Manikin Hidden Blade",
		"Archmage's Gem",
		"Sundering Axe",
		"Warrior's Axe",
		"Soul Gem",
		"Pridwen",
		"Calamitous Rod of Tahuti",
		"Glorious Pridwen",
		"Reverent Pridwen",
		"Archdruid's Fury",
		"Curseweaver",
		"Divine Ruin",
		"Infused Sigil",
		"Duality",
		"Arondight",
	];
	var validAutoProcList = ["Sundering Axe", "Warrior's Axe", "Archdruid's Fury", "Duality"];
	var physicalProclist = ["Manikin Hidden Blade", "Infused Sigil", "Duality", "Arondight"];
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
						console.log(procSlot);
						procList[j] = itemName;
						procItems[j].style.display = "flex";
						procResults[j].style.display = "block";
						procItems[j].src = itemSearch(itemName)["Item Icon"];
						if (itemName == "Duality") {
							for (var item of godBuild) {
								perAbilityProcDisplay(item, "Duality");
							}
						}
						if (physicalProclist.includes(itemName)) {
							procDamageList[procSlot]["Damage"] = calculatePhysicalProcDamage(itemName)["Damage"];
							procDamageList[procSlot]["Mitigated"] = calculatePhysicalProcDamage(itemName)["Mitigated"];
						} else {
							procDamageList[procSlot]["Damage"] = calculateMagicalProcDamage(itemName)["Damage"];
							procDamageList[procSlot]["Mitigated"] = calculateMagicalProcDamage(itemName)["Mitigated"];
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
					console.log(procSlot);
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
function getItemPassiveTooltip(item) {
	var passiveToolTip = "";
	if (item == "Ring of Hecate") {
		passiveToolTip =
			"PASSIVE - Each successful Basic Attack applies a hex to enemies and empowers you, increasing your Magical Power by 5% and reducing the Physical and Magical Power of your opponent by 5% for 5s. (Max. 3 Stacks).";
	}
	if (item == "Stone Cutting Sword") {
		passiveToolTip =
			"PASSIVE - Melee Basic Attacks decreases enemy Physical protections by 7, and increase your physical protection by 7 for 3s (max. 3 Stacks).";
	}
	if (item == "Ichaival") {
		passiveToolTip =
			"PASSIVE - Every successful Basic Attack increases your Physical Power by 5, reduces your target's Physical Power from items by 5, and reduces your target’s Magical Power from items by 10 for 5s. (Max. 4 Stacks)";
	}
	if (item == "Curseweaver") {
		passiveToolTip =
			"PASSIVE - Hitting an enemy god with a Basic Attack or Ability marks them for 4s. When the marked enemy god casts an ability, they take 5% of your Maximum Health + 5% of your Maximum Mana as Magical damage. You heal for 100% of the damage dealt. You may only apply a mark once every 12s. Each time an enemy casts an ability within 55 units of you, reduce the cooldown of this item by 1s.";
	}
	if (item == "Shifter's Shield") {
		passiveToolTip =
			"PASSIVE - While over 75% Health, you gain 30 Physical Power and 45 Magical Power. While under 75% Health, you gain 20 Protections. (Applied by default here)";
	}
	if (item == "Shield of the Phoenix") {
		passiveToolTip =
			"PASSIVE - Anytime you hit an Enemy god with an ability you are healed for 2% of your maximum Health and Mana. This can only trigger once per ability.";
	}
	if (item == "Duality") {
		passiveToolTip =
			"PASSIVE - Once every 3s, your next Basic Attack will deal an additional 25% of your Basic Attack Power as Physical Ability damage. This damage can trigger ability item effects.";
	}
	if (item == "Doom Orb") {
		passiveToolTip =
			"PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Magical Power per stack. Stacks last for 15s and stack up to 5 times. Enemy gods provide 5 stacks.";
	}
	if (item == "Silverbranch Bow") {
		passiveToolTip =
			"PASSIVE - For each 0.02 Attack Speed you go over 2.5 Attack Speed, you gain 3 Physical Power. You can not gain more than 120 Physical Power in this way.";
	}
	if (item == "Demonic Grip") {
		passiveToolTip = "PASSIVE - Your Basic Attacks reduce your target's Magical Protection by 10% for 3s (max 3 Stacks).";
	}
	if (item == "Evolved Gauntlet of Thebes") {
		passiveToolTip = "AURA - Allies within 70 units receive 10 Physical Protection and 10 Magical Protection.";
	}
	if (item == "Gladiator's Shield") {
		passiveToolTip =
			"PASSIVE - When damaging an enemy god with an ability you deal an additional 15 + 25% of your Protections from items and abilities as Physical Damage. Can only trigger once per enemy per ability. Subsequent hits on the same target do half the bonus damage for the next 3s.";
	}
	if (item == "Evolved Prophetic Cloak") {
		passiveToolTip =
			"AURA - Allies within 70 units gain 20 Physical and Magical Protections. PASSIVE - If you have over 325 total Protections, you gain 7.5% Damage Mitigation. If you have over 525 total Protections, you gain an additional 7.5% Damage Mitigation.";
	}
	if (item == "Rod of Tahuti") {
		passiveToolTip = "PASSIVE - Basic Attacks and Abilities gain 15% additional Magical Power against targets below 60% Health.";
	}
	if (item == "Calamitous Rod of Tahuti") {
		passiveToolTip =
			"PASSIVE - Basic Attacks and Abilities gain 15% additional Magical Power against targets below 60% Health. GLYPH - Successfully hitting an enemy god with an ability calls down a meteor that lands after 1s, dealing 100 (+35% of your Magical Power) damage in a 15 unit radius. This effect can only occur once every 15s.";
	}
	if (item == "Soul Gem") {
		passiveToolTip =
			"PASSIVE - On successful hit of an Ability you gain 1 stack. At 3 Stacks your next Ability that damages an enemy God will deal bonus damage equal to 20% of your Magical power to each God hit, and will heal yourself and allies within 20 units for 15 (+5 Per Level) and will consume the 3 stacks.";
	}
	if (item == "Sovereignty") {
		passiveToolTip = "AURA - Allied gods within 70 units have their Physical Protections increased by 15 and their HP5 increased by 25.";
	}
	if (item == "Shogun's Kusari") {
		passiveToolTip = "AURA - Allied gods within 70 units have their Attack Speed increased by 30%.";
	}
	if (item == "Stormseeker") {
		passiveToolTip =
			"PASSIVE - When you hit an enemy god with a Basic Attack, gain a permanent stacking Attack Speed buff. Each stack grants 0.25% Attack Speed for a max of 999 stacks.";
	}
	if (item == "Tablet of Destinies") {
		passiveToolTip =
			"PASSIVE - Your next successful damaging ability on an enemy god grants a stack of Wisdom. For each stack of Wisdom you have, your abilities deal 0.1% of your Max Mana as True Damage to enemy gods. You may only gain one stack and deal damage every 2s, and can only gain stacks once per god per ability hit. Max 70 stacks.";
	}
	if (item == "Qin's Sais") {
		passiveToolTip =
			"PASSIVE - On Basic Attack hits, deal Physical Damage equal to 1.5% of the target's maximum Health. If the target has over 2250 Health, the bonus damage scales up. This effect reaches a maximum of 6% of the targets Maximum Health at 2750 Health.";
	}
	if (item == "Flameforged Hammer") {
		passiveToolTip =
			"PASSIVE - Your next successful Hard CC on an enemy god creates a runic symbol on the ground that lasts for 5s. Enemies in the symbol take 15% more damage. This can only occur once every 15 seconds. <n>GLYPH - Additionally, enemy gods within the rune are burned, dealing 10 + 8% of your Protections from items and abilities as Magical Damage every 1s while inside the rune and for 2s after leaving it. ";
	}
	if (item == "Runebreaking Hammer") {
		passiveToolTip =
			"<n>GLYPH - Your next successful Hard CC on an enemy god creates a 30 unit shockwave around them. Enemies hit by the shockwave deal 15% less damage and take 15% more damage for 3s. This can only occur once every 15s. ";
	}
	if (item == "Void Shield") {
		passiveToolTip = "AURA - Enemy gods within 55 units have their Physical Protection reduced by 10%.";
	}
	if (item == "Berserker's Shield") {
		passiveToolTip =
			"PASSIVE - While below 60% Health you become Berserk for 5s. While Berserk, you gain 5% Damage Mitigation and 20% Attack Speed. This effect can only occur once every 15 seconds.";
	}
	if (item == "Gladiator's Shield") {
		passiveToolTip =
			"PASSIVE - When damaging an enemy god with an ability you deal an additional 15 + 25% of your Protections from items and abilities as Physical Damage. Can only trigger once per enemy per ability. Subsequent hits on the same target do half the bonus damage for the next 3s.";
	}
	if (item == "Phalanx") {
		passiveToolTip =
			"PASSIVE - When you are Basic Attacked by an enemy god, you and friendly lane minions within 40 units gain a stack, up to a max of 3. Stacks provide 10% Attack Speed and 7 of each Protection and last for 8s. Minions gain double the effects from each stack. Stacks cannot be gained more than one per second.";
	}
	if (item == "Contagion") {
		passiveToolTip =
			"AURA - Enemy gods within 55 units have their healing reduced by 25%. This does not stack with similar Auras. PASSIVE - When you are hit by a Hard Crowd Control, the enemy receives an aura that deals 25 Magical Damage per second to them and other enemies within a 25 unit radius for 5s. This aura is refreshed if an enemy applies additional Hard Crowd Control to you within 5s.";
	}
	if (item == "Spectral Armor") {
		passiveToolTip =
			"AURA - Allied gods within 55 units take 40% reduced bonus damage from Physical Critical Strikes. PASSIVE - When you get hit by a Critical Strike, you gain 10 Physical Power and 15 Magical Power, stacking up to 3 times and lasting 6s.";
	}
	if (item == "Breastplate of Regrowth") {
		passiveToolTip =
			"PASSIVE - After healing yourself from an ability, you gain 20% Movement Speed, 15 Physical Power, and 30 Magical Power for 4 seconds. This effect can only occur once every 10 seconds.";
	}
	if (item == "Breastplate of Determination") {
		passiveToolTip =
			"GLYPH - Each time you are hit by an ability, gain a stack of 5 Protections that corresponds to the damage type you were hit with, up to a max of 4 of each type. Once you reach max stacks of both kinds, gain a burst of 20% Movement Speed and double your Protections gained by this effect for 8s, after which all stacks are removed.";
	}
	if (item == "Breastplate of Vigilance") {
		passiveToolTip =
			"GLYPH - When your ultimate ability has finished casting you provide an aura in a 60 unit range around you reducing basic attack damage from enemies by 25% for 5s. This effect may only occur once every 45s.";
	}
	if (item == "Asi") {
		passiveToolTip =
			"PASSIVE - While below 60% Health, you gain an additional 22.5% Physical Lifesteal for 5 seconds.  Can only occur once every 15 seconds.";
	}
	if (item == "Evolved Gauntlet of Thebes") {
		passiveToolTip = "AURA - Allies within 70 units receive 10 Physical Protection and 10 Magical Protection.";
	}
	if (item == "Magi's Cloak") {
		passiveToolTip =
			"PASSIVE - Protects you from a single hard Crowd Control effect once every 70 seconds. When this occurs, you gain 1s of Crowd Control immunity.";
	}
	if (item == "Spirit Robe") {
		passiveToolTip =
			"PASSIVE - You gain an additional 15% Damage Mitigation for 3s whenever you are hit with a hard Crowd Control Effect or Root.  This can only occur once every 15 seconds.";
	}
	if (item == "Mantle of Discord") {
		passiveToolTip =
			"PASSIVE - If you take damage below 30% health you unleash a shockwave that stuns all enemies within a range of 20 units for 1s and become immune to Crowd Control for 1s. This effect cannot trigger more than once every 110s.";
	}
	if (item == "Prophetic Cloak") {
		passiveToolTip =
			"PASSIVE - Once every 8s, when you damage an enemy god with an attack, you gain a stack of 1 Protections in an Aura that corresponds with the damage type of the target. Once you have reached 15 stacks of both Protections, this item Evolves, giving you additional Protections and mitigation based on your total Protections.";
	}
	if (item == "The Ferocious Executioner") {
		passiveToolTip =
			"PASSIVE - Basic Attacks against an enemy reduce your target's Physical Protection by 7% for 3 seconds (max. 4 Stacks). GLYPH - Your next basic attack marks an enemy god for 8s. If you hit the marked enemy or the marked enemy hits you with a basic attack or ability, gain 1 stack. Each stack provides 2% increased damage towards the marked enemy, stacking up to 10 times. This effect can only occur every 30s.";
	}
	if (item == "Magi's Shelter") {
		passiveToolTip =
			"PASSIVE - Protects you from a single hard Crowd Control effect once every 70 seconds. When this occurs, you gain 1s of Crowd Control immunity. <n>GLYPH - Whenever your passive is consumed, the nearest allied god within 40 units gains protection from a single hard Crowd Control effect for 8s. If this passive is consumed before time runs out, they gain 1s of Crowd Control immunity.";
	}
	if (item == "Magi's Revenge") {
		passiveToolTip =
			"PASSIVE - Protects you from a single hard Crowd Control effect once every 70 seconds. When this occurs, you gain 1s of Crowd Control immunity. <n>GLYPH - If an enemy God consumes your passive, they become Marked for Revenge for 5s, causing them to receive 10% more damage and granting allied Gods within 40 units 20% increased Movement Speed towards them.";
	}
	if (item == "Evolved Prophetic Cloak") {
		passiveToolTip =
			"AURA - Allies within 70 units gain 20 Physical and Magical Protections. PASSIVE - If you have over 325 total Protections, you gain 7.5% Damage Mitigation. If you have over 525 total Protections, you gain an additional 7.5% Damage Mitigation.";
	}
	if (item == "Heartward Amulet") {
		passiveToolTip = "AURA - Allied gods within 70 units have their Magical Protections increased by 15 and their MP5 increased by 30.";
	}
	if (item == "Talisman of Energy") {
		passiveToolTip =
			"PASSIVE - Getting a kill or assist on enemies causes you and allies within 70 units to gain stacks of energy. Energy stacks provide 3% Movement Speed, 3% Attack Speed, and 15MP5 per stack. Lasts 10s and stacks up to 4 times. Killing or Assisting an enemy God provides maximum stacks.";
	}
	if (item == "Envenomed Executioner") {
		passiveToolTip =
			"PASSIVE - Basic Attacks against an enemy reduce your target's Physical Protection by 7% for 3s (max. 4 Stacks). <n>GLYPH - Successfully hitting an Enemy God will afflict them with poison for 3s. This poison reduces their healing by 40% and Shields applied on them are reduced by 50%.";
	}
	if (item == "Absolution") {
		passiveToolTip =
			"PASSIVE - When your Ultimate ability has finished casting, you pulse out a cleansing aura within 50 units, providing all allies with CC-immunity for 1.5s and restoring 10% of their max. Mana. This effect can only occur once every 40s.";
	}
	if (item == "Pestilence") {
		passiveToolTip =
			"AURA - Enemy gods within 55 units have their healing reduced by 25%. This does not stack with similar Auras. PASSIVE - Enemies that successfully damage you have their Healing reduced by an additional 5% for 3s. This can stack up to 6 times.";
	}
	if (item == "Amulet of Silence") {
		passiveToolTip =
			"AURA - Allied gods within 70 units have their Magical Protections increased by 15 and their MP5 increased by 30. <n>GLYPH - Gain a stack each time an enemy within 40 units casts an ability. At 3 stacks, your next basic attack against an enemy god will silence them for 1.5s. This effect can only occur every 12s.";
	}
	if (item == "Amulet of the Stronghold") {
		passiveToolTip =
			"AURA - Allied gods within 70 units have their Magical Protections increased by 15 and their MP5 increased by 30. <n>GLYPH - You gain Magical Protections equal to 15% of your Physical Protections.";
	}
	if (item == "Demonic Grip") {
		passiveToolTip = "PASSIVE - Your Basic Attacks reduce your target's Magical Protection by 10% for 3s (max 3 Stacks).";
	}
	if (item == "Hastened Ring") {
		passiveToolTip =
			"PASSIVE - Hitting an enemy God with a Basic Attack grants Haste for 6s, causing you to be immune from Basic Attack Movement Penalty. (Internal Cooldown 25s)";
	}
	if (item == "Cyclopean Ring") {
		passiveToolTip =
			"PASSIVE - Your next basic attack against an enemy god deals bonus Magical Damage equal to 9% of the target's maximum Health. This effect can only occur once every 10s, reduced by 2s for each successful Basic Attack on an enemy god.";
	}
	if (item == "Telkhines Ring") {
		passiveToolTip = "PASSIVE - Your Basic Attacks deal bonus damage of 5 (+3 Per Level). This effect does not hit structures.";
	}
	if (item == "Spear of Desolation") {
		passiveToolTip =
			"PASSIVE - If you receive a kill or assist on an Enemy God all of your non-ultimate cooldowns are reduced by 2 seconds and your ultimate cooldown is reduced by 6 seconds.";
	}
	if (item == "Obsidian Shard") {
		passiveToolTip = "PASSIVE - Your first ability cast gains 20% Magical Penetration. This can only occur once every 10 seconds.";
	}
	if (item == "Divine Ruin") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your abilities have 40% reduced healing for 5 seconds. Your next successful damaging ability on an enemy triggers a chain lightning, damaging the target and up to 4 nearby enemies for 40 damage + 10% of your Magical Power. This can only occur once every 20 seconds.";
	}
	if (item == "Spear of the Magus") {
		passiveToolTip =
			"PASSIVE - Whenever you damage an enemy god with an ability you mark them to take 5% increased damage from all sources. This effect lasts for 8s and can only occur once every 15s.";
	}
	if (item == "Gem of Isolation") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your damaging abilities will move 30% Slower and will have Shields applied on them reduced by 50% for 2.5 seconds. This can only occur once every 5 seconds.";
	}
	if (item == "Ethereal Staff") {
		passiveToolTip =
			"PASSIVE - Whenever you damage an enemy god with an ability you steal 8% maximum mana as well as 6% maximum health from the target. The Stats remain stolen for 45s and targets affected can have multiple Buffs and Debuffs at once. This can only occur once every 15 seconds.";
	}
	if (item == "Warlock's Staff") {
		passiveToolTip =
			"PASSIVE - You permanently gain +3 Health and +0.25 Magical Power per Stack, and receive 1 Stack per 550 Damage Dealt to or taken from minions or 275 Damage Dealt to or taken by gods. At 100 stacks this item Evolves, gaining 10% Magical Penetration.";
	}
	if (item == "Soul Reaver") {
		passiveToolTip =
			"PASSIVE - Your abilities deal an additional 1% of the target's maximum Health as Magical Damage. If the target has over 2000 Health, your ability bonus damage scales up. This effect reaches a maximum of 9% Maximum Health damage at 2750 Health. Subsequent hits on the same target do half the bonus damage for the next 3s.";
	}
	if (item == "Tablet of Destinies") {
		passiveToolTip =
			"PASSIVE - Your next successful damaging ability on an enemy god grants a stack of Wisdom. For each stack of Wisdom you have, your abilities deal 0.1% of your Max Mana as True Damage to enemy gods. You may only gain one stack and deal damage every 2s, and can only gain stacks once per god per ability hit. Max 70 stacks.";
	}
	if (item == "Book of Thoth") {
		passiveToolTip =
			"PASSIVE - You permanently gain 6 Mana per Stack, and receive 1 Stack per 450 Damage Dealt to minions or 225 Damage Dealt to gods. You gain Magical Power equal to 4% of your Mana from items. At 100 stacks this item Evolves, gaining 10 Magical Penetration and increasing the Magical Power gained from Mana to 7%.";
	}
	if (item == "Polynomicon") {
		passiveToolTip =
			"PASSIVE - Using an ability gives your next Basic Attack within the next 8 seconds +75% of your Magical Power as additional Magical Damage. The effect can only apply once every 2 seconds.";
	}
	if (item == "Evolved Book of Thoth") {
		passiveToolTip = "PASSIVE - You gain Magical Power equal to 7% of your Mana from items.";
	}
	if (item == "Cursed Orb") {
		passiveToolTip =
			"PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Magical Power per stack. Stacks last for 10s and stack up to 4 times. Enemy gods provide 4 stacks.";
	}
	if (item == "Rod of Tahuti") {
		passiveToolTip = "PASSIVE - Basic Attacks and Abilities gain 15% additional Magical Power against targets below 60% Health.";
	}
	if (item == "Chronos' Pendant") {
		passiveToolTip =
			"PASSIVE - Every 10s the Pendant activates, subtracting 1s from all of your abilities currently on Cooldown. The initial countdown will not start until you leave the fountain.";
	}
	if (item == "Doom Orb") {
		passiveToolTip =
			"PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 4 Magical Power per stack. Stacks last for 15s and stack up to 5 times. Enemy gods provide 5 stacks.";
	}
	if (item == "Charon's Coin") {
		passiveToolTip =
			"PASSIVE - On god kill or assist a coin is flipped. If heads, you gain a stack of 7 HP5. If tails, you gain a stack of 2% Movement Speed. Each effect can stack up to 4 times and at 8 stacks this item evolves. You also gain 1 gold every time the coin is flipped.";
	}
	if (item == "Evolved Charon's Coin") {
		passiveToolTip =
			"PASSIVE - On god kill or assist a coin is flipped. If heads, you gain 150 Health over 6 seconds. If tails, you gain 5% Movement Speed for 6 seconds. You also gain 1 gold every time the coin is flipped.";
	}
	if (item == "Calamitous Rod of Tahuti") {
		passiveToolTip =
			"PASSIVE - Basic Attacks and Abilities gain 15% additional Magical Power against targets below 60% Health. <n>GLYPH - Successfully hitting an enemy god with an ability calls down a meteor that lands after 1s, dealing 100 (+35% of your Magical Power) damage in a 15 unit radius. This effect can only occur once every 15s.";
	}
	if (item == "Perfected Rod of Tahuti") {
		passiveToolTip =
			"PASSIVE - Basic Attacks and Abilities gain 15% additional Magical Power against targets below 60% Health. <n>GLYPH - Successfully damaging an enemy god with an ability applies a mark for 3s. Damaging them a second time with an ability consumes the mark and provides you 10% movement speed for 3s and reduces your ability cooldowns by 1.5s. Only one mark can be active at a time and cannot be applied for 6s after consuming a mark. ";
	}
	if (item == "Sovereignty") {
		passiveToolTip = "AURA - Allied gods within 70 units have their Physical Protections increased by 15 and their HP5 increased by 25.";
	}
	if (item == "Charged Bow") {
		passiveToolTip =
			"PASSIVE -Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 15 damage +30% of your total Basic Attack Power.";
	}
	if (item == "Odysseus' Bow") {
		passiveToolTip =
			"PASSIVE - Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 15 damage +60% of your total Basic Attack Power.";
	}
	if (item == "Silverbranch Bow") {
		passiveToolTip =
			"PASSIVE - For each 0.02 Attack Speed you go over 2.5 Attack Speed, you gain 3 Physical Power. You can not gain more than 120 Physical Power in this way.";
	}
	if (item == "Atalanta's Bow") {
		passiveToolTip =
			"PASSIVE - Upon getting a kill or assist on an Enemy god you gain Atalanta's Agility for 10s. This effect increases your Attack Speed by 20% and decreases the Movement Penalty for attacking, backpedaling, and strafing by 30%.";
	}
	if (item == "Emerald Talisman") {
		passiveToolTip = "PASSIVE - Regenerates 0.2% of your max. Health every second.";
	}
	if (item == "Stone of Gaia") {
		passiveToolTip =
			"PASSIVE - If you are hit by a Knockup, Knockback, Pull, or Grab you gain 7% of your max Health over the next 5 seconds, as well as 15 Physical Power and 25 Magical Power while this regeneration is in effect. This effect does not trigger on Vortexes. Can only occur once every 15s. PASSIVE - Regenerates 0.4% of your max health every second.";
	}
	if (item == "Gauntlet of Thebes") {
		passiveToolTip =
			"PASSIVE - Assists on a minion give 1 Stack and God kills and assists give 5 Stacks. Stacks provide 1 Physical and Magical Protection. At 45 Stacks this item evolves, providing an Aura of 10 Physical Protection and 10 Magical Protection.";
	}
	if (item == "Mail of Renewal") {
		passiveToolTip =
			"PASSIVE - When you are hit by an enemy god you gain a stack, up to once a second, increasing your protections by 5. Max of 4 stacks, lasts for 5s each. At max stacks, upon being hit you are immediately healed for 10% of your maximum health. Allies within 35 units heal for 10% of their maximum health over 5s. This effect can only occur once every 45 seconds.";
	}
	if (item == "Cannoneer's Cuirass") {
		passiveToolTip =
			"PASSIVE - Your next successful basic attack on an enemy lane minion causes it to explode, instantly killing it, dealing 50 (+10 Per Level) magical damage to enemies in a small area and providing 15 bonus gold to your nearest ally within 80 ft. This can only happen once every 7s.";
	}
	if (item == "Katana") {
		passiveToolTip = "This item and all upgrades are only available to Assassins and Warriors.";
	}
	if (item == "Hastened Katana") {
		passiveToolTip =
			"PASSIVE - Hitting an enemy with a Basic Attack grants Haste for 1s, causing you to be immune from Basic Attack Movement Penalty.";
	}
	if (item == "Golden Blade") {
		passiveToolTip =
			"PASSIVE - All Basic Attacks will also hit enemies within a 15 unit radius of the target for 50% of the damage to Gods, Minions and Jungle Camps.";
	}
	if (item == "Shadowdrinker") {
		passiveToolTip =
			"PASSIVE - Killing an enemy god drains their shadow, causing you to enter stealth and gain 30% Movement Speed for 5s. Taking damage, firing an Ability, or firing a Basic Attack breaks the stealth.";
	}
	if (item == "Serrated Edge") {
		passiveToolTip =
			"PASSIVE - For every non-ultimate ability on cooldown you gain a stack of Cruelty. Each stack provides 7 Physical Power and 3% Physical Lifesteal.";
	}
	if (item == "Void Doumaru") {
		passiveToolTip = "AURA - Enemy gods within 55 units have their Magical Protection reduced by 10%.";
	}
	if (item == "Genji's Guard") {
		passiveToolTip =
			"PASSIVE - When you take Magical Damage from Abilities your cooldowns are reduced by 3s. This can only occur once every 30s.";
	}
	if (item == "Oni Hunter's Garb") {
		passiveToolTip = "PASSIVE - For each enemy God within 55 units of you, you gain a stack of 4% Damage Mitigation. This caps at 3 stacks.";
	}
	if (item == "Shogun's Kusari") {
		passiveToolTip = "AURA - Allied gods within 70 units have their Attack Speed increased by 30%.";
	}
	if (item == "Stone of Binding") {
		passiveToolTip =
			"PASSIVE - Successfully hitting an enemy god with a Crowd Control ability will place a debuff on them, reducing their Physical and Magical Protections by 0.8 * your level for 5s.";
	}
	if (item == "Archdruid's Fury") {
		passiveToolTip =
			"PASSIVE - Gain a stack (up to a max of 6) each time you take damage from enemy gods equal to 5% of your maximum Health. Your next basic attack on an enemy god consumes all stacks and deals 30 (+ 2 Per Level) Magical Damage per stack. This effect can only occur once every 10 seconds.";
	}
	if (item == "Abyssal Stone") {
		passiveToolTip =
			"PASSIVE - Successful ability damage to an enemy god applies a debuff that afflicts them with 20% Negative CDR for 5s. This can only occur once every 5s.";
	}
	if (item == "Erosion") {
		passiveToolTip =
			"PASSIVE - Every time an enemy within 40 units gains a shield, you gain 15% Movement Speed for 4s. This effect can only occur once every 10s. AURA - Any Shields applied on enemy gods within 55 units will be reduced by 30%.";
	}
	if (item == "Fighter's Mask") {
		passiveToolTip =
			"PASSIVE - Increase Damage Dealt by 6% + 0.25% per your god level. Increase Damage Taken by 6% + 0.25% per your god's level. PASSIVE - This item grants 2 MP5 per 10% of your missing Mana. Your abilities deal +10 Bonus Ability True Damage to minions. Can be upgraded at level 20.";
	}
	if (item == "Rangda's Mask") {
		passiveToolTip =
			"Gain 5 stacks of Weakness. Each stack increases your damage taken by 10%. For each 40 Physical Power or 60 Magical Power from items, remove a stack of Weakness. When you remove a stack of <font color='#F44242'>Weakness  gain a stack of <font color='#42F46E'>Strength. For each stack of <font color='#42F46E'>Strength gain +3% damage dealt and 2% movement speed.";
	}
	if (item == "Pridwen") {
		passiveToolTip =
			"PASSIVE - When your Ultimate ability has finished casting, you gain a Shield equal to 90% of your Protections from items and abilities for 5s. When destroyed, by timing out or being depleted, it explodes in a 30 unit radius and deals Magical damage equal to 75% of your Protections from items and abilities and slows targets by 25% for 3s. This can only occur once every 45 seconds.";
	}
	if (item == "Arondight") {
		passiveToolTip =
			"PASSIVE - When your Ultimate ability has finished casting, reveal all enemy gods within 120 units for 8s. While moving towards revealed enemies gain 20% Movement Speed. When first striking a revealed target they take an additional 20 + 50% of your Physical Power. This can only occur once every 45 seconds. This item is only available to Assassins and Warriors.";
	}
	if (item == "Fail-not") {
		passiveToolTip =
			"PASSIVE - When your Ultimate ability has finished casting, your next ability or basic attack within 8s that damages an enemy god marks them, increasing the chance you and your allies can land a Critical Strike by 20% for 10 seconds. This can only occur once every 45 seconds. This item is only available to Hunters.";
	}
	if (item == "Staff of Myrddin") {
		passiveToolTip =
			"PASSIVE - When your ultimate ability has finished casting you gain Myrddin's Rage which provides 15% Increased Damage Dealt decaying over 8s. At the end of the 8s you lose Myrddin's Rage. This can only occur once every 45s.";
	}
	if (item == "Glorious Pridwen") {
		passiveToolTip =
			"<n>GLYPH - When your Ultimate ability has finished casting, you create an explosion, dealing 65% of your Protections from items and abilities as Magical Damage and slowing targets by 25% for 3s in a 30 unit radius. Then you gain a Shield equal to 90% of your Protections from items and abilities for 5s. When destroyed, by timing out or being depleted, you explode again. This can only occur once every 45 seconds. ";
	}
	if (item == "Reverent Pridwen") {
		passiveToolTip =
			"<n>GLYPH - When your Ultimate ability has finished casting, you gain a Shield equal to 200% of your Protections from items and abilities for 5s. When destroyed, by timing out or being depleted, it explodes in a 30 unit radius and deals Magical damage equal to 75% of your Protections from items and abilities and slows targets by 25% for 3s. This can only occur once every 45 seconds.";
	}
	if (item == "Mystical Mail") {
		passiveToolTip = "AURA - ALL enemies within 25 units are dealt 20 (+1.5 Per Level) Magical Damage per second.";
	}
	if (item == "Titan's Bane") {
		passiveToolTip = "PASSIVE - Your first ability cast gains 20% Physical Penetration. This can only occur once every 6 seconds.";
	}
	if (item == "Magic Acorn") {
		passiveToolTip = "This item can be upgraded from anywhere. Ratatoskr can only have 1 Acorn item.";
	}
	if (item == "Lively Acorn") {
		passiveToolTip = "PASSIVE: When Ratatoskr deals damage with an ability he restores 2% of his Maximum Health.";
	}
	if (item == "Bristlebush Acorn") {
		passiveToolTip =
			"PASSIVE: Dart deals 40% increased damage and can Critically Strike. When Dart damages an enemy Ratatoskr gains 22.5% Physical Lifesteal and 20% Basic Attack damage for 6s.";
	}
	if (item == "Thistlethorn Acorn") {
		passiveToolTip =
			"PASSIVE: Enemies hit by Acorn Blast are debuffed, taking 5% additional damage from Ratatoskr's abilities, stacking up to 3 times. Acorn Blast now fires 5 Acorns.";
	}
	if (item == "Evergreen Acorn") {
		passiveToolTip = "PASSIVE: When Ratatoskr deals damage to an enemy god with an ability he restores 5% of his Maximum Health and Mana.";
	}
	if (item == "Thickbark Acorn") {
		passiveToolTip =
			"PASSIVE: When Ratatoskr deals damage with an ability he restores 2% of his Maximum Health. Flurry now provides protections equal to the protections shred from enemy gods. Flurry gains an additional charge.";
	}
	if (item == "Death's Toll") {
		passiveToolTip =
			"PASSIVE - Hitting an enemy with a Basic Attack restores 2 Health (+0.3% of your Maximum Health) and 1 Mana (+1% of your Maximum Mana). Basic Attacks that deal damage in an AoE restore less health (75% for Melee Attacks, 50% for Ranged Attacks) for each enemy hit after the first. Can be upgraded at level 20.";
	}
	if (item == "Death's Embrace") {
		passiveToolTip =
			"PASSIVE - Hitting an enemy with a Basic Attack restores 1.4% of your Health, 2% of your Mana and reduces your active non-Ultimate Cooldowns by 0.33s. Basic Attacks that deal damage in an AoE restore less health (75% for Melee Attacks, 50% for Ranged Attacks) for each enemy hit after the first and only count once for the Cooldown reduction effect.";
	}
	if (item == "Death's Temper") {
		passiveToolTip =
			"PASSIVE - When an enemy dies within 80 units of you gain 1 stack of Temper that provides 3.5% increased Basic Attack Damage for 10s. This can stack up to 10 times. If an enemy god dies near you immediately gain 10 stacks.";
	}
	if (item == "Gilded Arrow") {
		passiveToolTip =
			"PASSIVE - Every 10s the highest health enemy minion or jungle monster within 80 units of you is marked. If you secure the killing blow on that target you gain 4 bonus gold and 25% attack speed for 8s, and restore 30 Mana. Can be upgraded at level 20.";
	}
	if (item == "Diamond Arrow") {
		passiveToolTip =
			"PASSIVE - When you kill an enemy you gain 7 gold and 25% Attack Speed for 8s. This can stack up to 3 times. If you kill an enemy god you gain 3 stacks and 21 gold immediately.";
	}
	if (item == "Ornate Arrow") {
		passiveToolTip =
			"PASSIVE - All sources of gold gain are increased by 5%. For every 100 gold you have gain 1.25% Attack Speed and 1% Physical Critical Strike Chance, up to a maximum of 20 stacks.";
	}
	if (item == "Warrior's Axe") {
		passiveToolTip =
			"PASSIVE - Damaging an enemy god deals 30  (+1.5 per level) damage and restores 30 (+1.5 per level) Health and Mana. This effect can only occur once every 10s. Can be upgraded at level 20.";
	}
	if (item == "Sundering Axe") {
		passiveToolTip =
			"PASSIVE - Damaging an enemy god steals 3% (+2% of your Protection from items) of their Current Health away from your target and restores it to you. This effect can only occur once every 10s.";
	}
	if (item == "Axe of Animosity") {
		passiveToolTip =
			"PASSIVE - Your Basic Attacks deal bonus damage equal to 2.5% of your Maximum Health as Magical Damage to enemies and structures.";
	}
	if (item == "Manikin Scepter") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your Basic Attacks are burned, taking 16 Physical Damage (+7% of your Physical and Magical Power) over 2s and have their Attack Speed reduced by 4.5%. Gods take 50% damage. Jungle Monsters take 4x the amount of damage and restore 2.5% Health and 5% Mana when they die if they are burned. This effect can stack up to 3 times. Can be upgraded at level 20.";
	}
	if (item == "Manikin Mace") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your Basic Attacks are burned, taking 60 physical damage over 2s and have their Attack Speed slowed by 10%. Jungle Monsters and Bosses take 4x damage and restore 2.5% Health and 5% Mana when they die if they are burned. This effect can stack up to 4 times.";
	}
	if (item == "Manikin Hidden Blade") {
		passiveToolTip =
			"PASSIVE - If you have not taken or dealt damage in the last 5s and hit an enemy god, Jungle Monster, or Jungle Boss, they immediately take 20% of their Current Health as Physical Damage and are slowed by 25% for 3s.";
	}
	if (item == "The Crusher") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your damaging Abilities take bonus damage equal to an additional 30% of your Physical Power over 1s. Subsequent hits on the same target do half the bonus damage for the next 3s.";
	}
	if (item == "Bumba's Dagger") {
		passiveToolTip =
			"PASSIVE - Your Basic Attacks deal +25 True Damage and your Abilities deal +35% Damage versus Jungle Monsters. When you kill a Jungle Monster you are restored for 10% of the Monster's Health and 25 Mana. Can be upgraded at level 20.";
	}
	if (item == "Bumba's Spear") {
		passiveToolTip =
			"PASSIVE - Your Basic Attacks deal +50 True Damage and your Abilities deal +35% damage against Jungle Camps, Structures, and Jungle Bosses. When you kill any of these you gain a 10% power buff for 30s and are healed for 8% of their Health, 10% of your Mana.";
	}
	if (item == "Bumba's Hammer") {
		passiveToolTip =
			"PASSIVE - After casting an ability your next Basic Attack deals an additional 70 True Damage. After hitting a Basic Attack empowered by Bumbaâ€™s Hammer, your active cooldowns are reduced by 0.5s and you are healed for 80 Health.";
	}
	if (item == "Sands of Time") {
		passiveToolTip =
			"PASSIVE - This item grants 2 MP5 per 10% of your missing Mana. Your damaging abilities deal an extra 15 true damage to minions. Can be upgraded at level 20.";
	}
	if (item == "Pendulum of Ages") {
		passiveToolTip =
			"PASSIVE - This item grants 4 MP5 per 10% of your missing Mana. This item grants 7 Magical power per 10% of your available Mana.";
	}
	if (item == "The Alternate Timeline") {
		passiveToolTip =
			"PASSIVE - When you would die you instead find a timeline you are still alive, becoming CC Immune, Damage Immune, and unable to act. After 1.75s you are restored to 40% Health and Mana and can act again. This can only occur once every 6 minutes.";
	}
	if (item == "Sentinel's Gift") {
		passiveToolTip =
			"PASSIVE - Getting the assist for an enemy minion or jungle monster dying will provide 8 Bonus gold and restore 12 Health and 8 Mana. If you are not within 30 units of an allied god for 20 seconds this passive is disabled until you are near an allied god again. Can be upgraded at level 15.";
	}
	if (item == "Sentinel's Boon") {
		passiveToolTip =
			"PASSIVE - Getting the assist when an enemy dies restores 4% of your Health and 4% of your Mana. If you have the lowest gold on your team, the assists also provides 20 Bonus Gold.";
	}
	if (item == "Sentinel's Embrace") {
		passiveToolTip =
			"AURA - You gain 8 GP5 if you have the lowest gold on your team. Evenly split 60 Physical and Magical Protection among all allied gods within 55 units and yourself. If you are alone you only gain 30 Physical and Magical Protections.";
	}
	if (item == "Benevolence") {
		passiveToolTip =
			"PASSIVE - While not near an ally god you gain 1 stack of Benevolence every second, up to a maximum of 50. Assists provide 4 stacks. While within 70 units of a hurt ally god you use up to 5 stacks a second to heal them and yourself for 0.6% of your Maximum Health. Each stack consumed provides you with 1 gold. If you overcap stacks they will still provide gold as long as you are near an ally god. Can be upgraded at level 15.";
	}
	if (item == "Brawler's Beat Stick") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your Abilities have 40% reduced healing for 5 seconds. Getting a kill or assist on an enemy god creates a field that lasts 10s, providing allies within it 20 Power + 2 Per level. This effect can only occur once every 10 seconds.";
	}
	if (item == "Compassion") {
		passiveToolTip =
			"AURA - You gain 8 GP5 if you have the lowest gold on your team. Damage taken by allied gods within 70 units of you is reduced by 12%, up to a maximum of 100 damage. The reduced damage is redirected to you as Magical Damage. If you would die from this damage it does not get reduced or redirected.";
	}
	if (item == "Heroism") {
		passiveToolTip =
			"PASSIVE - You gain 8 GP5 if you have the lowest gold on your team. When an ally god within 55 units of you is hit by a hard crowd control effect, give them a shield equal to 15% of your Maximum Health. This effect can only occur once every 15s.";
	}
	if (item == "Tainted Steel") {
		passiveToolTip =
			"PASSIVE - Enemy Gods that you hit have their healing taken reduced by 20% for 5s. You are healed for 120% of the healing reduced. Can be upgraded at level 20.";
	}
	if (item == "Tainted Amulet") {
		passiveToolTip =
			"PASSIVE - Enemy Gods that you hit have their healing taken reduced by 30% for 5s. You are healed for 120% of the healing reduced. ";
	}
	if (item == "Tainted Breastplate") {
		passiveToolTip = "PASSIVE - Enemy gods that you hit have their healing taken reduced by 50% for 5s.";
	}
	if (item == "Conduit Gem") {
		passiveToolTip =
			"PASSIVE - Every second you gain a stack of Arcane Energy, causing your next damaging ability to deal an additional 2 True Damage and remove all stacks. Also deals an additional 2 true damage per stack to minions. This effect stacks up to 20 times. Can be upgraded at level 20.";
	}
	if (item == "Archmage's Gem") {
		passiveToolTip =
			"PASSIVE - Every 1s you gain a stack of Demise, causing your next damaging ability that hits an enemy god deals an additional 1.5% of your Magical Power in damage and remove all stacks. This effect stacks up to 20 times.";
	}
	if (item == "Gem of Focus") {
		passiveToolTip =
			"PASSIVE - Every time you cast an ability that costs mana you gain a stack of Focus for 10s, providing 5% Movement Speed and 5% Damage Increase, stacking up to 3 times.";
	}
	if (item == "Eye of the Jungle") {
		passiveToolTip =
			"PASSIVE - You deal 30% increased damage to Jungle Monsters. Upon defeating a Large Jungle Monster you place a ward at its location that lasts for 30 seconds. While in the jungle you gain +20 HP5 and +15 MP5 Can be upgraded at level 20.";
	}
	if (item == "Seer of the Jungle") {
		passiveToolTip =
			"PASSIVE - You deal 35% increased damage to Jungle Monsters and Jungle Bosses. Upon defeating a Large Jungle Monster or Jungle Boss, you gain the ability to see wards for 30s.";
	}
	if (item == "Jotunn's Cunning") {
		passiveToolTip =
			"<n>GLYPH - Every time you damage an enemy god with an ability you gain a stack of Wit. When you have a stack, your next non-ultimate ability that damages an enemy god gets 20% of its cooldown instantly refunded. After triggering this effect, all stacks are removed and you cannot gain stacks for 5s.";
	}
	if (item == "Protector of the Jungle") {
		passiveToolTip = "PASSIVE - While in the jungle you gain 15% Power and 7% Protections. ";
	}
	if (item == "Warding Sigil") {
		passiveToolTip =
			"PASSIVE - When you are hit by an ability you gain a stack of Dampening, gaining 5 Protections for 5s and healing for 1% of your Max Health. This occurs only once per ability cast. This can stack twice. Can be upgraded at level 20.";
	}
	if (item == "Sigil of The Old Guard") {
		passiveToolTip =
			"PASSIVE - You gain 3% Damage Mitigation. Whenever you are hit by an ability you gain a stack of Rebuke, providing an additional 3% Damage Mitigation for 8s and healing for 1% of your Max Health. This occurs only once per ability cast. This can stack up to three times. ";
	}
	if (item == "Infused Sigil") {
		passiveToolTip =
			"PASSIVE - When you are hit by an ability the Infused Sigil gains a stack. This can occur only once per ability cast. At 4 stacks it explodes after 0.5s, dealing 600 Physical Damage to enemies within 30 units of you. ";
	}
	if (item == "Jotunn's Vigor") {
		passiveToolTip =
			"GLYPH - If you drop beneath 60% health, gain 15% Movement Speed and 30% Physical Ability Lifesteal for 8s. This effect may only occur once every 15s.";
	}
	if (item == "Protector's Mask") {
		passiveToolTip =
			"PASSIVE - <font color='#F44242'>Decrease damage dealt by 6% + 0.25% per your god's level. <font color='#42F46E'>Decrease Damage Taken by 6% + 0.25% per your god's level. PASSIVE - Getting the assist for an enemy minion or jungle monster dying will provide 8 bonus gold and restore 12 health and 15 mana. If you are not within 30 units of an allied god for 20 seconds this passive is disabled until you are near an allied god again. <n>Can be upgraded at level 15.";
	}
	if (item == "Lono's Mask") {
		passiveToolTip =
			"Gain 6 GP5 if you have the lowest gold on your team. Gain 5 stacks of <font color='#F44242'>Cowardice. Each stack reduces your damage dealt and healing output by 10%. For each 45 protections from items, remove a stack of <font color='#F44242'>Cowardice. When you remove a stack of <font color='#F44242'>Cowardice gain a stack of <font color='#42F46E'> Bravery. For each stack of <font color='#42F46E'>Bravery, gain +2% Damage Mitigation and provide 4 Physical and Magical Protections to all allied gods within 55 units.";
	}
	if (item == "Fae-Blessed Hoops") {
		passiveToolTip =
			"PASSIVE - Each time an allied god dies within 70 units of you or you heal an allied god with an ability, a flower drops from your ally that can be picked up by you or an allied god. After healing with an ability, you cannot drop more flowers this way for 10s. Picking up the flower gives that god a shield equal to 5% of their Max HP that lasts for 8s. Flowers last 7s on ground. Picking up a new flower refreshes shield.";
	}
	if (item == "Sphinx's Baubles") {
		passiveToolTip =
			"PASSIVE - Your Cooldown Reduction cap is increased from 40% to 50%. Your Physical and Magical Protections are reduced by 10%, and your healing output is decreased by 20%.";
	}
	if (item == "Manticore's Spikes") {
		passiveToolTip =
			"PASSIVE - When you hit an enemy god with Hard Crowd Control, they drop Spikes on the ground that lasts for 7s. When you or an allied god pick up a Spike, they gain a buff that causes their next ability to deal bonus Magic damage equal to 3% of their own Max HP. This effect lasts 15s and is doubled if you are the one who picks up the Spike.";
	}
	if (item == "Griffonwing Earrings") {
		passiveToolTip = "PASSIVE - Your Basic Attack projectile speed is increased by 40%. This item is only available to Hunters and Mages.";
	}
	if (item == "Hydra's Star") {
		passiveToolTip =
			"PASSIVE - For 8 seconds after using an ability, your next basic attack will deal an additional 10% damage. The effect can only occur every 3 seconds.";
	}
	if (item == "Bluestone Pendant") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your damaging Abilities take an additional 40 Physical Damage over 2s. Subsequent hits on the same target do half the bonus damage for the next 3s. Can be upgraded at level 20.";
	}
	if (item == "Bluestone Brooch") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your damaging abilities take an additional 160 Physical Damage over 2s. Enemy gods take an additional 10% of their Current Health as Physical Damage over 2s. Subsequent hits on the same target do half the bonus damage for the next 3s.";
	}
	if (item == "Corrupted Bluestone") {
		passiveToolTip =
			"PASSIVE - Enemies hit by your damaging Abilities are corrupted, taking 300 Physical Damage over 6s and reducing their Attack Speed by 10%. Subsequent hits on the same target do half the bonus damage for the next 3s. Each time you apply corruption you gain 10% Attack Speed and 5% increased Protections for 6s, up to a maximum of 5 stacks.";
	}
	if (item == "Midgardian Mail") {
		passiveToolTip =
			"PASSIVE - Enemies that successfully land a basic attack  on you have their Movement Speed and Attack Speed reduced by 8% for 3 seconds. This effect can stack up to 4 times and can stack with other item slow effects.";
	}
	if (item == "Hydra's Lament") {
		passiveToolTip =
			"PASSIVE - For 8s after using an ability, your next Basic Attack will deal an additional 30% damage. Abilities that function like basic attacks do not benefit from this. PASSIVE - This item grants 2.5 MP5 per 10% of your missing Mana.";
	}
	if (item == "War Flag") {
		passiveToolTip =
			"PASSIVE - Getting the assist for an enemy minion or jungle monster dying will provide 8 Bonus gold and restore 8 Health and 5 Mana. You and nearby allied gods also receive a stack that gives 1% Movement Speed and 2% Attack Speed for 10s to nearby allies up to 10 stacks. Can be upgraded at level 15.";
	}
	if (item == "Spartan Flag") {
		passiveToolTip =
			"PASSIVE - You gain 8 GP5 if you have the lowest gold on your team. When you damage an enemy god you call down a Spartan Flag at your location, providing 10% increased Power and 15% Attack Speed to allies standing in the radius. Lasts for 10s, can only occur once every 10s. ";
	}
	if (item == "War Banner") {
		passiveToolTip =
			"PASSIVE - You gain 8 GP5 if you have the lowest gold on your team. Getting an assist for an enemy dying provides a stack that provides 2% Movement Speed and 4% Attack Speed for 10s to nearby allies up to 10 stacks. When you've gained 4 or more stacks from assists, once per ability, each time you damage an enemy god you restore 1% Health and 1.25% Mana to nearby allies within 55 units and refresh the duration of these stacks.";
	}
	if (item == "Rod of Asclepius") {
		passiveToolTip = "PASSIVE - Healing Dealt is increased by 30%. AURA - Allied gods within 30 units have 10% increased Cooldown Reduction.";
	}
	if (item == "Heartseeker") {
		passiveToolTip =
			"PASSIVE - Your abilities deal an additional 2% of the targets maximum Health as Physical Damage. If you have over 150 Physical Power, your ability bonus damage scales up. This effect reaches a maximum of 6% Maximum Health damage at 250 Physical Power. Subsequent hits on the same target do 75% of the bonus damage for the next 3s.";
	}
	if (item == "Last Gasp") {
		passiveToolTip =
			"PASSIVE - After healing an allied god with an ability you gain 10 Magical Power per 10% of their missing Health for 8s. This effect can only occur once every 8s.";
	}
	if (item == "Rejuvenating Heart") {
		passiveToolTip = "PASSIVE - Lifestealing off of enemy gods heals yourself and nearby allies within 40 units of you by 33% of that healing.";
	}
	if (item == "Caduceus Club") {
		passiveToolTip =
			"PASSIVE - Healing Dealt is increased by 30%. AURA - Allied gods within 70 units have 10% increased Crowd Control Reduction and 3% Movement Speed.";
	}
	if (item == "Vital Amplifier") {
		passiveToolTip =
			"PASSIVE - After healing yourself or an allied god with an ability you gain 10% Attack Speed and 5% Basic Attack Damage for 6s, stacking 3 times.";
	}
	if (item == "Sekhmet's Scepter") {
		passiveToolTip =
			"PASSIVE - After healing yourself or an allied god with an ability, for the next 5s each time you damage an enemy god your non-ultimate abilities' cooldowns are reduced by 1s. This reduction can only occur once per second and the effect may only occur once every 12s";
	}
	if (item == "Dominance") {
		passiveToolTip = "PASSIVE - Your Basic Attacks benefit from an additional 20% Physical Penetration.";
	}
	if (item == "Transcendence") {
		passiveToolTip =
			"PASSIVE - You permanently gain 15 Mana per Stack, and receive 1 Stack per 700 Damage Dealt to minions or 350 Damage Dealt to gods. You gain Physical Power equal to 2% of your Maximum Mana. At 50 stacks this item Evolves, gaining 10 Physical Penetration.";
	}
	if (item == "Bewitched Dagger") {
		passiveToolTip =
			"PASSIVE - Your relics receive 50s Cooldown Reduction. <n>GLYPH - All enemy gods have 25% reduced Attack Speed in a 55 unit radius around you. ";
	}
	if (item == "Devourer's Gauntlet") {
		passiveToolTip =
			"PASSIVE - You permanently gain 0.4 Physical Power, 0.2 Physical Penetration, and 0.15% Physical Lifesteal per Stack, and receive 1 Stack per 600 Damage Dealt to minions or 300 Damage Dealt to gods. At 50 stacks this item Evolves, gaining 5 Physical Penetration.";
	}
	if (item == "Soul Eater") {
		passiveToolTip =
			"PASSIVE - Your abilities heal you for 4% of damage dealt. Each time anything dies within 80 units you gain a stack. Gods, Large Jungle monsters and Bosses provide 5 stacks. At 100 Stacks Soul Eater Evolves, gaining 15 Physical Power, 6% Physical Lifesteal, and 11% Physical Ability Lifesteal.";
	}
	if (item == "Bloodforge") {
		passiveToolTip =
			"PASSIVE - Killing an enemy god forges a shield from their blood with Health equal to 200 + 10 per Player Level for 20s. While the Blood Shield is active you gain +10% Movement Speed.";
	}
	if (item == "Crimson Claws") {
		passiveToolTip =
			"PASSIVE - Lifestealing from enemies while at full Health grants you the value healed as a Shield, which may not exceed 15% of your Maximum Health.";
	}
	if (item == "Evolved Soul Eater") {
		passiveToolTip = "PASSIVE - Your abilities heal you for 15% of the damage dealt to targets.";
	}
	if (item == "Eldritch Dagger") {
		passiveToolTip =
			"PASSIVE - Your relics receive 50s Cooldown Reduction. <n>GLYPH - When you activate a relic, your Protections are increased by 15% and you gain the ability to see wards for 20s. ";
	}
	if (item == "Soul Gem") {
		passiveToolTip =
			"PASSIVE - On successful hit of an Ability you gain 1 stack. At 3 Stacks your next Ability that damages an enemy God will deal bonus damage equal to 20% of your Magical power to each God hit, and will heal yourself and allies within 20 units for 15 (+5 Per Level) and will consume the 3 stacks.";
	}
	if (item == "Bancroft's Talon") {
		passiveToolTip =
			"PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 70 power and 15% Lifesteal at 40% Health.";
	}
	if (item == "Typhon's Fang") {
		passiveToolTip =
			"PASSIVE - Your Healing obtained from Magical Lifesteal is increased by 15%. Your Magical power is increased by 1.5x the amount of Magical Lifesteal you have.";
	}
	if (item == "Pythagorem's Piece") {
		passiveToolTip =
			"AURA - Allied gods within 70 units have their Magical Lifesteal increased by 9% and their Magical Power increased by 15 or their Physical Lifesteal increased by 9% and their Physical Power increased by 15.";
	}
	if (item == "Bancroft's Claw") {
		passiveToolTip =
			"PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 70 power and 15% Lifesteal at 40% Health. <n>GLYPH - Every 15s gain a stack of Hunger(max 3). Abilities cast within 30 units of enemy gods consume a stack, dealing bonus damage equal to 0.5% of their max HP for each 75 Magical Power you have. Each god damaged by Hunger provides you with a shield of 0.5% of your Max HP for each 75 Magical Power you have. This cannot exceed 35% of your Max HP. ";
	}
	if (item == "Nimble Bancroft's Talon") {
		passiveToolTip =
			"PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 70 power and 15% Lifesteal at 40% Health. <n>GLYPH - For every 30 Magical Power you have, you gain 2% Attack Speed. ";
	}
	if (item == "Vampiric Shroud") {
		passiveToolTip =
			"PASSIVE - Damaging any enemy with an ability restores 2 health and 6 mana. Can only trigger once per target per ability. Can be upgraded at level 20.";
	}
	if (item == "Blood-soaked Shroud") {
		passiveToolTip = "PASSIVE - Damaging any enemy with an ability restores 1% Health and Mana. Can only trigger once per target per ability.";
	}
	if (item == "Sacrificial Shroud") {
		passiveToolTip =
			"PASSIVE - Your abilities deal 15% more damage, but cost 3% of your Maximum Health. If the cost would kill you, you instead don't pay the cost.";
	}
	if (item == "Leather Cowl") {
		passiveToolTip =
			"PASSIVE - While you are within 55 units of an allied god you gain 10% Attack Speed. If you are alone you instead gain 5% Movement Speed. Can be upgraded at level 20.";
	}
	if (item == "Hunter's Cowl") {
		passiveToolTip =
			"AURA - While you are within 55 units of an allied god you gain 20% Attack Speed Aura. If you are alone you instead gain 10% Movement Speed.";
	}
	if (item == "Leader's Cowl") {
		passiveToolTip =
			"AURA - You provide 5% increased Power to all nearby allied gods. This aura gains a bonus stack for each ally god within 55 units causing it to provide an additional 3% increased Power. For each enemy god within 55 units a stack is removed.";
	}
	if (item == "Emperor's Armor") {
		passiveToolTip =
			"AURA - Damageable enemy structures within 55 units have their Attack Speed reduced by 30%. Damageable allied structures within 55 units have their Attack Speed increased by 30%.";
	}
	if (item == "Evolved Transcendence") {
		passiveToolTip = "PASSIVE - You gain Physical Power equal to 2% of your Maximum Mana.";
	}
	if (item == "Deathbringer") {
		passiveToolTip = "PASSIVE - Critical Strike bonus damage dealt is increased by 25%.";
	}
	if (item == "Rage") {
		passiveToolTip =
			"PASSIVE - Killing or getting an assist on an enemy god gives you 1 stack. Each stack provides 2% Critical Strike Chance and 3 Physical Power. Stacks are permanent and stack up to 5 times.  ";
	}
	if (item == "Demon Blade") {
		passiveToolTip = "PASSIVE - Your Critical Hits provide you with 10% Physical Penetration and increase your Attack Speed by 10% for 4s.";
	}
	if (item == "Bladed Boomerang") {
		passiveToolTip =
			"PASSIVE - Your next basic attack on an enemy god creates a deployable that, when picked up, provides you with 2% Movement Speed and 10% Critical Strike Chance for 6s. This effect stacks up to 3 times and can only occur once every 2 seconds.";
	}
	if (item == "Malicious Deathbringer") {
		passiveToolTip =
			"PASSIVE - Critical Strike bonus damage dealt is increased by 25%. <n>GLYPH - Successfully hitting an Enemy God with a Critical Strike will subtract 1s from all of your abilities currently on cooldown, except your ultimate ability.";
	}
	if (item == "Devoted Deathbringer") {
		passiveToolTip =
			"PASSIVE - Critical Strike bonus damage dealt is increased by 25%. <n>GLYPH - Your Critical Strike Chance is multiplied by 1.25. For each 5% Critical Strike Chance you go over 100% Critical Strike Chance, you gain 5 Physical Power.";
	}
	if (item == "Relic Dagger") {
		passiveToolTip = "PASSIVE - Your relics receive 50s Cooldown Reduction";
	}
	if (item == "Winged Blade") {
		passiveToolTip =
			"PASSIVE - When hit by a Slow, you and nearby allies within 30 units become immune to Slows and gain 20% increased Movement Speed for 4s. This effect can only occur once every 30 seconds.";
	}
	if (item == "The Executioner") {
		passiveToolTip = "PASSIVE - Basic Attacks against an enemy reduce your target's Physical Protection by 7% for 3 seconds (max. 4 Stacks).";
	}
	if (item == "Toxic Blade") {
		passiveToolTip =
			"PASSIVE - Enemy Gods hit by your basic attacks have 20% reduced Healing and 7% reduced Attack Speed while you gain 7% increased Attack Speed, stacking up to 3 times and lasting 5s.";
	}
	if (item == "Lotus Sickle") {
		passiveToolTip = "PASSIVE - Any god affected by your ability heals gains 10 increased Physical and Magical Protection for 5 seconds.";
	}
	if (item == "Blackthorn Hammer") {
		passiveToolTip = "PASSIVE - While over 25% Mana, you gain +10% Cooldown Reduction. While under 25% Mana, you gain +50 MP5.";
	}
	if (item == "Dawnbringer") {
		passiveToolTip =
			"PASSIVE - When your Ultimate has finished casting, your Protections and Movement Speed are increased by 10% for each enemy god within 55 units of you, stacking 3 times for the next 6s. This effect can only occur once every 30s.";
	}
	if (item == "Frostbound Hammer") {
		passiveToolTip =
			"PASSIVE - Your next basic attack on an enemy god creates a 30 unit shockwave of frost around them, slowing the Movement Speed and Attack Speed of enemy gods in the area by 25% for 3s. This effect can only occur once every 5 seconds. This item and all upgrades are only available to Assassins and Warriors.";
	}
	if (item == "Runeforged Hammer") {
		passiveToolTip =
			"PASSIVE - Your next successful Hard CC on an enemy god creates a runic symbol on the ground that lasts for 5s. Enemies in the symbol take 15% more damage. This can only occur once every 15 seconds.";
	}

	if (item == "") {
		passiveToolTip = "";
	}

	return passiveToolTip;
}
function addDamageItem(itemName) {
	var itemStats = itemSearch(itemName);
	for (var stat in itemStats) {
		if (stat === "Magical Power") {
			statSheet["Magical Power"] = statSheet["Magical Power"] + parseInt(itemStats["Magical Power"]);
		} else if (stat === "Magical Penetration") {
			if (itemStats["Magical Penetration"].includes("%")) {
				statSheet["% Magical Penetration"] = statSheet["% Magical Penetration"] + parseInt(itemStats["Magical Penetration"].replace("%", ""));
			} else {
				statSheet["Magical Penetration"] = statSheet["Magical Penetration"] + parseInt(itemStats["Magical Penetration"]);
			}
		} else if (stat === "Mana") {
			statSheet["Mana"] = statSheet["Mana"] + parseInt(itemStats["Mana"]);
		} else if (stat === "Magical Lifesteal") {
			statSheet["Magical Lifesteal"] = statSheet["Magical Lifesteal"] + parseInt(itemStats["Magical Lifesteal"].replace("%", ""));
		} else if (stat === "MP5") {
			statSheet["MP5"] = statSheet["MP5"] + parseInt(itemStats["MP5"]);
		} else if (stat === "Physical Power") {
			statSheet["Physical Power"] = statSheet["Physical Power"] + parseInt(itemStats["Physical Power"]);
		} else if (stat === "Physical Penetration") {
			if (itemStats["Physical Penetration"].includes("%")) {
				statSheet["% Physical Penetration"] =
					statSheet["% Physical Penetration"] + parseInt(itemStats["Physical Penetration"].replace("%", ""));
			} else {
				statSheet["Physical Penetration"] = statSheet["Physical Penetration"] + parseInt(itemStats["Physical Penetration"]);
			}
		} else if (stat === "Critical Strike Chance") {
			statSheet["Critical Strike Chance"] =
				statSheet["Critical Strike Chance"] + parseInt(itemStats["Critical Strike Chance"].replace("%", ""));
		} else if (stat == "Physical Protection") {
			statSheet["Physical Protection"] = statSheet["Physical Protection"] + parseInt(itemStats["Physical Protection"]);
		} else if (stat == "Magical Protection") {
			statSheet["Magical Protection"] = statSheet["Magical Protection"] + parseInt(itemStats["Magical Protection"]);
		} else if (stat == "Health") {
			statSheet["Health"] = statSheet["Health"] + parseInt(itemStats["Health"]);
		} else if (stat == "Attack Speed") {
			statSheet["Attack Speed"] =
				statSheet["Attack Speed"] + statSheet["Base Attack Speed"] * (parseInt(itemStats["Attack Speed"].replace("%", "")) / 100);
		}
	}

	return statSheet;
}
function addDefenseItem(itemName) {
	var itemStats = itemSearch(itemName);

	for (var stat in itemStats) {
		if (stat === "Magical Power") {
			targetStatSheet["Magical Power"] = targetStatSheet["Magical Power"] + parseInt(itemStats["Magical Power"]);
		} else if (stat === "Magical Penetration") {
			if (itemStats["Magical Penetration"].includes("%")) {
				targetStatSheet["% Magical Penetration"] =
					targetStatSheet["% Magical Penetration"] + parseInt(itemStats["Magical Penetration"].replace("%", ""));
			} else {
				targetStatSheet["Magical Penetration"] = targetStatSheet["Magical Penetration"] + parseInt(itemStats["Magical Penetration"]);
			}
		} else if (stat === "Mana") {
			targetStatSheet["Mana"] = targetStatSheet["Mana"] + parseInt(itemStats["Mana"]);
		} else if (stat === "Magical Lifesteal") {
			targetStatSheet["Magical Lifesteal"] = targetStatSheet["Magical Lifesteal"] + parseInt(itemStats["Magical Lifesteal"].replace("%", ""));
		} else if (stat === "MP5") {
			targetStatSheet["MP5"] = targetStatSheet["MP5"] + parseInt(itemStats["MP5"]);
		} else if (stat === "Physical Power") {
			targetStatSheet["Physical Power"] = targetStatSheet["Physical Power"] + parseInt(itemStats["Physical Power"]);
		} else if (stat === "Physical Penetration") {
			if (itemStats["Physical Penetration"].includes("%")) {
				targetStatSheet["% Physical Penetration"] =
					targetStatSheet["% Physical Penetration"] + parseInt(itemStats["Physical Penetration"].replace("%", ""));
			} else {
				targetStatSheet["Physical Penetration"] = targetStatSheet["Physical Penetration"] + parseInt(itemStats["Physical Penetration"]);
			}
		} else if (stat === "Critical Strike Chance") {
			targetStatSheet["Critical Strike Chance"] =
				targetStatSheet["Critical Strike Chance"] + parseInt(itemStats["Critical Strike Chance"].replace("%", ""));
		} else if (stat == "Physical Protection") {
			targetStatSheet["Physical Protection"] = targetStatSheet["Physical Protection"] + parseInt(itemStats["Physical Protection"]);
		} else if (stat == "Magical Protection") {
			targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] + parseInt(itemStats["Magical Protection"]);
		} else if (stat == "Health") {
			targetStatSheet["Health"] = targetStatSheet["Health"] + parseInt(itemStats["Health"]);
		} else if (stat == "Attack Speed") {
			targetStatSheet["Attack Speed"] =
				targetStatSheet["Attack Speed"] + targetStatSheet["Base Attack Speed"] * (parseInt(itemStats["Attack Speed"].replace("%", "")) / 100);
		}
	}
	return targetStatSheet;
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
			if (stat.includes("Physical Protection")) {
				itemProts += parseInt(itemStats[stat]);
			} else if (stat.includes("Magical Protection")) {
				itemProts += parseInt(itemStats[stat]);
			}
		}
	}
	if (itemName == "Qin's Sais") {
		if (targetStatSheet["Health"] < 2000) {
			damageAdded = targetStatSheet["Health"] * 0.015;
		} else if (targetStatSheet["Health"] > 2750) {
			damageAdded = targetStatSheet["Health"] * 0.06;
		} else {
			damageAdded = targetStatSheet["Health"] * ((targetStatSheet["Health"] - 2000) * 0.00006 + 0.015);
		}
	}
	if (itemName == "Bancroft's Claw"){
		var powerScaling = statSheet['Magical Power']
		powerScaling = Math.round(powerScaling/75)
		powerScaling = powerScaling/100
		damageAdded = powerScaling * targetStatSheet['Health']
	}
		
	if (itemName == 'Maman Passive'){
		damageAdded = ((Math.round(missingHealthPercent)/100)) * statSheet['Magical Power']
	}
	if (itemName  == 'Heart of Cold'){
		damageAdded = statSheet['Basic Attack Damage'] * (.15 + (.01 * statSheet['Level']))
	}
	if (itemName == "Telkhines Ring") {
		damageAdded = 5 + 3 * statSheet["Level"];
	}
	if (itemName == "Vibrant Shard") {
		if (statSheet["Type"] == "Magical") {
			damageAdded = statSheet["Magical Power"] * 0.2;
		} else {
			damageAdded = statSheet["Physical Power"] * 0.3;
		}
	}
	if (itemName == "Sundering Axe") {
		damageAdded = targetStatSheet["Current Health"] * 0.03 + itemProts * 0.02;
	}
	if (itemName == "Warrior's Axe") {
		damageAdded = 30 + 1.5 * statSheet["Level"];
	}

	if (itemName == "Curseweaver") {
		damageAdded = statSheet["Mana"] * 0.075 + statSheet["Health"] * 0.075;
	}
	if (itemName === "Divine Ruin") {
		damageAdded = 40 + statSheet["Magical Power"] * 0.1;
	} else if (itemName === "Polynomicon") {
		
		if (polyProcced == true){
			damageAdded = 0;
		}
		else{
			damageAdded = statSheet["Magical Power"] * 0.75;
			polyProcced = true;
		}
	} else if (itemName === "Duality") {
		damageAdded = statSheet["Basic Attack Damage"] * 0.25;
	} else if (itemName === "Bumba's Hammer") {
		if (bumbasProcced == true){
			damageAdded = 70;
			bumbasProcced = false;
		}
		else{
			damageAdded = 0;
		}
		
	} else if (itemName === "Soul Reaver") {
		if (targetStatSheet["Health"] < 2000) {
			damageAdded = targetStatSheet["Health"] * 0.01;
		} else if (targetStatSheet["Health"] > 2750) {
			damageAdded = targetStatSheet["Health"] * 0.09;
		} else {
			damageAdded = targetStatSheet["Health"] * ((targetStatSheet["Health"] - 2000) * 0.0001068 + 0.01);
		}
		if (procCounts[procList.indexOf(itemName)] > 1) {
			damageAdded = damageAdded * 0.5;
		}
	} else if (itemName === "Heartseeker") {
		if (statSheet["Physical Power"] < 150) {
			damageAdded = targetStatSheet["Health"] * 0.02;
		} else if (statSheet["Physical Power"] > 250) {
			damageAdded = targetStatSheet["Health"] * 0.06;
		} else if (statSheet["Physical Power"] === 250) {
			damageAdded = targetStatSheet["Health"] * 0.06;
		} else {
			damageAdded = targetStatSheet["Health"] * ((statSheet["Physical Power"] - 150) * 0.0004 + 0.02);
		}
		if (procCounts[procList.indexOf(itemName)] > 1) {
			damageAdded = damageAdded * 0.75;
		}
	} else if (itemName === "The Crusher") {
		damageAdded = statSheet["Physical Power"] * 0.35;
		if (procCounts[procList.indexOf(itemName)] > 1) {
			damageAdded = damageAdded * 0.5;
		}
	} else if (itemName === "Arondight") {
		damageAdded = 20 + statSheet["Physical Power"] * 0.5;
	} else if (itemName === "Bluestone Brooch") {
		if (targetStatSheet["Current Health"] < 0) {
			damageAdded = 160;
		} else {
			damageAdded = 160 + targetStatSheet["Current Health"] * 0.1;
		}
		if (procCounts[procList.indexOf(itemName)] > 1) {
			damageAdded = damageAdded * 0.5;
		}
	} else if (itemName === "Cyclopean Ring") {
		if (cyclopeanCD < 1){
			damageAdded = targetStatSheet["Health"] * 0.09;
			if (dragonFormActive == true){
				cyclopeanCD = 0
			}
			else{
				cyclopeanCD = 8
			}
			
		}
		else{
			damageAdded = 0;
			cyclopeanCD -= 2
			
		}
		
	} else if (itemName === "Archmage's Gem") {
		damageAdded = statSheet["Magical Power"] * 0.3;
	} else if (itemName === "Soul Gem") {
		damageAdded = statSheet["Magical Power"] * 0.2;
	} else if (itemName == "Manikin Hidden Blade") {
		damageAdded = targetStatSheet["Current Health"] * 0.2;
	} else if (itemName == "Axe of Animosity") {
		damageAdded = statSheet["Health"] * 0.025;
	} else if (itemName == "Equinox") {
		damageAdded = 15 + godLevel * 3;
	} else if (itemName == "Odysseus' Bow") {
		damageAdded = ((15 + statSheet["Basic Attack Damage"] * 0.6) / 4) * 2;
	} else if (itemName == "Tablet of Destinies") {
		damageAdded = statSheet["Mana"] * 0.07;
	} else if (itemName == "Soul Gem") {
		damageAdded = statSheet["Magical Power"] * 0.2;
	} else if (itemName.includes("Pridwen")) {
		if (itemName.includes("Glorious")) {
			damageAdded = itemProts * 1.3;
		} else {
			damageAdded = itemProts * 0.75;
		}
	} else if (itemName == "Infused Sigil") {
		damageAdded = 600;
	} else if (itemName == "Gladiator's Shield") {
		damageAdded = 15 + itemProts * 0.25;
		if (procCounts[procList.indexOf(itemName)] > 1) {
			damageAdded = damageAdded * 0.5;
		}
	} else if (itemName == "Archdruid's Fury") {
		damageAdded = 180 + 12 * statSheet["Level"];
	} else if (itemName == "Calamitous Rod of Tahuti") {
		damageAdded = 100 + statSheet["Magical Power"] * 0.35;
	} else if (itemName == "Manikin Mace") {
		damageAdded = 60;
	} else if (itemName == "Corrupted Bluestone") {
		
		if (procCounts[procList.indexOf(itemName)] > 1) {
			
			console.log(procDamageList)
			damageAdded = 150 + ((procCounts[procList.indexOf(itemName)] - 1) * 25)
			console.log(damageAdded)
			console.log('corr')
		}
		else{
			damageAdded = 300;
		}
	}

	return damageAdded;
}
function abilitySearch(abilityName, abilityRank) {
	var abilityDamage = { "Base Damage": 0, Scaling: 0 };
	if (abilityName == "Flurry") {
		var abilityDamage = { "Base Damage": 40 + 60 * abilityRank, Scaling: 100 };
	} 
	else if (abilityName == "Pyroclast") {
		var abilityDamage = { "Base Damage": 20 + (70 * abilityRank), Scaling: 60 + (15 * abilityRank)};
	}

	else if (abilityName == "Astral Strike") {
		var abilityDamage = { "Base Damage": 10 * abilityRank, Scaling: 0};
	}
	else if(abilityName.includes('Party Trick')){
		var abilityDamage = { "Base Damage": 6 + (8 * (abilityRank-1)), Scaling: 10};
	}
	else if(abilityName.includes('Madame Fangs')){
		var abilityDamage = { "Base Damage": 25 + (25 * (abilityRank)), Scaling: 40};
	}
	else if(abilityName.includes('Spirit Seize')){
		var abilityDamage = { "Base Damage": 15 + (5 * (abilityRank)), Scaling: 10};
	}
	else if (abilityName == "Maman Mark") {
		var abilityDamage = { "Base Damage": 0, Scaling: 2.5 };
	} else if (abilityName == "Sever") {
		var abilityDamage = { "Base Damage": 105 + 45 * abilityRank, Scaling: 40 };
	} else if (abilityName == "Mystic Rush") {
		var abilityDamage = { "Base Damage": 125 + 75 * abilityRank, Scaling: 110 };
	} else if (abilityName == "Searing Pain") {
		var abilityDamage = { "Base Damage": 325 + 75 * abilityRank, Scaling: 110 };
	} else if (abilityName == "Overhead Slash (Hamstring)") {
		var abilityDamage = { "Base Damage": 10 + 50 * abilityRank, Scaling: 60 };
	} else if (abilityName == "Hamstring") {
		var abilityDamage = { "Base Damage": 15 + 55 * abilityRank, Scaling: 60 };
	} else if (abilityName == "Fearless (Defense)") {
		var abilityDamage = { "Base Damage": 20 + 50 * abilityRank, Scaling: 50 };
	} else if (abilityName == "Fearless") {
		var abilityDamage = { "Base Damage": 80 + 100 * (abilityRank - 1), Scaling: 110 };
	} else if (abilityName == "Lawbringer") {
		var abilityDamage = { "Base Damage": 125 + 125 * abilityRank, Scaling: 120 };
	} else if (abilityName == "Lawbringer (Defense)") {
		var abilityDamage = { "Base Damage": 100 + 100 * abilityRank, Scaling: 120 };
	} else if (abilityName == "Battle Stomp (Uppercut)") {
		var abilityDamage = { "Base Damage": 30 + 25 * abilityRank, Scaling: 40 };
	} else if (abilityName == "Uppercut") {
		var abilityDamage = { "Base Damage": 5 + 45 * abilityRank, Scaling: 40 };
	} else if (abilityName == "Twin Cleave (Bladestorm)") {
		var abilityDamage = { "Base Damage": 20 + 50 * abilityRank, Scaling: 60 };
	} else if (abilityName == "Bladestorm") {
		var abilityDamage = { "Base Damage": 110 + 155 * (abilityRank - 1), Scaling: 115 };
	} else if (abilityName == "Sundering Strike (Excalibur's Wrath)") {
		var abilityDamage = { "Base Damage": 45 + 55 * abilityRank, Scaling: 65 };
	} else if (abilityName == "Excalibur's Wrath") {
		var abilityDamage = { "Base Damage": 110 + 140 * (abilityRank - 1), Scaling: 110 };
	} else if (abilityName == "Spot Weakness") {
		var abilityDamage = { "Base Damage": 2 + 10 * abilityRank, Scaling: 5 };
	} else if (abilityName == "Devastate") {
		var abilityDamage = { "Base Damage": 105 + 35 * abilityRank, Scaling: 20 };
	} else if (abilityName == "Transfuse") {
		var abilityDamage = { "Base Damage": 100 + 20 * abilityRank, Scaling: 20 };
	} else if (abilityName == "Sanity Break") {
		var abilityDamage = { "Base Damage": 50 + 50 * abilityRank, Scaling: 40 };
	} else if (abilityName == "Sickle Storm") {
		var abilityDamage = { "Base Damage": 5 * abilityRank, Scaling: 0 };
	} else if (abilityName == "Maman Passive") {
		var abilityDamage = { "Base Damage": 0, Scaling: missingHealthPercent};
	} else if (abilityName == "Tempest of Undoing") {
		var abilityDamage = { "Base Damage": 380, Scaling: 50 };
	} else if (abilityName == "Coerce") {
		var abilityDamage = { "Base Damage": 0, Scaling: 0 };
	} else if (abilityName == "Consume") {
		var abilityDamage = { "Base Damage": 200, Scaling: 50 };
	} else if (abilityName == "Outburst") {
		var abilityDamage = { "Base Damage": 170, Scaling: 40 };
	} else if (abilityName == "Permafrost") {
		var abilityDamage = { "Base Damage": 40 + 75 * abilityRank, Scaling: 95 };
	} else if (abilityName == "Winter's Grasp") {
		var abilityDamage = { "Base Damage": 10 + 160 * abilityRank, Scaling: 140 };
	} else if (abilityName == "Rising Flight") {
		var abilityDamage = { "Base Damage": 200, Scaling: 40 };
	} else if (abilityName == "Summon Beast") {
		var abilityDamage = { "Base Damage": 90, Scaling: 20 };
	} else if (abilityName == "Summon Storm") {
		var abilityDamage = { "Base Damage": 390, Scaling: 160 };
	} else if (abilityName == "Convergence") {
		var abilityDamage = { "Base Damage": 19, Scaling: 15 };
	} else if (abilityName == "Underhanded Tactics (Dragon)") {
		var abilityDamage = { "Base Damage": 60 + (60 * abilityRank), Scaling: 90 };
	} else if (abilityName == "Cursed Strength (Dragon)") {
		var abilityDamage = { "Base Damage": 90 + (60 * abilityRank), Scaling: 75 };
	} else if (abilityName == "Furious Roar") {
		var abilityDamage = { "Base Damage": 45 + 35 * abilityRank + (0.01 + 0.005 * abilityRank) * targetStatSheet["Health"], Scaling: 60 };
	} else if (abilityName == "Shackles") {
		var abilityDamage = { "Base Damage": 80 * abilityRank, Scaling: 75 };
	} else if (abilityName == "Searing Flesh") {
		var percentBurn = 0;
		if (abilityRank < 3) {
			percentBurn = 0.08;
		}
		if (abilityRank < 5) {
			percentBurn = 0.16;
		} else {
			percentBurn = 0.24;
		}
		var abilityDamage = { "Base Damage": 80 + 40 * abilityRank + targetStatSheet["Health"] * percentBurn, Scaling: 56 };
	} else if (abilityName == "No Escape") {
		var abilityDamage = { "Base Damage": 125 + 75 * abilityRank, Scaling: 40 };
	} else if (abilityName == "Thrown Axe") {
		var abilityDamage = { "Base Damage": 170, Scaling: 70 };
	} else if (abilityName == "Glory Bound") {
		var abilityDamage = { "Base Damage": 170, Scaling: 50 };
	} else if (abilityName == "Spawn of Set") {
		var abilityDamage = {
			"Base Damage": abilitySearch("Skewer", 5)["Base Damage"] * 0.6,
			Scaling: abilitySearch("Skewer", 5)["Scaling"] * 0.6,
		};
		if (setClones > 1) {
			abilityDamage["Base Damage"] += abilityDamage["Base Damage"] * 0.4 * (setClones - 1);
			abilityDamage["Scaling"] = abilityDamage["Scaling"] + abilityDamage["Scaling"] * 0.4 * (setClones - 1);
		}
	} else if (abilityName == "Rune of the Hunt") {
		var abilityDamage = {
			"Base Damage":
				(statSheet["Basic Damage"]["Scaling"] * statSheet["Physical Power"] +
					statSheet["Basic Damage"]["Base Damage"] +
					statSheet["Basic Damage"]["Per Level"] * statSheet["Level"]) *
				(0.55 + 0.15 * abilityRank),
			Scaling: 0,
		};
		if (piercingColdDebuff == true){
			abilityDamage['Base Damage'] = (abilityDamage['Base Damage']) * 2
		}
	} else if (abilityName == "Maul Prey (Energy Surge)") {
		var abilityDamage = { "Base Damage": 320, Scaling: 60 };
	} else if (abilityName == "Heavy Charge (Life Tap)") {
		var abilityDamage = { "Base Damage": 255, Scaling: 50 };
	} else if (abilityName == "Shining Gallop") {
		var abilityDamage = { "Base Damage": 280, Scaling: 70 };
	} else if (abilityName == "Crashing Dive") {
		var abilityDamage = { "Base Damage": 310, Scaling: 100 };
	} else {
		for (var i = 0; i < godData.length; i++) {
			var god = godData[i];
			if (abilityName === god["Ability One"]["Summary"]) {
				var Description = god["Ability One"];
				Description = Description["Description"]["itemDescription"]["rankitems"];
				for (var j = 0; j < Description.length; j++) {
					var desc = Description[j];

					if (desc["description"].includes("Damage")) {
						var abilityDamage = desc["value"];
						var abilityInfo = god["Name"] + " 1: " + god["Ability One"]["Summary"];
						var splitAbility = abilityDamage.split("/");
						var levelOneBase = splitAbility[0];
						var levelTwoBase = splitAbility[1];
						var levelThreeBase = splitAbility[2];
						var levelFourBase = splitAbility[3];
						var splitNumber2 = splitAbility[4];
						splitNumber2 = splitNumber2.split(" ");
						var levelFiveBase = splitNumber2[0];
						if (abilityRank == 1) {
							var baseDamage = parseInt(levelOneBase);
						}
						if (abilityRank == 2) {
							var baseDamage = parseInt(levelTwoBase);
						}
						if (abilityRank == 3) {
							var baseDamage = parseInt(levelThreeBase);
						}
						if (abilityRank == 4) {
							var baseDamage = parseInt(levelFourBase);
						}
						if (abilityRank == 5) {
							var baseDamage = parseInt(levelFiveBase);
						}
						var abilityScaling = Number(splitNumber2[1].replace("%", "").replace("(", "").replace("+", ""));
						var abilityDamage = {
							"Base Damage": baseDamage,
							Scaling: abilityScaling,
						};
					}
				}
			} else if (abilityName === god["Ability Two"]["Summary"]) {
				var Description = god["Ability Two"];
				Description = Description["Description"]["itemDescription"]["rankitems"];
				for (var j = 0; j < Description.length; j++) {
					var desc = Description[j];
					if (desc["description"].includes("Damage")) {
						var abilityDamage = desc["value"];
						var abilityInfo = god["Name"] + " 2: " + god["Ability Two"]["Summary"];
						var splitAbility = abilityDamage.split("/");
						var levelOneBase = splitAbility[0];
						var levelTwoBase = splitAbility[1];
						var levelThreeBase = splitAbility[2];
						var levelFourBase = splitAbility[3];
						var splitNumber2 = splitAbility[4];
						splitNumber2 = splitNumber2.split(" ");
						var levelFiveBase = splitNumber2[0];
						if (abilityRank == 1) {
							var baseDamage = parseInt(levelOneBase);
						}
						if (abilityRank == 2) {
							var baseDamage = parseInt(levelTwoBase);
						}
						if (abilityRank == 3) {
							var baseDamage = parseInt(levelThreeBase);
						}
						if (abilityRank == 4) {
							var baseDamage = parseInt(levelFourBase);
						}
						if (abilityRank == 5) {
							var baseDamage = parseInt(levelFiveBase);
						}
						var abilityScaling = Number(splitNumber2[1].replace("%", "").replace("(", "").replace("+", ""));
						var abilityDamage = {
							"Base Damage": baseDamage,
							Scaling: abilityScaling,
						};
					}
				}
			} else if (abilityName === god["Ability Three"]["Summary"]) {
				var Description = god["Ability Three"];
				Description = Description["Description"]["itemDescription"]["rankitems"];
				for (var j = 0; j < Description.length; j++) {
					var desc = Description[j];
					if (desc["description"].includes("Damage")) {
						var abilityDamage = desc["value"];
						var abilityInfo = god["Name"] + " 3: " + god["Ability Three"]["Summary"];
						var splitAbility = abilityDamage.split("/");
						var levelOneBase = splitAbility[0];
						var levelTwoBase = splitAbility[1];
						var levelThreeBase = splitAbility[2];
						var levelFourBase = splitAbility[3];
						var splitNumber2 = splitAbility[4];
						splitNumber2 = splitNumber2.split(" ");
						var levelFiveBase = splitNumber2[0];
						if (abilityRank == 1) {
							var baseDamage = parseInt(levelOneBase);
						}
						if (abilityRank == 2) {
							var baseDamage = parseInt(levelTwoBase);
						}
						if (abilityRank == 3) {
							var baseDamage = parseInt(levelThreeBase);
						}
						if (abilityRank == 4) {
							var baseDamage = parseInt(levelFourBase);
						}
						if (abilityRank == 5) {
							var baseDamage = parseInt(levelFiveBase);
						}
						var abilityScaling = Number(splitNumber2[1].replace("%", "").replace("(", "").replace("+", ""));
						var abilityDamage = {
							"Base Damage": baseDamage,
							Scaling: abilityScaling,
						};
					}
				}
			} else if (abilityName === god["Ability Four"]["Summary"]) {
				var Description = god["Ability Four"];
				Description = Description["Description"]["itemDescription"]["rankitems"];
				for (var j = 0; j < Description.length; j++) {
					var desc = Description[j];
					if (desc["description"].includes("Damage")) {
						var abilityDamage = desc["value"];
						var abilityInfo = god["Name"] + " 4: " + god["Ability Four"]["Summary"];
						var splitAbility = abilityDamage.split("/");
						var levelOneBase = splitAbility[0];
						var levelTwoBase = splitAbility[1];
						var levelThreeBase = splitAbility[2];
						var levelFourBase = splitAbility[3];
						var splitNumber2 = splitAbility[4];
						splitNumber2 = splitNumber2.split(" ");
						var levelFiveBase = splitNumber2[0];
						if (abilityRank == 1) {
							var baseDamage = parseInt(levelOneBase);
						}
						if (abilityRank == 2) {
							var baseDamage = parseInt(levelTwoBase);
						}
						if (abilityRank == 3) {
							var baseDamage = parseInt(levelThreeBase);
						}
						if (abilityRank == 4) {
							var baseDamage = parseInt(levelFourBase);
						}
						if (abilityRank == 5) {
							var baseDamage = parseInt(levelFiveBase);
						}

						var abilityScaling = Number(splitNumber2[1].replace("%", "").replace("(", "").replace("+", ""));
						var abilityDamage = {
							"Base Damage": baseDamage,
							Scaling: abilityScaling,
						};
					}
				}
			}
		}
	}

	return abilityDamage;
}
function calculateDamage(abilityName, abilityRank) {
	var output = { "Damage": 0, "Mitigated": 0 };
	var tickCount = 1;
	var damageOutput = 0;
	if (abilityName == "Grasping Hands") {
		tickCount = 4;
	} else if (abilityName == "Plague of Locusts") {
		tickCount = 12;
	} else if (abilityName == "Death Gaze") {
		tickCount = 30;
	}
	else if (abilityName == "Party Trick (Cancel)") {
		var tickCount = 4;
	}

	else if (abilityName == "Party Trick (Stomp)") {
		var tickCount = 5;
	}

	else if (abilityName == "Spirit Seize (Eject)") {
		var tickCount = 5;
	}

	for (var tick = tickCount; tick > 0; ) {
		if (abilityName.includes("Party Trick")) {
			console.log('MAMANNNN')
			if (mamanMark == true){
				mamanPassiveStacks +=2;
			}
			else{
				mamanPassiveStacks +=1;
			}
		}
		if (abilityName == "Explosion of Souls") {
			if (mamanMark == true){
				mamanPassiveStacks +=2;
			}
			else{
				mamanPassiveStacks +=1;
			}
		}

		if (abilityName.includes("Spirit Seize")) {
			if (mamanMark == true){
				mamanPassiveStacks +=2;
			}
			else{
				mamanPassiveStacks +=1;
			}
		}
		if (abilityName == "Madame Fangs") {
			mamanPassiveStacks +=1;
		}

		
		
		

		

		tick = tick - 1;
		
		var abilityDamage = abilitySearch(abilityName, abilityRank);
		var abilityScaling = abilityDamage["Scaling"];

		var baseDamage = abilityDamage["Base Damage"];
		abilityScaling = parseInt(abilityScaling) / 100;
		if (statSheet["Type"] == "Magical") {
			var targetProtection = targetStatSheet["Magical Protection"];
			var powerValue = statSheet["Magical Power"];
			var flatPenetration = statSheet["Magical Penetration"];
			var percentPenetration = statSheet["% Magical Penetration"];
			var percentReduction = statSheet["% Magical Protection Shred"] / 100;
		} else {
			var powerValue = statSheet["Physical Power"];
			var basicDamage =
				statSheet["Basic Damage"]["Scaling"] * statSheet["Physical Power"] +
				statSheet["Basic Damage"]["Base Damage"] +
				statSheet["Basic Damage"]["Per Level"] * statSheet["Level"];
			var targetProtection = targetStatSheet["Physical Protection"];
			var flatPenetration = statSheet["Physical Penetration"];
			var percentPenetration = statSheet["% Physical Penetration"];
			var percentReduction = statSheet["% Physical Protection Shred"] / 100;
		}
		if (abilityName == "Dark Omen"){
			var omenIndex = 0
			for (var z = 0; z < abilityRotation.length; z++){
					var ability = abilityRotation[z];
					if (ability == 'Dark Omen'){
						omenIndex = z
						z = 30;
					}
				}
				for (var z = 0; z < abilityRotation.length; z++){
					var ability = abilityRotation[z];
					if (ability == 'Deadly Aspects'){
						if (z > omenIndex){
							baseDamage *= 2
							abilityScaling *=2
						}
					}
				}

			if(morriganMark == true){
				baseDamage *= 2
				abilityScaling *=2
			
			morriganMark = false;
			}
			else{
				morriganMark = true;
			}
		}
	
		
		percentPenetration = percentPenetration / 100;

		if (abilityName== 'Madame Fangs (Subsequent)'){
			abilityScaling *= .15
			baseDamage *= .15
		}
		if (abilityName == 'Party Trick (Stomp)'){
			if (tick == 2){
				abilityScaling = .35
				baseDamage = 40 * abilityRank
			}
		}
		if (abilityName == 'Spirit Seize (Eject)'){
			if (tick == 4){
				abilityScaling = .1
				baseDamage = 30 + (30 * abilityRank)
			}
		}
		if (abilityName == 'Spirit Seize (Cancel)'){
			abilityScaling = .1
			baseDamage = 30 + (30 * abilityRank)
		}

		if (abilityName == "Radiate") {
			abilityScaling = 1.89;
			baseDamage = 93 * abilityRank;
		}

		if (abilityName == "Dragonfire") {
			abilityScaling = 1.95;
			baseDamage = 65 + 39 * abilityRank;
		}
		if (abilityName == "Frostbolt") {
			abilityScaling = 0.55;
			baseDamage = 25 + 35 * abilityRank;
		}
		if (abilityName == "Excalibur's Wrath") {
			baseDamage += targetStatSheet["Health"] * (0.16 + 0.01 * abilityRank);
		}

		if (abilityName == "Blizzard") {
			abilityScaling = 1.2;
			baseDamage = 80 + 120 * (abilityRank - 1);
		}
		
		else if (abilityName == "Madame Fangs (Initial)") {
			for (var b = 0; b < abilityRotation.length; b++) {
				var basic = abilityRotation[b];
				if (basic == "Party Trick (Stomp)") {
					mamanMarkProcs +=5
				}
				if (basic == "Party Trick (Cancel)") {
					mamanMarkProcs +=4
				}
				if (basic == "Party Trick (1 Tick)") {
					mamanMarkProcs +=1
				}
				if (basic == "Spirit Seize (1 Tick)") {
					mamanMarkProcs +=1
				}
				if (basic == "Spirit Seize (Cancel)") {
					mamanMarkProcs +=1
				}
				if (basic == "Spirit Seize (Eject)") {
					mamanMarkProcs +=5
				}
				if (basic == "Explosion of Souls") {
					mamanMarkProcs +=1
				}
				if (basic == "basicAttack") {
					mamanMarkProcs +=1
				}
			}
			abilityScaling += (mamanMarkProcs * .025)
			
			
		} 
		if (abilityName == "Death Scythe") {
			baseDamage += targetStatSheet["Health"] * 0.1;
		}
		if (abilityName == "The World Serpent") {
			baseDamage = baseDamage * 3;
			abilityScaling = abilityScaling * 3;
		}

		if (abilityName == "Divine Judgement") {
			baseDamage = targetStatSheet["Current Health"] * (0.12 + 0.025 * abilityRank);
		}

		if (abilityName == "Updraft") {
			if (hydrasProcced == true) {
				basicDamage = basicDamage * 1.25;
				hydrasProcced = false;
			}
			baseDamage += 70 + basicDamage * 1.5;
		}

		if (abilityName == "Acorn Blast") {
			if (godBuild.includes("Thistlethorn Acorn")) {
				abilityScaling = 1.12;
				baseDamage = 330;
			} else {
				abilityScaling = 0.99;
				baseDamage = 90 + abilityRank * 36;
			}
		}
		if (abilityName == "Hieroglyphic Assault") {
			abilityScaling += 0.05;
			baseDamage += 55;
		}
		if (godBuild.includes("Rod of Tahuti")) {
			if (targetStatSheet["Current Health"] < targetStatSheet["Health"] * 0.6) {
				abilityScaling = abilityScaling * 1.15;
				abilityScaling = (abilityScaling * 100) / 100;
			}
		}
		

		if (abilityName == "Rising Jaguar") {
			if (poisonActive == true) {
				abilityScaling = abilityScaling * 1.4;
				baseDamage = baseDamage * 1.4;
			}
		}
		if (godBuild.includes("Calamitous Rod of Tahuti")) {
			if (targetStatSheet["Current Health"] < targetStatSheet["Health"] * 0.6) {
				abilityScaling = abilityScaling * 1.15;
				abilityScaling = (abilityScaling * 100) / 100;
			}
		}
		if (abilityName == "Inferno Cannon") {
			percentPenetration = percentPenetration + 0.25;
		}

		if (abilityName == "Cursed Strength (Dragon)") {
			if (dragonFormActive == true) {
				targetStatSheet["Magical Protection"] = targetStatSheet["Magical Protection"] * 0.8;
			}
		}
		var actualProtection = targetProtection * (1 - percentReduction) * (1 - percentPenetration) - flatPenetration;
		if (abilityName == "Butcher Blades") {
			actualProtection = 0;
		}
		if (abilityName == "Last Breath") {
			actualProtection = 0;
		}
		if (actualProtection < 0) {
			actualProtection = 0;
		}
		if (abilityName == "Detonate Charge") {
			if (lightningCharges == 0) {
				baseDamage = 0;
				abilityScaling = 0;
			}
			if (lightningCharges == 1) {
				baseDamage = baseDamage * 1;
				abilityScaling = abilityScaling * 1;
			}
			if (lightningCharges == 2) {
				baseDamage = baseDamage * 1.7;
				abilityScaling = abilityScaling * 1.7;
			}
			if (lightningCharges == 3) {
				baseDamage = baseDamage * 2.4;
				abilityScaling = abilityScaling * 2.4;
			}
			lightningCharges = 0;
		}
		
		var scalingDamage = abilityScaling * powerValue;
		if (abilityName == "Eagle Eye") {
			scalingDamage = 1.15 * statSheet["Basic Attack Damage"];
			baseDamage = 10 * abilityRank;
		}

		var preMitigated = baseDamage + scalingDamage;
		if (abilityName == "Dart") {
			if (godBuild.includes("Bristlebush Acorn")) {
				var dartDamage = baseDamage + abilityScaling * statSheet["Physical Power"];
				dartDamage = dartDamage * 1.4;
				statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] * 1.2;
				if (statSheet["Critical Strike Chance"] > 0) {
					var critDamage = 0;
					var damageMultiplier = 0;
					for (var i = 0; i < 100; i++) {
						var roll = getRandomInt(100);
						if (roll <= statSheet["Critical Strike Chance"]) {
							if (godBuild.includes("Deathbringer")) {
								damageMultiplier = 2;
							} else if (godBuild.includes("Devoted Deathbringer")) {
								damageMultiplier = 2;
							} else if (godBuild.includes("Malicious Deathbringer")) {
								damageMultiplier = 2;
							} else {
								damageMultiplier = 1.75;
							}
							if (targetBuild.includes("Spectral Armor")) {
								damageMultiplier = damageMultiplier - 0.4;
							}
							critDamage += dartDamage * damageMultiplier;
						} else {
							critDamage += dartDamage;
						}
					}
					critDamage = critDamage / 100;
					dartDamage = critDamage;
					preMitigated = dartDamage;
				}
			}
		}
		if (abilityName == "Deathbane") {
			var dartDamage = baseDamage + abilityScaling * statSheet["Physical Power"];
			statSheet["Basic Attack Damage"] = statSheet["Basic Attack Damage"] * 1.2;
			if (statSheet["Critical Strike Chance"] > 0) {
				var critDamage = 0;
				var damageMultiplier = 0;
				for (var i = 0; i < 100; i++) {
					var roll = getRandomInt(100);
					if (roll <= statSheet["Critical Strike Chance"]) {
						if (godBuild.includes("Deathbringer")) {
							damageMultiplier = 2;
						} else if (godBuild.includes("Devoted Deathbringer")) {
							damageMultiplier = 2;
						} else if (godBuild.includes("Malicious Deathbringer")) {
							damageMultiplier = 2;
						} else {
							damageMultiplier = 1.75;
						}
						if (targetBuild.includes("Spectral Armor")) {
							damageMultiplier = damageMultiplier - 0.4;
						}
						critDamage += dartDamage * damageMultiplier;
					} else {
						critDamage += dartDamage;
					}
				}
				critDamage = critDamage / 100;
				dartDamage = critDamage;
				preMitigated = dartDamage;
			}
		}
		if (abilityName == "Wind Fire Wheels") {
			var damageMultiplier = 0;

			if (godBuild.includes("Deathbringer")) {
				damageMultiplier = 2;
			} else if (godBuild.includes("Devoted Deathbringer")) {
				damageMultiplier = 2;
			} else if (godBuild.includes("Malicious Deathbringer")) {
				damageMultiplier = 2;
			} else {
				damageMultiplier = 1.75;
			}
			if (targetBuild.includes("Spectral Armor")) {
				damageMultiplier = damageMultiplier - 0.4;
			}

			preMitigated = preMitigated * damageMultiplier;
		}

		var damageOutput = (100 * preMitigated) / (actualProtection + 100);

		if (abilityName == "Flames of Muspell") {
			targetProtection = targetStatSheet["Magical Protection"];
			percentPenetration = statSheet["% Magical Penetration"];
			flatPenetration = statSheet["Magical Penetration"];
			actualProtection = targetProtection * (1 - percentReduction) * (1 - percentPenetration) - flatPenetration;
			if (actualProtection < 0) {
				actualProtection = 0;
			}

			var magPreMitigated = surtrPassive + 35;
			var magDamageOutput = (100 * magPreMitigated) / (actualProtection + 100);
			damageOutput += magDamageOutput;
			preMitigated += magPreMitigated;
		}

		if (targetBuild.includes("Evolved Prophetic Cloak")) {
			var totalProts = targetStatSheet["Magical Protection"] + targetStatSheet["Physical Protection"];
			if (totalProts > 525) {
				damageOutput = damageOutput * 0.88;
				
			} else if (totalProts > 325) {
				damageOutput = damageOutput * 0.928;
				
			}
		}
		if (debuffList.includes("Compassion")){
			damageOutput = damageOutput * 0.88;
			
		}
		if (debuffList.includes("Rising Dawn")){
			damageOutput = damageOutput * 0.70;
			
		}



		if (targetBuild.includes("Sigil of The Old Guard")) {
			damageOutput = damageOutput * 0.88;
			preMitigated = preMitigated * 0.88;
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
				damageOutput = damageOutput * markDamageIncrease;
				preMitigated = preMitigated * markDamageIncrease;
			}
		}
		if (targetStatSheet["Name"] == "Set") {
			damageOutput = damageOutput * 0.85;
			preMitigated = preMitigated * 0.85;
		}
		if (abilityName == "Searing Pain") {
			damageOutput += targetStatSheet["Health"] * 0.05;
			preMitigated += targetStatSheet["Health"] * 0.05;
		}

		if (godBuild.includes("Gem of Focus")) {
			damageOutput = damageOutput * 1.15;
			preMitigated = preMitigated * 1.15;
		}
		if (godBuild.includes("Rangda's Mask")) {
			damageOutput = damageOutput * 1.15;
			preMitigated = preMitigated * 1.15;
		}
		if (godBuild.includes("Fighter's Mask")) {
			damageOutput = damageOutput * (1 + (.05 + (.0025 * statSheet['Level'])));
			preMitigated = preMitigated * (1 + (.05 + (.0025 * statSheet['Level'])));
		}
		if (ravanaUlt == true) {
			damageOutput = damageOutput * 1.1;
			preMitigated = preMitigated * 1.1;
		}
		if (godBuild.includes("The Ferocious Executioner")) {
			damageOutput = damageOutput * (1 + ferociousStacks * 0.02);
			preMitigated = preMitigated * (1 + ferociousStacks * 0.02);
			
		}

		if (godBuild.includes("Spear of the Magus")) {
			damageOutput = damageOutput * 1.05;
			preMitigated = preMitigated * 1.05;
		}
		if (godBuild.includes("Runeforged Hammer")) {
			damageOutput = damageOutput * 1.15;
			preMitigated = preMitigated * 1.15;
		}
		if (godBuild.includes("Sacrificial Shroud")) {
			damageOutput = damageOutput * 1.15;
			preMitigated = preMitigated * 1.15;
		}
		if (godBuild.includes("Staff of Myrddin")) {
			damageOutput = damageOutput * myrddinTimer;
			preMitigated = preMitigated * myrddinTimer;
		}
		if (buffList.includes("Totem of Ku")) {
			
			preMitigated = preMitigated * 1.1;
			damageOutput = damageOutput * 1.1;
		}

		var damageMitigated = preMitigated - damageOutput;

		damageOutput = Math.round(damageOutput);
		damageMitigated = Math.round(damageMitigated);
		if (abilityName == "Through Space and Time") {
			if (damageOutput > targetStatSheet["Health"] * 0.75) {
				damageOutput = targetStatSheet["Health"] * 0.75;
			}
		}
		output["Damage"] += damageOutput;
		output["Mitigated"] += damageMitigated;
		

		if (mamanPassiveStacks > 4) {
			
			
			mamanPassiveStacks -=5
			var procSlot = 0;
			for (var y = 0; y < procList.length; y++) {
					var proc = procList[y];
					if (proc == "") {
						procSlot = y;
						procCounts[procSlot] = 1;
						
						procList[y] = "Soul Spikes";
						procItems[y].src = "https://webcdn.hirezstudios.com/smite/god-abilities/soul-spikes.jpg";
						procItems[y].style.display = "flex";
						procResults[y].style.display = "block";
						mamanPassiveDamage["Damage"] += calculateMagicalProcDamage("Maman Passive")["Damage"];
						mamanPassiveDamage["Mitigated"] += calculateMagicalProcDamage("Maman Passive")["Mitigated"];
						y = 30;
						
					} else if (proc == "Soul Spikes") {
						procSlot = y;
						procCounts[procSlot] += 1;
						mamanPassiveDamage["Damage"] += calculateMagicalProcDamage("Maman Passive")["Damage"];
						mamanPassiveDamage["Mitigated"] += calculateMagicalProcDamage("Maman Passive")["Mitigated"];
						y = 30;
					}
				}

				if (procCounts[procSlot] > 1){
					
					procResults[procSlot].innerHTML = mamanPassiveDamage["Damage"] + " (-" + mamanPassiveDamage["Mitigated"] + ")" + ' [x'+ procCounts[procSlot] + ']';
				}
				else{
					procResults[procSlot].innerHTML = mamanPassiveDamage["Damage"] + " (-" + mamanPassiveDamage["Mitigated"] + ")";
				}
				
				targetStatSheet["Current Health"] -= calculateMagicalProcDamage("Maman Passive")["Damage"];
		}
	
	targetStatSheet["Current Health"] = targetStatSheet["Current Health"] - damageOutput;
	currentHealthPercent = (targetStatSheet["Current Health"] / targetStatSheet["Health"]) * 100;
	missingHealthPercent = 100 - currentHealthPercent;
	markMissingHealthPercent = 100 - currentHealthPercent;
	if (missingHealthPercent > 60) {
		missingHealthPercent = 60;
	}


	}

	return output;
	
	
}
function calculatePhysicalProcDamage(procItem) {
	var damageAdded = addDamageProc(procItem);
	var targetProtection = targetStatSheet["Physical Protection"];
	var flatPenetration = statSheet["Physical Penetration"];
	var percentPenetration = statSheet["% Physical Penetration"] / 100;
	var percentReduction = statSheet["% Physical Protection Shred"] / 100;
	var actualProtection = targetProtection * (1 - percentReduction) * (1 - percentPenetration) - flatPenetration;

	if (actualProtection < 0) {
		actualProtection = 0;
	}

	if (buffList.includes("Totem of Ku")) {
		preMitigated = preMitigated * 1.1;
		damageOutput = damageOutput * 1.1;
	}
	if (godBuild.includes("Rangda's Mask")) {
		damageOutput = damageOutput * 1.15;
		preMitigated = preMitigated * 1.15;
	}
	if (godBuild.includes("Fighter's Mask")) {
		damageOutput = damageOutput * (1 + (.05 + (.0025 * statSheet['Level'])));
		preMitigated = preMitigated * (1 + (.05 + (.0025 * statSheet['Level'])));
	}
	if (godBuild.includes("The Ferocious Executioner")) {
		damageOutput = damageOutput * (1 + ferociousStacks * 0.02);
		preMitigated = preMitigated * (1 + ferociousStacks * 0.02);
	}
	if (targetBuild.includes("Evolved Prophetic Cloak")) {
		var totalProts = targetStatSheet["Magical Protection"] + targetStatSheet["Physical Protection"];
		if (totalProts > 525) {
			damageOutput = damageOutput * 0.88;
			
		} else if (totalProts > 325) {
			damageOutput = damageOutput * 0.928;
			
		}
	}
	if (debuffList.includes("Compassion")){
		damageOutput = damageOutput * 0.88;
		
	}
	if (debuffList.includes("Rising Dawn")){
		damageOutput = damageOutput * 0.70;
		
	}
	if (ravanaUlt == true) {
		damageOutput = damageOutput * 1.1;
		preMitigated = preMitigated * 1.1;
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
	var flatPenetration = statSheet["Magical Penetration"];
	var percentPenetration = statSheet["% Magical Penetration"] / 100;
	var percentReduction = statSheet["% Magical Protection Shred"] / 100;
	var actualProtection = targetProtection * (1 - percentReduction) * (1 - percentPenetration) - flatPenetration;
	if (procItem == "Tablet of Destinies") {
		actualProtection = 0;
	}
	if (procItem == "Warrior's Axe") {
		actualProtection = 0;
	}
	if (procItem == "Bumba's Hammer") {
		actualProtection = 0;
	}

	if (dragonFormActive == true) {
		if (procItem.includes("Ring")) {
			if (procItem == 'Cyclopean Ring'){
				damageAdded *= .25
			}
			else{
				damageAdded = damageAdded * 0.75;
			}
			
		}

		if (procItem.includes("Animosity")) {
			damageAdded = damageAdded * 0.75;
		}
	}
	if (procItem == "Bumba's Hammer") {
		
	}
	var preMitigated = damageAdded;
	if (actualProtection < 0) {
		actualProtection = 0;
	}

	var damageOutput = (100 * damageAdded) / (actualProtection + 100);
	if (godBuild.includes("Gem of Focus")) {
		damageOutput = damageOutput * 1.15;
		preMitigated = preMitigated * 1.15;
	}
	if (godBuild.includes("Rangda's Mask")) {
		damageOutput = damageOutput * 1.15;
		preMitigated = preMitigated * 1.15;
	}
	if (godBuild.includes("Fighter's Mask")) {
		damageOutput = damageOutput * (1 + (.05 + (.0025 * statSheet['Level'])));
		preMitigated = preMitigated * (1 + (.05 + (.0025 * statSheet['Level'])));
	}
	if (targetBuild.includes("Sigil of The Old Guard")) {
		damageOutput = damageOutput * 0.88;
		preMitigated = preMitigated * 0.88;
	}
	if (targetBuild.includes("Evolved Prophetic Cloak")) {
		var totalProts = targetStatSheet["Magical Protection"] + targetStatSheet["Physical Protection"];
		if (totalProts > 525) {
			damageOutput = damageOutput * 0.88;
			
		} else if (totalProts > 325) {
			damageOutput = damageOutput * 0.928;
			
		}
	}
	if (debuffList.includes("Compassion")){
		damageOutput = damageOutput * 0.88;
		
	}
	if (debuffList.includes("Rising Dawn")){
		damageOutput = damageOutput * 0.70;
		
	}
	if (ravanaUlt == true) {
		damageOutput = damageOutput * 1.1;
		preMitigated = preMitigated * 1.1;
	}
	if (targetStatSheet["Name"] == "Set") {
		damageOutput = damageOutput * 0.85;
		preMitigated = preMitigated * 0.85;
	}
	if (godBuild.includes("Spear of the Magus")) {
		damageOutput = damageOutput * 1.05;
	}

	if (godBuild.includes("Staff of Myrddin")) {
		damageOutput = damageOutput * myrddinTimer;
		preMitigated = preMitigated * myrddinTimer;
	}
	if (buffList.includes("Totem of Ku")) {
		preMitigated = preMitigated * 1.1;
		damageOutput = damageOutput * 1.1;
	}
	if (godBuild.includes("The Ferocious Executioner")) {
		damageOutput = damageOutput * (1 + ferociousStacks * 0.02);
		preMitigated = preMitigated * (1 + ferociousStacks * 0.02);
	}
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
	getBasicDamage();
	if (godStats["Type"] == "Magical") {
		var targetProtection = targetStatSheet["Magical Protection"];
		var flatPenetration = statSheet["Magical Penetration"];
		var percentPenetration = statSheet["% Magical Penetration"] / 100;
		var percentReduction = statSheet["% Magical Protection Shred"] / 100;
		var basicDamage = statSheet["Basic Attack Damage"];
	} else {
		var targetProtection = targetStatSheet["Physical Protection"];
		var flatPenetration = statSheet["Physical Penetration"];
		var percentPenetration = statSheet["% Physical Penetration"] / 100;
		var percentReduction = statSheet["% Physical Protection Shred"] / 100;
		var basicDamage = statSheet["Basic Attack Damage"];
	}
	if (statSheet['Name'] == 'Maman Brigitte'){
		if (mamanMark == true){
			mamanPassiveStacks +=2
		}
		else{
			mamanPassiveStacks +=1
		}
		
	}
	
	if (statSheet["Critical Strike Chance"] > 0) {
		var critDamage = 0;
		var damageMultiplier = 0;
		if (godBuild.includes("Deathbringer")) {
					damageMultiplier = 2;
					
				} else if (godBuild.includes("Devoted Deathbringer")) {
					damageMultiplier = 2;
				} else if (godBuild.includes("Malicious Deathbringer")) {
					damageMultiplier = 2;
				} else {
					damageMultiplier = 1.75;
				}
		
				if (targetBuild.includes("Spectral Armor")) {
					damageMultiplier = damageMultiplier - 0.4;
				}
				

		for (var i = 0; i < 100; i++) {
			var roll = getRandomInt(100);
			if (roll <= statSheet["Critical Strike Chance"]) {
				
				critDamage += basicDamage * damageMultiplier;
			} else {
				critDamage += basicDamage;
			}
		}
		critDamage = critDamage / 100;
		basicDamage = critDamage;
	}
	
	if (statSheet["Name"] == "Zeus") {
		basicDamage = basicDamage * (1 + 0.3 * lightningCharges);
	}
	if (chernoPassiveStacks > 2) {
			
			
		chernoPassiveStacks -=3
		var procSlot = 0;
		for (var y = 0; y < procList.length; y++) {
				var proc = procList[y];
				if (proc == "") {
					procSlot = y;
					procCounts[procSlot] = 1;
					
					procList[y] = "Heart of Cold";
					procItems[y].src = "https://webcdn.hirezstudios.com/smite/god-abilities/heart-of-cold.jpg";
					procItems[y].style.display = "flex";
					procResults[y].style.display = "block";
					chernoPassiveDamage["Damage"] += calculatePhysicalProcDamage("Heart of Cold")["Damage"];
					chernoPassiveDamage["Mitigated"] += calculatePhysicalProcDamage("Heart of Cold")["Mitigated"];
					
					y = 30;
					
				} else if (proc == "Heart of Cold") {
					procSlot = y;
					procCounts[procSlot] += 1;
					chernoPassiveDamage["Damage"] += calculatePhysicalProcDamage("Heart of Cold")["Damage"];
					chernoPassiveDamage["Mitigated"] += calculatePhysicalProcDamage("Heart of Cold")["Mitigated"];
					y = 30;
				}
				
			}
			for (var item of godBuild){
				if (item != ""){
					perAbilityProcDisplay(item, "Heart of Cold")
				}
			}

			if (procCounts[procSlot] > 1){
				
				procResults[procSlot].innerHTML = chernoPassiveDamage["Damage"] + " (-" + chernoPassiveDamage["Mitigated"] + ")" + ' [x'+ procCounts[procSlot] + ']';
			}
			else{
				procResults[procSlot].innerHTML = chernoPassiveDamage["Damage"] + " (-" + chernoPassiveDamage["Mitigated"] + ")";
			}
			
			targetStatSheet["Current Health"] -= calculatePhysicalProcDamage("Heart of Cold")["Damage"];
			
	}

	if (statSheet["Name"] == "Erlang Shen") {
		basicDamage = basicDamage + targetStatSheet["Health"] * 0.02 + statSheet["Basic Attack Damage"] * 0.05;
	}
	var preMitigated = basicDamage;

	if (statSheet["Name"] == "Maman Brigitte") {
		basicDamage = basicDamage * 0.5;
		preMitigated = preMitigated * 0.5;
	}

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
	var damageMultiplier = 1;

	if (hydrasProcced == true) {
		damageMultiplier +=  .25
		hydrasProcced = false;
	}
	if (godBuild.includes("Dominance")) {
		percentPenetration += 0.2;
	}

	if (godBuild.includes("Death's Temper")) {
		damageMultiplier += .35
	}
	
	basicDamage *= damageMultiplier;
	preMitigated *= damageMultiplier;

	if (targetBuild.includes("Sigil of The Old Guard")) {
		damageOutput = damageOutput * 0.88;
		preMitigated = preMitigated * 0.88;
	}

	



	
	if (targetStatSheet["Name"] == "Set") {
		damageOutput = damageOutput * 0.85;
		preMitigated = preMitigated * 0.85;
	}
	if (convergenceActive == true) {
		basicDamage = basicDamage * 0.65;
		preMitigated = preMitigated * 0.65;
	}
	if (dragonFormActive == true) {
		var dragonRank = document.getElementById('abilityFourSlider').value;
		basicDamage = ((10 + (10 * dragonRank)) + statSheet["Magical Power"] * 0.1) * 3;
		preMitigated = basicDamage;
	}

	var actualProtection = targetProtection * (1 - percentReduction) * (1 - percentPenetration) - flatPenetration;
	if (actualProtection < 0) {
		actualProtection = 0;
	}
	var damageOutput = (100 * basicDamage) / (actualProtection + 100);

	if (godBuild.includes("Gem of Focus")) {
		preMitigated = preMitigated * 1.15;
		damageOutput = damageOutput * 1.15;
	}
	if (godBuild.includes("The Ferocious Executioner")) {
		damageOutput = damageOutput * (1 + ferociousStacks * 0.02);
		preMitigated = preMitigated * (1 + ferociousStacks * 0.02);
		console.log(ferociousStacks);
	}
	if (godBuild.includes("Rangda's Mask")) {
		damageOutput = damageOutput * 1.15;
		preMitigated = preMitigated * 1.15;
	}
	if (godBuild.includes("Fighter's Mask")) {
		damageOutput = damageOutput * (1 + (.05 + (.0025 * statSheet['Level'])));
		preMitigated = preMitigated * (1 + (.05 + (.0025 * statSheet['Level'])));
	}
	if (ravanaUlt == true) {
		damageOutput = damageOutput * 1.1;
		preMitigated = preMitigated * 1.1;
	}
	if (godBuild.includes("Spear of the Magus")) {
		preMitigated = preMitigated * 1.05;
		damageOutput = damageOutput * 1.05;
	}
	if (buffList.includes("Totem of Ku")) {
		preMitigated = preMitigated * 1.1;
		damageOutput = damageOutput * 1.1;
	}
	if (godBuild.includes("Staff of Myrddin")) {
		damageOutput = damageOutput * myrddinTimer;
		preMitigated = preMitigated * myrddinTimer;
	}
	if (targetBuild.includes("Evolved Prophetic Cloak")) {
		var totalProts = targetStatSheet["Magical Protection"] + targetStatSheet["Physical Protection"];
		if (totalProts > 525) {
			damageOutput = damageOutput * 0.88;
			
		} else if (totalProts > 325) {
			damageOutput = damageOutput * 0.928;
			
		}
	}
	if (debuffList.includes("Compassion")){
		damageOutput = damageOutput * 0.88;
		
	}
	if (debuffList.includes("Rising Dawn")){
		damageOutput = damageOutput * 0.70;
		
	}

	if (mamanPassiveStacks > 4) {
			
		mamanPassiveStacks -=5
		var procSlot = 0;
		for (var y = 0; y < procList.length; y++) {
				var proc = procList[y];
				if (proc == "") {
					procSlot = y;
					procCounts[procSlot] = 1;
					
					procList[y] = "Soul Spikes";
					procItems[y].src = "https://webcdn.hirezstudios.com/smite/god-abilities/soul-spikes.jpg";
					procItems[y].style.display = "flex";
					procResults[y].style.display = "block";
					mamanPassiveDamage["Damage"] += calculateMagicalProcDamage("Maman Passive")["Damage"];
					mamanPassiveDamage["Mitigated"] += calculateMagicalProcDamage("Maman Passive")["Mitigated"];
					console.log(mamanPassiveDamage)
					y = 30;
					
				} else if (proc == "Soul Spikes") {
					procSlot = y;
					procCounts[procSlot] += 1;
					mamanPassiveDamage["Damage"] += calculateMagicalProcDamage("Maman Passive")["Damage"];
					mamanPassiveDamage["Mitigated"] += calculateMagicalProcDamage("Maman Passive")["Mitigated"];
					y = 30;
				}
			}

			if (procCounts[procSlot] > 1){
				console.log(procCounts[procSlot])
				procResults[procSlot].innerHTML = mamanPassiveDamage["Damage"] + " (-" + mamanPassiveDamage["Mitigated"] + ")" + ' [x'+ procCounts[procSlot] + ']';
			}
			else{
				procResults[procSlot].innerHTML = mamanPassiveDamage["Damage"] + " (-" + mamanPassiveDamage["Mitigated"] + ")";
			}
			
			targetStatSheet["Current Health"] -= calculateMagicalProcDamage("Maman Passive")["Damage"];
	}

	var damageMitigated = preMitigated - damageOutput;
	damageOutput = Math.round(damageOutput);
	damageMitigated = Math.round(damageMitigated);
	targetStatSheet["Current Health"] -= damageOutput;
	
	targetStatSheet["Current Health"] = targetStatSheet["Current Health"] - damageOutput;
	currentHealthPercent = (targetStatSheet["Current Health"] / targetStatSheet["Health"]) * 100;
	missingHealthPercent = 100 - currentHealthPercent;
	markMissingHealthPercent = 100 - currentHealthPercent;
	output['Damage'] = damageOutput
	output['Mitigated'] = damageMitigated
	
	return output;
}
