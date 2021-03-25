var name = "Hitesh"
console.log(`Line 2 says ${name}`);

function sayName() {
    console.log(`line 5 says ${name}`);
}

sayName();

function sayName2() {
    // var name = "Mr.H";
    console.log(`line 12 says ${name}`);

    sayName3();
    function sayName3() {
        // var name = "Mr.H";
        console.log(`line 18 says ${name}`);
        
    }
}

sayName2();

// In the world of js the if, switch block is not truly considered as Scope 
// but it considered as scope rather only functions are only considered as scope 
// this comes from memory reservation and call of memory 
// pop cycle --> elder and children example. --> you can ask your elders but not childrens.