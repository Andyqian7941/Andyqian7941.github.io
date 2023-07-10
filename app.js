function A(n) {
    if (n == 0)
        return 1;
    var res = 0;
    for (var i = 0; i < n; i++)
        for (var j = 0; j <= i; j++)
            for (var k = 0; k <= j; k++)
                if (i + j + k == n - 1)
                    res += Mult(new Array(A(i), A(j), A(k)));
    return res;
}
function Mult(x) {
    var res = 1;
    for (var i = 1; i <= x[0]; i++) {
        var count = 0;
        for (var a = 0; a < x.length; a++)
            if (x[a] == i)
                count++;
        for (var j = 1; j <= count; j++) {
            res *= j + i - 1;
            res /= j;
        }
    }
    return res;
}
function B(n) {
    var res = 0;
    for (var i = 1; i < n; i++)
        for (var j = 1; j <= i; j++)
            if (i + j == n)
                res += Mult(new Array(A(i), A(j)));
    return res;
}
function C(n) {
    var res = 0;
    for (var i = 0; i < n; i++)
        for (var j = 0; j <= i; j++)
            for (var k = 0; k <= j; k++)
                for (var l = 0; l <= k; l++)
                    if (i + j + k + l == n - 1)
                        res += Mult(new Array(A(i), A(j), A(k), A(l)));
    return res;
}
function F(n) {
    if (n % 2 == 0)
        return C(n) - B(n) + A(n / 2);
    else
        return C(n) - B(n);
}
for (n = 1; n <= 20; n++)
    document.write(`F(${n})=${F(n)}<br>`);