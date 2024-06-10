import './SortByPages.css'

export const SortByPages = ({ handlePages, pages }) => {
  return (
    <label className='pages-num'>
      Search by pages
      <input onChange={handlePages} value={pages} type='range' min={0} max={1000} />
      <span>{pages}</span>
    </label>
  )
}
