import Countdown from './components/Countdown'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="min-h-screen hero-gradient font-poppins relative">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/Degradados-16.png')",
          backgroundPosition: 'center center',
          backgroundSize: '200% auto',
          zIndex: 0
        }}
      ></div>
      
      {/* Main Content */}
      <main className="py-6 md:py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Title */}
          <section className="text-center mb-12 md:mb-16">
            <div className="mb-6 md:mb-8">
              <img 
                src="/Adereso_Blanco.png" 
                alt="Adereso AI" 
                className="mx-auto h-10 md:h-16 w-auto"
              />
            </div>
            <div className="mb-4 md:mb-6">
              <img 
                src="/GenIA-logo.png" 
                alt="GenIA Logo" 
                className="mx-auto h-10 md:h-16 lg:h-20 w-auto mb-3 md:mb-4"
              />
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight px-2">
              ¡El futuro del <span style={{color: '#B37DFA'}}>CX</span> pronto!
            </h1>
          </section>

          {/* Countdown Section */}
          <section className="mb-12 md:mb-16">
            <Countdown />
          </section>

          {/* Subtitle */}
          <section className="text-center mb-10 md:mb-12">
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed px-4">
              Estamos trabajando en algo revolucionario.
            </p>
            <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mt-2 px-4">
              Únete a nuestra lista de espera y sé de los primeros en experimentar GenIA.
            </p>
            <p className="text-white/60 text-xs md:text-sm mt-4 md:mt-6 px-4">
              * Fecha estimada de lanzamiento: 31 de Julio, 2025
            </p>
          </section>

          {/* Form Section */}
          <section className="flex justify-center mt-12 md:mt-16">
            <div className="w-full max-w-md px-4">
              <div className="text-center mb-8">
              </div>
              <Formulario />
            </div>
          </section>
          
        </div>
      </main>
    </div>
  )
}

export default App 