import AnimatedCard from "@/components/atom/AnimatedCard";
import FloatingElements from "@/components/atom/FloatingElements";
import { Brain, Code, Users } from "lucide-react";

const services = [
  {
    delay: 0,
    icon: <Code className="h-8 w-8 text-blue-600" />,
    iconBg: "bg-blue-100",
    title: "Software Development",
    description:
      "Custom software solutions built with cutting-edge technologies to meet your specific business requirements.",
    bullets: [
      "Web Application Development",
      "Mobile App Development",
      "API Development & Integration",
      "Database Design & Optimization",
      "Cloud-Native Solutions",
    ],
  },
  {
    delay: 0.2,
    icon: <Brain className="h-8 w-8 text-green-600" />,
    iconBg: "bg-green-100",
    title: "AI Training & Implementation",
    description:
      "Comprehensive AI training programs and implementation services to help your organization leverage artificial intelligence.",
    bullets: [
      "AI Strategy Development",
      "Machine Learning Implementation",
      "Team Training & Workshops",
      "AI Tool Integration",
      "Performance Optimization",
    ],
  },
  {
    delay: 0.4,
    icon: <Users className="h-8 w-8 text-purple-600" />,
    iconBg: "bg-purple-100",
    title: "Strategic Consulting",
    description:
      "Expert guidance on technology strategy, digital transformation, and innovation to accelerate your business objectives.",
    bullets: [
      "Technology Strategy Planning",
      "Digital Transformation",
      "Process Optimization",
      "Innovation Workshops",
      "Technology Audits",
    ],
  },
];

const MainServices = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <FloatingElements />
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={index} delay={service.delay}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full  transition-shadow duration-300">
                <div
                  className={`w-16 h-16 ${service.iconBg} rounded-lg flex items-center justify-center mb-6`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="opacity-70 mb-6">{service.description}</p>
                <ul className="space-y-2 opacity-70 mb-6">
                  {service.bullets.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServices;
