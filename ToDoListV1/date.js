exports.getData = function () {
  const hoje = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return hoje.toLocaleDateString("pt-BR", options);
};

exports.getDay = function () {
  const hoje = new Date();

  const options = {
    weekday: "long",
  };

  return hoje.toLocaleDateString("pt-BR", options);
};
