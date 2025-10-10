# 🚀 Guía de Despliegue - DUSK LIGHT

## Configuración para GitHub Pages

### 1. Configuración de Vite (vite.config.ts)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/DUSK-LIGHT/' // ✅ IMPORTANTE: Barra final incluida
})
```

### 2. Rutas de imágenes corregidas
Todas las imágenes ahora usan rutas absolutas con barra inicial:
```tsx
// ✅ CORRECTO
<img src="/image.png" alt="Logo" />
<img src="/auto.png" alt="Auto" />
<img src="/paisaje.png" alt="Paisaje" />
<img src="/fotos.jpeg" alt="Fotos" />

// ❌ INCORRECTO (causa 404)
<img src="image.png" alt="Logo" />
```

### 3. Archivo .nojekyll
Se ha creado el archivo `.nojekyll` en la raíz del proyecto para evitar que GitHub Pages procese el sitio con Jekyll.

### 4. Comandos de despliegue
```bash
# Construir y desplegar
npm run deploy

# O paso a paso
npm run build
npm run deploy
```

### 5. Verificación post-despliegue
Después del despliegue, verifica que:
- ✅ Las imágenes cargan correctamente
- ✅ El routing funciona (no hay 404 en navegación)
- ✅ El sitio es responsive
- ✅ El menú móvil funciona

### 6. URL del sitio
- **Desarrollo local**: `http://localhost:5173`
- **Producción**: `https://teka369.github.io/DUSK-LIGHT/`

### 7. Solución de problemas comunes

#### Error 404 en imágenes:
- Verificar que las rutas usen `/` inicial
- Verificar que el archivo `.nojekyll` existe
- Verificar que `base: '/DUSK-LIGHT/'` en vite.config.ts

#### Error 404 en routing:
- Verificar que React Router esté configurado correctamente
- Verificar que todas las rutas usen `Link` de react-router-dom

#### Problemas de CSS:
- Verificar que Tailwind CSS esté configurado correctamente
- Verificar que las clases CSS estén siendo aplicadas

### 8. Estructura de archivos importante
```
DUSK-LIGHT/
├── public/
│   ├── image.png      ✅
│   ├── auto.png       ✅
│   ├── paisaje.png    ✅
│   └── fotos.jpeg     ✅
├── src/
│   ├── main/
│   ├── pages/
│   ├── components/
│   └── assets/
├── .nojekyll          ✅
├── vite.config.ts     ✅
└── package.json       ✅
```
