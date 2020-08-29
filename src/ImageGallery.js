import React from 'react'
import ImageGallery from 'react-image-gallery';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

class MyComponent extends React.Component {

  render() {

    const images = [
      {
        original: 'images/gallery/alien.jpg',
        thumbnail: 'images/gallery/alien.jpg',
      },
      {
        original: 'images/gallery/benchyBlu.jpg',
        thumbnail: 'images/gallery/benchyBlu.jpg'
      },
      {
        original: 'images/gallery/blackWidow.jpg',
        thumbnail: 'images/gallery/blackWidow.jpg',
      },
      {
        original: 'images/gallery/cuoreSofia.jpeg',
        thumbnail: 'images/gallery/cuoreSofia.jpeg'
      },
      {
        original: 'images/gallery/cuoreVoronoi.jpg',
        thumbnail: 'images/gallery/cuoreVoronoi.jpg',
      },
      {
        original: 'images/gallery/delfini.jpg',
        thumbnail: 'images/gallery/delfini.jpg'
      },
      {
        original: 'images/gallery/dwarf.jpg',
        thumbnail: 'images/gallery/dwarf.jpg',
      },
      {
        original: 'images/gallery/litoGiuseppe.jpg',
        thumbnail: 'images/gallery/litoGiuseppe.jpg'
      },
    ]

    return (
      <ImageGallery items={images} />
    );
  }
}

export default MyComponent