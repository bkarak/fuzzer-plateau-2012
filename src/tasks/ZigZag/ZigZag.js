function ZigZagMatrix(n) {
    this.height = n;
    this.width = n;
 
    this.mtx = [];
    for (var i = 0; i < n; i++) 
        this.mtx[i] = [];
 
    var i=1, j=1;
    for (var e = 0; e < n*n; e++) {
        this.mtx[i-1][j-1] = e;
        if ((i + j) % 2 == 0) {
            // Even stripes
            if (j < n) j ++;
            else       i += 2;
            if (i > 1) i --;
        } else {
            // Odd stripes
            if (i < n) i ++;
            else       j += 2;
            if (j > 1) j --;
        }
    }
	 return this.mtx;
}
//ZigZagMatrix.prototype = Matrix.prototype;
 
var z = new ZigZagMatrix(5);
document.write(z);
document.write("/n");
 
z = new ZigZagMatrix(4);
document.write(z);
