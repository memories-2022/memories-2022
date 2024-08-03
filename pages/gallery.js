import Image from 'next/image';
import { fetchImages } from '../lib/github';

const Gallery = ({ images, repo }) => {
  const containerStyle = {
    backgroundColor: '#121212',
    color: '#e0e0e0',
    minHeight: '100vh',
    padding: '20px',
  };

  const cardStyle = {
    position: 'relative',
    paddingTop: '100%', // Aspect ratio 1:1 (square)
    overflow: 'hidden',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#2c2c2c',
    margin: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#e0e0e0' }}>2022 - {repo}</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
        gap: '10px',
      }}>
        {images.map((image, index) => (
          <div key={index} style={cardStyle}>
            <Image
              src={image.thumbnailUrl}
              alt={`Thumbnail ${index}`}
              layout="fill"
              objectFit="cover"
              style={{ cursor: 'pointer' }}
              onClick={() => window.open(image.fullUrl, '_blank')}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
