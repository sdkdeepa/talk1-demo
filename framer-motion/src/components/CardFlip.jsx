import React, { useState } from "react";
import { motion } from "framer-motion";

const CardFlip = () => {
  // Always declare all hooks at the top level
  const [isFlipped, setIsFlipped] = useState(false);

  // No early returns above this point!
  
  return (
    <div style={{ perspective: 1200, width: 300, height: 400, margin: "0 auto" }}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
        }}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 20,
            backgroundColor: "#5D3FD3",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Framer Motion Card
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 20,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#FF5757",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 20,
            padding: 20,
            textAlign: "center",
          }}
        >
          Fluid animations with simple declarative syntax!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardFlip;