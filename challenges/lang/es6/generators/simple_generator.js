/*

 JavaScript Exercises : Generators

 Calling a generator function does not execute its body immediately;
 an iterator object for the function is returned instead.

 When the iterator's next() method is called, the generator function's body is
 executed until the first yield expression, which specifies the value to be
 returned from the iterator or, with yield*, delegates to another generator function.
 The next() method returns an object with a value property containing the
 yielded value and a done property which indicates whether the generator
 has yielded its last value.

 //Complete the expected output, and check the done property along the way

 */


function* idMaker(){
    var index = 0;
    while(index < 3)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // Expected output:
console.log(gen.next().value); // Expected output:
console.log(gen.next().value); // Expected output:
console.log(gen.next().value); // Expected output:
