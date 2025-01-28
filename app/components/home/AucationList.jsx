import React from "react";
import cars from "@/data/car";
import * as motion from "motion/react-client";
import AucationCard from "./AucationCard";

const AucationList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ margin: "-100px" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {cars.map((car, index) => (
          <AucationCard key={car.id} car={car} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default AucationList;
