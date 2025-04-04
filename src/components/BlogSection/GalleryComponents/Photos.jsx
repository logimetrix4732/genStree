import React, { useState } from "react";
import pho from "../../../Imges/GalleryImg/pho.png";
import pho2 from "../../../Imges/GalleryImg/pho2.png";
import pho3 from "../../../Imges/GalleryImg/pho3.png";
import pho4 from "../../../Imges/GalleryImg/pho4.png";
import pho6 from "../../../Imges/GalleryImg/pho6.png";
import pho7 from "../../../Imges/GalleryImg/pho7.png";
import pho8 from "../../../Imges/GalleryImg/pho8.png";
import pho9 from "../../../Imges/GalleryImg/pho9.png";
import pho10 from "../../../Imges/GalleryImg/pho10.png";
import pho12 from "../../../Imges/GalleryImg/pho12.png";
import pho13 from "../../../Imges/GalleryImg/pho13.png";
import pho14 from "../../../Imges/GalleryImg/pho14.png";
import pho16 from "../../../Imges/GalleryImg/pho16.png";
import pho17 from "../../../Imges/GalleryImg/pho17.png";
import pho18 from "../../../Imges/GalleryImg/pho18.png";
import photo from "../../../Imges/GalleryImg/photo.jpeg";
import photo1 from "../../../Imges/GalleryImg/photo1.jpeg";
import photo2 from "../../../Imges/GalleryImg/photo2.jpeg";
import photo3 from "../../../Imges/GalleryImg/photo3.jpeg";
import photo4 from "../../../Imges/GalleryImg/photo4.jpeg";
import photo5 from "../../../Imges/GalleryImg/photo5.jpeg";
import photo6 from "../../../Imges/GalleryImg/photo6.jpeg";
import photo7 from "../../../Imges/GalleryImg/photo7.jpeg";
import photo8 from "../../../Imges/GalleryImg/photo8.jpeg";
import photo9 from "../../../Imges/GalleryImg/photo9.jpeg";
import photo10 from "../../../Imges/GalleryImg/photo10.jpeg";
import photo11 from "../../../Imges/GalleryImg/photo11.jpeg";
import photo12 from "../../../Imges/GalleryImg/photo12.jpeg";
import photo13 from "../../../Imges/GalleryImg/photo13.jpeg";
import photo14 from "../../../Imges/GalleryImg/photo14.jpeg";

const imageData = [
  { id: 1, src: pho8 },
  { id: 2, src: pho7 },
  { id: 3, src: pho9 },
  { id: 4, src: pho3 },
  { id: 5, src: pho2 },
  { id: 6, src: pho16 },
  { id: 7, src: pho17 },
  { id: 8, src: pho4 },
  { id: 9, src: pho6 },
  { id: 10, src: pho10 },
  { id: 11, src: pho12 },
  { id: 12, src: pho13 },
  { id: 13, src: pho14 },
  { id: 14, src: pho },
  { id: 15, src: pho18 },
  { id: 16, src: photo },
  { id: 17, src: photo1 },
  { id: 19, src: photo3 },
  // { id: 20, src: photo4 },
  { id: 21, src: photo5 },
  { id: 22, src: photo6 },
  // { id: 23, src: photo7 },
  { id: 24, src: photo8 },
  { id: 25, src: photo9 },
  { id: 26, src: photo10 },
  // { id: 27, src: photo11 },
  { id: 28, src: photo12 },
  { id: 29, src: photo13 },
  { id: 30, src: photo14 },
];

const Photos = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  const totalPages = Math.ceil(imageData.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = imageData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);

      setTimeout(() => {
        window.scrollTo({ top: 3100, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="space-extra-bottom scroller">
      <div className="container " style={{ maxWidth: "1400px" }}>
        <div className="row gy-4 space-bottom">
          {currentBlogs.map((image) => (
            <div key={image.id} className="col-md-6 col-xl-4">
              <div className="gallery-card">
                <div className="gallery-img">
                  <img
                    src={image.src}
                    alt="gallery image"
                    loading="lazy"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <a
                    href={image.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="play-btn style3 popup-image"
                  >
                    <i className="far fa-plus" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="th-pagination text-center">
          <ul>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(index + 1);
                  }}
                >
                  {index + 1}
                </a>
              </li>
            ))}

            {currentPage < totalPages && (
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    paginate(currentPage + 1);
                  }}
                >
                  <i className="far fa-arrow-right" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Photos;
