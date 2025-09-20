import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// ProductCard Component
const ProductCard = ({ product, onBuyNow }) => (
  <div className="bg-gray-900 rounded-xl overflow-hidden border border-yellow-500 shadow-lg hover:scale-105 transition-transform duration-300">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-64 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-yellow-500">{product.title}</h3>
      <p className="text-gray-300 mt-2">{product.description}</p>
      <p className="text-yellow-500 font-semibold mt-2">{product.price}</p>
      <button
        onClick={onBuyNow}
        className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition-colors"
      >
        Buy Now
      </button>
    </div>
  </div>
);

const featuredProducts = [
  {
    id: 1,
    title: "Elegant Gold Necklace",
    description: "Handcrafted 18K gold necklace with intricate detailing.",
    price: "₹1,25,000",
    image:
      "https://www.swarnamahal.lk/cdn/shop/products/NE0000974A_900x.jpg?v\u003d1593000004",
  },
  {
    id: 2,
    title: "Luxury Diamond Ring",
    description: "Exquisite diamond-studded ring in 22K gold setting.",
    price: "₹2,50,000",
    image: "https://m.media-amazon.com/images/I/61Wf3TMwdYL.jpg",
  },
  {
    id: 3,
    title: "Gold Bangles Set",
    description:
      "Set of 4 finely crafted 24K gold bangles with traditional motifs.",
    price: "₹95,000",
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2023/11/360098130/OD/GW/RQ/8659970/product-jpeg-500x500.jpg",
  },
  {
    id: 4,
    title: "Pearl & Gold Earrings",
    description: "Elegant drop earrings combining pearls and 18K gold accents.",
    price: "₹75,000",
    image:
      "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/6496b82d834e2602ba5ccd86/untitled-design-2--640x640.png",
  },
  {
    id: 5,
    title: "Minimalist Gold Pendant",
    description: "Minimalist 22K gold pendant with unique design.",
    price: "₹50,000",
    image:
      "https://kinclimg5.bluestone.com/f_jpg,c_scale,w_1024,q_80,b_rgb:f0f0f0/giproduct/BISK0368P03-POSTER-21068.jpg",
  },
  {
    id: 6,
    title: "Statement Gold Ring",
    description: "Bold 18K gold ring with artistic design and fine finishing.",
    price: "₹1,80,000",
    image: "https://www.candere.com/media/jewellery/images/C015531__1_1.jpeg",
  },
];

const FeaturedProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const sizes = ["S", "M", "L", "XL"];

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setSelectedSize(""); // reset size
    setQuantity(1); // reset quantity
  };

  const handleConfirmOrder = () => {
    if (!selectedSize) return alert("Please select a size!");
    setSelectedProduct(null); // close modal
    setOrderConfirmed(true);
    setTimeout(() => setOrderConfirmed(false), 5000); // auto hide after 5s
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen py-16 px-12 sm:px-16 md:px-20 lg:px-28 xl:px-36 2xl:px-44">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent"
          >
            Featured Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of premium gold jewelry and
            exquisite accessories.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard
                product={product}
                onBuyNow={() => handleBuyNow(product)}
              />
            </motion.div>
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center mt-10">
          <Link to="/blogs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Products
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Enhanced Product Selection Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 w-full max-w-md border border-yellow-500 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-yellow-500">
                  {selectedProduct.title}
                </h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-48 object-cover rounded-lg border border-yellow-500"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-300 text-sm mb-2">
                      {selectedProduct.description}
                    </p>
                    <p className="text-yellow-500 font-bold text-lg">
                      {selectedProduct.price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Select Size</h4>
                <div className="flex justify-center gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        selectedSize === size
                          ? "bg-yellow-500 text-black border-yellow-500 shadow-lg"
                          : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Quantity</h4>
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={decrementQuantity}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-yellow-500 hover:bg-gray-600 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="text-xl font-bold w-10 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-yellow-500 hover:bg-gray-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <button
                onClick={handleConfirmOrder}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Confirm Order
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Order Confirmed Toast */}
      <AnimatePresence>
        {orderConfirmed && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-5 right-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Order Confirmed!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProductsSection;