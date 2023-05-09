import NavigationBar from "./components/NavigationBar"
import Hero from "./components/Hero"
import Products from "./components/Products"
import Services from "./components/Services"
import About from "./components/About"
import Customers from "./components/Customers"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Products />
      <About />
      <Services />
      <Customers />
      <Footer />
    </div>
  )
}

export default App
