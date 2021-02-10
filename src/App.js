import React, { useState } from 'react';
import contacts from './contacts.json';
import './App.css';

function App() {
  const called = false;
  let arr = []
  const [celebs, setCelebs] = useState(contacts)
  const [celebz, setCelebz] = useState(contacts)
  const [news, setNews] = useState(arr)
  const copyContacts = [...contacts]

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
    }).splice(0, 5)
  }


  // const deleteThis = () => {
  //   console.log(celebz.length)
  // }

  const addRandom = () => {
    let randomC = Math.floor(Math.random() * copyContacts.length)
    let randomCeleb = copyContacts.splice(randomC, 1)[0]
    // let newCelebs = celebs
    // newCelebs.push(randomCeleb)
    arr.push(randomCeleb)
    console.log(arr)
    // setCelebs(newCelebs)
    setNews(function() {
        return arr.map(each => {
          return (
            <tr key={each.id}>
              <td><img src={each.pictureUrl} /></td>
              <td>{each.name}</td>
              <td>{each.popularity}</td>
              {/* <td><button onClick={deleteThis}>delete</button></td> */}
            </tr>
          )
        })
    })

  }

  // const sortName = () => {
  //   let nameSorted = celebs.sort((a, b) => {
  //     let nameA = a.name.toLowerCase();
  //     let nameB = b.name.toLowerCase();
  //     if (nameA < nameB)
  //       return -1;
  //     if (nameA > nameB)
  //       return 1;
  //     else
  //       return 0;
  //   })
  //   let newerCelebs = [...celebs]
  //   newerCelebs = [...nameSorted]
  //   console.log(newerCelebs)
  //   setCelebs(newerCelebs)
  // }
  // const sortPop = () => {
  //   let popSorted = celebs.sort((a, b) => (b.popularity - a.popularity))
  //   let newerCelebs = [...celebs]
  //   newerCelebs = [...popSorted]
  //   console.log(newerCelebs)
  //   setCelebs(newerCelebs)
  // }

  return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={addRandom}>Add Random Contact</button>
        {/* <button onClick={sortName}>Sort by name</button>
        <button onClick={sortPop}>Sort by popularity</button> */}
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
             {news}
          </tbody>
        </table>
      </div>
    );

}

export default App;