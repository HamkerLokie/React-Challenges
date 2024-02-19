import { Button } from './UI/Buttons'
import { ResultMessage } from './UI/ResultMessage'
import useAnswer from './hooks/useAnswer'
import useColors from './hooks/useColors'

const App = () => {
  const { color, options } = useColors()
  const { result, checkAnswer } = useAnswer()
  return (
    <>
      <div style={{ background: color, height: '200px', width: '200px' }}></div>

      {options.map(op => (
        <Button
          key={op}
          option={op}
          checkAnswer={() => checkAnswer(color, op)}
        />
      ))}
      <br />
      {result !== undefined && <ResultMessage result={result} />}
    </>
  )
}

export default App
