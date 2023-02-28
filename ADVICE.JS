const advice = document.querySelector(".para-advice p");
const nuList = document.querySelector(".header span");
const btn = document.querySelector("button");

// event listener
btn.addEventListener("click", () => {
  const getTodos = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    return data;
  };

  getTodos()
    .then((data) => {
      advice.innerHTML = `"${data.slip.advice}"`;
      nuList.innerHTML = data.slip.id;
    })
    .catch((err) => console.log("rejected", err));
});
