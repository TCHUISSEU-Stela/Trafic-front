import React from "react";

function Autres ({formData, setFormData}){
   return (
    <div className="Autres-container">
        <input type="text" 
        placeholder="degats_materiels(oui ou non)"  
        value={formData.degats_materiels}  
        onChange={(event) =>
          setFormData({ ...formData, degats_materiels: event.target.value })}  />
        <input type="text" 
        placeholder="personne_fautive"  
        value={formData.personne_fautive}  
        onChange={(event) =>
          setFormData({ ...formData, personne_fautive: event.target.value })}  />
        <input type="text" 
        placeholder="Nom_temoin_1"  
        value={formData.Nom_temoins_1}  
        onChange={(event) =>
          setFormData({ ...formData, Nom_temoins_1: event.target.value })}  />
        <input type="text" 
        placeholder="Nom_temoin_2"  
        value={formData.Nom_temoins_2}  
        onChange={(event) =>
          setFormData({ ...formData, Nom_temoins_2: event.target.value })}  />
     </div>
   )
}

export default Autres;