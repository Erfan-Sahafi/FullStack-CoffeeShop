import Button from "@/components/modules/Button/Button";
import Title from "@/components/modules/Title/Title";
import Image from "next/image";

const AboutBestCoffee = () => {
  return (
    <>
      <div className="container flex font-playfairDisplay items-center justify-between mt-16">
        <div className="w-[45%]">
          <Title position={null} title="Discover the best coffee" />
          <div className="mt-8">
            <p className="text-justify text-xl text-maingray">
              Radkan Coffee is a coffee shop that provides you with quality
              coffee that helps boost your productivity and helps build your
              mood. Having a cup of coffee is good, but having a cup of real
              coffee is greater. There is no doubt that you will enjoy this
              coffee more than others you have ever tasted.
            </p>
            <Button text={"Learn More"}/>
          </div>
        </div>
        <Image
          alt="coffee"
          width={500}
          height={500}
          src={"/images/coffeemug.png"}
        />
      </div>
      <Image
        className="-mt-40"
        alt="coffee"
        width={498}
        height={272}
        src={"/coffee_blast.svg"}
      />
    </>
  );
};

export default AboutBestCoffee;
