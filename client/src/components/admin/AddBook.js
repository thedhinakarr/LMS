import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


export default function AddBook() {

    let navigate= useNavigate()

    useEffect(() => {
        let ls = localStorage.getItem("token");
        if (ls) {
            ls = JSON.parse(ls);
            //console.log(ls.role)
            if (ls.role == "user") {
                navigate("/");
            }
        }
    }, [])


    const [userData, setUserData] = useState({
        title: "",
        author: "",
        coverImageUrl: "",
        publisher: "",
        synopsis: "",
        pageCount: "",
        isbn:""
    })

    function OnChangeHandler(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    async function OnSubmitHandler(e) {
        let ls = localStorage.getItem("token");
        ls= JSON.parse(ls)
        console.log(ls.token)
        const config = {
            headers: {
             "auth-token" :ls.token
            }
          };

        try {
            e.preventDefault();
            console.log(userData)
            let { data } = await axios.post("/api/admin/books/add",userData,config);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }


   


    return (
        <section class="bg-black">
            <header><div className="text-white text-6xl font-semibold pt-4"> Add a book to the library </div></header>
            <hr className="bg-green-500" />
            <div class="flex flex-col items-center mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-neutral-800 rounded-lg dark:border-gray-900 md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form class="space-y-4 md:space-y-6">

                            <div>
                                <input onChange={OnChangeHandler} type="name" name="title" id="title" class="  rounded-lg  sm:text-sm block w-full p-2.5" placeholder="Title" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="name" name="author" id="author" class="rounded-lg  sm:text-sm block w-full p-2.5" placeholder="Author" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="name" name="coverImageUrl" id="coverImageUrl" class=" rounded-lg  sm:text-sm block w-full p-2.5" placeholder="Image Url" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="name" name="publisher" id="publisher" placeholder="Publisher" class=" rounded-lg sm:text-sm block w-full p-2.5" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="name" name="synopsis" id="synopsis" placeholder="Synopsis" class=" rounded-lg sm:text-sm block w-full p-2.5" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="number" name="pageCount" id="pageCount" placeholder="PageCount" class=" rounded-lg sm:text-sm block w-full p-2.5" />
                            </div>

                            <div>
                                <input onChange={OnChangeHandler} type="name" name="isbn" id="isbn" placeholder="ISBN" class=" rounded-lg sm:text-sm block w-full p-2.5" />
                            </div>

                            <button onClick={OnSubmitHandler} type="submit" class="w-full bg-black border-green-500 text-white  border hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Add Book</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}