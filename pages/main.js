import * as Comlink from "comlink";
import { useEffect } from "react";

export default function MainPage() {
  const yap = async () => {
    // const MyClass = Comlink.wrap(new Worker("../worker/sqljs.worker.js", {
    //   module:
    // }));
    // const instance = await new MyClass();
    // await instance.logSomething();
  };

  useEffect(() => {
    yap();
  }, []);

  return (
    <div>
      <h1>Comlink Page</h1>
      Yeah!
    </div>
  );
}
