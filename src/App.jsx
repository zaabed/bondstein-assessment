import Banner from "./components/Banner/Banner"
import CollectionFeaturesSection from "./components/CollectionFeaturesSection/CollectionFeaturesSection"
import CreateNftsSection from "./components/CreateNftsSection/CreateNftsSection"
import DiscoverNfts from "./components/DiscoverNfts/DiscoverNfts"
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
      <CreateNftsSection></CreateNftsSection>
      <DiscoverNfts></DiscoverNfts>
      <Footer></Footer>

    </div>
  )
}

export default App
