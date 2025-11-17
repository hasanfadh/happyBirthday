"use client";

import Image from "next/image";
import Ballpit from '@/components/Ballpit';
import BirthdayCake from '@/components/Cake';

function App() {
  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#EE6983',
      color: '#ffffff',
      position: 'relative',
      height: '100vh',
    }}>
      
      {/* Birthday Cake Overlay */}
      <div style={{
        position: 'relative',
        zIndex: 2
      }}>
        <BirthdayCake name="Putri Fitria Rahman" />
      </div>

      {/* Ballpit Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}>
        <Ballpit
          count={100}
          colors={[0xE3E3E3]}
          gravity={0.7}
          friction={1}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>
      
    </div>
  );
}

export default App;