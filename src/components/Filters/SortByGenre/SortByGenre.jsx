import './SortByGenre.css'

export const SortByGenre = ({ handleSort }) => {
  return (
    <label className='category'> Sort by genre
      <select name='genres' id='genres-select' onChange={(event) => handleSort(event)}>
        <option value=''>Todos</option>
        <option value='Fantasía'>Fantasía</option>
        <option value='Ciencia ficción'>Ciencia ficción</option>
        <option value='Zombies'>Zombies</option>
        <option value='Terror'>Terror</option>
      </select>

    </label>
  )
}
