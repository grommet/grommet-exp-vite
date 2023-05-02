import {
  Anchor,
  Box,
  Button,
  Card,
  Carousel,
  Footer,
  Form,
  FormField,
  Grid,
  Grommet,
  Heading,
  Header,
  Icon,
  Meter,
  NameValueList,
  NameValuePair,
  Nav,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Select,
  Tabs,
  Tab,
  Text,
  TextInput,
} from "grommet-exp";

import hpe from "grommet-icons/img/hpe.svg";
import notification from "grommet-icons/img/notification.svg";
import linkNext from "grommet-icons/img/link-next.svg";
import helpOption from "grommet-icons/img/help-option.svg";
import appsRounded from "grommet-icons/img/apps-rounded.svg";

function App() {
  return (
    <Grommet>
      <Page kind="wide">
        <Header pad="small" border="bottom">
          <Box direction="row" align="center" gap="small">
            <Icon size="xlarge" src={hpe} />
            <Text>HPE GreenLake</Text>
          </Box>
          <Nav direction="row" justify="center">
            <Button label="Home" size="xsmall" />
            <Button label="Devices" size="xsmall" />
            <Button label="Manage" size="xsmall" />
          </Nav>
          <Box direction="row" align="center" gap="small">
            <Button icon={<Icon src={notification} />} />
            <Button icon={<Icon src={helpOption} />} />
            <Button icon={<Icon src={appsRounded} />} />
          </Box>
        </Header>
        <PageContent>
          <PageHeader
            title="Grommet Experiment"
            subtitle="grommet exploration sample app"
          />
          <Box gap="medium">
            <Box gap="small">
              <Heading level={2}>Card</Heading>
              <Paragraph level={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Paragraph>
            </Box>
            <Grid as="ul" columns="small" gap="medium">
              <Card as="li">
                <Heading level={3}>Weather</Heading>
                <Paragraph level={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Paragraph>
                <Footer>
                  <div />
                  <Button icon={<Icon src={linkNext} />} />
                </Footer>
              </Card>
              <Card as="li">
                <Heading level={3}>Daylight</Heading>
                <Paragraph level={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Paragraph>
                <Footer>
                  <div />
                  <Button icon={<Icon src={linkNext} />} />
                </Footer>
              </Card>
              <Card as="li">
                <Heading level={3}>Fun</Heading>
                <Paragraph level={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Paragraph>
                <Footer>
                  <div />
                  <Button icon={<Icon src={linkNext} />} />
                </Footer>
              </Card>
            </Grid>

            <Heading level={2}>Form</Heading>
            <Form width="medium">
              <Heading level={2}>Form</Heading>
              <FormField label="text input">
                <TextInput />
              </FormField>
              <FormField label="select">
                <Select options={["one", "two"]} />
              </FormField>
              <Footer>
                <Button kind="primary" label="submit" />
              </Footer>
            </Form>

            <Heading level={2}>Name Value</Heading>
            <NameValueList>
              <NameValuePair name="Date">
                <Text>{new Date().toLocaleString()}</Text>
              </NameValuePair>
              <NameValuePair name="Background">
                <Box direction="row" align="center" gap="xsmall">
                  <Box pad="xsmall" background="contrast" />
                  <Text>contrast</Text>
                </Box>
              </NameValuePair>
            </NameValueList>

            <Heading level={2}>Nav</Heading>
            <Nav>
              <Button label="My stuff" />
              <Button label="Services" />
            </Nav>

            <Heading level={2}>Carousel</Heading>
            <Carousel>
              <img src="http://www.destination360.com/north-america/us/california/images/s/california-golden-gate-bridge.jpg" />
              <img src="http://humanhistoryintheearth.weebly.com/uploads/2/9/4/3/29437959/5378260_orig.jpg" />
            </Carousel>

            <Heading level={2}>Tabs</Heading>
            <Tabs>
              <Tab label="First">
                <Box margin={{ vertical: "medium" }}>
                  <Paragraph>Lorem ipsum ...</Paragraph>
                </Box>
              </Tab>
              <Tab label="Second">
                <Box margin={{ vertical: "medium" }}>
                  <Paragraph size="small">Lorem ipsum ...</Paragraph>
                </Box>
              </Tab>
            </Tabs>

            <Heading level={2}>Meter</Heading>
            <Grid columns="small" gap="medium">
              <Meter value={80} round size="small" />
              <Meter
                kind="qualitative"
                values={[
                  { label: "tropic", value: 60 },
                  { label: "temperate", value: 20 },
                  { label: "pole", value: 10 },
                ]}
                size="small"
              />
              <Meter
                kind="sequential"
                values={[
                  { label: "light", value: [25, 20] },
                  { label: "medium", value: [60, 50] },
                  { label: "heavy", value: [15, 80] },
                ]}
                size="small"
              />
              <Meter
                kind="divergent"
                values={[
                  { label: "disagree", value: [10, -100] },
                  { label: "disagree a bit", value: [25, -70] },
                  { label: "neutral", value: [30, 0] },
                  { label: "agree a bit", value: [20, 30] },
                  { label: "agree", value: [15, 100] },
                ]}
                size="small"
              />
            </Grid>
            <Grid columns="small" gap="medium">
              <Meter value={80} round type="circle" size="small" />
              <Meter
                kind="qualitative"
                values={[
                  { label: "tropic", value: 60 },
                  { label: "temperate", value: 20 },
                  { label: "pole", value: 10 },
                ]}
                type="circle"
                size="small"
              />
              <Meter
                kind="sequential"
                values={[
                  { label: "light", value: [25, 20] },
                  { label: "medium", value: [60, 50] },
                  { label: "heavy", value: [15, 80] },
                ]}
                type="pie"
                size="small"
              />
              <Meter
                kind="divergent"
                values={[
                  { label: "disagree", value: [10, -100] },
                  { label: "disagree a bit", value: [25, -70] },
                  { label: "neutral", value: [30, 0] },
                  { label: "agree a bit", value: [20, 30] },
                  { label: "agree", value: [15, 100] },
                ]}
                type="semicircle"
                size="small"
              />
            </Grid>

            <Footer margin={{ vertical: "medium" }}>
              <Text size="small" color="weak">
                a work in <Anchor href="">progress</Anchor>
              </Text>
            </Footer>
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
