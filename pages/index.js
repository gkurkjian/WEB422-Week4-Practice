import ClickCounter from './components/ClickCounter'
import ClickCounterBySecond from './components/ClickCounterBySecond'
import PostData from './components/PostDataSWR'
import PostDataSWR from './components/PostData'
import PostDataUseEffect from './components/PostDataUseEffect'
import PostDataStatic from './components/PostDataStatic'


// If we wished to fetch the data in Pre-Rendered time, we can use getStaticProps() and throw props in Hom() function
export function getStaticProps() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()).then(data =>{
      resolve({
        props: {staticPost: data}
      })
    })
  })
}

export default function Home(props) {
  return (
   <>
   <ClickCounter />
   <ClickCounterBySecond /> <br /><br />
   <PostData /> <br /><br />
   <PostDataSWR /> <br /> <br />
   <PostDataUseEffect /> <br /><br />
   <PostDataStatic post={props.staticPost}/>
   </>
  )
}
