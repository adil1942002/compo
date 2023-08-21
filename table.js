function TableData(props) {
    // let { id, name, fname, age } = props;
    return (

        <table className="table w-50 mx-auto">
            <thead>
                <tr >
                    <th className="text-info bg-danger" scope="col">Id</th>
                    <th className="text-info bg-danger" scope="col">Name</th>
                    <th className="text-info bg-danger" scope="col">FatherName</th>
                    <th className="text-info bg-danger" scope="col">age</th>
                </tr>
            </thead>
            <tbody>

                    {props.tR}


            </tbody>
        </table>
)

}

export default TableData;