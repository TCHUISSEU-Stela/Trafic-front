import React from "react";

function Circonstances ({formData, setFormData}){
   return (
    <div className="Circonstances-container">
        <input type="text" 
        placeholder=" circonstances_de_l_accident ..." 
        value={formData.Circonstances_de_l_accident}  
        onChange={(event) =>
          setFormData({ ...formData, Circonstances_de_l_accident: event.target.value })}  />
        <input type="text" 
        placeholder="Observation_de_l_agent"  
        value={formData.observation_de_l_agent}  
        onChange={(event) =>
          setFormData({ ...formData, observation_de_l_agent: event.target.value })}  />
     </div>
   )
}

export default Circonstances;