import { PostContext } from "@/contexts/PostContext";
import { postReducers } from "@/reducers/postReducers";
import { useContext, useReducer } from "react";

export const PostList = () => {
    const postCtx = useContext(PostContext)
    //const [posts,dispatch]= useReducer(postReducers,[])  

    
    return(
        <div>
            {
                postCtx?.posts.map(item =>(
                    <div key={item.id} className="p-3 border-b border-gray-500">
                        <div className="text-xl font-bold mb-2">
                            {item.title}
                        </div>
                        <div className="text-sm">
                            {item.body}
                        </div>
                        <button className="bg-red-600 rounded-md p-1" onClick={()=> postCtx.removePost(item.id)}>X</button>
                    </div>
                ))
            }
        </div>
    );
}