import styles from '../styles/Home.module.css'
import ClickCounter from './components/ClickCounter'
import ClickCounterBySecond from './components/ClickCounterBySecond'
import PostData from './components/PostDataSWR'
import PostDataSWR from './components/PostData'
import PostDataUseEffect from './components/PostDataUseEffect'

export default function Home() {
  return (
   <>
   <ClickCounter />
   <ClickCounterBySecond /> <br /><br />
   <PostData /> <br /><br />
   <PostDataSWR /> <br /> <br />
   <PostDataUseEffect />
   </>
  )
}
