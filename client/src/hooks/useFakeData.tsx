// Test -------------------------- Importing the Packages ---------------------------------
import { faker } from "@faker-js/faker";

// Test -------------------------- Importing the styles / other components ----------------

// Test -------------------------- Structure of Props ----------------------------------
import { FakeData } from "../types/fakeData.type";

// Test -------------------------- The current component ----------------------------------
const useFakeData = () => {
  const fakeData = [] as FakeData[];

  for (let j = 1; j <= 8; j++) {
    let chips: string[] = [];
    let heading, paragraph: string;

    const randomChips = Math.floor(Math.random() * 8);
    for (let i = 1; i <= randomChips; i++) {
      chips.push(faker.word.noun());
    }
    heading = faker.word.adverb();
    paragraph = faker.lorem.paragraph();
    fakeData.push({ heading, paragraph, chips });
  }

  console.log(fakeData);
  return;
};

// Test -------------------------- Exporting the current component ------------------------
export default useFakeData;
