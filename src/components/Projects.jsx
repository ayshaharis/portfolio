import { FaHtml5, FaReact } from "react-icons/fa"

import { SiVite, SiTailwindcss } from "react-icons/si";

const Projects=()=>{
const projects=[{
    name:"watchwise",
   link:"",
    techstack:[<FaReact/>,<SiVite/>,<SiTailwindcss/>],
    description:" WatchWise is a React-based video viewing app for safe and focused YouTube consumption. It allows an admin to add specific YouTube video URLs for users"
},
{
    name:"foodapp",
    link:"",
    techstack:[<FaReact/>,<SiVite/>,<SiTailwindcss/>],
        description:"A Food listing App that fetches live restaurant and menu data from Swiggy’s live API."
    
},
{
    name:"todolist",
    link:"https://to-do-list-mu-seven-68.vercel.app/",
    techstack:[<FaReact/>,<SiVite/>,<SiTailwindcss/>],
        description:"a Simple humble todo list "
},
{
    name:"Routine",
    link:"",
    techstack:[<FaReact/>,<SiVite/>,<SiTailwindcss/>],
        description:"a Project in progress"
}]
    return(
        <section id="projects" className="">
            <h2 className="font-mono text-center text-2xl">My projects</h2>
         
           <div className=" font-mono grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project,index)=>
            (
                <a
                 href={project.link}
                  key={index} 
                 target="_blank">
            <div className="bg-gray-800 min-h-[200px] flex flex-col justify-between rounded-xl p-4 m-2 cursor-pointer hover:scale-103 hover:bg-gray-700 text-white transition-transform  shadow-lg">
              <h3 className="text-center text-xl text-bold m-2 p-2">{project.name}</h3>  
              <p className="text-gray-500 text-center">{project.description}</p>
              <div className="flex justify-center gap-3 text-xl m-2">
           {project.techstack.map((tech,index)=>(<span key={index} >{tech}</span>))}
              </div>
                </div>
                </a>
           
            ))}
                  
           </div>
        </section>
    )
}

export default Projects;