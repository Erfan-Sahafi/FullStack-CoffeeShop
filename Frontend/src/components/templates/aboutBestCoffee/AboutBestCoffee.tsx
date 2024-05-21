import Image from "next/image";

const AboutBestCoffee = () => {
  return (
    <div className="container flex font-playfairDisplay items-center justify-evenly">
      <div className="w-[50%]">
        <h2 className="text-coffee text-5xl mb-8">Discover the best coffee</h2>
        <div>
          <p className="text-justify text-xl text-maingray">
            Radkan Coffee is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <button className="w-28 bg-main text-center py-2 text-secondry rounded-3xl shadow-button mt-4">
            Learn More
          </button>
        </div>
      </div>
      <Image
        alt="coffee"
        width={400}
        height={400}
        src={"/images/coffeemug.png"}
      />
    </div>
  );
};

export default AboutBestCoffee;
