const About = () => {
  return (
    <section className="m-auto flex flex-col items-center justify-center pb-24">
      <div className="px-4 m-auto flex flex-col items-center justify-center gap-6 pt-8 md:flex-row md:gap-20 md:pt-12">
        <p className="text-balance leading-loose tracking-wide md:w-[390px]">
          <span className="text-center text-base font-bold md:tracking-wide">
            ¿Te preguntas para qué podría ser útil esto?&nbsp;
          </span>
          Bueno, imagina que necesitas compartir un archivo con alguien por un
          tiempo limitado, digamos un informe confidencial con un colega o unas
          fotos de un evento que quieres que tus amigos vean durante un período
          corto. Nuestra plataforma te permite hacer precisamente eso, y de
          manera sencilla.
        </p>

        <p className="justify-center text-balance leading-loose tracking-wide md:w-[390px]">
          <span className="font-bold">
            Te brindamos la opción de gestionar la privacidad de tus
            archivos.&nbsp;
          </span>
          Puedes establecerlos como públicos, lo que permite el acceso a
          cualquier persona con el enlace durante el período designado, o como
          privados, lo que requiere una contraseña para acceder. Esta función es
          especialmente valiosa cuando necesitas mantener la confidencialidad de
          cierta información.
        </p>
      </div>
    </section>
  );
};

export default About;
