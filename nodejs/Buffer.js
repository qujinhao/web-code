const buf = Buffer.from('runoob', 'ascii');

// ???? 72756e6f6f62
console.log(buf.toString('hex'));

// ???? cnVub29i
console.log(buf.toString('base64'));