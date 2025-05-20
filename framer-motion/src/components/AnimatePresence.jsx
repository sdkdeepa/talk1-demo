// src/components/AnimatePresenceDemo.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatePresenceDemo = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [items, setItems] = useState([
    { id: 1, title: "First Card", subtitle: "Click to expand", color: "#FF008C" },
    { id: 2, title: "Second Card", subtitle: "With AnimatePresence", color: "#D309E1" },
    { id: 3, title: "Third Card", subtitle: "Exit animations", color: "#9C1AFF" },
    { id: 4, title: "Fourth Card", subtitle: "Try removing me", color: "#7700FF" }
  ]);

  const removeCard = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addCard = () => {
    // Create a new card with a unique ID
    const newId = Math.max(0, ...items.map(item => item.id)) + 1;
    const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
    const newCard = {
      id: newId,
      title: `Card ${newId}`,
      subtitle: "Newly added",
      color: colors[newId % colors.length]
    };
    setItems([...items, newCard]);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ marginBottom: "10px", color: "#333" }}>AnimatePresence Demo</h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          Click cards to expand. Use X to remove cards and see exit animations.
        </p>
        <button 
          onClick={addCard}
          style={{
            background: "#4400FF",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Add Card
        </button>
      </div>

      <div style={{ position: "relative" }}>
        <AnimatePresence>
          {items.map(item => (
            <motion.div
              layout
              key={item.id}
              style={{
                borderRadius: "10px", 
                marginBottom: "15px",
                backgroundColor: item.color,
                color: "white",
                padding: "20px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden"
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ 
                opacity: 0, 
                x: "100%", 
                transition: { duration: 0.6, ease: "anticipate" } 
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
            >
              <motion.div 
                layout="position"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <motion.h3 layout="position" style={{ margin: 0 }}>
                  {item.title}
                </motion.h3>
                <motion.button
                  layout="position"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCard(item.id);
                  }}
                  style={{
                    background: "rgba(255,255,255,0.2)", 
                    border: "none",
                    color: "white",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(255,255,255,0.3)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✕
                </motion.button>
              </motion.div>

              <motion.div 
                layout="position"
                style={{ marginTop: "10px" }}
              >
                <p style={{ margin: 0, opacity: 0.8 }}>{item.subtitle}</p>
                
                <AnimatePresence>
                  {selectedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden", marginTop: "15px" }}
                    >
                      <p>
                        This content animates in when the card is selected, and properly
                        animates out when the card is collapsed or removed entirely from the DOM.
                      </p>
                      <p>
                        AnimatePresence enables exit animations in React, solving the problem
                        of elements being immediately removed from the DOM during state changes.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>

        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              textAlign: "center", 
              padding: "40px", 
              color: "#666", 
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              marginTop: "20px"
            }}
          >
            <p>All cards have been removed. Add new ones to continue.</p>
          </motion.div>
        )}
      </div>

      <motion.div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          fontSize: "14px",
          color: "#333"
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p style={{ fontWeight: "bold", marginTop: 0 }}>Key Framer Motion Concepts Demonstrated:</p>
        <ul style={{ paddingLeft: "20px" }}>
          <li><code>AnimatePresence</code> - Enables exit animations when elements are removed from the DOM</li>
          <li><code>layout</code> - Automatically animates elements when the layout changes</li>
          <li><code>layout="position"</code> - More specific layout animations for positioned elements</li>
          <li>Combining gestures, layout animations, and exit animations together</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AnimatePresenceDemo;