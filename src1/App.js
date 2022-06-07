
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import  Card from './components/Card'
import Content from './Content'
function App() {
  const cards = Content.map(item => {
    return (
      <Card 
      id={item.id}
      item={item}
      // img={item.img}
      // name={item.name}
      // rating={item.rating}
      // country={item.country}
      // counting={item.counting}
      // price={item.price}
      // instock={item.instock}

      />
    )
})      
  return (
    <>
      <Navbar/>
      <Banner/>
      <div className='display'>
     {cards}
      </div>
     
    </>
  );
}

export default App;
