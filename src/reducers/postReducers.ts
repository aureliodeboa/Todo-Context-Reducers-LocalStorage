import { Post } from "@/Types/Post";
type addAction = {
    type: 'add';
    payload: {
        title: string,
        body:string
    }
}

type removeAction = {
    type:'remove';
    payload: {id:number}
}

type ListActions = addAction | removeAction;

export const postReducers = (posts: Post[], action: ListActions): Post[]=>{
    switch(action.type){
        case 'add':
            return(
                [...posts, {
                    id: posts.length,
                    title: action.payload.title,
                    body: action.payload.body
                }]
            )
        case 'remove':
            return(posts.filter(item => item.id!= action.payload.id));
        
        default: return posts;
    }

}