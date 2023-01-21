import React from "react";
import {Section, Title, Subtitle} from "@primitives";
import {InView} from "react-intersection-observer";
import {Grid, Row, Col, Spacer, Text, Image} from "@nextui-org/react";

const ComparationSection = () => {

  return (
    <InView as="section" className="inview-section">
      <Spacer css={{"@xsMax": {mt: "$14"}}} y={10} />
      <Section css={{zIndex: "$10"}}>
        <Row justify="flex-start">
          <Title>Less</Title>
          <Spacer x={0.5} />
          <Title color="warning">work.</Title>
        </Row>
        <Row justify="flex-start">
          <Title>More</Title>
          <Spacer x={0.5} />
          <Title color="cyan">impact.</Title>
        </Row>
        <Subtitle>
        Tim kami yang ahli di bidang media sosial dapat membantu bisnis Anda menciptakan dan mengeksekusi kampanye media sosial yang efektif yang dapat menjangkau, menarik perhatian, dan mengkonversi audiens yang dituju. Kami menawarkan layanan seperti pengaturan akun media sosial, pembuatan konten yang menarik dan berkualitas, pengelolaan kampanye, iklan media sosial yang ciamik, serta pemantauan dan analisis yang mendalam.
        </Subtitle>
        <Grid.Container gap={1.5}>
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
            <Col
              css={{
                dflex: "center",
                fd: "column",
                h: "100%",
              }}
            >
              <Image   
                showSkeleton
                objectFit="cover"
                maxDelay={10000}
                src="/images/sosmed.png"
                alt="Default Image"
              />
              <Text css={{color: "$accents6", fontSize: "$xl"}}>Before</Text>
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
            <Col css={{dflex: "center", fd: "column", h: "100%"}}>
              <Image   
                showSkeleton
                objectFit="cover"
                maxDelay={10000}
                src="/images/sosmed.png"
                alt="Default Image"
              />
              <Text css={{color: "$text", fontSize: "$xl"}}>After</Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Section>
    </InView>
  );
};

export default ComparationSection;
