import React from 'react';

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div
      className="
        flex
        items-center
        sm:items-start
        gap-4
        bg-orange-50
        rounded-xl
        border
        border-orange-100
        px-4
        py-3
        sm:py-4
        shadow-sm
        hover:shadow-md
        transition-all
        duration-300
        ease-in-out
        hover:scale-[1.02]
        w-full
      "
    >
      <div
        className="
          min-w-[40px]
          min-h-[40px]
          sm:min-w-[45px]
          sm:min-h-[45px]
          text-lg
          sm:text-xl
          text-white
          flex
          items-center
          justify-center
          bg-gradient-primary
          rounded-lg
          flex-shrink-0
        "
      >
        {icon}
      </div>

      <p
        className="
          text-secondary
          text-sm
          sm:text-base
          break-words
          max-w-[85%]
        "
      >
        {text}
      </p>
    </div>
  );
};

export default ContactInfoCard;
