import './App.css'
import Header from './components/header/Header'
import HomePage from './pages/homePage/HomePage'
import AboutPage from './pages/aboutPage/AboutPage'
import WorksPage from './pages/worksPage/WorksPage'
import ContactPage from './pages/contactPage/ContactPage'


function App() {

  return (
    <>
      <Header></Header>
      <main> 
        <HomePage></HomePage>
        <AboutPage></AboutPage>
        <WorksPage></WorksPage>
        <ContactPage></ContactPage>
      </main>
    </>
  )
}

export default App
