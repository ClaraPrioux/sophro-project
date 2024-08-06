import photo from "../assets/photo.jpeg";
const Moi = () => {
  return (
    <div className="p-8 bg-white m-4 mt-0 md:m-12 md:mt-0">
      <h1 className="text-4xl text-green text-center md:text-left mb-6">
        Qui suis-je ?
      </h1>
      <div className="flex justify-center justify-between">
        <p className="w-7/12">
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
          🎓 Après une formation de deux ans au Centre de Formation des
          Sophrologues Professionnels (C.F.S.P.) J'ai donc obtenu le diplôme de
          Sophrologue (titre reconnu par l’état et certifié par le Répertoire
          National des Compétences Professionnelles (R.N.C.P.) Sophrologue
          certifiée par la SFS (Société Française de Sophrologie)
        </p>
        <img
          src={photo}
          alt="photo de rosy"
          className="w-2/5 h-2/5 rounded-full"
        ></img>
      </div>
      {/* <img
        src="https://www.association-dutempspoursoi.fr/wp-content/uploads/elementor/thumbs/Arbre-site-oumx7trmo79qq91iyyr6mwq1u6zwkxglnt84te110w.jpg"
        alt="arbre-sophro"
        className="w-2/12"
      ></img> */}
    </div>
  );
};

export default Moi;
