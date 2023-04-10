import useSWR from 'swr';  // do npm i swr in order to reach this library

// define the "fetcher" function.  This Can also be defined globally using SWRConfig (https://swr.vercel.app/docs/global-configuration)

// We don't need this anymore bcz we've included in _app.js
// const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function Post() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1');
  console.log('Here\'s PostDataSWR component')

  return (
    <>
    <h1>3.PostDataSWR component</h1>
    <p>In SWR, even though we put PostDataSWR component on 3rd in sequence, it'll trigger/render and fetch the 1st then any other code because it's Dynamic</p>
      <strong>User ID:</strong> {data?.userId}<br />
      <strong>Title:</strong> {data?.title}<br />
      <strong>Body:</strong> {data?.body}<br />
    </>
  );
}