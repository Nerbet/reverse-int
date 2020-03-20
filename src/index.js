 module.exports = function reverse (n) {
    var result = 0;
    var digits = [];
    var a;
    var k =1;
    if(n<0)
    {
        n = -n;
    }
     while(n != 0)
    {
        a = n%10;
        n=(n-a)/10;
        digits.push(a);
    }
for(var i =0; i<digits.length; i++)
{
   for(var j=0; j<digits.length-i-1; j++)
   {
       k = k*10;
   }
   result = result + digits[i]*k;
   k=1;
}
return result;
}
