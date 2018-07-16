import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';
import { BodyText } from '../../../themeComponents';
import { StatsWidgetWrapper, StatsWidgetItemWrapper } from './styles';

const StatsWidget = ({ styles = {}, stats = {} }) => (
    <StatsWidgetWrapper styles={styles}>
        {stats && (
            Object.keys(stats).map((label = '', index) => {
                return (
                    <StatsWidgetItemWrapper key={index}>
                        <BodyText styles={{ fontWeight: 'bold'}}>{startCase(label)}</BodyText>
                        <BodyText styles={{ textAlign: 'center'}}>{String(stats[label])}</BodyText>
                    </StatsWidgetItemWrapper>
                );
            })
        )}
        
    </StatsWidgetWrapper>
);

StatsWidget.propTypes = {
    styles: PropTypes.object,
    stats: PropTypes.object.isRequired
};

export default StatsWidget;