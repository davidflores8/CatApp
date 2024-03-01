import './App.css'
import { useCatImage } from './Hooks/useCatImage'
import { useCatFact } from './Hooks/useCatFact'

function App() {


  const {fact, refreshFact} = useCatFact()
  const {imageURL} = useCatImage({fact})
  
  
  //Cada vez que la página inicia realiza el fetch
    
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
    <h1>App de gatitos</h1>
    <button onClick={handleClick}>Get new fact</button>
    {fact&& <p>{fact}</p>}
    {imageURL && <img src={imageURL} alt='Image extracted using the first three words for fact'/>}
    </>
  )
}

export default App
