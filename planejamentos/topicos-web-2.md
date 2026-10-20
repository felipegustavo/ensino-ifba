# Cloud Computing — material didático para 15 aulas

**Curso:** Redes de Computadores  
**Carga horária:** 34 horas (15 aulas de 2 horas + 2 provas de 2 horas)  
**Formato:** teórico, sem laboratório  
**Foco:** conceitos, arquitetura, redes, segurança, disponibilidade, custos e operação de serviços em nuvem. Os serviços de AWS, Azure e Google Cloud aparecem apenas como exemplos; os conceitos são apresentados de forma independente de fornecedor.

## Organização da carga horária

| Atividade | Quantidade | Duração | Total |
|---|---:|---:|---:|
| Aulas | 15 | 2 h | 30 h |
| Provas | 2 | 2 h | 4 h |
| **Total** |  |  | **34 h** |

## Objetivos gerais

Ao final da disciplina, espera-se que o estudante consiga:

- explicar os conceitos, características e modelos de computação em nuvem;
- relacionar virtualização, redes, armazenamento e serviços gerenciados à infraestrutura de nuvem;
- comparar alternativas de arquitetura considerando requisitos, disponibilidade, segurança e custos;
- compreender responsabilidades de segurança e operação entre provedor e cliente;
- interpretar conceitos básicos de monitoramento e observabilidade;
- propor, em nível conceitual, uma arquitetura em nuvem para um cenário apresentado.

## Metodologia sugerida

As aulas podem combinar exposição dialogada, leitura e discussão de diagramas, análise de cenários, pequenos exercícios de decisão e estudos de caso. Não é necessário configurar serviços. Sempre que possível, partir de situações familiares: uma plataforma de ensino, loja virtual, streaming, sistema de saúde ou serviço público.

---

# Aulas

## Aula 1 — Introdução à computação em nuvem

**Objetivos:** compreender o que caracteriza a computação em nuvem e por que ela se tornou um modelo relevante para disponibilizar serviços.

**Conteúdo:**

- evolução da computação centralizada, cliente-servidor, virtualização e nuvem;
- definição de computação em nuvem;
- acesso sob demanda, elasticidade, compartilhamento de recursos e medição de uso;
- diferença entre hospedar um servidor e consumir um serviço de nuvem;
- benefícios e limitações: agilidade, escala e alcance; dependência de conectividade, custos variáveis e dependência do provedor.

**Roteiro de 2 h:** sondagem inicial (15 min); exposição conceitual (45 min); análise de exemplos de serviços conhecidos (30 min); discussão “nuvem é sempre mais barata?” (20 min); síntese e questões de revisão (10 min).

**Questões para discussão:** Que serviços digitais usamos sem conhecer sua infraestrutura? Quais componentes ainda são responsabilidade de quem contrata a nuvem?

## Aula 2 — Características, modelos de serviço e implantação

**Objetivos:** distinguir os principais modelos de serviço e de implantação e reconhecer a divisão de responsabilidades.

**Conteúdo:**

- características essenciais: autosserviço sob demanda, amplo acesso à rede, agrupamento de recursos, elasticidade rápida e serviço mensurado;
- IaaS: infraestrutura virtualizada e maior controle pelo cliente;
- PaaS: plataforma gerenciada para desenvolvimento e execução;
- SaaS: aplicação pronta consumida como serviço;
- nuvem pública, privada, híbrida e comunitária;
- responsabilidade compartilhada: responsabilidades variam conforme o serviço contratado.

**Roteiro de 2 h:** retomada (10 min); exposição com exemplos (50 min); classificação de situações em IaaS/PaaS/SaaS e modelos de implantação (35 min); debate sobre controle versus conveniência (15 min); fechamento (10 min).

**Atividade sem laboratório:** para cada cenário, justificar qual modelo de serviço seria mais adequado e indicar uma responsabilidade do cliente e uma do provedor.

