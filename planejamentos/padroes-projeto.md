# Planejamento da disciplina de Padrões de Projeto — ADS

Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas | 5º semestre | Carga horária: 60 horas

Analisando a ementa da disciplina de Padrões de Projeto do curso de ADS, minha sugestão é estruturar a disciplina em torno de três grandes competências: escrever código de qualidade, identificar problemas de projeto e aplicar soluções que melhorem a manutenção e a evolução do software.

A ideia é evitar que a disciplina se torne apenas uma apresentação dos 23 padrões do catálogo GoF (Gang of Four). Os alunos devem compreender por que um padrão existe, qual problema resolve e, principalmente, quando sua aplicação é realmente necessária.

## 1. Análise da ementa

O documento institucional estabelece:

| Informação    | Descrição                   |
| ------------- | --------------------------- |
| Disciplina    | Padrões de Projetos (PRG09) |
| Período       | 5º semestre                 |
| Carga horária | 60 horas                    |
| Teoria        | 30 horas                    |
| Prática       | 30 horas                    |
| Natureza      | Obrigatória                 |

A ementa apresenta quatro grandes eixos:

1. Técnicas para construção de software fracamente acoplado e reutilizável.
2. Padrões de Projeto.
3. Técnicas de refatoração de código.
4. Padrões de projeto para frameworks.

O objetivo institucional também enfatiza a aplicação de boas práticas para produzir código mais flexível e reutilizável.&#x20;

Minha avaliação: a ementa é suficientemente abrangente para trabalhar não apenas padrões GoF, mas também princípios SOLID, qualidade de código, code smells, refatoração e padrões arquiteturais utilizados em frameworks.

Eu organizaria os conteúdos para que os alunos primeiro entendam os problemas de projeto e depois conheçam os padrões como possíveis soluções.

## 2. Organização dos conteúdos

Proponho seis unidades, totalizando as 60 horas da disciplina.

01

Fundamentos de projeto de software

10h

POO, coesão, acoplamento, composição, interfaces e princípios SOLID.

02

Padrões de projeto criacionais

8h

Singleton, Factory Method, Abstract Factory e Builder.

03

Padrões de projeto estruturais

8h

Adapter, Facade, Decorator e Proxy.

04

Padrões de projeto comportamentais

12h

Strategy, Observer, Template Method, Chain of Responsibility e Mediator.

05

Qualidade de código e refatoração

12h

Code smells, métricas, técnicas de refatoração e testes de regressão.

06

Padrões em frameworks e projeto integrador

10h

MVC, Dependency Injection, Repository e aplicação integrada dos conceitos.

Essa divisão é uma proposta didática, não uma distribuição obrigatória definida na ementa. As atividades práticas podem ser realizadas em Java, aproveitando os conhecimentos prévios dos alunos em programação orientada a objetos.

## 3. Assuntos que eu abordaria em cada unidade

### Unidade 1 — Fundamentos de projeto de software (10h)

Objetivo: desenvolver a capacidade de reconhecer problemas de organização e manutenção do código.

Conteúdos:

- Revisão de POO: abstração, encapsulamento, herança, polimorfismo e interfaces.
- Diferença entre herança e composição.
- Coesão e acoplamento.
- Dependência de abstrações versus implementações concretas.
- Princípios SOLID: SRP, OCP, LSP, ISP e DIP.
- Introdução ao conceito de padrões de projeto.

Prática sugerida: apresentar um sistema Java com uma classe `PedidoService` que calcula descontos, processa pagamentos, gera relatórios e envia notificações. Os alunos devem identificar responsabilidades excessivas, acoplamento e violações de SOLID, propondo melhorias.

### Unidade 2 — Padrões criacionais (8h)

Objetivo: compreender alternativas para criação e configuração de objetos.

| Padrão           | Problema abordado                           |
| ---------------- | ------------------------------------------- |
| Singleton        | Controle de instância única                 |
| Factory Method   | Delegação da criação de objetos             |
| Abstract Factory | Criação de famílias de objetos relacionados |
| Builder          | Construção de objetos complexos             |

Prática sugerida: implementar um sistema de emissão de documentos (PDF, HTML e texto) usando Factory Method, além de um Builder para construir objetos `Relatorio` com campos opcionais.

É importante discutir também os riscos do Singleton, especialmente estado global e dificuldade de testes.

### Unidade 3 — Padrões estruturais (8h)

Objetivo: organizar relações entre classes e objetos para facilitar integração, extensão e reutilização.

