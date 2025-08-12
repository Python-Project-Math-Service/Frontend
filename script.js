// const BASE_URL = "http://localhost:8000";
const BASE_URL = "math-backend-app.salmonstone-a26147bd.eastus.azurecontainerapps.io";

async function calculatePow() {
  const base = document.getElementById("pow-base").value;
  const exponent = document.getElementById("pow-exp").value;

  const res = await fetch(`${BASE_URL}/pow`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ base: Number(base), exponent: Number(exponent) })
  });
  const data = await res.json();
  document.getElementById("pow-result").textContent = `Result: ${data.result}`;
}

async function calculateFactorial() {
  const number = document.getElementById("fact-number").value;

  const res = await fetch(`${BASE_URL}/factorial`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number: Number(number) })
  });
  const data = await res.json();
  document.getElementById("fact-result").textContent = `Result: ${data.result}`;
}

async function calculateFibonacci() {
  const index = document.getElementById("fib-index").value;

  const res = await fetch(`${BASE_URL}/fibonacci`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ index: Number(index) })
  });
  const data = await res.json();
  document.getElementById("fib-result").textContent = `Result: ${data.result}`;
}
