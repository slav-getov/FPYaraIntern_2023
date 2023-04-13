import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center p-10 bg-blue-500 md:justify-start">
      <section className="flex flex-col gap-4 text-white md:flex-row">
        <div>
          <p>Terms and Conditions</p>
        </div>
        <div>
          <p>Best practices</p>
        </div>
        <div>
          <p>Testimonials</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
