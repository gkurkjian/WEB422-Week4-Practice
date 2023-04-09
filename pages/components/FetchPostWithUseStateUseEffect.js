import { useState, useEffect } from "react";
export default function FetchPostWithUseStateUseEffect(props) {
    const [post, setPost] = useState(null);  // undefined initial value

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data => {
            setPost(data)
        })
        console.log('Fetching the data was successful!');
    }, []);

    if(post) {
        return(
            <>
                <strong>User ID: </strong>{post?.userId} <br />
                <strong>Title: </strong>{post?.title} <br />
                <strong>Body: </strong>{post?.body} <br />
            </>
        )
    } else {
        return <>Loading Spinner...</>
    }
    
}