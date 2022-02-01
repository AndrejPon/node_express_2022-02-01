// nuorodos i elementus
const btn1 = document.querySelector("#btn1");
const result = document.querySelector("#result");
const url = "http://localhost:3000/api/camel";

btn1.addEventListener("click", () => {
  console.log("click");
  // fetch from url and console log
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      if (json.message) {
        result.innerHTML = json.message;
      }
    });
});
