
import React from 'react';
import Banner from './banner';
import Gallery from './Gallery';
import List from './List';
import './index.css';

const Index = () => {
  const showGalleryItems = [
    {
      image: "https://theactionhospital.com/wp-content/uploads/2013/10/breaking-bad-background-hd-wallpaper.png",
      text: "Breaking Bad",
      description: "A high school chemistry teacher diagnosed with terminal lung cancer turns to manufacturing and selling methamphetamine to secure his family's financial future. This gripping drama follows his transformation from mild-mannered teacher to dangerous drug kingpin."
    },
    {
      image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12991665_b_v13_am.jpg",
      text: "Stranger Things",
      description: "Set in the 1980s, this supernatural series follows a group of kids in a small Indiana town as they uncover government experiments, alternate dimensions, and a strange girl with extraordinary powers. When one of their friends vanishes, they must confront terrifying forces to bring him back."
    }
  ];

  const movieGalleryItems = [
    {
      image: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg",
      text: "The Batman",
      description: "In his second year of fighting crime, Batman investigates corruption in Gotham City and confronts the Riddler, a sadistic serial killer targeting the city's elite. As the evidence leads closer to home, he must forge new alliances and bring justice to the abuse of power and corruption plaguing Gotham."
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
      text: "Top Gun: Maverick",
      description: "After serving for thirty years as one of the Navy's top aviators, Pete 'Maverick' Mitchell returns to train a new generation of pilots for a dangerous mission. Confronting the ghosts of his past and his deepest fears, Maverick must face a mission that demands the ultimate sacrifice."
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      text: "Black Panther: Wakanda Forever",
      description: "Following the death of King T'Challa, Queen Ramonda, Shuri, and the rest of Wakanda must fight to protect their nation from intervening world powers. As the Wakandans strive to embrace their next chapter, they must work together with allies to forge a new path for their beloved kingdom."
    }
  ];

  const recommendations = [
    "Watch in high quality",
    "Get comfortable seating",
    "Prepare snacks beforehand",
    "Avoid phone distractions"
  ];

  return (
    <div className="container">
      <Banner text="Gallery" />

      <section className="section">
        <h2>Shows</h2>
        <Gallery items={showGalleryItems} />
      </section>

      <section className="section">
        <h2>Movies</h2>
        <Gallery items={movieGalleryItems} />
      </section>

      <section className="section">
        <h2>Viewing Tips</h2>
        <List items={recommendations} />
      </section>
    </div>
  );
};

export default Index;
