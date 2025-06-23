# GenIA - Landing Page

Landing page optimizada para GenIA, construida con Vite + React + Tailwind CSS.

## 🚀 Características

- ⏰ **Contador regresivo** hasta el 31 de julio de 2025
- 📝 **Formulario de registro** con validación
- 🎨 **Diseño moderno** con efectos glass y gradientes
- 📱 **Totalmente responsive**
- ⚡ **Optimizado para velocidad** y Core Web Vitals
- 🔗 **Integración con API** de WordPress
- ✨ **Animaciones suaves** y feedback visual

## 🛠️ Tecnologías

- **Vite** - Build tool ultra rápido
- **React 18** - Librería de UI
- **Tailwind CSS** - Framework de CSS utility-first
- **Poppins** - Tipografía moderna de Google Fonts

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🔧 Configuración

### Fecha del contador
Para cambiar la fecha objetivo del contador, edita el archivo `src/components/Countdown.jsx`:

```javascript
// Cambiar esta línea por la fecha deseada
const targetDate = new Date('2025-07-31T23:59:59').getTime()
```

### Endpoint del formulario
El formulario está configurado para enviar datos a:
```
https://adereso.ai/wp-json/api/genia-leads
```

Para cambiar el endpoint, edita `src/components/Formulario.jsx`.

## 🚀 Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. El proyecto se detectará automáticamente como Vite
3. Deploy automático con cada push a main

## 📁 Estructura del proyecto

```
GenIA/
├── public/
├── src/
│   ├── components/
│   │   ├── Countdown.jsx
│   │   └── Formulario.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Funcionalidades del formulario

- **Campos obligatorios**: Nombre y Email
- **Campos opcionales**: Cargo y Empresa
- **Validación en tiempo real**
- **Estados de loading**
- **Redirección automática** a `/gracias` después del envío
- **Manejo de errores** con fallback para demo

## 🔥 Optimizaciones incluidas

- Preconnect a Google Fonts
- Preload de CSS crítico
- Code splitting automático
- Componentes optimizados para re-renders
- Lazy loading donde sea apropiado

---

Desarrollado con ❤️ para la revolución de GenIA 