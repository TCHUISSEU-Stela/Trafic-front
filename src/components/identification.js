import React from "react";

function Identification ({formData, setFormData}){
   return (
     <div className="Circonstances-container">
        <input type="text" 
        placeholder="Noms" 
        value={formData.Noms}  
        onChange={(event) =>
          setFormData({ ...formData, Noms: event.target.value })} />
        <input type="text" 
        placeholder="Prenoms" 
        value={formData.Prenoms}
        onChange={(event) =>
            setFormData({ ...formData, Prenoms: event.target.value })} />
        <input type="text" 
        placeholder="Matricule" 
        value={formData.Matricule}
        onChange={(event) =>
            setFormData({ ...formData, Matricule: event.target.value })}/>
        <input type="text" 
        placeholder="Confimer_Matricule" 
        value={formData.Confirmer_Matricule}
        onChange={(event) =>
            setFormData({ ...formData, Confirmer_Matricule: event.target.value })}/>
     </div>

   )
}

export default Identification;