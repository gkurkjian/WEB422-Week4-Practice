import styles from '../styles/Home.module.css'
import ClickCounter from './components/ClickCounter'
import ClickCounterBySecond from './components/ClickCounterBySecond'
import FetchPostWithUseStateUseEffect from './components/FetchPostWithUseStateUseEffect'

export default function Home() {
  return (
   <>
   <ClickCounter />
   <ClickCounterBySecond /> <br /><br />
   <FetchPostWithUseStateUseEffect />
   </>
  )
}
