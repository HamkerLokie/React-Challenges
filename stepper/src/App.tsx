import Stepper from './component/Stepper'
import { STEPS } from './data/steps'

function App () {
  return (
    <section className='p-10'>
      <h2 className='text-center text-2xl font-[600] mb-10'>Checkout</h2>
      <Stepper STEPS={STEPS} />
    </section>
  )
}

export default App
