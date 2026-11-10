let count = 0;

function increment() {
  count = count + 1;
  document.getElementById("numero").innerText = count;
}
function decrement() {
  count = count - 1;
  document.getElementById("numero").innerText = count;
}
function reset() {
  count = 0;
  document.getElementById("numero").innerText = count;
}