## Aula 3 — Data centers, regiões e zonas de disponibilidade

**Objetivos:** relacionar a infraestrutura física dos provedores à localização, latência e continuidade dos serviços.

**Conteúdo:**

- componentes de um data center: servidores, armazenamento, rede, energia e refrigeração;
- regiões e zonas de disponibilidade;
- presença geográfica e latência;
- redundância entre instalações e domínios de falha;
- escolha de localização: latência, requisitos legais, custo e disponibilidade;
- distinção entre alta disponibilidade e recuperação de desastre.

**Roteiro de 2 h:** apresentação de conceitos (45 min); leitura guiada de diagrama de região/zona (25 min); estudo de cenário com usuários em diferentes localidades (35 min); revisão (15 min).

**Questão para discussão:** replicar dados em outra zona resolve todos os riscos? Quais falhas ainda podem afetar as duas zonas?

## Aula 4 — Virtualização, máquinas virtuais e contêineres

**Objetivos:** explicar como a virtualização permite compartilhar recursos físicos e comparar máquinas virtuais e contêineres.

**Conteúdo:**

- servidor físico, hipervisor e máquina virtual;
- isolamento e alocação de CPU, memória, disco e rede;
- virtualização completa e noções de hipervisor tipo 1 e tipo 2;
- contêineres: isolamento em nível de sistema operacional e compartilhamento do kernel;
- diferenças de portabilidade, isolamento, inicialização e gerenciamento;
- relação com serviços de computação em nuvem.

**Roteiro de 2 h:** exposição (50 min); comparação visual VM/contêiner (25 min); análise de cenários de uso (30 min); síntese (15 min).

**Atividade:** construir uma tabela comparativa indicando vantagens, limitações e exemplos de uso para VMs e contêineres.

## Aula 5 — Computação como serviço: instâncias e serverless

**Objetivos:** reconhecer formas de consumir capacidade computacional na nuvem e seus efeitos sobre operação e cobrança.

**Conteúdo:**

- instâncias de máquinas virtuais e famílias de capacidade;
- dimensionamento de recursos e superdimensionamento;
- escalabilidade vertical e horizontal;
- computação serverless e funções como serviço (FaaS);
- execução orientada a eventos, limites e inicialização a frio;
- comparação conceitual: VM, contêiner gerenciado e função serverless;
- adequação ao padrão de carga e ao nível de controle desejado.

**Roteiro de 2 h:** conceitos (45 min); análise comparativa (30 min); exercício de escolha de modelo para três cenários (30 min); revisão (15 min).

**Questão para discussão:** “Serverless” significa que não existem servidores? Explique o que o termo representa para quem desenvolve/contrata o serviço.

## Aula 6 — Redes em nuvem I: redes virtuais e endereçamento

**Objetivos:** aplicar conhecimentos de Redes à organização lógica de uma rede em nuvem.

**Conteúdo:**

- rede virtual privada (VPC/VNet) como ambiente lógico isolado;
- CIDR, endereços IPv4 privados e planejamento de sub-redes;
- sub-redes públicas e privadas;
- tabelas de rotas e gateways;
- acesso à internet, NAT e endereços públicos;
- grupos de segurança e listas de controle de rede: função e diferenças conceituais;
- segmentação e princípio do menor privilégio.

**Roteiro de 2 h:** revisão breve de endereçamento (15 min); exposição (45 min); leitura de diagrama de rede (30 min); exercício de classificação de componentes (20 min); fechamento (10 min).

**Atividade sem laboratório:** desenhar em papel uma rede com camada pública de entrada, aplicação em sub-rede privada e banco de dados sem acesso público.

## Aula 7 — Redes em nuvem II: conectividade e entrega de aplicações

**Objetivos:** compreender caminhos de comunicação entre usuários, redes corporativas e serviços hospedados na nuvem.

**Conteúdo:**

