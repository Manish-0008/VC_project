import React, { useEffect } from "react";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const GallerySection = () => {
  useEffect(() => {
    import("@fancyapps/ui").then((Fancybox) => {
      Fancybox.Fancybox.bind("[data-fancybox='gallery']", {});
    });
  }, []);

  return (
    <section className="gallery-section">
      <div className="content-heading">
        <h3>Our Gallery</h3>
        <p>Some fond memories to cherish…</p>
      </div>
      <div className="gallery">
        {Array.from({ length: 10 }, (_, index) => {
          const imageNumber = (index + 1).toString().padStart(2, "0"); // Ensures '01', '02', ... '10'
          return (
            <a
              key={index}
              href={`assets/images/gallery${imageNumber}.png`}
              data-fancybox="gallery"
            >
              <img src={`assets/images/gallery${imageNumber}.png`} alt={`Gallery ${imageNumber}`} />
            </a>
          );
        })}
      </div>
      <div className="text-center mt-4">
        <button className="allBtn">VIEW MORE</button>
      </div>
    </section>
  );
};

export default GallerySection;
