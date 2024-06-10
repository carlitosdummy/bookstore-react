import { useContext } from 'react'
import { COUNTER_TYPE } from '../../../constants/consts'
import { BookReadingList } from '../BookReadingList/BookReadingList'
import { Counter } from '../../Counter/Counter'
import { BookContext } from '../../../context/BookContext'

import './ReadingList.css'

export const ReadingList = () => {
  const { readingList, removeFromReadingList } = useContext(BookContext)

  return (
    <aside className='reading-list'>
      <h2>Your reading list</h2>

      <Counter
        counter={readingList.length}
        type={COUNTER_TYPE.READING_LIST}
      />

      <BookReadingList
        readingList={readingList}
        removeFromReadingList={removeFromReadingList}
      />
    </aside>
  )
}
