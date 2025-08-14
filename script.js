// const BASE_URL = "http://localhost:8000";
const BASE_URL = "https://math-backend-app.salmonstone-a26147bd.eastus.azurecontainerapps.io";

function handleOperationSelect() {
  const op = document.getElementById("operation").value;
  const container = document.getElementById("operation-container");

  if (!op) {
    container.innerHTML = "";
    return;
  }

  let html = `<section id="section">
    <form onsubmit="event.preventDefault(); performOperation('${op}')">`;

  if (op === "pow") {
    html += `
      <input id="pow-base" type="number" placeholder="Base" required>
      <input id="pow-exp" type="number" placeholder="Exponent" required>`;
  } else if (op === "factorial") {
    html += `<input id="fact-number" type="number" placeholder="Number" required>`;
  } else if (op === "fibonacci") {
    html += `<input id="fib-index" type="number" placeholder="Index" required>`;
  }

  html += `
      <div class="buttons">
        <button type="button" onclick="resetForm()">Reset</button>
        <button type="submit">Calculate</button>
      </div>
    </form>
    <p id="result"></p>
  </section>`;

  container.innerHTML = html;
  document.querySelector("section").style.display = "block";
}

function resetForm() {
  document.getElementById("operation").value = "";
  document.getElementById("operation-container").innerHTML = "";
}

async function performOperation(type) {
  let body = {};
  let endpoint = "";

  if (type === "pow") {
    const base = document.getElementById("pow-base").value;
    const exponent = document.getElementById("pow-exp").value;
    body = { base: Number(base), exponent: Number(exponent) };
    endpoint = "pow";
  } else if (type === "factorial") {
    const number = document.getElementById("fact-number").value;
    body = { number: Number(number) };
    endpoint = "factorial";
  } else if (type === "fibonacci") {
    const index = document.getElementById("fib-index").value;
    body = { index: Number(index) };
    endpoint = "fibonacci";
  }

  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  document.getElementById("result").textContent = `Result: ${data.result}`;
}

