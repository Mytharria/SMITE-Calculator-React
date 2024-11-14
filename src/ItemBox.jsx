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
export default ItemBox