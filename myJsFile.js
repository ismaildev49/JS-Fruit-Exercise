let answer = prompt(`What's your favorite fruit?`);
let favFruit = answer.toLowerCase();
let answer1 = "";
let kindOfGrapes = "";

switch (favFruit) {
  case "bananas":
    alert(`I like ${favFruit} as well`);
    break;
  case `strawberry`:
    alert(`I LOVE strawberries`);
    break;
  case `grape`:
    answer1 = prompt(`Do you prefer purple or green grapes ?`);
    kindOfGrapes = answer1.toLowerCase();
    switch (kindOfGrapes) {
      case "purple":
        alert(`I don't like purple grapes`);
        break;
      case "green":
        alert(`Green grapes are ok`);
        break;
      default:
        alert(`I don't understand`);
    }
  default:
    alert(`I don't understand`);
}
