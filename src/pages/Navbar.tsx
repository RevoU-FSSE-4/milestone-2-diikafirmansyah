import React from "react";

interface MyComponentProps {
  home: string;
  game: string;
  about: string;
}

const MyComponent: React.FC<MyComponentProps> = (props) => {
  return (
    <div className="bg-white w-full flex align-center justify-center text-center">
      
      <ul className="flex gap-10">
        <li>
            <a href="home">{props.home}</a>
        </li>
      
      
        <li>
            <a href="game">{props.game}</a>
        </li>
      
      
        <li>
            <a href="about">{props.about}</a>
        </li>
      </ul>
      {/* <p className="mr-5 text-2xl text-center">{props.home}</p>
      <p className="mr-5 text-2xl text-center">{props.game}</p>
      <p className="text-2xl text-center">{props.about}</p> */}
    </div>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="mr-10 w-full flex align-center justify-center text-center">
      <MyComponent home="Home" game="Game" about="About" />
    </div>
  );
};

export default Navbar;
