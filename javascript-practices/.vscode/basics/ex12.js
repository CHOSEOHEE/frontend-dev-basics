var f1 = function() {
    var s = "hellp";
}

f1();


console.log("===========[02] closure")
var f2 = function() {
    var s = "hello world";

    var inner = function() {
        console.log(s);
    }

    return inner;
} 



var closure = f2();
closure();