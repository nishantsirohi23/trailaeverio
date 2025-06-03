import React, { useState, useEffect } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import { useParams,useNavigate } from 'react-router-dom';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const continentData = {
  Asia: {
    countries: [
      { name: 'Bali', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbali%202.png?alt=media&token=950d060c-bfd0-4e2c-97eb-cbfd578bf039' },
      { name: 'Bhutan', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbhutan.png?alt=media&token=5946f6a6-33bb-437c-a5b8-2b27759b4963' },
      { name: 'Hongkong', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fhongkong.png?alt=media&token=06cbae91-077b-491c-9afa-b0553c8ce59c' },
      { name: 'Malaysia', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmalaysia%20(1).png?alt=media&token=69874139-7a9c-486a-b95a-f8c617fc56e1' },
      { name: 'Maldives', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmaldives.png?alt=media&token=985aec8a-2c85-4475-ab46-52827cd89acd' },
      { name: 'Mauritius', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmauritius.png?alt=media&token=e0353bb7-ad54-400a-b9da-b7c1fa0a42b7' },
      { name: 'Phuket', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fphuket.png?alt=media&token=809cd9d0-4e59-4141-abb4-665cc517ec56' },
      { name: 'Sri Lanka', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fsri%20lanka.png?alt=media&token=03dd9b9e-c8de-4ab9-ab48-76d7b78363f7' },
      { name: 'Singapore', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fsingapore.png?alt=media&token=4785b679-ed39-4156-a120-c20a57413df7' },
      { name: 'Taiwan', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Ftaiwan.png?alt=media&token=881f9a3e-6599-4db2-a856-bb63187c9ae0' },
      { name: 'Thailand', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fthailand.png?alt=media&token=314b3cfa-b8e2-47ed-ae7c-eda1612cbb8c' },
      { name: 'Veitnam', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fvietnam.png?alt=media&token=7f037917-30ed-4dd4-8fe6-2ef7912aeffe' },
    ]
  },
  Europe: {
    countries: [
      { name: 'Europe 1', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%203%20(%208%20march).png?alt=media&token=d3626380-50fe-433d-9a31-af50dbbf65e3' },
      { name: 'Europe 2', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%204%20(%2016%20dec).png?alt=media&token=bbd9201b-3c37-43a2-a9f4-2c4a80521b21' },
      { name: 'Europe 3', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%205%20(%20paris%20swiss).png?alt=media&token=22265c2f-6a1e-4345-9b56-ee77c7be090f' },
      { name: 'Europe 4', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feastern%20europe.png?alt=media&token=c885f7f3-1db0-4789-ae00-7e52c7b02207' },
      { name: 'Europe 5', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%206%20japan%20korea.png?alt=media&token=71a68640-305e-4dad-94c9-a2a0d9601edd' },
      { name: 'Europe 6', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%207%20%20spain.png?alt=media&token=23ae963d-bb67-4658-908f-731e2f279cf9' },
      { name: 'Europe 7', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%208%20%20best%20of%20euro.png?alt=media&token=17f0f144-a734-4955-aa12-38e5f150db2b' },
      { name: 'Europe 8', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%209%20%20finland.png?alt=media&token=ae87ce8b-3954-4d74-a74a-c12e11298cd6' },
      { name: 'Europe 9', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2010%20uk.png?alt=media&token=cf597baf-4b76-4bef-b783-0381df90877a' },
      { name: 'Europe 10', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2011%20london.png?alt=media&token=b78f566b-fb9a-4a33-8fa4-1bfb9325684b' },
      { name: 'Europe 11', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2011%20uk%20scotland.png?alt=media&token=043326bc-e357-49d8-b4f7-8ace2226ab55' },
      { name: 'Europe 12', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2012%20turkey%202%20(3%20march.png?alt=media&token=3e44a129-8a2b-4ee9-9b42-ec85f1df59b7' },
      { name: 'Europe 13', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2012%20turkey%203%20%20(15%20july.png?alt=media&token=b55ee4bb-36ab-4fab-859d-e274530a4879' },
      { name: 'Europe 14', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2012%20turkey.png?alt=media&token=8f832737-f749-41c7-a5c7-6e0441b7cc46' },
      { name: 'Europe 15', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2013%20greece%20turkey.png?alt=media&token=4c4fad03-4040-404c-8b86-3edc8368e41b' },
      { name: 'Europe 15', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Fswitzerland.png?alt=media&token=ce66f5e5-5612-4fc6-a1c4-307f000770ae' },

    ]
  },
  'Middle East': {
    countries: [
      { name: 'Dubai', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai.png?alt=media&token=bbe14937-fcc3-4d0b-9f08-d6e68cae1bcb' },
      { name: 'Dubai 2', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai%202.png?alt=media&token=7b237410-1f68-4da5-be66-94d283fc88e1' },
      { name: 'Seychelles', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fseychelles.png?alt=media&token=b210cb76-2efc-4c1e-8889-2f71b7b081f0' },
      { name: 'Almaty', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Falmaty.png?alt=media&token=2564dfcc-d1fc-48d9-8092-8c376044dd99' },
      { name: 'Egypt', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fegypt.png?alt=media&token=9dfe37cd-b78b-4390-b0e9-b061214452a3' },
      { name: 'Tashkent', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Ftashkent.png?alt=media&token=0877690f-a817-4ff8-9677-91413b6c066b' },
      { name: 'Almaty 2', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Falmaty%202%20(%2030%20may.png?alt=media&token=50748ec2-2ccf-4139-867d-d8b1c7583240' },
      { name: 'Azerbaijan', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fazerbaijan.png?alt=media&token=787bcb8d-8152-422e-9cc5-55f97e9f55f4' },


    ]
  },
  'India': {
    countries: [
      { name: 'Andaman & Nicobar', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fandaman.png?alt=media&token=a5c44d25-7ad8-4b25-8014-fc65d514ef1b' },
      { name: 'Goa', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fgoa.png?alt=media&token=c49e88ff-8360-456f-be7c-94456a47b15c' },
      { name: 'Kashmir', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkashmir.png?alt=media&token=b70c3176-16f1-460a-9363-65dc7b846d7e' },
      { name: 'Kerala', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkerala.png?alt=media&token=07488a0a-fb78-4721-971e-aabb2a389834' },
      { name: 'Mount Abu', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fmount%20abu.png?alt=media&token=17f8105a-8d71-4482-9b8a-1ebf9a9da17a' },
      { name: 'North East', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fnotheast.png?alt=media&token=a0495c9a-bf9a-43fd-acfe-288b6a726882' },
    ]
  },
  'Australia': {
    countries: [
      { name: 'Australia', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%201%20(12%20nov).png?alt=media&token=0658bda4-53a1-48c3-adaa-27d8082122e8' },
      { name: 'Australia 2', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%20final.png?alt=media&token=7e8e4a72-5bc4-42dc-afb5-c00ea8bea229' }
    ]
  },
  'New Zealand': {
    countries: [
      { name: 'New Zealand', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fnewzealand%2Fnew%20zealand%20(16%20july).png?alt=media&token=87ac9fae-e123-49f6-9e0a-c4787fd0b434' },
      { name: 'New Zealand 2', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fnewzealand%2Fnew%20zealand%202(25%20july).png?alt=media&token=1b160282-e4bf-4d61-95b3-80f3e2ce09cd' }
    ]
  },
  'Africa': {
    countries: [
      { name: 'South Africa', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Fsouth%20africa.png?alt=media&token=88128b78-3078-4a00-b2f9-2fa486b90594' },
      { name: 'Tanzania', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%20(ms%20bhvya.png?alt=media&token=f3fc47ea-3a30-4274-95c7-1f6e2ed1f338' },
      { name: 'Tanzania 2', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%202%20(%2006%20sept).png?alt=media&token=5f484617-de65-4410-8333-cf998092ada9' }
    ]
  }
};

const ContinentalPackages = () => {
  const { continent } = useParams();
  const navigate = useNavigate();

  const validContinents = Object.keys(continentData);
  const defaultContinent = validContinents.includes(continent) ? continent : 'Asia';
  const [selectedContinent, setSelectedContinent] = useState(defaultContinent);

  useEffect(() => {
    if (validContinents.includes(continent) && continent !== selectedContinent) {
      setSelectedContinent(continent);
    }
  }, [continent]);

  const handlePackageClick = (countryName) => {
    navigate('/exp');
    console.log(`Navigate to package: ${countryName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Explore {selectedContinent}</h1>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {continentData[selectedContinent].countries.map((country, idx) => (
            <div
              key={idx}
              onClick={() => handlePackageClick(country.name)}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-lg cursor-pointer hover:scale-105 transition"
            >
              <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{country.name}</h2>
                <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-4 h-4" /> {selectedContinent}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinentalPackages;
