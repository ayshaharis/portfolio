const Projects=()=>{
const projects=[{
    name:"watchwise",
    link:"link",
    techstack:["react", "vite", "tailwindCSS"],
    description:"a brief description"
},
{
    name:"foodapp",
    link:"link",
    techstack:["react", "vite", "tailwindCSS"],
        description:"a brief description"
    
},
{
    name:"todolist",
    link:"link",
    techstack:["react", "vite", "tailwindCSS"],
        description:"a brief description"
},
{
    name:"Routine",
    link:"link",
    techstack:["react", "vite", "tailwindCSS"],
        description:"a brief description"
}]
    return(
        <section id="projects" className="">
            <h2 className="font-mono">My projects</h2>
           <div className=" font-mono grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project,index)=>
            (
            <div key={index} className="bg-gray-800 rounded p-4 m-2 cursor-pointer hover:scale-103 hover:bg-gray-700 text-white transition-transform  shadow-lg">
              <h3>{project.name}</h3>  
              <p>{project.description}</p>
              <a>{project.link}</a>
              <span>{project.techstack}</span>
                </div>
            ))}
                  
           </div>
        </section>
    )
}

export default Projects;