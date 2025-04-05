function Skills() {
    const skills = [
      { name: "JavaScript", icon: "🟨" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "HTML", icon: "📄" },
      { name: "CSS", icon: "🎭" },
      { name: "Git & GitHub", icon: "🔗" },
    ];
  
    return (
 <section>
    <h1>
    My skills 
    </h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3">
     {skills.map((skill,index)=>(
        <div key={index} className="bg-gray-800 p-4 rounded-lg m-2 text-white cursor-pointer hover:scale-103 transition-transform shadow-lg ">
            <p>{skill.name}</p>
            <span>{skill.icon}</span>
        </div>
     ))}
    </div>
 </section>
    );
  }
  
  export default Skills;
  