import Card from "./cardVariant";
import { motion, useScroll, useSpring } from "framer-motion";
import { Footer } from "./footer";

export const Vision = () => {
  const { scrollYprogress } = useScroll();
  const scaleX = useSpring(scrollYprogress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imgArray = [
    {
      imgSrc: "./assets/team3.jpg",
      name: "JASON",
      role: "Chef & founder",
    },
    {
      imgSrc: "./assets/team1.jpg",
      name: "KATHIE",
      role: "Sous-chef",
    },
    {
      imgSrc: "./assets/team2.jpg",
      name: "CANDY",
      role: "Drinks manager",
    },
  ];
  return (
    <motion.div style={scaleX}>
      {" "}
      <div className="font-sans mb-20 relative">
        <div className="mb-16">
          <h1 className="text-7xl mb-10 font-medium w-2/3 leading-tight m-auto">
            Where good people meet great food and unlimited fun.
          </h1>
          <div>
            <Card />
          </div>
        </div>
        <div>
          <p className="text-xl text-black font-medium mb-16 w-2/3 leading-10 m-auto">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos hymenaeos. Duis lox`bortis massa imperdiet quam. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Phasellus dolor. Ut varius tincidunt libero.
          </p>

          <div className="w-2/3 m-auto mb-10">
            <div className=" flex gap-20 items-center">
              <div>
                <p className="font-medium text-5xl text-black pb-4">2016</p>
                <p className="text-black font-medium text-lg">FOUNDING YEAR</p>
              </div>
              <div className="border-r-2">
                <p className="vertical  relative"></p>
              </div>
              <div className=" mr-20  relative">
                <p className="font-medium text-5xl text-black pb-4">12</p>
                <p className="text-black font-medium text-lg">
                  AMAZING MEMBERS
                </p>
              </div>
            </div>
          </div>

          <p className="w-2/3 text-black text-xl font-medium m-auto">
            Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida
            nisl, id fringilla neque ante vel mi. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Sed fringilla mauris sit amet nibh. Phasellus gravida semper nisi.
            Sed cursus turpis vitae tortor. Vestibulum dapibus nunc ac augue.
            Etiam ut purus mattis mauris sodales aliquam. Vestibulum suscipit
            nulla quis orci. Nam eget dui. Morbi ac felis.
          </p>
        </div>
      </div>
      <hr className="pb-20" />
      <div className="font-sans">
        <h1 className="w-1/3 text-4xl font-bold text-black">MEET THE TEAM</h1>

        <div className="flex gap-10">
          {imgArray.map((item) => {
            return (
              <div className="mb-20">
                <img className="pb-4" src={item.imgSrc} alt="" />
                <h3 className="font-bold text-lg text-black">{item.name}</h3>
                <p className="font-medium  text-lg text-black">{item.role}</p>
              </div>
            );
          })}
        </div>
      </div>
      <hr className="pb-20" />
      <div>
        <div className="flex gap-20 mb-20">
          <h1 className="w-1/3 text-4xl font-bold text-black">SUSTAINABILITY AND VISION.</h1>
          <div className="w-2/4 m-auto">
            <p className="font-sans text-lg text-black leading-5 font-medium">
              Maecenas egestas arcu quis ligula mattis placerat. Fusce a quam.
              Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum
              eget, diam. Etiam rhoncus. Etiam ut purus mattis mauris sodales
              aliquam.
              <br /> 
              <br /> 
              Praesent ut ligula non mi varius sagittis. Nunc egestas,
              augue at pellentesque laoreet, felis eros vehicula leo, at
              malesuada velit leo quis pede. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Sed
              aliquam, nisi quis porttitor congue, elit erat euismod orci, ac
              placerat dolor lectus quis orci. Aenean ut eros et nisl sagittis
              vestibulum. Phasellus ullamcorper ipsum rutrum nunc.
              <br /> 
              <br /> 

              Suspendisse
              nisl elit, rhoncus eget, elementum ac, condimentum eget, diam.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec sodales sagittis magna.
              Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue
              nunc, vitae euismod ligula urna in dolor. Etiam imperdiet
              imperdiet orci.
            </p>
          </div>
        </div>

        <div className="flex gap-10 mb-20 relative">
          <img src="./assets/image4.jpg" className="w-3/5" alt="" />
          <img src="./assets/image5.jpg" alt="" className="w-1/3" />
        </div>

        <div className="flex gap-20 mb-20">
          <h1 className="w-1/3 text-4xl font-bold text-black">THE SPACE, THE PEOPLE THE FOOD.</h1>
          <div className="w-2/4 m-auto">
            <p className="font-sans text-lg text-black leading-5 font-medium">
              Cras dapibus. Etiam ut purus mattis mauris sodales aliquam. Sed
              libero. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc. Aenean tellus metus, bibendum sed, posuere ac, mattis non,
              nunc.
              <br />
              <br />
               Nulla sit amet est. Vestibulum purus quam, scelerisque ut,
              mollis sed, nonummy id, metus. Fusce ac felis sit amet ligula
              pharetra condimentum. Fusce pharetra convallis urna. Vestibulum
              purus quam, scelerisque ut, mollis sed, nonummy id, metus. 
              <br />
              <br />
              Nulla
              neque dolor, sagittis eget, iaculis quis, molestie non, velit.
              Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Etiam ut purus mattis mauris
              sodales aliquam. Ut varius tincidunt libero.
            </p>
          </div>
        </div>

        <Footer/>
      </div>
    </motion.div>
  );
};
