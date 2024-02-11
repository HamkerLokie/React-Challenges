import { useEffect, useRef, useState } from 'react'
import { Step } from '../data/steps'

type StepperProps = {
  STEPS: Step[]
}

const Stepper = ({ STEPS }: StepperProps) => {
  const [currStep, setCurrStep] = useState<number>(1)
  const [isComplete, setisComplete] = useState<boolean>(false)
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0
  })

  const stepRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0]?.offsetWidth
        ? stepRef.current[0]?.offsetWidth / 2
        : 0,
      marginRight:
        stepRef.current[STEPS.length - 1]?.offsetWidth
          ? stepRef.current[STEPS.length - 1]?.offsetWidth / 2
          : 0
    })
  }, [STEPS])

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setCurrStep(prevStep => {
      if (prevStep === STEPS.length) {
        setisComplete(true)
        return prevStep
      } else {
        return prevStep + 1
      }
    })
  }

  const ActiveComponent = STEPS[currStep - 1]?.Component

  const calculateProgress = () => {
    return ((currStep - 1) / (STEPS.length - 1)) * 100
  }

  return (
    <>
      <div className='relative flex justify-between items-center mb-2'>
        {STEPS.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={el => (stepRef.current[index] = el)}
              className={`flex flex-col items-center ${
                currStep > index + 1 || isComplete ? 'complete' : ''
              }
              ${currStep === index + 1 ? 'active' : ''}
              `}
            >
              <div className='step-number  rounded-full p-3 flex justify-center items-center bg-black text-white w-5 h-5 z-4'>
                {currStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div>{step.name}</div>
            </div>
          )
        })}
        <div
          className='absolute top-[25%] left-0 h-[4px] bg-black'
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight
          }}
        >
          <div
            className='h-[100%] bg-green transition-[.2s ease]'
            style={{ width: `${calculateProgress}` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />

      <button
        className='bg-black text-white px-2 py-1 ml-[48%] mt-20 hover:bg-gray-600'
        onClick={e => handleChange(e)}
      >
        {currStep === STEPS.length ? 'FINISH' : 'NEXT'}
      </button>
    </>
  )
}

export default Stepper
