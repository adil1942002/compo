function Cards (props){
         let {id,name,fName,age} = props
    return <div>
            
        
        <div className="card mx-auto bg-info " style={{width: "10rem"}}>
            <h3>Data</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-danger text-info">{id}</li>
                <li className="list-group-item bg-danger text-info">{name}</li>
                <li className="list-group-item bg-danger text-info">{fName}</li>
                <li className="list-group-item bg-danger text-info">{age}</li>
            </ul>
        </div>
    </div>
}
export default Cards;