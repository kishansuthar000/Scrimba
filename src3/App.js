import Navbar from "./components/Navbar";
import Places from "./components/Places";
import Placedata from './data'
function App() {
const items=Placedata.map(data=>
  <Places

            data={data}
              // image={data.img}
              // name={data.name}
              // location={data.loc}
              // startdate={data.sdate}
              // enddate={data.edate}
              // info={data.info}
  
  />
)


  return (
    <>
     <Navbar/>
     <div className="container">
          {items}

     </div>
   
    
    </>
  );
}

export default App;
