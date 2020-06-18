const express = require('express')
const { uuid } = require("uuidv4")
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

const projects = []

//function midware
function projectExist(req, res, next){
    const { id } = req.params
    const projectIndex = projects.findIndex(project => project.id == id)

    if(projectIndex < 0){
        return res.status(400).json({message: "Project not Found"})
    }
    return next()
}

app.get("/projects", (request,response)=>{
    return response.json(projects)
})

app.post("/projects", (request,response) =>{
    const {title, owner} = request.body

    const project = {
        id: uuid(),
        title: title,
        owner: owner,
        tasks: []
    }

    projects.push(project)

    return(response.json(project))

})

app.put("/projects/:id", projectExist,(req,res) =>{
    const {id} = req.params
    const {title, owner} = req.body

    const projectIndex = projects.findIndex(project => project.id == id)

    if(projectIndex){
        console.log(projectIndex)
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project

    return(res.json(project))
})

app.delete('/projects/:id', projectExist, (req,res) =>{
    
    const {id} = req.params

    const projectIndex = projects.findIndex(element => element.id == id)
   
    projects.splice(projectIndex, 1);
  
    return res.status(204).json({message:"Field Deleted"})
})

app.listen(3000, ()=>{
   console.log('Back-end Nivel 01 Started!') 
})

