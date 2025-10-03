function Counter() {
    let instance = null;
    let counter = 0;

    function init() {
        counter++;
        // return {}
    }

    function closeInstance() {
        counter--;
        instance = null;
    }

    function createInstance() {
        if(instance == null) {
            instance = init()
        }
        return instance;
    }

    function printResult() {
        console.log("The counter is::", counter)
    }

    return {
        createInstance,
        closeInstance,
        printResult

    }
}

let p1 = new Counter();

p1.createInstance()
p1.printResult()
p1.createInstance()
p1.printResult()
p1.closeInstance()
p1.printResult()
