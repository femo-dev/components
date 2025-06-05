import '../css/index.css';

export default function Gallery({ images }) {
  return (
    <div className="gallery container">
      {
        images.map((url, index) => (
          <img key={index} src={url} alt={`Gallery ${index + 1}`} />
        ))
      }
    </div>
  );
}