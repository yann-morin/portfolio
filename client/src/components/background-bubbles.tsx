export default function BackgroundBubbles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Bulle 1 - Bleue */}
      <div 
        className="absolute w-20 h-20 bg-blue-400/30 rounded-full animate-float-up-1"
        style={{
          left: '10%',
          top: '100%',
        }}
      />
      
      {/* Bulle 2 - Violette */}
      <div 
        className="absolute w-16 h-16 bg-purple-400/30 rounded-full animate-float-up-2"
        style={{
          left: '25%',
          top: '100%',
        }}
      />
      
      {/* Bulle 3 - Verte */}
      <div 
        className="absolute w-24 h-24 bg-emerald-400/30 rounded-full animate-float-up-3"
        style={{
          left: '60%',
          top: '100%',
        }}
      />
      
      {/* Bulle 4 - Ambre */}
      <div 
        className="absolute w-12 h-12 bg-amber-400/30 rounded-full animate-float-up-4"
        style={{
          left: '80%',
          top: '100%',
        }}
      />
      
      {/* Bulle 5 - Rose */}
      <div 
        className="absolute w-14 h-14 bg-pink-400/30 rounded-full animate-float-up-5"
        style={{
          left: '40%',
          top: '100%',
        }}
      />
      
      {/* Bulle 6 - Cyan */}
      <div 
        className="absolute w-16 h-16 bg-cyan-400/30 rounded-full animate-float-up-6"
        style={{
          left: '75%',
          top: '100%',
        }}
      />
    </div>
  );
}