- DNS e resolução de nomes para serviços em nuvem;
- balanceadores de carga e distribuição de requisições;
- proxy reverso e terminação TLS em nível conceitual;
- VPN site-to-site e acesso remoto;
- conexão dedicada e conectividade híbrida;
- CDN, pontos de presença e cache próximo ao usuário;
- latência, largura de banda e disponibilidade da conexão.

**Roteiro de 2 h:** percurso de uma requisição (25 min); exposição dos componentes (45 min); análise de diagrama (30 min); discussão de falhas de conectividade (20 min).

**Questão para discussão:** uma aplicação está saudável no data center, mas usuários de uma região percebem lentidão. Que componentes devem ser investigados?

## Aula 8 — Armazenamento em nuvem e proteção de dados

**Objetivos:** distinguir os principais tipos de armazenamento e relacioná-los a desempenho, durabilidade e recuperação.

**Conteúdo:**

- armazenamento de objetos, blocos e arquivos;
- exemplos: imagens e documentos, discos de instâncias e diretórios compartilhados;
- durabilidade versus disponibilidade;
- versionamento, replicação e classes/camadas de armazenamento;
- backup, retenção e ciclo de vida dos dados;
- RPO e RTO como objetivos de recuperação;
- criptografia em trânsito e em repouso.

**Roteiro de 2 h:** introdução (15 min); exposição (45 min); atividade de associação entre necessidade e tipo de armazenamento (30 min); cenário de recuperação de dados (20 min); síntese (10 min).

**Atividade:** selecionar opções para armazenar arquivos de usuários, disco de sistema e documentos compartilhados, justificando cada escolha.

## Aula 9 — Bancos de dados e serviços gerenciados

**Objetivos:** compreender o que muda quando bancos de dados são oferecidos como serviços gerenciados.

**Conteúdo:**

- responsabilidades de administração de bancos;
- bancos relacionais e NoSQL em nível introdutório;
- serviço gerenciado versus banco instalado em máquina virtual;
- backups automatizados, atualizações, replicação e alta disponibilidade;
- escalabilidade de leitura e escrita;
- seleção do serviço conforme estrutura dos dados, carga e requisitos;
- riscos de dependência de recursos específicos do provedor.

**Roteiro de 2 h:** conceitos (40 min); comparação de alternativas (30 min); estudo de caso de um sistema de matrícula ou comércio (35 min); fechamento (15 min).

**Questão para discussão:** quais responsabilidades operacionais continuam com a equipe mesmo quando o banco é gerenciado?

## Aula 10 — Escalabilidade, balanceamento e cache

**Objetivos:** explicar como sistemas em nuvem lidam com aumento de demanda e identificar efeitos colaterais das estratégias de escala.

**Conteúdo:**

- escalabilidade vertical e horizontal;
- elasticidade e escalonamento automático;
- balanceamento de carga e verificações de saúde;
- cache em memória, cache de conteúdo e CDN;
- gargalos em aplicação, banco, rede e armazenamento;
- stateless e stateful em nível conceitual;
- custo e complexidade da escalabilidade.

**Roteiro de 2 h:** exposição (45 min); análise de gráfico de carga e capacidade (25 min); exercício de diagnóstico de gargalo (35 min); síntese (15 min).

**Atividade:** propor medidas para um site que fica lento durante períodos de matrícula, separando ações de curto prazo e mudanças arquiteturais.

## Aula 11 — Disponibilidade, resiliência e recuperação de desastres

**Objetivos:** diferenciar disponibilidade, tolerância a falhas e recuperação de desastre.

**Conteúdo:**

- falhas de componente, zona, região e conectividade;
- redundância e eliminação de ponto único de falha;
- alta disponibilidade e recuperação de desastre;
- replicação síncrona e assíncrona em nível conceitual;
- RTO, RPO e planos de continuidade;
- análise de impacto e priorização de serviços;
- estratégias de backup e testes de restauração.

**Roteiro de 2 h:** exposição (45 min); análise de incidente hipotético (35 min); elaboração de prioridades de recuperação (25 min); revisão (15 min).

