import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './css/index.css';

function App() {
  const galleryImages = [
    process.env.PUBLIC_URL + "/images/image1.jpg",
    process.env.PUBLIC_URL + "/images/image2.jpg",
    process.env.PUBLIC_URL + "/images/image3.png",
    process.env.PUBLIC_URL + "/images/image4.jpg",
  ];

  return (
    <div className="app-layout">
      <Header />

      <Banner
        title="Welcome to My Components - Assignment 1"
        text={
          <>
            <p>This is a banner with customizable buttons using props.<br />
            As you can see, the image gallery highlights themes related to artificial intelligence.<br />
            Each visual represents innovation, data-driven thinking, and the future of smart technology.</p>
          </>
        }
        button1={{ text: "Get Started", type: "primary" }}
        button2={{ text: "Learn More", type: "secondary" }}
      />

      <main className="main-content">
        <Gallery images={galleryImages} />
      </main>

      <Footer />
    </div>
  );
}

export default App;