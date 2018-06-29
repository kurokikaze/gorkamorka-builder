const elementStyle = {
    fontSize: '12px',
    maxWidth: 250,
};

export const selectStyle = {
    select: base => ({
        paddingVertical: '2px',
    }),
    control: (base) => ({
        ...base,
        ...elementStyle,
    }),
    option: base => ({
        ...base,
        ...elementStyle,
    }),
    menu: base => ({
        ...base,
        ...elementStyle,
    }),
    singleValue: base => ({
        ...base,
        ...elementStyle,
        paddingTop: 0,
        paddingBottom: 0,
    })
};
