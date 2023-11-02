export function capitalizeWord(input,inp2) {

    const foundItem = inp2.find((item) => item.key === input);

    if (foundItem) {
      console.log(foundItem.title);
      return foundItem.title;
    } else {
      console.log("Item not found");
    }

  }
  