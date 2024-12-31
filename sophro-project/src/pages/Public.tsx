const Public = () => {
  return (
    <div className="p-8 bg-white m-4 mt-0 md:m-12 md:mt-0 text-green">
      <h1 className="text-5xl text-green text-center mb-6 md:text-left font-dancing-script">
        Séances adaptées à chaque public
      </h1>
      <div className="container mx-auto lg:p-6 space-y-8 text-green">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
          {/* Boîte adulte */}
          <div className="flex flex-col items-center shadow-md rounded-xl lg:p-6 p-3 pb-5 bg-adulteGreen w-full">
            <h3 className="text-3xl font-bold mb-4 font-dancing-script">
              Adultes
            </h3>
            <ul className="text-sm space-y-6">
              <li className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="pt-1">
                  <b>Réduire le stress et l'anxiété</b> avec des exercices de
                  relaxation physique et mentale.
                </p>
              </li>

              <li className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p className="pt-1">
                  <b>Améliorer votre sommeil</b> en adoptant des habitudes
                  saines et une meilleure conscience corporelle.
                </p>
              </li>
              <li className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>

                <p className="pt-1">
                  Renforcer votre <b>confiance en soi</b> et mieux gérer les
                  émotions pour un bien-être durable.
                </p>
              </li>
            </ul>
          </div>

          {/* Boîte enfant */}
          <div className="flex flex-col items-center shadow-md rounded-xl lg:p-6 p-3 pb-5 bg-enfantPurple w-full">
            <h3 className="text-3xl font-bold mb-4 font-dancing-script">
              Enfants & Adultes
            </h3>
            <ul className="text-sm space-y-6">
              <li className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <p>
                  <b>Gérer les émotions</b> et les frustrations pour une
                  expression émotionnelle saine.
                </p>
              </li>

              <li className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>
                  <b>Améliorer le sommeil</b> avec des rituels et une meilleure
                  gestion de la fatigue.
                </p>
              </li>

              <li className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                <p>
                  <b>Renforcer la confiance</b> en soi et améliorer la gestion
                  des émotions.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Boîte femmes enceintes */}
        <div className="flex flex-col items-center shadow-md rounded-xl lg:p-6 p-4 pb-5 bg-femmeGreen w-full text-justify">
          <h3 className="text-3xl font-bold mb-4 font-dancing-script">
            Futures mamans
          </h3>
          <ul className="text-sm space-y-8">
            <li className="flex space-x-2">
              <p className="pt-1">
                <b>Gestion du stress et des émotions</b>
                <ul className="mt-2 space-y-2">
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.72 5.47a.75.75 0 0 1 1.06 0L9 11.69l3.756-3.756a.75.75 0 0 1 .985-.066 12.698 12.698 0 0 1 4.575 6.832l.308 1.149 2.277-3.943a.75.75 0 1 1 1.299.75l-3.182 5.51a.75.75 0 0 1-1.025.275l-5.511-3.181a.75.75 0 0 1 .75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 0 0-3.528-5.617l-3.809 3.81a.75.75 0 0 1-1.06 0L1.72 6.53a.75.75 0 0 1 0-1.061Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p>
                      Réduction de l'anxiété et des angoisses : Conscience
                      corporelle, respiration profonde, relaxation musculaire,
                      visualisation positive.
                    </p>
                  </li>
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p>
                      Amélioration de la qualité du sommeil : Identifier les
                      causes des troubles du sommeil, relaxation et rituel du
                      coucher.
                    </p>
                  </li>
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm-4.34 7.964a.75.75 0 0 1-1.061-1.06 5.236 5.236 0 0 1 3.73-1.538 5.236 5.236 0 0 1 3.695 1.538.75.75 0 1 1-1.061 1.06 3.736 3.736 0 0 0-2.639-1.098 3.736 3.736 0 0 0-2.664 1.098Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <p>
                      Gestion des émotions : Gérer les fluctuations hormonales
                      et vivre les émotions sereinement.
                    </p>
                  </li>
                </ul>
              </p>
            </li>
            <li className="flex space-x-2">
              <p className="pt-1">
                <b>Préparation à l'accouchement</b>
                <ul className="mt-2 space-y-2">
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p>
                      Gestion de la douleur : Techniques de respiration,
                      relaxation et visualisation pour mieux gérer la douleur.
                    </p>
                  </li>
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p>
                      Préparation mentale : Renforcer la confiance en soi et
                      aborder l'accouchement sereinement.
                    </p>
                  </li>
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p>
                      Création du lien mère-enfant : Visualisation et relaxation
                      pour renforcer le lien avec le bébé.
                    </p>
                  </li>
                </ul>
              </p>
            </li>
            <li className="flex space-x-2 ">
              <p className="pt-1">
                <b>Bien-être physique</b>
                <ul className="mt-2 space-y-2">
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <p>
                      Soulagement des douleurs et inconforts : Soulager les
                      douleurs de dos, tensions musculaires et nausées grâce à
                      des exercices de relaxation.
                    </p>
                  </li>
                  <li className="flex space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>

                    <p>
                      Amélioration de la conscience corporelle : Écoute du corps
                      pour mieux vivre les transformations physiques de la
                      grossesse.
                    </p>
                  </li>
                </ul>
              </p>
            </li>
          </ul>
          <p className="italic mt-4 text-justify text-sm">
            Il est important de noter que la sophrologie ne se substitue pas au
            suivi médical de la grossesse. Elle est une approche complémentaire
            qui apporte un soutien précieux aux femmes enceintes.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Public;
