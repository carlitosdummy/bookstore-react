import './BookAvailableList.css'

export const BookAvailableList = ({ availableBooks, addReadingList, sort, search, pages }) => {
  return (
    <ul className='ul-available-books'>
      {
        availableBooks.map(({ book }) => {
          if (book.genre.includes(sort) && book.title.toLowerCase().includes(search) && book.pages >= pages) {
            return (
              <li key={book.ISBN}>
                <h4>{book.title} - {book.year} ({book.genre})</h4>
                <h5 className='pages'>Pages: {book.pages}</h5>
                <img src={book.cover} alt={`${book.title}: ${book.synopsis}`} />
                <button onClick={() => addReadingList(book.ISBN)}>Add to list</button>
              </li>
            )
          }
          return null
        })
          }
    </ul>
  )
}
