import ScrollAnimation from "react-animate-on-scroll";
import YTCard from "./YTCard";

const links = [
  "u3nHWZGkxV8",
  "E-_hCViDmAk",
  "Tm2tWqYYt-c",
  "zgak4T-eD4E",
  "Bi_8wSK4RbY",
  "IF_YSmuBBcE",
  "9GqHIXY0Owk",
  "6_jYga7N7s0",
  "rX3NWFIJjBs",
  "KObUgd-6gfU",
  "Wj7A49-mySk",
  "c58AMctLp04",
  "NsHS6F2bjII",
];

const Youtube = ({ setView }) => {
  // function parseXml(xml) {
  //   var dom = null;
  //   if (window.DOMParser) {
  //     try {
  //       dom = new DOMParser().parseFromString(xml, "text/xml");
  //     } catch (e) {
  //       dom = null;
  //     }
  //   } else if (window.ActiveXObject) {
  //     try {
  //       dom = new ActiveXObject("Microsoft.XMLDOM");
  //       dom.async = false;
  //       if (!dom.loadXML(xml))
  //         // parse error ..

  //         window.alert(dom.parseError.reason + dom.parseError.srcText);
  //     } catch (e) {
  //       dom = null;
  //     }
  //   } else alert("cannot parse xml string!");
  //   return dom;
  // }

  return (
    <>
      <div className="col-sm-3">
        <ScrollAnimation animateIn="fadeIn">
          <ul className="list-group">
            {/* <li
              className="list-group-item"
              onClick={() => setView("instagram")}
            >
              Instagram
            </li> */}
            <li className="list-group-item active">Youtube</li>
            <li className="list-group-item" onClick={() => setView("gallery")}>
              Gallery
            </li>
          </ul>
        </ScrollAnimation>
      </div>
      <div className="col-sm-9 flow-control ">
        <ScrollAnimation animateIn="fadeIn">
          <div className="row">
            {links.map((link) => (
              <YTCard key={link} url={link} />
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Youtube;
