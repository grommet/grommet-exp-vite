import {
  Anchor,
  Box,
  Button,
  Footer,
  Grid,
  Grommet,
  Heading,
  Header,
  Icon,
  Nav,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Text,
} from "grommet-exp";

import hpe from "grommet-icons/img/hpe.svg";
import notification from "grommet-icons/img/notification.svg";
import helpOption from "grommet-icons/img/help-option.svg";
import appsRounded from "grommet-icons/img/apps-rounded.svg";

function App() {
  return (
    <Grommet>
      <Page kind="narrow">
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
              <Heading level={2}>Level 2</Heading>
              <Paragraph level={2}>
                Level 2: Supportive text for level 2 heading. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </Paragraph>
            </Box>
            <Box gap="small">
              <Heading level={3}>Level 3</Heading>
              <Paragraph level={3}>
                Level 3: Supportive text for level 3 heading.
              </Paragraph>
            </Box>
            <Paragraph>React + Vanilla Extract + Vite</Paragraph>
            <Box gap="medium" align="start">
              <Anchor href="">Anchor</Anchor>
              <Text size="small" color="weak">
                small Text with color
              </Text>
              <Button label="Test primary button" kind="primary" />
            </Box>
            <Grid columns="small" gap="medium">
              <Box background="contrast" pad="large" />
              <Box background="contrast" pad="large" />
              <Box background="contrast" pad="large" />
              <Box background="contrast" pad="large" />
            </Grid>
            <Footer margin={{ vertical: "medium" }}>
              <Text size="small" color="weak">
                a work in progress
              </Text>
            </Footer>
          </Box>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
