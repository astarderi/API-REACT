import PersonItem from "./PersonItem";
import { useEffect, useState } from "react";

function Person() {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows/82/cast");
        const jsonData = await response.json();
        const formatPersonList = jsonData.map((actor) => ({
          name: actor.person.name,
          birthdayDate: actor.person.birthday || "לא זמין",
          image: actor.person.image ? actor.person.image.medium : "",
        }));
        setPerson(formatPersonList);
      } catch (error) {
        console.error("Error fetching persons", error);
      }
    };
    fetchPerson();
  }, []);

  return (
    <div className="App">
      {person.map((actor, index) => (
        <PersonItem
          key={index}
          name={actor.name}
          birthdayDate={actor.birthdayDate}
          image={actor.image}
        />
      ))}
    </div>
  );
}

export default Person;
