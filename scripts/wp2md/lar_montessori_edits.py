"""Per-post decisions for larmontessori.com (op syntax in core.apply_ops).

KEEP            posts that are announcements about the site itself (discarded from the output)
EDITS           remove "Lar Montessori" references without touching the didactic content
FORCE_NOCONTENT posts with no pedagogical content left (discarded)
PROMO           removal of advertising: courses, workshops, books, testimonials, call-to-action headings
"""

KEEP = {
    '10-000', 'apoiadores-do-lar-montessori', 'aula-especial-matematica-montessori',
    'bolsas-para-a-pos-graduacao-do-lar-montessori', 'bolsas-para-a-pos-graduacao-em-montessori',
    'curso-de-alfabetizacao-em-montessori-ultima-semana-de-inscricoes', 'curso-presencial-em-dezembro',
    'dia-do-blogueiro-e-eu-so-descobri-agora', 'escola-maria', 'feliz-ano-novo',
    'minicurso-de-introducao-a-montessori', 'montessori-de-graca-duas-vezes-por-semana-na-sua-mao',
    'montessori-viver-em-paz-com-criancas-workshop', 'nosso-curso-em-fortaleza', 'nosso-presente-para-voce',
    'o-livro-do-lar-montessori', 'o-que-aconteceu-com-o-lar', 'obrigado-e-vamos-juntos', 'os-numeros-de-2014',
    'para-um-ano-de-paz', 'podcast-do-lar-montessori', 'ultima-aula-do-workshop-montessori-viver-em-paz-com-criancas',
    'vinte-anos-em-montessori',
}

PG = 'https://larmontessori.com/posgraduacaomontessori/'

