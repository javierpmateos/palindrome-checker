const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result")

function isPalindrome(str) {
  let filtered = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return filtered === filtered.split("").reverse().join("");
}

button.addEventListener("click", () => {
  const textloaded = input.value;

  if (textloaded === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(textloaded)) {
    result.textContent = `${textloaded} is a palindrome`;
  } else {
    result.textContent = `${textloaded} is not a palindrome`;
  }
// limpiar el input
  input.value = "";
  input.focus();
});

// permitir verificar al presionar Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    button.click();
  }

});
