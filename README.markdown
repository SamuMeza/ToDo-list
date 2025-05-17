# To Do Lista (con POO)

Aplicación web de lista de tareas implementada con Programación Orientada a Objetos (POO) en JavaScript.

## Características Principales

### 1. Interfaz de Usuario
- Diseño responsivo y moderno
- Formulario de entrada de tareas con validación
- Lista dinámica de tareas con animaciones
- Indicadores visuales para tareas completadas
- Fecha y hora de creación de cada tarea
- Tema claro y oscuro
- Soporte para emojis y caracteres especiales

### 2. Funcionalidades
- Agregar nuevas tareas con teclado o botón
- Marcar tareas como completadas/pendientes
- Eliminar tareas individualmente
- Validación de entrada (no permite tareas vacías)
- Registro automático de fecha y hora de creación
- Indicador visual de tareas completadas
- Animaciones suaves en interacciones
- Soporte para teclado (Enter para agregar)

## Estructura del Proyecto

### Directorios
- `/src`: Código fuente principal
  - `Task.js`: Clase principal para manejo de tareas
  - `index.js`: Lógica principal de la aplicación
- `/assets`: Recursos estáticos
- `/docs`: Documentación y capturas de pantalla
- `/Styles`: Estilos CSS

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Programación Orientada a Objetos

## Clases Principales

### `Task`
- **Propiedades:**
  - `name`: Nombre de la tarea

- **Métodos:**
  - `getName()`: Retorna el nombre de la tarea

## Funcionalidad Detallada
1. **Creación de Tareas:**
   - El usuario ingresa el nombre de la tarea
   - Se valida que el campo no esté vacío
   - Se crea una nueva instancia de `Task`
   - Se añade a la lista con fecha y hora de creación

2. **Gestión de Tareas:**
   - Cada tarea tiene un checkbox para marcar como completada
   - Botón de eliminación para cada tarea
   - Cambio de estilo visual al marcar como completada
   - Se mantiene el orden de creación de las tareas

3. **Interactividad:**
   - Posibilidad de agregar tareas presionando Enter
   - Mensajes de alerta para entradas inválidas
   - Actualización dinámica de la interfaz

## Uso

1. **Instalación**
   - No requiere instalación
   - Abrir el archivo `index.html` en un navegador moderno

2. **Operaciones Básicas**
   - Ingresar texto en el campo de entrada
   - Presionar "Agregar Tarea" o Enter
   - Marcar checkbox para completar tareas
   - Usar el botón de eliminar para remover tareas

3. **Atajos de Teclado**
   - Enter: Agregar tarea
   - Tab: Navegar entre elementos
   - Espacio: Marcar/desmarcar tareas completadas

## Mejores Prácticas Implementadas
- Separación clara de responsabilidades
- Código modular y reutilizable
- Validación de entrada
- Manejo de eventos eficiente
- Uso de ES6+ (Classes, Modules)
- Diseño responsivo

## Consideraciones
- La aplicación no persiste los datos entre recargas del navegador
- Se recomienda usar un navegador moderno que soporte ES6+
- La aplicación es completamente funcional en modo offline

## Autor
Samuel Meza