EDITS = {
    '16621': [
        ('del', 'Faz quase dois meses que não apareço'),
        ('del', 'O que eu fui dizer lá é:'),
        ('del', '*PS: Se você conhece uma pessoa querida'),
    ],
    'a-casa-viva': [
        ('sub', ' – é por isso que o Lar Montessori se chama **Lar** Montessori, inclusive.', '.'),
    ],
    'a-crianca-aprende-com-o-corpo-inteiro-montessori': [('promo', 'O Lar Montessori organizou algumas')],
    'a-crianca-que-queria-saber-tudo': [
        ('trunc', ' É em homenagem a este interesse flamejante'),
        ('del', 'Nesta série, nós vamos descobrir'),
        ('del', 'não espere pelas aulas gratuitas'),
    ],
    'a-crianca-que-renasce-todos-os-dias': [('promo', 'Ficar em casa o tempo todo com as crianças')],
    'a-parte-invisivel-de-montessori': [('del', '*Ah! Faz tempo que eu não te escrevo')],
    'a-risada-da-esperanca': [('del', '*PS2: As inscrições para a Pós-Graduação')],
    'a-transformacao-do-adulto-em-adulto-preparado': [
        ('sub', ' Nós, do Lar Montessori, não esperamos', ' Não esperamos'),
        ('re', r', e o Lar Montessori tem os primeiros passos para você.*?Você pode ler sobre o que quiser ali\.', '.'),
        ('sub', ', traduzidos pelo Lar Montessori e [publicados em inglês]', ', [publicados em inglês]'),
        ('sub', ' Se você não tiver mais ninguém que aponte, pode contar conosco, no Lar Montessori. Fazemos isso pelo menos duas vezes por mês.', ''),
    ],
    'adultismo-e-montessori': [('sub', ', outro texto do Lar Montessori', '')],
    'adulto-erros-montessori': [('del', 'Venha fazer parte do novo curso do Lar Montessori')],
    'ano-novo-natal-montessori': [
        ('re', r' Aqui, vão dez sugestões do Lar Montessori\..*?Agora, estão aqui para o Ano Novo!', ' Aqui, vão dez sugestões para o Ano Novo!'),
    ],
    'as-historias-que-as-criancas-precisam-ouvir': [('promo', 'O Lar Montessori tem um minicurso de Introdução')],
    'as-telas-vao-ficar-o-que-nos-podemos-fazer': [('del', 'assine os Recados do Lar Montessori')],
    'aspectos-de-montessori-em-casa': [
        ('sub', ' Para isso, você pode visitar a categoria sobre Brinquedos e Brincadeiras, aqui no Lar Montessori.', ''),
    ],
    'bater-nao-funciona-montessori': [('del', 'Além disso, o Lar Montessori tem uma seção')],
    'caracteristicas-de-uma-escola-montessori': [
        ('sub', 'recorrer a outros textos do Lar Montessori para', 'recorrer a outros textos para'),
        ('sub', 'procure no Lar e fora daqui', 'procure em outras fontes'),
    ],
    'carta-do-building-the-pink-tower': [
        ('sub', ' O Lar Montessori apoia este projeto e insiste: apoie você também! Vamos construir o futuro da educação!', ''),
    ],
    'ciencia-feminismo-e-educacao-as-origens-do-metodo-montessori': [
        ('sub', 'Anos atrás publiquei no Lar Montessori uma coletânea', 'Anos atrás publiquei uma coletânea'),
        ('trunc', ' O Lar Montessori se esforça para oferecer'),
    ],
    'como-a-concentracao-se-torna-um-habito-da-crianca': [('del', 'O Lar Montessori desenvolveu um curso')],
    'como-a-inteligencia-usa-os-sentidos-para-se-desenvolver': [('promo', 'o Lar Montessori sintetizou as melhores práticas')],
    'como-admirar-uma-crianca': [('del', 'E se você quiser ficar *muito, muito boa nisso')],
    'como-derrubar-qualquer-muro': [
        ('sub', f'*Eu prometi este email para os alunos da Pós-Graduação do Lar Montessori*[***(veja aqui)***]({PG})*, depois',
         '*Eu prometi este texto para os meus alunos, depois'),
    ],
    'como-falar-para-merecer-a-atencao-das-criancas': [('promo', 'Os cursos virtuais do Lar Montessori')],
    'como-montessori-ensina-as-criancas-a-amarem-a-natureza': [('promo', 'O Lar Montessori tem um curso sobre os incríveis')],
    'compreendendo-montessori-principios-da-infancia': [
        ('re', r'O Lar Montessori tem muitos artigos sobre a adaptação da casa para a criança\..*?contribuição que damos a este movimento\.',
         'A adaptação doméstica para a criança se torna cada vez mais uma tendência.'),
    ],
    'congresso-internacional-de-montessori': [('del', 'O Lar Montessori é apoiador do Congresso')],
    'criamos-criancas-com-valores-invertidos-finalmente': [('promo', 'O Lar Montessori pode ajudar com centenas')],
    'criancas-grandes-dizem-nao': [
        ('del', '**Os assinantes dos Recados do Lar Montessori**'),
        ('del', '**Se você quiser saber mais sobre crianças grandes'),
    ],
    'criancas-jogam-coisas-o-que-fazer-em-seguida': [('trunc', ' Também recomendamos o curso feito aqui no Lar Montessori')],
    'deixe-as-criancas-ensinarem-os-adultos': [
        ('sub', 'Eu entendo; o Lar Montessori começou exatamente por isso. Eu não me sentia',
         'Eu entendo; eu também sentia essa vontade. Mas não me sentia'),
        ('sub', 'Com o tempo (e com mais de 300 textos no Lar Montessori), descobri', 'Com o tempo, descobri'),
    ],
    'desfazer-ajude-a-crianca-a-lidar-com-os-erros': [('del', '*PS: Eu vou deixar o lembrete aqui')],
    'desta-geracao-nao-passa-montessori': [('promo', 'O Lar Montessori só existe porque')],
    'doze-pontos-montessori': [
        ('sub', ' Diferente de textos originais do Lar Montessori, para a publicação deste em outros blogs, uma permissão específica é necessária.', ''),
    ],
    'e-pra-ser-simples': [
        ('sub', ' Um de nossos trabalhos, no Lar Montessori, é permitir que você compreenda Montessori, então, aqui vai', ' Aqui vai'),
        ('sub', ', aqui no Lar Montessori e em outras páginas.', '.'),
    ],
    'e-se-a-gente-nao-reclamasse-das-criancas-nunca': [
        ('sub', 'de uma mãe que é aluna do Lar Montessori:', 'de uma mãe:'),
        ('sub', 'mãe e aluna do Lar Montessori)', 'mãe)'),
    ],
    'educacao-comecar-nascimento-montessori': [
        ('promo', 'Aqui no Lar Montessori, acompanhamos milhares'),
        ('sub', 'é uma escolha de tradução do Lar Montessori.', 'é uma escolha de tradução.'),
    ],
    'educar-para-paz-mundo-em-guerra': [('del', 'Neste final de semana, estamos filmando')],
    'ei-se-perdoa-voce-erra-por-um-motivo': [
        ('sub', ' Eu e o Lar Montessori sempre estaremos aqui para você.', ''),
        ('del', 'Em quase todas as mensagens do Lar Montessori'),
    ],
    'especial-vicio-em-telas': [('sub', ', já conhecia o Lar Montessori, e fez perguntas', ', fez perguntas')],
    'eu-sei-que-nao-e-justo-e-mesmo-assim': [
        ('re', r'Neste Dia das Mães – que eu quase nunca celebro aqui no Lar Montessori.*?– Neste Dia das Mães', 'Neste Dia das Mães'),
        ('del', 'E eu espero, de coração, que o Lar Montessori'),
    ],
    'faca-montessori-sem-fazer-nada': [('del', 'Este texto foi enviado por e-mail para todos os assinantes')],
    'higiene-e-independencia': [('del', 'Este artigo tem menos figuras do que deveria')],
    'homenagem-de-aniversario-2-2': [('sub', 'escreveu para o Lar Montessori um texto', 'escreveu um texto')],
    'imaginacao-e-fantasia-datas-comemorativas': [('sub', 'o objetivo do Lar Montessori é oferecer', 'o objetivo aqui é oferecer')],
    'jeitos-de-fazer-montessori-agora': [('del', 'Você já conhece as Manhãs com Montessori?')],
    'montessori-a-meia-noite-a-jornada-silenciosa-do-adulto': [('trunc', ' Se você quiser se aprofundar na educação que oferece')],
    'montessori-e-concentracao': [
        ('sub', 'Se você acompanha o Lar Montessori há algum tempo, sabe da relação profunda que existe entre',
         'Existe uma relação profunda entre'),
        ('sub', ' O Lar Montessori quase não faz isso. Mas dessa vez é importante.', ''),
    ],
    'montessori-e-elitismo': [
        ('sub', ' O Lar Montessori e cada vez mais alguns outros blogs e sites trazem', ' Cada vez mais blogs e sites trazem'),
        ('sub', 'No Escola Maria, um braço do Lar Montessori, temos', 'No Escola Maria temos'),
        ('del', '> Além disso, o Lar Montessori disponibiliza bolsas'),
    ],
    'montessori-e-licao-de-casa': [
        ('sub', 'todas as milhares de famílias que leem o Lar Montessori tivessem', 'todas as famílias tivessem'),
        ('sub', 'esse é um assunto longo que deveremos voltar a abordar no Lar Montessori.', 'esse é um assunto longo, que merece ser abordado novamente.'),
    ],
    'montessori-e-o-coronavirus-parte-1-amor-como-forca-universal': [('promo', 'Ficar em casa o tempo todo com as crianças')],
    'montessori-e-o-coronavirus-parte-1-educacao-cosmica': [('promo', 'Ficar em casa o tempo todo com as crianças')],
    'montessori-e-o-coronavirus-parte-3-valorizacao-da-personalidade': [('promo', 'os cursos do Lar Montessori já têm quase 3.000')],
    'montessori-e-pessoas-negras-tres-estudos': [
        ('sub', 'o Lar Montessori se coloca à disposição para contribuir', 'é preciso contribuir'),
    ],
    'montessori-e-porque-nao-precisamos-estimular-criancas': [
        ('sub', 'é vontade do Lar Montessori convencer', 'é nossa vontade convencer'),
        ('sub', ' sua visita ao Lar Montessori é ainda mais bem vinda. Nós queremos você aqui, e sugerimos', ' sugerimos'),
        ('del', 'Conheça o curso do Lar Montessori para adultos'),
    ],
    'montessori-escola-tradicional': [
        ('sub', 'No Lar Montessori, recomendamos o livro', 'Recomendamos o livro'),
        ('sub', 'A sugestão do Lar Montessori é que', 'A sugestão é que'),
        ('sub', 'o Lar Montessori tem um vídeo para cada capítulo', 'há um vídeo para cada capítulo'),
        ('re', r'O Lar Montessori oferece alguns cursos .*?Aproveite tudo\. ', ''),
    ],
    'montessori-nascimento-primeiro-ano': [('promo', 'O Lar Montessori mantém um curso')],
    'montessori-o-que-ler-e-em-que-ordem': [('promo', 'nos reunimos às 8h no Facebook do Lar Montessori')],
    'montessori-vida-espiritual-crianca': [
        ('re', r', por isso este é o nome de um dos cursos do Lar Montessori\.[^\n]*', '.'),
        ('promo_after', 'parece ser um de seus maiores princípios e legados'),
    ],
    'nao-tirem-as-criancas-da-sala-precisamos-falar-delas': [
        ('sub', ', tradução do Lar Montessori para os Princípios do Educador Montessoriano e para o livro Princípios de Montessori para Famílias.', '.'),
    ],
    'nenhuma-forma-de-violencia': [
        ('sub', 'Equilíbrio Natural da Criança aqui no Lar Montessori e no blog', 'Equilíbrio Natural da Criança no blog'),
        ('sub', '**Nós, no Lar Montessori e, acreditamos, no Movimento Montessori do Brasil, não compactuamos',
         '**Nós não compactuamos'),
        ('re', r' No ano de 2015 pretendemos lançar duas páginas virtuais que serão braços do Lar Montessori\..*?A outra será sobre violência e sobre Paz\.', ''),
    ],
    'normalizacao-ii-o-equilibrio-natural-da-crianca': [
        ('sub', 'São assuntos complexos, já abordados no Lar, mas que exigem', 'São assuntos complexos, que exigem'),
        ('sub', 'decidi adotar, no Lar Montessori, o termo', 'decidi adotar o termo'),
        ('sub', 'Se você segue o Lar Montessori há algum tempo, ou se vem criando', 'Se você vem criando'),
        ('sub', ', mas tudo o que publicamos no Lar ajudará com essa parte.', '.'),
    ],
    'nove-limites-da-crianca': [('del', 'O Lar Montessori trabalha há dez anos')],
    'o-buraco-negro-e-as-estrelas-formas-de-disciplina': [('sub', 'Dissemos certa vez no Lar Montessori:', 'Dissemos certa vez:')],
    'o-caminho-dos-pais-pacificos': [('sub', ', e traduzido para o Lar Montessori.', ', em tradução para o português.')],
    'o-cidadao-esquecido': [
        ('sub', 'Aos que desejarem saber a posição política do Lar Montessori, é a que segue:', 'A posição política que defendemos é a que segue:'),
    ],
    'o-descanso-escapa-na-distracao': [('del', '*PS: As inscrições para a Pós-Graduação')],
    'o-livro-pedagogia-cientifica': [('sub', 'há anos eu e o Lar Montessori espalhamos desinformação', 'há anos eu espalho desinformação')],
    'o-melhor-que-podemos-ser-ou-o-nascimento-do-novo-mundo': [
        ('sub', 'que o Lar Montessori teria um texto novo toda semana', 'que escreveria um texto novo toda semana'),
        ('promo', 'O Lar Montessori existe desde 2011'),
    ],
    'o-quarto-montessoriano': [('del', '**O Lar Montessori gostaria de fazer um pedido.')],
    'o-que-e-um-montessoriano': [('promo', 'O Lar Montessori tem cursos que foram feitos')],
    'o-que-o-barulho-faz-com-o-cerebro-das-criancas': [('del', 'Nós, do Lar Montessori, queremos que a convivência')],
    'o-que-realmente-importa': [
        ('sub', 'mas nós já falamos dele no Lar, e há uma profusão', 'mas há uma profusão'),
        ('sub', 'No Lar Montessori nós não pensamos em Home School', 'Aqui não pensamos em Home School'),
    ],
    'o-tres-tipos-de-ordem-que-tornam-as-criancas-tranquilas': [
        ('sub', ' Se não for pedir muito, venha aqui no Lar Montessori contar o que mudou depois que a ordem passou a fazer parte da sua casa!', ''),
    ],
    'onde-estudar-montessori-online': [
        ('sub', 'é uma iniciativa do Lar Montessori com o mesmo propósito', 'é uma iniciativa com o mesmo propósito'),
        ('del', 'comece pelo minicurso do Lar Montessori'),
    ],
    'ordem-em-familia-ii-premios-e-castigos': [('sub', 'a intenção do Lar Montessori não é avaliar', 'a intenção deste texto não é avaliar')],
    'os-encantos-do-real-materiais-de-pareamento': [('del', '*Este é um post patrocinado.')],
    'os-sussurros-do-ambiente': [
        ('sub', 'Em todos os encontros de famílias promovidos pelo Lar Montessori e seus diversos excelentes parceiros, escuto',
         'Em encontros de famílias, escuto'),
    ],
    'para-fazer-montessori-voce-nao-precisa-ser-perfeito': [('sub', 'o que o Lar Montessori diz que', 'o que Montessori diz que')],
    'paz-iii-o-silencio': [
        ('sub', 'autor de um dos textos mais lidos já publicados aqui no Lar Montessori, ', 'autor de '),
        ('sub', ', e que tem tudo a ver com esta série', ', texto que tem tudo a ver com esta série'),
    ],
    'pequenas-acoes-diarias': [('del', 'Após um longo período de repouso, o Lar Montessori')],
    'periodos-sensiveis-chaves-do-desenvolvimento': [
        ('re', r' Nós temos muitos textos sobre isso no Lar Montessori\..*?análise dos períodos sensíveis e de sua importância\.', ''),
    ],
    'periodos-sensiveis-iv-detalhes-e-ordem': [
        ('sub', 'No Lar Montessori evitamos recomendar atividades', 'Evitamos recomendar atividades'),
        ('sub', ' Temos dezenas de textos no Lar Montessori que tangenciam a questão da ordem e sua importância. Assim, aqui fazemos', ' Aqui fazemos'),
    ],
    'periodos-sensiveis-v-musica-e-ritmo': [('sub', 'primeira inserção do Lar Montessori no mundo', 'primeira inserção no mundo')],
    'por-amor-e-nao-por-medo': [('promo', 'venha ver o novo curso do Lar Montessori')],
    'porque-devemos-deixar-as-criancas-tocarem-em-tudo': [('del', '*No Lar Montessori, acreditamos que compreender')],
    'porque-filho-mais-brinquedo-montessori': [('promo', 'venha ver o novo curso do Lar Montessori')],
    'presente-de-montessori-maes': [
        ('del', 'o Lar Montessori traz o curso'),
        ('del', '## [Ver o curso agora]'),
    ],
    'programa-de-5-semanas-para-montessori-em-casa-gratuito': [
        ('sub', 'um texto inédito do Lar Montessori:', 'um texto inédito:'),
        ('sub', 'que estão com a gente no Lar Montessori.', 'que estão com a gente.'),
    ],
    'publicidade-infantil-um-mapa-perverso': [
        ('sub', 'O Lar Montessori, concordando com Donna Goertz', 'Concordando com Donna Goertz'),
        ('sub', '), é contra a televisão', '), somos contra a televisão'),
        ('sub', 'Assim, o Lar Montessori coloca-se, aqui, contra', 'Assim, colocamo-nos, aqui, contra'),
        ('sub', 'segundo argumento do Lar Montessori contra', 'segundo argumento contra'),
        ('sub', 'o Lar Montessori decidiu por chamar de', 'decidimos chamar de'),
        ('sub', 'Novamente, o Lar Montessori pede encarecidamente', 'Novamente, pedimos encarecidamente'),
    ],
    'quando-a-crianca-faz-silencio': [('del', '*PS: Se você quiser aprender a ouvir')],
    'quando-o-adulto-falha': [('sub', '[treze dicas do Lar Montessori para famílias montessorianas]', '[treze dicas para famílias montessorianas]')],
    'quando-o-brinquedo-impede-a-crianca-de-brincar': [
        ('promo', 'aqui no Lar Montessori, uma nova aula'),
        ('sub', 'Em [outros textos do Lar Montessori](', 'Em [outros textos]('),
    ],
    'quatro-minutos-para-salvar-o-dia': [
        ('del', '*Antes de eu terminar este recado'),
        ('del', '*Eu desenvolvi este projeto por três anos'),
        ('del', 'PS: Se você deixou passar, a página da Pós-Graduação'),
    ],
    'quer-ler-montessori-comece-aqui': [
        ('sub', f' e uma das professoras da [**Pós-Graduação do Lar Montessori**]({PG}),', ','),
    ],
    'respeitar-o-ritmo-da-crianca-a-licao-de-michelangelo': [
        ('del', 'venha ver o novo curso do Lar Montessori'),
        ('del', '*Parabéns pelo curso, por em apenas duas horas'),
        ('del', '*Esse curso foi transformador'),
    ],
    'rotulos-montessori-criancas': [('del', 'o Lar Montessori preparou um curso')],
    'seguranca-no-ambiente-preparado': [
        ('re', r', sobre os quais conversamos constantemente aqui no Lar Montessori \(veja textos.*?\)\)', '.'),
    ],
    'seja-como-este-rei': [('del', '*PS: Você já visitou a página da')],
    'seu-celular-nao-e-uma-caneca': [('trunc', '[Você pode entender mais sobre isso na live')],
    'sobre-brinquedos-que-brincam-sozinhos': [
        ('re', r'Para ajudar você, o Lar Montessori vai lançar.*?Como forma de teste desta nova prática, abaixo', 'Abaixo'),
    ],
    'sobre-os-principios-do-educador-montessoriano': [
        ('sub', 'Há algum tempo, o Lar Montessori traduziu e publicou', 'Há algum tempo, traduzimos e publicamos'),
        ('sub', 'trechos da tradução do Lar Montessori e mais', 'trechos da nossa tradução e mais'),
        ('re', r'Talvez você já conheça a \[missão\].*?É em respeito a essa missão que retornamos aqui, para publicar', 'Por isso, retornamos aqui para publicar'),
    ],
    'sono-montessori': [('trunc', ' O Lar Montessori se dedica a ajudar adultos')],
    'suficiente': [
        ('sub', 'Já dissemos no Lar Montessori que', 'Já dissemos que'),
        ('sub', 'Brené Brown é uma pesquisadora que aparece de vez em quando nos textos do Lar Montessori, e não é sem mérito.',
         'Brené Brown é uma pesquisadora que merece destaque.'),
    ],
    'trabalho-e-brincadeira-ii': [
        ('sub', 'O Lar Montessori evita listas de atividades, porque deseja que', 'Evitamos listas de atividades, porque desejamos que'),
    ],
    'um-mundo-novo-cheio-de-milagres': [('del', 'O Lar Montessori é uma referência neste caminho')],
    'vai-ficar-tudo-bem-dessa-vez-tambem': [('del', 'Essa semana foi mais parada no Lar Montessori')],
    'vamos-respeitar-os-erros-das-criancas': [('del', '#gotinhasmontessori #larmontessori')],
    'vislumbres-brilhantes-cheios-de-esperanca': [('del', 'enquanto estruturava a Pós-Graduação em Montessori do Lar Montessori')],
    'voce-e-um-aliado-das-criancas': [
        ('sub', 'O Podcast do Lar Montessori faz muito sucesso entre os pequenos, mesmo sendo feito para adultos. Isso acontece porque elas escutam',
         'Um podcast feito para adultos pode fazer muito sucesso entre os pequenos, porque elas escutam'),
        ('del', 'o curso mais completo do Lar Montessori'),
    ],
    'voce-precisa-de-um-colar-montessoriano': [('del', 'Você pode assistir à segunda aula')],
    # posts that refer to the site only as "o Lar"
    'facebook-montessori-para-mamaes': [('sub', 'Além dos artigos aqui do Lar, você pode participar', 'Você pode participar')],
    'individualidade-e-socializacao-na-sala-montessoriana': [('re', r' ?É sempre um prazer quando podemos trazer Montessori para nosso Lar\.', '')],
    'normalizacao-i-o-respeito-pela-crianca': [
        ('sub', 'Seja bem vindo, e antes de ler este texto', 'Antes de ler este texto'),
        ('sub', '*, disponível aqui no Lar!', '*.'),
    ],
    'o-tempo-da-crianca': [('sub', 'Inúmeras vezes dissemos no Lar:', 'Inúmeras vezes dissemos:')],
    'ordem-em-familia-iii-rotina-e-ritual': [('sub', 'Já escrevemos aqui no Lar o quando', 'Já escrevemos o quanto')],
    'periodos-sensiveis-ii-mao-e-movimento': [('sub', 'Posteriormente, o Lar abordará o tema', 'Posteriormente, abordaremos o tema')],
}

