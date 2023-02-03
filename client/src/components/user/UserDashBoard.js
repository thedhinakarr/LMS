
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import DeleteUser from "./DeleteUser";

export default function UserDashBoard() {
    let navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem("token");

        if (token) {
            token = JSON.parse(token);
            console.log(token)
            if (token.role == "user") {
                navigate("/userDashBoard");
            }
            else if (token.role == "admin") {
                navigate("/");
            } else {
                localStorage.removeItem("token");
            }
        }
    }, [])

    const onDeleteHandler = async (e) => {
        try {
            e.preventDefault();
            //localStorage.removeItem("token")
            navigate("/deleteUser");
        } catch (error) {
            console.log(error)
        }
    }
    const onLogOutHandler = async (e) => {
        try {
            e.preventDefault();
            localStorage.removeItem("token")
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section class="bg-black">
            <header><div className="text-white text-6xl font-semibold pt-4"> User Dashboard</div></header>
            <hr />
            <div className="flex flex-col w-1/2 h-auto mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <ul className="list-disc">
                    <li>
                        <button onClick={() => { navigate("/library") }} type="submit" className=" hover:bg-green-700  mb-9 border-green-500 border w-full text-white  font-medium rounded-lg text-xl px-5 py-2.5  ">View Library</button>
                    </li>
                    <li>
                        <button onClick={() => { navigate("/fetchBook") }} type="submit" className=" hover:bg-green-700 mb-9 w-full border-green-500 border text-white  font-medium rounded-lg text-xl px-5 py-2.5  ">Fetch Books</button>
                    </li>
                    <li>
                        <button onClick={onDeleteHandler} type="submit" className="hover:bg-green-700 mb-9 border-green-500 border w-full text-white  font-medium rounded-lg text-xl px-5 py-2.5  ">Delete my account</button>
                    </li>
                    <li>
                        <button onClick={onLogOutHandler} type="submit" className="hover:bg-green-700 mb-9 border-green-500 border w-full text-white  font-medium rounded-lg text-xl px-5 py-2.5 ">Log-out</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}
