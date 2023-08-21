function Button (props){
    return <button  type="button" onClick={props.onclicK} className="btn btn-outline-info">{props.vaL}</button>
}
export default Button;