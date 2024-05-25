import { postReducers } from "@/reducers/postReducers";
import { Post } from "@/Types/Post";
import { createContext, ReactNode, useReducer } from "react";

type PostContextType = {
    posts: Post[];
    addPost: (title:string, body:string)=>void;
    removePost : (id:number)=>void;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children} : {children: ReactNode}) =>{
   //const [posts,setPosts]= useState<Post[]>([]); //usando o contexts

    const [posts,dispatch]= useReducer(postReducers,[]) //reducers

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