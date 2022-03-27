import React from "react";
import { Carousel } from "3d-react-carousal";

class Carousal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let slides = [
      <a href="https://abudulvohit.netlify.app/" target="_blank">
        {" "}
        <img
          src="https://s.tmimgcdn.com/scr/1200x750/57800/big-good-burger-fast-food-website-template_57800-original.jpg"
          alt="1"
        />
      </a>,
      //   2
      <a href="https://abfulvohidnews.netlify.app/" target="_blank">
        <img
          src="https://newsbiz.co.kr/news/data/20210505/p1065607016088304_718_thum.jpg"
          alt="2"
        />
      </a>,
      //   3
      <a href="https://campidiacar.netlify.app/" target="_blank">
        {" "}
        <img src="https://bio.linkcdn.to/20211018/08350876904" alt="3" />
      </a>,
      <a href="https://vaxahackernews.netlify.app/" target="_blank">
        <img
          src="https://cdn.dribbble.com/users/278859/screenshots/3219317/hs_news.png"
          alt="4"
        />
      </a>,
    ];
    return (
      <div id="proj" className="App">
        <br />
        <br />
        <br />
        <Carousel slides={slides} />
        {/* Carousal.Carousal because of unpkg in developement use npm import and use only {Carousal}*/}
      </div>
    );
  }
}
export default Carousal;
