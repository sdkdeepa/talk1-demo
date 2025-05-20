import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const ScrollTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const events = [
    { title: "Initial Setup", description: "Begin with basic components" },
    { title: "Add Animations", description: "Implement Framer Motion" },
    { title: "User Testing", description: "Gather feedback on animations" },
    { title: "Optimization", description: "Fine-tune performance" },
    { title: "Launch", description: "Release your animated React app" },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "10px",
      }}
    >
      <div
        ref={containerRef}
        style={{
          height: "100vh",
          position: "relative",
          overflow: "auto",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "12px",
          scrollBehavior: "smooth",
        }}
      >
        <h2 style={{ 
          textAlign: "center", 
          color: "#007BFF",
          marginBottom: "40px",
          position: "sticky",
          top: "0",
          backgroundColor: "#f8f9fa",
          padding: "15px 0",
          zIndex: 5,
        }}>
          Project Timeline
        </h2>
        
        <div style={{ 
          position: "relative", 
          minHeight: "150vh",
          padding: "20px 0 100px",
        }}>
          {/* Center line */}
          <motion.div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "4px",
              backgroundColor: "#007BFF",
              transformOrigin: "top",
              transform: "translateX(-2px)",
              scaleY: scrollYProgress,
              zIndex: 1,
            }}
          />

          {events.map((event, i) => {
            // Determine if this event is on the left or right
            const isLeft = i % 2 === 0;
            
            return (
              <div 
                key={i}
                style={{
                  position: "relative",
                  height: "30vh",
                  minHeight: "200px",
                  marginBottom: "40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* Content container with proper positioning */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                }}>
                  {/* For left side events */}
                  {isLeft && (
                    <motion.div
                      style={{
                        width: "45%",
                        backgroundColor: "white",
                        borderRadius: 16,
                        padding: "20px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        marginRight: "5%",
                      }}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 style={{ color: "#007BFF", margin: 0 }}>
                        {event.title}
                      </h3>
                      <p style={{ marginTop: "10px", color: "#555" }}>
                        {event.description}
                      </p>
                    </motion.div>
                  )}
                  
                  {/* Center point and connectors */}
                  <div style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    alignItems: "center",
                    zIndex: 2,
                  }}>
                    {/* Left connector */}
                    {isLeft && (
                      <motion.div
                        style={{
                          width: "40px",
                          height: "3px",
                          backgroundColor: "#007BFF",
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Center circle */}
                    <motion.div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        border: "4px solid #007BFF",
                        margin: "0 4px",
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                    
                    {/* Right connector */}
                    {!isLeft && (
                      <motion.div
                        style={{
                          width: "40px",
                          height: "3px",
                          backgroundColor: "#007BFF",
                        }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </div>
                  
                  {/* For right side events */}
                  {!isLeft && (
                    <motion.div
                      style={{
                        width: "45%",
                        backgroundColor: "white",
                        borderRadius: 16,
                        padding: "20px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                        marginLeft: "5%",
                      }}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 style={{ color: "#007BFF", margin: 0 }}>
                        {event.title}
                      </h3>
                      <p style={{ marginTop: "10px", color: "#555" }}>
                        {event.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Instruction text */}
        <motion.div
          style={{
            textAlign: "center",
            padding: "10px",
            fontStyle: "italic",
            color: "#666",
            position: "sticky",
            bottom: "10px",
            backgroundColor: "rgba(248, 249, 250, 0.8)",
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
            zIndex: 5,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Scroll to see the timeline progress
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollTimeline;