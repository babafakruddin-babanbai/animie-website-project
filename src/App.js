import "./App.styled.js";
import {
  NavBar,
  ParentContainer,
  Heading,
  Input,
  PageButton,
  Rem2Buttons,
  RemButtons,
  WatchContainer,
  GridContainer,
  CardContainer,
  WatchListName,
} from "./App.styled.js";
import React, { useEffect, useState } from "react";

function App() {
  const [animeData, setAnimeData] = useState([]);
  const [search, setSearch] = useState("naruto");

  useEffect(() => {
    const url = `https://api.jikan.moe/v4/anime?q=${search}`;
    // const url = "https://api.jikan.moe/v4/anime";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);
        setAnimeData(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [search]);
  return (
    <div>
      <ParentContainer>
        <NavBar>
          <Heading>AnimePlanet</Heading>
          <PageButton className="active">Home</PageButton>
          <Rem2Buttons>AnimeList</Rem2Buttons>
          <RemButtons>Subscription</RemButtons>
          <Input
            type="search"
            placeholder="Search Your Anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </NavBar>
        
        <GridContainer>
          {animeData.map((item, index) => {
            return (
              <CardContainer key={index}>
                <img
                  src={item.images.jpg.large_image_url}
                  alt="Anime Image"
                  width="250"
                  height="250"
                  className="card-img"
                />
                <h3>{item.title}</h3>
                <div>{item.rating}</div>
              </CardContainer>
            );
          })}
        </GridContainer>
      </ParentContainer>
    </div>
  );
}

export default App;
