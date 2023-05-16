ProcessingInstruction.stdout.write('Welcome to Holberton School, what is your name?\n');

ProcessingInstruction.stdin.setEncoding('utf8');

ProcessingInstruction.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`Your name is: ${chunk}`);
    }
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
