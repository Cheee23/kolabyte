import { Col, Grid, Image, Row, Spacer } from "@nextui-org/react";
import { Box, Section, Subtitle, Title } from "@primitives";
import { darkTheme } from "@theme/shared";
import { InView } from "react-intersection-observer";


const DarkModeSection = () => {

  return (
    <InView as="section" className="inview-section">
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={10} />
      <Section css={{position: "relative", zIndex: "$10"}}>
        <Box
          css={{
            position: "absolute",
            top: "-25%",
            left: "-20%",
            zIndex: "-$1",
            [`.${darkTheme} &`]: {
              left: "30%",
              right: "-30%",
              "@xsMax": {
                right: "-50%",
              },
            },
            "@xsMax": {
              top: "10%",
              right: "-50%",
              left: "0",
            },
          }}
        >
          <img alt="dark mode background" width="100%" height="100%"src="/dark-mode-gradient.svg" />
        </Box>
        <Row justify="flex-start">
          <Title>Dominating search engine</Title>
        </Row>
        <Row justify="flex-start">
          <Title>results with</Title>
          <Spacer x={0.5} />
          <Title color="violet">SEO.</Title>
        </Row>
        <Subtitle>
        Kami menawarkan berbagai layanan SEO termasuk riset kata kunci, optimasi halaman, pembangunan link, dan SEO lokal. Ahli SEO kami dapat membantu bisnis meningkatkan visibilitas di hasil halaman mesin pencari (SERP) dan meningkatkan traffic ke website mereka.
        </Subtitle>
        <Grid.Container gap={2}>
          <Grid
            css={{
              pl: 0,
              "@xsMax": {
                pr: "0",
              },
            }}
            sm={6}
            xs={12}
          >
            <Col css={{d: "flex", fd: "column", ai: "flex-start", pt: "$4"}}>
              <Image   
                showSkeleton
                objectFit="cover"
                maxDelay={10000}
                src="/images/sosmed.png"
                alt="Default Image"
              />
            </Col>
          </Grid>
          <Grid
            css={{
              pr: 0,
              "@xsMax": {
                pl: "0",
              },
            }}
            sm={6}
            xs={12}
          >
            <Col css={{dflex: "center", h: "100%"}}>
            <Image   
                showSkeleton
                objectFit="cover"
                maxDelay={10000}
                src="/images/sosmed.png"
                alt="Default Image"
              />
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default DarkModeSection;
