import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with this team has been absolutely transformative for our business. Their attention to detail and commitment to excellence is unmatched.",
    name: "Sarah Johnson",
    title: "CEO",
    company: "TechFlow Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The level of professionalism and expertise they bring to every project is remarkable. We've seen incredible results since partnering with them.",
    name: "Michael Chen",
    title: "CTO",
    company: "InnovateLab",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Their innovative approach and dedication to our success has made them an invaluable partner. I highly recommend their services.",
    name: "Emily Rodriguez",
    title: "Marketing Director",
    company: "GrowthCorp",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Outstanding service and exceptional results. They truly understand our business needs and deliver beyond expectations every time.",
    name: "David Thompson",
    title: "Founder",
    company: "StartupHub",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
];

const trustedCompanies = [
  {
    name: "TechFlow",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "InnovateLab",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "GrowthCorp",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "StartupHub",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "CloudTech",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "DataSync",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvb2dsZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
          </p>
        </div>

        <div className="mb-16">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/2"
                >
                  <div className="p-2">
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex flex-col h-full">
                          <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />

                          <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-primary text-primary"
                              />
                            ))}
                          </div>

                          <blockquote className="text-lg leading-relaxed mb-6 flex-grow">
                            "{testimonial.quote}"
                          </blockquote>

                          <div className="flex items-center">
                            <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                              />
                              <AvatarFallback>
                                {testimonial.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {testimonial.title}, {testimonial.company}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="max-w-5xl mx-auto px-4 my-20">
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">
            Trusted by Leading Companies
          </h3>
          <Marquee speed={50} pauseOnHover={false}>
            <div className="flex gap-3 justify-center items-center">
              {trustedCompanies?.map((company, index) => (
                <div
                  key={index}
                  className="w-64 h-36  flex justify-center items-center mx-6 "
                >
                  <img
                    src={company?.logo}
                    alt={company?.name}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
