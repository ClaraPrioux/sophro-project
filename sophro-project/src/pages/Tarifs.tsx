const Tarifs = () => {
  return (
    <div className="p-8 bg-white m-4 mt-0 md:m-12 md:mt-0 text-green">
      <h1 className="text-5xl text-green text-center mb-6 md:text-left font-dancing-script">
        Tarifs
      </h1>
      <p className="text-lg mb-8 italic text-justify">
        Les séances individuelles ont lieu au cabinet (adresse dans la{" "}
        <a href="/contact" className="underline">
          page contact
        </a>
        ). Les séances en groupe se déroulent selon vos besoins et le lieu sera
        défini ensemble, contactez-moi pour organiser.
      </p>

      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Tarifs</h2>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Type de séance
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Tarif
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left py-3 px-4">Adulte (1h)</td>
              <td className="text-left py-3 px-4">50€/pers</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="text-left py-3 px-4">Enfant (30-45min)</td>
              <td className="text-left py-3 px-4">35€/pers</td>
            </tr>
            <tr>
              <td className="text-left py-3 px-4">Groupe (3-12 personnes)</td>
              <td className="text-left py-3 px-4">15€/pers</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Forfaits Groupes
        </h2>
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Durée
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Tarif
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left py-3 px-4">Trimestre (10 séances)</td>
              <td className="text-left py-3 px-4">130€</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="text-left py-3 px-4">Année (30 séances)</td>
              <td className="text-left py-3 px-4">300€</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-gray-100 mt-14 p-4">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8 m-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
          <h2 className="text-xl text-green text-center font-bold m-2 mb-6 md:text-left">
            Moyens de paiement
          </h2>
        </div>
        <p className="">
          Vous pouvez régler les séances en espèces, par chèque ou par carte
          bancaire.
        </p>
      </div>
    </div>
  );
};

export default Tarifs;
