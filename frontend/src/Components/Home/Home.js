import "./Home.css";
import HomeMain from "../../Assets/home-main.jpg";
import React from "react";

function Home() {
  return (
    <>
      <section class="home-main">
        <img src={HomeMain} alt="Main" className="background" />
        <p>
          Welcome to Our Matrimony, where we believe in helping you find not
          just a partner, but the right partner for a lifetime of happiness. Our
          platform is designed with a deep understanding of your needs and
          aspirations. We use advanced algorithms and comprehensive profiling to
          match you with potential life partners who share your values,
          interests, and life goals. Our aim is to make your journey towards
          finding your perfect match not just simpler, but also enjoyable. With
          Our Matrimony, you're not just getting a service, you're gaining a
          partner in your journey of love and commitment. Let us help you find
          the one who completes you, because we understand that love isn't about
          finding the perfect person, but about finding the person who makes you
          feel perfect.
        </p>
      </section>
    </>
  );
}

export default Home;
