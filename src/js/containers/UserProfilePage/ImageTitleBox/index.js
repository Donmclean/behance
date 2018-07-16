import React from 'react';
import PropTypes from 'prop-types';
import { BodyText, MissingImageBox } from '../../../themeComponents';
import { ImageTitleBoxWrapper, ImageTitleBoxImageWrapper,
    ImageTitleBoxMainText, ImageTitleBoxMainInfoWrapper } from './styles';

const ImageTitleBox = ({ styles, currentUser, imageSize = 138 }) => (
    <ImageTitleBoxWrapper styles={styles}>
        <ImageTitleBoxImageWrapper>
            {currentUser.images && currentUser.images[imageSize] ? (
                <img src={currentUser.images[imageSize]}/>
            ) : (
                <MissingImageBox imageSize={imageSize} />
            )}
        </ImageTitleBoxImageWrapper>
        <ImageTitleBoxMainInfoWrapper>
            <ImageTitleBoxMainText>{`${currentUser.first_name} ${currentUser.last_name}`}</ImageTitleBoxMainText>
            {currentUser.occupation && (
                <BodyText>"{currentUser.occupation}"</BodyText>
            )}
        </ImageTitleBoxMainInfoWrapper>
        
    </ImageTitleBoxWrapper>
);

ImageTitleBox.propTypes = {
    styles: PropTypes.object,
    currentUser: PropTypes.object.isRequired,
    imageSize: PropTypes.number.isRequired
};

export default ImageTitleBox;