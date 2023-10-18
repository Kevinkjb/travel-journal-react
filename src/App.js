import Header from './components/Header'
import Card from './components/Card'
import data from './data'
import './App.css';

function App() {
  const cards = data.map(item =>{
      return(
        <Card 
          key={item.id}
          item={item}
        />
      )
  })

  return (
    <>
      <Header/>
      {cards}
      
    </>
  )
}

export default App;
