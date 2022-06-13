import React from "react";

function Personne_2 ({formData, setFormData}){
   return (
    <div className="Personne_2-container">
         <input type="text" 
        placeholder="Noms_2"  
        value={formData.Noms_2}  
        onChange={(event) =>
          setFormData({ ...formData, Noms_2: event.target.value })} />
        <input type="text" 
        placeholder="Prenoms_2"  
        value={formData.Prenoms_2}  
        onChange={(event) =>
          setFormData({ ...formData, Prenoms_2: event.target.value })} />
        <input type="text" 
        placeholder="Date_de_naissance_2"  
        value={formData.Date_de_naissance_2}  
        onChange={(event) =>
          setFormData({ ...formData, Date_de_naissance_2: event.target.value })} />
        <input type="text" 
        placeholder="lieu_de_naissance_2"  
        value={formData.lieu_de_naissance_2}  
        onChange={(event) =>
          setFormData({ ...formData, lieu_de_naissance_2: event.target.value })}  />
        <input type="text" 
        placeholder="adresse_2"  
        value={formData.adresse_2}  
        onChange={(event) =>
          setFormData({ ...formData, adresse_2: event.target.value })}  />
        <input type="text" 
        placeholder="tel_2"  
        value={formData.tel_2}  
        onChange={(event) =>
          setFormData({ ...formData, tel_2: event.target.value })} />
        <input type="text" 
        placeholder="marque_de_la_voiture_2" 
        value={formData.marque_de_la_voiture_2}  
        onChange={(event) =>
          setFormData({ ...formData, marque_de_la_voiture_2: event.target.value })}  />
        <input type="text" 
        placeholder="numero_d_immatriculation_2"  
        value={formData.numero_d_immatriculation_2}  
        onChange={(event) =>
          setFormData({ ...formData, numero_d_immatriculation_2: event.target.value })}  />
        <input type="text" 
        placeholder="numero_perms_de_conduire_2"  
        value={formData.numero_permis_de_conduire_2}  
        onChange={(event) =>
          setFormData({ ...formData, numero_permis_de_conduire_2: event.target.value })} />
        <input type="text" 
        placeholder="categorie_permis_2"  
        value={formData.categorie_permis_2}  
        onChange={(event) =>
          setFormData({ ...formData, categorie_permis_2: event.target.value })}  />
        <input type="text" 
        placeholder="numero_CNI_2"  
        value={formData.numero_CNI_2}  
        onChange={(event) =>
          setFormData({ ...formData, numero_CNI_2: event.target.value })} />
     </div>
   )
}

export default Personne_2;