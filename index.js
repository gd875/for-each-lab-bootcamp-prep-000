/*

function iterativeLog(element, index, array) {
  console.log(`${index}: ${element}`);
  return array
}

array.forEach(iterativeLog);

*/

function callback(element, index, array) {
  console.log(`${index}: ${element}`)
}

function iterativeLog(array) {
  array.forEach(callback)
  return array
}

function iterate(callback) {
  var array = [1,2,3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
}
