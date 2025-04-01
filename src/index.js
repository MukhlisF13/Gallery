
import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner.js';
import Gallery from './Gallery.js';
import './index.css';

const Index = () => {
  const showGalleryItems = [
    {
      image: "https://theactionhospital.com/wp-content/uploads/2013/10/breaking-bad-background-hd-wallpaper.png",
      text: "Breaking Bad - Crime Drama Series",
      description: "A high school chemistry teacher diagnosed with terminal lung cancer turns to manufacturing and selling methamphetamine to secure his family's financial future. This gripping drama follows his transformation from mild-mannered teacher to dangerous drug kingpin."
    },
    {
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12991665_b_v13_am.jpg",
      text: "Stranger Things - Sci-Fi Horror Series",
      description: "Set in the 1980s, this supernatural series follows a group of kids in a small Indiana town as they uncover government experiments, alternate dimensions, and a strange girl with extraordinary powers. When one of their friends vanishes, they must confront terrifying forces to bring him back."
    },
    {
      image: "https://ew.com/thmb/bkgO0NomzAjB8mhY9eLVFp-G1Ik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/invincible-promo-072023-1-d0957bb94a0545a080a58d3a610e5966.jpg",
      text: "Invincible - Animated Series",
      description: "A teenage superhero juggles his normal high school life with his extraordinary powers and responsibilities."
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BN2UyMTdlMzItYTY1MC00NWExLWI1NDQtYTcxZGJlZmIzZTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      text: "Midnight Gospel - Adventure Series",
      description: "A space caster travels through fantastical worlds interviewing beings on profound topics while cosmic chaos unfolds around them."
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
      text: "Rick and Morty - Animated Sci-Fi Series",
      description: "An alcoholic scientist and his grandson embark on infinitely dangerous adventures across the multiverse."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKDOhOKsrp9aPcrtjdZbFkFtltZZfB_Nsq3oSmJVlSz7DFD7dNxsUl15UkYZv0maX96pv",
      text: "Wednesday - Mystery Series",
      description: "Wednesday Addams investigates supernatural mysteries at her new boarding school while mastering her psychic abilities."
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BZmMwMDlkNTEtMmQzZS00ODQ0LWJlZmItOTgwYWMwZGM4MzFiXkEyXkFqcGc@._V1_.jpg",
      text: "Bojack Horseman - Fantasy Series",
      description: "A washed-up sitcom star attempts to restart his career while dealing with depression in a world where humans and anthropomorphic animals coexist."
    },
    {
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21200256_b_v13_ab.jpg",
      text: "From - Mystery Horror Series",
      description: "Residents of a mysterious town struggle to survive and find a way out while facing terrifying creatures that emerge at night."
    }
  ];

  const movieGalleryItems = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi268PxgDuBiTk1zSJuVd_QFiALwpPu2FVldO5y-GuTOQNe2epArg5BL3UWqHIfIGENpML",
      text: "Spider-Man Across the Spider-Verse - Animated Movie",
      description: "Miles Morales returns for the next chapter of the Spider-Verse saga, an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse."
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BMzg0MWUzMjctYjVlOS00NzVjLWIwZDMtNzg1YzNkYzdjNTMwXkEyXkFqcGc@._V1_.jpg",
      text: "Puss in Boots: The Last Wish - Adventure Movie",
      description: "Puss in Boots discovers that his passion for adventure has taken its toll when he learns that he has burnt through eight of his nine lives. He sets out on an epic journey to find the mythical Last Wish and restore his nine lives."
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BMTY2ODE1MTgxMV5BMl5BanBnXkFtZTcwNTM1NTM2Mg@@._V1_FMjpg_UX1000_.jpg",
      text: "9 - Apocolyptic - Animated Movie",
      description: "In a post-apocalyptic world, a small group of sentient rag dolls must fight against machines that have taken over the world, while trying to uncover the mystery of their own existence."
    }
  ];

  return (
    <div className="container">
      <Banner text="My Flipcard Gallery" />

      <section className="section">
        <h2>Shows</h2>
        <Gallery items={showGalleryItems} />
      </section>

      <section className="section">
        <h2>Movies</h2>
        <Gallery items={movieGalleryItems} />
      </section>
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
