## Objetivo
Implementar un carrito persistente y un checkout en 3 pasos, con pagos manuales (el cliente coordina el envío del dinero con el vendedor) y notificaciones por email para vendedor y cliente. Reemplazar "Cotizar" por "Agregar al carrito" y "Comprar ahora".

## Cambios de UI
- Botones unificados: reemplazar "Cotizar" por dos botones adyacentes en todas las cards:
  - `Agregar al carrito` (izquierda)
  - `Comprar ahora` (derecha)
- Carrito global siempre visible:
  - Icono con contador en `Nav.tsx`, clic abre mini‑carrito (drawer/flotante).
  - Previsualización rápida al pasar el cursor y botón "Ir al checkout".
- Sección Tienda en Principal: mantiene carrusel con bordes redondeados, integra botones nuevos.
- Checkout en 3 pasos con diseño del formulario como en las imágenes:
  1. Datos personales (nombre, email, teléfono, fecha de nacimiento).
  2. Productos/servicios (resumen editable: cantidades, borrar, códigos promo, moneda).
  3. Confirmación y método de pago (instrucciones para pago manual, contacto vendedor, botón "Confirmar pedido").

## Arquitectura del Carrito
- `CartContext` (React Context) con persistencia en `localStorage`:
  - Operaciones: `addItem`, `removeItem`, `setQuantity`, `clear`, `buyNow(item)`.
  - Estado: `items[]`, `subtotal`, `discounts[]`, `total`.
- `CartItem` tipo unificado (normaliza `Product` y fotos de Tienda): `{id, title, image, unitPrice, type: 'product'|'photo', meta?}`.
- Normalización de precios: util `parsePrice('$50') -> 50_00` en centavos; manejo de moneda (por defecto `COP`, configurable).

## Flujo "Comprar ahora" y "Agregar al carrito"
- `Agregar al carrito`: añade al contexto, muestra notificación (toast) sin navegación.
- `Comprar ahora`: setea checkout con ese ítem y navega a `/checkout` paso 1.
- Mini‑carrito: muestra lista, permite editar cantidades/eliminar, botón "Ir al checkout".

## Formulario de Pago (Checkout)
- Paso 1: Datos personales con validación (nombre, apellidos, email, teléfono, fecha de nacimiento).
- Paso 2: Resumen de compra:
  - Lista editable (cantidad, eliminar), total automático.
  - Campo para código promocional (aplica descuentos client‑side con validación contra lista segura).
- Paso 3: Método de pago manual:
  - Texto: "Gracias por tu compra, mantente en contacto... tu pedido está pendiente".
  - Botones: "Contactar por WhatsApp" y "Copiar datos del vendedor" (cuenta bancaria/Nequi).
  - Al confirmar: crea orden y envía emails.

## Notificaciones y Backend
- Backend mínimo `Express` (carpeta `server/`) con endpoint `POST /orders`:
  - Recibe datos del pedido (cliente + items + totales + código promo aplicado).
  - Usa `Nodemailer` para enviar:
    - Email al vendedor con detalle completo.
    - Email al cliente con confirmación y estado "pendiente de pago".
- Seguridad: variables de entorno para credenciales SMTP (sin commit), validación básica y rate limit.

## Persistencia y Estados
- `localStorage` claves: `cart_items`, `checkout_draft`, `promo_last`.
- Rehidratación al cargar la app; limpieza al completar pedido o por botón "Vaciar".

## Integraciones en Código
- `src/app/App.tsx`: agregar rutas `/checkout` y `/order-confirmation`.
- `src/components/layout/Nav.tsx`: icono carrito con contador; hover previsualización.
- `src/components/cart/`:
  - `CartIcon.tsx`, `MiniCart.tsx`, `CartDrawer.tsx`.
- `src/pages/Checkout.tsx`: formulario 3 pasos con Tailwind (como las imágenes).
- `src/pages/Principal.tsx`, `src/pages/Servicios.tsx`, `src/pages/Tienda.tsx`: reemplazar botones; usar `useCart` para acciones.
- `src/types/index.ts`: añadir `CartItem` y tipos auxiliares (promos, order payload).
- `src/utils/price.ts`, `src/utils/storage.ts`: utilidades.
- `src/services/orderService.ts`: cliente HTTP hacia backend.

## Validación y Pruebas
- Pruebas de lógica del carrito: añadir/quitar/actualizar cantidad, totales y promos.
- Pruebas de usabilidad: flujos "agregar" y "comprar ahora" en móvil y desktop.
- Verificación de persistencia: rehidratación desde `localStorage`.
- Confirmación de emails: mock SMTP en dev; entorno real con credenciales.

## Seguridad y UX
- No almacenar datos sensibles (no tarjetas). Pago manual guiado.
- Manejar errores de red con mensajes claros; estados de carga en checkout.
- Accesibilidad: labels, `aria-*`, navegación por teclado.

## Entregables
- Carrito persistente visible en todo el sitio.
- Checkout funcional en 3 pasos con diseño negro, campos numerados e iconos.
- Notificaciones email a vendedor y cliente.
- Documentación breve en código sobre `CartContext` y `orderService`.

¿Confirmas este plan para proceder con la implementación?