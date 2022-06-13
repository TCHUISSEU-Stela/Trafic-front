import React, {useState} from 'react'
import Autres from './autres';
import Circonstances from './circonstances';
import Identification from './identification';
import Localisation from './localisation';
import Personne_1 from './personne_1';
import Personne_2 from './personne_2';

function Form() {

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
      Noms: "",
      Prenoms: "",
      Matricule: "",
      Confirmer_Matricule: "",
      Quartier: "",
      Rue: "",
      Heure: "",
      date: "",
      Noms_1: "",
      Prenoms_1: "",
      Date_de_naissance_1: "",
      lieu_de_naissance_1: "",
      adresse_1: "",
      tel_1: "",
      marque_de_la_voiture_1: "",
      numero_d_immatriculation_1: "",
      numero_perms_de_conduire_1: "",
      categorie_permis_1: "",
      numero_CNI_1: "",
      Noms_2: "",
      Prenoms_2: "",
      Date_de_naissance_2: "",
      lieu_de_naissance_2: "",
      adresse_2: "",
      tel_2: "",
      marque_de_la_voiture_2: "",
      numero_d_immatriculation_2: "",
      numero_perms_de_conduire_2: "",
      categorie_permis_2: "",
      numero_CNI_2: "",
      Circonstances_de_l_accident: "",
      Observation_de_l_agent: "",
      degats_materiels: "",
      personne_fautive: "",
      Nom_temoin_1: "",
      Nom_temoin_2: "",
    });

    const FormTitles = ["Identification","Localisation de l'accident","Personne 1","Personne 2","Circonstances","Autres"];

    const PageDisplay = () => {
      if (page===0){
        return <Identification formData={formData} setFormData={setFormData}/>;
      } else if (page===1){
        return <Localisation formData={formData} setFormData={setFormData}/>;
      } else if (page===2){
        return <Personne_1 formData={formData} setFormData={setFormData}/>;
      } else if (page===3){
        return <Personne_2 formData={formData} setFormData={setFormData}/>;
      } else if (page===4){
        return <Circonstances formData={formData} setFormData={setFormData}/>;
      } else if (page===5){
        return <Autres formData={formData} setFormData={setFormData}/>;
      }
    }
    return (
         <div className='form'>
           <div className='progressbar'>
            <div style ={{width: page === 0 ? "16.6%" : page === 1 ? "33.3%" : page === 2 ? "50%" : page === 3 ? "66.6%" : page === 4 ? "83.3%" : "100%"  }}
            ></div>
           </div>
           <div className='form-container'>
           <div className='header'>
            <h1>{FormTitles[page]}</h1>
           </div>
           <div className='body'>{PageDisplay()}</div>
           <div className='footer'>
               <button 
               disabled={page === 0}
               onClick={() => {
                   setPage((currPage) => currPage - 1);
                  }}
                >
                prev
               </button>
               <button
               onClick={() => {
                if (page === FormTitles.length - 1){
                    alert("FORM SUBMITTED");
                    console.log(formData)
                } else {
                  setPage((currPage) => currPage + 1);
                }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
         </div>
        </div>
      </div>

    )
}

export default Form 