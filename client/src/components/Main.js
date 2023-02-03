import { useNavigate, Link } from "react-router-dom";



export default function Main(){
    let navigate=useNavigate();

    return(
        <section className="bg-black">
        <header><div className="text-white text-center text-6xl font-semibold pt-4">Book Management System</div></header>
        <hr />
        <div className="flex flex-col w-1/2 h-auto mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
            <ul className="list-disc">
                <li>
                    <button onClick={() => { navigate("/register") }} type="submit" className=" mb-9 w-full border-green-500 border hover:bg-green-700 text-white  font-semibold rounded-lg text-xl px-5 py-2.5  ">Register</button>
                </li>
                <li>
                    <button onClick={() => { navigate("/login") }} type="submit" className=" mb-9 border-green-500 border hover:bg-green-700 w-full text-white  font-semibold rounded-lg text-xl px-5 py-2.5  ">Login</button>
                </li>
            </ul>
        </div>
    </section>
    );
}