export default class Team {
  constructor() {
    this.team = [];
  }

  add(person) {
    this.team.push(person);
  }

  * [Symbol.iterator]() {
    const persons = this.team;
    for (let i = 0; i < persons.length; i += 1) {
      yield persons[i];
    }
  }
}