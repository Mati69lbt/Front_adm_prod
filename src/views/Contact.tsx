const Contact = () => {
  return (
    <div className="min-h-52 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Contacto</h1>
        <p className="mb-4 text-center">
          Hola, soy Matías Delgado, desarrollador full stack. <br />
          Vivo en Paraná, Entre Ríos, Argentina.
        </p>
        <p className="mb-4 text-center">
          Para contactarme, puedes enviarme un correo a:
        </p>
        <p className="text-center text-lg font-semibold mb-8">
          <a
            href="mailto:mati69_lbt@hotmail.com"
            className="text-blue-600 hover:underline"
          >
            mati69_lbt@hotmail.com
          </a>
        </p>
        <p className="text-center text-gray-600">
          También puedes encontrar más información sobre mí en mi{" "}
          <a
            href="https://mdelgado.netlify.app/"
            className="text-blue-600 hover:underline"
          >
            portfolio
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Contact;
