import Banner from "./components/Banner/Banner"
import CollectionFeaturesSection from "./components/CollectionFeaturesSection/CollectionFeaturesSection"
import Footer from "./components/Footer/Footer"
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
      <CollectionFeaturesSection></CollectionFeaturesSection>
      <Footer></Footer>

    </div>
  )
}

export default App
