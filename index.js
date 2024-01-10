// var slugify = require('slugify')
// ES6 ile import gelmiştir. package.json'a  "type":"module" satırı eklememiz yeterli.
import slugify from "slugify";
import negelirsegelsindefault,{comment,user,users,sum,hello} from "./my_module.js"

const title=slugify('deneme deneme','-') //
console.log(title)

console.log(sum(2,3))

hello("World")

console.log(negelirsegelsindefault(5,8))

console.log(comment)

console.log(user.name+" "+user.surname)

console.log(users[1].name)