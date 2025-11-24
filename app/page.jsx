"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Ballpit from '@/components/Ballpit';
import BirthdayCake from '@/components/Cake';

function App() {
  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);

  // Array foto - ganti dengan path foto Anda
  const leftPhotos = [
    { src: "/photos/photo6.jpg", rotation: -5 },
    { src: "/photos/photo2.jpg", rotation: 3 },
    { src: "/photos/photo3.jpg", rotation: -8 },
  ];

  const rightPhotos = [
    { src: "/photos/photo4.jpg", rotation: 5 },
    { src: "/photos/photo5.jpg", rotation: -3 },
    { src: "/photos/photo1.jpg", rotation: 7 },
  ];

  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setMusicStarted(true);
    }
  };

  return (
    <div style={{
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#EE6983',
      color: '#ffffff',
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      
      {/* Audio Element */}
      <audio 
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/Phil Collins - You'll Be In My Heart.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Start Overlay - Muncul saat pertama kali */}
      {!musicStarted && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.8)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '30px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            textAlign: 'center',
            animation: 'pulse 2s infinite'
          }}>
            Selamat Ulang Tahun Sayang!
          </div>
          <button
            onClick={handleStartMusic}
            style={{
              padding: '20px 50px',
              fontSize: '24px',
              fontWeight: 'bold',
              backgroundColor: '#FFD700',
              color: '#EE6983',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(255,215,0,0.5)',
              transition: 'all 0.3s ease',
              transform: 'scale(1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,215,0,0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,215,0,0.5)';
            }}
          >
            klik akuu cantik acuuuu
          </button>
          <div style={{
            fontSize: '18px',
            opacity: 0.8,
            textAlign: 'center'
          }}>
            Selamat umur baruuuuu
          </div>
        </div>
      )}

      {/* Layer 1: Frame Foto - Paling belakang */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 50px'
      }}>
        
        {/* Left Photos */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          marginBottom: '50px'
        }}>
          {leftPhotos.map((photo, index) => (
            <div
              key={`left-${index}`}
              style={{
                position: 'relative',
                width: '180px',
                height: '220px',
                backgroundColor: '#ffffff',
                padding: '15px 15px 40px 15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transform: `rotate(${photo.rotation}deg)`,
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${photo.rotation}deg) scale(1)`;
              }}
            >
              {/* Tali/String */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '30px',
                backgroundColor: 'rgba(255,255,255,0.5)',
              }} />
              
              {/* Pin/Clip */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#FFD700',
                border: '2px solid #FFA500',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }} />

              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '180px',
                backgroundColor: '#f0f0f0',
                overflow: 'hidden'
              }}>
                <Image
                  src={photo.src}
                  alt={`Memory ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Photos */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          marginTop: '50px'
        }}>
          {rightPhotos.map((photo, index) => (
            <div
              key={`right-${index}`}
              style={{
                position: 'relative',
                width: '180px',
                height: '220px',
                backgroundColor: '#ffffff',
                padding: '15px 15px 40px 15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transform: `rotate(${photo.rotation}deg)`,
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = `rotate(0deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${photo.rotation}deg) scale(1)`;
              }}
            >
              {/* Tali/String */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '2px',
                height: '30px',
                backgroundColor: 'rgba(255,255,255,0.5)',
              }} />
              
              {/* Pin/Clip */}
              <div style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#FFD700',
                border: '2px solid #FFA500',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
              }} />

              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '180px',
                backgroundColor: '#f0f0f0',
                overflow: 'hidden'
              }}>
                <Image
                  src={photo.src}
                  alt={`Memory ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>

      {/* Layer 2: Ballpit - Di tengah */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none'
      }}>
        <Ballpit
          count={100}
          colors={[0xE3E3E3]}
          gravity={0}
          friction={1}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>

      {/* Layer 3: Birthday Cake - Paling depan */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}>
        <div style={{ pointerEvents: 'auto' }}>
          <BirthdayCake name="Putri Fitria Rahman" />
        </div>
      </div>
      
    </div>
  );
}

export default App;