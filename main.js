class People {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }
  introMyself() {
    console.log(`my name is ${this.name}`)
  }
  sayHi() {
    console.log('nihao')
  }
  eat() {
    console.log('chifan')
  }
}

const xialuo = new People('xialuo', 'man')
xialuo.introMyself()