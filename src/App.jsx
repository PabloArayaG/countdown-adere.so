import Countdown from './components/Countdown'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="min-h-screen hero-gradient font-poppins relative">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/Degradados-16.png')",
          backgroundPosition: 'center center',
          backgroundSize: '200% auto',
          opacity: 0.30,
          zIndex: 0
        }}
      ></div>
      
      {/* Main Content */}
      <main className="py-6 md:py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Title */}
          <section className="text-center mb-8 md:mb-12">
            <div className="mb-6 md:mb-8">
              <img 
                src="/Adereso_Blanco.png" 
                alt="Adereso AI" 
                className="mx-auto h-10 md:h-12 lg:h-16 w-auto"
              />
            </div>
            <div className="mb-4 md:mb-6 flex justify-center">
              <img 
                src="/GenIA-logo.png" 
                alt="GenIA Logo" 
                className="h-10 md:h-12 lg:h-16 xl:h-20 w-auto"
              />
            </div>
            <div className="mb-8 md:mb-10 px-2 text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-white block">
                ¡El futuro del CX pronto!
              </h1>
            </div>
          </section>

          {/* Countdown Section */}
          <section className="mb-8 md:mb-12">
            <Countdown />
          </section>

          {/* Subtitle */}
          <section className="text-center mb-8 md:mb-12">
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