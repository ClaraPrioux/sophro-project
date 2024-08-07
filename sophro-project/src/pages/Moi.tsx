import photo from "../assets/photo.jpeg";
const Moi = () => {
  return (
    <div className="p-8 bg-white m-4 mt-0 md:m-12 md:mt-0 flex flex-col">
      <h1 className="text-4xl text-green text-center md:text-left mb-6">
        Qui suis-je ?
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <img
          src={photo}
          alt="photo de rosy"
          className="w-2/5 h-2/5 rounded-full"
        ></img>
        <p className="w-full md:w-7/12 md:ml-8 md:m-0 mt-6 mb-6 text-justify">
          👩🏼‍🏫 En tant qu'<b>enseignante</b> ayant travaillé avec des jeunes et
          des enfants, j'ai acquis une compréhension profonde des besoins
          émotionnels et psychologiques des plus jeunes. Cette expérience m'a
          permis de développer des compétences essentielles pour les accompagner
          dans leur épanouissement. <br />
          <br />
          🌳 <b>Ma passion pour le mieux-être et la relation d'aide</b> m'a
          également conduite à explorer d'autres métiers en lien avec les
          autres, renforçant ainsi ma légitimité en tant que sophrologue. Je me
          suis donc orienté vers la Sophrologie.
          <br />
          <br />
          🎓 Après une <b>formation</b> de deux ans au Centre de Formation des
          Sophrologues Professionnels (C.F.S.P.) J'ai donc obtenu le{" "}
          <b>diplôme de Sophrologue</b>, titre reconnu par l’état et certifié
          par le Répertoire National des Compétences Professionnelles (R.N.C.P.)
          et je suis également certifiée par la SFS (Société Française de
          Sophrologie)
        </p>
      </div>
    </div>
  );
};

export default Moi;
