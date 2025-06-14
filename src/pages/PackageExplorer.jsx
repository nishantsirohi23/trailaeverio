import PackageCard from '@/components/PackageCard';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const continentData = {
  Asia: {
    countries: [
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Bhutan – Kingdom of Happiness Tour', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbali%202.png?alt=media&token=950d060c-bfd0-4e2c-97eb-cbfd578bf039',
        tags: ['Culture', 'Beach', 'Spiritual'],
        details: 'Island of Gods with stunning temples, pristine beaches and rich cultural heritage offering spiritual awakening and tropical paradise.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Bhutan', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbhutan.png?alt=media&token=5946f6a6-33bb-437c-a5b8-2b27759b4963',
        tags: ['Adventure', 'Culture', 'Nature'],
        details: 'Last Shangri-La with majestic Himalayas, ancient monasteries and carbon-negative kingdom promoting gross national happiness over GDP.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Hongkong', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fhongkong.png?alt=media&token=06cbae91-077b-491c-9afa-b0553c8ce59c',
        tags: ['Urban', 'Shopping', 'Culinary'],
        details: 'Pearl of the Orient with dazzling skyline, world-class shopping and fusion of Eastern and Western cultures in a vibrant metropolis.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Malaysia', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmalaysia%20(1).png?alt=media&token=69874139-7a9c-486a-b95a-f8c617fc56e1',
        tags: ['Diverse', 'Nature', 'Culture'],
        details: 'Truly Asia destination with tropical rainforests, pristine islands and multicultural harmony blending Malay, Chinese and Indian influences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Maldives', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmaldives.png?alt=media&token=985aec8a-2c85-4475-ab46-52827cd89acd',
        tags: ['Luxury', 'Beach', 'Romance'],
        details: 'Paradise on earth with crystal-clear waters, overwater villas and pristine coral reefs perfect for romantic getaways and luxury experiences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Mauritius', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmauritius.png?alt=media&token=e0353bb7-ad54-400a-b9da-b7c1fa0a42b7',
        tags: ['Beach', 'Luxury', 'Diverse'],
        details: 'Star and key of the Indian Ocean with turquoise lagoons, volcanic mountains and multicultural blend creating tropical sophistication.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Phuket', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fphuket.png?alt=media&token=809cd9d0-4e59-4141-abb4-665cc517ec56',
        tags: ['Beach', 'Nightlife', 'Adventure'],
        details: 'Pearl of the Andaman with stunning beaches, vibrant nightlife and island-hopping adventures in Thailand\'s largest island paradise.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Sri Lanka', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fsri%20lanka.png?alt=media&token=03dd9b9e-c8de-4ab9-ab48-76d7b78363f7',
        tags: ['Heritage', 'Nature', 'Adventure'],
        details: 'Pearl of the Indian Ocean with ancient temples, lush tea plantations and wildlife safaris offering incredible diversity in compact wonder.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Singapore', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fsingapore.png?alt=media&token=4785b679-ed39-4156-a120-c20a57413df7',
        tags: ['Modern', 'Culinary', 'Urban'],
        details: 'Lion City with futuristic architecture, world-renowned cuisine and seamless blend of tradition and innovation in Southeast Asia\'s gateway.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Taiwan', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Ftaiwan.png?alt=media&token=881f9a3e-6599-4db2-a856-bb63187c9ae0',
        tags: ['Culture', 'Nature', 'Culinary'],
        details: 'Formosa island with dramatic landscapes, night markets and preserved Chinese culture creating authentic Asian experience with modern comforts.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Thailand', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fthailand.png?alt=media&token=314b3cfa-b8e2-47ed-ae7c-eda1612cbb8c',
        tags: ['Culture', 'Beach', 'Adventure'],
        details: 'Land of Smiles with golden temples, tropical beaches and warm hospitality offering perfect blend of spirituality and tropical paradise.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Vietnam', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fvietnam.png?alt=media&token=7f037917-30ed-4dd4-8fe6-2ef7912aeffe',
        tags: ['Culture', 'History', 'Nature'],
        details: 'Hidden dragon with emerald rice terraces, bustling street life and rich history creating unforgettable journey through ancient traditions.'
      },
    ]
  },
  Europe: {
    countries: [
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 1', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%203%20(%208%20march).png?alt=media&token=d3626380-50fe-433d-9a31-af50dbbf65e3',
        tags: ['Heritage', 'Culture', 'Architecture'],
        details: 'Classic European journey through historic cities, magnificent cathedrals and timeless art collections showcasing centuries of civilization and culture.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 2', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%204%20(%2016%20dec).png?alt=media&token=bbd9201b-3c37-43a2-a9f4-2c4a80521b21',
        tags: ['Winter', 'Culture', 'Romance'],
        details: 'Magical winter wonderland through European capitals with Christmas markets, snow-capped landscapes and cozy cultural experiences perfect for romance.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 3', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%205%20(%20paris%20swiss).png?alt=media&token=22265c2f-6a1e-4345-9b56-ee77c7be090f',
        tags: ['Romance', 'Nature', 'Luxury'],
        details: 'City of Love meets Alpine paradise combining Parisian elegance with Swiss mountain majesty for ultimate romantic European escape.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 4', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feastern%20europe.png?alt=media&token=c885f7f3-1db0-4789-ae00-7e52c7b02207',
        tags: ['Heritage', 'Culture', 'History'],
        details: 'Eastern European treasures with medieval castles, baroque architecture and rich cultural heritage revealing Europe\'s hidden gems and stories.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 5', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%206%20japan%20korea.png?alt=media&token=71a68640-305e-4dad-94c9-a2a0d9601edd',
        tags: ['Modern', 'Culture', 'Technology'],
        details: 'East meets West adventure combining Japanese precision with Korean innovation showcasing Asia\'s technological marvels and cultural depth.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 6', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%207%20%20spain.png?alt=media&token=23ae963d-bb67-4658-908f-731e2f279cf9',
        tags: ['Culture', 'Beach', 'Culinary'],
        details: 'Spanish passion with flamenco rhythms, Mediterranean beaches and tapas culture creating vibrant celebration of life and artistic expression.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 7', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%208%20%20best%20of%20euro.png?alt=media&token=17f0f144-a734-4955-aa12-38e5f150db2b',
        tags: ['Heritage', 'Culture', 'Architecture'],
        details: 'Best of Europe showcase featuring iconic landmarks, world-class museums and architectural marvels spanning centuries of European excellence.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 8', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%209%20%20finland.png?alt=media&token=ae87ce8b-3954-4d74-a74a-c12e11298cd6',
        tags: ['Nature', 'Adventure', 'Aurora'],
        details: 'Land of thousand lakes with pristine wilderness, Northern Lights and sauna culture offering pure Nordic adventure and natural serenity.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 9', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2010%20uk.png?alt=media&token=cf597baf-4b76-4bef-b783-0381df90877a',
        tags: ['Heritage', 'Culture', 'Royal'],
        details: 'British Isles with royal palaces, countryside charm and rich literary heritage showcasing centuries of monarchy and cultural traditions.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 10', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2011%20london.png?alt=media&token=b78f566b-fb9a-4a33-8fa4-1bfb9325684b',
        tags: ['Urban', 'Culture', 'Royal'],
        details: 'Capital of Great Britain with iconic landmarks, world-class theaters and royal pageantry creating quintessential British metropolitan experience.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 11', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2011%20uk%20scotland.png?alt=media&token=043326bc-e357-49d8-b4f7-8ace2226ab55',
        tags: ['Nature', 'Culture', 'Heritage'],
        details: 'Scottish Highlands with ancient castles, misty lochs and Highland culture offering dramatic landscapes and Celtic heritage experiences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 12', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2012%20turkey%202%20(3%20march.png?alt=media&token=3e44a129-8a2b-4ee9-9b42-ec85f1df59b7',
        tags: ['Culture', 'Heritage', 'Bridge'],
        details: 'Bridge between Europe and Asia with Byzantine heritage, Ottoman architecture and Turkish hospitality creating unique cultural crossroads experience.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 13', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2012%20turkey%203%20%20(15%20july.png?alt=media&token=b55ee4bb-36ab-4fab-859d-e274530a4879',
        tags: ['Beach', 'Culture', 'Ancient'],
        details: 'Turkish Riviera with pristine beaches, ancient ruins and warm Mediterranean climate combining relaxation with archaeological wonders.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 14', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2012%20turkey.png?alt=media&token=8f832737-f749-41c7-a5c7-6e0441b7cc46',
        tags: ['Heritage', 'Culture', 'Exotic'],
        details: 'Istanbul magic with grand bazaars, historic mosques and Bosphorus views creating exotic blend of Eastern mystery and European sophistication.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Europe 15', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2013%20greece%20turkey.png?alt=media&token=4c4fad03-4040-404c-8b86-3edc8368e41b',
        tags: ['Ancient', 'Island', 'Mediterranean'],
        details: 'Cradle of civilization with Greek islands, ancient temples and Mediterranean lifestyle showcasing birthplace of democracy and philosophy.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Switzerland', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Fswitzerland.png?alt=media&token=ce66f5e5-5612-4fc6-a1c4-307f000770ae',
        tags: ['Nature', 'Luxury', 'Adventure'],
        details: 'Alpine paradise with snow-capped peaks, pristine lakes and Swiss precision creating ultimate mountain luxury and outdoor adventure destination.'
      },
    ]
  },
  'Middle East': {
    countries: [
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Dubai', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai.png?alt=media&token=bbe14937-fcc3-4d0b-9f08-d6e68cae1bcb',
        tags: ['Luxury', 'Modern', 'Shopping'],
        details: 'City of Gold with futuristic skyline, luxury shopping and desert adventures creating ultimate modern Arabian fantasy and opulent experiences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Dubai 2', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai%202.png?alt=media&token=7b237410-1f68-4da5-be66-94d283fc88e1',
        tags: ['Adventure', 'Desert', 'Luxury'],
        details: 'Emirates jewel with desert safaris, architectural marvels and Arabian hospitality offering perfect blend of tradition and ultramodernity.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Seychelles', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fseychelles.png?alt=media&token=b210cb76-2efc-4c1e-8889-2f71b7b081f0',
        tags: ['Beach', 'Luxury', 'Nature'],
        details: 'Garden of Eden with pristine beaches, giant tortoises and coral reefs creating ultimate tropical paradise for luxury beach experiences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Almaty', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Falmaty.png?alt=media&token=2564dfcc-d1fc-48d9-8092-8c376044dd99',
        tags: ['Mountains', 'Culture', 'Adventure'],
        details: 'Southern capital of Kazakhstan with Tian Shan mountains, Soviet architecture and Kazakh culture creating unique Central Asian mountain experience.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Egypt', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fegypt.png?alt=media&token=9dfe37cd-b78b-4390-b0e9-b061214452a3',
        tags: ['Ancient', 'Heritage', 'Mystery'],
        details: 'Land of Pharaohs with ancient pyramids, Nile River cruises and mysterious temples revealing 5000 years of fascinating civilization and history.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Tashkent', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Ftashkent.png?alt=media&token=0877690f-a817-4ff8-9677-91413b6c066b',
        tags: ['Culture', 'Heritage', 'Silk Road'],
        details: 'Heart of Central Asia with Islamic architecture, bazaars and Silk Road heritage showcasing crossroads of ancient civilizations and cultures.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Almaty 2', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Falmaty%202%20(%2030%20may.png?alt=media&token=50748ec2-2ccf-4139-867d-d8b1c7583240',
        tags: ['Nature', 'Adventure', 'Mountains'],
        details: 'Alpine Kazakhstan with snow-capped peaks, apple orchards and nomadic heritage offering unique mountain adventures in Central Asian wilderness.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Azerbaijan', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fazerbaijan.png?alt=media&token=787bcbcd-8152-422e-9cc5-55f97e9f55f4',
        tags: ['Culture', 'Fire', 'Heritage'],
        details: 'Land of Fire with eternal flames, Caspian Sea shores and Persian-influenced architecture creating mystical Caucasian cultural experience.'
      },
    ]
  },
  'India': {
    countries: [
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Andaman & Nicobar', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fandaman.png?alt=media&token=a5c44d25-7ad8-4b25-8014-fc65d514ef1b',
        tags: ['Beach', 'Adventure', 'Pristine'],
        details: 'Emerald islands with pristine beaches, coral reefs and untouched nature offering perfect tropical escape with world-class diving experiences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Goa', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fgoa.png?alt=media&token=c49e88ff-8360-456f-be7c-94456a47b15c',
        tags: ['Beach', 'Party', 'Portuguese'],
        details: 'Pearl of the Orient with golden beaches, Portuguese heritage and vibrant nightlife creating perfect blend of relaxation and celebration.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Kashmir', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkashmir.png?alt=media&token=b70c3176-16f1-460a-9363-65dc7b846d7e',
        tags: ['Mountains', 'Paradise', 'Adventure'],
        details: 'Paradise on Earth with snow-capped mountains, pristine lakes and houseboats offering breathtaking Himalayan beauty and serene experiences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Kerala', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkerala.png?alt=media&token=07488a0a-fb78-4721-971e-aabb2a389834',
        tags: ['Backwaters', 'Ayurveda', 'Nature'],
        details: 'God\'s Own Country with tranquil backwaters, Ayurvedic treatments and spice plantations creating ultimate wellness and natural rejuvenation experience.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Mount Abu', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fmount%20abu.png?alt=media&token=17f8105a-8d71-4482-9b8a-1ebf9a9da17a',
        tags: ['Hill Station', 'Heritage', 'Spiritual'],
        details: 'Oasis of Rajasthan with Dilwara temples, cool climate and stunning sunsets offering spiritual retreat in desert state\'s only hill station.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'North East', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fnotheast.png?alt=media&token=a0495c9a-bf9a-43fd-acfe-288b6a726882',
        tags: ['Tribal', 'Nature', 'Adventure'],
        details: 'Seven Sisters with pristine landscapes, tribal cultures and untouched wilderness offering authentic experiences in India\'s hidden paradise.'
      },
    ]
  },
  'Australia': {
    countries: [
      { 
        tagid: '684b16b5743424e7fb107501', name: 'Australia', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%201%20(12%20nov).png?alt=media&token=0658bda4-53a1-48c3-adaa-27d8082122e8',
        tags: ['Wildlife', 'Outback', 'Adventure'],
        details: 'Land Down Under with unique wildlife, vast Outback and vibrant cities offering incredible adventures from reef diving to desert exploration.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Australia 2', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%20final.png?alt=media&token=7e8e4a72-5bc4-42dc-afb5-c00ea8bea229',
        tags: ['Coastal', 'Modern', 'Nature'],
        details: 'Aussie experience with Great Barrier Reef, cosmopolitan cities and laid-back lifestyle creating perfect blend of nature and urban sophistication.'
      }
    ]
  },
  'New Zealand': {
    countries: [
      { 
        tagid: '684b16b5743424e7fb107501', name:  'New Zealand', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fnewzealand%2Fnew%20zealand%20(16%20july).png?alt=media&token=87ac9fae-e123-49f6-9e0a-c4787fd0b434',
        tags: ['Nature', 'Adventure', 'Scenic'],
        details: 'Land of the long white cloud with breathtaking scenery, adventure sports and Maori culture offering ultimate nature and adrenaline experiences.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'New Zealand 2', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fnewzealand%2Fnew%20zealand%202(25%20july).png?alt=media&token=1b160282-e4bf-4d61-95b3-80f3e2ce09cd',
        tags: ['Fjords', 'Wildlife', 'Pristine'],
        details: 'Middle Earth with dramatic fjords, pristine lakes and friendly locals creating magical landscapes perfect for nature lovers and adventure seekers.'
      }
    ]
  },
  'Africa': {
    countries: [
      { 
        tagid: '684b16b5743424e7fb107501', name:  'South Africa', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Fsouth%20africa.png?alt=media&token=88128b78-3078-4a00-b2f9-2fa486b90594',
        tags: ['Safari', 'Wine', 'Diverse'],
        details: 'Rainbow Nation with Big Five safaris, world-class wines and diverse cultures creating unforgettable African adventure with modern comforts.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Tanzania', 
        image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%20(ms%20bhvya.png?alt=media&token=f3fc47ea-3a30-4274-95c7-1f6e2ed1f338',
        tags: ['Safari', 'Kilimanjaro', 'Wildlife'],
        details: 'Serengeti paradise with Mount Kilimanjaro, Great Migration and pristine wildlife offering authentic African safari and mountaineering adventures.'
      },
      { 
        tagid: '684b16b5743424e7fb107501', name:  'Tanzania 2', 
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validContinents = Object.keys(continentData);
  const defaultContinent = validContinents.includes(continent) ? continent : 'Asia';
  const [selectedContinent, setSelectedContinent] = useState(defaultContinent);

  useEffect(() => {
    if (validContinents.includes(continent) && continent !== selectedContinent) {
      setSelectedContinent(continent);
    }
  }, [continent]);

  const handlePackageClick = (countryName) => {
    navigate(`/exp/${countryName}`);
    console.log(`Navigate to package: ${countryName}`);
  };
  

  // Fix data structure access
  const currentContinentData = continentData[selectedContinent];
  const countries = currentContinentData?.countries || currentContinentData || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">
          Explore {selectedContinent}
        </h1>

        {/* Continent Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {validContinents.map((cont) => (
            <button
              key={cont}
              onClick={() => setSelectedContinent(cont)}
              className={cn(
                'px-4 py-2 rounded-full border border-white/20 text-sm transition',
                selectedContinent === cont
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              )}
            >
              {cont}
            </button>
          ))}
        </div>

        {/* Grid of Package Cards - Mobile: 1 column, All other screens: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {countries.map((country, idx) => (
            <div 
              key={idx} 
              onClick={() => handlePackageClick(country.tagid)}
              className="w-full"
            >
              <PackageCard
                imageSrc={country.image}
                name={country.name}
                details={country.details || 'An unforgettable experience awaits you'}
                tags={country.tags || []}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinentalPackages;