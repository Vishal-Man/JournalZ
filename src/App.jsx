import HomePage from './components/HomePage'
import './App.css'
import Log from './components/LogPage'
import cat2 from './assets/cat2.jpg'
import data from './data'

function App() {
  const entryElements = data.map((entry) =>{
    return (
      <Log 
        img = {{
          src: entry.img.src,
          alt: entry.img.alt
        }}
        CountryName = {entry.title}
        location = {entry.country}
        dates = {entry.dates}
        description = {entry.text}
      />
    )
  })

  return (
    <>
      <HomePage />
      <main className='container'>
        {entryElements}
      </main>
      
    </>
  )
}

export default App
