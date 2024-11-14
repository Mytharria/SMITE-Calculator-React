
import { itemData } from "/src/assets/dataFiles/itemData.js";
import { godData } from "/src/assets/dataFiles/godData.js";
import React, { useRef, useState } from "react";
import GodIcon from "./godIcon.jsx";
import ItemBox from "./itemBox";
import ItemBuild from "./itemBuild";
import GodBox from "./godBox.jsx";
import GodBuffs from "./godBuffs.jsx";

let items = [];
let gods = [];

for (let god of godData) {
	gods.push(god);
}

for (let item of itemData) {
	items.push(item);
}

function App() {
	const overlayRef = useRef();
	const overlayRef2 = useRef();
	const [itemIcon, updateIcon] = useState();
	const [itemSlot, updateSlot] = useState();

	function updateIcon3() {
		overlayRef2.current.style.display = "-webkit-box";
	}
	function updateIcon4() {
		overlayRef2.current.style.display = "none";
	}

	//Component Arrays
	let itemComponents = [];
	let godComponents = [];
	let buildComponents = [];
	let buffComponents = [];

	//Component Array Creators
	for (let i = 0; i < 6; i++) {
		buffComponents.push(<GodBuffs></GodBuffs>);
	}

	for (let i = 0; i < 7; i++) {
		buildComponents.push(<ItemBuild hideShow={hideShow} slot={i} updateSlot={updateSlot}></ItemBuild>);
	}

	for (let god of gods) {
		godComponents.push(<GodBox icon={god["icon"]} />);
	}

	for (let item of items) {
		if (item["tags"].includes("Consumable") != true) {
			let statString = "";
			for (let stat in item["stats"]) {
				statString += stat + ":";
				statString += " " + item["stats"][stat] + "\n";
			}
			itemComponents.push(
				<ItemBox updateIcon={updateIcon} hideShow={hideShow} icon={item["icon"]} stats={statString} name={item["name"] + "\n"} />
			);
		}
	}

	function hideShow() {
		const box = document.getElementsByClassName("overlay");
		const itemClass = document.getElementsByClassName("itemBuild");
		if (box[0].style.display == "inline") {
			box[0].style.display = "none";
			itemClass[itemSlot].src = itemIcon;
		} else {
			box[0].style.display = "inline";
		}
	}

	return (
		<div className="bigContainer">
			<div className="leftContainer">
				<div className="godDiv">
					<div className="godImageDiv" onClick={updateIcon3}>
						<GodIcon></GodIcon>
					</div>
					<div className="labels">
						<h2>Items</h2>
					</div>
					<div className="godBuild">{buildComponents}</div>
					<div className="labels">
						<h2>Buffs</h2>
					</div>
					<div className="godBuffs">{buffComponents}</div>
				</div>
			</div>
			<div className="midContainer"></div>
			<div className="rightContainer">
				<div className="godDiv">
					<div className="godImageDiv" onClick={updateIcon3}>
						<GodIcon></GodIcon>
					</div>
					<div className="labels">
						<h2>Items</h2>
					</div>
					<div className="godBuild">{buildComponents}</div>
					<div className="labels">
						<h2>Buffs</h2>
					</div>
					<div className="godBuffs">{buffComponents}</div>
				</div>
			</div>
			<div className="overlay" ref={overlayRef}>
				{itemComponents}
			</div>

			<div className="overlay2" onClick={updateIcon4} ref={overlayRef2}>
				{godComponents}
			</div>
		</div>
	);
}

export default App;
