import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function Login({}){

    const [userData, setUserData] = useState({
        email: "",
        password: ""
      });

      let navigate = useNavigate();

      let { email, password } = userData;

      const onSubmitHandler = async (e) => {
        try {
          e.preventDefault();
          let { data } = await axios.post("/api/login", userData);
          console.log(data.token)

          const config = {
            headers: {
             "auth-token":data.token
            }
          };

          let  resp  = await axios.post("/api/auth",data,config)

          console.log(resp.data.payload)

          let resprole = resp.data.payload.role
          
          let tokenData = {
            token: data.token,
            role: resprole
          }

          localStorage.setItem("token", JSON.stringify(tokenData));

          console.log(localStorage.getItem("token"))
          alert("LOGIN Successfull")
          if (resprole == "admin") {
            navigate("/adminDashBoard");
          } else if (resprole == "user") {
            navigate("/userDashBoard");
          } else {
            navigate("");
          }

        } catch (error) {
          alert(error)
          console.error(error);
        }
      }
    

      const onChangeHandler = (e) => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        })
      }


    return(
        <section className="bg-black">
            <header><div className="text-white text-6xl font-semibold pt-4"> Log-In </div></header>
            <hr/>
            <div className="flex flex-col items-center mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg dark:border-gray-900 md:mt-0 sm:max-w-md xl:p-0 ">
                    <div clasName="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6">

                            <div> 
                                <input onChange={onChangeHandler} type="email" name="email" id="email" className="  rounded-lg  sm:text-sm block w-full p-2.5" placeholder="Email"/>
                            </div>

                            <div>
                                <input onChange={onChangeHandler} type="password" name="password" id="password" placeholder="Password" className=" rounded-lg sm:text-sm block w-full p-2.5"  />
                            </div>

                            <button onClick={onSubmitHandler} type="submit" className="w-full text-white  border  hover:bg-green-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
}