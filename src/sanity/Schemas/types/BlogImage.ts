export default {
  name: "BlogImage",
  title: "Blog image",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alternativeText",
      title: "Alternative text",
      type: "string",
    },
  ],
};
