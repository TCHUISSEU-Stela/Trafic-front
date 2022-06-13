import React from "react";

function Localisation ({formData, setFormData}){
   return (
    <div className="Localisation-container">
    <input type="text" 
    placeholder="Quartier..." 
    value={formData.Quartier}  
    onChange={(event) =>
        setFormData({ ...formData, Quartier: event.target.value })} />
    <input type="text" 
    placeholder="Rue..."  
    value={formData.Rue}  
    onChange={(event) =>
          setFormData({ ...formData, Rue: event.target.value })}/>
    <input type="text" 
     placeholder="Heure : hh/mn" 
     value={formData.Heure}  
     onChange={(event) =>
          setFormData({ ...formData, Heure: event.target.value })}/>
    <input type="text" 
    placeholder="Date : jour/mois/annee" 
    value={formData.Date}  
    onChange={(event) =>
          setFormData({ ...formData, Date: event.target.value })} />
 </div>

   )
}

export default Localisation;