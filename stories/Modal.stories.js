import { Modal } from "./Modal";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Projecto/Modal",
  component: Modal,
  args: {
    onClick: null,
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
 parameters: { actions: { argTypesRegex: '^on.*' } },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Title = {
  args: {
    label: "Título del modal",
    textarea: "Aquí va el contenido ",
  },
};
