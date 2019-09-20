
export function removePosts(index){
    return{
        type : 'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return {
        type : 'ADD_POST',
        post
    }
}