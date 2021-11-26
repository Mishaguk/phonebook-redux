export const getContacts = (filter) => (state) =>
  filter
    ? state.phoneBookReducer.items.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase()),
      )
    : state.phoneBookReducer.items;

export const getIsContactExists = (name) => {
  return (state) =>
    !!state.phoneBookReducer.items.find((contact) => contact.name === name);
};

export const getFilter = (state) => state.phoneBookReducer.filter;
