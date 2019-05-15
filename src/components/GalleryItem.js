import React from "react";

const GalleryItem = props => (  //display each list item and image.
    <li className="gif-wrap">
        <img 
            src={props.url}
            alt={props.title} />
    </li>
);

export default GalleryItem;