# Plan de Reestructuración y Escalabilidad del Proyecto Dusk Light

Este plan tiene como objetivo transformar la estructura actual del proyecto en una arquitectura profesional, escalable y lista para la integración futura de un backend.

## 1. Reorganización de Directorios (Standard React Architecture)

Moveremos la estructura actual a una más modular y limpia:

- **`src/app/`**: Configuración global de la aplicación.
  - `App.tsx`: Componente raíz limpio.
  - `routes.tsx`: Configuración centralizada de rutas.
- **`src/assets/`**: Estilos globales e imágenes importadas.
- **`src/components/`**: Componentes UI reutilizables (Botones, Layouts, Cards).
  - `common/`: Componentes genéricos (Button, Section, etc.).
  - `layout/`: Footer, Navbar, MobileMenu.
- **`src/pages/`**: Vistas principales (limpias de lógica compleja).
- **`src/data/`**: Datos estáticos (mocks) que simularán la base de datos futura.
- **`src/services/`**: Capa de comunicación con el backend (API Fetching).
- **`src/types/`**: Definiciones de TypeScript globales (Interfaces).
- **`src/hooks/`**: Custom hooks para lógica reutilizable.
- **`src/utils/`**: Funciones de utilidad y constantes.

## 2. Limpieza y Optimización de Código

### Refactorización de Componentes
- **Separación de Responsabilidades**: Extraeremos la data "hardcodeada" de `Principal.tsx` y otros componentes hacia archivos de datos o servicios simulados.
- **Componentes Reutilizables**: Crearemos componentes como `<ProductCard />`, `<PortfolioItem />`, y `<SectionHeader />` para evitar código repetido.
- **Nomenclatura**: Estandarizaremos los nombres de archivos (PascalCase para componentes).

### Preparación para Backend
- Crearemos una capa de servicios (`src/services/productService.ts`, `src/services/portfolioService.ts`) que actualmente devolverá datos locales, pero estará lista para ser reemplazada por llamadas a una API real sin romper la UI.

## 3. Organización de Archivos Estáticos (`public/`)
- Organizaremos la carpeta `public` creando subcarpetas claras (`images/portfolio`, `images/products`, etc.) y eliminando archivos duplicados o basura si es necesario, para mejorar la carga y organización.

## 4. Pasos de Ejecución

1.  **Crear nueva estructura de carpetas**.
2.  **Mover y renombrar** componentes existentes a sus nuevas ubicaciones.
3.  **Extraer datos** a `src/data` y crear interfaces en `src/types`.
4.  **Refactorizar `Principal.tsx`** para usar los nuevos componentes y servicios.
5.  **Configurar el Router** en `src/app/routes.tsx`.
6.  **Verificar** que la aplicación compile y funcione correctamente.

¿Te parece bien este plan para profesionalizar tu proyecto?