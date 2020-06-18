import React from 'react'

export default function Button(props){
    
    //estilizar componentes
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial" 
    }
    
    return (
        <button type="button" onClick={handleAddProjetc}>Adicionar Projetos</button>
    )
}