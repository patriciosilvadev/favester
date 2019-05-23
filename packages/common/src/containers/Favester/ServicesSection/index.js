import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from '../../../components/UI/Container';
import FeatureBlock from '../../../components/FeatureBlock';

import {SERVICES_DATA} from '../../../data/Favester';

import {
    ServicesSectionWrapper
} from './services.style';

const ServicesSection = ({
                             sectionWrapper,
                             row,
                             col,
                             secTitleWrapper,
                             secHeading,
                             secText,
                             featureItemHeading,
                             featureItemDes,
                             featureBlockStyle,
                             iconStyle,
                             contentStyle,
                         }) => {
    return (
        <ServicesSectionWrapper >
            <Box  {...sectionWrapper}>
              <Container>
                <>
                  {/*<Box {...secTitleWrapper}>*/}
                  {/*  <Fade bottom cascade>*/}
                  {/*    <Text {...secText} content="SERVICES" />*/}
                  {/*    <Heading*/}
                  {/*        {...secHeading}*/}
                  {/*        content="Why a Favester hosted community is better than a Facebook Page or Group"*/}
                  {/*    />*/}
                  {/*  </Fade>*/}
                  {/*</Box>*/}
                  <Box {...row}>
                    {SERVICES_DATA.map((featureItem, index) => (
                        <Box {...col} key={`service-${index}`}>
                        <FeatureBlock
                            wrapperStyle={featureBlockStyle}
                            iconStyle={iconStyle}
                            contentStyle={contentStyle}
                            title={
                                <Heading
                                    {...featureItemHeading}
                                    content={featureItem.title}
                                />
                            }
                            description={
                                <Text
                                    {...featureItemDes}
                                    content={featureItem.description}
                                />
                            }
                            icon={<Image src={featureItem.icon} alt={`icon-${index}`} />}
                        />
                      </Box>
                    ))}
                  </Box>
                </>
              </Container>
            </Box>
        </ServicesSectionWrapper>
    );
};

ServicesSection.propTypes = {
    sectionWrapper: PropTypes.object,
    secTitleWrapper: PropTypes.object,
    row: PropTypes.object,
    col: PropTypes.object,
    secHeading: PropTypes.object,
    secText: PropTypes.object,
    featureItemHeading: PropTypes.object,
    featureItemDes: PropTypes.object,
    featureBlockStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    contentStyle: PropTypes.object,
};

ServicesSection.defaultProps = {
    sectionWrapper: {
        id: 'service_section',
        as: 'div',
        pt: ['30px', '40px', '40px', '40px'],
        pb: ['60px', '80px', '80px', '100px'],
        className: 'service_section',
    },
    secTitleWrapper: {
        mb: ['50px', '60px', '60px', '75px'],
    },
    secText: {
        as: 'span',
        display: 'block',
        textAlign: 'center',
        fontSize: '14px',
        letterSpacing: '0.15em',
        fontWeight: '700',
        color: '#eb4d4b',
        mb: '10px',
    },
    secHeading: {
        textAlign: 'center',
        fontSize: ['20px', '24px'],
        fontWeight: '400',
        color: '#0f2137',
        letterSpacing: '-0.025em',
        mb: '0',
    },
    row: {
        flexBox: true,
        flexWrap: 'wrap',
    },
    col: {
        width: [1, 1 / 2, 1 / 2, 1 / 3],
        className: 'service_col',
        bg: '#fff',
    },
    featureBlockStyle: {
        p: '45px 55px',
        className: 'service_item',
    },
    iconStyle: {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        mb: '5px',
    },
    contentStyle: {
        textAlign: 'center',
    },
    featureItemHeading: {
        fontSize: ['18px', '20px'],
        fontWeight: '400',
        color: '#0f2137',
        lineHeight: '1.5',
        mb: '20px',
        letterSpacing: '-0.020em',
    },
    featureItemDes: {
        fontSize: '15px',
        lineHeight: '1.84',
        color: '#343d48cc',
        mb: '0',
    },
};

export default ServicesSection;
