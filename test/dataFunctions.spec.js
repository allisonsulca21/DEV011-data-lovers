import { computeStats, filterData, filterGeneration, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('filterData', () => {

  it('debería filtrar por tipo "dragon" y devolver solo los Pokemón del tipo correspondiente', () => {
    const filterBy = 'type';
    const value = 'dragon';

    const result = filterData(fakeData, filterBy, value);
    const allDragonType = result.every(element => element.type.includes('dragon'));
    expect(allDragonType).toBe(true);
    expect(result.length).toEqual(3);
  });
});

describe('filterGeneration', () => {

  it('debería filtrar por generation "kanto" y devolver solo la cantidad correspondiente', () => {
    const filterBy = 'generation';
    const value = 'kanto';

    const result = filterGeneration(fakeData, filterBy, value);
    expect(result.length).toEqual(7);
  })
});

describe('sortData', () => {

  it('debería ordenar por "weaknesses" el valor más alto', () => {
    const filterBy = 'type';
    const value = 'dragon';
    const sortBy = 'weaknesses';
    const sortOrder = 'asc';
    
    const resultFilterDragon = filterData(fakeData, filterBy, value);
    const result = sortData(resultFilterDragon, sortBy, sortOrder);
    expect([result[0].num,result[1].num,result[2].num]).toEqual(['147','148','149']);
  });
});

describe('sortData', () => {

  it('debería ordenar por "max-cp" el valor más alto', () => {
    const filterBy = 'type';
    const value = 'dragon';
    const sortBy = 'max-cp';
    const sortOrder = 'desc';
    
    const resultFilterDragon = filterData(fakeData, filterBy, value);
    const result = sortData(resultFilterDragon, sortBy, sortOrder);
    expect([result[0].num,result[1].num,result[2].num]).toEqual(['149','148','147']);
  });
});

describe('sortData', () => {

  it('debería ordenar por "max-cp" el valor más bajo', () => {
    const filterBy = 'type';
    const value = 'dragon';
    const sortBy = 'max-cp';
    const sortOrder = 'asc';
    
    const resultFilterDragon = filterData(fakeData, filterBy, value);
    const result = sortData(resultFilterDragon, sortBy, sortOrder);
    expect([result[0].name,result[1].name,result[2].name]).toEqual(['dratini','dragonair','dragonite']);
  });
});

describe('computeStats', () => {

  it('debería retornar el peso promedio de todos los Pokemon cuando esté seleccionado `seleccionar`', () => {
    // const value = 'seleccionar'

    const result = computeStats(fakeData);
    expect(result).toBe('51.17');
  });
});
