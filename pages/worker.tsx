import { useState, useEffect } from "react";

export default function WorkerTestPage() {
  useEffect(() => {
    const worker = new Worker(new URL("worker/myworker.ts", import.meta.url));
    // const worker = new Worker(
    //   new URL(
    //     "https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.5.0/sql-wasm.min.js",
    //     import.meta.url
    //   )
    // );
  }, []);

  return (
    <div>
      <h1>Worker</h1>
    </div>
  );
}
