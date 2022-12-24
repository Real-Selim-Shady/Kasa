import '../../styles/App.css';
import LogementList from '../../components/ResidencesList';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import '../../styles/Home.css'
import ResidencePage from '../../components/ResidenceOverview';
import Banner from '../../components/Header';

function App() {

  const [residences, updateResidences] = useState([])

  useEffect(() => {

    fetch(`data/data.json`)
      .then((response) => {
        console.log(response)
      return response.json();
      })
      .then((data) => {
        console.log(data)
        updateResidences(data)
      })
      
   }, [])
 


  return (
    <div className="App">
      <Routes>

        <Route path='/' element={
          <section className='appHome'>
          <div className='homeBackground'>
            <LogementList residences={residences} updateResidences={updateResidences} />
          </div>
        </section>
        }/>

        <Route path='/ResidenceOverview/:id' element={
          <section className='appHome'>
          <div className='homeBackground'>
            <ResidencePage residences={residences} updateResidences={updateResidences} />
          </div>
        </section>
        }/>

      </Routes>
    </div>
  );
}

export default App;



/*<Routes>
<Route exact path="/">
  <App />
</Route>
<Route exact path="/FicheLogement">
  <FicheLogement />
</Route>
<Route exact path="/Error">
  <Error />
</Route>
<Route exact path="/APropos">
  <APropos />
</Route>
</Routes>*/