const Sophrologie = () => {
  return (
    <div className="p-8 bg-white m-4 mt-0 md:m-12 md:mt-0">
      <h1 className="text-4xl text-green text-center md:text-left">
        Sophrologie
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <p className="text-green lg:w-2/3 text-justify mt-10 lg:mt-20">
          La sophrologie est une méthode créée en 1960 par le neuropsychiatre
          Alfonso Caycedo.
          <br />
          <br />
          Elle vise à <b>améliorer le bien-être</b> en aidant les individus à
          prendre
          <b> conscience de leurs émotions</b> et à développer leur confiance en
          eux. <br />
          <br />
          Grâce à des techniques psycho-corporelles telles que les{" "}
          <b>exercices respiratoires et la relaxation dynamique</b>, elle
          favorise l’équilibre entre le corps et l’esprit. La sophrologie
          s’adresse à un large public, des jeunes enfants, aux personnes âgées,
          en passant par les sportifs et les femmes enceintes.
        </p>

        <img
          src="https://sos-sophro.com/wp-content/uploads/2021/01/Illustration-Partie-1.jpg"
          alt="sophrology illustration"
          className="lg:w-1/2 h-auto rounded-lg"
        />
      </div>

      <hr className="m-16"></hr>
      <div className="flex">
        <img
          src="https://s3-us-west-2.amazonaws.com/utsw-patientcare-web-production/original_images/Pregnant_belly_600.jpg"
          alt="pregnant woman"
          className="w-5/12 h-auto m-6 rounded-lg shadow-lg"
        />

        <p className="text-green lg:w-3/5 text-justify ml-4 mr-4 text-green">
          Elle permet à chacun de{" "}
          <b>devenir acteur de son épanouissement personnel</b>
          en prenant conscience de ses ressentis et accédant à ses propres
          ressources. <br />
          <br />
          Bien que ce ne soit pas une méthode médicale, ses bienfaits peuvent
          aider à gérer des problématiques comme le{" "}
          <b>stress, les troubles du sommeil ou les phobies…</b>
          <br />
          <br />
          La sophrologie offre une belle opportunité de mieux se connaitre et
          d'améliorer son quotidien en adoptant un nouveau regard sur soi-même
          et sur le monde.
        </p>
      </div>
      <p className="text-lg text-green"></p>
    </div>
  );
};

export default Sophrologie;
