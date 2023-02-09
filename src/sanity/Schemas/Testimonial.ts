export default {
  name: "Testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "reference",
      to: [{ type: "Company" }],
      validation: (Rule) => [Rule.required().error("Company is required.")],
    },
    {
      name: "person",
      title: "Person",
      type: "reference",
      to: [{ type: "Person" }],
      validation: (Rule) => [Rule.required().error("Person is required.")],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required().error("Title is required.")],
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => [Rule.required().error("Quote is required.")],
    },
  ],
};
