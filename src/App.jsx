import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import TopCollectionSection from "./components/TopCollectionSection/TopCollectionSection"

function App() {

  return (
    <div className="mt-6">

      <Navbar></Navbar>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <TopCollectionSection></TopCollectionSection>

    </div>
  )
}

export default App
