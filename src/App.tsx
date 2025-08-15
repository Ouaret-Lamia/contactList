import './App.css'
import ContactList from './components/ContactList'
import Stats from './components/Stats'

function App() {

  return (
    <div className='flex flex-col md:flex-row gap-4'>
      <div className='p-0 order-1 md:order-0'>
        <ContactList />
      </div>
      <div className='order-0 mdprder-1'>
        <Stats />
      </div>
    </div>
  )
}

export default App
