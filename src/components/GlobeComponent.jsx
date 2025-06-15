import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { useNavigate } from 'react-router-dom';

const GlobeComponent = () => {
  const globeEl = useRef();
  const [selectedMarker, setSelectedMarker] = useState(null);

  const navigate = useNavigate();

  const handleExploreClick = () => {
    if (selectedMarker?.tagid) {
      navigate(`/exp/${selectedMarker.tagid}`);
    }
  };

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

  const markers = useMemo(() => [
    {
      lat: 52.00966963115631, 
      lng: 5.868389196480557,
      tagid: '684c40de28ea76669318c986',
      name: 'Netherland : Amsterdam, Brussels & Paris Highlights',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%208%20%20best%20of%20euro.png?alt=media&token=17f0f144-a734-4955-aa12-38e5f150db2b',
    },
    {
      lat: 39.44511930503268, 
      lng: -3.4582618537039442,
      tagid: '684c40ef28ea76669318c9ab',
      name: 'Spain Highlights: Barcelona, Costa Brava, Valencia & Madrid',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2010%20uk.png?alt=media&token=cf597baf-4b76-4bef-b783-0381df90877a',
    },
    {
      lat: 42.99623122632207, 
      lng: 12.439834539795978,
      tagid: '684c40d228ea76669318c95e',
      name: 'Essence of Italy Tour',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%204%20(%2016%20dec).png?alt=media&token=bbd9201b-3c37-43a2-a9f4-2c4a80521b21',
    },
    {
      lat: 15.519299469207477, 
      lng: 101.07400568076912,
      tagid: '684c409328ea76669318c86e',
      name: 'Thailand – Pattaya & Bangkok Highlights',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fthailand.png?alt=media&token=314b3cfa-b8e2-47ed-ae7c-eda1612cbb8c',
    },
    {
      lat: 62.18826843642251, 
      lng: 94.38730359979672,
      tagid: '684c406528ea76669318c7c9',
      name: 'Russia – Moscow & St. Petersburg Highlights',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feastern%20europe.png?alt=media&token=c885f7f3-1db0-4789-ae00-7e52c7b02207',
    },
    {
      lat: 25.21400613987975, 
      lng: 55.276866995038084,
      tagid: '684b17b2743424e7fb107562',
      name: 'Dubai Highlights',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai.png?alt=media&token=bbe14937-fcc3-4d0b-9f08-d6e68cae1bcb',
    },
    {
      lat: 9.322556982695469, 
      lng: 76.6852955565092,
      tagid: '684c401828ea76669318c6cd',
      name: "Kerala – God's Own Country",
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkerala.png?alt=media&token=07488a0a-fb78-4721-971e-aabb2a389834',
    },
    {
      lat: 14.542153875048479, 
      lng: 107.97777130645434,
      tagid: '684c40ab28ea76669318c8b5',
      name: 'Vietnam Highlights',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fvietnam.png?alt=media&token=7f037917-30ed-4dd4-8fe6-2ef7912aeffe',
    },
    {
      lat: 27.439450093094592, 
      lng: 90.44551729905648,
      tagid: '684b1637743424e7fb1074bc',
      name: 'Australia Highlights',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%201%20(12%20nov).png?alt=media&token=0658bda4-53a1-48c3-adaa-27d8082122e8',
    },
    {
      lat: 11.548837274108434, 
      lng: 92.43620986231117,
      tagid: '684b14ed743424e7fb1074a4',
      name: 'Andaman Islands Delight',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fphuket.png?alt=media&token=809cd9d0-4e59-4141-abb4-665cc517ec56',
    },
    {
      lat: 27.530837932499647, 
      lng: 28.50986170956305,
      tagid: '684b1e515c674257ff69dc68',
      name: 'Egypt Explorer: Cairo, Luxor & Aswan',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%202%20(%2006%20sept).png?alt=media&token=5f484617-de65-4410-8333-cf998092ada9',
    },
    {
      lat: -6.1274250634815655, 
      lng: 35.759163181773935,
      tagid: '684c408d28ea76669318c849',
      name: 'Tanzania Safari Adventure',
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%20(ms%20bhvya.png?alt=media&token=f3fc47ea-3a30-4274-95c7-1f6e2ed1f338',
    },
  ], []);

  // Memoize the HTML element creation function
  const createHtmlElement = useMemo(() => (d) => {
    const el = document.createElement('div');
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
    
    el.appendChild(img);
    el.style.pointerEvents = 'auto';
    
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      setSelectedMarker(d);
    });
    
    return el;
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: window.innerWidth < 768 ? '70vh' : '100vh',
        overflow: 'hidden',
        backgroundColor: 'black'
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
        htmlElement={createHtmlElement}
        width={window.innerWidth}
        height={window.innerWidth < 768 ? window.innerHeight * 0.7 : window.innerHeight}
      />

      {selectedMarker && (
        <div className="info-card">
          <h3>{selectedMarker.name}</h3>
          <button
            onClick={handleExploreClick}
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