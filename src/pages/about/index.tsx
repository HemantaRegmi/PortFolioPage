import laptopImage from "../../assets/laptopImage.jpg";

export default function About() {
  return (
    <>
      <section className="grid h-auto md:grid-cols-2 items-center  my-h-screen font-mono m-6">
        <div className="text-center font-mono">
          <h1 className="text-5xl text-center font-semibold  text-black">
            Hello! My name is Hemanta Regmi
          </h1>
          <div className="text-2xl text-center  text-black my-4">
            I am a Software Engineer with a love for programming.
          </div>
        </div>
        <img
          className="flex w-full h-full justify-center rounded-lg"
          src={laptopImage}
          alt="Laptop"
        />
      </section>
      <h2 className="flex h-auto md:grid-cols-2 justify-center my-h-screen text-3xl font-semibold font-mono my-12">
        My Favorites!
      </h2>
      <section className="grid h-auto md:grid-cols-3 items-center  my-h-screen font-mono mx-4 mt-6">
        <div className="text-center bg-gray-200 rounded-lg mx-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          minima natus corrupti quam dolorem, ea dicta temporibus a. Eligendi
          repellendus error debitis laudantium ex explicabo ipsum, voluptatibus
          est molestia.
        </div>
        <div className="text-center bg-gray-200 rounded-lg mx-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis
          quisquam id, rerum nulla et earum magni reprehenderit culpa
          consequuntur animi delectus. Aliquam, vitae dignissimos alias optio
          suscipit natus maiores.
        </div>
        <div className="text-center bg-gray-200 rounded-lg mx-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          eius ad unde corporis a magnam fugit asperiores sapiente, harum
          eligendi ea in qui cupiditate. Tenetur ad labore eligendi! Laborum,
          dignissimos!
        </div>
      </section>
    </>
  );
}
