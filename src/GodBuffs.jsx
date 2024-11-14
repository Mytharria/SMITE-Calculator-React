function GodBuffs(props){
    return (
        <div className='buff' data-tooltip={props.stats} data-name ={props.name}>
            <img id={props.name} src="/src/assets/icons/selectorImage.webp"></img>
        </div>
    );
} 
export default GodBuffs