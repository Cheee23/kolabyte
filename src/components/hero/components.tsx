import React, {useEffect} from "react";
import {
  styled, Image,
  Grid,
} from "@nextui-org/react";
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
          showSkeleton
          objectFit="cover"
          width={400}
          height={400}
          maxDelay={10000}
          src="/images/hero.webp"
          alt="Default Image"
        />
      </Grid>
      
    </StyledContainer>
  );
};

export default HeroComponents;
