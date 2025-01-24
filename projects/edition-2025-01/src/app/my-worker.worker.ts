/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  // Procesamiento fuerte

  const response = `worker response to ${data}`;
  postMessage(response);
});
