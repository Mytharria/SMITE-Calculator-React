
import { itemData } from "/src/assets/dataFiles/itemData.js";
import { godData } from "/src/assets/dataFiles/godData.js";
import React, { useRef, useState } from "react";

var items = [];
var gods = [];

for (var god of godData) {
	gods.push(god);
}

for (var item of itemData) {
	items.push(item);
}



function ItemBox(props) {
	return (
			<div className="item" data-tooltip={props.stats} data-name={props.name}>
				<img
					onClick={() => {
						props.updateIcon(props.icon);
						props.hideShow();
					}}
					src={props.icon}></img>
			</div>
	);
}

function GodBuffs(props){
    return (
        <div className='buff' data-tooltip={props.stats} data-name ={props.name}>
            <img id={props.name} src="/src/assets/icons/selectorImage.webp"></img>
        </div>
    );
} 

function GodBox(props){
    return (
        <div className='god'>
            <img src={props.icon}></img>
        </div>
    );}

function ItemBuild(props) {
	return (
			<div data-tooltip={props.stats} data-name={props.name}>
				<img
					className="itemBuild"
					src="/src/assets/icons/selectorImage.webp"
					onClick={() => {
						props.updateSlot(props.slot);
						props.hideShow();
					}}></img>
			</div>
	);
}

function abilityLoadout(props){
    return (
        <>
        <div>
            <img id ={props.abilitySlot} className ='abilityLoadout' style="display: none;" src="" onclick="removeAbility(this,1)"/>
            <input className='abilityLoadoutForm' type="hidden" name="abilityOne" id='abilityOneForm' value=""/>
            <div class="results"></div>
        </div>
        </>
    );
} 

function GodIcon(){

    return (
        <div className='god'>
        <img id='godImage' src="/src/assets/icons/selectorImage.webp"></img>
        </div>
    );}

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
	var itemComponents = [];
	var godComponents = [];
	var buildComponents = [];
	var buffComponents = [];

	//Component Array Creators
	for (var i = 0; i < 6; i++) {
		buffComponents.push(<GodBuffs></GodBuffs>);
	}

	for (var i = 0; i < 7; i++) {
		buildComponents.push(<ItemBuild hideShow={hideShow} slot={i} updateSlot={updateSlot}></ItemBuild>);
	}

	for (var god of gods) {
		godComponents.push(<GodBox icon={god["icon"]} />);
	}

	for (var item of items) {
		if (item["tags"].includes("Consumable") != true) {
			var statString = "";
			for (var stat in item["stats"]) {
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
