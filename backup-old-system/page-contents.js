// Rich content for each SEO page
const PAGE_CONTENTS = {
  'melhor-aplicativo-barbearia': {
    'pt-BR': {
      sections: [
        {
          type: 'hero',
          title: 'O Melhor Aplicativo para Barbearias em 2024',
          subtitle: 'Transforme sua barbearia com o sistema de agendamento mais completo do mercado. Aumente o faturamento em até 40% com ferramentas profissionais.',
          image: 'barber-hero.jpg'
        },
        {
          type: 'features',
          title: 'Por que o Converso é o Melhor para Barbearias?',
          items: [
            {
              icon: '📱',
              title: 'App Próprio da Sua Barbearia',
              description: 'Seus clientes agendam diretamente no seu site profissional, sem marketplaces ou taxas por agendamento.'
            },
            {
              icon: '💈',
              title: 'Fila Digital Inteligente',
              description: 'Gerencie clientes walk-in com QR code. Cliente chega, escaneia, e recebe notificação quando for a vez dele.'
            },
            {
              icon: '🎁',
              title: 'Programa de Fidelidade',
              description: 'Fidelize clientes com pontos automáticos. A cada 10 cortes, 1 grátis. Tudo automatizado.'
            },
            {
              icon: '📊',
              title: 'Relatórios Completos',
              description: 'Saiba quais serviços mais vendem, horários de pico, ticket médio e performance de cada barbeiro.'
            },
            {
              icon: '💬',
              title: 'WhatsApp Integrado',
              description: 'Confirmações e lembretes automáticos por WhatsApp. Reduza faltas em até 80%.'
            },
            {
              icon: '💳',
              title: 'Pagamento Online',
              description: 'Receba por PIX, cartão ou dinheiro. Cliente paga direto no app e você recebe na hora.'
            }
          ]
        },
        {
          type: 'comparison',
          title: 'Converso vs Outros Apps de Barbearia',
          subtitle: 'Veja por que somos a escolha de mais de 5.000 barbearias',
          table: {
            headers: ['Recurso', 'Converso', 'Booksy', 'Trinks', 'Agenda Beauty'],
            rows: [
              ['Site próprio profissional', '✅', '❌', '❌', '❌'],
              ['Sem taxa por agendamento', '✅', '❌ (15%)', '❌ (12%)', '❌ (10%)'],
              ['Fila digital com QR Code', '✅', '❌', '❌', '❌'],
              ['Programa fidelidade', '✅', '⚠️ Limitado', '❌', '❌'],
              ['WhatsApp automático', '✅', '❌', '❌', '⚠️ Pago extra'],
              ['Preço mensal', 'R$ 88', 'R$ 149+taxas', 'R$ 99+taxas', 'R$ 119+taxas']
            ]
          }
        },
        {
          type: 'testimonials',
          title: 'O que Barbeiros Dizem sobre o Converso',
          items: [
            {
              name: 'Carlos Silva',
              business: 'Barbearia Premium - São Paulo',
              text: 'Aumentei meu faturamento em 45% em 3 meses. O sistema de fila digital mudou meu negócio.',
              rating: 5
            },
            {
              name: 'Rafael Santos',
              business: 'Old School Barber - Rio de Janeiro',
              text: 'Finalmente tenho controle total da agenda. Sem taxas absurdas e com meu próprio site.',
              rating: 5
            },
            {
              name: 'Pedro Oliveira',
              business: 'Barbearia Moderna - Belo Horizonte',
              text: 'O programa de fidelidade fez meus clientes voltarem mais. ROI incrível!',
              rating: 5
            }
          ]
        },
        {
          type: 'pricing',
          title: 'Investimento que se Paga no Primeiro Mês',
          plans: [
            {
              name: 'Plus',
              price: 'R$ 88/mês',
              description: 'Para barbearias em crescimento',
              features: [
                '500 agendamentos/mês',
                'Até 3 barbeiros',
                'Fila digital básica',
                'WhatsApp automático',
                'Site profissional'
              ]
            },
            {
              name: 'Pro',
              price: 'R$ 288/mês',
              popular: true,
              description: 'Para barbearias estabelecidas',
              features: [
                'Agendamentos ilimitados',
                'Barbeiros ilimitados',
                'Fila digital avançada',
                'Programa fidelidade',
                'Relatórios completos',
                'Suporte prioritário'
              ]
            }
          ]
        },
        {
          type: 'faq',
          title: 'Perguntas Frequentes',
          items: [
            {
              question: 'Preciso pagar taxa por agendamento?',
              answer: 'Não! Com o Converso você paga apenas a mensalidade fixa. Sem surpresas, sem taxas escondidas.'
            },
            {
              question: 'Como funciona a fila digital?',
              answer: 'Cliente chega, escaneia QR code, entra na fila virtual e recebe notificação no WhatsApp quando chegar a vez.'
            },
            {
              question: 'Posso migrar meus clientes de outro app?',
              answer: 'Sim! Importamos sua base de clientes e histórico. Migração 100% gratuita com nosso suporte.'
            },
            {
              question: 'Funciona para barbearia com múltiplas unidades?',
              answer: 'Sim! Gerencie várias unidades em um só lugar, com relatórios individuais e consolidados.'
            }
          ]
        }
      ]
    }
  },
  'preco-sistema-agendamento-online': {
    'pt-BR': {
      sections: [
        {
          type: 'hero',
          title: 'Quanto Custa um Sistema de Agendamento Online em 2024?',
          subtitle: 'Compare preços, funcionalidades e descubra a melhor opção custo-benefício para seu negócio. Análise completa e transparente.'
        },
        {
          type: 'content',
          title: 'Visão Geral do Mercado',
          paragraphs: [
            'O mercado de sistemas de agendamento online cresceu 300% nos últimos 3 anos. Com tantas opções, os preços variam de R$ 0 a R$ 500+ por mês.',
            'Mas cuidado: muitos sistemas "gratuitos" cobram taxas de até 20% por agendamento. Em um negócio com 100 agendamentos/mês de R$ 50 cada, isso significa R$ 1.000 em taxas!',
            'Neste guia, analisamos os custos reais de cada tipo de sistema, incluindo taxas ocultas e custos indiretos.'
          ]
        },
        {
          type: 'pricing-comparison',
          title: 'Comparativo de Preços 2024',
          categories: [
            {
              name: 'Marketplaces (GetNinjas, Singu, etc)',
              pricing: 'R$ 0/mês + 15-20% por serviço',
              pros: ['Sem mensalidade', 'Trazem clientes'],
              cons: ['Taxas altíssimas', 'Sem controle da marca', 'Clientes não são seus'],
              realCost: 'R$ 500-2000/mês em taxas'
            },
            {
              name: 'Apps Específicos (Booksy, Trinks)',
              pricing: 'R$ 99-199/mês + 5-15% por serviço',
              pros: ['Interface conhecida', 'Recursos básicos'],
              cons: ['Ainda tem taxas', 'Sem site próprio', 'Limitações técnicas'],
              realCost: 'R$ 300-800/mês total'
            },
            {
              name: 'Sistemas Empresariais',
              pricing: 'R$ 500-2000/mês',
              pros: ['Muitos recursos', 'Suporte dedicado'],
              cons: ['Muito caro', 'Complexo demais', 'Contrato anual'],
              realCost: 'R$ 6.000-24.000/ano'
            },
            {
              name: 'Converso (Site Próprio)',
              pricing: 'R$ 88-288/mês fixo',
              pros: ['Sem taxas', 'Site próprio', 'Tudo incluso'],
              cons: ['Precisa divulgar seu site'],
              realCost: 'R$ 88-288/mês total',
              highlight: true
            }
          ]
        },
        {
          type: 'calculator',
          title: 'Calcule Seu Custo Real',
          description: 'Veja quanto você pagaria em cada sistema baseado no seu volume de agendamentos:'
        },
        {
          type: 'features-breakdown',
          title: 'O que Deve Estar Incluído no Preço',
          sections: [
            {
              category: 'Essenciais (Não pode faltar)',
              items: [
                'Agendamento online 24/7',
                'Gestão de horários e disponibilidade',
                'Confirmações automáticas',
                'Histórico de clientes',
                'Versão mobile'
              ]
            },
            {
              category: 'Importantes (Fazem diferença)',
              items: [
                'Site profissional próprio',
                'WhatsApp integrado',
                'Pagamento online',
                'Múltiplos profissionais',
                'Relatórios básicos'
              ]
            },
            {
              category: 'Avançados (Para crescer)',
              items: [
                'Programa de fidelidade',
                'E-mail marketing',
                'Fila digital',
                'API e integrações',
                'Multi-unidades'
              ]
            }
          ]
        },
        {
          type: 'hidden-costs',
          title: 'Custos Ocultos que Ninguém Conta',
          items: [
            {
              cost: 'Taxa de Setup',
              description: 'Muitos cobram R$ 500-2000 para configurar',
              impact: 'R$ 500-2000 única vez'
            },
            {
              cost: 'Taxa por SMS',
              description: 'R$ 0,30-0,50 por SMS de confirmação',
              impact: 'R$ 30-100/mês'
            },
            {
              cost: 'Taxa de Cancelamento',
              description: 'Multa de 3-6 meses para cancelar',
              impact: 'R$ 300-1200'
            },
            {
              cost: 'Recursos "Premium"',
              description: 'Relatórios, integrações, suporte',
              impact: 'R$ 50-200/mês extra'
            }
          ]
        },
        {
          type: 'roi-analysis',
          title: 'Retorno sobre Investimento',
          content: 'Um bom sistema de agendamento deve se pagar em 30 dias através de:',
          benefits: [
            {
              metric: 'Redução de faltas',
              value: '80% menos no-shows',
              impact: '+ R$ 500-1500/mês'
            },
            {
              metric: 'Aumento de agendamentos',
              value: '30% mais bookings',
              impact: '+ R$ 1000-3000/mês'
            },
            {
              metric: 'Economia de tempo',
              value: '10h/semana economizadas',
              impact: '+ R$ 400-1000/mês'
            }
          ]
        }
      ]
    }
  },
  'como-montar-salao-beleza': {
    'pt-BR': {
      sections: [
        {
          type: 'hero',
          title: 'Como Montar um Salão de Beleza do Zero em 2024',
          subtitle: 'Guia completo e atualizado com tudo que você precisa saber: documentação, investimento, equipamentos e estratégias para ter sucesso desde o primeiro dia.'
        },
        {
          type: 'toc',
          title: 'O que você vai aprender',
          items: [
            'Planejamento e análise de mercado',
            'Documentação e legalização',
            'Investimento inicial detalhado',
            'Escolha do ponto e reforma',
            'Equipamentos e fornecedores',
            'Contratação de profissionais',
            'Marketing e captação de clientes',
            'Gestão financeira e crescimento'
          ]
        },
        {
          type: 'step-by-step',
          title: 'Passo a Passo Completo',
          steps: [
            {
              number: '1',
              title: 'Planejamento e Pesquisa de Mercado',
              content: 'Antes de qualquer coisa, pesquise seu mercado local. Visite 10 salões na região, analise preços, serviços e movimento.',
              checklist: [
                'Defina seu público-alvo (classe A/B/C)',
                'Analise a concorrência num raio de 2km',
                'Identifique serviços em falta na região',
                'Calcule o ticket médio da região',
                'Escolha seu diferencial competitivo'
              ]
            },
            {
              number: '2',
              title: 'Documentação e Legalização',
              content: 'A burocracia é chata mas necessária. Comece cedo para não atrasar a abertura.',
              checklist: [
                'Abra um CNPJ (MEI ou ME)',
                'Registro na Junta Comercial',
                'Inscrição Estadual e Municipal',
                'Alvará de Funcionamento',
                'Alvará da Vigilância Sanitária',
                'Certificado de Dedetização',
                'Seguro do estabelecimento'
              ],
              tip: 'Um contador custa R$ 200-400/mês e resolve tudo isso para você.'
            },
            {
              number: '3',
              title: 'Investimento Inicial Detalhado',
              content: 'O investimento varia muito, mas aqui está uma média realista:',
              breakdown: [
                { item: 'Reforma básica (50m²)', cost: 'R$ 15.000 - 25.000' },
                { item: 'Móveis (4 postos)', cost: 'R$ 8.000 - 12.000' },
                { item: 'Equipamentos básicos', cost: 'R$ 10.000 - 15.000' },
                { item: 'Produtos iniciais', cost: 'R$ 5.000 - 8.000' },
                { item: 'Marketing inicial', cost: 'R$ 2.000 - 3.000' },
                { item: 'Capital de giro (3 meses)', cost: 'R$ 15.000 - 20.000' },
                { item: 'Total estimado', cost: 'R$ 55.000 - 83.000', highlight: true }
              ]
            },
            {
              number: '4',
              title: 'Escolha do Ponto',
              content: 'O ponto pode fazer ou quebrar seu salão. Não economize aqui.',
              factors: [
                'Fluxo de pessoas (mínimo 500/dia)',
                'Estacionamento ou transporte público',
                'Visibilidade da rua',
                'Segurança da região',
                'Proximidade do público-alvo',
                'Tamanho mínimo: 40m²'
              ],
              warning: 'Aluguel não deve passar de 10% do faturamento esperado.'
            },
            {
              number: '5',
              title: 'Equipamentos Essenciais',
              categories: [
                {
                  name: 'Móveis',
                  items: ['Cadeiras hidráulicas', 'Lavatórios', 'Espelhos com iluminação', 'Poltronas de espera', 'Balcão recepção']
                },
                {
                  name: 'Equipamentos',
                  items: ['Secadores profissionais', 'Pranchas e babyliss', 'Vaporizador', 'Autoclave', 'Estufa esterilizadora']
                },
                {
                  name: 'Tecnologia',
                  items: ['Sistema de agendamento', 'Máquina de cartão', 'Wi-fi para clientes', 'Som ambiente', 'Ar condicionado']
                }
              ]
            },
            {
              number: '6',
              title: 'Contratação de Profissionais',
              content: 'Você pode contratar CLT ou trabalhar com parceiros (mais comum).',
              models: [
                {
                  type: 'Parceria (70/30 ou 60/40)',
                  pros: ['Sem custos trabalhistas', 'Profissional motivado', 'Menos burocracia'],
                  cons: ['Menos controle', 'Pode sair a qualquer hora']
                },
                {
                  type: 'CLT',
                  pros: ['Maior controle', 'Horários fixos', 'Exclusividade'],
                  cons: ['Custos trabalhistas (+70%)', 'Mais burocracia']
                }
              ]
            },
            {
              number: '7',
              title: 'Marketing para Começar',
              content: 'Nos primeiros meses, marketing é sobrevivência.',
              strategies: [
                {
                  tactic: 'Inauguração com 50% off',
                  description: 'Primeira semana com desconto para criar base de clientes',
                  cost: 'R$ 0 (desconto)'
                },
                {
                  tactic: 'Parcerias locais',
                  description: 'Academias, lojas de roupa, empresas da região',
                  cost: 'R$ 0-500'
                },
                {
                  tactic: 'Instagram + Facebook Ads',
                  description: 'R$ 30/dia em anúncios locais bem segmentados',
                  cost: 'R$ 900/mês'
                },
                {
                  tactic: 'Google Meu Negócio',
                  description: 'Fundamental para aparecer nas buscas locais',
                  cost: 'Grátis'
                }
              ]
            },
            {
              number: '8',
              title: 'Sistema de Gestão',
              content: 'Desde o dia 1, tenha controle total do negócio.',
              essentials: [
                'Agendamento online profissional',
                'Controle de caixa diário',
                'Cadastro completo de clientes',
                'Histórico de serviços',
                'Relatórios de desempenho',
                'Programa de fidelidade'
              ],
              recommendation: 'O Converso oferece tudo isso por R$ 88/mês, sem taxas por agendamento.'
            }
          ]
        },
        {
          type: 'mistakes',
          title: 'Os 7 Erros Fatais (e como evitar)',
          items: [
            {
              mistake: 'Começar sem capital de giro',
              solution: 'Reserve 6 meses de custos fixos antes de abrir'
            },
            {
              mistake: 'Não pesquisar a concorrência',
              solution: 'Seja cliente dos concorrentes antes de abrir'
            },
            {
              mistake: 'Economizar no ponto',
              solution: 'Melhor pagar mais por um ponto bom'
            },
            {
              mistake: 'Não ter sistema de gestão',
              solution: 'Implemente desde o primeiro dia'
            },
            {
              mistake: 'Preços muito baixos',
              solution: 'Preço justo atrai cliente bom'
            },
            {
              mistake: 'Não investir em marketing',
              solution: 'Reserve 10% do faturamento para marketing'
            },
            {
              mistake: 'Misturar dinheiro pessoal',
              solution: 'Conta bancária só para o salão'
            }
          ]
        }
      ]
    }
  },
  'quanto-cobrar-corte-cabelo': {
    'pt-BR': {
      sections: [
        {
          type: 'hero',
          title: 'Quanto Cobrar por Corte de Cabelo em 2024',
          subtitle: 'Guia definitivo de precificação para salões e barbearias. Aprenda a calcular o preço justo que cobre custos e gera lucro.'
        },
        {
          type: 'regional-pricing',
          title: 'Tabela de Preços por Região (2024)',
          data: [
            {
              region: 'São Paulo - Capital',
              basic: 'R$ 45-70',
              premium: 'R$ 80-150',
              luxury: 'R$ 150-300'
            },
            {
              region: 'Rio de Janeiro - Capital',
              basic: 'R$ 40-65',
              premium: 'R$ 75-140',
              luxury: 'R$ 140-280'
            },
            {
              region: 'Capitais Sul/Sudeste',
              basic: 'R$ 35-55',
              premium: 'R$ 60-100',
              luxury: 'R$ 100-200'
            },
            {
              region: 'Capitais Norte/Nordeste',
              basic: 'R$ 25-45',
              premium: 'R$ 50-80',
              luxury: 'R$ 80-150'
            },
            {
              region: 'Interior SP/RJ/MG',
              basic: 'R$ 30-45',
              premium: 'R$ 50-80',
              luxury: 'R$ 80-150'
            },
            {
              region: 'Cidades pequenas',
              basic: 'R$ 20-35',
              premium: 'R$ 40-60',
              luxury: 'R$ 60-100'
            }
          ],
          note: 'Valores médios baseados em pesquisa com 1.200 estabelecimentos'
        },
        {
          type: 'cost-calculator',
          title: 'Calculadora de Custos do Serviço',
          introduction: 'Para definir o preço, primeiro calcule seus custos:',
          costs: [
            {
              category: 'Custos Fixos (rateado por corte)',
              items: [
                { name: 'Aluguel', calculation: 'R$ 3.000 ÷ 300 cortes/mês = R$ 10,00' },
                { name: 'Energia + Água', calculation: 'R$ 600 ÷ 300 = R$ 2,00' },
                { name: 'Funcionários', calculation: 'R$ 4.500 ÷ 300 = R$ 15,00' },
                { name: 'Outros fixos', calculation: 'R$ 900 ÷ 300 = R$ 3,00' }
              ],
              subtotal: 'R$ 30,00 por corte'
            },
            {
              category: 'Custos Variáveis',
              items: [
                { name: 'Produtos (shampoo, gel)', value: 'R$ 3,00' },
                { name: 'Descartáveis', value: 'R$ 1,50' },
                { name: 'Comissão (se houver)', value: 'R$ 15,00' },
                { name: 'Impostos (6-15%)', value: 'R$ 4,00' }
              ],
              subtotal: 'R$ 23,50 por corte'
            }
          ],
          total: 'Custo Total: R$ 53,50 por corte',
          formula: 'Preço Mínimo = Custo Total × 1,5 = R$ 80,25'
        },
        {
          type: 'pricing-strategies',
          title: 'Estratégias de Precificação',
          strategies: [
            {
              name: 'Preço Psicológico',
              description: 'Use R$ 49 ao invés de R$ 50. O cérebro processa como "40 e poucos".',
              example: 'R$ 49, R$ 79, R$ 99'
            },
            {
              name: 'Pacotes e Combos',
              description: 'Aumente o ticket médio oferecendo serviços complementares.',
              example: 'Corte + Barba: R$ 89 (economia de R$ 20)'
            },
            {
              name: 'Preços por Profissional',
              description: 'Profissionais mais experientes podem cobrar mais.',
              example: 'Junior: R$ 50 | Pleno: R$ 70 | Senior: R$ 90'
            },
            {
              name: 'Happy Hour',
              description: 'Desconto em horários de menor movimento.',
              example: '20% off de segunda a quarta até 15h'
            },
            {
              name: 'Mensalidade/Assinatura',
              description: 'Cliente paga valor fixo para cortes ilimitados.',
              example: 'R$ 149/mês para cortes semanais'
            }
          ]
        },
        {
          type: 'value-perception',
          title: 'Como Justificar Preços Mais Altos',
          factors: [
            {
              factor: 'Experiência Premium',
              implementations: [
                'Cerveja/café cortesia',
                'Massagem no couro cabeludo',
                'Toalha quente',
                'Ambiente diferenciado',
                'Atendimento personalizado'
              ]
            },
            {
              factor: 'Conveniência',
              implementations: [
                'Agendamento online 24h',
                'Horário estendido',
                'Sem filas de espera',
                'Estacionamento grátis',
                'Localização privilegiada'
              ]
            },
            {
              factor: 'Expertise',
              implementations: [
                'Certificações visíveis',
                'Antes/depois no Instagram',
                'Especialização em cortes específicos',
                'Consultoria de estilo',
                'Garantia de satisfação'
              ]
            }
          ]
        },
        {
          type: 'competitor-analysis',
          title: 'Análise da Concorrência',
          steps: [
            'Liste 10 concorrentes diretos num raio de 2km',
            'Visite como cliente e anote preços e serviços',
            'Calcule a média de preços da região',
            'Identifique o que eles NÃO oferecem',
            'Posicione seu preço: -20% (entrada), igual (competir), +20% (premium)'
          ]
        },
        {
          type: 'price-increase',
          title: 'Quando e Como Aumentar Preços',
          when: [
            'Agenda lotada há 2+ meses',
            'Inflação acumulada > 10%',
            'Após melhorias significativas',
            'Mudança de público-alvo',
            'Aumento de custos > 15%'
          ],
          how: [
            'Avise com 30 dias de antecedência',
            'Justifique com melhorias',
            'Ofereça pacotes para fidelizar',
            'Aumente gradualmente (10-15%)',
            'Mantenha preço antigo para mensalistas'
          ]
        },
        {
          type: 'profit-optimization',
          title: 'Maximizando Lucro por Cadeira',
          metrics: [
            {
              metric: 'Tempo médio por corte',
              target: '30-40 minutos',
              tip: 'Mais que isso, aumente o preço'
            },
            {
              metric: 'Taxa de ocupação',
              target: '75-85%',
              tip: 'Menos = marketing, Mais = aumente preço'
            },
            {
              metric: 'Ticket médio',
              target: 'R$ 80-120',
              tip: 'Use combos para aumentar'
            },
            {
              metric: 'Recorrência',
              target: '1x a cada 3-4 semanas',
              tip: 'Programe retorno na saída'
            }
          ]
        }
      ]
    }
  },
  'mercado-beleza-estetica-brasil': {
    'pt-BR': {
      sections: [
        {
          type: 'hero',
          title: 'O Gigante Mercado de Beleza e Estética no Brasil',
          subtitle: 'Brasil é o 4º maior mercado de beleza do mundo. Entenda os números, tendências e oportunidades deste setor que não para de crescer.'
        },
        {
          type: 'market-overview',
          title: 'Brasil: Potência Mundial em Beleza',
          stats: [
            {
              number: 'R$ 186 bilhões',
              label: 'Faturamento anual do setor (2024)',
              growth: '+8,2% vs 2023'
            },
            {
              number: '4º lugar',
              label: 'Ranking mundial',
              detail: 'Atrás apenas de EUA, China e Japão'
            },
            {
              number: '2,8 milhões',
              label: 'Profissionais atuando',
              growth: '+12% ao ano'
            },
            {
              number: '780 mil',
              label: 'Salões e clínicas',
              detail: '1 para cada 270 habitantes'
            }
          ]
        },
        {
          type: 'segment-breakdown',
          title: 'Faturamento por Segmento',
          segments: [
            {
              name: 'Cabelos',
              value: 'R$ 67 bi',
              percentage: '36%',
              growth: '+7,5%',
              includes: ['Salões', 'Barbearias', 'Produtos capilares']
            },
            {
              name: 'Estética Facial',
              value: 'R$ 41 bi',
              percentage: '22%',
              growth: '+15,3%',
              includes: ['Skincare', 'Tratamentos', 'Harmonização']
            },
            {
              name: 'Estética Corporal',
              value: 'R$ 33 bi',
              percentage: '18%',
              growth: '+11,2%',
              includes: ['Depilação', 'Massagens', 'Tratamentos']
            },
            {
              name: 'Maquiagem',
              value: 'R$ 24 bi',
              percentage: '13%',
              growth: '+9,8%',
              includes: ['Produtos', 'Serviços', 'Cursos']
            },
            {
              name: 'Unhas',
              value: 'R$ 21 bi',
              percentage: '11%',
              growth: '+6,5%',
              includes: ['Manicure', 'Produtos', 'Nail art']
            }
          ]
        },
        {
          type: 'trends-2024',
          title: 'Tendências que Dominam 2024',
          trends: [
            {
              trend: 'Beleza Consciente',
              description: 'Produtos veganos, cruelty-free e sustentáveis crescem 40% ao ano',
              opportunity: 'Salões eco-friendly cobram 30% a mais'
            },
            {
              trend: 'Tecnologia & Beleza',
              description: 'IA para diagnóstico de pele, realidade aumentada para maquiagem',
              opportunity: 'Clínicas tech-forward têm 2x mais clientes jovens'
            },
            {
              trend: 'Masculinização',
              description: 'Homens já representam 25% do mercado',
              opportunity: 'Barbearias modernas faturam 3x mais que tradicionais'
            },
            {
              trend: 'Wellness Integration',
              description: 'Beleza + bem-estar + saúde mental',
              opportunity: 'Espaços integrados têm ticket 80% maior'
            },
            {
              trend: 'Beleza Inclusiva',
              description: 'Produtos e serviços para todos os tipos de pele e cabelo',
              opportunity: 'Marcas inclusivas crescem 2x mais rápido'
            }
          ]
        },
        {
          type: 'regional-analysis',
          title: 'Mercado por Região',
          regions: [
            {
              region: 'Sudeste',
              share: '48%',
              value: 'R$ 89 bi',
              highlights: ['SP lidera com 27% nacional', 'Maior ticket médio: R$ 127']
            },
            {
              region: 'Sul',
              share: '19%',
              value: 'R$ 35 bi',
              highlights: ['Maior gasto per capita', 'Forte cultura de cuidados']
            },
            {
              region: 'Nordeste',
              share: '18%',
              value: 'R$ 33 bi',
              highlights: ['Maior crescimento: +14% ao ano', 'Boom de franquias']
            },
            {
              region: 'Centro-Oeste',
              share: '9%',
              value: 'R$ 17 bi',
              highlights: ['Brasília: maior renda', 'Crescimento de 11% ao ano']
            },
            {
              region: 'Norte',
              share: '6%',
              value: 'R$ 11 bi',
              highlights: ['Mercado menos saturado', 'Oportunidades de expansão']
            }
          ]
        },
        {
          type: 'consumer-behavior',
          title: 'Comportamento do Consumidor Brasileiro',
          insights: [
            {
              stat: '73%',
              description: 'vão ao salão pelo menos 1x por mês',
              detail: 'Mulheres: 81% | Homens: 52%'
            },
            {
              stat: 'R$ 213',
              description: 'gasto médio mensal com beleza',
              detail: 'Classe A: R$ 587 | Classe C: R$ 124'
            },
            {
              stat: '67%',
              description: 'escolhem pelo Instagram',
              detail: 'Presença digital é crucial'
            },
            {
              stat: '89%',
              description: 'valorizam agendamento online',
              detail: 'Conveniência é prioridade'
            },
            {
              stat: '45%',
              description: 'participam de programas de fidelidade',
              detail: 'Retenção é mais barata que aquisição'
            }
          ]
        },
        {
          type: 'opportunities',
          title: 'Oportunidades de Ouro no Setor',
          opportunities: [
            {
              opportunity: 'Nichos Específicos',
              description: 'Especialização gera premium de 40-60%',
              examples: ['Colorimetria', 'Cachos', 'Barbearia premium', 'Estética oncológica']
            },
            {
              opportunity: 'Serviços Express',
              description: 'Atendimentos rápidos para rotina corrida',
              examples: ['Esmalteria 20min', 'Barba express', 'Sobrancelha na hora']
            },
            {
              opportunity: 'Assinaturas/Mensalidades',
              description: 'Receita recorrente e previsível',
              examples: ['Planos de corte', 'Pacotes de estética', 'Clubes de beleza']
            },
            {
              opportunity: 'Home Care Premium',
              description: 'Atendimento domiciliar cobra 2-3x mais',
              examples: ['Dia da noiva', 'Idosos', 'Executivos']
            },
            {
              opportunity: 'Educação & Conteúdo',
              description: 'Cursos e workshops geram receita extra',
              examples: ['Automaquiagem', 'Cuidados em casa', 'Masterclasses']
            }
          ]
        },
        {
          type: 'challenges',
          title: 'Desafios do Mercado',
          challenges: [
            {
              challenge: 'Alta Concorrência',
              impact: '68% fecham em 2 anos',
              solution: 'Diferenciação e gestão profissional'
            },
            {
              challenge: 'Informalidade',
              impact: '40% sem CNPJ',
              solution: 'Formalização traz credibilidade e crescimento'
            },
            {
              challenge: 'Falta de Gestão',
              impact: '72% não sabem seu lucro real',
              solution: 'Sistemas de gestão e controle financeiro'
            },
            {
              challenge: 'Mão de Obra',
              impact: '83% têm dificuldade para contratar',
              solution: 'Parcerias e capacitação interna'
            }
          ]
        },
        {
          type: 'success-formula',
          title: 'Fórmula do Sucesso no Setor',
          steps: [
            {
              step: 'Escolha um Nicho',
              description: 'Generalista não se destaca. Seja o melhor em algo específico.'
            },
            {
              step: 'Invista em Tecnologia',
              description: 'Agendamento online, gestão digital, marketing automation.'
            },
            {
              step: 'Crie Experiências',
              description: 'Cliente não compra só serviço, compra como se sente.'
            },
            {
              step: 'Fidelize Agressivamente',
              description: 'Custa 5x mais conseguir cliente novo que manter um.'
            },
            {
              step: 'Meça Tudo',
              description: 'Ticket médio, recorrência, CAC, LTV - números não mentem.'
            }
          ]
        },
        {
          type: 'future-projection',
          title: 'Projeções para 2025-2030',
          projections: [
            'Mercado deve atingir R$ 250 bilhões até 2027',
            'Digitalização completa: 90% com agendamento online',
            'Consolidação: grandes redes comprarão independentes',
            'Sustentabilidade será obrigatória, não diferencial',
            'IA e automação em 50% dos processos'
          ]
        }
      ]
    }
  }
};

module.exports = { PAGE_CONTENTS };