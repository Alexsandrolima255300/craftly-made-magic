import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Oficina de móveis artesanais"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <img
          src={logo}
          alt="Hand Made - Alternative Decor"
          className="w-64 md:w-80 mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
