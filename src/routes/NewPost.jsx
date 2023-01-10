import './NewPost.css'
import postImg from '../assets/Post-rafiki.svg'

import blogFetch from '../axios/config'

import { useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

export function NewPost(){

    const navigate = useNavigate()

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const createPost = async (e)=>{
        e.preventDefault()

        const post = {title, body, userId:1}

        await blogFetch.post("/posts",{
            body:post,
        })
        navigate('/')
    }
    return(
        <div className="max-w-2xl m-auto flex flex-col">
            <h2 className="text-2xl font-bold text-center text-white">Inserir novo Post</h2>
            <form
                onSubmit={(e)=>createPost(e)} 
                className="w-full flex justify-around p-8 mt-4 max-sm:flex-col max-sm:items-center">
                <div className='flex flex-col items-start gap-5'>
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="title">
                            Título:
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Digite o título"
                            id="title"
                            onChange={(e)=>setTitle(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                        <label htmlFor="body">
                            Conteúdo:
                        </label>
                        <textarea
                            name="body"
                            id="body"
                            placeholder="digite o conteúdo"
                            onChange={(e)=>setBody(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <input type="submit" value="Criar Post" className='cursor-pointer w-44 border-2 rounded-md bg-slate-50 border-white'/>
                </div>
                <img src={postImg} alt="" className='w-64'/>
            </form>
        </div>
    )
}