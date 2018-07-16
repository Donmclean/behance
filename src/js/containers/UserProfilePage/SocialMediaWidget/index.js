import React from 'react';
import PropTypes from 'prop-types';
import { TypiconFontWidget } from '../../../themeComponents';
import { Fonts } from '../../../constants/styleConstants';
import { SocialMediaWidgetWrapper } from './styles';

import { openExternalLink } from '../../../utils';

const getResolvedSocialMediaIconClassName = (url = '') => {
    switch(true) {
        case RegExp('facebook.com').test(url): {
            return "typcn typcn-social-facebook-circular";
        }
        case RegExp('twitter.com').test(url): {
            return "typcn typcn-social-twitter-circular";
        }
        case RegExp('instagram.com').test(url): {
            return "typcn typcn-social-instagram-circular";
        }
        case RegExp('linkedin.com').test(url): {
            return "typcn typcn-social-linkedin-circular";
        }
        case RegExp('pinterest.com').test(url): {
            return "typcn typcn-social-pinterest-circular";
        }
        case RegExp('vimeo.com').test(url): {
            return "typcn typcn-social-vimeo-circular";
        }
        case RegExp('plus.google.com').test(url): {
            return "typcn typcn-social-google-plus-circular";
        }
        case RegExp('tumblr.com').test(url): {
            return "typcn typcn-social-tumbler-circular";
        }
        case RegExp('flickr.com').test(url): {
            return "typcn typcn-social-flickr-circular";
        }
        case RegExp('dribbble.com').test(url): {
            return "typcn typcn-social-dribbble-circular";
        }
        case RegExp('youtube.com').test(url): {
            return "typcn typcn-social-youtube-circular";
        }
        default: {
            return null;
        }
    }
};

const SocialMediaWidget = ({ styles = {}, socialLinks = [] }) => (
    <SocialMediaWidgetWrapper styles={styles}>
        {socialLinks.map((socialLinkObj = {}, index) => {
            const resolvedSocialLinkClassName = getResolvedSocialMediaIconClassName(socialLinkObj.url);

            return resolvedSocialLinkClassName && (
                <TypiconFontWidget
                    key={index} 
                    className={resolvedSocialLinkClassName}
                    onClick={openExternalLink.bind(this, socialLinkObj.url)}
                    styles={{fontSize: Fonts.xlarge, cursor: 'pointer'}} />
            );
        })}
    </SocialMediaWidgetWrapper>
);

SocialMediaWidget.propTypes = {
    styles: PropTypes.object,
    socialLinks: PropTypes.array.isRequired
};

export default SocialMediaWidget;