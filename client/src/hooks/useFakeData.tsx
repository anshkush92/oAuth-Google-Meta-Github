// Test -------------------------- Importing the Packages ---------------------------------
import { useEffect } from "react";
import { faker } from "@faker-js/faker";

// Test -------------------------- Importing the styles / other components ----------------
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getFakeData } from "../features/fakeData/fakeData";

// Test -------------------------- Structure of Props ----------------------------------

// Test -------------------------- The current component ----------------------------------
const useFakeData = () => {
  const dispatch = useAppDispatch();
  const fakeData = useAppSelector((state) => state.fakeData);

  useEffect(() => {
    let heading: string[] = [];
    let paragraph: string[] = [];
    let chips: string[] = [];
    let names: string[] = [];
    let imagesUrl: string[] = [];
    let avatars: string[] = [];

    for (let i = 1; i <= 9; i++) {
      heading.push(faker.word.noun());
      paragraph.push(faker.lorem.paragraph(Math.floor(Math.random() * 8) + 1));
      chips.push(faker.lorem.words(Math.floor(Math.random() * 8) + 1));
      names.push(faker.name.findName());
      avatars.push(faker.image.avatar());
      imagesUrl.push(faker.image.animals(640, 480, true));
    }

    dispatch(
      getFakeData({ heading, paragraph, chips, names, imagesUrl, avatars })
    );
  }, [dispatch]);

  return fakeData;
};

// Test -------------------------- Exporting the current component ------------------------
export default useFakeData;
