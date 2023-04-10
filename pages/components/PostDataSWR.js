import useSWR from 'swr';

// define the "fetcher" function.  This Can also be defined globally using SWRConfig (https://swr.vercel.app/docs/global-configuration)

// We don't need this anymore bcz we've included in _app.js
// const fetcher = (url) => fetch(url).then((res) => res.json()); 

export default function Post() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts/1');

  return (
    <>
      <strong>User ID:</strong> {data?.userId}<br />
      <strong>Title:</strong> {data?.title}<br />
      <strong>Body:</strong> {data?.body}<br />
    </>
  );
}