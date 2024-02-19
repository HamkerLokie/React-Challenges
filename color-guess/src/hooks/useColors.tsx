import { useEffect, useState } from 'react'
import { generateRandomColor } from '../helper/colors'

const useColors = () => {
  const [color, setColor] = useState<string>('#ff0000')
  const [options, setOptions] = useState<string[]>([])
  const [correctOption, setCorrectOption] = useState<string>('')

  const generateColors = () => {
    const actual = generateRandomColor()
    setColor(actual)
    setOptions(
      [actual, generateRandomColor(), generateRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    )
  }

  useEffect(() => {
    generateColors()
  }, [])

  const handleOptionClick = (selectedOption: string) => {
    if (selectedOption === color) {
      setCorrectOption(selectedOption); // Set correct option to trigger generation
    }
  }

  return { color, options, handleOptionClick }
}

export default useColors
