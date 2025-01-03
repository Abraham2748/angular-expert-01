/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  //expensive task that block main thread
  const start = Date.now();
  console.log('Start of expensive task');
  while (Date.now() - start < 3000) {
    console.log('Expensive task running');
  }
  const response = `worker response to ${data}`;
  postMessage(response);
});
