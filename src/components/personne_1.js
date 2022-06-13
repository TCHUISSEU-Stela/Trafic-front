import React from "react";

function Personne_1 ({formData, setFormData}){
   return (
    <div className="Personne_1-container">
        <input type="text" 
        placeholder="Noms_1"  
        value={formData.Noms_1}  
        onChange={(event) =>
          setFormData({ ...formData, Noms_1: event.target.value })} />
        <input type="text" 
        placeholder="Prenoms_1"  
        value={formData.Prenoms_1}  
        onChange={(event) =>
          setFormData({ ...formData, Prenoms_1: event.target.value })} />
        <input type="text" 
        placeholder="Date_de_naissance_1"  
        value={formData.Date_de_naissance_1}  
        onChange={(event) =>
          setFormData({ ...formData, Date_de_naissance_1: event.target.value })} />
        <input type="text" 
        placeholder="lieu_de_naissance_1"  
        value={formData.lieu_de_naissance_1}  
        onChange={(event) =>
          setFormData({ ...formData, lieu_de_naissance_1: event.target.value })}  />
        <input type="text" 
        placeholder="adresse_1"  
        value={formData.adresse_1}  
        onChange={(event) =>
          setFormData({ ...formData, adresse_1: event.target.value })}  />
        <input type="text" 
        placeholder="tel_1"  
        value={formData.tel_1}  
        onChange={(event) =>
          setFormData({ ...formData, tel_1: event.target.value })} />
        <input type="text" 
        placeholder="marque_de_la_voiture_1" 
        value={formData.marque_de_la_voiture_1}  
        onChange={(event) =>
          setFormData({ ...formData, marque_de_la_voiture_1: event.target.value })}  />
        <input type="text" 
        placeholder="numero_d_immatriculation_1"  
        value={formData.numero_d_immatriculation_1}  
        onChange={(event) =>
          setFormData({ ...formData, numero_d_immatriculation_1: event.target.value })}  />
        <input type="text" 
        placeholder="numero_perms_de_conduire_1"  
        value={formData.numero_permis_de_conduire_1}  
        onChange={(event) =>
          setFormData({ ...formData, numero_permis_de_conduire_1: event.target.value })} />
        <input type="text" 
        placeholder="categorie_permis_1"  
        value={formData.categorie_permis_1}  
        onChange={(event) =>
          setFormData({ ...formData, categorie_permis_1: event.target.value })}  />
        <input type="text" 
        placeholder="numero_CNI_1"  
        value={formData.numero_CNI_1}  
        onChange={(event) =>
          setFormData({ ...formData, numero_CNI_1: event.target.value })}  />
     </div>
   )
}

export default Personne_1;