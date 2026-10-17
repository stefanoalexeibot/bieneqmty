# Plataforma Academy BieneqMty

## Objetivo

Construir una experiencia premium y coherente para descubrir programas, crear una cuenta, pagar, entrar al aula y avanzar por lecciones. La estructura visual está en el sitio; los proveedores de identidad, pagos y video aún no están conectados.

## Recorrido del alumno

1. **Descubrir:** portada de Academy, catálogo y ficha pública de cada curso.
2. **Elegir:** botón de inscripción abre el resumen del programa.
3. **Crear cuenta o ingresar:** el curso elegido se conserva al pasar por registro o inicio de sesión.
4. **Revisar y pagar:** resumen del programa y futuro Stripe Checkout alojado por Stripe. El precio y los términos deben venir de la configuración comercial, nunca del navegador.
5. **Confirmar inscripción:** el webhook firmado de Stripe registra el pago y habilita la matrícula. La página de éxito solo informa; por sí sola no otorga acceso.
6. **Aprender:** panel de alumno, cursos inscritos, avance, siguiente lección, índice de módulos y reproducción.
7. **Video seguro:** el servidor verifica matrícula y genera un token de reproducción de vida corta para la lección solicitada.

## Rutas preparadas

| Ruta | Uso |
| --- | --- |
| `/academia` | Portada pública |
| `/academia/cursos` | Catálogo |
| `/academia/cursos/[slug]` | Programa, objetivos y módulos |
| `/academia/checkout/[slug]` | Resumen e inicio de inscripción |
| `/academia/registro?curso=[slug]` | Crear cuenta conservando el curso |
| `/academia/ingresar?curso=[slug]` | Iniciar sesión y continuar al curso |
| `/academia/mi-aprendizaje` | Panel del alumno |
| `/academia/aula/[slug]/[moduleSlug]/[lessonId]` | Lección, reproductor y navegación |

Las rutas de registro, pago, panel y aula son vistas de preparación. Los formularios y acciones están desactivados y muestran un aviso; no se guarda información ni se procesa dinero en esta versión.

## Proveedores propuestos

- **Supabase Auth + Postgres:** identidad, sesión SSR en cookies, perfiles, matrículas y avance. Aplicar Row Level Security para que cada alumno solo consulte su perfil, compras y progreso. La guía oficial recomienda clientes SSR para Next.js y cookies de sesión.
- **Stripe Checkout:** pago alojado, iniciado en servidor con un `Price ID` definido por BieneqMty. El backend habilita el curso solo después de verificar eventos webhook; contemplar pago completado y métodos de pago asíncronos.
- **Mux Video:** alojamiento y streaming HLS. Las lecciones de pago usarán playback IDs con política `signed`; un endpoint del servidor valida la matrícula antes de emitir un token de expiración corta. No publicar URLs maestras ni llaves en el navegador.

Estas opciones son recomendación técnica para el proyecto, no cuentas ya creadas ni servicios activos. Supabase y Mux son reemplazables si BieneqMty ya tiene proveedores contratados.

## Modelo de datos inicial

- `profiles`: `id` ligado a `auth.users`, nombre y fechas.
- `courses`, `modules`, `lessons`: catálogo y orden del currículo; pueden comenzar en el código y migrar a tablas cuando el equipo necesite editar cursos desde un panel.
- `course_prices`: `course_slug`, Stripe `price_id`, moneda, activo; solo lectura desde el cliente.
- `enrollments`: alumno, curso, estado (`pending_payment`, `active`, `refunded`, `revoked`), sesión de Stripe y periodo de acceso si aplica.
- `stripe_events`: ID de evento único para idempotencia y auditoría; escritura exclusiva del servidor.
- `lesson_progress`: alumno, curso, módulo, lección, estado, segundos vistos y fechas; índice único alumno + lección.
- `video_assets`: lección, proveedor, playback ID firmado y estado del asset. Las credenciales de API y la llave privada de firma viven solo en secretos del servidor.

## Criterios de seguridad antes de abrir inscripciones

1. No aceptar precio, moneda, estado de pago ni permisos desde campos del navegador.
2. Verificar firma de Stripe y deduplicar el ID de cada evento webhook.
3. No habilitar matrícula desde una URL de retorno; usar los eventos confirmados por Stripe.
4. Proteger consultas y escrituras con políticas RLS y validar autorización también en el servidor.
5. Comprobar matrícula activa antes de emitir tokens de video.
6. Definir política de privacidad, términos, cancelaciones, reembolsos, soporte y vigencia del acceso antes de cobrar.

## Próximos pasos de integración

1. Crear el proyecto Supabase y definir el esquema inicial, RLS y plantillas de correo.
2. Definir precios, moneda, modalidad de acceso, política de reembolso y textos comerciales.
3. Configurar Stripe en modo de prueba, Price IDs, URLs de retorno y webhook.
4. Crear el entorno Mux, cargar masters, asignar cada playback ID y guardar su correspondencia con la lección.
5. Conectar autenticación SSR, rutas protegidas, Checkout Session y webhook.
6. Conectar el endpoint de playback firmado, persistencia de progreso y pruebas en staging.
7. Migrar a producción y cambiar credenciales solo tras completar revisión comercial y profesional del currículo.

## Estado de integración

`src/lib/academy-platform.ts` contiene los tipos de dominio y marca de forma explícita los tres proveedores como `not_configured`. No existen formularios activos, cobros reales, cuentas reales de alumnos ni contenido de video privado en el estado actual.
