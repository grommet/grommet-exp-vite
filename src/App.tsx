import {
  Anchor,
  Box,
  Button,
  Card,
  Footer,
  Form,
  FormField,
  Grid,
  Grommet,
  Heading,
  Header,
  Icon,
  NameValueList,
  NameValuePair,
  Nav,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
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

            <Form width="medium">
              <Heading level={2}>Form</Heading>
              <FormField label="text">
                <TextInput />
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
