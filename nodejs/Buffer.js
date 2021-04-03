const buf = Buffer.from('runoob', 'ascii');

// Êä³ö 72756e6f6f62
console.log(buf.toString('hex'));

// Êä³ö cnVub29i
console.log(buf.toString('base64'));