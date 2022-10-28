const before = document.getElementById("before");
const pretty = document.getElementById("pretty");
const after = document.getElementById("after");
const error = document.getElementById("error");

pretty.addEventListener(
  "click",
  function () {
    try {
      const b = before.children[1].value;
      const parsed = JSON.parse(b);
      after.children[1].value = JSON.stringify(parsed, null, 2);
    } catch (e) {
      error.innerText = e.message;
    }
  },
  false
);
