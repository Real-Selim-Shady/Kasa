import "../../styles/FicheLogement.css"
import "../../styles/App.css"
import { useParams } from "react-router-dom"



function ResidencePage({residences, updateResidences}){

  const params = useParams();
  console.log(params);

  return(
    <div className="App">
      <p>coucou</p>
      { residences.map((residence) =>
              <div key={residence.id}>
                <a href={"/ResidenceOverview/"+residence.id}>
                  <p>{residence.title}</p>
                </a>
              </div>   
          )
          }
    </div>
  )

}

export default ResidencePage


/*
import { BrowserRouter as Router } from 'react-router-dom'
const BoutonDeNavigation = ({ libelle, history }) => (
  <button type="button" onClick={() => history.push('/ma-nouvelle-url')}>{libelle}</button>
);
const SomeComponent = () => (
  <Route path="/" render={(props) => <BoutonDeNavigation {...props} title="Changer de page" />} />
)
const App = () => (
  <Router>
    <SomeComponent />
    <AnotherComponent />
  </Router>
);

        <section className='appHome'>
          {console.log("residenceOverview")}
          <div className='homeBackground'>
            <p>ResidenceOverview</p>
          </div>
        </section>
*/