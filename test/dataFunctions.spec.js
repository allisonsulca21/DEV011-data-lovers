import { example, anotherExample } from '../src/dataFunctions.js';
import { } from './data.js';
//import { data as fakeData } from './data.js';
//console.log(fakeData);

//document.body.innerHTML

describe('example', () => {

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
