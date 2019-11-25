var a = 42;
a.toString(4);

console.log(Number.MAX_VALUE);
console.log("alma".charAt(2));
console.log("alma".charCodeAt(2));
console.log("alma".replace("a", "b"));
console.log("alma".substr(0, 2));
console.log("a_l_m_a".split('_'));
var d = new Date();
console.log(d);
document.write(d);
document.write(d.getFullYear);

document.write(d);
document.write(d.setFullYear("2021"));
document.write(d.getFullYear());
document.write('<br>' + d.getFullYear());
document.write('<br>' + d);
document.write('<br>' + d.toLocaleString());

document.write('<br>' + Math.pow(2, 15));
document.write('<br>' + Math.exp(5));
document.write('<br>' + Math.log(5));
document.write('<br>' + Math.PI());
document.write('<br>' + Math.E());
document.write('<br>' + Math.random());

document.write('<br>' + /alma/);
document.write('<br>' + /alma/.test('Almafa'));
document.write('<br>' + /alma/.test('almafa'));
document.write('<br>' + /\d+/.test('almafa'));
document.write('<br>' + /\D+/.test('almafa'));
document.write('<br>' + /$\D+/.test('almafa'));
document.write('<br>' + /$\d+/.test('almafa'));
document.write('<br>' + /$\d/.test('almafa'));

document.write('<br>' + /^\d/.test('almafa'));
document.write('<br>' + /^\D/.test('almafa'));
document.write('<br>' + /^\D+/.test('almafa'));
