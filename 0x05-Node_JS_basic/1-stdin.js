process.stdout.write("Welcome to Holberton School, what is your name?\n")

if (process.stdin.isTTY) {
  process.stdin.on('data', function (data) {
    process.stdout.write('Your name is: ' + data);
    process.exit();
  });

} else {
  process.stdin.on('data', function (data) {
    process.stdout.write('Your name is: ' + data);
    process.exit();
  });
  process.on('exit', function () {
    process.stdout.write("This important software is now closing\n");
  });
}
