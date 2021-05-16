import React from "react";
import SimpleCarousel from "simple-react-carousel";
import NavBar from "./NavBar";
import { Typography, Box } from "@material-ui/core";

const testimonial = () => {
  const imagesArray = [
    "https://image.freepik.com/free-vector/speech-bubble-testimonial-concept_23-2147940986.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJv4dFpINR1mfkBecoirP0f0OGTkNk8wg0kAWYZNB6zXs9OS3pTxV7MWoz39hxFw_8qP8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAvS0_D_DIhtseI8H_i2_nti-BD7ulg3Tda00VcLRG6I12E4eODKqhcmWW9D8gedb-l4&usqp=CAU",
    "data:image/png;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0ixLhSK7_jQNzjjgG0jfTgZnTtjdKqVWAV36f8hOCTMJQgdlTeosZq35wwkt1QbKmdU&usqp=CAU",
  ];
  const renderImages = (images) =>
    images.map((image, i) => (
      <img key={`${image}-${i}`} src={image} alt={`Test image ${i}`} />
    ));

  return (
    <div>
      <NavBar />
      <Box container p={3}>
        <Typography align='center' color='primary' variant='h4'>
          Our Success Stories
        </Typography>
        <Box item p={2}>
          <SimpleCarousel>{renderImages(imagesArray)}</SimpleCarousel>
        </Box>
      </Box>
    </div>
  );
};

export default testimonial;