import  { useEffect, useRef } from "react";
import './testimonial.css';
import { testimonials } from "../../Data/testimonials-data";
import TestimonialCard from "./testimonial-card";

const Testimonial: React.FC = () => {
    const testimonialsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.testimonial-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('in-view');
                        }, index * 100); // stagger the animations
                    });
                } else {
                    const cards = entry.target.querySelectorAll('.testimonial-card');
                    cards.forEach((card) => {
                        card.classList.remove('in-view');
                    });
                }
            });
        }, { threshold: 0.1 });

        if (testimonialsRef.current) {
            observer.observe(testimonialsRef.current);
        }

        return () => {
            if (testimonialsRef.current) {
                observer.unobserve(testimonialsRef.current);
            }
        };
    }, []);

    return (
        <section id="testimonials" ref={testimonialsRef}>
            <div className="title-testimonial">
                <h1>Testimonials</h1>
            </div>
            <div className="subtitle-testimonial">
                <p>
                    <span>WHAT OUR CUSTOMERS </span> 
                    <span>HAVE TO SAY ABOUT US!</span>
                </p>
            </div>
            <div className="testimonials-container">
                {
                    testimonials.map((item, index) => (
                        <TestimonialCard key={index} number={index} command={item.command} name={item.name} date={item.date} />
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonial;
