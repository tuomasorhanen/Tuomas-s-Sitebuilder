export default {
    name: 'Company',
    title: 'Company',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'people',
            title: 'People',
            type: 'array',
            of: [{ type: 'reference', to:[{type:'Person'}] }],
        },

    ],
}