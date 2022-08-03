let args = process.argv;

for (let i = 2; i < args.length; i++) {
  let timer = Number(args[i]);

  if (isNaN(timer) === true) {
    console.log('Invalid input: ', timer);
  } else if (timer < 0)  {
    console.log('Invalid input: ', timer);
  } else {
    console.log('Please wait: ', timer, ' seconds');
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer * 1000);
  }
}

