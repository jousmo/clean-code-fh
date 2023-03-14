(() => {
  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia

  type Gender = 'M' | 'F'

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string
    public gender: Gender
    public birthdate: Date

    constructor ({ name, gender, birthdate }: PersonProps) {
      this.name = name
      this.gender = gender
      this.birthdate = birthdate
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string
    public role: string
    public lastAccess: Date

    constructor ({ email, role }: UserProps) {
      this.email = email
      this.role = role
      this.lastAccess = new Date()
    }

    checkCredentials () {
      return true
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor ({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    gender: Gender;
    name: string;
    role: string;
    email: string;
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings

    constructor ({ birthdate, gender, name, role, email, lastOpenFolder, workingDirectory }: UserSettingsProps) {
      this.person = new Person({ birthdate, gender, name })
      this.user = new User({ role, email })
      this.settings = new Settings({ lastOpenFolder, workingDirectory })
    }
  }

  const userSettings = new UserSettings(
    {
      workingDirectory: '/path',
      lastOpenFolder: '/path',
      email: 'jousmo@outlook.com',
      role: 'admin',
      name: 'jousmo',
      gender: 'M',
      birthdate: new Date()
    }
  )

  console.log({ userSettings })
})()
