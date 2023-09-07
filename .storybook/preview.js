/** @type { import('@storybook/react').Preview } */
import { BrowserRouter } from "react-router-dom";
import jplayer from "jplayer";

const preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
