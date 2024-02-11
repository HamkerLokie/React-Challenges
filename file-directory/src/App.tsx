import Entry from './components/Entry'
import { files } from './data/files'

function App () {
  return (
    <>
      {files.children.map(entry => (
        <Entry entry={entry} depth={1} />
      ))}
    </>
  )
}

export default App
