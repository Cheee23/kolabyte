import React, {useEffect} from "react";
import {styled, Grid} from "@nextui-org/react";
import Image from 'next/image'
import {levitating} from "@utils/animations";
import {useIsMobile} from "@hooks/use-media-query";

const StyledContainer = styled("div", {
  dflex: "center",
  position: "absolute",
  zIndex: "$max",
  "@xsMax": {
    display: "none",
  },
});

const HeroComponents = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const element = document.getElementById("nextui-tooltip");

      if (element) {
        element.remove();
      }
    }
  }, [isMobile]);

  return (
    <StyledContainer>
      <Grid
        css={{
          position: "absolute",
          cursor: "pointer",
          top: "-140px",
          right: "-500px",
          dflex: "center",
          animation: `${levitating} 15s ease infinite`,
        }}
        onClick={() => {
        }}
      >
        <Image   
          objectFit="cover"
          width={450}
          height={400}
          src="/images/hero.webp"
          alt="Hero image"
          loading='lazy'
        />
      </Grid>
      
    </StyledContainer>
  );
};

export default HeroComponents;
