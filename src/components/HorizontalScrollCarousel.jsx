import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScrollCarousel() {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="photo-section" >
      <div className="photos-container">
        <motion.div style={{ x }} className="card-container">
          <div className="photo">1</div>
          <div className="photo">2</div>
          <div className="photo">3</div>
          <div className="photo">4</div>
          <div className="photo">5</div>
          <div className="photo">6</div>
          <div className="photo">7</div>
          <div className="photo">8</div>
          <div className="photo">9</div>
        </motion.div>
      </div>
    </section>
  )
}