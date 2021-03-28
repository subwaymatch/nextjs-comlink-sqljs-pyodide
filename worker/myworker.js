self.addEventListener("message", (event) => {
  postMessage(event.data);
});

self.addEventListener("message", (event) => {
  console.log("message event");
});
