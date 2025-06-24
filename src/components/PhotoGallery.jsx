import React from 'react';

const images = [
  "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%204%20(%2016%20dec).png?alt=media&token=bbd9201b-3c37-43a2-a9f4-2c4a80521b21",
  "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbhutan.png?alt=media&token=5946f6a6-33bb-437c-a5b8-2b27759b4963",
  "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/20250601_1605_Mountain%20Adventure%20with%20Aerovia_simple_compose_01jwngxd0bevnatrdfhr8mnjy1.png?alt=media&token=20e9e9cb-e735-4201-a1b5-bfe5de279c1a",
  "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fmount%20abu.png?alt=media&token=17f8105a-8d71-4482-9b8a-1ebf9a9da17a",
  "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai.png?alt=media&token=bbe14937-fcc3-4d0b-9f08-d6e68cae1bcb",
];

function PhotoGallery() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-white uppercase text-sm tracking-wide mb-2">Photo Gallery</p>
        <h2 className="text-purple-700 text-3xl sm:text-4xl font-extrabold mb-4">Photos from Travellers</h2>
        <p className="text-zinc-400 text-sm sm:text-base">
        Safari sunrises in Tanzania: Where nature paints the sky in fire and the wild whispers your name
        Swiss Alps from a traveler’s eyes – chocolate-box villages under blankets of snow
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col gap-4">
          <img src={images[0]} alt="1" className="rounded-2xl w-full h-[30vw] min-h-[100px] object-cover transition-transform duration-500 hover:scale-105" />
          <img src={images[1]} alt="2" className="rounded-2xl w-full h-[30vw] min-h-[100px] object-cover transition-transform duration-500 hover:scale-105" />
        </div>

        {/* Column 2 */}
        <div>
          <img src={images[2]} alt="3" className="rounded-2xl w-full h-[60vw] min-h-[200px] object-cover transition-transform duration-500 hover:scale-105" />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4">
          <img src={images[3]} alt="4" className="rounded-2xl w-full h-[30vw] min-h-[100px] object-cover transition-transform duration-500 hover:scale-105" />
          <img src={images[4]} alt="5" className="rounded-2xl w-full h-[30vw] min-h-[100px] object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
