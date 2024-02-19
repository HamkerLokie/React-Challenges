import { useState } from 'react'
export enum Result {
  Correct,
  Wrong
}

const useAnswer = () => {
  const [result, setResult] = useState<Result | undefined>(undefined)

  const checkAnswer = (color: string, option: string) => {
    console.log(color, option)

    if (color === option) {
      setResult(Result.Correct)
    } else {
      setResult(Result.Wrong)
    }
  }

  return { result, checkAnswer }
}

export default useAnswer