# Posts whose whole body is an advertisement: go to blog/nocontent
FORCE_NOCONTENT = {
    # whole post was an advertisement
    'voce-vive-em-paz-com-as-criancas', 'os-encantos-do-real-materiais-de-pareamento',
    # after removing ads/site notes, no pedagogical content worth keeping
    'facebook-montessori-para-mamaes',            # invite to a Facebook group
    'convite-2',                                  # invite to a 2011 lecture
    'sorteio',                                    # giveaway poll
    'circulo-de-estudos-em-montessori',           # invite to a study group
    'especial-vicio-em-telas',                    # pointer to an interview video
    'seu-celular-nao-e-uma-caneca',               # teaser for a workshop, 5 sentences left
    'instantes-que-mudam-tudo-qual-o-seu',        # teaser for a course (biographical hook only)
    'homenagem-de-aniversario-2-2',               # reproduces a reader's birthday note
    'a-mae-os-filhos-dizem-obrigado',             # news: Google doodle
    'congresso-internacional-de-montessori',      # 2017 event announcement
    'dois-bilhoes-para-montessori',               # news: Bezos donation
    'minha-visita-a-american-montessori-society', # travel diary
    'o-incrivel-center-for-montessori-education', # travel diary
    'o-5o-encontro-de-educadores-montessorianos', # event report
    'a-maria-montessori-2', 'a-um-adulto-montessori',  # tribute poems
}

