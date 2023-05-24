import React, { useState } from "react";

function Layout() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Slider Bar */}
      <div
        className={`w-1/6 bg-gray-800 text-white ${
          isSliderOpen ? "hidden" : "block"
        }`}
      >
        {/* Contenido del Slider Bar */}
        <ul>
          <li className="p-4">Opción 1</li>
          <li className="p-4">Opción 2</li>
          <li className="p-4">Opción 3</li>
        </ul>
      </div>

      {/* Contenido Principal */}
      <div
        className={`flex-1 ${
          isSliderOpen ? "w-full" : "w-5/6"
        } transition-all duration-300`}
      >
        {/* Barra de Navegación */}
        <nav className="bg-gray-200 p-4">
          <button className="bg-gray-400 p-2 rounded-md" onClick={toggleSlider}>
            Abrir Slider
          </button>
        </nav>

        {/* Contenido */}
        <div className="p-4">
          <h1 className="text-3xl font-bold">Contenido Principal</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            luctus nisi non orci finibus iaculis. Curabitur vitae ullamcorper
            neque, at scelerisque urna. Etiam nec blandit neque. Vivamus vel
            suscipit ex. Suspendisse potenti. Mauris posuere erat felis, vitae
            pulvinar elit semper sed. Duis tincidunt ligula in tellus fermentum,
            sed consectetur metus molestie. Cras euismod felis eget metus
            rhoncus aliquet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Layout;
