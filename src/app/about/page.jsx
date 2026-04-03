export default function About() {
  return (
    <div className="bg-gray-200 py-12 px-6 md:px-20">
      
      {/* Heading */}
      <h1 className="text-5xl md:text-4xl font-bold text-center mb-14">
        Sri Handloom
      </h1>

      {/* Content Section */}
      <div className="grid md:grid-cols-2 gap-5 items-center">
        
        {/* Image */}
        <img
          src="https://barefootceylon.com/cdn/shop/files/DSC3572_6554845c-fa52-4fad-9847-d20c057d3a98.jpg?v=1733216562&width=1500"
          alt="Handloom"
          className="rounded-lg shadow-lg  w-140"
        />

        {/* Text */}
        <div className="space-y-6 text-black text-xl">
          <p>
            Sri Handloom is dedicated to preserving and promoting the beauty of
            traditional handloom craftsmanship. We bring you a curated collection
            of authentic sarees, fabrics, and garments crafted by skilled artisans.
          </p>

          <p>
            Our mission is to support local weavers and deliver high-quality,
            eco-friendly handloom products to customers with a modern shopping experience.
          </p>

          <p>
            We believe every thread tells a story — of culture, tradition, and
            timeless elegance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 py-8">
        <img
          src="https://barefootceylon.com/cdn/shop/files/DSC3559_f22c6610-53b5-4a6c-a3c3-32b857844194.jpg?v=1733216659&width=1500"
          alt="Handloom"
          className="rounded-lg shadow-lg  w-150"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbfJVUOvJPrAWhyLabICp9sMMnvMS9HuiCQ&s"
          alt="Handloom"
          className="rounded-lg shadow-lg  w-150"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW20DdMG03sOoDRBBz3Zt1lgkQS-Cun9zJSA&s"
          alt="Handloom"
          className="rounded-lg shadow-lg  w-150"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiua6RKtPMBQfhMOB8cC8RD2ObbSMmUtfg9w&s"
          alt="Handloom"
          className="rounded-lg shadow-lg  w-150"
        />
      </div>

      {/* Extra Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🌿 Eco-Friendly</h2>
          <p>We promote sustainable and natural fabrics.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🧵 Handcrafted</h2>
          <p>Every product is made with care by skilled artisans.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🤝 دعم Weavers</h2>
          <p>We empower local weaving communities.</p>
        </div>

      </div>

    </div>
  );
}