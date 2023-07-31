import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Container from "@material-ui/core/Container";
import { TextField } from "@mui/material";
import { Typography } from "@material-ui/core";

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

  const [images, setImages] = useState([
    {
      src: CompwareImage1,
      original: CompwareImage1,
      width: 320,
      height: 174,
      tags: [
        { value: "trainee", title: "trainee" },
        { value: "programming", title: "programming" },
      ],
      caption: "girl in a jacket learning programming",
    },
    {
      src: CompwareImage2,
      original: CompwareImage2,
      width: 320,
      height: 212,
      caption: "office to learn",
      tags: [{ value: "office", title: "office" }],
    },
    {
      src: CompwareImage3,
      original: CompwareImage3,
      width: 320,
      height: 212,
      caption: "student learning",
      tags: [
        { value: "trainee", title: "trainee" },
        { value: "programming", title: "programming" },
      ],
    },
    {
      src: CompwareImage4,
      original: CompwareImage4,
      width: 320,
      height: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
      tags: [{ value: "pair programming", title: "pair programming" }],
    },
    {
      src: CompwareImage5,
      original: CompwareImage5,
      width: 320,
      height: 183,
      caption: "37H (gratispgraphy.com)",
      tags: [
        { value: "Intern", title: "Intern" },
        { value: "programming", title: "programming" },
      ],
    },
    {
      src: CompwareImage6,
      original: CompwareImage6,
      width: 540,
      height: 320,
      tags: [{ value: "Support", title: "Support" }],
      caption: "8H (gratisography.com)",
    },
    {
      src: CompwareImage7,
      original: CompwareImage7,
      width: 320,
      height: 190,
      caption: "286H (gratisography.com)",
      tags: [
        { value: "mentor", title: "mentor" },
        { value: "session", title: "session" },
      ],
    },
    {
      src: CompwareImage8,
      original: CompwareImage8,
      width: 320,
      height: 148,
      tags: [
        { value: "mentor", title: "mentor" },
        { value: "session", title: "session" },
      ],
      caption: "315H (gratisography.com)",
    },
    {
      src: CompwareImage9,
      original: CompwareImage9,
      width: 320,
      height: 213,
      caption: "201H (gratisography.com)",
      tags: [
        { value: "mentor", title: "mentor" },
        { value: "session", title: "session" },
      ],
    },
    {
      src: CompwareImage1,
      original: CompwareImage1,
      width: 320,
      height: 174,
      tags: [
        { value: "trainee", title: "trainee" },
        { value: "programming", title: "programming" },
      ],
      caption: "girl in a jacket learning programming",
    },
    {
      src: CompwareImage2,
      original: CompwareImage2,
      width: 320,
      height: 212,
      caption: "office to learn",
      tags: [{ value: "office", title: "office" }],
    },
    {
      src: CompwareImage3,
      original: CompwareImage3,
      width: 320,
      height: 212,
      caption: "student learning",
      tags: [
        { value: "trainee", title: "trainee" },
        { value: "programming", title: "programming" },
      ],
    },
    {
      src: CompwareImage4,
      original: CompwareImage4,
      width: 320,
      height: 213,
      caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
      tags: [{ value: "pair programming", title: "pair programming" }],
    },
    {
      src: CompwareImage5,
      original: CompwareImage5,
      width: 320,
      height: 183,
      caption: "37H (gratispgraphy.com)",
      tags: [
        { value: "Intern", title: "Intern" },
        { value: "programming", title: "programming" },
      ],
    },
    {
      src: CompwareImage6,
      original: CompwareImage6,
      width: 540,
      height: 320,
      tags: [{ value: "Support", title: "Support" }],
      caption: "8H (gratisography.com)",
    },
    {
      src: CompwareImage7,
      original: CompwareImage7,
      width: 320,
      height: 190,
      caption: "286H (gratisography.com)",
      tags: [
        { value: "mentor", title: "mentor" },
        { value: "session", title: "session" },
      ],
    },
    {
      src: CompwareImage8,
      original: CompwareImage8,
      width: 320,
      height: 148,
      tags: [
        { value: "mentor", title: "mentor" },
        { value: "session", title: "session" },
      ],
      caption: "315H (gratisography.com)",
    },
    {
      src: CompwareImage9,
      original: CompwareImage9,
      width: 320,
      height: 213,
      caption: "201H (gratisography.com)",
      tags: [
        { value: "mentor", title: "mentor" },
        { value: "session", title: "session" },
      ],
    },
  ]);

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
  const filterImages = (letter) => {
    const filteredImages = images.filter((image) => {
      return image.tags.some((tag) => tag.value.includes(letter));
    });

    if (filteredImages.length === 0) {
      setFilteredImages(images);
    } else {
      setFilteredImages(filteredImages);
      console.log(filteredImages);
    }
  };

  return (
    <>
      <Container>
        <Typography
          variant="h3"
          color="primary"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          Gallery
        </Typography>
        {/* filter input  */}

        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
          onChange={(e) => filterImages(e.target.value)}
          sx={{ width: "10.5rem", marginBottom: "2rem" }}
        />

        <Gallery
          images={filteredImages}
          onClick={handleClick}
          enableImageSelection={false}
        />

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
