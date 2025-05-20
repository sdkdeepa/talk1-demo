// Update App.jsx
import React, { useState } from 'react';
import CardFlip from './components/CardFlip';
import DragGallery from './components/DragGallery';
import ScrollTimeline from './components/ScrollTimeline';
import LayoutAnimationDemo from './components/LayoutAnimations';
import AnimatePresenceDemo from './components/AnimatePresence'; // Add this import
import './App.css';

function App() {
  const [activeDemo, setActiveDemo] = useState('cardflip');
  
  return (
    <div className="App">
      <header>
        <h1>Framer Motion Demos</h1>
        <p className="subtitle">For International JavaScript Conference</p>
        
        <nav>
          <button 
            onClick={() => setActiveDemo('cardflip')}
            className={activeDemo === 'cardflip' ? 'active' : ''}
          >
            Card Flip
          </button>
          <button 
            onClick={() => setActiveDemo('draggallery')}
            className={activeDemo === 'draggallery' ? 'active' : ''}
          >
            Drag Gallery
          </button>
          <button 
            onClick={() => setActiveDemo('layout')}
            className={activeDemo === 'layout' ? 'active' : ''}
          >
            Layout Animations
          </button>
          <button 
            onClick={() => setActiveDemo('scrolltimeline')}
            className={activeDemo === 'scrolltimeline' ? 'active' : ''}
          >
            Scroll Timeline
          </button>
          <button 
            onClick={() => setActiveDemo('animatepresence')}
            className={activeDemo === 'animatepresence' ? 'active' : ''}
          >
            AnimatePresence
          </button>
        </nav>
      </header>
      
      <main>
        {activeDemo === 'cardflip' && <CardFlip />}
        {activeDemo === 'draggallery' && <DragGallery />}
        {activeDemo === 'layout' && <LayoutAnimationDemo />}
        {activeDemo === 'scrolltimeline' && <ScrollTimeline />}
        {activeDemo === 'animatepresence' && <AnimatePresenceDemo />}
      </main>
    </div>
  );
}

export default App;