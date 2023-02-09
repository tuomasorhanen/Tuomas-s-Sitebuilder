import { groq } from 'next-sanity';
import { client } from '../../sanity/lib/client';
import { IReference, ITestimonial } from '_lib/types';

const resolveTestimonial = async (ref: IReference) => {
  if (!ref) return null;

  const { _ref } = ref;
  const qry = groq`*[_id == '${_ref}'][0]`;

  ref = await client.fetch<ITestimonial>(qry);
  return ref;
};

export default resolveTestimonial;
