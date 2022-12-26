import '../../styles/App.css';
import LogementList from '../../components/ResidencesList';
import { Routes, Route } from "react-router-dom"
import '../../styles/Home.css'
import ResidencePage from '../../components/ResidenceOverview';

function App() {


 


  return (
    <div className="App">
      <Routes>

        <Route path='/' element={
          <section className='appHome'>
          <div className='homeBackground'>
            <LogementList />
          </div>
        </section>
        }/>

        <Route path='/ResidenceOverview/:id' element={
          <section className='appHome'>
          <div className='homeBackground'>
            <ResidencePage />
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