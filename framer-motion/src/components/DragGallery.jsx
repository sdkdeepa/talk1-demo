import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const DragGallery = () => {
  // Use placeholder image service that is guaranteed to work
  const images = [
    "https://picsum.photos/id/10/600/400",  // Using larger images for better quality
    "https://picsum.photos/id/11/600/400",
    "https://picsum.photos/id/12/600/400",
    "https://picsum.photos/id/13/600/400",
    "https://picsum.photos/id/14/600/400"
  ];

  const [dragging, setDragging] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const constraintsRef = useRef(null);

  // Update window dimensions when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate responsive dimensions
  const containerHeight = Math.min(500, windowSize.height * 0.6);
  const cardWidth = windowSize.width < 768 ? 200 : 280;
  const cardHeight = windowSize.width < 768 ? 140 : 190;

  // Calculate initial positions for cards to be more spread out
  const getInitialPosition = (index) => {
    const positions = [
      { x: -cardWidth * 0.5, y: -cardHeight * 0.3 },  // Top left
      { x: cardWidth * 0.4, y: -cardHeight * 0.5 },   // Top right
      { x: -cardWidth * 0.7, y: cardHeight * 0.2 },   // Bottom left
      { x: cardWidth * 0.2, y: cardHeight * 0.4 },    // Bottom right
      { x: -cardWidth * 0.1, y: 0 },                  // Center
    ];
    return positions[index % positions.length];
  };

  return (
    <div style={{ 
      width: "100%", 
      height: containerHeight, 
      position: "relative",
      paddingTop: "20px", 
      paddingBottom: "40px",
      margin: "0 auto",
      maxWidth: "1200px"
    }}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f5f5f5",
          borderRadius: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
        ref={constraintsRef}
      >
        {images.map((img, i) => {
          const initialPosition = getInitialPosition(i);
          
          return (
            <motion.div
              key={i}
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              dragTransition={{ 
                bounceStiffness: 300, 
                bounceDamping: 20 
              }}
              onDragStart={() => setDragging(i)}
              onDragEnd={() => setDragging(null)}
              initial={{
                x: initialPosition.x,
                y: initialPosition.y,
                rotate: Math.random() * 20 - 10
              }}
              style={{
                position: "absolute",
                width: cardWidth,
                height: cardHeight,
                borderRadius: 10,
                overflow: "hidden",
                cursor: "grab",
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                border: "5px solid white",
                transformOrigin: "center",
              }}
              animate={{
                scale: dragging === i ? 1.1 : 1,
                zIndex: dragging === i ? 10 : i,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ cursor: "grabbing", scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.3 }}
            >
              <img
                src={img}
                alt=''
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover"
                }}
                draggable="false" // Prevent browser image drag behavior
              />
            </motion.div>
          );
        })}
      </motion.div>
      <div style={{ 
        textAlign: "center", 
        marginTop: 20, 
        fontStyle: "italic",
        color: "#555"
      }}>
        Drag the cards to rearrange them - works on all screen sizes
      </div>
    </div>
  );
};

export default DragGallery;