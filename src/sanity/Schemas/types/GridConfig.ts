export default {
    name: 'GridConfig',
    title: 'Grid config',
    type: 'object',
    fields: [
        {
            name: 'column',
            title: 'Column',
            type: 'number',
            options: {
                list: [
                    1,
                    2,
                    3,
                    4,
                ]
            }
        },
        {
            name: 'numberOfColumns',
            title: 'Number of columns',
            type: 'number',
            options: {
                list: [
                    1,
                    2,
                    3,
                    4,
                ]
            }
        },
    ],
    initialValue: {
        column: 1,
        numberOfColumns: 1
    }
}