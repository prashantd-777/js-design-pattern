const Person = {
    fName: "Bruce",
    lName: 'Wayne',
    age: 30,
}

const p1 = new Proxy(Person, {
    get: function(obj, prop) {
        return Reflect.get(obj, prop)
    },
    set: function(obj, prop, val) {
        return Reflect.get(obj, prop, val)
    }
});

console.log(p1.fName)