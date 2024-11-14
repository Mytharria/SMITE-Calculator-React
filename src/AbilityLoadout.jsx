function AbilityLoadout(props){
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
export default AbilityLoadout