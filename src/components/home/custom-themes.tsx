/* eslint-disable no-unused-vars */
import { Grid, Image, Row, Spacer } from "@nextui-org/react";
import { Box, Section, Subtitle, Title } from "@primitives";
import { darkTheme } from "@theme/shared";
import { InView } from "react-intersection-observer";


const CustomThemesSection = () => {


  return (
    <InView as="section" className="inview-section">
      <Spacer css={{"@xsMax": {mt: "$32"}}} y={10} />
      <Section css={{position: "relative"}}>
        <Box
          css={{
            position: "absolute",
            top: "-25%",
            right: "-30%",
            zIndex: "-$1",
            [`.${darkTheme} &`]: {
              right: 0,
              left: "-30%",
              "@xsMax": {
                top: "15%",
                left: "10% !important",
              },
            },
            "@xsMax": {
              top: "5%",
              right: "-40% !important",
            },
          }}
        >
          <img alt="theming background" src="/theming-gradient.svg" />
        </Box>
        <Row justify="flex-start">
          <Title>Custom</Title>
          <Title color="blue">&nbsp;websites</Title>
        </Row>
        <Row justify="flex-start">
          <Title>to match your vision.</Title>
        </Row>
        <Subtitle>
        Kolabyte menyediakan layanan desain dan pengembangan website yang lengkap, termasuk desain responsif modern, integrasi e-commerce, sistem manajemen konten, dan aplikasi web khusus. Kami menciptakan website yang indah, user-friendly dan selaras dengan visi dan tujuan bisnis Anda untuk meningkatkan kredibilitas dan daya tarik di mata calon pelanggan.
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
          </Grid>
          <Grid
            css={{
              pr: 0,
              "@mdMax": {
                pl: "0",
              },
            }}
            sm={6}
            xs={12}
          >
          </Grid>
        </Grid.Container>
        <Image   
          showSkeleton
          objectFit="cover"
          maxDelay={10000}
          src="/images/custom_web.png"
          alt="Default Image"
        />
      </Section>
    </InView>
  );
};

export default CustomThemesSection;
