const path=require('path')
console.log(path.sep)

const filepath=path.join('/content', 'subfolder','test.txt')
console.log(filepath)
console.log(path.basename(filepath))

console.log(path.dirname(filepath))

const absolute=path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute)