# Proyecto CRUD para Artículos de Computación

Este proyecto es una aplicación CRUD para gestionar artículos de computación, desarrollada con **React** y utilizando una moderna pila tecnológica que incluye **TypeScript**, **Vite** y **TailwindCSS**. La aplicación permite crear, leer, actualizar y eliminar artículos, proporcionando una interfaz de usuario intuitiva y eficiente.

## Tecnologías Principales

- **React**: Para construir la interfaz de usuario.
- **TypeScript**: Para un desarrollo tipado y más robusto.
- **Vite**: Como herramienta de construcción y servidor de desarrollo rápido.
- **TailwindCSS**: Para estilos consistentes y personalizados.
- **Axios**: Para manejar las solicitudes HTTP hacia el backend.
- **React Router DOM**: Para la navegación dentro de la aplicación.
- **Valibot**: Para la validación de esquemas de datos.
- **ESLint**: Para asegurar la calidad del código con reglas de linting.

Esta aplicación está diseñada para ser eficiente y fácil de usar, con un enfoque en la organización y gestión de inventario de productos de computación. Está en constante desarrollo, con planes para agregar nuevas características y optimizar su rendimiento.

## Scripts

- **`dev`**: Inicia el servidor de desarrollo con Vite.
  
- **`build`**: Compila el código TypeScript y genera la versión de producción.

- **`lint`**: Ejecuta ESLint para analizar el código y verificar su calidad.

- **`preview`**: Sirve la aplicación construida para una vista previa local.

## Estructura del Proyecto

```plaintext
src/
├── components/
│   ├── ErrorMsg.tsx
│   └── ProductDetails.tsx
├── layouts/
│   └── Layout.tsx
├── services/
│   └── ProductService.ts
├── types/
│   └── index.ts
├── views/
│   ├── Contact.tsx
│   ├── EditProducts.tsx
│   ├── Home.tsx
│   ├── NewProduct.tsx
│   └── Products.tsx
├── index.css
├── main.tsx
├── router.tsx
└── vite-env.d.ts
