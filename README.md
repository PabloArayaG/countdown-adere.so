# GenIA Landing Page - Documentación Privada

## 🔒 Notas Personales del Proyecto

Este es un README privado para mi uso personal. Contiene información técnica y notas sobre el desarrollo de la landing page de GenIA.

## 📋 Información del Proyecto

- **Proyecto**: Landing Page GenIA
- **Cliente**: Adereso AI
- **Fecha objetivo**: 31 de Julio, 2025
- **Tecnologías**: React + Vite + Tailwind CSS
- **Repositorio**: https://github.com/PabloArayaG/countdown-adere.so

## 🛠️ Stack Técnico

```bash
- React 18
- Vite (build tool)
- Tailwind CSS
- PostCSS
- Poppins (Google Fonts)
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Countdown.jsx          # Componente principal del countdown
│   ├── countdown.css          # Estilos específicos del countdown
│   └── Formulario.jsx         # Formulario decorativo (para HubSpot)
├── App.jsx                    # Componente principal
├── index.css                  # Estilos globales + Tailwind
└── main.jsx                   # Entry point

public/
├── Adereso_Blanco.png        # Logo Adereso
├── GenIA-logo.png            # Logo GenIA
├── Degradados-16.png         # Imagen de fondo decorativa
└── ...
```

## ⚙️ Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (puerto 3000)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🎨 Configuraciones Importantes

### Colores Personalizados
- **Fondo principal**: `#00164F` (azul oscuro)
- **Span "CX"**: `#B37DFA` (púrpura)
- **Imagen de fondo**: 20% opacidad, 200% scale

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Animaciones del Countdown
- **subtlePulse**: 4s (escala suave)
- **gradientShift**: 6s (movimiento de degradé)

## 🚀 Deploy

### Vercel (Recomendado)
1. Conectar repositorio GitHub
2. Auto-deploy desde main branch
3. Variables de entorno: ninguna necesaria

### Configuración Build
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node version**: 18+

## 📝 Notas de Desarrollo

### Optimizaciones Mobile Implementadas
- Padding reducido: `py-6` mobile vs `py-12` desktop
- Logos más pequeños: `h-10` mobile vs `h-16` desktop
- Texto responsive: `text-2xl` mobile vs `text-4xl` desktop
- Countdown: 2 cols mobile, 4 cols desktop

### Formulario
- **Estado actual**: Decorativo/disabled
- **Integración futura**: HubSpot
- **Endpoint**: `https://adereso.ai/wp-json/api/genia-leads`
- **Campos**: Nombre*, Email*, Cargo, Empresa

### Assets
- **Fuentes**: Poppins (300-900) desde Google Fonts
- **Imágenes**: Optimizadas y en public/
- **Iconos**: Logo Adereso + Logo GenIA

## 🔧 Troubleshooting

### Problemas Comunes
1. **Animaciones no funcionan**: Verificar CSS separado en countdown.css
2. **Imágenes no cargan**: Verificar rutas desde public/
3. **Mobile responsive**: Verificar breakpoints md: y lg:

### Performance
- **Lazy loading**: Implementado en imágenes
- **Code splitting**: Automático con Vite
- **CSS optimizado**: Tailwind purge activado

## 📈 Métricas de Desarrollo

- **Tiempo desarrollo**: ~4 horas
- **Componentes**: 3 principales
- **Archivos CSS**: 2 (global + countdown)
- **Assets**: 5 imágenes
- **Dependencias**: Mínimas (React, Vite, Tailwind)

## 🎯 TODOs Futuros

- [ ] Integrar formulario con HubSpot
- [ ] Configurar analytics
- [ ] Optimizar SEO meta tags
- [ ] Configurar dominio personalizado
- [ ] Tests unitarios (opcional)

---

**Notas**: Este README es para uso interno y contiene información técnica específica del proyecto. 