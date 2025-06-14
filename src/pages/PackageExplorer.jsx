import PackageCard from '@/components/PackageCard';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const continentData = {
  Asia: {
    countries: [
      { 
        duration: '5D / 6N',tagid: '684b1678743424e7fb1074e7', name:  'Bali Tropical Escape', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbali%202.png?alt=media&token=950d060c-bfd0-4e2c-97eb-cbfd578bf039',
        tags: ['Culture', 'Beach', 'Spiritual'],
        details: 'Island of Gods with stunning temples, pristine beaches and rich cultural heritage offering spiritual awakening and tropical paradise.'
      },
      { 
        duration: '5D / 6N',tagid: '684b16b5743424e7fb107501', name:  'Bhutan – Kingdom of Happiness Tour', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbhutan.png?alt=media&token=5946f6a6-33bb-437c-a5b8-2b27759b4963',
        tags: ['Adventure', 'Culture', 'Nature'],
        details: 'Last Shangri-La with majestic Himalayas, ancient monasteries and carbon-negative kingdom promoting gross national happiness over GDP.'
      },
      { 
        duration: '5D / 6N',tagid: '684c3fcc28ea76669318c668', name:  'Hong Kong & Macau: City of Dreams Getaway', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fhongkong.png?alt=media&token=06cbae91-077b-491c-9afa-b0553c8ce59c',
        tags: ['Urban', 'Shopping', 'Culinary'],
        details: 'Pearl of the Orient with dazzling skyline, world-class shopping and fusion of Eastern and Western cultures in a vibrant metropolis.'
      },
      { 
        duration: '5D / 6N',tagid: '684c403028ea76669318c725', name:  'Malaysia : Kuala Luxe Escape', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmalaysia%20(1).png?alt=media&token=69874139-7a9c-486a-b95a-f8c617fc56e1',
        tags: ['Diverse', 'Nature', 'Culture'],
        details: 'Truly Asia destination with tropical rainforests, pristine islands and multicultural harmony blending Malay, Chinese and Indian influences.'
      },
      { 
        duration: '5D / 6N',tagid: '684c404828ea76669318c76d', name:  'Nepal: Kathmandu & Pokhara Escape', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmaldives.png?alt=media&token=985aec8a-2c85-4475-ab46-52827cd89acd',
        tags: ['Luxury', 'Beach', 'Romance'],
        details: 'Paradise on earth with crystal-clear waters, overwater villas and pristine coral reefs perfect for romantic getaways and luxury experiences.'
      },
      { 
        duration: '5D / 6N',tagid: '684c403828ea76669318c73a', name:  'Mauritius Tropical Escape', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmauritius.png?alt=media&token=e0353bb7-ad54-400a-b9da-b7c1fa0a42b7',
        tags: ['Beach', 'Luxury', 'Diverse'],
        details: 'Star and key of the Indian Ocean with turquoise lagoons, volcanic mountains and multicultural blend creating tropical sophistication.'
      },
      { 
        duration: '5D / 6N',tagid: '684c409a28ea76669318c885', name:  'Thailand – Krabi & Phuket Explorer', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fphuket.png?alt=media&token=809cd9d0-4e59-4141-abb4-665cc517ec56',
        tags: ['Beach', 'Nightlife', 'Adventure'],
        details: 'Pearl of the Andaman with stunning beaches, vibrant nightlife and island-hopping adventures in Thailand\'s largest island paradise.'
      },
      { 
        duration: '5D / 6N',tagid: '684c408628ea76669318c82f', name:  'Sri Lanka : Heritage Trails of Ceylon', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fsri%20lanka.png?alt=media&token=03dd9b9e-c8de-4ab9-ab48-76d7b78363f7',
        tags: ['Heritage', 'Nature', 'Adventure'],
        details: 'Pearl of the Indian Ocean with ancient temples, lush tea plantations and wildlife safaris offering incredible diversity in compact wonder.'
      },
      { 
        duration: '5D / 6N',tagid: '684c402028ea76669318c6e8', name:  'Kyrgyzstan Adventure & Culture', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fsingapore.png?alt=media&token=4785b679-ed39-4156-a120-c20a57413df7',
        tags: ['Modern', 'Culinary', 'Urban'],
        details: 'Lion City with futuristic architecture, world-renowned cuisine and seamless blend of tradition and innovation in Southeast Asia\'s gateway.'
      },
      { 
        duration: '5D / 6N',tagid: '684c3ff428ea76669318c69b', name:  'Kazakhstan Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Ftaiwan.png?alt=media&token=881f9a3e-6599-4db2-a856-bb63187c9ae0',
        tags: ['Culture', 'Nature', 'Culinary'],
        details: 'Formosa island with dramatic landscapes, night markets and preserved Chinese culture creating authentic Asian experience with modern comforts.'
      },
      { 
        duration: '5D / 6N',tagid: '684c409328ea76669318c86e', name:  'Thailand – Pattaya & Bangkok Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fthailand.png?alt=media&token=314b3cfa-b8e2-47ed-ae7c-eda1612cbb8c',
        tags: ['Culture', 'Beach', 'Adventure'],
        details: 'Land of Smiles with golden temples, tropical beaches and warm hospitality offering perfect blend of spirituality and tropical paradise.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40ab28ea76669318c8b5', name:  'Vietnam Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fvietnam.png?alt=media&token=7f037917-30ed-4dd4-8fe6-2ef7912aeffe',
        tags: ['Culture', 'History', 'Nature'],
        details: 'Hidden dragon with emerald rice terraces, bustling street life and rich history creating unforgettable journey through ancient traditions.'
      },
    ]
  },
  Europe: {
    countries: [
      { 
        duration: '5D / 6N',tagid: '684c40b428ea76669318c8d5', name:  'Eastern Europe Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%203%20(%208%20march).png?alt=media&token=d3626380-50fe-433d-9a31-af50dbbf65e3',
        tags: ['Heritage', 'Culture', 'Architecture'],
        details: 'Classic European journey through historic cities, magnificent cathedrals and timeless art collections showcasing centuries of civilization and culture.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40bb28ea76669318c8ec', name:  'France, Switzerland & Italy Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%204%20(%2016%20dec).png?alt=media&token=bbd9201b-3c37-43a2-a9f4-2c4a80521b21',
        tags: ['Winter', 'Culture', 'Romance'],
        details: 'Magical winter wonderland through European capitals with Christmas markets, snow-capped landscapes and cozy cultural experiences perfect for romance.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40c328ea76669318c922', name:  'Chic Cities & Alpine Wonders: France & Switzerland Tour', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%205%20(%20paris%20swiss).png?alt=media&token=22265c2f-6a1e-4345-9b56-ee77c7be090f',
        tags: ['Romance', 'Nature', 'Luxury'],
        details: 'City of Love meets Alpine paradise combining Parisian elegance with Swiss mountain majesty for ultimate romantic European escape.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40ca28ea76669318c943', name:  'Greece Highlights: Athens, Mykonos & Santorini', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feastern%20europe.png?alt=media&token=c885f7f3-1db0-4789-ae00-7e52c7b02207',
        tags: ['Heritage', 'Culture', 'History'],
        details: 'Eastern European treasures with medieval castles, baroque architecture and rich cultural heritage revealing Europe\'s hidden gems and stories.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40d228ea76669318c95e', name:  'Essence of Italy Tour', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%206%20japan%20korea.png?alt=media&token=71a68640-305e-4dad-94c9-a2a0d9601edd',
        tags: ['Modern', 'Culture', 'Technology'],
        details: 'East meets West adventure combining Japanese precision with Korean innovation showcasing Asia\'s technological marvels and cultural depth.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40d828ea76669318c975', name:  'London Explorer', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%207%20%20spain.png?alt=media&token=23ae963d-bb67-4658-908f-731e2f279cf9',
        tags: ['Culture', 'Beach', 'Culinary'],
        details: 'Spanish passion with flamenco rhythms, Mediterranean beaches and tapas culture creating vibrant celebration of life and artistic expression.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40de28ea76669318c986', name:  'Netherland : Amsterdam, Brussels & Paris Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%208%20%20best%20of%20euro.png?alt=media&token=17f0f144-a734-4955-aa12-38e5f150db2b',
        tags: ['Heritage', 'Culture', 'Architecture'],
        details: 'Best of Europe showcase featuring iconic landmarks, world-class museums and architectural marvels spanning centuries of European excellence.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40e828ea76669318c9a1', name:  'Scandinavian Wonders: Norway, Sweden & Finland', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%209%20%20finland.png?alt=media&token=ae87ce8b-3954-4d74-a74a-c12e11298cd6',
        tags: ['Nature', 'Adventure', 'Aurora'],
        details: 'Land of thousand lakes with pristine wilderness, Northern Lights and sauna culture offering pure Nordic adventure and natural serenity.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40ef28ea76669318c9ab', name:  'Spain Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2010%20uk.png?alt=media&token=cf597baf-4b76-4bef-b783-0381df90877a',
        tags: ['Heritage', 'Culture', 'Royal'],
        details: 'British Isles with royal palaces, countryside charm and rich literary heritage showcasing centuries of monarchy and cultural traditions.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40f628ea76669318c9b0', name:  'Switzerland Alpine Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2011%20london.png?alt=media&token=b78f566b-fb9a-4a33-8fa4-1bfb9325684b',
        tags: ['Urban', 'Culture', 'Royal'],
        details: 'Capital of Great Britain with iconic landmarks, world-class theaters and royal pageantry creating quintessential British metropolitan experience.'
      }
    ]
  },
  'Middle East': {
    countries: [
      { 
        duration: '5D / 6N',tagid: '684b17b2743424e7fb107562', name:  'Dubai Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai.png?alt=media&token=bbe14937-fcc3-4d0b-9f08-d6e68cae1bcb',
        tags: ['Luxury', 'Modern', 'Shopping'],
        details: 'City of Gold with futuristic skyline, luxury shopping and desert adventures creating ultimate modern Arabian fantasy and opulent experiences.'
      },
      { 
        duration: '5D / 6N',tagid: '684c40a328ea76669318c89b', name:  'Turkey Explorer', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai%202.png?alt=media&token=7b237410-1f68-4da5-be66-94d283fc88e1',
        tags: ['Adventure', 'Desert', 'Luxury'],
        details: 'Emirates jewel with desert safaris, architectural marvels and Arabian hospitality offering perfect blend of tradition and ultramodernity.'
      },
    ]
  },
  'India': {
    countries: [
      { 
        duration: '5D / 6N',tagid: '684b14ed743424e7fb1074a4', name:  'Andaman Islands Delight', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fandaman.png?alt=media&token=a5c44d25-7ad8-4b25-8014-fc65d514ef1b',
        tags: ['Beach', 'Adventure', 'Pristine'],
        details: 'Emerald islands with pristine beaches, coral reefs and untouched nature offering perfect tropical escape with world-class diving experiences.'
      },
      { 
        duration: '5D / 6N',tagid: '684c3fb228ea76669318c63e', name:  'Goa Beach & Heritage Escape', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fgoa.png?alt=media&token=c49e88ff-8360-456f-be7c-94456a47b15c',
        tags: ['Beach', 'Party', 'Portuguese'],
        details: 'Pearl of the Orient with golden beaches, Portuguese heritage and vibrant nightlife creating perfect blend of relaxation and celebration.'
      },
      { 
        duration: '5D / 6N',tagid: '684c3fe128ea76669318c67e', name:  'Kashmir Delight', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkashmir.png?alt=media&token=b70c3176-16f1-460a-9363-65dc7b846d7e',
        tags: ['Mountains', 'Paradise', 'Adventure'],
        details: 'Paradise on Earth with snow-capped mountains, pristine lakes and houseboats offering breathtaking Himalayan beauty and serene experiences.'
      },
      { 
        duration: '5D / 6N',tagid: '684c401828ea76669318c6cd', name:  "Kerala – God's Own Country", 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkerala.png?alt=media&token=07488a0a-fb78-4721-971e-aabb2a389834',
        tags: ['Backwaters', 'Ayurveda', 'Nature'],
        details: 'God\'s Own Country with tranquil backwaters, Ayurvedic treatments and spice plantations creating ultimate wellness and natural rejuvenation experience.'
      },
      { 
        duration: '5D / 6N',tagid: '684c402828ea76669318c704', name:  'Ladakh Experience', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fmount%20abu.png?alt=media&token=17f8105a-8d71-4482-9b8a-1ebf9a9da17a',
        tags: ['Hill Station', 'Heritage', 'Spiritual'],
        details: 'Oasis of Rajasthan with Dilwara temples, cool climate and stunning sunsets offering spiritual retreat in desert state\'s only hill station.'
      },
      { 
        duration: '5D / 6N',tagid: '684b16e8743424e7fb107520', name:  'Coorg, Ooty & Mysore Delight', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fnotheast.png?alt=media&token=a0495c9a-bf9a-43fd-acfe-288b6a726882',
        tags: ['Tribal', 'Nature', 'Adventure'],
        details: 'Seven Sisters with pristine landscapes, tribal cultures and untouched wilderness offering authentic experiences in India\'s hidden paradise.'
      },
    ]
  },
  'Australia': {
    countries: [
      { 
        duration: '5D / 6N',tagid: '684b1637743424e7fb1074bc', name: 'Australia Highlights', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%201%20(12%20nov).png?alt=media&token=0658bda4-53a1-48c3-adaa-27d8082122e8',
        tags: ['Wildlife', 'Outback', 'Adventure'],
        details: 'Land Down Under with unique wildlife, vast Outback and vibrant cities offering incredible adventures from reef diving to desert exploration.'
      }
    ]
  },
  'New Zealand': {
    countries: [
      { 
        duration: '5D / 6N',tagid: '684c405328ea76669318c782', name:  'New Zealand Wonders', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fnewzealand%2Fnew%20zealand%20(16%20july).png?alt=media&token=87ac9fae-e123-49f6-9e0a-c4787fd0b434',
        tags: ['Nature', 'Adventure', 'Scenic'],
        details: 'Land of the long white cloud with breathtaking scenery, adventure sports and Maori culture offering ultimate nature and adrenaline experiences.'
      }
    ]
  },
  'Africa': {
    countries: [
      { 
        duration: '5D / 6N',tagid: '684c407e28ea76669318c809', name:  'South Africa Explorer', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Fsouth%20africa.png?alt=media&token=88128b78-3078-4a00-b2f9-2fa486b90594',
        tags: ['Safari', 'Wine', 'Diverse'],
        details: 'Rainbow Nation with Big Five safaris, world-class wines and diverse cultures creating unforgettable African adventure with modern comforts.'
      },
      { 
        duration: '5D / 6N',tagid: '684c408d28ea76669318c849', name:  'Tanzania Safari Adventure', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%20(ms%20bhvya.png?alt=media&token=f3fc47ea-3a30-4274-95c7-1f6e2ed1f338',
        tags: ['Safari', 'Kilimanjaro', 'Wildlife'],
        details: 'Serengeti paradise with Mount Kilimanjaro, Great Migration and pristine wildlife offering authentic African safari and mountaineering adventures.'
      },
      { 
        duration: '5D / 6N',tagid: '684b1e515c674257ff69dc68', name:  'Egypt Explorer: Cairo, Luxor & Aswan', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%202%20(%2006%20sept).png?alt=media&token=5f484617-de65-4410-8333-cf998092ada9',
        tags: ['Zanzibar', 'Beach', 'Spice'],
        details: 'Spice Island adventure with Stone Town heritage, pristine beaches and aromatic spice tours creating exotic East African cultural experience.'
      }
    ]
  }
};


const ContinentalPackages = () => {
  const { continent } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedContinent, setSelectedContinent] = useState('Asia');
  const [displayedCountries, setDisplayedCountries] = useState([]);

  // Initialize component and handle URL parameter
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const validContinents = Object.keys(continentData);
    const initialContinent = validContinents.includes(continent) ? continent : 'Asia';
    
    setSelectedContinent(initialContinent);
    loadContinentData(initialContinent);
  }, []);

  // Handle URL parameter changes
  useEffect(() => {
    const validContinents = Object.keys(continentData);
    if (validContinents.includes(continent) && continent !== selectedContinent) {
      loadContinentData(continent);
    }
  }, [continent]);

  // Load data for a continent with image preloading
  const loadContinentData = (continent) => {
    setIsLoading(true);
    setSelectedContinent(continent);
    
    const countries = continentData[continent]?.countries || [];
    setDisplayedCountries([]); // Clear current display
    
    // Preload images
    const preloadImages = () => {
      const imagePromises = countries.map(country => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = country.image;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Resolve even if image fails to load
        });
      });
      
      return Promise.all(imagePromises);
    };
    
    preloadImages().then(() => {
      setDisplayedCountries(countries);
      setIsLoading(false);
    });
  };

  const handlePackageClick = (countryName) => {
    navigate(`/exp/${countryName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
          {isLoading ? 'Loading...' : `Explore ${selectedContinent}`}
        </h1>

        {/* Continent Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {Object.keys(continentData).map((cont) => (
            <button
              key={cont}
              onClick={() => loadContinentData(cont)}
              disabled={isLoading}
              className={cn(
                'px-4 py-2 rounded-full border border-white/20 text-sm transition-all duration-300',
                selectedContinent === cont
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20',
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              )}
            >
              {cont}
            </button>
          ))}
        </div>

        {/* Grid of Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {isLoading ? (
            // Skeleton loading state
            Array.from({ length: 6 }).map((_, idx) => (
              <div 
                key={`skeleton-${idx}`} 
                className="w-full animate-pulse"
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden h-full">
                  <div className="h-48 bg-gray-700 w-full"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded w-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                      <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="h-6 bg-gray-700 rounded-full w-16"></div>
                      <div className="h-6 bg-gray-700 rounded-full w-20"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Loaded state
            displayedCountries.map((country, idx) => (
              <div 
  key={`${selectedContinent}-${idx}`}
  onClick={() => handlePackageClick(country.tagid)}
  className="w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
>
  <PackageCard
    imageSrc={country.image}
    name={country.name}
    details={country.details}
    duration={country.duration}
    tags={country.tags || []}
  />
</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ContinentalPackages;