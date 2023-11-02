// import { useSelector } from 'react-redux'
// import AccordionSection from './components/AccordioSection'
// import Header from './components/Header'
// import MainSection from './components/Main'
'use client'
import { useRouter } from 'next/navigation';
export default function Home() {
   const router=useRouter()

   function handleClick()
   {
    router.push(`/hiring-managers`);
   }
  return (
    <main >
       {/* <MainSection />
       <AccordionSection /> */}
       <button className='center-btn' onClick={handleClick}>Click me to Go to App</button>


    </main>
  )
}
