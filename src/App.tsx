import { Anchor, Box, Heading, Paragraph, Text } from 'grommet-exp';
import { themeClass, vars } from "grommet-exp-theme";

function App() {
  return (
    <div className="App">
      <Heading level={1}>Grommet exploration sample app</Heading>
      <Paragraph>React + Vanilla Extract + Vite</Paragraph>
      <Box gap="medium">
        <Anchor href="">Anchor</Anchor>
        <Text>Text</Text>
        <Text size="small">small Text</Text>
      </Box>
    </div>
  )
}

export default App
