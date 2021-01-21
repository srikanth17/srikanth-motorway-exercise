import React from 'react';
import styled from 'styled-components';
import Img from 'react-cool-img';
import FullSizeImage from './FullSizeImage';

const Image = styled(Img)`
  height: 200px;
  object-fit: cover;
`;

const CardItem = ({ created_at, description, alt_description, url, user }) => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <Image src={url} alt={alt_description} />
          <span className="card-title">{user.location}</span>
        </div>
        <div className="card-content">{description}</div>
        <div className="card-action">
          <FullSizeImage
            created={created_at}
            alt={alt_description}
            url={url}
            user={user}
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
