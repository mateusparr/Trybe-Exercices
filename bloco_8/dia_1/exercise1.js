const object = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return { nomeCompleto, email: `${email}@trybe.com` };
};

const newEmployees = (object) => {
    const employees = {
      id1: object('Pedro Guerra'),
      id2: object('Luiza Drumond'),
      id3: object('Carla Paiva'),
    }
    return employees;
  };

  console.log(newEmployees(object));