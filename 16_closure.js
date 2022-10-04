function outest() {
    var b = 20
    console.log('from outest', b);
    function outer() {
        let a = 10
        console.log('from outer', b);
        function inner() {
            console.log('from innner',a, b);
            a= 11
            console.log('from innner',a, b);
            
        }
        console.log('from outer',a);
        return inner;
        
    }
    return outer
    
}

outest()()()