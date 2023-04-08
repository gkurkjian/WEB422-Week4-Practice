import styles from '../styles/Home.module.css'
import ClickCounter from './components/ClickCounter'
import ClickCounterBySecond from './components/ClickCounterBySecond'

export default function Home() {
  return (
   <>
   <ClickCounter />
   <ClickCounterBySecond />
   </>
  )
}
