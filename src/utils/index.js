function Per(name) {
  this.name = name
}

var p = new Per('xiao')

delete p.__proto__
console.log(p.name)