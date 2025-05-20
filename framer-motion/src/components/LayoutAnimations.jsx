import React, { useState } from "react";
import { motion } from "framer-motion";

const LayoutAnimations = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([1, 2, 3, 4]);

  const shuffleCards = () => {
    setCards([...cards].sort(() => Math.random() - 0.5));
  };

  const addCard = () => {
    setCards([...cards, cards.length + 1]);
  };

  const removeCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <div style={{ marginBottom: 20 }}>
        <h3>Layout Animation Demo</h3>
        <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
          <button onClick={shuffleCards}>Shuffle Cards</button>
          <button onClick={addCard}>Add Card</button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Collapse" : "Expand"} Detail
          </button>
        </div>
      </div>

      {/* Example 1: Expanding Panel */}
      <motion.div
        layout
        style={{
          backgroundColor: "#4285F4",
          borderRadius: 8,
          padding: 20,
          color: "white",
          marginBottom: 20
        }}
      >
        <motion.h4 layout>Expanding Content</motion.h4>
        <motion.div layout>
          This header and text will maintain position during transition.
        </motion.div>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ marginTop: 10 }}
          >
            <p>
              This content animates in while the container smoothly expands.
              Notice how the parent container grows to accommodate this content
              with a fluid animation, and all other elements on the page respond
              naturally.
            </p>
            <p>
              All of this happens with just the "layout" prop - no manual
              calculation of heights or positions needed!
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Example 2: Reordering List */}
      <div style={{ marginTop: 30 }}>
        <h4>Reordering & Removing Elements</h4>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {cards.map((card, index) => (
            <motion.div
              key={card}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              style={{
                backgroundColor: getColor(card),
                borderRadius: 8,
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                color: "white",
                fontWeight: "bold",
                fontSize: 24
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => removeCard(index)}
            >
              {card}
            </motion.div>
          ))}
        </div>
        <p style={{ fontSize: 14, marginTop: 10 }}>
          Click on any card to remove it. Notice how the remaining cards smoothly
          rearrange.
        </p>
      </div>
    </div>
  );
};

// Helper function to generate colors
function getColor(number) {
  const colors = [
    "#4285F4", // Google Blue
    "#EA4335", // Google Red
    "#FBBC05", // Google Yellow
    "#34A853", // Google Green
    "#FF6D01", // Google Orange
    "#46BDC6", // Teal
    "#7C4DFF", // Purple
    "#9E9E9E"  // Gray
  ];
  return colors[number % colors.length];
}

export default LayoutAnimations;