| Padrão    | Problema abordado                      |
| --------- | -------------------------------------- |
| Adapter   | Integração de interfaces incompatíveis |
| Facade    | Simplificação de subsistemas           |
| Decorator | Adição dinâmica de comportamentos      |
| Proxy     | Controle de acesso a objetos           |

Prática sugerida: criar uma aplicação Java que integre dois serviços de pagamento com interfaces diferentes usando Adapter e disponibilize uma interface simplificada para operações usando Facade.

### Unidade 4 — Padrões comportamentais (12h)

Objetivo: compreender como distribuir responsabilidades e organizar a comunicação entre objetos.

| Padrão                  | Problema abordado                          |
| ----------------------- | ------------------------------------------ |
| Strategy                | Substituição de algoritmos                 |
| Observer                | Notificação de mudanças de estado          |
| Template Method         | Reutilização da estrutura de algoritmos    |
| Chain of Responsibility | Processamento por cadeia de responsáveis   |
| Mediator                | Centralização da coordenação entre objetos |

Prática sugerida: desenvolver um sistema de pedidos no qual Strategy define o cálculo de frete, Observer notifica alterações no pedido e Chain of Responsibility realiza validações.

Eu dedicaria mais tempo a Strategy, Observer e Chain of Responsibility, por serem padrões que permitem demonstrar claramente problemas de acoplamento e extensibilidade.

### Unidade 5 — Qualidade de código e refatoração (12h)

Objetivo: ensinar os alunos a reconhecer problemas em código existente e aplicar refatorações seguras.

Conteúdos:

- O que é refatoração e como ela difere de reescrita.
- Code smells: God Class, Long Method, Feature Envy, Duplicated Code, Shotgun Surgery e Long Parameter List.
- Métricas: complexidade ciclomática, acoplamento, coesão e tamanho de métodos/classes.
- Extract Method, Extract Class, Move Method, Replace Conditional with Polymorphism.
- Introdução a testes automatizados com JUnit.
- Refatoração orientada por testes.
- Quando não aplicar padrões: complexidade acidental e overengineering.

Prática sugerida: entregar um código legado propositalmente problemático e solicitar que os alunos identifiquem code smells, escrevam testes e refatorem sem alterar o comportamento externo.

### Unidade 6 — Padrões em frameworks e projeto integrador (10h)

Objetivo: reconhecer como os princípios e padrões estudados aparecem em aplicações reais e frameworks.

Conteúdos sugeridos:

- MVC (Model-View-Controller).
- Dependency Injection e Inversion of Control.
- Repository e DAO.
- Service Layer.
- Reconhecimento de padrões como Proxy, Factory e Template Method em frameworks.
- Breve contextualização de Spring Framework e Spring Boot, sem exigir o desenvolvimento de uma aplicação web.

Prática sugerida: analisar uma aplicação Java organizada em camadas e identificar os padrões empregados. O projeto integrador deve consolidar os conceitos estudados.

Esses tópicos ampliam a ementa de maneira coerente com o eixo de padrões para frameworks. Eu os trataria como uma introdução conceitual, mantendo a implementação principal em Java.

## 4. Cronograma sugerido — 30 encontros de 2 horas

Considerando 60 horas, distribuídas em 30 encontros, eu adotaria o seguinte planejamento:

| Aula | Conteúdo                                                        | Atividade                  |
| ---- | --------------------------------------------------------------- | -------------------------- |
| 1    | Apresentação da disciplina e importância do projeto de software | Análise de código          |
| 2    | Revisão de POO, interfaces, herança e composição                | Exercícios Java            |
| 3    | Coesão, acoplamento e reutilização                              | Refatoração                |
| 4    | Princípios SOLID — SRP, OCP e LSP                               | Exercícios                 |
| 5    | Princípios SOLID — ISP e DIP                                    | Exercícios                 |
| 6    | Introdução aos padrões GoF e UML                                | Diagramas de classes       |
| 7    | Singleton e Factory Method                                      | Implementação              |
| 8    | Abstract Factory e Builder                                      | Implementação              |
| 9    | Adapter e Facade                                                | Implementação              |
| 10   | Decorator e Proxy                                               | Implementação              |
| 11   | Strategy                                                        | Implementação              |
| 12   | Observer                                                        | Implementação              |
| 13   | Template Method                                                 | Implementação              |
| 14   | Chain of Responsibility                                         | Implementação              |
| 15   | Mediator e revisão dos padrões                                  | Exercícios integrados      |
| 16   | Avaliação teórica e prática I                                   | Prova                      |
| 17   | Introdução à refatoração e código legado                        | Análise de código          |
| 18   | Code smells — God Class e Long Method                           | Refatoração                |
| 19   | Code smells — Feature Envy e Duplicated Code                    | Refatoração                |
| 20   | Code smells — Shotgun Surgery e outros                          | Refatoração                |
| 21   | Métricas de qualidade de código                                 | Análise com ferramentas    |
| 22   | Técnicas de refatoração                                         | Exercícios Java            |
| 23   | Testes com JUnit e refatoração segura                           | Testes e refatoração       |
| 24   | Refatoração utilizando padrões GoF                              | Atividade prática          |
| 25   | MVC e organização em camadas                                    | Análise de arquitetura     |
| 26   | Dependency Injection, IoC e Repository                          | Exemplos Java              |
| 27   | Padrões utilizados em frameworks                                | Estudo de caso             |
| 28   | Projeto integrador                                              | Desenvolvimento            |
| 29   | Projeto integrador                                              | Finalização e apresentação |
| 30   | Avaliação final e discussão dos projetos                        | Avaliação                  |

