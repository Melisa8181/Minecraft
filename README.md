# ⛏️ Minecraft Didactics

Un sitio web interactivo y educativo inspirado en el universo de Minecraft, diseñado para jugar, simular compras de merchandising y aprender sobre las mecánicas del juego. 

🔗 **[Ver Deploy en Vivo](https://melisa8181.github.io/Minecraft/)**

---

## 📝 Descripción

**Minecraft Didactics** es un proyecto web interactivo desarrollado originalmente en 2022 como práctica técnica integradora. El sitio está estructurado en tres secciones principales:

*   **Sección de Juegos:** Minijuegos interactivos que desafían el conocimiento del usuario.
*   **Tienda de Merchandising:** Una experiencia de e-commerce simulada donde se pueden explorar productos, añadir o restar cantidades al carrito, calcular el total dinámicamente y vaciar el carrito.
*   **Sección de Aprendizaje (Wiki):** Un acordeón interactivo de preguntas y respuestas frecuentes sobre el universo de Minecraft.

> 💡 *Nota de desarrollo:* Este proyecto fue rescatado y optimizado recientemente para pulir detalles visuales, mejorar la legibilidad y corregir la distribución de elementos en la sección "Learn More".

---

## 🛠️ Tecnologías Utilizadas

*   **HTML5** – Estructuración semántica de las secciones de juego, tienda y wiki.
*   **CSS3** – Estilos personalizados, animaciones de rotación, sistema de rejillas (CSS Grid) y diseño adaptativo (Media Queries).
*   **JavaScript (Vanilla JS)** – Lógica del carrito de compras, dinamismo de los juegos y control de estado del acordeón de preguntas.
*   **JSON (APIs locales)** – Simulación de base de datos para desacoplar el contenido de la estructura:
    *   `api.json`: Contiene los datos, precios e imágenes del merchandising.
    *   `core_question.json`: Almacena el banco de preguntas y respuestas para el juego de preguntas (Quiz).

*(Nota: Aunque el proyecto cuenta con configuraciones iniciales orientadas a Firebase, actualmente la persistencia y consulta de datos se maneja de forma local a través de los archivos JSON para garantizar velocidad y portabilidad).*

---

## 📸 Capturas de Pantalla

| Vista General (Home) | Tienda y Carrito | Sección Learn More (Wiki) |
| :---: | :---: | :---: |
| <img width="1024" height="1277" alt="Image" src="https://github.com/user-attachments/assets/2a193d97-b14a-4370-8398-18093dca8602" /> | <img width="1024" height="1094" alt="Image" src="https://github.com/user-attachments/assets/ffb12edd-bd22-481f-989b-b1a602778beb" /> | <img width="1024" height="1796" alt="Image" src="https://github.com/user-attachments/assets/86558d1a-7587-49c3-a859-c1c4cc4b668b" /> |

---

## ⚙️ Instalación y Ejecución Local

Si querés probar este proyecto en tu entorno local, seguí estos pasos:

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/melisa8181/Minecraft.git](https://github.com/melisa8181/Minecraft.git)
   -> Entrá a la carpeta del proyecto:
       cd minecraft-didactics
   -> Abrí el archivo index.html en tu navegador (se recomienda usar la extensión Live Server en VS Code para evitar problemas de CORS al cargar los archivos .json locales).

## 🚧 Estado del Proyecto e Iteraciones Futuras
El proyecto se encuentra completamente funcional, aunque actualmente está bajo un proceso de mantenimiento estético:

[x] Rediseño y optimización del contraste en la sección "Learn More" (Wiki).

[x] Integración de componentes visuales estilo pixel-art en los bloques de contenido.

[ ] Próximo paso: Optimizar las Media Queries de CSS para asegurar que el diseño se adapte de forma idéntica en pantallas de escritorio de alta resolución (monitores grandes) al igual que lo hace en pantallas de notebooks.
