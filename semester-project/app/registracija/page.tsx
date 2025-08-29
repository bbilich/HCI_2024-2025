'use client'
import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () =>{
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => 
        setIsVisible(prevState => !prevState);

    return(
        <div className="flex items-center justify-center py-16 mx-5">
            <div className="w-full max-w-md">
                <h1 className="flex text-beige-800 justify-center text-3xl pb-10 md:text-5xl ">REGISTRIRAJTE SE</h1>
            
            <form className="bg-beige-200 rounded-2xl shadow-lg p-8 space-y-8">
                <div className="w-full">
                    <input 
                    type="text" 
                    placeholder="Unesite ime" 
                    className="bg-white p-3 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-beige-800" 
                    required
                    />
                </div>
                <div className="w-full">
                    <input 
                    type="text" 
                    placeholder="Unesite e-mail" 
                    className="bg-white p-3 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-beige-800" 
                    required
                    />
                </div>
                <div className="relative w-full">
                    <input 
                    type={isVisible ? "text" : "password"}
                    placeholder="Unesite lozinku" 
                    className="bg-white p-3 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-beige-800" 
                    required
                    />

                    <button
                    type="button"
                    onClick={toggleVisibility}
                    aria-label={isVisible ? "Hide password" : "Show password"}
                    aria-pressed={isVisible}
                    aria-controls="password"
                    className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-beige-800 rounded-e-md focus:outline-none focus-visible:text-beige-900 hover:text-beige-900 transition-colors"
                    >
                    {isVisible ? (
                        <EyeOff size={20} aria-hidden="true" />
                    ) : (
                        <Eye size={20} aria-hidden="true" />
                    )}
                    </button>
                    
                </div>
                <div className="flex justify-between text-sm">
                    <label><input type="checkbox" /> Zapamti me</label>
                </div>

                <button
                    type="submit"
                    className="bg-white w-full hover:bg-beige-100 text-beige-800 font-medium 
                    px-6 py-3 rounded-full shadow-md transition duration-200">
                    Registrirajte se
                </button>
                <div className="flex justify-center text-sm">
                    <p>Već imate račun? <a href="/prijava" className="hover:font-semibold transition">Prijavite se</a></p>
                </div>
                
            </form>
        </div>
        </div>
    )
}

export default SignUp;