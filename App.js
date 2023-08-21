import './App.css';
import { useState } from 'react';
import Button from './compo/button';
import Cards from './compo/card';
import TableData from './compo/table';
import Inputs from './compo/inputs';
import Select from './compo/select';

function App() {
  let show = (data) => {
    let div = document.getElementById("div")
    div.className = data
  }
  const [selectedOption, setSelectedOption] = useState('');
  let [text, setText] = useState("");
  let [password, setPassword] = useState("");
  let [lName, setLName] = useState("");


  let studentsData = [
    {
      id: "A-1",
      name: "Ahmed",
      fName: "Abid",
      age: 18
    },
    {
      id: "A-2",
      name: "Adil",
      fName: 'Abid',
      age: 21
    },
    {
      id: "A-3",
      name: "ubaid",
      fName: "Abid",
      age: 26,
    },
  ]
  let arr = studentsData.filter((x)=>x.age)
  return (
    <div>
      <div className='text-center my-5'>
        <h1>component button</h1>
        <Button onclicK={() => show("triangle")} vaL="triangle" />
        <Button onclicK={() => show("square")} vaL="square" />
        <Button onclicK={() => show("circle")} vaL="circle" />
        <span id='div' className='text-center'></span>
      </div>
      <div className='text-center'>
        <h1>component Card</h1>
        <div className='d-flex justify-content-evenly'>

        {
          studentsData.map((x, i) => <Cards key={i} id={x.id} name={x.name} fName={x.fName} age={x.age} />)
        }
        </div>

      </div>
      <div className='text-center'>
        <h1>component Table</h1>
        <div>
          <TableData tR={studentsData.map((x,i) => {
            return <>
              <tr>

                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.fName}</td>
                <td>{x.age}</td>
              </tr>
            </>
          })}
          />
          {/* Testing  */}
          <TableData tR={<>
            <tr>
              <td>x.id</td>
              <td colSpan={1}></td>
              <td>x.fName</td>
              <td>x.age</td>
            </tr>
            <tr>
              <td>x.id</td>
              <td>x.name</td>
              <td>x.fName</td>
              <td>x.age</td>
            </tr>
            <tr>
              <td>x.id</td>
              <td>x.name</td>
              <td colSpan={1}></td>
              <td >x.age</td>
            </tr>
            <tr>
              <td>x.id</td>
              <td colSpan={1}></td>
              <td>x.fName</td>
              <td>x.age</td>
            </tr>
          </>
          }
          />
        </div>
      </div>
      <div className='text-center my-5'>
        <h1>component Inputs</h1>
        <span>
          <Inputs plac="Enter Name" text ="text" useState = {setText}/>
          <p>{text}</p>
        </span>
        <span className='mx-5'>
          <Inputs plac="Enter Password" text="password" useState={setPassword} />
          <p>{"*".repeat(password.length)}</p>
        </span>
        <span>
          <Inputs plac="Enter last Name" text ="text" useState = {setLName}/>
          <p>{lName}</p>
        </span>


      </div>
<div className='text-center'>
        <h1>component Select</h1>
        {/* <Select
          label="Select Option"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          optionsList={ studentsData}
          />
        <Select
          label="Select Option"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          optionsList={ studentsData}
          /> */}
        <Select
          label="Select name"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          optionsList={studentsData.map((option, index) => {
            return <>
              <option key={index} value={option.value}>
                {option.name}
              </option>
            </>
          }
          )}
          />
        <Select
          label="Select Age"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          optionsList={studentsData.map((option, index) => {
            return <>
              <option key={index} value={option.value}>
                {option.age}
              </option>
            </>
          }
          )}
          />
        <Select
          label="Select ID"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          optionsList={studentsData.map((option, index) => {
            return <>
              <option key={index} value={option.value}>
                {option.id}
              </option>
            </>
          }
          )}
          />
        







</div>

    </div>
  );
}
export default App;