Observação: a carga horária de cada unidade pode ser ajustada conforme a organização das avaliações e o calendário acadêmico. O cronograma acima é uma sequência pedagógica de 30 encontros.

## 5. Proposta de avaliação

Eu utilizaria três instrumentos avaliativos, priorizando a capacidade de compreender e melhorar projetos existentes.

| Avaliação           | Peso | Descrição                                                        |
| ------------------- | ---- | ---------------------------------------------------------------- |
| Prova individual    | 30%  | SOLID, padrões GoF e interpretação de código                     |
| Atividades práticas | 30%  | Implementações e refatorações em Java                            |
| Projeto integrador  | 40%  | Desenvolvimento, justificativa dos padrões e qualidade do código |

No projeto integrador, os alunos poderiam desenvolver um sistema de gerenciamento de pedidos em Java, com persistência em memória e interface de console. A proposta seria exigir a aplicação justificada de pelo menos quatro padrões de categorias diferentes, princípios SOLID e uma atividade documentada de refatoração.

O mais importante é avaliar se o aluno consegue explicar por que utilizou determinado padrão, e não apenas se conseguiu implementá-lo.

## 6. Ferramentas e materiais de apoio

Eu adotaria Java como linguagem principal e um conjunto reduzido de ferramentas:

- Java 17 ou 21: implementação dos exemplos.
- Maven: organização e gerenciamento do projeto.
- JUnit 5: testes automatizados.
- Git/GitHub: versionamento e entrega das atividades.
- PlantUML: representação dos diagramas de classes.
- SonarQube ou SonarLint: introdução à análise estática de código.

Como material complementar, recomendaria o site [Refactoring.Guru](https://refactoring.guru/pt-br/design-patterns?utm_source=chatgpt.com), que apresenta explicações visuais, exemplos e comparações entre padrões.

## 7. Recomendações pedagógicas

Para uma turma de ADS no quinto semestre, minha sugestão é utilizar uma abordagem problema → solução → implementação → avaliação.

Por exemplo, antes de apresentar Strategy, disponibilizaria uma classe Java com vários `if/else` para calcular descontos. Os alunos primeiro identificariam o problema e tentariam melhorar o código. Somente depois apresentaria Strategy como uma solução possível.

Também recomendo que aproximadamente metade de cada encontro seja dedicada a atividades práticas, respeitando as 30 horas práticas previstas na ementa.

Outro ponto importante é ensinar que nem todo problema precisa de um padrão de projeto. Saber quando não utilizar um padrão é tão importante quanto conhecer sua implementação.

## 8. O que eu priorizaria

Considerando o perfil de formação de ADS e o tempo disponível, daria maior ênfase a:

- SOLID, coesão e acoplamento: fundamentos para compreender os demais assuntos.
- Strategy, Factory Method, Adapter, Facade, Observer e Decorator: padrões com aplicações práticas fáceis de demonstrar.
- Code smells e refatoração: competências diretamente relacionadas à manutenção de sistemas reais.
- Dependency Injection e MVC: conexão entre os padrões e os frameworks utilizados no mercado.

Minha principal recomendação seria reservar um espaço significativo para refatoração e qualidade de código, porque esse conteúdo aparece explicitamente na ementa e pode acabar sendo negligenciado quando a disciplina se concentra exclusivamente nos padrões GoF.

Dessa forma, o aluno conclui a disciplina não apenas sabendo implementar padrões, mas sendo capaz de analisar um projeto orientado a objetos, identificar problemas de manutenção e propor melhorias fundamentadas.