import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './css/index.css';

function App() {
  const galleryImages = [
    "/images/image1.jpg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.png",
  ];

  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">
        <Banner
          title="Welcome to My Components - Assignment 1"
          text="This is a banner with customizable buttons using props."
          button1={{ text: "Get Started", type: "primary" }}
          button2={{ text: "Learn More", type: "secondary" }}
        />
        <Gallery images={galleryImages} />
      </main>
      <Footer />
    </div>
  );
}

export default App;