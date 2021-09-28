import React from 'react';
import styled from 'styled-components';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const MobileView = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: inline-block;
    margin: auto;
    width: 600px;
  }
  @media (max-width: 600px) {
    display: inline-block;
    margin: auto;
    width: 375px;
  }
`;


const StyledTiles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledTile = styled.div`
  height: 456px;
  width: 384px;
  position: relative;
  border-radius: 16px;
  margin: auto;
  & h5 {
    margin: 16px 20px 0;
  }
  & p {
    margin: 16px 24px 48px;
    @media (max-width: 1000px) {
      font-size: 14px;
      line-height: 28px;
      margin: 16px 20px 24px;
    }
  }
  @media (max-width: 1000px) {
    height: 400px;
    width: 327px;
  } ;
`;

const StyledTileShadow = styled.div`
  height: 374px;
  width: 384px;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  position: absolute;
  left: 0;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    height: 394px;
    width: 327px;
    bottom: 30px;
  } ;
`;

const MobileStyledTileShadow = styled(StyledTileShadow)`
  height: 300px;
`;

const StyledLogoHomePage = styled.img`
  width: 232px;
  height: 232px;
  @media (max-width: 1000px) {
    width: 201px;
    height: 184px;
  } ;
`;

const Dots = styled.div `
  display: flex;
  padding: 10px 0;
  justify-content: center;
`;

const Dot = styled.button`
  margin: 0 10px;
  padding: 5px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgb(24, 137, 233);
  background-color: #fff;
  content: "";
  background-color: ${(props) =>
    props.currentSlide === props.currentIdx ? 'rgb(24, 137, 233)' : ''};
  &:focus {
    outline: none;
  }
`;

function HomepageTiles({ content, assets }) {

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

    const tilesToDisplay = content.filter((tile) =>
        tile.fields.identifier === 'homepage-tile-1' ||
        tile.fields.identifier === 'homepage-tile-2' ||
        tile.fields.identifier === 'homepage-tile-3',
    );

  tilesToDisplay.sort((a, b) => (a.fields.identifier > b.fields.identifier ? 1 : -1));

  const partnersImgAndName = tilesToDisplay.map((tile) => {
    const tileImg = assets.find((asset) => tile.fields.image1.sys.id === asset.sys.id);
    const tileDescription = tile.fields.text1?.content
      .find((v) => v.nodeType === 'paragraph')
      .content.find((v) => v.nodeType === 'text').value;
    return {
      title: tile.fields.title,
      description: tileDescription,
      imgUrl: tileImg.fields.file.url,
      key: tile.fields.image1.sys.id,
    };
  });

  return (
    <>
      <MobileView>
        <div style={{ marginBottom: '24px' }} className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide">
              <StyledTile key={partnersImgAndName[0].key}>
                <StyledLogoHomePage
                  src={partnersImgAndName[0].imgUrl}
                  alt={partnersImgAndName[0].title}
                />
                <h5>{partnersImgAndName[0].title}</h5>
                <p>{partnersImgAndName[0].description}</p>
                <MobileStyledTileShadow> </MobileStyledTileShadow>
              </StyledTile>
            </div>
            <div className="keen-slider__slide">
              <StyledTile key={partnersImgAndName[0].key}>
                <StyledLogoHomePage
                  src={partnersImgAndName[1].imgUrl}
                  alt={partnersImgAndName[1].title}
                />
                <h5>{partnersImgAndName[1].title}</h5>
                <p>{partnersImgAndName[1].description}</p>
                <MobileStyledTileShadow> </MobileStyledTileShadow>
              </StyledTile>
            </div>
            <div className="keen-slider__slide">
              <StyledTile key={partnersImgAndName[0].key}>
                <StyledLogoHomePage
                  src={partnersImgAndName[2].imgUrl}
                  alt={partnersImgAndName[2].title}
                />
                <h5>{partnersImgAndName[2].title}</h5>
                <p>{partnersImgAndName[2].description}</p>
                <MobileStyledTileShadow> </MobileStyledTileShadow>
              </StyledTile>
            </div>
          </div>
          {slider && (
            <Dots>
              {[...Array(slider.details().size).keys()].map((idx) => (
                <Dot
                  currentSlide={currentSlide}
                  currentIdx={idx}
                  type="button"
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                >
                  {' '}
                </Dot>
              ))}
            </Dots>
          )}
        </div>
      </MobileView>
      <StyledTiles>
        {partnersImgAndName.map((tile) => (
          <StyledTile key={tile.key}>
            <StyledLogoHomePage src={tile.imgUrl} alt={tile.title} />
            <h5>{tile.title}</h5>
            <p>{tile.description}</p>
            <StyledTileShadow> </StyledTileShadow>
          </StyledTile>
        ))}
      </StyledTiles>
    </>
  );
}

export default HomepageTiles;
