import emailjs from "@emailjs/browser"
import { useState } from "react";

const Contact=()=>{


  
    const [formData,setFormdata]=useState({name:"",email:"",});
    const serviceID="service_9lyp8mn";
    const templateID="template_gb4feqo";
    const publicKey="qlaUclNAT5GrRUj9i";
   
   const sendEmail=(e)=>{
e.preventDefault();
const templateParams={
    name:formData.name,
    email:formData.email,
    message:"I would like to connect"
}
emailjs.send(serviceID, templateID, templateParams, publicKey)
.then(()=>{alert("message sent successfully");
    setFormdata({name:"",email:""});
})
.catch((error)=>{
    alert("messaeg failed to send");
    console.error("EmailJs error",error)
})

   }
   const handleChange=(e)=>{
 
    setFormdata({...formData,[e.target.name]:e.target.value});
  
   }

    return (
        <form onSubmit={sendEmail} className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6 text-white">  
      <div className="">
        <div className="mb-4">
        <label className="block text-gray-300 mb-2">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-blue-900 focus:ring-2"/>
        </div>
        <div  className="mb-4">
        <label  className="block text-gray-300 mb-2">Email </label>
        <input type="text" name="email"value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-white-100 focus:ring-2 "/>
        </div>
        <div className="mb-8"> 
        <label  className="block text-gray-300 mb-2 ">Message </label>
         <input type="text" name="message" value="Hi, I would like to connect" readOnly  className="bg-gray-700 w-full px-4 py-2 rounded "/>
         </div>
         <div className="mb-4">
         <button type="submit" className="w-full bg-blue-900 hover:bg-blue-500  py-2 font-semibold transition-all  rounded">Send Message</button>

         </div>
       
    </div></form>
     
    )

}
export default Contact;