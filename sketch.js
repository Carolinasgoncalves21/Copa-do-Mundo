//Este código exibe uma lista visual de campeões da Copa do Mundo desde 1930 até o ano mais recente (2022), incluindo a verificação de anos onde não houve Copa do Mundo, como em 1942 e 1946, devido à Segunda Guerra Mundial.

let campeoes = [
    { ano: 1930, campeao: 'Uruguai' },
    { ano: 1934, campeao: 'Itália' },
    { ano: 1938, campeao: 'Itália' },
    { ano: 1950, campeao: 'Uruguai' },
    { ano: 1954, campeao: 'Alemanha Ocidental' },
    { ano: 1958, campeao: 'Brasil' },
    { ano: 1962, campeao: 'Brasil' },
    { ano: 1966, campeao: 'Inglaterra' },
    { ano: 1970, campeao: 'Brasil' },
    { ano: 1974, campeao: 'Alemanha Ocidental' },
    { ano: 1978, campeao: 'Argentina' },
    { ano: 1982, campeao: 'Itália' },
    { ano: 1986, campeao: 'Argentina' },
    { ano: 1990, campeao: 'Alemanha Ocidental' },
    { ano: 1994, campeao: 'Brasil' },
    { ano: 1998, campeao: 'França' },
    { ano: 2002, campeao: 'Brasil' },
    { ano: 2006, campeao: 'Itália' },
    { ano: 2010, campeao: 'Espanha' },
    { ano: 2014, campeao: 'Alemanha' },
    { ano: 2018, campeao: 'França' },
    { ano: 2022, campeao: 'Argentina' }
  ];
  
  let anosSemCopa = [1942, 1946]; // Anos sem Copa devido à Segunda Guerra Mundial
  let resposta = "";
  
  function setup() {
    createCanvas(600, 400);
    background(255);
    textSize(16);
    fill(0);
    textAlign(LEFT, TOP);
  
    // Solicitar um ano para o usuário
    let anoConsulta = prompt("Digite um ano para saber se teve Copa do Mundo:");
  
    // Verificar se o ano é válido
    if (anoConsulta) {
      anoConsulta = int(anoConsulta);
      
      // Verificar se o ano tem Copa do Mundo
      if (anosSemCopa.includes(anoConsulta)) {
        resposta = `${anoConsulta}: Não houve Copa do Mundo devido à Segunda Guerra Mundial.`;
      } else {
        let campeao = campeoes.find(c => c.ano === anoConsulta);
        if (campeao) {
          resposta = `${anoConsulta}: O campeão foi ${campeao.campeao}.`;
        } else {
          resposta = `${anoConsulta}: Não houve Copa do Mundo nesse ano.`;
        }
      }
    } else {
      resposta = "Por favor, insira um ano válido.";
    }
    
    // Exibir a resposta na tela
    text(resposta, 20, 20);
  }
  
  