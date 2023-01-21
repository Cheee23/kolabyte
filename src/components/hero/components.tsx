import React, {useEffect} from "react";
import {
  Card,
  Row,
  Col,
  Text,
  styled,
  Button,
  Grid,
} from "@nextui-org/react";
import {levitating} from "@utils/animations";
import {useIsMobile} from "@hooks/use-media-query";
import {darkTheme} from "@theme/shared";

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
          size: "100px",
          cursor: "pointer",
          top: "-110px",
          right: "-300px",
          dflex: "center",
          animation: `${levitating} 18s ease infinite`,
          backgroundColor: "$cardBackground",
          boxShadow: "$sm",
          borderRadius: "$lg",
        }}
        onClick={() => {
        }}
      >
          <Card
          css={{
            p: 0,
            h: "400px",
            w: "400px",
            zIndex: "$2",
            position:"absolute",
            top: "-110px",
            right: "-220px",
            dflex: "center",
            animation: `${levitating} 18s ease infinite 1s`,
          }}
        >
          <Card.Body css={{p: 0}}>
            <Card.Image
              alt="Hero Card background"
              height={400}
              objectFit="cover"
              src="/images/hero-card.png"
              width="100%"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bf: "saturate(180%) blur(10px)",
              bg: "$backgroundBlur",
              px: "$6",
              py: "$4",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row align="center">
              <Col>
                <Text
                  css={{
                    textShadow: "0 2px 2px rgba(0,0,0,0.3)",
                    color: "$white",
                  }}
                  size={12}
                >
                  Available soon.
                </Text>
              </Col>
              <Col>
                <Row align="center" justify="flex-end">
                  <Button
                    auto
                    rounded
                    color="secondary"
                    css={{
                      px: "$4",
                      height: "$space$10",
                      color: "$white",
                      [`.${darkTheme} &`]: {
                        bg: "$purple900",
                        color: "$purple300",
                      },
                    }}
                    size="sm"
                  >
                    Notify Me
                  </Button>
                </Row>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      
    </StyledContainer>
  );
};

export default HeroComponents;
