
import bannerImage from "../assets/banner-stack.png";
const Banner = () => {
  return (
    <section id="home" className="bg-[white] py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-[-0.06em] text-slate-900">
              <span className="block">Build Your Ideal</span>
              <span className="block text-gradient-brand">Development Stack</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#tech"
                className="btn border-none bg-gradient-brand text-white rounded-full px-6 font-bold shadow-lg"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="btn btn-outline border border-slate-400 text-slate-900"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={bannerImage}
              alt="Banner"
              className="w-full max-w-[620px] rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;