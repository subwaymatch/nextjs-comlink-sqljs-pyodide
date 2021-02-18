import * as Comlink from "comlink";

const myValue = 42;

class MyClass {
  logSomething() {
    console.log(`myValue=${myValue}`);
  }
}

Comlink.expose(MyClass);
