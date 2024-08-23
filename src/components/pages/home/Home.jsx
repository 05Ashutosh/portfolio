import Hero from "../../Hero";
import "./DotPattern.css";
// import HorizontalScroll from "../HorizontalScroll";
// import img1 from "../../assets/im1.jpg";
// import img2 from "../../assets/im2.jpg";
// import img3 from "../../assets/im3.jpg";
// import img4 from "../../assets/im4.jpg";
// import img5 from "../../assets/im5.jpg";
import ProjectsSection from "../../ProjectsSection";
import NextProject from "../../NextProject";

// const url = [img1, img2, img3, img4, img5];

const Home = () => {
  return (
    <div className="dot-pattern-background min-h-screen">
      <Hero />
      <ProjectsSection />
      <NextProject />
    </div>
  );
};

export default Home;
