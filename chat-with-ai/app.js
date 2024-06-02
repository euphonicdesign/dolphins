const formElement = document.querySelector("form");
// console.log(formElement);

const botResponsesUlElement = document.querySelector(".bot-responses");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = formElement.elements.msg.value;
  console.log("Form submitted: " + formElement.elements.msg.value);

  const url = "https://node-box.onrender.com/chatwithai";

  let data = {
    msg: message,
  };

  let request = new Request(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
  });

  fetch(request)
    .then((response) => {
      // Handle response you get from the API
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const botResponseLiElement = document.createElement("li");
      botResponseLiElement.innerText = data;
      botResponsesUlElement.appendChild(botResponseLiElement);
    });
});
