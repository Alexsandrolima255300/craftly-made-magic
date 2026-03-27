import heroBg from "@/assets/hero-bg.jpg";

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
        <h1 className="font-display text-8xl md:text-9xl font-bold text-primary tracking-tight">
          HM
        </h1>
        <p className="font-body text-xl md:text-2xl tracking-[0.4em] uppercase text-foreground/80 mt-4">
          Hand Made
        </p>
        <div className="w-20 h-px bg-primary/40 mx-auto mt-8" />
      </div>
    </section>
  );
};

export default Hero;
