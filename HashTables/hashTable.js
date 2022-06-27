//using an array that has a length of a prime number, and multiplying the total by a prime number significantly reduces collisions

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let primeNum = 31;
    for (let i=0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * primeNum + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    if (!this.keyMap[hashedKey]) {
      this.keyMap[hashedKey] = [];
    }
    this.keyMap[hashedKey].push([key, value]);
  }

  get(key) {
    const hashedKey = this._hash(key);
    const target = this.keyMap[hashedKey];
    if (!target) return target;
    if (target.length === 1) {
      return target[0]
    }
    for (var i=0; i < target.length; i++) {
      if (target[i][0] === key) return target[i][1]
    }
      return undefined
  }

  keys() {
    let keysArr = [];
    this.keyMap.forEach((oneInd) => {
      if (oneInd) {
        oneInd.length === 1 ?
        keysArr.push(oneInd[0][0]) :
        oneInd.forEach((oneKey)=>{keysArr.push(oneKey[0])});
      }
    })
    return keysArr
  }

  values() {
    let valuesArr = [];
    this.keyMap.forEach((oneInd) => {
      if (oneInd) {
        oneInd.length === 1 ?
        valuesArr.push(oneInd[0][1]) :
        oneInd.forEach((oneKey)=>{valuesArr.push(oneKey[1])});
      }
    })
    return valuesArr
  }

}

