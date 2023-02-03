
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

export default function DeleteUser(){

    let navigate = useNavigate()


   const onClickHandler = async (e)=>{
    try {
        e.preventDefault();
        let ls = localStorage.getItem("token");
        ls= JSON.parse(ls)
        console.log(ls.token)
        const config = {
            headers: {
             "auth-token" : ls.token
            }
          };
        await axios.delete("/api/user/deleteUser",config); 
        alert("Account deleted");
        localStorage.removeItem("token");
        navigate("/");
    } catch (error) {
        console.log(error)
    }
   }
    return(
        <section className="bg-black">
            <header><div className="text-white text-6xl font-semibold pt-4">Account Deletion</div></header>
            <hr/>
            <div className="flex flex-col items-center mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg dark:border-gray-900 md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6">
                            <div className="text-white"> 
                              We're sorry to see you go...
                            </div>
                            <button onClick={onClickHandler} type="submit" className="w-full text-white  border border-green-500 bg-green-600 hover:bg-green-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Delete my account</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}