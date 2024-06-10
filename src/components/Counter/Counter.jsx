import { COUNTER_TYPE } from '../../constants/consts'

export const Counter = ({ counter, type }) => {
  let extraText = ''
  if (type === COUNTER_TYPE.GENRE) extraText = 'available in this genre'
  if (type === COUNTER_TYPE.READING_LIST) extraText = 'in your reading list'
  if (type === COUNTER_TYPE.GENERAL) extraText = 'available'

  return (
    <>
      {counter
        ? <h5>{counter} book{counter > 1 && 's'} {extraText}</h5>
        : <h5>0 books {extraText}</h5>}
    </>
  )
}
