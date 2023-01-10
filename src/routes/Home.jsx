import blogFetch from "../axios/config"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Home.css'

export function Home(){

    const [posts, setPosts] = useState([])

    const getPosts = async()=>{
        try {
            
            const response = await blogFetch.get('/posts')
            
            const data = response.data
            setPosts(data)
            
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(()=>{
        getPosts()
    },[])
    return(
        <div>
            <h1 className="text-center text-4xl text-gray-200 font-bold">Ultimos posts</h1>
            {/* Quando queremos passar mais de uma linha de código jsx, colocamos entre parêntesis () pra ele entender que é um objeto */}
            {
                posts.length === 0 ? (<p className="text-white">Carregando...</p>) : (
                    posts.map((post)=>(
                        <div key={post.id} className="border-2 mt-8 p-4 rounded-md flex flex-col gap-4 hover:scale-105 duration-500">
                            <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                            <p className="text-gray-300">{post.body}</p>
                            <Link to={`/posts/${post.id}`} className="w-40 text-center text-white py-2 px-4 rounded-lg border-2 font-bold hover:text-cyan-400 hover:border-cyan-400 duration-300">Ler mais</Link>
                        </div>
                    ))
                )
            }
        </div>
    )
}