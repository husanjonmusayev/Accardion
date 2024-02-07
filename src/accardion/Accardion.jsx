import React from "react";
import "./style.css";
import { useState } from "react";
import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/3.jpg";
import image4 from "./image/4.jpg";
import image5 from "./image/5.jpg";
import { MdAddAPhoto } from "react-icons/md";
const cards = [
  {
    title: "Canada",
    image: image2,
    text: `Image description here`,
  },
  {
    title: "Bali",
    image: image1,
    text: `Image description here`,
  },
  {
    title: "Spain",
    image: image3,
    text: `Image description here`,
  },
  {
    title: "Indonesia",
    image: image4,
    text: `Image description here`,
  },
  {
    title: "South Africa",
    image: image5,
    text: `Image description here`,
  },
];

const Accardion = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <section>
        {cards?.map((card, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <article
              key={card.image}
              className={isActive}
              onClick={() => handleToggle(index)}
            >
              <img src={card.image} alt={card.text} />

              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Accardion;
