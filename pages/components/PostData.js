import { useState, useEffect } from "react";
export default function FetchPostWithUseStateUseEffect(props) {
    const [post, setPost] = useState(null);  // undefined initial value

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json()).then(data => {
            setPost(data)
        })
        console.log('Here\'s PostData component');
    }, []);

    if(post) {
        return(
            <>
                <h1>1.PostData component</h1>
                <strong>User ID: </strong>{post?.userId} <br />
                <strong>Title: </strong>{post?.title} <br />
                <strong>Body: </strong>{post?.body} <br />
            </>
        )
    } else {
        return <>Loading Spinner...</>
    }
    
}