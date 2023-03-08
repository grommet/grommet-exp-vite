import {
  Anchor,
  Box,
  Button,
  Footer,
  Grommet,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
  Text,
} from "grommet-exp";

function App() {
  return (
    <Grommet>
      <Page kind="narrow">
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
          <Footer margin={{ vertical: 'medium' }}>
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
