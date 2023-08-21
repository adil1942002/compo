function Inputs (props){
    return <input placeholder={props.plac}
     type={props.text}
      onChange={e => {props.useState(e.target.value)}}
                style={{color:"darkcyan",outlineColor:"darkcyan",borderRadius:"10px",textAlign:"center"}}/>
    
}
export default Inputs;