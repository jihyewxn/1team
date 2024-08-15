import React from "react";
import "./App.css";
import MyData from "./data.json"
import WiseCom from "./WiseCom"

const App:React.FC = () => {
  return (
    <div className="container">
      <header>
        <p><span className="txt1">DOOSAN BEARS</span></p>
        <div>
          <ul>
            <li><a href="#">소개</a></li>
            <li><a href="#st2">친구</a></li>
            <li><a href="#st3">위치</a></li>
          </ul>
        </div>
      </header>
      <section id="st1">
        <p>김동주</p>
        <img className="prophoto" src={process.env.PUBLIC_URL + '/img/dongju.jpg'} />
        <div className="prodesc">
          <ul>
          {MyData.myprofile.map(pro => ( 
            <li>{pro.name} : {pro.value}</li>
          ))}
          </ul>
        </div>
        <p className="proessay">
          두산베어스 소속 우완 투수
        </p>
        <WiseCom />
      </section>
      <section id="st2">
        <p>DOOSAN BEARS 투수</p>
        <div>
          <ul>
            {MyData.friend.map(fr => (
              <li>
                <a href={fr.url}>{fr.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="st3">
        <p>위치</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.686756164069!2d127.07023267625443!3d37.515305527063475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca450879adccd%3A0xe970a92cdbc5ef71!2z7J6g7Iuk7KKF7ZWp7Jq064-Z7J6l!5e0!3m2!1sko!2skr!4v1723731399683!5m2!1sko!2skr" width="500" height="450" loading="lazy"></iframe>
      </section>
      <footer>
        <p>© 2024. <a href="#">Twins</a> All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
