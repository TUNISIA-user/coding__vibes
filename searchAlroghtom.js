import "./styles.css";
import arr from "./api.js";
import { useEffect, useState } from "react";

export default function App() {
  const [allFilms, setAllFilms] = useState([]);  
  const [listfilm, setListfilm] = useState([]); 

  useEffect(() => {
    setAllFilms(arr);  
    setListfilm(arr);  
  }, []);

  const handleChange = (event) => {
    const searchTerm = event.target.value.toLowerCase().trim();
    const filtered = allFilms.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    console.log(filtered);
    setListfilm(filtered);
  };

  return (
    <>
      <div className="defsing">
        <input
          type="text"
          placeholder="Search for your movie"
          onChange={handleChange}
        />
      </div>
      <br />
      <div className="App">
        {listfilm.map((item, index) => (
          <div className="card" key={index}>
            <p>Title: {item.title}</p>
            <img src={item.img} alt={item.title} />
            <p>Rate: {item.rate}</p>
          </div>
        ))}
      </div>
    </>
  );
}
