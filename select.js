const Select = ({ label, value, onChange, optionsList }) => {
    return (
        <div className="my-5 ">
            <label className="text-info fw-bold mx-2">{label}</label>
            <select className="text-info p-1 bg-danger" value={value} onChange={onChange}>
                {optionsList}
            </select>
        </div>
    );
};

export default Select;