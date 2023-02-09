import { groq } from "next-sanity";
import { client } from "./client";
import { ICompany, IPage, IReference, ITestimonial, IPerson } from "./types";

const resolveCustomer = async (page: IPage) => {
  const { _id, content } = page;

  for (let i = 0; i < content.length; i++) {
    let item = content[i] as ITestimonial;
    if (content[i]._type == "Testimonial") {
      item.company = await resolveCompany(item.company as unknown as IReference);
      item.person = await resolvePerson(item.person as unknown as IReference);
    }
    content[i] = item;
  }

  return page;
};

const resolveCompany = async (ref: IReference): Promise<ICompany> => {
  if (!ref) return null;

  const { _ref } = ref;
  const qry = groq`*[_id == '${_ref}']{
    ...,
    people[]->
  }[0]`;

  const result = await client.fetch<ICompany>(qry);
  return result;
};

const resolvePerson = async (ref: IReference): Promise<IPerson> => {
  if (!ref) return null;

  const { _ref } = ref;
  const qry = groq`*[_id == '${_ref}']{
    ...,
    company->
  }[0]`;

  const result = await client.fetch<IPerson>(qry);
  return result;
};

export default resolveCustomer;
