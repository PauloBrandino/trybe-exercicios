let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

//   console.log("Bem vindo(a),", info.personagem + "!");

  info["recorrente"] = "Sim";

//   console.log(info);

for (key in info) {
    // console.log(key);
    // console.log(info[key]);
}

for (key in info){
    if (info[key] === info2[key]) {
        console.log("Ambos recorrentes")
    } else {
    console.log(info[key], "e", info2[key]);
    }
}
