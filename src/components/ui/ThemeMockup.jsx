import { motion } from "framer-motion";

const ThemeMockup = ({ theme }) => (
  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
    <div className={`h-2 ${theme.theme}`}></div>
    <div className="p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex -space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div
          className={`px-2 py-1 rounded-full text-xs font-medium ${theme.theme} text-white`}
        >
          ${theme.price}
        </div>
      </div>
      <div className="h-40 bg-slate-100 rounded-lg mb-3 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${theme.preview})` }}
        ></div>
      </div>
      <h4 className="font-bold text-lg mb-1">{theme.name}</h4>
      <p className="text-slate-600 text-sm mb-3">Premium website template</p>
      <div className="flex flex-wrap gap-1 mb-3">
        {theme.features.slice(0, 2).map((feature, index) => (
          <span
            key={index}
            className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded"
          >
            {feature}
          </span>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-2 rounded-lg font-medium text-white ${theme.theme} hover:opacity-90 transition-all`}
      >
        Buy Now
      </motion.button>
    </div>
  </div>
);

export default ThemeMockup;
