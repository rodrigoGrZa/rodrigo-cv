# rodrigo-cv
Este proyecto es una página web personal para mostrar mi Currículum Vitae, desarrollada utilizando Astro, un moderno framework para la construcción de sitios web rápidos y eficientes.

🚀 Demo
Puedes ver la página en vivo aquí.

🎯 Objetivo
El objetivo principal de este proyecto es proporcionar una plataforma interactiva, visualmente atractiva y accesible para compartir mi experiencia laboral, habilidades y logros de manera profesional.

🛠️ Características
Diseño Responsivo: Optimizado para dispositivos móviles, tablets y escritorio.
Rendimiento Rápido: Gracias al enfoque de Astro en contenido estático.
Componentes Modulares: Facilita la adición o modificación de secciones como "Sobre mí", "Experiencia", "Proyectos" y "Contacto".
Estilizado Moderno: Usando tecnologías como Tailwind CSS o CSS personalizado.
Formulario de Contacto: Integración sencilla para recibir mensajes.
SEO Optimizado: Metadatos estructurados para mejorar la visibilidad en buscadores.
🛠️ Tecnologías Utilizadas
Astro: Framework principal.
Tailwind CSS (o CSS personalizado): Para estilos.
Markdown: Para contenido estático en algunas secciones.
JavaScript/TypeScript: Para funcionalidad adicional.
📂 Estructura del Proyecto
csharp
Copiar código
📦 mi-cv-web
├── 📂 public         # Recursos estáticos (imágenes, fuentes, etc.)
├── 📂 src
│   ├── 📂 components # Componentes reutilizables
│   ├── 📂 layouts    # Estructuras de página
│   ├── 📂 pages      # Páginas del sitio web
│   ├── 📂 styles     # Archivos de estilo
│   ├── 📂 data       # Contenido estructurado (opcional)
└── astro.config.mjs  # Configuración de Astro
🔧 Instalación y Configuración
Clonar el repositorio:

bash
Copiar código
git clone https://github.com/usuario/mi-cv-web.git
cd mi-cv-web
Instalar dependencias:

bash
Copiar código
npm install
Ejecutar el proyecto en modo desarrollo:

bash
Copiar código
npm run dev
La aplicación estará disponible en http://localhost:3000.

Construir para producción:

bash
Copiar código
npm run build
Los archivos generados se almacenarán en la carpeta dist.

📬 Contribuciones
Aunque este proyecto está orientado a mi perfil personal, las ideas y sugerencias siempre son bienvenidas. Siéntete libre de abrir un issue o realizar un pull request.

📄 Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

📝 Notas
Si deseas adaptar este proyecto para tu propio CV, puedes:

Modificar los datos en los archivos correspondientes de src/data (si los usas).
Personalizar el estilo en src/styles.
Cambiar las imágenes en public.
