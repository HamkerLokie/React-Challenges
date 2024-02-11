import { useState } from 'react'

type EntryProps = {
  name: string
  children?: EntryProps[]
}
const addDirectory = (entry: EntryProps, newEntry: EntryProps) => {
  if (!entry.children) {
    entry.children = []
  }
  entry.children.push(newEntry)
}

const Entry = ({ entry, depth }: { entry: EntryProps; depth: number }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [showInput, setShowInput] = useState<boolean>(false)
  const [newEntryName, setNewEntryName] = useState<string>('')

  const handleAddDirectory = () => {
    if (newEntryName.trim() === '') return
    const newEntry: EntryProps = { name: newEntryName }
    addDirectory(entry, newEntry)
    setNewEntryName('')
    setShowInput(false)
  }

  return (
    <div className='pl-5'>
      {entry.children && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='bg-black text-white rounded-full w-5 text-center'
        >
          {isExpanded ? '-' : '>'}
        </button>
      )}{' '}
      {entry.name}{' '}
      {entry.children && (
        <button
          onClick={() => setShowInput(true)}
          className='text-white bg-slate-500  w-5 text-center'
        >
          +
        </button>
      )}
      {showInput && (
        <div>
          <input
            type='text'
            value={newEntryName}
            onChange={e => setNewEntryName(e.target.value)}
            onBlur={() => setShowInput(false)}
            onKeyDown={e => {
              if (e.key === 'Enter') handleAddDirectory()
            }}
            placeholder='New directory/file name'
          />
          <button onClick={() => handleAddDirectory}>Add</button>
        </div>
      )}
      {isExpanded && (
        <div style={{ paddingLeft: `${depth * 10}px` }}>
          {entry.children?.map(entry => (
            <Entry entry={entry} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Entry
