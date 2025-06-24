# 🚀 Instrucciones para Deploy en Vercel

## Guía paso a paso para subir GenIA Landing a Vercel

---

## **Paso 1: Crear cuenta en Vercel**
1. Ve a **https://vercel.com**
2. Haz clic en **"Sign Up"**
3. **⚠️ IMPORTANTE**: Regístrate con tu cuenta de GitHub (la misma donde tienes el repositorio `countdown-adere.so`)
4. Autoriza a Vercel para acceder a tus repositorios de GitHub

---

## **Paso 2: Importar tu proyecto**
1. Una vez dentro del dashboard de Vercel, haz clic en **"New Project"**
2. Verás una lista de tus repositorios de GitHub
3. Busca **"countdown-adere.so"** en la lista
4. Haz clic en **"Import"** al lado del repositorio

---

## **Paso 3: Configuración automática**
Vercel detectará automáticamente que es un proyecto Vite y configurará:

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Root Directory: ./
```

**🔥 ¡No necesitas cambiar NADA! Deja toda la configuración como está.**

---

## **Paso 4: Deploy**
1. Haz clic en **"Deploy"** (botón azul)
2. Vercel comenzará el proceso automáticamente:
   - ⏳ Instalando dependencias...
   - ⏳ Ejecutando build...
   - ⏳ Subiendo archivos...
3. **Tiempo estimado**: 2-3 minutos

---

## **Paso 5: ¡Tu sitio está LIVE! 🎉**
- Te dará una URL como: `https://countdown-adere-so.vercel.app`
- Tu landing page estará disponible inmediatamente
- **Auto-deploy**: Cada push a GitHub actualizará automáticamente el sitio

---

## 📋 **Checklist rápido:**

- [ ] Cuenta en Vercel con GitHub ✓
- [ ] Clic en "New Project" ✓
- [ ] Importar "countdown-adere.so" ✓
- [ ] Dejar configuración por defecto ✓
- [ ] Clic en "Deploy" ✓
- [ ] ¡Esperar y celebrar! 🎉

---

## 🔧 **Troubleshooting - Si algo sale mal:**

### **Error de build**
Verifica que tu `package.json` tenga estos scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### **Imágenes no cargan**
- Todas las imágenes están en `public/` ✓
- Las rutas son correctas (`/GenIA-logo.png`) ✓
- Deberían funcionar automáticamente ✓

### **Fuentes no cargan**
- Google Fonts está en `index.html` ✓
- Poppins configurado correctamente ✓

---

## 🌟 **Ventajas de Vercel:**
- ✅ **Deploy automático** con cada push a GitHub
- ✅ **HTTPS gratuito** incluido
- ✅ **CDN global** para velocidad máxima
- ✅ **Preview deployments** para branches
- ✅ **Analytics incluidos**
- ✅ **Dominio personalizado** (opcional)

---

## 🎯 **Después del deploy:**

### **URLs que tendrás:**
- **Producción**: `https://countdown-adere-so.vercel.app`
- **Dashboard**: `https://vercel.com/dashboard`
- **Analytics**: Disponibles en el dashboard

### **Configuraciones adicionales (opcionales):**
- **Dominio personalizado**: Configurar `adere.so` o subdominio
- **Environment variables**: Si necesitas variables de entorno
- **Analytics**: Ver métricas de rendimiento

---

## 📞 **¿Necesitas ayuda?**

Si algo no funciona:
1. Revisa los logs de build en Vercel
2. Verifica que el repositorio esté actualizado
3. Comprueba que `npm run build` funcione localmente

---

## ⏰ **Tiempo total estimado: 5 minutos**

**¡En menos de 5 minutos tendrás tu landing GenIA online y funcionando!** 🚀

---

*Archivo creado para no perder las instrucciones - Proyecto GenIA Landing Page* 