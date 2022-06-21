import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <div className="grid-12 md-grid gap-6 mt-60">
      <h2 className="span-12x1 font-36 c-white bg-grey p-4 mb-12">Templates</h2>{" "}
      <a href="/templates/1" className="span-6x2 br-black ">
        <img src="template_begonecss_1.png" alt="begonecss" />
      </a>
      <a href="/templates/2" className="span-6x2 br-black ">
        <img src="template_begonecss_2.png" alt="begonecss" />
      </a>
      <a href="/templates/3" className="span-6x2 br-black">
        <img src="template_begonecss_3.png" alt="begonecss" />
      </a>
      <a
        href="#"
        className="span-6x2 br-black bg-grey p-4 display-f justify-c-c align-i-c"
      >
        <p className="style-italic text-white">More soon...</p>
      </a>
    </div>
  );
};

export default Templates;
