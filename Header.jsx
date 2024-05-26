import "./header.css";

export default function Header() {
  return (
    <div className="header">

        <div className="headerTitles">
          <span className="headerTitleSm">Love travelling?</span>
          <span className="headerTitleLg">TRAVEL BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://www.go2africa.com/wp-content/uploads/2017/06/edited-banner-governors_activities_2016-07-17-little-420x380.jpg.webp"
          alt="flowers"
        />
      </div>
  );
}