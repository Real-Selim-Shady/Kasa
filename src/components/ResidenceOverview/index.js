import "../../styles/FicheLogement.css"
import "../../styles/App.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react';



function ResidencePage(){


  const [residences2, updateResidences2] = useState([])

  useEffect(() => {

    fetch(`../data/data.json`)
      .then((response2) => {
        console.log(response2)
      return response2.json();
      })
      .then((data2) => {
        console.log(data2)
        updateResidences2(data2)
      })
      
   }, [])

  const params = useParams();
  //console.log(params.id);

  /*const URLparams = new URLSearchParams(window.location.search);
  const params2 = URLparams.get("residence2.id")
  console.log(params2)*/

  return(
    <div className="App">
      <p>section fiche de logement</p>
      { residences2.map((residence2) =>
              /*<div key={residence2.id}>
                <div>
                  <p>{residence2.title}</p>
                </div>
              </div>   */
            (params.id === residence2.id) ? 
            (
              <div  key = {residence2.id}>
                <div className="blocInfo">HOST TO DO</div>
                {/*<div className="blocInfoColonne">  {residence2.host.map((hostInfo)=>
                    <div key={residence2.id}>{hostInfo}</div>
                  )} 
                </div>*/}
                <div className="blocInfo">titre: {residence2.title}</div>
                <div className="blocInfo">description: {residence2.description}</div>
                <div className="blocInfo">rating: {residence2.rating}</div>
                <div className="blocInfo">localisation: {residence2.location}</div>
                <div className="blocInfoColonne">  
                  <p>pictures:</p>
                  {residence2.pictures.map((picture)=>
                      <img key={residence2.id+picture} src={picture}></img>
                    )} 
                </div>
                <div className="blocInfo">  
                  <p>tags: </p>
                  {residence2.tags.map((tag)=>
                      <div key={residence2.id+tag}>{tag}</div>
                    )} 
                </div>
                <div className="blocInfo">
                  cover: 
                  <img src={residence2.cover}></img>
                </div>
                <div className="blocInfoColonne">  {residence2.equipments.map((equipment)=>
                    <div key={residence2.id+equipment}>{equipment}</div>
                  )} 
                </div>
              </div>
            ) :
            (null)
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