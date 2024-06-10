import { createContext, useState, useEffect } from 'react'
import { library } from '../books/book.json'

export const BookContext = createContext()

export const BookProvider = ({ children }) => {
  const [readingList, setReadingList] = useState(() => {
    const readingListFromLS = window.localStorage.getItem('readingList')
    return readingListFromLS ? JSON.parse(readingListFromLS) : []
  })

  const [availableBooks, setAvailableBooks] = useState(() => {
    const availableBooksFromLS = window.localStorage.getItem('availableBooks')
    return availableBooksFromLS ? JSON.parse(availableBooksFromLS) : library
  })

  useEffect(() => {
    window.localStorage.setItem('readingList', JSON.stringify(readingList))
  }, [readingList])

  useEffect(() => {
    window.localStorage.setItem('availableBooks', JSON.stringify(availableBooks))
  }, [availableBooks])

  const addReadingList = (ISBN) => {
    const [newBook] = availableBooks.filter(({ book }) => book.ISBN === ISBN)
    setReadingList([newBook, ...readingList])
    removeFromAvailable(ISBN)
  }

  const removeFromReadingList = (ISBN) => {
    addAvailableList(ISBN)
    const newBooks = readingList.filter(({ book }) => book.ISBN !== ISBN)
    setReadingList(newBooks)
  }

  const addAvailableList = (ISBN) => {
    const [newBook] = readingList.filter(({ book }) => book.ISBN === ISBN)
    setAvailableBooks([newBook, ...availableBooks])
  }

  const removeFromAvailable = (ISBN) => {
    const newBooks = availableBooks.filter(({ book }) => book.ISBN !== ISBN)
    setAvailableBooks(newBooks)
  }

  return (
    <BookContext.Provider value={{ readingList, availableBooks, addReadingList, removeFromReadingList }}>
      {children}
    </BookContext.Provider>
  )
}