**Questão para discussão:** uma cópia replicada protege contra exclusão acidental? Diferencie replicação de backup.

## Aula 12 — Segurança, identidade e responsabilidade compartilhada

**Objetivos:** identificar controles fundamentais de segurança e responsabilidades do cliente em ambientes de nuvem.

**Conteúdo:**

- modelo de responsabilidade compartilhada;
- IAM: identidade, autenticação, autorização, usuários, grupos, papéis e políticas;
- princípio do menor privilégio e separação de funções;
- MFA e proteção de credenciais;
- segurança de rede, segmentação e exposição pública;
- criptografia e gestão de chaves;
- classificação de dados, privacidade e registro de auditoria;
- erros frequentes: permissões excessivas, recursos expostos e segredos publicados.

**Roteiro de 2 h:** introdução com cenário de incidente (15 min); exposição (50 min); análise de responsabilidades por camada (30 min); discussão de controles preventivos (15 min); síntese (10 min).

**Atividade:** para um serviço de armazenamento de arquivos, listar três riscos e controles correspondentes.

## Aula 13 — Monitoramento e observabilidade

**Objetivos:** compreender como acompanhar a saúde de serviços e usar evidências para investigar comportamentos e falhas.

**Conteúdo:**

- monitoramento: acompanhamento de sinais e condições conhecidas;
- observabilidade: capacidade de inferir o estado interno do sistema a partir de suas saídas;
- três sinais frequentemente usados: métricas, logs e traces distribuídos;
- métricas de infraestrutura e de serviço; disponibilidade, latência, taxa de erros e saturação;
- logs estruturados, contexto e correlação entre componentes;
- rastreamento de uma requisição em sistemas distribuídos;
- dashboards, alertas, limiares e redução de alertas ruidosos;
- objetivos de nível de serviço: SLI, SLO e SLA, em nível introdutório;
- custo, retenção e proteção de dados de telemetria.

**Roteiro de 2 h:** cenário de falha (15 min); conceitos e sinais (50 min); exercício de correlação de métricas/logs/traces (30 min); discussão de alertas úteis (15 min); síntese (10 min).

**Atividade sem laboratório:** diante de aumento de latência, erros 5xx e uso elevado de CPU, formular hipóteses e indicar quais sinais adicionais ajudariam a distingui-las.

## Aula 14 — Custos, governança e sustentabilidade

**Objetivos:** reconhecer os principais fatores de custo e práticas de governança em ambientes de nuvem.

**Conteúdo:**

- cobrança por consumo e modelos de preço;
- custo de computação, armazenamento, transferência de dados e serviços gerenciados;
- custos fixos, variáveis e custos de saída de dados;
- orçamento, alertas e acompanhamento de consumo;
- tags, centros de custo e responsabilidade financeira (FinOps em nível introdutório);
- dimensionamento adequado, desligamento de recursos ociosos e políticas de retenção;
- governança: padrões, inventário, auditoria e controle de acesso;
- eficiência energética e uso responsável de recursos.

**Roteiro de 2 h:** exemplos de cobrança (35 min); exercício de identificação de fontes de custo (30 min); discussão de governança (30 min); revisão (15 min); preparação para a prova (10 min).

**Questão para discussão:** por que uma arquitetura tecnicamente adequada pode ainda ser financeiramente inviável?

## Aula 15 — Arquitetura integradora e revisão

**Objetivos:** integrar os conteúdos da disciplina em uma proposta conceitual e revisar os principais conceitos para a avaliação final.

**Conteúdo e atividade integradora:** em grupos, propor uma arquitetura para um serviço web (por exemplo, plataforma de ensino, loja virtual ou sistema de agendamento). O diagrama e a justificativa devem contemplar:

