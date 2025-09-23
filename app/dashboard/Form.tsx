"use client";

import React from 'react'

const Form = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        console.log(formData.get("firstName"));
    
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name="firstName" className="bg-white text-black m-2 p-2" placeholder="First Name"></input>
            <input name="lastName" className="bg-white text-black m-2 p-2" placeholder="Last Name"></input>
            <input name="email" className="bg-white text-black m-2 p-2" placeholder="Email"></input>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Submit</button>
        </form> 
    </div>
  )
}

export default Form