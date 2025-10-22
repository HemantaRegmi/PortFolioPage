import laptopImage from "../../assets/laptopImage.jpg";
import typescriptIcon from "../../assets/typescriptIcon.svg";
import pythonIcon from "../../assets/pythonIcon.svg";

export default function About() {
  return (
    <>
      <section className="grid h-auto md:grid-cols-2 gap-2 items-center my-h-screen m-6">
        <div className="text-center ">
          <h1 className="text-5xl text-center font-semibold  text-black">
            Hello! My name is Hemanta Regmi
          </h1>
          <div className="text-2xl text-center  text-black my-8">
            I am a Software Engineer with a love for programming.
          </div>
        </div>
        <img
          className="flex w-full h-full justify-center rounded-lg"
          src={laptopImage}
          alt="Laptop"
        />
      </section>
      <h2 className="flex h-12 md:grid-cols-2 justify-center items-center my-h-screen text-3xl font-semibold my-12 text-black">
        My Favorites!
      </h2>
      <section className="grid h-auto md:grid-cols-3 gap-6 my-h-screen m-6">
        <div className="flex justify-center items-center aspect-square bg-gray-200 rounded-lg ">
          <img
            className="grid object-center w-20 h-20"
            src={typescriptIcon}
            alt="typescript"
          />
        </div>
        <div className="flex justify-center items-center aspect-square bg-gray-200 rounded-lg ">
          <img
            className="grid object-center w-20 h-20"
            src={pythonIcon}
            alt="python"
          />
        </div>
        <div className="flex justify-center items-center aspect-square bg-gray-200 rounded-lg ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          hic aliquid architecto perferendis consectetur impedit aliquam
          voluptatem nesciunt repudiandae perspiciatis iusto debitis sunt
          doloribus aperiam eum autem, placeat quas voluptatum.
        </div>
      </section>
    </>
  );
}
