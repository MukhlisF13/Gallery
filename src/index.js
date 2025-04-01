import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner.js';
import Gallery from './Gallery.js';
import SearchBar from './SearchBar'; 
import './index.css';

const Index = () => {
  const showGalleryItems = [
    { 
      image: "https://theactionhospital.com/wp-content/uploads/2013/10/breaking-bad-background-hd-wallpaper.png", 
      text: "Breaking Bad - Crime Drama Series", 
      description: "A high school chemistry teacher turns to manufacturing methamphetamine." 
    },
    { 
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12991665_b_v13_am.jpg", 
      text: "Stranger Things - Sci-Fi Horror Series", 
      description: "A group of kids uncover government experiments and alternate dimensions." 
    },
    { 
      image: "https://ew.com/thmb/bkgO0NomzAjB8mhY9eLVFp-G1Ik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/invincible-promo-072023-1-d0957bb94a0545a080a58d3a610e5966.jpg", 
      text: "Invincible - Animated Series", 
      description: "A teenage superhero balances high school life and extraordinary powers." 
    }
  ];

  const movieGalleryItems = [
    { 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi268PxgDuBiTk1zSJuVd_QFiALwpPu2FVldO5y-GuTOQNe2epArg5BL3UWqHIfIGENpML", 
      text: "Spider-Man Across the Spider-Verse - Animated Movie", 
      description: "Miles Morales embarks on a journey across the Spider-Verse." 
    },
    { 
      image: "https://m.media-amazon.com/images/M/MV5BMzg0MWUzMjctYjVlOS00NzVjLWIwZDMtNzg1YzNkYzdjNTMwXkEyXkFqcGc@._V1_.jpg", 
      text: "Puss in Boots: The Last Wish - Adventure Movie", 
      description: "Puss in Boots sets out to restore his nine lives." 
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (query) => {
    setSearchTerm(query.toLowerCase());
  };

  const filteredShows = showGalleryItems.filter(
    (item) =>
      item.text.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
  );

  const filteredMovies = movieGalleryItems.filter(
    (item) =>
      item.text.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <Banner text="My Flipcard Gallery" />

      <SearchBar onSearch={handleSearch} /> 

      {filteredShows.length > 0 && (
        <section className="section">
          <h2>Shows</h2>
          <Gallery items={filteredShows} />
        </section>
      )}

      {filteredMovies.length > 0 && (
        <section className="section">
          <h2>Movies</h2>
          <Gallery items={filteredMovies} />
        </section>
      )}

      {filteredShows.length === 0 && filteredMovies.length === 0 && (
        <p className="no-results">No matching shows or movies found.</p>
      )}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

export default Index;
