"use client";

import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const Form = (() => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [formData, setFormData] = useState({
        email:email,
        firstName: "",
        lastName: "",
        phone: "",
        school: "",
        graduationYear: "",
        dietRestrictions: "",
        tshirtSize: "",
        hackathonsAttended: "",
        hearAboutUs: "",
        Q1: "",
        Q2: "",
        Q3: "",
        Github: "",
        LinkedIn: "",
        portfolioWebsite: ""
    });
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        console.log("Email:", email);
        setSubmitted(true);

        try {
          console.log("email:", email, formData)
          const res = await axios.post("/api/dashboard/formSubmission", formData)
          toast.success("Submitted Successfully", res.data)
        } catch (error) {
          toast.error("Error submitting form", error)
        }
  
    }
    const editProfile = async () => {
        try {
          const res = await axios.patch("/api/dashboard/formSubmission", { email: email })
          toast.success("You can now edit your application!")
          console.log("hjhjhkjj",res.data.data)
          setFormData(res.data.data)
          setSubmitted(false);
        } catch (error) {
        }
    }
    const getRole = async () => {
      const res = await axios.get("/api/dashboard/formSubmission")
      setEmail(res.data.user.email)
      setRole(res.data.user.role)
    }

    useEffect(() => {
      getRole()
    },[])
    useEffect(() => {
      console.log(role)
      setFormData({...formData, email})
      if (role=="incomplete") setSubmitted(false)
      else setSubmitted(true)
    }, [role])

  return (
    
    <div className='w-full justify-center mx-10'>
        <Toaster />
        {!submitted ? 
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>

          <label className='text-left text-2xl font-semibold mb-2'>Basic Information</label>
          <div className='flex flex-row gap-5'>
            <input name="firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="First Name"></input>
            <input name="lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName:e.target.value})} className="w-full bg-white text-black my-2 p-2" placeholder="Last Name"></input>
          </div>
          
            <input name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Phone Number"></input>
            <input name="school" value={formData.school} onChange={(e) => setFormData({...formData, school:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="School"></input>
            <input name="graduationYear" value={formData.graduationYear} onChange={(e) => setFormData({...formData, graduationYear:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Graduation Year" ></input>
            <input name="dietRestrictions" value={formData.dietRestrictions} onChange={(e) => setFormData({...formData, dietRestrictions:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Dietary Restrictions (if any)"></input>
            <input name="tshirtSize" value={formData.tshirtSize} onChange={(e) => setFormData({...formData, tshirtSize:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="T-Shirt Size (XS, S, M, L, XL, XXL)"></input>
            <input name="hackathonsAttended" value={formData.hackathonsAttended} onChange={(e) => setFormData({...formData, hackathonsAttended:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Number of Hackathons Attended"></input>
            <input name="hearAboutUs" value={formData.hearAboutUs} onChange={(e) => setFormData({...formData, hearAboutUs:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="How did you hear about us?"></input>
            

            <h1 className='text-left text-2xl font-semibold my-5'>Long Answer Questions</h1>
            <h3 className='text-left text-xl font-semibold my-2'>1. Describe an algorithm or computational approach that fascinates you. What makes it interesting, and how might you explore or build upon it during the hackathon? (300 words or less)</h3>
            <textarea name="Q1" value={formData.Q1} onChange={(e) => setFormData({...formData, Q1:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2 h-32" placeholder="Your answer"></textarea>
            <h3 className='text-left text-xl font-semibold my-2'>2. Tell us about a project you{"'"}ve worked on that you{"'"}re proud of. What challenges did you face and how did you overcome them? (300 words or less)</h3>
            <textarea name="Q2" value={formData.Q2} onChange={(e) => setFormData({...formData, Q2:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2 h-32" placeholder="Your answer"></textarea>
            <h3 className='text-left text-xl font-semibold my-2'>3. What do you hope to learn or accomplish at RythmHacks? How do you plan to make the most of the experience? (300 words or less)</h3>
            <textarea name="Q3" value={formData.Q3} onChange={(e) => setFormData({...formData, Q3:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2 h-32" placeholder="Your answer"></textarea>

            <h1 className='text-left text-2xl font-semibold my-5'>Optional Links</h1>
            <input name="Github" value={formData.Github} onChange={(e) => setFormData({...formData, Github:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="GitHub"></input>
            <input name="LinkedIn" value={formData.LinkedIn} onChange={(e) => setFormData({...formData, LinkedIn:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="LinkedIn"></input>
            <input name="portfolioWebsite" value={formData.portfolioWebsite} onChange={(e) => setFormData({...formData, portfolioWebsite:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Portfolio Website"></input>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Submit</button>
        </form> : 
        <div>
          <h1 className='text-4xl font-semibold mb-5'>Application Submitted!</h1>
          <p className='text-lg mb-5'>Thank you for applying to RythmHacks! </p>
          <p>To edit your application:</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={editProfile}>Click Here</button>
        </div> }
    </div>
  )
})

export default Form