import Image from 'next/image';

const Gallery = ({ repo, images }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
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

export default Gallery;
