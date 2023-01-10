import { Link } from "react-router-dom"
import './navbar.css'

export function NavBar(){
    return(
        <nav className="flex items-center justify-between px-8 py-4 bg-stone-800">
            <h2 className="text-2xl font-semibold text-white">
                <Link to={'/'}>Blog</Link>
            </h2>
            <ul className="flex gap-4 items-center ">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className="py-2 px-4 rounded-lg border-2 font-bold hover:text-cyan-400 hover:border-cyan-400">
                    <Link to={'/new'}>New Post</Link>
                </li>
            </ul>
        </nav>
    )
}