---
title: Pontos fundamentais a serem considerados no desenvolvimento de sistemas/softwares
date: 2022-06-18
tags: ["Programação"]
series: false
published: true
cover_image: ./images/dots.jpg
canonical_url: false
description: "Considerações baseadas em experiências obtidas ao longo de minha jornada."
---

O desenvolvimento de software exige método e atenção para a obtenção de bons resultados dentro dos prazos planejados. Segue alguns dos pontos mais importantes que observei ao longo de minha jornada na área.

- **Ao encontrar algum erro**
  - Interpretar mensagem de erro
    - Aprender a interpretar erros é fundamental pois é uma das situações mais recorrentes no desenvolvimento de sistemas/softwares
    - Pesquisar pela mensagem no google
  - Debugar
    - Buscar executar linha por linha e ver retornos buscando detectar exatamente onde o erro acontece
- **Ao tentar criar uma nova solução**

  - Buscar se não existe já uma solução para isso (pacotes prontos)
  - É muito comum encontrar soluções prontas para a maior parte das necessidades que temos. Todo sistema/software tem pontos em comum muito semelhantes.
  - Exemplo, a maior parte dos aplicativos vai ter
    - Tela de login
    - Tela de "esqueci minha senha"
    - Área de perfil do usuário(a)
  - Por isso muitos exemplos e ferramentas prontas já estão disponíveis na rede para serem baixadas, configuradas e usadas. É até preferível utilizar essas ferramentas por conta de em muitos dos casos já serem soluções consolidadas no mercado, testadas e validadas.

- **Aprenda a lidar com os problemas durante o desenvolvimento**
  - Eles sempre estarão ocorrendo é parte do processo
  - Com calma tudo se resolve e ainda que não se resolva deixamos pendurado para ser resolvido mais adiante com ajuda externa e/ou mais pesquisa
- **Nem sempre a primeira solução encontrada para um problema vai ser a melhor**

  - Buscar entender o problema e tentar observá-lo de diferentes pontos de vista pode trazer melhores resultados
  - Se uma solução esta sendo muito complexa ou problemática é provável que existam outras abordagens mais adequadas
  - Insistir em uma solução e perder muito tempo tentando faze-la funcionar nem sempre é melhor abordagem, quando estamos nesse tipo de situação é bem provável que estejá-mos tentando solucionar de um modo demasiadamente complicado ou de um modo inadequado

- **Desenvolver baseado em testes**
  - Sempre ter o suporte de testes e a possibilidade de testar os códigos desenvolvidos é muito importante pois
    - Isso traz segurança muito maior do código desenvolvido
    - Valida no ato se o código vai se comportar de maneira esperada em situações adversas testadas
    - Nos faz ganhar tempo e qualidade, pois a cada nova alteração no código basta executar os testes novamente para verificar se nada foi quebrado com as últimas modificações
  - Testar com o formado do parametro que vai chegar ao código e verificar as saídas/retornos do código
