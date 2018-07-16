import React from 'react';
import PropTypes from 'prop-types';
import { BodyText, TypiconFontWidget } from '../../../themeComponents';
import { BasicInfoWidgetWrapper, BasicInfoFieldsWrapper } from './styles';

import { openExternalLink } from '../../../utils';

const BasicInfoWidget = ({ currentUser }) => (
    <BasicInfoWidgetWrapper>
        <BodyText>
            <TypiconFontWidget className="typcn typcn-user" />
            {currentUser.username}
        </BodyText>
        <BodyText>
            <TypiconFontWidget className="typcn typcn-location" />
            {`${currentUser.city}, ${currentUser.country}`}
        </BodyText>
        {currentUser.website && (
            <BodyText>
                <TypiconFontWidget className="typcn typcn-link" />
                <span style={{cursor: 'pointer', textDecoration: 'underline'}} 
                    onClick={openExternalLink.bind(this, currentUser.website)}>
                    {currentUser.website}
                </span>
            </BodyText>  
        )}
        <BasicInfoFieldsWrapper>
            {currentUser.fields && (currentUser.fields.map((field, index) => (
                <BodyText key={index}>&nbsp;{`- ${field}`}</BodyText>
            )))}
        </BasicInfoFieldsWrapper>
        
    </BasicInfoWidgetWrapper>
);

BasicInfoWidget.propTypes = {
    currentUser: PropTypes.object.isRequired
};

export default BasicInfoWidget;