export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-md">
        
        {/* Tarjeta DOMISUR */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/* Barra superior tienda */}
          <div className="absolute -top-5 left-6 bg-orange-500 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
            <span className="text-lg">🏪</span>
            <span className="font-semibold">Minimarket DOMISUR</span>
          </div>

          {/* Imagen producto */}
          <div className="pt-14 px-6">
            <div className="bg-gray-100 rounded-2xl flex justify-center p-6">
              <img
                src="https://i.imgur.com/fHyEMsl.png"
                alt="Jugo Hit"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>

          {/* Info producto */}
          <div className="text-center mt-4 px-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Jugo Hit
            </h2>
            <p className="text-green-600 text-2xl font-bold">$2.500</p>
          </div>

          {/* Footer acciones */}
          <div className="flex justify-between items-center px-6 py-6">
            <div className="flex gap-4 text-gray-500">
              <span>❤️ 24</span>
              <span>👎 2</span>
            </div>

            <button className="bg-blue-600 text-white w-14 h-14 rounded-xl text-2xl shadow-lg">
              +
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}