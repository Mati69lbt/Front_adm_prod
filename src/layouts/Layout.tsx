import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header className="bg-slate-800">
        <div className="mx-auto max-w-6xl py-10 pl-4 sm:pl-6">
          <h1 className="text-4xl font-extrabold text-white">
            Administrador de Productos de Computación
          </h1>
          <nav className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="productos" className="text-white hover:text-gray-300">
              Listado
            </Link>
            <Link
              to="productos/nuevo"
              className="text-white hover:text-gray-300"
            >
              Nuevo Producto
            </Link>
            <Link to="docs" className="text-white hover:text-gray-300">
              Docs
            </Link>
            <Link to="contacto" className="text-white hover:text-gray-300">
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <main className="mt-4 mx-auto max-w-6xl p-4 bg-white shadow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
