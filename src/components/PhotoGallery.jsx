import React from 'react';

const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
];

function PhotoGallery() {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <p className="text-white uppercase text-sm tracking-wide mb-2">Photo Gallery</p>
        <h2 className="text-purple-700 text-3xl sm:text-4xl font-extrabold mb-4">Photos from Travellers</h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. 
          Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
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
