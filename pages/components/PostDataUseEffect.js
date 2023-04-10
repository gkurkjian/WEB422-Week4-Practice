// This module if we want to fetch the data and update it
import { useState, useEffect } from "react";
import useSWR from 'swr';

export default function PostDataUseEffect(props) {
    const [ post, setPost ] = useState();  // post state variable we'll update/store with the data fetched from API using useSWR

    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1'); // fetching useSWR and stored in "data"
    
    useEffect(() => {
        if(data) {
            setPost(data)
        }
    }, [data]);  // only run the effect when `data` changes

    if (error) {
        return <div>Error fetching the data</div>
    }
    else if (post){
        return (  // displaying post?.userId and more because we set the data in setPost() on line 12
            <>
              <strong>User ID:</strong> {post?.userId}<br />
              <strong>Title:</strong> {post?.title}<br />
              <strong>Body:</strong> {post?.body}<br />
            </>
          );
    }
    else {
        return <div>Loading Spinner...</div>
    }
}