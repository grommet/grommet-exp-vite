import {
  Anchor,
  Box,
  Button,
  Grommet,
  Heading,
  Paragraph,
  Text,
} from "grommet-exp";

function App() {
  return (
    <div className="App">
      <Grommet>
        <Heading level={1}>Grommet exploration sample app</Heading>
        <Paragraph>React + Vanilla Extract + Vite</Paragraph>
        <Box gap="medium">
          <Anchor href="">Anchor</Anchor>
          <Text>Text</Text>
          <Text size="small">small Text</Text>
          <Button label="Test primary button" kind="primary" />
        </Box>
      </Grommet>
    </div>
  );
}

export default App;