1. usuários, DNS e caminho de entrada;
2. rede virtual, sub-redes e controle de tráfego;
3. computação escolhida e justificativa;
4. armazenamento e banco de dados;
5. balanceamento, cache ou CDN, quando pertinentes;
6. disponibilidade, backup, RPO e RTO;
7. identidade, permissões e proteção dos dados;
8. métricas, logs, traces e alertas;
9. principais fatores de custo e medidas de controle.

**Roteiro de 2 h:** apresentação do cenário (10 min); elaboração do diagrama em grupo (45 min); apresentações curtas e perguntas (40 min); revisão conceitual orientada (15 min); orientações para a prova (10 min).

**Critérios sugeridos para a atividade:** coerência com os requisitos; justificativa das escolhas; consideração de segurança e falhas; clareza do diagrama; noção de custos e operação.

---

# Provas

## Prova 1 — Fundamentos e infraestrutura (2 h)

**Conteúdos recomendados:** aulas 1 a 7.  
**Ênfase:** conceitos de nuvem, características, IaaS/PaaS/SaaS, modelos de implantação, data centers, regiões e zonas, virtualização, VMs e contêineres, redes virtuais, conectividade, DNS, balanceamento e CDN.

**Formato sugerido:** questões objetivas e discursivas curtas, com leitura de diagramas e análise de pequenos cenários. Evitar cobrança de sintaxe ou configuração de serviços.

## Prova 2 — Serviços, operação e arquitetura (2 h)

**Conteúdos recomendados:** aulas 8 a 15, com integração aos conceitos anteriores.  
**Ênfase:** armazenamento, bancos gerenciados, escalabilidade, resiliência, segurança, IAM, monitoramento, observabilidade, custos, governança e decisões de arquitetura.

**Formato sugerido:** questões objetivas e análise de cenário integrador, exigindo justificativa conceitual das escolhas.

## Sugestão de avaliação complementar

Além das duas provas, a atividade integradora da aula 15 pode compor a avaliação como trabalho em grupo. Uma composição possível é **Prova 1 (40%) + Prova 2 (40%) + atividade integradora (20%)**, ajustável às normas da instituição e ao plano de ensino.

---

# Glossário essencial

| Termo | Significado resumido |
|---|---|
| Elasticidade | Ajuste da capacidade conforme a demanda, frequentemente de forma automática. |
| Região | Área geográfica do provedor que contém recursos de nuvem. |
| Zona de disponibilidade | Domínio de infraestrutura isolado dentro de uma região. |
| VPC/VNet | Rede virtual logicamente isolada na nuvem. |
| CDN | Rede distribuída que entrega conteúdo a partir de pontos próximos aos usuários. |
| RTO | Tempo máximo desejado para restaurar um serviço após uma interrupção. |
| RPO | Perda máxima de dados, medida em tempo, aceitável após uma interrupção. |
| IAM | Gestão de identidades, autenticação e permissões. |
| Métrica | Valor numérico agregado ao longo do tempo, como latência ou uso de CPU. |
| Log | Registro de eventos ocorridos em um sistema. |
| Trace | Trajeto de uma requisição através de componentes distribuídos. |
| Observabilidade | Capacidade de inferir o estado interno de um sistema a partir de sinais produzidos por ele. |
| FinOps | Práticas para tornar visíveis e gerir os custos de serviços em nuvem. |

# Referências introdutórias

- NIST. *The NIST Definition of Cloud Computing*. Special Publication 800-145.
- AWS. *O que é computação em nuvem?* Documentação introdutória da AWS.
- Microsoft Learn. *O que é computação em nuvem?* Material introdutório do Azure.
- Google Cloud. *Visão geral da computação em nuvem*. Documentação introdutória.
- NIST. *Security and Privacy Controls for Information Systems and Organizations*. SP 800-53, como referência complementar para segurança.

> As referências de provedores são exemplos didáticos. Os conceitos centrais devem ser apresentados de forma independente de plataforma, e os materiais podem ser atualizados conforme a oferta dos serviços evolui.
