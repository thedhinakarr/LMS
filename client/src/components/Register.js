import { useState } from "react";
import axios from "axios";
import Book from "./Book";
import { useNavigate } from "react-router-dom";



export default function Register() {
    let navigate = useNavigate();
    const [userData, setUserData] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        password2: "",
        role: ""
    })

    let { fullname, username, email, password, password2, role } = userData;

    function OnChangeHandler(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    async function OnSubmitHandler(e) {
        try {
            e.preventDefault();
            let { data } = await axios.post("/api/register", userData);
            console.log(data);
            alert(`${data.message}`);
            navigate("/login")
        } catch (error) {
            alert(error.response.data.error);
            console.log(error);
        }
    }

    return (
        <section class="bg-black">
            <header><div className="text-white text-6xl font-semibold pt-4"> Create an account </div></header>
            <hr className="bg-green-500" />
            <div class="flex flex-col items-center mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-neutral-800 rounded-lg dark:border-gray-900 md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form class="space-y-4 md:space-y-6">

                            <div>
                                <input onChange={OnChangeHandler} type="name" name="fullName" id="fullName" class="  rounded-lg  sm:text-sm block w-full p-2.5" placeholder="Name" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="userName" name="userName" id="userName" class="rounded-lg  sm:text-sm block w-full p-2.5" placeholder="User name" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="email" name="email" id="email" class=" rounded-lg  sm:text-sm block w-full p-2.5" placeholder="Email address" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="password" name="password" id="password" placeholder="Password" class=" rounded-lg sm:text-sm block w-full p-2.5" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="password" name="password2" id="confirm-password" placeholder="Re-enter Password" class=" rounded-lg sm:text-sm block w-full p-2.5" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="text" name="role" id="confirm-password" placeholder="Role" class=" rounded-lg sm:text-sm block w-full p-2.5" />
                            </div>

                            <button onClick={OnSubmitHandler} type="submit" class="w-full bg-black border-green-500 text-white  border hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}