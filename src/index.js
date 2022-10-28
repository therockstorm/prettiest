const before = document.getElementById("before");
const pretty = document.getElementById("pretty");
const after = document.getElementById("after");
const error = document.getElementById("error");

pretty.addEventListener(
  "click",
  function () {
    try {
      after.value = JSON.stringify(JSON.parse(before.value), null, 2);
    } catch (e) {
      error.innerText = e.message;
    }
  },
  false
);
