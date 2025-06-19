const correctUser = "admin";
const correctPassword = atob("ZHJvd3NzYXBfdG9uX3NpX3NpaHQ=").split("").reverse().join(""); 

const encodedFlag = "iodj{wxbhW_yrl}";

function decodeFlag(str) {
  return str.split("").map(c => {
    if (c.match(/[A-Za-z]/)) {
      let base = c === c.toUpperCase() ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt(0) - base - 3 + 26) % 26) + base);
    }
    return c;
  }).join("");
}

function checkLogin() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;

  if (u === correctUser && p === correctPassword) {
    const flag = decodeFlag(encodedFlag); 
    document.getElementById("flag").innerText = "🎉 Flag: " + flag;
    document.getElementById("flag").style.display = "block";
    document.getElementById("error").style.display = "none";
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("flag").style.display = "none";
  }
}