const Contact = () => {
  return (
    <div className="p-8 bg-white m-4 mt-0 md:m-12 md:mt-0 text-green">
      <h1 className="text-5xl text-green text-center mb-6 md:text-left font-dancing-script">
        Contact
      </h1>
      <p className="text-lg mb-8 italic text-justify">
        Pour réserver une séance, vous pouvez me contacter par message, email,
        téléphone ou directement via WhatsApp en cliquant sur le bouton
        Réserver. N’hésitez pas à m’envoyer un message si vous souhaitez d’abord
        obtenir des renseignements.
      </p>
      <div className="container mx-auto p-6">
        {/* Première boîte : Réserver une séance */}
        <div className="bg-white shadow-md rounded-lg p-12 mb-6 text-center md:w-2/3 mx-auto  border-2 border-lightGreen">
          <h2 className="text-2xl font-bold mb-6">Réserver une séance</h2>
          <a
            href="https://wa.me/+33689625259"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 bg-green text-white p-3 w-2/3 rounded mx-auto md:mx-0"
          >
            Réserver
          </a>
        </div>

        {/* Deuxième ligne avec trois boîtes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Boîte Email */}
          <div className="flex flex-col items-center shadow-md rounded-lg p-6  border-2 border-lightGreen">
            <a></a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
              />
            </svg>
            <p className="text-lg">rosy.prioux@gmail.com</p>{" "}
            {/* Remplacez par votre adresse email */}
          </div>

          {/* Boîte Téléphone */}
          <div className="flex flex-col items-center shadow-md rounded-lg p-6  border-2 border-lightGreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p className="text-lg m-2">06 89 62 52 59</p>{" "}
            {/* Remplacez par votre numéro de téléphone */}
          </div>

          {/* Boîte Localisation */}
          <div className="flex flex-col items-center shadow-md rounded-lg p-6  border-2 border-lightGreen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8 mb-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-lg text-center">
              1 Pl. de la mairie, 14570 Saint-Remy
            </p>{" "}
            {/* Remplacez par votre adresse */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
