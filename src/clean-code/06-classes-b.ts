(() => {
  // No aplicando el principio de responsabilidad única

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
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public email: string
    public role: string
    public lastAccess: Date

    constructor ({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate })
      this.email = email
      this.role = role
      this.lastAccess = new Date()
    }

    checkCredentials () {
      return true
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string
    public lastOpenFolder: string

    constructor ({ workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate })
      this.workingDirectory = workingDirectory
      this.lastOpenFolder = lastOpenFolder
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

  console.log({ userSettings, areCredentialsValid:userSettings.checkCredentials() })
})()
