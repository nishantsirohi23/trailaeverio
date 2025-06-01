import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef();
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
      controls.enableZoom = false;

      // Disable rotate on mobile to allow scroll
      if (window.innerWidth < 768) {
        controls.enableRotate = false;
        controls.enablePan = false;
      }
    }

    // Fix scroll-blocking on mobile
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.style.touchAction = 'pan-y'; // allow vertical scroll
    }
  }, []);

  const markers = [
   
    {
        lat: 28.6139,
        lng: 77.2090,
        name: 'India',
        imageUrl: 'https://images.unsplash.com/photo-1625230417238-82847a53c9da?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: 37.7749,
        lng: -122.4194,
        name: 'USA',
    imageUrl:'https://plus.unsplash.com/premium_photo-1681803531285-75db948035d3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: 35.6895,
        lng: 139.6917,
        name: 'Japan',
        imageUrl: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: -33.8688,
        lng: 151.2093,
        name: 'Australia',
        imageUrl: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: 55.7558,
        lng: 37.6173,
        name: 'Russia',
        imageUrl: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: -23.5505,
        lng: -46.6333,
        name: 'Brazil',
        imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: 48.8566,
        lng: 2.3522,
        name: 'France',
        imageUrl: 'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?q=80&w=1504&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: 40.7128,
        lng: -74.0060,
        name: 'USA (NY)',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1714051660720-888e8454a021?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        lat: 39.9042,
        lng: 116.4074,
        name: 'China',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1664304492320-8359efcaad38?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: window.innerWidth < 768 ? '70vh' : '100vh',
        overflow: 'hidden',
        backgroundColor: 'black' // 👈 added
      }}
    >
      <style>
        {`
          .info-card {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            z-index: 1000;
          }
          .info-card h3 {
            color: black;
            font-size: 1.25rem;
            font-weight: 600;
            margin: 0 0 10px 0;
          }
          .info-card button {
            margin-top: 10px;
            padding: 5px 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .explore-button {
            background-color: #2563eb;
            color: white;
          }
          .explore-button:hover {
            background-color: #1d4ed8;
          }
          .close-button {
            margin-left: 10px;
            background-color: #d1d5db;
            color: black;
          }
          .close-button:hover {
            background-color: #9ca3af;
          }
        `}
      </style>

      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        htmlElementsData={markers}
        htmlLat="lat"
        htmlLng="lng"
        htmlElement={(d) => {
            const img = document.createElement('img');
            const size = window.innerWidth < 768 ? 32 : 40;
            img.src = d.imageUrl;
            img.alt = d.name;
            img.style.width = `${size}px`;
            img.style.height = `${size}px`;
            img.style.borderRadius = '50%';
            img.style.border = '2px solid white';
            img.style.boxShadow = '0 0 4px rgba(0,0,0,0.5)';
            img.style.cursor = 'pointer';
            img.style.pointerEvents = 'auto';
            img.addEventListener('click', () => setSelectedMarker(d));
            return img;
          }}
          
        width={window.innerWidth}
        height={window.innerWidth < 768 ? window.innerHeight * 0.7 : window.innerHeight}
      />

      {selectedMarker && (
        <div className="info-card">
          <h3>{selectedMarker.name}</h3>
          <button
            onClick={() => alert(`Exploring ${selectedMarker.name}`)}
            className="explore-button"
          >
            Explore
          </button>
          <button
            onClick={() => setSelectedMarker(null)}
            className="close-button"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default GlobeComponent;
