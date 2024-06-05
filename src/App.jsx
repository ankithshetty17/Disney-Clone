import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Slider from './components/slider'
import Productionhouse from './components/productionhouse'
import Genremovielist from './components/genremovielist'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className=''>
      <Header/>
      <Slider/>
      <Productionhouse/>
      <Genremovielist/>
      </div>
  )
}

export default App
