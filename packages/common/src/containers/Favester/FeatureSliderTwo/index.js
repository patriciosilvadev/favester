import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import FeatureBlock from '../../../components/FeatureBlock';
import {ON_THE_GO} from '../../../data/Favester';
import Container from '../../../components/UI/Container';
import FeatureSectionTwoWrapper from './featureSliderTwo.style';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionTwoWrapper className="FeatureSliderWrap">
      <Container>
        <Box {...sectionHeader}>
          <Text {...sectionSubTitle} />
          <Heading {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {ON_THE_GO.map((feature, index) => (
            <Box className="col" {...col} key={index}>
              <Fade bottom delay={index * 120}>
                <FeatureBlock
                  icon=<Image src={feature.image} alt="Favester Image" />
                  wrapperStyle={blockWrapperStyle}
                  iconStyle={iconStyle}
                  contentStyle={contentStyle}
                  title={<Heading content={feature.title} {...featureTitle} />}
                />
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>
    </FeatureSectionTwoWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['56px', '56px'],
  },
  // sub section default style
  sectionSubTitle: {
    content: 'ON THE GO',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    content: 'Awesome mobile apps for iOS and Android',
    textAlign: 'center',
    fontSize: ['20px', '24px', '24px', '24px', '30px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1 / 2, 1 / 2, 1 / 3, 1 / 3, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['10px', '20px', '20px', '40px'],
  },
  // feature icon default style
  iconStyle: {
    width: '75px',
    height: '75px',
    m: '0 auto',
    borderRadius: '50%',
    bg: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    color: '#29cf8a',
    overflow: 'hidden',
    mb: '15px',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['16px', '18px'],
    fontWeight: '400',
    color: '#0f2137',
    lineHeight: '1.5',
    mb: '20px',
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: ['14px', '15px'],
    lineHeight: '1.84',
    color: '#343d48cc',
  },
};

export default FeatureSection;