function getRandomIntegerBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  
}
// TESTED 
// to get equal probabilty for {1, 2}
// Math.floor(Math.random()*2  + 1)
