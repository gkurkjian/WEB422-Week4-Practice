import ClickCounter from './components/ClickCounter'
import ClickCounterBySecond from './components/ClickCounterBySecond'
import PostData from './components/PostDataSWR'
import PostDataSWR from './components/PostData'
import PostDataUseEffect from './components/PostDataUseEffect'
import PostDataStatic from './components/PostDataStatic'
import DataRendering from './components/DataRendering'


// // If we wished to fetch the data in Pre-Rendered time, we can use getStaticProps() and throw props in Hom() function.
// // This using Promise to fetch a data
// export function getStaticProps() {
//   return new Promise((resolve, reject) => {
//     fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data =>{
//       resolve({
//         props: {staticPost: data}
//       })
//     })
//   })
// }


// This function it's similar to the function above, it gets called on build time using async method
export async function getStaticProps(props) {
  // call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();

  return { props: {staticPost: data} };
}


export default function Home(props) {
  return (
   <>
   <ClickCounter />
   <ClickCounterBySecond /> <br /><br />
   <h1>Here we'll start fetching data from 'URL' by using multiple method</h1>
   <PostData /> <br /><br />
   <PostDataSWR /> <br /> <br />
   <PostDataUseEffect /> <br /><br />
   <PostDataStatic post={props.staticPost}/> <br /> <br />
   <DataRendering />
   </>
  )
}
