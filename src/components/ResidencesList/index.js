import "../../styles/LogementList.css"
import { useState, useEffect } from 'react';


function LogementList(){


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


    return(
        <div className="LLBackground">
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

export default LogementList


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
*/