import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { constant } from "constants/contants";
import axios from "axios";
import { useParams } from "react-router-dom";


import CompwareImage1 from "../../assets/images/compware-gallery/compware-gallery-img1.jpg";
import CompwareImage2 from "../../assets/images/compware-gallery/compware-gallery-img2.jpg";
import CompwareImage3 from "../../assets/images/compware-gallery/compware-gallery-img3.jpg";
import CompwareImage4 from "../../assets/images/compware-gallery/compware-gallery-img4.jpg";
import CompwareImage5 from "../../assets/images/compware-gallery/compware-gallery-img5.jpg";
import CompwareImage6 from "../../assets/images/compware-gallery/compware-gallery-img6.jpg";
import CompwareImage7 from "../../assets/images/compware-gallery/compware-gallery-img7.jpg";
import CompwareImage8 from "../../assets/images/compware-gallery/compware-gallery-img8.jpg";
import CompwareImage9 from "../../assets/images/compware-gallery/compware-gallery-img9.jpg";

export default function App() {
  const { id } = useParams();
  const [index, setIndex] = useState(-1);
  const itemsPerPage = 15;

  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);

  const [filteredImages, setFilteredImages] = useState(images);

  const currentImage = filteredImages[index];
  const nextIndex = (index + 1) % filteredImages.length;
  const nextImage = filteredImages[nextIndex] || currentImage;
  const prevIndex = (index + filteredImages.length - 1) % filteredImages.length;
  const prevImage = filteredImages[prevIndex]?.original || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  useEffect(() => {
    // axios fetch gallery from api
    const url = `${constant.base}/api/gallery/${id}`;

    axios.get(url).then((res) => {
      console.log(res.data);
      console.log(res.data.data);
      setCategory(res.data.data);
      console.log(category)
      const images = res.data.data.images.map((imageFilename) => {
        const imageUrl = `${constant.base}/storage/${imageFilename}`;
        return { 
          src: imageUrl,
          original: imageUrl,
        };
      });
      
      setImages(images);
      setFilteredImages(images);
    });
  }, []);

  return (
    <>
      <Container>
      
        <Typography
          variant='h3'
          color='primary'
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
            marginBottom:"1rem"
          }}
        >
          Gallery
        </Typography>

        {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
       {category.slice(0, itemsPerPage).map((item) => (
        <ImageListItem key={category}>
           <img
             src={category}
             loading="lazy"
           />
         </ImageListItem>
       ))}
     </ImageList> */}
        <Gallery images={filteredImages} onClick={handleClick} enableImageSelection={false} />

        {currentImage && (
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage && nextImage.original}
            nextSrcThumbnail={nextImage && nextImage.src}
            prevSrc={prevImage && prevImage.original}
            prevSrcThumbnail={prevImage && prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
    />
        )}
      </Container> 
    </>
  );
}
