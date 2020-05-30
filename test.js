var generateParentheses = function(n) {
    let resultArray = [];
    function resolve( text = "",left = 0,right = 0 ){
        console.log( text );
        console.log( 'left' + left.toString() );
        console.log( 'right' + right.toString() );
        if( text.length === 2*n ){
            resultArray.push( text );
        }
        if( left < n ){
            resolve( text+'(',left+1,right );
        }
        if( right < left ){
            resolve( text+')',left,right+1 );
        }
    }
    
    resolve()
    return resultArray;
};

let result = generateParentheses(3)

console.log(result)
console.log('result = ' + result)