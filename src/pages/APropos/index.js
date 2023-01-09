import "../../styles/APropos.css"
import "../../styles/Colapse.css"
import React from "react"

function APropos () {
    
  const Colapse2 = (e) => {
        let parent = e.target.parentElement;
        //let parentID = parent.id;

        let grandParent = parent.parentElement;
        //let grandParentID = grandParent.id;

        let grandParent2 = grandParent.parentElement;
        //let grandParent2ID = grandParent2.id;

        let ancestor = grandParent2.parentElement;
        //let ancestorID = ancestor.id

        if (e.target.id === "opened") {
        e.target.style.transform = "rotate(180deg)"; 
        e.target.id = "closed";
        //if(ancestor.lastChild.style.display === "flex"){ancestor.lastChild.style.display = "none"}
        ancestor.lastChild.style.display = "none"
        } else {
        e.target.id = "opened"
        e.target.style.transform = "rotate(360deg)"; 
        //if(ancestor.lastChild.style.display === "none"){ancestor.lastChild.style.display = "flex"}
        ancestor.lastChild.style.display = "flex"
        }
    }

    return (
        <div className="aProposBloc">
            <div className="supraBloc" id="ancestor">
                <div className="blocTitle" id="grandParent2">
                    <p>Fiabilité</p>
                    <div className="arrowBloc" id="grandParent">
                        <button className="arrowColapse" id="parent"><img onClick={Colapse2} id="opened" src="https://i.ibb.co/C9DVxRJ/arrow-Down.png" alt="fleche de bloc d'information" className="arrowSize"/></button>
                    </div>
                </div>
                <div className="blocInfoAPropos" id="cousin1">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
                </div>
            </div>
            <div className="supraBloc" id="ancestor">  
                <div className="blocTitle" id="grandParent2">
                    <p>Respect</p>
                    <div className="arrowBloc" id="grandParent">
                        <button className="arrowColapse" id="parent"><img onClick={Colapse2} id="opened" src="https://i.ibb.co/C9DVxRJ/arrow-Down.png" alt="fleche de bloc d'information" className="arrowSize"/></button>
                    </div>
                </div>
                <div className="blocInfoAPropos" id="cousin2">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                </div>
            </div>
            <div className="supraBloc" id="ancestor">
                <div className="blocTitle" id="grandParent2">
                    <p>Service</p>
                    <div className="arrowBloc" id="grandParent">
                        <button className="arrowColapse" id="parent"><img onClick={Colapse2} id="opened" src="https://i.ibb.co/C9DVxRJ/arrow-Down.png" alt="fleche de bloc d'information" className="arrowSize"/></button>
                    </div>
                </div>
                <div className="blocInfoAPropos" id="cousin3">
                Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                </div>
            </div>
            <div className="supraBloc" id="ancestor">  
                <div className="blocTitle" id="grandParent2">
                    <p>Sécurité</p>
                    <div className="arrowBloc" id="grandParent">
                        <button className="arrowColapse" id="parent"><img onClick={Colapse2} id="opened" src="https://i.ibb.co/C9DVxRJ/arrow-Down.png" alt="fleche de bloc d'information" className="arrowSize"/></button>
                    </div>
                </div>
                <div className="blocInfoAPropos" id="cousin4">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                </div>
            </div>
        </div>
    )

}

export default APropos