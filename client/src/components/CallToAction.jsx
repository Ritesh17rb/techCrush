import { Button } from "flowbite-react";
import React from "react";
import newsletterImage from "../images/newsletter.jpg"; // Importing image using relative path

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Subscribe my Newsletter</h2>
        <p className="text-gray-500 my-2">Stay Updated with the Cool and Amazing Tech News</p>

        <Button
          gradientDuoTone="purpleToBlue"
          outline
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://ritesh17rb.github.io/myPortfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={newsletterImage} alt="Newsletter" /> {/* Use the imported image */}
      </div>
    </div>
  );
};

export default CallToAction;
