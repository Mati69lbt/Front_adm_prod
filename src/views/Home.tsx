const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <p className="text-lg text-gray-700 mb-4 text-justify">
        El proyecto
        <span className="font-semibold">
          {" "}
          "Administrador de Productos de Computación"{" "}
        </span>
        es una aplicación integral que permite gestionar productos de
        computación de manera eficiente y robusta. A lo largo del desarrollo del
        proyecto, se cubren diversos aspectos clave del desarrollo backend y
        frontend, utilizando tecnologías modernas como React, Node.js, Express,
        y TypeScript. El desarrollo está estructurado en varias fases, cada una
        abordando un conjunto de funcionalidades esenciales.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Fase 1: Desarrollo del Backend
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        El proyecto comienza con el desarrollo del backend utilizando Node.js y
        Express. En esta fase se cubren los fundamentos de las
        <span className="font-semibold"> REST API's </span>y el stack PERN
        (Postgres, Express, React, Node.js). Se inician los primeros pasos con
        <span className="font-semibold"> Node.js y Express </span>
        para construir un backend sólido, incluyendo la configuración de
        <span className="font-semibold"> TypeScript y Nodemon </span>
        para facilitar el desarrollo. Se establece el servidor con Express, se
        manejan diferentes métodos HTTP, y se prueban con ThunderClient y
        Postman. La fase también abarca la separación de rutas en archivos
        dedicados, la conexión de la aplicación a una base de datos, y la
        creación de modelos y funciones para manejar productos. Además, se
        implementa middleware en Express y se crean endpoints para
        <span className="font-semibold">
          {" "}
          obtener, actualizar y eliminar productos.
        </span>
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Fase 2: Testing de la API
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        asegurar la calidad del proyecto. Se introducen las herramientas de
        <span className="font-semibold"> testing de API's </span>y se crean los
        primeros tests para validar las funcionalidades básicas. Se realizan
        pruebas con Supertest para validar las URLs y se implementan
        validaciones para evitar falsos positivos. Se asegura que los precios de
        los productos sean válidos y se realizan pruebas para la limpieza de la
        base de datos después de cada test. Además, se prueban todos los
        endpoints del backend para garantizar su correcto funcionamiento.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Fase 3: Documentación de la API
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        Con el backend desarrollado y probado, se procede a documentar la API
        utilizando Swagger. Esta fase incluye una introducción a la
        <span className="font-semibold"> documentación de API's </span>y la
        instalación de Swagger en el proyecto. Se documentan todos los endpoints
        creados, desde la creación de productos hasta su eliminación, asegurando
        que cualquier desarrollador o usuario final pueda comprender cómo
        interactuar con la API. Además, se personaliza la documentación
        ajustando el logotipo de Swagger.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Fase 4: Desarrollo del Frontend
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        La cuarta fase se enfoca en la construcción del frontend utilizando
        React. Se comienza con la creación del proyecto y la configuración de
        Tailwind para el diseño. Luego, se implementa el enrutamiento con React
        Router y se trabaja en la estructura del layout. En esta fase se
        desarrollan componentes reutilizables, se manejan formularios para la
        edición y creación de productos, y se implementan funcionalidades
        avanzadas como la edición desde la URL y la validación con ZOD. También
        se desarrollan componentes para manejar la disponibilidad de productos y
        se integra el frontend con el backend para una experiencia de usuario
        fluida.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-6">
        Fase 5: Deployment
      </h2>
      <p className="text-lg text-gray-700 mb-4 text-justify">
        Finalmente, se lleva a cabo el deployment de la aplicación. Se realiza
        un checklist de deployment que incluye ajustes finales al backend y la
        subida del servidor a GitHub. Luego, se conecta el servidor a Render y
        se despliega el frontend en Vercel, completando el ciclo de desarrollo y
        asegurando que la aplicación esté disponible y accesible para los
        usuarios finales.
      </p>
      <br />
      <p>
        Este proyecto proporciona una guía completa para desarrollar una
        aplicación de administración de productos de computación, abordando
        todos los aspectos clave desde el desarrollo inicial del backend hasta
        el despliegue final, asegurando una aplicación robusta, bien documentada
        y lista para producción.
      </p>
    </div>
  );
};

export default Home;
