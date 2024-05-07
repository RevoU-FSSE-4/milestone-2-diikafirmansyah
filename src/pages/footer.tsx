import React from "react";

interface MyFooterProps {
  footer: string;
  
}

const MyFooter: React.FC<MyFooterProps> = (props) => {
  return (
    <div className="bg-white w-full flex align-center justify-center text-center">
      <p>{props.footer}</p>
      
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <div className="mr-10 w-full flex align-center justify-center text-center">
      <MyFooter footer='2024' />
    </div>
  );
};

export default Footer;
