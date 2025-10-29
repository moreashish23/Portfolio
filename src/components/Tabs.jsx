import React from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabList, activeTab, onChange }) => {
  const getActiveStyles = (value) => {
    return activeTab === value
      ? 'text-white bg-gradient-primary shadow-md'
      : 'text-secondary bg-transparent hover:bg-[#ffe5c0]';
  };

  return (
    <div className="flex items-center justify-center my-8 px-3">
      <div
        className="
          bg-[#fff6eb]
          rounded-full
          flex
          overflow-x-auto
          scrollbar-hide
          space-x-2
          md:space-x-4
          px-3
          py-2
          w-full
          sm:w-auto
        "
      >
        {tabList.map((tab) => (
          <motion.button
            key={tab.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{
              opacity: activeTab === tab.value ? 1 : 0.8,
              scale: activeTab === tab.value ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={`
              whitespace-nowrap
              text-xs
              sm:text-sm
              md:text-base
              font-medium
              ${getActiveStyles(tab.value)}
              rounded-full
              px-5
              sm:px-8
              py-2
              sm:py-3
              transition-all
              duration-200
            `}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
