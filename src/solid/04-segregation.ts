(() => {
  interface Bird {
    fly(): void;
    eat(): void;
    run(): void;
  }

  class Tucan implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
  }

  class Humminbird implements Bird {
    public fly() {}
    public eat() {}
    public run() {}
  }

  class Ostrich implements Bird {
    public fly() {
      throw new Error('esta ave no vuela') // Viola el principio ISP
    }
    public eat() {}
    public run() {}
  }
})()
