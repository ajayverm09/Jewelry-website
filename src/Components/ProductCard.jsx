import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 25px rgba(255, 215, 0, 0.4), 0 10px 10px rgba(255, 215, 0, 0.2)"
      }}
      className="bg-black rounded-lg overflow-hidden shadow-lg border border-yellow-500 transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium">
          {product.price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-yellow-400">{product.title}</h3>
        <p className="text-gray-300 text-sm mb-3">{product.description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
