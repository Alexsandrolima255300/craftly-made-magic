import { Hammer, Palette, PenTool } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  { icon: Hammer, title: "Móveis Planejados", desc: "Sob medida para o seu espaço" },
  { icon: Palette, title: "Decoração Artesanal", desc: "Peças exclusivas feitas à mão" },
  { icon: PenTool, title: "Projetos Personalizados", desc: "Do conceito à entrega final" },
];

const Services = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <img
        src={servicesBg}
        alt="Decoração artesanal"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-secondary/90" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-16">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-2xl bg-background/30 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:border-primary/40 hover:bg-background/50"
            >
              <s.icon className="w-10 h-10 text-primary mx-auto mb-5 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
