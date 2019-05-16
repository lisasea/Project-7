import React from 'react';
import GalleryItem from './GalleryItem';
import NoResults from './NoResults';

const Gallery = props => { // display the sets of images for each of the three topic categories
    const results = props.data;
    let images;

    if (results.length > 0) {
        images = results.map(image => (
            <GalleryItem
                url={`https://farm${image.farm}}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                key={image.id}
            />
        ));
    } else {
        images = <NoResults />;
    }

    return (
        <div className="photo-container">
            <h2>{(props.loading) ? "Loading..." : ""}</h2>
            <h1>{`${props.query}`}</h1>
                <ul>{images}</ul>
        </div>
    );
}

export default Gallery;