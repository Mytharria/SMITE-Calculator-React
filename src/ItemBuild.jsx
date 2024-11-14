

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
export default ItemBuild