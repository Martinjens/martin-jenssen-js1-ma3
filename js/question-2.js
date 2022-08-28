const apiKey = "2e0cc4bc0e344ad4bb2a8c50752c54a8";

const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultContainer = document.querySelector(".result");

async function call() {
  try {
    const response = await fetch(url, Option);

    const resultObject = await response.json();
    console.log(JSON.stringify(resultObject, null, 2));
    const facts = resultObject.results;

    resultContainer.innerHTML = "";

    console.log(facts);

    for (let i = 0; i < facts.length; i++) {
      console.log(facts[i].name);
      const oneelement = facts[i];
      console.log(oneelement.name);

      if (i === 8) {
        break;
      }

      resultContainer.innerHTML += `<div class="result">${oneelement.name} </div>`;
      resultContainer.innerHTML += `<div class="result"> ${oneelement.rating}</div>`;
      resultContainer.innerHTML += `<div class="result"> ${oneelement.tags}</div>`;
      resultContainer.innerHTML += `<div class="result"><br/></div>`;
    }
  } catch (error) {
    console.log("An error has accord");
  }
}

call();
