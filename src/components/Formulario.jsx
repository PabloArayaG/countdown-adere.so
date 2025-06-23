const Formulario = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="glass-effect rounded-2xl p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Únete a la Lista de Espera!
          </h3>
          <p className="text-gray-600 text-sm">
            Regístrate y sé de los primeros en conocer GenIA
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nombre completo *"
              className="input-field"
              disabled
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email *"
              className="input-field"
              disabled
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Cargo (opcional)"
              className="input-field"
              disabled
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Empresa (opcional)"
              className="input-field"
              disabled
            />
          </div>

          <button
            type="button"
            disabled
            className="form-button-disabled"
          >
            ¡Quiero ser parte de GenIA!
          </button>

          <p className="text-gray-500 text-xs text-center mt-4">
            * Campos obligatorios. Al registrarte aceptas recibir información sobre GenIA.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Formulario 