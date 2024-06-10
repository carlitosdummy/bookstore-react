import { useEffect, useState, useContext } from 'react'

import { COUNTER_TYPE } from '../../../constants/consts'

import { Counter } from '../../Counter/Counter'
import { SortByGenre } from '../../Filters/SortByGenre/SortByGenre'
import { SortByName } from '../../Filters/SortByName/SortByName'
import { SortByPages } from '../../Filters/SortByPages/SortByPages'
import { BookAvailableList } from '../BookAvailableList/BookAvailableList'

import { BookContext } from '../../../context/BookContext'

import { library } from '../../../books/book.json'

import './AvailableBooks.css'

export const AvailableBooks = () => {
  const [counter, setCounter] = useState(library.length)
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [pages, setPages] = useState(0)

  const { availableBooks, addReadingList } = useContext(BookContext)

  const handleSort = (event) => setSort(event.target.value)

  useEffect(() => {
    const newCounter = availableBooks.filter(({ book }) => book.genre.includes(sort) && book.pages >= pages && book.title.toLowerCase().includes(search)).length
    setCounter(newCounter)
  }, [sort, availableBooks, search, pages])

  const handleSearch = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch.toLowerCase())
  }

  const handlePages = (event) => {
    const newPages = event.target.value
    setPages(+newPages)
  }
  // ? This function may be unnecessary (?)
  const hanldeSubmit = (event) => event.preventDefault()

  return (
    <section className='available'>
      <h2>Available Books</h2>

      <Counter
        counter={availableBooks.length}
        type={COUNTER_TYPE.GENERAL}
      />

      <div className='search-area'>
        <form onSubmit={hanldeSubmit}>
          <SortByName handleSearch={handleSearch} search={search} />
          <SortByGenre handleSort={handleSort} />
          <SortByPages handlePages={handlePages} pages={pages} />
        </form>
      </div>

      {
      counter === 0
        ? <h3>No book for those parameters :c</h3>
        : <>
          <Counter
            counter={counter}
            type={COUNTER_TYPE.GENRE}
          />
          <BookAvailableList
            pages={pages}
            search={search}
            availableBooks={availableBooks}
            addReadingList={addReadingList}
            sort={sort}
          />
        </>
      }

    </section>
  )
}
