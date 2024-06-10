import './SortByName.css'

export const SortByName = ({ handleSearch, search }) => {
  return (
    <label className='search-name'>
      Search by name
      <input
        onChange={handleSearch}
        value={search}
        type='text'
        placeholder='Harry Potter, Star Wars, ...'
      />
    </label>
  )
}