# Removal of advertising (courses, workshops, post-graduation, books, testimonials, orphan call-to-action headings).
# Applied after EDITS, same op syntax.
from core import d as _d, p as _p

PROMO = {
    'a-alfabetizacao-do-silencio': _p('Venha participar do curso online'),
    'a-crianca-descansa-no-esforco': _d('dos incríveis poderes da criança'),
    'a-crianca-disse-nao-e-agora': _d('é um caminho para oferecer a melhor educação possível'),
    'a-crianca-independente-e-mais-feliz': _d('**Venha conhecer a criança com a gente!**'),
    'a-crianca-que-nao-podemos-ver': _p('Aprenda e se transforme com nosso curso online'),
    'a-melhor-maneira-de-amar-uma-crianca': _d('Este é um trecho do meu livrinho', 'baixe ou compre aqui', 'Se você já leu, me conta'),
    'a-salvacao-vira-da-crianca': _d('**Conheça os fundamentos do Método Montessori**'),
    'a-transformacao-do-adulto-em-adulto-preparado': _d('**Venha se transformar conosco!**'),
    'ajoelhar-criancas-montessori': _p('Quer descobrir mais sobre os caminhos para viver bem'),
    'ano-novo-natal-montessori': _p('Eu quero que seu próximo com seus filhos'),
    'apertar-e-bom-mas-nao-e-sempre-melhor': _d('Separei esta história para te contar na aula gratuita'),
    'as-5-vantagens-de-uma-horta-para-o-seu-filho': _d('**Descubra o que mais o Montessori pode fazer'),
    'as-criancas-obedecem-quem-elas-admiram': _p('eu montei um curso com algumas das descobertas'),
    'as-criancas-precisam-de-adultos-corajosos': _d('**Você aceita ajuda para ser o adulto', 'a melhor ajuda que eu posso te dar é uma aula') + [
        ('sub', 'precisa desesperadamente do Poder da Criança.', 'precisa desesperadamente do poder da criança.')],
    'as-criancas-precisam-dos-estimulos-mais-delicados': _p('Eu criei um curso, com as descobertas mais belas'),
    'bater-nao-funciona-montessori': _d('**Quer aprender a fazer diferente?**'),
    'ciclo-de-trabalho-montessori': _p('Criei um curso para famílias que também acreditam nisso'),
    'cinco-coisas-boas-ou-como-amar-as-criancas-quando-e-dificil': _d('**Transforme sua forma de viver com as crianças:**'),
    'comece-pela-torneira': _d('nosso programa mais longo e profundo'),
    'como-agir-em-ambientes-nao-preparados-e-na-casa-dos-avos': _d('Na última semana, tivemos o workshop', 'Esta resposta é um pouquinho do que você vai encontrar'),
    'como-ajudar-seu-filho-a-se-comportar-bem-em-publico': _p('Quer descobrir mais sobre os caminhos para viver bem'),
    'como-criar-um-refugio-seguro-para-as-criancas-em-casa-na-epoca-da-guerra': [
        ('trunc', ' Nós podemos ir mais fundo'),
        ('del', 'Venha semear um futuro de paz.'), ('del', 'Inscreva-se em **O Poder da Criança**'),
    ],
    'como-despertar-e-manter-o-interesse-da-crianca-por-todas-as-coisas': [
        ('trunc', ' Se quiser começar mais devagar'), ('promo_after', 'veja o livro de Maria Montessori, *Para Educar o Potencial Humano*'),
    ],
    'como-educar-sem-premios-ou-castigos': _p('Nossas relações com nossas crianças podem ser mais pacíficas.'),
    'como-estar-presente-para-nossos-filhos': _d('**Gostou? Vem ver mais!**'),
    'como-eu-faria-um-quarto-montessori-comecando-do-jeito-certo': _d('tivemos uma série de aulas sobre Crianças Grandes'),
    'como-montessori-ajuda-seu-filho-a-se-acalmar-de-verdade': _d('**Montessori pode mudar a sua vida, descubra mais:**'),
    'como-o-comportamento-dos-pais-influencia-a-personalidade-dos-filhos': _p('Eu criei um curso com algumas das descobertas mais transformadoras'),
    'como-parar-de-gritar-com-criancas': _d('a primeira aula do curso gratuito') + [
        ('sub', 'Assim como acontece na cena abaixo, o grito vem depois', 'O grito vem depois')],
    'como-ter-a-admiracao-de-uma-crianca-de-6-a-8-anos': _d('Na última semana, tivemos o workshop', 'A dúvida de Patrícia tem muito a ver com as três aulas'),
    'corrigir-nao-ensina-ensinar-ensina': _p('Nós montamos um curso pensando na sua relação'),
    'corrija-o-ambiente-nao-a-crianca': _d('**Conheça mais sobre a preparação do ambiente'),
    'crianca-mentira-verdade-montessori': _d('**Você gostou e quer descobrir mais?**'),
    'criancas-mandam-em-adultos-quando-nao-mandam-em-si-mesmas': _p('montamos um curso que acompanha você'),
    'criancas-no-chao-movimento-desenvolvimento-infantil-montessori': _d('**Veja mais sobre o desenvolvimento da criança'),
    'criancas-obedientes-nao-ficam-quietas': _d('**Descubra mais Montessori:**'),
    'deixe-as-criancas-ensinarem-os-adultos': _d('precisa conhecer O Poder da Criança'),
    'desenvolvendo-habilidades-na-cozinha': _d('**Criança cortando banana e despejando:**', '**Criança despejando:**', '**Criança ajudando na cozinha:**',
                                               '**Lição sobre despejar:**', '**Lição sobre o uso da colher:**', '**Criança cortando banana:**'),
    'desfazer-ajude-a-crianca-a-lidar-com-os-erros': _d('*PS 2: Este livrinho não está em pré-venda'),
    'dignidade-um-novo-presente-para-as-criancas': _p('criei o curso *Montessori: Viver em Paz com Crianças*'),
    'dois-bilhoes-para-montessori': _d('**Descubra mais sobre Montessori:**'),
    'doze-pontos-montessori': _d('**Aprenda muito mais sobre o método Montessori'),
    'e-pelo-bem-da-crianca-mesmo': _p('Criei um curso para famílias que também acreditam nisso'),
    'e-se-a-gente-nao-reclamasse-das-criancas-nunca': _d('Às vezes, fica difícil tomar todas as decisões', '> Eu sou mãe solo', 'Eu adoro este depoimento'),
    'efeitos-de-montessori-no-longo-prazo': [
        ('del', 'vamos começar um curso que é profundo demais'), ('del', 'você precisa se inscrever (agora)'),
        ('del', '[**https://larmontessori.com/montessori-para-todas-as-criancas/**]'),
        ('sub', 'Te espero lá, para a gente mudar o futuro,\n', ''),
        ('sub', '(Agora eu sei responder, então leia esta mensagem até o final!)', ''),
    ],
    'errar-e-parte-disso-tudo': [('re', r' Se você quiser conhecer mais poderes das crianças, \[assista nossa aula gratuita, aqui\]\([^)]*\)\.', '')],
    'escolhas-desenvolvimento-montessori': _p('Talvez um de nossos cursos seja o que você está buscando'),
    'faca-montessori-sem-fazer-nada': _d('você vai gostar de conhecer'),
    'ferias-boas-dao-trabalho-para-a-crianca': _p('Se você já está matriculada em nosso curso'),
    'instantes-que-mudam-tudo-qual-o-seu': _d('Na semana que vem, vamos ter um instante assim', 'O curso Montessori para Todas as Crianças será gratuito', '**O curso começa dia 05/11'),
    'libertacao-crianca-montessori': _d('**Aprenda muito mais sobre como Montessori pode ajudar'),
    'material-montessori-em-casa': _d('**Quer aprender mais sobre o material'),
    'me-ensina-a-fazer-sozinho-montessori': _d('**Vamos enxergar a criança juntos?**'),
    'mente-esponja-mente-absorvente': _d('**Quer entender melhor a mente da criança?**'),
    'meu-corpo-minhas-regras-diz-a-crianca': _d('**Conheça as ideias de Montessori:**'),
    'montessori-a-meia-noite-a-jornada-silenciosa-do-adulto': _d('### Caminhando juntos: O Poder da Criança'),
    'montessori-e-elitismo': _d('**Aprenda e colabore:**'),
    'montessori-e-licao-de-casa': _p('O método Montessori abre caminho para uma convivência melhor'),
    'montessori-e-o-movimento-na-formacao-da-personalidade': _p('Quando entendi a importância do movimento para o que Montessori chamava'),
    'montessori-e-uma-bolha-sim': _d('estamos com as inscrições abertas para o curso de Formação'),
    'montessori-escola-tradicional': _p('Conheça as manhãs com Montessori') + [
        ('sub', ', e nosso [minicurso online de Introdução ao Método Montessori](https://larmontessori.com/minicurso-de-introducao-a-montessori-2/)', '')],
    'montessori-o-que-ler-e-em-que-ordem': [
        ('sub', ' Eu cheguei a montar [um curso inteiro](https://larmontessori.com/paz-montessori/) só com esse pedacinho do livro, de tanto que ele ensina.', '')],
    'montessori-explica-porque-criancas-desobedecem': _p('Os adultos nem sempre entendem o que acontece dentro das crianças'),
    'montessori-ficar-junto': _p('Criamos um curso para ajudar isso a acontecer'),
    'montessori-para-adultos-exaustos-e-impacientes': _d('Faz doze anos que eu converso com mães e pais', 'Desse trabalho nasceu **[O Poder da Criança]'),
    'montessori-uma-forma-de-fe': _d('o melhor lugar para você é [***O Poder da Criança***]'),
    'nao-fazer-montessori-em-casa': _p('Conheça o Minicurso de Introdução a Montessori'),
    'nao-interrompa-a-crianca-que-se-concentra': _p('são alguns dos temas de nosso novo curso'),
    'natal-sem-noel-uma-perspectiva-a-favor-da-imaginacao': _p('eu montei um curso com tudo o q'),
    'nem-toda-brincadeira-precisa-ensinar': _d('**Quer descobrir mais?**'),
    'o-buraco-negro-e-as-estrelas-formas-de-disciplina': _d('**Gostou e quer conhecer mais?**'),
    'o-caminho-dos-pais-pacificos': _d('**Viva um novo caminho:**'),
    'o-caminho-para-ter-mais-paciencia-com-as-criancas': _p('ter um pouco de ajuda para desenvolver seria bom?'),
    'o-controle-de-erro-no-metodo-montessori': _d('Metade das vagas para o Programa de Estudos'),
    'o-enorme-poder-das-criancas': _p('Maria Montessori descobriu como podemos transformar nossa relação com as crianças, e entendeu também'),
    'o-jeito-certo-de-errar-com-nossos-filhos': _p('Criei um curso para famílias que também acreditam nisso'),
    'o-menino-que-nao-sabia-achar-a-boca': _d('assista à aula gratuita do curso'),
    'o-milagre-da-concentracao': _p('nós desenvolvemos um curso que sintetiza'),
    'o-nome-secreto-da-birra': _p('eu montei um curso que traz as descobertas'),
    'o-que-acontece-se-voce-esperar': _d('abrimos as matrículas para a', '**São doze módulos com algumas das maiores autoridades', '*PS1: Se você se inscrever hoje'),
    'o-trabalho-da-crianca-e-o-nosso': _d('estamos com inscrições abertas para o curso sobre'),
    'o-tres-tipos-de-ordem-que-tornam-as-criancas-tranquilas': _d('A ordem e outros temas essenciais para a tranquilidade'),
    'oito-atitudes-para-viver-montessori-em-casa-hoje': _p('**existe mais um passo que você pode dar**'),
    'oito-principios-para-uma-educacao-silenciosa': _p('eu criei o curso *Montessori: Viver em Paz com Crianças*'),
    'os-primeiros-tres-anos-sao-os-mais-importantes-da-vida-do-seu-filho': _d('**Conheça o mais importante primeiro**'),
    'para-fazer-montessori-voce-nao-precisa-ser-perfeito': _p('Fazer Montessori é mais fácil quando podemos contar'),
    'periodos-sensiveis-chaves-do-desenvolvimento': [('sub', '. E o curso que mencionamos é este aqui:', '.')],
    'periodos-sensiveis-montessori': _p('inscreva-se em nosso curso online'),
    'por-que-erramos-com-as-criancas-preconceitos-e-distracoes': _d('**Venha comigo para [O Poder da Criança]'),
    'porque-criancas-dizem-nao': _p('Às vezes é difícil entender as crianças. Mas não precisa ser assim.'),
    'porque-criancas-leem-e-porque-pulam-paginas': _d('Você já conhece o Curso de Introdução ao Método Montessori?') + _p('explore nosso Minicurso Online'),
    'porque-devemos-caminhar-com-nossos-filhos-todos-os-dias': _p('conheça nosso novo curso'),
    'porque-nao-pensar-no-desenvolvimento-do-seu-filho': _d('**Entenda o desenvolvimento da criança, para não pensar nele:**'),
    'precisamos-deixar-as-criancas-fazerem-dez-vezes-a-mesma-coisa': _p('estruturei um curso com as mais fascinantes'),
    'preparacao-indireta-montessori': _d('**Montessori pode tornar a vida melhor. Conheça:**'),
    'quando-nossos-filhos-sabem-mais-do-que-nos': _d('Você gostou e quer conhecer mais?'),
    'quer-ler-montessori-comece-aqui': _d('## E agora? Qual o próximo passo?', 'O seu próximo passo é uma escolha sua', 'Com aulas semanais, leituras originais', 'Clique aqui para conhecer mais e se inscrever'),
    'seu-celular-nao-e-uma-caneca': _d('eu tenho um convite a te fazer', 'Venha para o Workshop', 'Você pode ver o cronograma e se inscrever'),
    'seu-cerebro-esconde-seu-filho-de-voce-montessori': _d('**Veja quem é a criança que Montessori descobriu.**'),
    'sobre-brinquedos-que-brincam-sozinhos': _d('**Faça boas escolhas para as crianças:**'),
    'sobre-criancas-que-querem-demais': _d('venha para O Poder da Criança'),
    'sobre-montessori-e-nao-ajudar-criancas': _d('**Venha descobrir Montessori!**'),
    'socializacao-montessori': _d('conheça nosso curso:'),
    'sono-montessori': [('sub', ' de um pai que participou do curso *[Viver em Paz com Crianças](https://larmontessori.com/paz-montessori/)*:', ' de um pai:')],
    'suficiente': _d('**Vem ser suficiente com a gente?**'),
    'telas-tres-erros-bobos-para-evitar': [
        ('re', r'Estamos no finzinho da nossa quinzena sobre telas, afinal, o \[curso[^\n]*?começa daqui a pouco\. Mas antes, existem', 'Existem'),
        ('del', 'Claro existe um **Erro 4.**'), ('del', 'O Erro 4 é não se inscrever'),
        ('del', 'Se você já se inscreveu, parabéns!'), ('del', 'O link de inscrição é este aqui'),
    ],
    'tirar-seu-filho-da-tela-e-dificil-faca-isso': [
        ('sub', ' em aulas do nosso Workshop Gratuito sobre Telas:', ':'),
        ('del', 'Isso é só um pedacinho da minha estrutura geral'), ('del', 'Faz meses que estou desenvolvendo o [curso'),
        ('del', 'As inscrições para o nosso curso vão até'), ('del', '[https://larmontessori.com/curso-telas-na-infancia-e-adolescencia/]'),
        ('del', 'Até lá!'),
    ],
    'todas-as-escolas-doutrinam-criancas': _d('está com inscrições abertas – São mais de 240h'),
    'trabalho-montessori': _p('Criei um curso para famílias que também acreditam nisso'),
    'tres-caminhos-adolescentes-realizados-montessori': _d('**Entenda as crianças e adolescentes de sua vida**'),
    'um-caminho-montessori-para-uma-vida-correta': _d('foram transformadas em um pequeno curso online'),
    'um-instante-de-liberdade-para-voce': _d('meu próximo passo seria [O Poder da Criança]'),
    'vidro-e-perigoso-mas-antonia-pediu': [('re', r' Venha para\*\*\[\*\*O Poder da Criança[^\n]*', '**')],
    'voce-precisa-de-um-colar-montessoriano': _d('que nós estudamos na segunda aula do curso'),
    'a-forca-dos-pequenos-como-criancas-constroem-adultos': [('trunc', ' Se você quiser dar mais um passo nessa direção')],
    'educacao-para-a-vida': _d('## Quer saber como é uma educação para a vida?', '## [Faça nosso minicurso ainda hoje!]'),
    'minha-cidade-nao-tem-uma-escola-montessori-o-que-eu-faco': _d('Veja nosso minicurso:'),
    'erro-liberdade-e-harmonia': _d('**Descubra mais Montessori:**'),
    'o-tempo-da-crianca': _d('Gostou deste texto e quer descobrir mais?'),
    # nocontent posts
    'como-colocar-limites-para-as-criancas-video-larmontessoriresponde': _p('eu montei um curso que concentra'),
    'criancas-precisam-dividir': _d('O Lar Montessori tem um curso especialmente criado'),
    'porque-criancas-nao-fazem-birra-video': _d('estruturei um curso com os melhores caminhos'),
    'preparar-casa-montessori': _p('O Lar Montessori tem um minicurso sobre os principais aspectos'),
    'montessori-e-como-escolher-brinquedos-video-larmontessoriresponde': _d('**Entenda as bases do pensamento montessoriano**'),
    'a-risada-da-esperanca': _d('*PS1: Amanhã teremos mais um recado sobre esperança'),
    # leftover notes to readers / solicitations, removed in the pedagogical review
    '16621': _d('**Quebrei seis semanas de silêncio para dizer isso.**'),
    'um-chao-para-os-seus-pes': _d('**Tenho conversado com muitas famílias', 'Eu quero ajudar, mas preciso entender', 'Escreve para mim?',
                                   '**Cada uma das respostas vai me permitir', 'Eu não prometo resposta', 'Mas eu prometo imprimir todas'),
    'carta-do-building-the-pink-tower': _d('Junte-se a nós neste movimento.', '*Os vídeos do Building the Pink Tower', '*Trailer no Vimeo:',
                                           '*Trailer no YouTube:', '*Um olhar sobre uma sala Montessori:'),
    'o-caminho-de-mozart': _d('**Estou montando um projetinho', 'Pensado para que você saia desse lugar de culpa',
                              'Nos próximos dias você vai saber mais') + [('re', r'\n\nSabe…(?=\n\n|$)', '')],
    'comemoracoes-de-final-de-ano-a-noite-de-hoje': _d('Aos nossos leitores mais assíduos', 'Espero que as dicas, curtas'),
}
