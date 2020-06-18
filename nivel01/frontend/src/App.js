import React, { useState, useEffect } from 'react'
import api from './services/api'

import Header from './components/Header'

function App() {

    const [projetcs, setProjects] = useState([])
    
    useEffect( () =>{
        api.get('/projects').then(response => {
            setProjects(response.data)
        })
     }, [])

    async function handleAddProjetc() {
        //projetcs.push(`Novo Projeto ${Date.now()}`)
        //setProjects([...projetcs, `Novo Projeto ${Date.now()}`])
        //console.log(projetcs)
       const response = await api.post('/projects', {
            title: `Novo Projeto ${Date.now()}`,
            owner: "Caiua Franca"
        })

        const project = response.data
        setProjects([...projetcs, project])
    }

    return (
        <>
            <Header title="Projects" />
                <ul>
                    {projetcs.map(project => <li key={project.id}>{project.title}</li>)}
                </ul>

                <button type="button" onClick={handleAddProjetc}>Adicionar Projetos</button>
        </>
    )
}

export default App