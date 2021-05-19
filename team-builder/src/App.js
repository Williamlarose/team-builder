import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Form from './Form'
const Team = [{ Name: "Zach", Email: "sleuthspider@hotmail", Role: "top baller" },
{ Name: "Bobby", Email: "Zoeylover@gmail", Role: "Omicoder" }, { Name: "William", Email: "happyflagday", Role: "Ceo" }]

const initialFormValues = { Name: "", Email: "", Role: "" }
function App() {
  const [team, setTeam] = useState(Team)
  const [formValues, setFormvalues] = useState(initialFormValues)
  function change(event) {
    const { name, value } = event.target
    setFormvalues({ ...formValues, [name]: value })
  }
  function submit(event) {
    event.preventDefault()
    const newTeam = {
      Name: formValues.Name.trim(),
      Email: formValues.Email.trim()
    }
    setTeam([...team, newTeam])
    setFormvalues(initialFormValues)
  }
  console.log('yo', team)
  return (
    <div className="App">
      <header className="App-header">
        {team.map((tea, idx) => {
          return (
            <div key={idx}>
              Name {tea.Name} and Email is {tea.Email})

            </div>

          )
        })}
        <form onSubmit={submit}><input
          type='text'
          name='Name'
          onChange={change}
          value={formValues.Name}
        />
          <input
            type='text'
            name='Email'
            onChange={change}
            value={formValues.Email}
          />
          <button>Submit</button></form>
      </header>
    </div>
  );
}

export default App;
