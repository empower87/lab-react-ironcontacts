import React, { useState } from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  const [celebs, setCelebs] = useState(contacts.slice(0,5))
  const [celebz, setCelebz] = useState(contacts.slice(5))

  const showCelebs = () => {
    return celebs.map(each => {
      return (
        <tr key={each.id}>
          <td><img src={each.pictureUrl} /></td>
          <td>{each.name}</td>
          <td>{each.popularity}</td>
          {/* <td><button onClick={deleteThis}>delete</button></td> */}
        </tr>
      )
    })
  }

  // const deleteThis = () => {
  //   console.log(celebz.length)
  // }
  const addRandom = () => {
    if (celebz.length <= 0) {
      alert("ok, relax, you know them all..")
      return
    }
    let randomC = Math.floor(Math.random() * celebz.length)
    let randomCeleb = celebz.splice(randomC, 1)[0]
    let newCelebs = [...celebs]
    newCelebs.unshift({...randomCeleb})
    console.log(celebz.length)
    setCelebs(newCelebs)
  }

  const sortName = () => {
    let nameSorted = celebs.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
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
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
             {showCelebs()}
          </tbody>
        </table>
      </div>
    );

}

export default App;