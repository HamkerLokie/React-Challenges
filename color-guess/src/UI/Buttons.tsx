
type ButtonProps = {
  option: string;
  checkAnswer: (option: string) => void; 
}

export const Button = ({ option, checkAnswer }: ButtonProps) => {
  return <button onClick={() => checkAnswer(option)}>{option}</button>;
}