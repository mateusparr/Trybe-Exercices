let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
  };

  console.log('Bem vinda, ' + info.personagem);
  console.log(info);

  for (key in info){
      console.log(key);
  }

  for (let index in info){
      console.log(info[index]);
  }

  let info_2 = {
    personagem: 'Tio Patinhas',
    origem: 'Tio Patinhas',
    nota: 'Christmas on Bear Mountain, Dells Four Color Comics #178, o ultimo MacPatinhas',
    recorrente: 'sim',
  };

  for (index in info, info_2){
      console.log(info[index], info_2[index]);
  };