import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Contact from './Pages/Contact'
import Footer from './component/Footer'
import Card from './component/Card'
import { useEffect } from 'react'

function App() {
  //fetching data from API
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
 


  // const user = [
  //   {Name: "Amaresh",
  //    Age: "40",
  //    Gender: "M"
  //   },
    
  //   {Name: "Aakash",
  //    Age: "24",
  //    Gender: "M" 
  //   }
  // ]

  return (
    <>
      <Navbar></Navbar>
      {/* <Contact></Contact> */}
      {/* {user.map((item,index) => {
        return(<Card key={index} Name={item.Name} Age={item.Age} Gender={item.Gender}/>)
      })
      }  */}
      {
        data.map(user => (
        <Card key={user.id} user={user} />  
        ))}
      <Footer></Footer>
    </>
  )
}

export default App
