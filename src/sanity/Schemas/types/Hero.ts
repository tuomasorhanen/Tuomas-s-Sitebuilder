const Hero = {
  name: "Hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "layout",
      title: "Hero Layout",
      type: "string",
      options: {
        list: [
          { title: "slash-left", value: "slash-left" },
          { title: "slash-right", value: "slash-right" },
          { title: "circle-left", value: "circle-left" },
          { title: "circle-right", value: "circle-right" },
        ],
      },
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [{ type: "reference", to: [{ type: "LandingPage" }] }],
    },
  ],
};
export default Hero;
