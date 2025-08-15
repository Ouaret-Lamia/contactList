import { useEffect, useState } from 'react'
import Contact from './Contact'
import type { ContactProp } from '@/types'

const ContactList = () => {
  const [contactList, setContactList] = useState([])

  useEffect(() => {
    let list: ContactProp[] = []

    for(let i=0; i < localStorage.length; i++) {
      const key = localStorage.key(i)

      if(key?.startsWith("contact")) {
        const contact = localStorage.getItem(key)
        list.push(JSON.parse(contact))
      }
    }
  }, [])

  return (
    <div className="w-full md:w-[70vw] md:px-4 space-y-8">
      <h4 className='mt-3 text-4xl font-bold text-orange-950'>Your Contact List</h4>

      <div className='h-[74vh] md:pr-3 grid grid-cols-1 gap-3 md:grid-cols-3 md:overflow-auto'>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
      </div>
    </div>
  )
}

export default ContactList