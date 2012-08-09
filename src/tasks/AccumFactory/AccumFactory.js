function accumulator(sum) {
    return function(n) {
        return sum += n;
    }
}
var x = accumulator(1);
x(5);
print(x(2.3));
