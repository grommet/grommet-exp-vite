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
    <Grommet>
      <Heading level={1}>Grommet exploration sample app</Heading>
      <Paragraph>React + Vanilla Extract + Vite</Paragraph>
      <Box gap="medium" align="start">
        <Anchor href="">Anchor</Anchor>
        <Text>Text</Text>
        <Text size="small">small Text</Text>
        <Button label="Test primary button" kind="primary" />
      </Box>
    </Grommet>
  );
}

export default App;
