import { ReadingList } from './components/ReadingList/ReadingList/ReadingList'
import { AvailableBooks } from './components/AvailableBooks/AvailableBooks/AvailableBooks'

import './App.css'

function App () {
  return (
    <>
      <h1>BOOK STORE</h1>
      <main>
        <AvailableBooks />
        <ReadingList />
      </main>
    </>
  )
}

export default App
