import { postReducers } from "@/reducers/postReducers";
import { Post } from "@/Types/Post";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title:string, body:string)=>void;
    removePost : (id:number)=>void;
}

const STRING_KEY='postContextContent';

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children} : {children: ReactNode}) =>{
   //const [posts,setPosts]= useState<Post[]>([]); //usando o contexts

    const [posts,dispatch]= useReducer(postReducers,
        JSON.parse(localStorage.getItem(STRING_KEY)|| '[]')
    ); // pega os dados como string do local storage e transforma em um vetor de itens, e se vier nulo coloca '[]'

    useEffect(()=>{
        localStorage.setItem(STRING_KEY,JSON.stringify(posts))
    },[posts]); //quarda os itens no local stroge "Lembrando que os posts serão guardados como string"


    const addPost = (title:string, body:string)=>{
        //setPosts([...posts,{ id: posts.length, title, body  }]) //usando o contexts
        dispatch({
            type:'add',
            payload:{
                title, body
            }
        }      
        )

    }

    const removePost = (id:number) =>{
        dispatch({
            type: 'remove',
            payload:{id}
        })
    }
    return(
        <PostContext.Provider value={{ posts, addPost, removePost }}> {children}</PostContext.Provider>
    );
}

export const usePosts = () => useContext(PostContext); // nos outro lugares agora voce não precisa chamar pelo context basta chamar usePosts()