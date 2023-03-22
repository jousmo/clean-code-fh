(() => {
  interface Bird {
    eat(): void;
    swim(): void;
  }

  interface FlyingBird {
    fly(): void;
  }

  interface RunningBird {
    run(): void;
  }

  class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
    public swim() {}
  }

  class Humminbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
    public swim() {}
  }

  class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
    public swim() {}
  }
})()
