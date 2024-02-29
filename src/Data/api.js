const BASE_URL = "https://www.dnd5eapi.co";

export async function getAllSpells() {
  const spellIndexes = await fetch(BASE_URL + "/api/spells").then((response) =>
    response.json()
  );
  return Promise.all(
    spellIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}

export async function getAllClasses() {
  const classIndexes = await fetch(BASE_URL + "/api/classes").then((response) =>
    response.json()
  );
  return Promise.all(
    classIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}

export async function getAllSubclasses() {
  const subclassIndexes = await fetch(BASE_URL + "/api/subclasses").then(
    (response) => response.json()
  );
  return Promise.all(
    subclassIndexes.results.map((index) =>
      fetch(BASE_URL + index.url).then((response) => response.json())
    )
  );
}