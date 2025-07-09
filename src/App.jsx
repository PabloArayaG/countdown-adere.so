import Countdown from './components/Countdown'
import Formulario from './components/Formulario'
import './components/animations.css'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const now = new Date();
    const redirectTime = new Date('2025-07-09T08:00:00-04:00'); // Miércoles 9 de julio, 08:00 AM Chile
  
    if (now >= redirectTime) {
      window.location.href = 'https://linktree.adereso.ai/';
    }
  }, []);
  return (
    <div className="min-h-screen hero-gradient font-poppins relative animate-container">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-overlay-responsive"
        style={{
          backgroundImage: "url('/Degradados-16.png')",
          backgroundPosition: 'center center',
          opacity: 0.30,
          zIndex: 0,
          filter: 'blur(10px)'
        }}
      ></div>
      
      {/* Main Content */}
      <main className="py-8 md:py-12 px-6 relative z-10 animate-content">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Title */}
          <section className="text-center mb-6 md:mb-12">
            <div className="mb-4 md:mb-8">
              <a 
                href="https://www.adereso.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="/Adereso_Blanco.png" 
                  alt="Adereso AI" 
                  className="mx-auto h-7 md:h-8 lg:h-11 w-auto animate-logo"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-6 flex justify-center">
              <img 
                src="/GenIA-logo.png" 
                alt="GenIA Logo" 
                className="h-16 sm:h-20 md:h-12 lg:h-16 xl:h-20 w-auto animate-logo"
              />
            </div>
            <div className="mb-6 md:mb-10 px-2 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-white block animate-text-1">
                ¡El futuro del CX pronto!
              </h1>
            </div>
          </section>

          {/* Countdown Section */}
          <section className="mb-6 md:mb-12 animate-button-1">
            <Countdown />
          </section>

          {/* Subtitle */}
          <section className="text-center mb-6 md:mb-12">
            <p className="text-xl sm:text-xl md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-6 animate-text-2">
              Estamos trabajando en algo revolucionario.
            </p>
            <p className="text-xl sm:text-xl md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mt-3 px-6 animate-text-2">
              Únete a nuestra lista de espera y sé de los primeros en experimentar GenIA.
            </p>
            <p className="text-white/60 text-sm md:text-sm mt-6 md:mt-6 px-6 italic animate-subtitle">
              Fecha estimada de lanzamiento: 9 de Julio, 2025
            </p>
          </section>

          {/* Form Section */}
          <section className="flex justify-center mt-8 md:mt-16 animate-form">
            <div className="w-full max-w-4xl px-2">
              <Formulario />
            </div>
          </section>
          
        </div>
      </main>
    </div>
  )
}

export default App 


