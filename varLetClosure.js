var lt = [];
for (let i = 0; i < 10; i++) {
  lt.push(function () {console.log(i)});
}

for (var ele of lt) {
  ele(); // returns 0, 1, 2, 3, 4...9
}
