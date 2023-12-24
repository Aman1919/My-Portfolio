export default function Home() {
  return (
    <section className="w-5/6 m-auto mt-12" >
      <h1 className="text-center text-shadow-pop-tl">About MySelf</h1>
      <div className="flex flex-wrap justify-between items-center  m-auto w-full p-2  ">
        <div className="max-w-sm rounded-full  bg-slate-900 m-auto">
              <img
          src={require("../assets/aman.png")}
          className="m-auto"
          alt="amanphoto"
                  />
                  </div>
        <div className="max-w-2xl p-2 m-auto">
                  <p className="text-center m-auto leading-6 tracking-wide">
              I'm Aman, a Undergraduate at Maharaja Surajmal Institute . Currently , I am immersing myself in the world of programming and figuring what to do . I am eager to connect with like minded individuals , learn from experienced professionals and gain valuable insights into the industry. whether you're a mentor , a potential employer, or anyone who shares my enthusiasm for professional growth and development. I would love to connect and grow together.      
          </p>
        </div>
      </div>
    </section>
  );
}
