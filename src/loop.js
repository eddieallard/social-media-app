const loop = () => {
  let num = 1;
  let maxNum = 10;

  while (num < maxNum) {
    if (num % 10) console.log("cincom");
    if (num % 5 === 0) console.log("cincom aint so bad");
    if (num % 3 === 0) console.log();
    num++;
  }
};
loop();
