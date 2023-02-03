
import { useNavigate, Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import axios from "axios";


export default function AdminDashBoard() {
    let navigate = useNavigate();

    useEffect(() => {
        let verifyToken = async ()=>{
            try {
                let token = localStorage.getItem("token");
                token = JSON.parse(token);
                if (token.role == "user") {
                    localStorage.removeItem("token");
                    navigate("/");
                }
            } catch (error) {
                console.log(error)
                localStorage.removeItem("token");
            }
        }
        verifyToken();
    }, [])
    
    const onDeleteHandler = async (e) => {
        try {
            e.preventDefault();
            localStorage.removeItem("token")
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="bg-black">
            <header><div className="text-white text-6xl font-semibold pt-4"> Admin Dashboard</div></header>
            <hr />
            <div className="flex flex-col w-1/2 h-auto mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <ul className="list-disc">
                    <li>
                        <button onClick={() => { navigate("/library") }} type="submit" className=" hover:bg-green-700  mb-9 border-green-500 border w-full text-white  font-medium rounded-lg text-xl px-5 py-2.5  ">View Library</button>
                    </li>
                    <li>
                        <button onClick={() => { navigate("/AddBook") }} type="submit" className=" hover:bg-green-700 mb-9 w-full border-green-500 border text-white  font-medium rounded-lg text-xl px-5 py-2.5  ">Add Book</button>
                    </li>
                    <li>
                        <button onClick={() => { navigate("/deleteUser") }} type="submit" className="hover:bg-green-700 mb-9 border-green-500 border w-full text-white  font-medium rounded-lg text-xl px-5 py-2.5  ">Delete my account</button>
                    </li>
                    <li>
                        <button onClick={onDeleteHandler} type="submit" className="hover:bg-green-700 mb-9 border-green-500 border w-full text-white  font-medium rounded-lg text-xl px-5 py-2.5 ">Log-out</button>
                    </li>
                </ul>
            </div>
        </section>
    )
}
