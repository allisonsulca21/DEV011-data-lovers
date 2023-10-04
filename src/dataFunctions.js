export const example = (data) => {
  return data;
};

export const anotherExample = () => {
  return [];
};

export const filterData = (data, filterBy, value) => {
  const filter = data.filter(element => element[filterBy][0] === value);
    
  return filter;
};

