import arbre from "../assets/arbre.png";

const Accueil = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-center m-4 mt-0 md:m-12 md:mt-0">
      <div className="flex flex-col m-8 md:pl-4">
        <h1 className="text-4xl pb-6 text-green text-center md:text-left font-dancing-script text-5xl">
          Rosy Prioux Sophrologue
        </h1>
        <p className="text-green">
          Je suis ravie de vous accueillir dans cet espace dédié à votre
          <b> mieux-être</b> et celui de vos enfants. En individuel ou en
          collectif !
          <br />
          <br />
          Ensemble faisons un pas vers{" "}
          <b>un quotidien plus apaisé et harmonieux</b> pour vous et vos enfants
          !
        </p>
        <button className="mt-10 bg-green text-white p-3 w-32 rounded mx-auto md:mx-0">
          <a href="/contact">Prendre rdv</a>
        </button>
      </div>
      <img src={arbre} alt="arbre"></img>
    </div>
  );
};

export default Accueil;
