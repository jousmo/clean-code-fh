(() => {
  function getMovieById(id: string) {
    console.log({ id });
  }

  function getMovieCastById(id: string) {
    console.log({ id });
  }

  function getActorBioById(id: string) {
    console.log({ id });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName (fullName: string): boolean {
    console.log({ fullName })
    return true
  }

  function createActor(fullName: string, birthdate: Date): boolean {
    console.log('Crear actor');
    return checkFullName(fullName)
  }
})();
