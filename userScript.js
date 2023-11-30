let user = JSON.parse(localStorage.getItem("otplessUser"));
let containerDiv = document.getElementById("container");
if (!user) window.location.href = "./index.html";
console.log(user);

function displayInfo(user) {
  let div = document.createElement("div");
  div.className = "info";

  div.innerHTML = `
  <h1>User Information</h1>
  <p>Name: ${user.email.name ? user.email.name : "Not Found"}</p>
  <p>Email: ${user.email.email ? user.email.email : "Not Found"}</p>
  <p>Mobile no: ${user.waNumber ? user.waNumber : "Not Found"}</p>
  <p>Token: ${user.token}</p>
  <p>Time: ${user.timestamp}</p>
  <button id="btn" onClick="logOut()">Log out</button>`;

  containerDiv.append(div);
}

function logOut() {
  containerDiv.innerHTML = `Logout Successfully`;
  localStorage.clear();
  containerDiv.innerHTML = "";
  window.location.href = "./index.html";
}
displayInfo(user);
