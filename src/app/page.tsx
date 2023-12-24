import ContactScreen from '@/screens/ContactScreen'
import HomeScreen from '@/screens/HomeScreen'
import ProjectsScreen from '@/screens/ProjectsScreen'
import ServicesScreen from '@/screens/ServicesScreen'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
   <HomeScreen/>
   <ServicesScreen/>
   <ProjectsScreen/>
   <ContactScreen/>
   </div>
  )
}
