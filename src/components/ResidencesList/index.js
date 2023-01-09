import "../../styles/LogementList.css"
import { useState, useEffect } from 'react';
import React from "react"


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
              <div key={residence.id} className="coverCard">
                <a href={"/ResidenceOverview/"+residence.id}>
                  <img src={residence.cover} className="coverPic" alt="photo_de couverture de l'habitat"/>
                  <p className="coverTitle">{residence.title}</p>
                </a>
              </div>   
          )
          }
        </div>
    )


}

export default LogementList
