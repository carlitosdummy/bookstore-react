import './BookReadingList.css'

export const BookReadingList = ({ readingList, removeFromReadingList }) => {
  return (
    <ul className='ul-reading-list'>
      {
            readingList.map(({ book }) => (
              <li key={book.ISBN}>
                <h4>{book.title} - {book.year} ({book.genre})</h4>
                <h5 className='pages'>Pages: {book.pages}</h5>
                <img src={book.cover} alt={`${book.title}: ${book.synopsis}`} />
                <button onClick={() => removeFromReadingList(book.ISBN)}>Remove from list</button>
              </li>
            ))
          }
    </ul>
  )
}
