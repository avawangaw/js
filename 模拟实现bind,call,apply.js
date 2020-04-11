let obj = {name: 'maomao'};
let arr = [1, 2, 3];
let name = 'name1';
function testFn(p1, p2, p3) {
	console.log(this.name);
	console.log(p1, p2, p3);
}

Function.prototype.callTest = function(p1, p2) {
	let typeData = Object.prototype.toString.call(p1);
	let type = typeData.slice(8, typeData.length - 1);
	var obj = type == 'Window' ? window : type == 'Object' ? JSON.parse(JSON.stringify(p1)) : {};
	obj.fn = this;
	obj.fn(p2);
}
// testFn.callTest(obj, arr);

Function.prototype.applyTest = function(p1, p2) {
	let typeData = Object.prototype.toString.call(p1);
	let type = typeData.slice(8, typeData.length - 1);
	var obj = type == 'Window' ? window : type == 'Object' ? JSON.parse(JSON.stringify(p1)) : {};
	obj.fn = this;
	obj.fn(...p2);
}
// testFn.applyTest(obj, arr);

Function.prototype.bindTest = function(p1) {
	let typeData = Object.prototype.toString.call(p1);
	let type = typeData.slice(8, typeData.length - 1);
	var obj = type == 'Window' ? window : type == 'Object' ? JSON.parse(JSON.stringify(p1)) : {};
	let self = this;
	return function () {
		return self.call(p1);
	}
}

const fn = testFn.bindTest(obj);
fn();