import React, { useState } from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {

  const [celebs, setCelebs] = useState(contacts.splice(0, 5))
  const [celebz, setCelebz] = useState(contacts)

  const showCelebs = () => {
    return celebs.map(each => {
      return (
        <tr>
          <td><img src={each.pictureUrl} /></td>
          <td>{each.name}</td>
          <td>{each.popularity}</td>
          <td><button onClick={deleteThis}>delete</button></td>
        </tr>
      )
    })
  }

  const deleteThis = () => {
    console.log()
  }

  const addRandom = () => {
    let randomC = Math.floor(Math.random() * celebz.length)
    let randomCeleb = celebz.splice(randomC, 1)[0]
    let newCelebs = [...celebs]
    newCelebs.push({...randomCeleb})
    setCelebs(newCelebs)
  }

  const sortName = () => {
    let nameSorted = celebs.sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB)
        return -1;
      if (nameA > nameB)
        return 1;
      else
        return 0;
    })
    let newerCelebs = [...celebs]
    newerCelebs = [...nameSorted]
    console.log(newerCelebs)
    setCelebs(newerCelebs)
  }
  const sortPop = () => {
    let popSorted = celebs.sort((a, b) => (b.popularity - a.popularity))
    let newerCelebs = [...celebs]
    newerCelebs = [...popSorted]
    console.log(newerCelebs)
    setCelebs(newerCelebs)
  }

  return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortName}>Sort by name</button>
        <button onClick={sortPop}>Sort by popularity</button>
        <table>
          <thead>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
          </thead>
          <tbody>
            <tr>
             {showCelebs()}
            </tr>
          </tbody>
        </table>
      </div>
    );

}

export default App;