import { Result } from '../hooks/useAnswer'

export const ResultMessage: React.FC<{ result: Result | undefined }> = ({
  result
}) => {
  return (
    <div style={{ color: result === Result.Wrong ? 'red' : 'green' }}>
      {result === Result.Wrong ? 'Wrong Answer' : 'Correct Answer'}
    </div>
  )
}
