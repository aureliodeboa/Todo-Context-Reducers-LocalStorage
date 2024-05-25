import { postReducers } from "@/reducers/postReducers";
import { Post } from "@/Types/Post";
import { createContext, ReactNode, useReducer, useState } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title:string, body:string)=>void;
    
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children} : {children: ReactNode}) =>{
   //const [posts,setPosts]= useState<Post[]>([]); //usando o contexts

    const [posts,dispatch]= useReducer(postReducers,[])

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
    return(
        <PostContext.Provider value={{ posts, addPost }}> {children}</PostContext.Provider>
    );
}