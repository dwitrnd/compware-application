import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { useEffect } from "react";
import { constant } from "constants/contants";
import axios from "axios";

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
  const [index, setIndex] = useState(-1);

  const [images, setImages] = useState([]);

  const [filteredImages, setFilteredImages] = useState(images);

  const currentImage = filteredImages[index];
  const nextIndex = (index + 1) % filteredImages.length;
  const nextImage = filteredImages[nextIndex] || currentImage;
  const prevIndex = (index + filteredImages.length - 1) % filteredImages.length;
  const prevImage = filteredImages[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  // filter function to filter based on tags
  // const filterImages = (letter) => {
  //   const filteredImages = images.filter((image) => {
  //     return image.tags.some((tag) => tag.value.includes(letter));
  //   });

  //   if (filteredImages.length === 0) {
  //     setFilteredImages(images);
  //   } else {
  //     setFilteredImages(filteredImages);
  //     console.log(filteredImages);
  //   }
  // };

  useEffect(() => {
    // axios fetch gallery from api
    const url = `${constant.base}/api/gallery`;

    axios.get(url).then((res) => {
      console.log(res.data);

      const images = res.data.msg.map((image) => {
        return {
          src: `${constant.base}/storage/${image.Image}`,
          original: `${constant.base}/storage/${image.Image}`,
        };
      });

      setImages(images);
      setFilteredImages(images);
      console.log(images);
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
          }}
        >
          Gallery
        </Typography>
        {/* filter input  */}

        {/* <TextField id='standard-search' label='Search field' type='search' variant='standard' onChange={(e) => filterImages(e.target.value)} sx={{ width: "10.5rem", marginBottom: "2rem" }} /> */}

        <Gallery images={filteredImages} onClick={handleClick} enableImageSelection={false} />

        {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
            mainSrc={currentImage.original}
            imageTitle={currentImage.caption}
            mainSrcThumbnail={currentImage.src}
            nextSrc={nextImage.original}
            nextSrcThumbnail={nextImage.src}
            prevSrc={prevImage.original}
            prevSrcThumbnail={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}
      </Container>
    </>
  );
}
