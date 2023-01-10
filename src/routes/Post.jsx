import { useState, useEffect } from "react"

import blogFetch from "../axios/config"

import {useParams} from 'react-router-dom'

export function Post(){
    const {id} = useParams()

    const [post, setPost] = useState([])

    const getPost = async ()=>{
        try {
            
            const response = await blogFetch(`/posts/${id}`)

            const data = response.data

            setPost(data)

        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getPost()
    },[])

    return(
        <div>
            {
                !post.title? (
                    <p className="text-white">Carregando...</p>
                ) : (
                    <div className="border-2 mt-8 p-4 rounded-md flex flex-col gap-4 hover:scale-105 duration-500">
                        <h2 className="text-2xl font-semibold text-white">{post.title}</h2>
                        <p className="text-gray-300">{post.body}</p>
                    </div>
                )
            }
        </div>
    )
}