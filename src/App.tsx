import {
  Anchor,
  Box,
  Button,
  Footer,
  Grommet,
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
            <Button label="Dashboard" />
            <Button label="Applications" />
            <Button label="Devices" />
            <Button label="Manage" />
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
          <Paragraph>React + Vanilla Extract + Vite</Paragraph>
          <Box gap="medium" align="start">
            <Anchor href="">Anchor</Anchor>
            <Text>Text</Text>
            <Text size="small">small Text</Text>
            <Button label="Test primary button" kind="primary" />
          </Box>
          <Footer margin={{ vertical: "medium" }}>
            <Text size="small" color="weak">
              a work in progress
            </Text>
          </Footer>
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
