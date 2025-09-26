"use client";

import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const Form = (() => {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        school: "",
        graduationYear: "",
        dietRestrictions: "",
        hackathonsAttended: "",
        hearAboutUs: "",
        Q1: "",
        Q2: "",
        Q3: "",
        Github: "",
        LinkedIn: "",
        portfolioWebsite: ""
    });

    // Form validation function
    const validateForm = () => {
        const requiredFields = [
            'firstName', 'lastName', 'phone', 'school', 'graduationYear', 
            'hackathonsAttended', 'hearAboutUs', 'Q1', 'Q2', 'Q3'
        ];
        
        for (const field of requiredFields) {
            if (!formData[field as keyof typeof formData] || formData[field as keyof typeof formData].toString().trim() === '') {
                toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                return false;
            }
        }

        const validHearAboutUs = ["Instagram", "Friends", "School", "Discord", "Other"];
        if (!validHearAboutUs.includes(formData.hearAboutUs)) {
            toast.error('Please select how you heard about us');
            return false;
        }

        // Validate numbers
        if (isNaN(Number(formData.graduationYear)) || Number(formData.graduationYear) < 2020 || Number(formData.graduationYear) > 2030) {
            toast.error('Please enter a valid graduation year (2020-2030)');
            return false;
        }

        if (isNaN(Number(formData.hackathonsAttended)) || Number(formData.hackathonsAttended) < 0) {
            toast.error('Please enter a valid number of hackathons attended');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        console.log("Form data submitted:", formData);
        console.log("Email:", email);
        setSubmitted(true);

        try {
          console.log("email:", email, formData)
          const res = await axios.post("/api/dashboard/formSubmission", formData)
          toast.success("Submitted Successfully")
        } catch (error) {
          setSubmitted(false);
          toast.error("Error submitting form")
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
      if (email) {
        setFormData(prev => ({...prev, email}))
      }
      if (role=="incomplete") setSubmitted(false)
      else setSubmitted(true)
    }, [role, email])

  return (
    
    <div className='w-full justify-center mx-10'>
        <Toaster />
        {!submitted ? 
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>

          <label className='text-left text-2xl font-semibold mb-2'>Basic Information</label>
          <div className='flex flex-row gap-5'>
            <input name="firstName" value={formData?.firstName || ''} onChange={(e) => setFormData({...formData, firstName:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="First Name *" required></input>
            <input name="lastName" value={formData?.lastName || ''} onChange={(e) => setFormData({...formData, lastName:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Last Name *" required></input>
          </div>
          
            <input name="phone" value={formData?.phone || ''} onChange={(e) => setFormData({...formData, phone:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Phone Number *" required></input>
            <input name="school" value={formData?.school || ''} onChange={(e) => setFormData({...formData, school:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="School *" required></input>
            <input name="graduationYear" type="number" min="2020" max="2030" value={formData?.graduationYear || ''} onChange={(e) => setFormData({...formData, graduationYear:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Graduation Year *" required></input>
            <input name="dietRestrictions" value={formData?.dietRestrictions || ''} onChange={(e) => setFormData({...formData, dietRestrictions:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Dietary Restrictions (if any)"></input>
            
            <input name="hackathonsAttended" type="number" min="0" value={formData?.hackathonsAttended || ''} onChange={(e) => setFormData({...formData, hackathonsAttended:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Number of Hackathons Attended *" required></input>
            
            <select name="hearAboutUs" value={formData?.hearAboutUs || ''} onChange={(e) => setFormData({...formData, hearAboutUs:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" required>
              <option value="">How did you hear about us? *</option>
              <option value="Instagram">Instagram</option>
              <option value="Friends">Friends</option>
              <option value="School">School</option>
              <option value="Discord">Discord</option>
              <option value="Other">Other</option>
            </select>
            

            <h1 className='text-left text-2xl font-semibold my-5'>Long Answer Questions</h1>
            <h3 className='text-left text-xl font-semibold my-2'>1. Describe an algorithm or computational approach that fascinates you. What makes it interesting, and how might you explore or build upon it during the hackathon? (300 words or less) *</h3>
            <textarea name="Q1" value={formData?.Q1 || ''} onChange={(e) => setFormData({...formData, Q1:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2 h-32" placeholder="Your answer *" required></textarea>
            <h3 className='text-left text-xl font-semibold my-2'>2. Tell us about a project you{"'"}ve worked on that you{"'"}re proud of. What challenges did you face and how did you overcome them? (300 words or less) *</h3>
            <textarea name="Q2" value={formData?.Q2 || ''} onChange={(e) => setFormData({...formData, Q2:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2 h-32" placeholder="Your answer *" required></textarea>
            <h3 className='text-left text-xl font-semibold my-2'>3. What do you hope to learn or accomplish at RythmHacks? How do you plan to make the most of the experience? (300 words or less) *</h3>
            <textarea name="Q3" value={formData?.Q3 || ''} onChange={(e) => setFormData({...formData, Q3:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2 h-32" placeholder="Your answer *" required></textarea>

            <h1 className='text-left text-2xl font-semibold my-5'>Optional Links</h1>
            <input name="Github" value={formData?.Github || ''} onChange={(e) => setFormData({...formData, Github:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="GitHub"></input>
            <input name="LinkedIn" value={formData?.LinkedIn || ''} onChange={(e) => setFormData({...formData, LinkedIn:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="LinkedIn"></input>
            <input name="portfolioWebsite" value={formData?.portfolioWebsite || ''} onChange={(e) => setFormData({...formData, portfolioWebsite:e.target.value})} 
            className="w-full bg-white text-black my-2 p-2" placeholder="Portfolio Website"></input>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Submit Application</button>
        </form> : 
        <div className="flex flex-col items-center justify-center min-h-96 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-8 shadow-lg">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          
          {/* Success Message */}
          <h1 className='text-4xl font-bold text-gray-800 mb-4 text-center'>
            🎉 Application Submitted Successfully!
          </h1>
          
          <div className="text-center mb-8 max-w-md">
            <p className='text-lg text-gray-600 mb-4'>
              Thank you for applying to <span className="font-semibold text-blue-600">RythmHacks 2025</span>! 
            </p>
            <p className="text-gray-500">
              We&apos;ve received your application and will review it carefully. You&apos;ll hear back from us soon!
            </p>
          </div>

          {/* Status Badge */}
          <div className="bg-blue-100 border border-blue-300 rounded-lg px-4 py-2 mb-6">
            <p className="text-blue-800 font-medium text-sm">
              📋 Status: <span className="font-bold">Under Review</span>
            </p>
          </div>
          
          {/* Edit Application Card */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Need to make changes?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              You can edit your application until the deadline.
            </p>
            <button 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
              onClick={editProfile}
            >
              ✏️ Edit Application
            </button>
          </div>
          
          {/* Contact Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Questions? Email us at{" "}
              <a href="mailto:rythmhacks@gmail.com" className="text-blue-500 hover:text-blue-600 underline">
                rythmhacks@gmail.com
              </a>
            </p>
          </div>
        </div> }
    </div>
  )
})

export default Form