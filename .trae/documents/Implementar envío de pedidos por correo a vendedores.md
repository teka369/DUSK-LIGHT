## Objetivo

* Capturar datos del cliente y su carrito en Checkout.

* Enviar un correo con el pedido al/los vendedores designados.

* Mantener seguridad: sin secretos en el front, validación y protección contra spam.

## Flujo de Usuario

* El cliente completa el Checkout (pasos 1–5) y pulsa "Comprar" .

* Se genera el `OrderPayload` con detalles del cliente y productos.

* El front envía `POST /orders` al backend seguro.

* El backend valida y envía emails a los vendedores, devuelve confirmación.

* El front navega a Confirmación y muestra el ID de envío.

## Estructura de Datos

* Usar `OrderPayload` existente (`src/types`):

  * `customer`: nombre, email, teléfono, etc.

  * `items`: `id`, `title`, `image`, `unitPriceCents`, `quantity`, `type`.

  * `currency`, `subtotalCents`, `totalCents`, `notes`.

* Añadir opcional: `source` (página/utm) y `createdAt` (ISO) generado en backend.

## Backend Recomendado (Cloudflare Worker + Resend)

* **Endpoint**: `POST /orders` (Worker público detrás de una ruta `https://api.tudominio/orders`).

* **Secretos**: Guardar `RESEND_API_KEY` en secretos del Worker; nunca en el repo.

* **Configuración de vendedores**: Lista de emails en `WORKER_ENV.VENDORS` (CSV) que tú proves después.

* **Validación**:

  * Schema (Zod) para `OrderPayload`.

  * Verificar email/phone; `items.length > 0`; totales coherentes.

* **Seguridad**:

  * CORS sólo para `https://tusitio`.

  * Rate-limiting por IP (KV/DO) y verificación humana (Cloudflare Turnstile).

  * Sanitización de `notes`.

* **Email**:

  * Plantilla HTML accesible, con resumen ordenado:

    * Encabezado: "Nuevo pedido pendiente".

    * Cliente: nombre, email, teléfono, ciudad.

    * Tabla: Producto | Precio unitario | Cantidad | Total.

    * Totales: parcial y total.

    * Notas.

    * Botones/links: "Ver ficha" (opcional, si luego almacenamos en base de datos).

  * Enviar a todos los correos de `VENDORS`, con `reply-to` al email del cliente.

* **Respuesta**: `{ id: "ORD-xxxx", status: "ok" }`.

* **Logs**: Guardar registro mínimo (KV) con `id`, timestamp y correo(s) enviados.

## Alternativas de Backend

* **Vercel Serverless**: API Route `POST /api/orders` + Resend. Similar a Worker.

* **Supabase Edge Function**: Manejo de secretos y envío de correo (Resend/SMTP).

* **Sin backend (temporal)**: EmailJS desde el front (requiere claves públicas y limita seguridad). No recomendado para producción.

## Cambios en Frontend

* **Servicio**: Actualizar `submitOrder` para apuntar al endpoint del backend y manejar errores.

* **Protección**: Integrar Turnstile (widget discreto) antes de enviar.

* **UI**:

  * Mantener que el paso 6 sólo aparece tras "Comprar" y `canBuy`.

  * Feedback: loading, errores no intrusivos, reintentos.

* **Privacidad**: No guardar PII en `localStorage` más allá del carrito; usar `sessionStorage` para `orderId`.

## Configuración de Vendedores (posterior)

* Recibir tus correos y colocarlos en la variable de entorno del backend (`VENDORS=correo1@...,correo2@...`).

* Opcional: reglas de ruteo (p. ej. por tipo de producto) mediante un pequeño mapa en el backend.

## Verificación

* **Unit**: Test de render del HTML de email con pedidos de ejemplo.

* **Integración**: Llamada al endpoint con `OrderPayload` de prueba; verificar recepción en bandeja.

* **Manual**: Completar Checkout en entorno de pruebas, ver que el paso 6 sólo aparece al pulsar "Comprar", y observar el correo recibido.

## Entregables

* Backend (Worker/Vercel) con endpoint `/orders` funcional y seguro.

* Plantilla de email con branding y resumen.

* Front integrado con el endpoint y Turnstile.

* Documentación breve de variables de entorno: `RESEND_API_KEY`, `VENDORS`, `CORS_ORIGIN`.

## Opcional Futuro

* Persistencia de pedidos (D1/SQLite o Supabase) para lista de pendientes.

* Panel básico de vendedor con estado de pedido y notas.

* Webhooks a WhatsApp/Telegram para alertas rápidas.

¿Confirmas este plan y la opción de backend (Cloudflare Worker + Resend), o prefieres Vercel Serverless? Una vez confirmado, preparo la implementación y dejo listo el punto para incorporar tus correos de vendedores.
