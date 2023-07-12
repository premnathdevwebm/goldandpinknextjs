"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Testimonial.module.css";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "Pellentesque nec elit nec dolor tincidunt fringilla eu nec mauris.",
    },
    // Add more testimonials as needed
  ];

  return (
      <div className={styles.content}>
        <h2 className={styles.title}>TESTIMONIALS</h2>
        <div className={styles.caroselcontent}>
        <Carousel interval={3000} autoPlay infiniteLoop showThumbs={false}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.testimonial}</p>
            </div>
          ))}
        </Carousel>
        </div>
      </div>
  );
};

export { TestimonialCarousel };
