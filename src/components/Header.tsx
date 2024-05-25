import { PostContext } from "@/contexts/PostContext"
import { useContext, useState } from "react"

export const Header = () =>{
    const [titleInput, settitleInput]= useState('');
    const [bodyInput, setbodyInput]= useState('');
    const postCtx = useContext(PostContext);

    const handlePost= () =>{
        if(titleInput && bodyInput){
            postCtx?.addPost(titleInput,bodyInput);

            settitleInput('');
            setbodyInput('');
        }
    }

    return(
       <>
        <h1>
          Publique seu Post
        </h1>
        <div className="flex flex-col justify-center my-3  max-w-md ">
            <input className="my-3 rounded-sm h-10 text-black p-1"
             type="text" title="Titulo novo post" 
             placeholder="Digite o titulo" value={titleInput}  onChange={(e)=>settitleInput(e.target.value)}/>
            
            <textarea className="rounded-sm h-24 text-black p-2"
             title="post" placeholder="Digite o post"
              value={bodyInput} onChange={(e)=>setbodyInput(e.target.value)}></textarea>
            <button className="bg-blue-500 p-3 text-white rounded-md mt-3" onClick={handlePost}>Publicar</button>
        </div>
       </>
    )
}