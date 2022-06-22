const {newEmployees, name} = require('./script');

describe('Realiza os testes pertinentes ao exercício 1', () => {
  it('Verifica se a função existe', () => {
    expect(typeof name).toBe('function');
  });

  it('Verifica se, ao passar a função como parâmetro da HOF, é retornado um objeto com os nomes e emails respectivos', () => {
    expect(newEmployees(name)).toEqual({
      id1: { Nome: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' },
      id2: { Nome: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' },
      id3: { Nome: 'Carla Paiva', email: 'carla_paiva@trybe.com' }
    });
  });

  it('Verifica se a função cria o objeto com nome e email nos formatos desejados', () => {
    expect(name('Matheus Martinez')).toEqual({'Nome': 'Matheus Martinez', 'email': 'matheus_martinez@trybe.com'});
  });
});
