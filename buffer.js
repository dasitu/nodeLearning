var buf = Buffer.from('evan', 'utf8');
console.log(buf.toString('base64'));
console.log(buf.toString('ascii'));
console.log(buf.toString('utf8'));

var buf2 = Buffer.alloc(26);
for (let index = 0; index < 26; index++) {
    buf2[index] = index + 97;
}

console.log(buf2.toString());
console.log(buf2.toString('ascii', 0, 5));
console.log(buf2.toString(undefined, 0, 5));
console.log(buf2.toJSON());
console.log(JSON.stringify(buf2));