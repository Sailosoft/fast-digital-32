import React, { useState, useEffect } from 'react';
import MyMessage from './my-message.tsx';

interface NewHeart {
  id: number;
  left: string;
  size: string;
  duration: string;
}

type NewHearts = NewHeart[];


export default function MessagePage() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [hearts, setHearts] = useState<NewHearts>([]);

  // Logic to generate floating hearts
  useEffect(() => {
    if (isLetterOpen) {
      const interval = setInterval(() => {
        const id = Date.now();
        const newHeart: NewHeart = {
          id,
          left: Math.floor(Math.random() * 90) + '%',
          size: Math.floor(Math.random() * 20) + 15 + 'px',
          duration: Math.random() * 2 + 3 + 's'
        };

        setHearts((prev) => [...prev, newHeart]);

        // Cleanup heart after animation ends
        setTimeout(() => {
          setHearts((prev) => prev.filter(h => h.id !== id));
        }, 5000);
      }, 400);

      return () => clearInterval(interval);
    }
  }, [isLetterOpen]);

  return (
    <div className="min-h-screen bg-[#fff5f5] font-sans overflow-x-hidden">
      {/* Dynamic CSS for Animations */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh) scale(0); opacity: 1; }
          100% { transform: translateY(-10vh) scale(1.5); opacity: 0; }
        }
        .animate-float {
          animation: floatUp linear forwards;
        }
        .cursive {
          font-family: 'Dancing Script', cursive;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Floating Hearts Container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {hearts.map(heart => (
          <span
            key={heart.id}
            className="absolute bottom-0 text-rose-400 animate-float"
            style={{
              left: heart.left,
              fontSize: heart.size,
              animationDuration: heart.duration
            }}
          >
            ❤
          </span>
        ))}
      </div>

      {/* Hero Section */}
      <header
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        // style={{
        //   backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1950&q=80')`
        // }}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('./assets/images/main.jpeg')`,
        }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-4">To My Baby Juvy</h2>
          <h1 className="text-6xl md:text-8xl cursive mb-6 drop-shadow-lg">Happy Anniversary</h1>
          <p className="text-lg md:text-xl font-light italic max-w-2xl mx-auto">
            I Love You And Thank You For Being With Me And To All Wonderful Memories We Make Together
          </p>
          <div className="mt-16 animate-bounce">
            <span className="text-3xl">↓</span>
          </div>
        </div>
      </header>

      {/* Love Letter Section */}
      <section className="py-20 px-4 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          {!isLetterOpen ? (
            <div
              onClick={() => setIsLetterOpen(true)}
              className="bg-rose-600 p-8 rounded-lg shadow-2xl inline-block cursor-pointer transition-transform hover:scale-105 active:scale-95"
            >
              <div className="text-white text-6xl mb-4">✉</div>
              <p className="text-white font-semibold">Click to Open My Heart</p>
            </div>
          ) : (
            <div className="glass-card p-10 rounded-2xl shadow-xl text-left border-2 border-rose-200 transition-all duration-700 ease-out translate-y-0 opacity-100">
              <h3 className="cursive text-4xl text-rose-600 mb-6">To My Baby Juvy,</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <MyMessage/>
                <p className="pt-4 font-semibold italic">Forever Yours,</p>
                <p className="cursive text-3xl text-rose-500">Dagul, Gigulu, Baby</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Photo Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl text-center font-bold text-gray-800 mb-16">Our Beautiful Memories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "The Day We Are Together", img: "./assets/images/shoes.jpg" },
              { label: "Your I Love You Feeling", img: "./assets/images/i-love-you.jpeg" },
              { label: "My Chocolate", img: "./assets/images/chocolate.jpeg" },
              { label: "Park Date", img: "./assets/images/park.jpeg" },
              { label: "Venice Date", img: "./assets/images/white.jpeg" },
              { label: "Date Everywhere", img: "./assets/images/brown.jpeg" },
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl shadow-lg aspect-square">
                <img
                  src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-medium text-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Year in Review</h2>
          <div className="space-y-6">
            {[
              "Eat and Cook our hotpot",
              "Eat and Watch Sa Malatang",
              "Date and Gala Sa BGC",
              "Date and Gala Sa Pembo",
              "Date and Gala Sa Brgy, Rizal",
              "Date and Gala Sa Woodpecker",
              "Date and Gala Sa Bluebuz",
              "Date and Gala Sa Taguig",
              "Date and Gala Sa Maya St",
              "Date and Gala Sa Guadalupe",
              "Eat Together sa Deli",
              "Eat Together, Date Sa Venice",
              "Eat Together sa KBini",
              "Eat Together sa Chowking WCity",
              "Eat Together sa Jollibee Mind Musuem",
              "Our First Kiss, Patry",
              "Gala sa Signal at Housing",
              "Eat and Gala Everywhere",
              "Eat and Gala Everywhere",
              "Eat and Gala Everywhere",
              "Eat and Gala Everywhere",
              "And Many Many More",
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-rose-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">✓</div>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white text-center border-t border-rose-100">
        <p className="text-gray-500 mb-4 italic">I Always Love You Baby Ko, My Wifey, and My Baby Juvy</p>
        <div className="flex justify-center space-x-4 text-rose-400">
          <span className="text-2xl animate-pulse">❤</span>
          <span className="text-2xl animate-pulse" style={{ animationDelay: '0.2s' }}>❤</span>
          <span className="text-2xl animate-pulse" style={{ animationDelay: '0.4s' }}>❤</span>
        </div>
      </footer>
    </div>
  );
};
