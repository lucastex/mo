"""Per-site, per-post decisions for blogs_br.py (op syntax in core.apply_ops).

NO_CONTENT  items without pedagogical content worth keeping (discarded), with the reason
EDITS       remove references to the source blog/school/store/authors and to "this text/post"
"""
from core import d, p

NO_CONTENT = {
    'lega': {
        # institutional description of the school's own classes (group sizes, staff, extra classes)
        'como-e-o-dia-a-dia-da-turma-infantile',
        'como-e-o-dia-a-dia-na-turma-nido',
    },
    'escola-montessori': {
        'ex-aluna-comemora-aprovacao-em-medicina-na-unb',            # school news
        'feira-de-ciencias-2025-a-ciencia-responde',                   # school event report
        'tradicao-e-tecnologia-em-pauta-confira-a-entrevista-que-a-escola-concedeu-ao-correio-braziliense',  # press
    },
    'crianças-independentes': {
        'maternidade-e-puericultura-artigos-mais-usados',  # product reviews
        'dicas-para-o-bebé-dormir-melhor-1',               # tips told through the author's own baby routine, product placement
        'o-primeiro-mês', 'o-segundo-mês', 'o-terceiro-mês', 'o-quarto-e-o-quinto-mês',  # personal baby diary
    },
    'montessori-brasil': {
        # institutional pages of the association that runs the site, team bios, events, visits
        'abem-em-foco', 'equipe-de-profissionais-abem', 'abem-presente-bom-sucesso-escola-montessoriana',
        'projeto-abem-presente', 'inscrições-abertas-encontro-montessori-2024-nascer-crescer-viver',
        'pós-graduação-montessori', '150-anos-maria-montessori',
        'essência-montessoriana-aline-miranda', 'essência-montessoriana-giselle-frufrek', 'bárbara-pires',
        'a-pioneira-do-método-montessori-no-brasil', 'pioneiras', 'pioneiras-parte-2', 'pioneiras-parte-3',
        # video posts (text is only the video description / credits)
        'o-buraco-negro-da-educação-infantil-parte-1', 'qual-é-o-modelo-educacional-que-você-acredita-e-defende',
        'esfera-montessori', 'esfera-montessori-ep-02',
        # store/product pages and book/product promotion
        'abem-recomenda', 'eu-queria-e-não-sabia-onde-encontrar-agora-eu-sei', 'montessoriando-hoje-e-amanhã',
        'montessori-essencial-por-dayse-maria-c-canano', 'as-grandes-lições-e-a-coletânea-marie-curiosa',
        'o-encanto-e-a-magia-da-literatura-infantil',
        'desenvolvimento-da-mente-matemática', 'desenvolvimento-social-e-educação-dos-sentidos',
        'linguagemmontessori', 'espaço-tempo-natureza-e-cultura-ciências',
        'espaço-tempo-natureza-e-cultura-geografia-e-história',
        # duplicates of other posts
        'a-inteligência-do-homem-é-produto-do-trabalho-construtivo-da-criança',  # fragment of the 6th speech
        'em-família',                                                           # same text as a-importância-da-família
        'linha-do-tempo-de-maria-montessori',                                   # same as linha-do-tempo-...-1
    },
    'blog-montessori': {
        'referencias-do-metodo-montessoriano',  # the content was a table published as an image
        # profiles/interviews of people, schools and projects, the blog launch and an event report
        '1933',
        '2489',
        'a-experiencia-montessori-de-giulia-zon',
        'adriana-garcia-e-o-projeto-montessori',
        'aldeia-montessori',
        'alexia-nogueira-desafios-prazeres-de-cuidar-de-ravena-com-ajuda-do-metodo-montessori',
        'andrea-adjuto-42-anos-de-metodo-montessori-em-brasilia-df',
        'andressa-rompkovski-da-biologia-ao-metodo-montessori',
        'aprendizado-diario-do-montessori-mona-ramos',
        'arielle-vidal-em-itumbiara-go-um-mergulho-no-universo-de-maria-montessori',
        'audrey-barata-no-para-aprendizado-de-ingles-e-montessori-caminham-juntos',
        'audrey-migliani-arquitetura-e-educacao-infantil-unidas-pelo-metodo-montessori',
        'beatriz-turini-montessori-na-psicopedagogia-atraves-do-instituto-alfabetizar',
        'camaqua-rs-metodo-montessori-na-rede-publica-de-ensino',
        'camila-isola-montessori-como-investimento-pessoal-e-para-a-humanidade',
        'carol-pugliesi-em-recife-montessori-com-o-espaco-criancar',
        'casa-escola-montessori-torres',
        'claudia-maggioni-em-farroupilha-rs-montessori-com-escola-dei-bambini',
        'claudia-soares-montessori-foi-uma-descoberta-e-e-uma-construcao-constante',
        'claudia-soldati-das-aulas-no-interior-de-minas-ao-metodo-montessori-no-rio',
        'colegio-ceu-azul-tatiane-lima',
        'colegio-maria-montessori-angela-perez',
        'colegio-monteiro-lobato-na-pequena-camapua-ms',
        'colegio-shunji-nishimiura-jucelena-angelo',
        'congresso-montessori-dias-de-compartilhar-conhecimento-e-experiencias',
        'cristiane-de-avila-lopes-inspiracoes-montessorianas-na-rede-publica-de-ensino-por-onde-comecar',
        'cristiane-lopes-e-o-exemplo-de-camaqua-rs-montessori-para-todas-as-criancas',
        'danielle-bierhals-e-o-metodo-montessori-para-todos-em-cristal-rs',
        'debora-amorim-e-o-lar-montessoriano',
        'debora-guilhen-trabalhar-com-bebes-e-uma-experiencia-transformadora',
        'debora-maia-gama-vida-profissional-inteira-em-montessori',
        'denize-fazolin-em-vitoria-da-conquista-ba-montessori-no-maria-salome',
        'dia-da-infancia-montessori-marca-presenca-em-paraty',
        'do-sonho-a-realidade-a-historia-do-casal-que-criou-o-espaco-montessori',
        'edileuza-nato-reforco-escolar-e-acompanhamento-com-foco-no-metodo-montessori',
        'eduardo-hensel-juventude-a-frente-de-um-projeto-montessori-em-blumenau-sc',
        'entre-fronteiras-salas-de-aula-e-recomecos-a-educacao-como-caminho',
        'entrevista-com-talita-veronezi-diario-montessori',
        'escola-aguai-montessoriana-ivana-ubeda',
        'felipe-roquette-da-ciencia-para-montessori-na-casa-da-vida',
        'francisca-da-rosa-saber-viver-dentro-e-fora-da-escola',
        'grudinho-de-mae-mirian-nordon',
        'gustavo-barros-a-musica-e-montessori-mergulhei-em-um-outro-mundo-de-ensino',
        'ingrid-soares-material-montessori-desenvolvendo-habilidades',
        'isabela-evangelista-estudar-em-uma-escola-montessoriana-e-um-privilegio',
        'ivone-moreyra-e-a-escola-vivant',
        'jaqueline-santos-duas-decadas-de-montessori-em-salas-de-aula-de-camaqua-rs',
        'jardim-da-joaninha',
        'jardim-dos-descobridores-mariana-freitas',
        'jessica-marise-metodo-montessori-bilingue-em-rio-das-ostras',
        'jieli-brito-em-vitoria-da-conquista-ba-montessori-no-contraturno-escolar-com-o-educa-no-caminho',
        'joao-calmon-montessori-foi-o-passaporte-para-a-geografia',
        'jose-corbacho-com-a-smirna-um-mergulho-no-universo-montessori',
        'juliana-da-rocha-montessori-foi-a-base-para-as-relacoes-internacionais',
        'juliana-liserra-realizando-sonhos-com-o-alora-montessori',
        'lancamento',
        'ligia-moraes-despertar-o-potencial-humano-com-a-montessori-ninho',
        'livia-romeiro-em-campos-rj-metodo-montessori-e-um-poderoso-recurso-no-atendimento-neuropediatrico',
        'liza-souza-montessori-em-casa-e-na-escola',
        'luana-v-pereira-semear-montessori',
        'luciene-santos-e-o-metodo-montessori-em-sua-plenitude',
        'luiza-suarez-montessori-e-a-arqueologia',
        'mara-alves-e-as-experiencias-com-o-podcast-montestory',
        'maria-belen-garcia',
        'mariana-nunes-bambu-montessori',
        'marina-fortes-da-medicina-veterinaria-ao-mergulho-no-universo-montessori',
        'maristela-gemerasca-em-tramandai-rs-inspiracao-vem-de-montessori',
        'marla-simonini-da-infancia-no-montessori-ao-morada-montessori-em-brasilia',
        'montessori-e-juventude-legado-para-o-resto-da-vida',
        'montessori-em-casa-juliana-centola',
        'nara-trindade-educa-fora-da-caixa-com-montessori-na-educacao-infantil',
        'natale-lagatta-mentes-e-ambientes-preparados-atraves-do-metodo-montessori',
        'nathalie-e-ana-lucia-do-estagiuo-ao-sonho-na-escola-miriam-ricci',
        'nina-silva-montessori-na-rede-publica-de-ensino-de-paraty-rj',
        'olivia-colombino-guiando-familias-com-montessori',
        'peteleco-cemp-oficinas-e-atividades-extracurriculares-em-apoio-ao-metodo-montessori',
        'priscilla-castro-paixao-pela-educacao-infantil-revelada-pelo-metodo-montessori',
        'psicologia-montessori-por-flavia-cecilia',
        'rebeca-castro-colchaozinho-no-chao-foi-o-divisor-de-aguas',
        'roberta-righetti-na-aldeia-montessori-servindo-a-evolucao-da-humanidade',
        'rosa-correa-em-belem-pa-montessori-e-orientador-do-contraturno-escolar',
        'rosane-caldas-montessori-e-a-nova-forma-de-olhar-a-educacao',
        'samanta-bassalo-em-sao-paulo-levando-montessori-aonde-ele-precisa-chegar',
        'tamires-pfeil-com-montessori-a-maternidade-em-sua-plenitude',
        'tamires-von-pfeil-montessori-e-o-adulto-realmente-preparado',
        'tatiana-vargas-estudo-e-pratica-montessori-na-calmaria-do-interior-gaucho',
        'vivian-lorenzato-e-santa-ursula-excelencia-em-montessori-no-interior-paulista',
        'vivian-mozas-fazendo-a-diferenca-com-a-semente-montessori',
        'yuri-vasconcellos-arte-educacao-e-o-metodo-montessori',
    },
}

EDITS = {
    'lega': {
        '10-de-setembro-valorizacao-da-vida': [],
        'conexao-da-crianca-com-o-meio-ambiente': [
            ('sub', ' Nossa escola faz um convite especial à comunidade, para que possamos refletir nas causas da degradação e os impactos que nosso estilo de vida causa na natureza.',
             ' É um convite para refletir sobre as causas da degradação e os impactos que nosso estilo de vida causa na natureza.'),
            ('sub', 'As crianças em nossa escola cultivam plantas', 'As crianças cultivam plantas'),
        ] + d('Em nossa escola estamos envolvidos em um projeto', 'Toda a nossa escola está envolvida', 'Vamos restaurar o meio ambiente?'),
        'licoes-simples-de-como-criar-filhos-para-a-vida': d('**Natalie Shimada**'),
        'maio-laranja-vamos-cuidar-das-nossas-criancas': [
            ('sub', 'Como escola, colocamos como essencial a educação como principal meio de prevenção aos abusos e violências sofridos por nossos pequenos.',
             'A educação é o principal meio de prevenção aos abusos e violências sofridos pelas crianças.'),
            ('sub', 'Para estar por dentro e atentos as formas de abuso, estudaremos ao longo desse texto, alguns meios de prevenção ao abuso infantil',
             'Para estar atentos às formas de abuso, é importante conhecer alguns meios de prevenção ao abuso infantil'),
            ('sub', 'Alguns livros que indicamos para conversar', 'Alguns livros para conversar'),
        ],
        'montessori-em-casa-como-organizar-o-ambiente': [
            ('sub', 'Hoje, vamos te inspirar a preparar um espaço Montessori em casa, tornando o ambiente mais acessível e adequado para o aprendizado da sua criança.',
             'Preparar um espaço Montessori em casa torna o ambiente mais acessível e adequado para o aprendizado da criança.'),
        ],
        'o-dia-a-dia-em-uma-escola-montessori-com-turmas-agrupadas': [
            ('sub', 'Nossas turmas são organizadas em turma Nido com crianças de 1 ano a 3 anos, turma Infantile com crianças de 3 a 6 anos e turma Elementare com crianças de 6 a 9 anos.',
             'As turmas costumam reunir crianças de 1 a 3 anos, de 3 a 6 anos e de 6 a 9 anos.'),
        ],
        'o-que-significa-escolher-uma-educacao-montessoriana': d('**Alessandra Ferreira**'),
        'rotina-da-escola-versar-liquido-de-jarra-para-jarra': [
            ('sub', ' Na Escola Lega, conhecemos o processo de desenvolvimento e aprendizagem de todo o método Montessori, e nos dedicamos a explicar para as famílias a filosofia Montessori o conceito de educação integral.', ''),
        ],
    },
    'escola-montessori': {
        'concentracao-na-infancia-por-que-ela-precisa-ser-construida-e-nao-cobrada': [
            ('sub', 'Na Escola Montessori, o desenvolvimento da concentração', 'Na pedagogia Montessori, o desenvolvimento da concentração'),
            ('sub', 'Na Escola Montessori, a concentração é um dos sinais', 'Na pedagogia Montessori, a concentração é um dos sinais'),
        ],
        'educacao-alem-do-conteudo-por-que-a-formacao-integral-importa': [
            ('sub', 'Na Escola Montessori, essa visão aparece na organização dos espaços, nas propostas pedagógicas',
             'Na pedagogia Montessori, essa visão aparece na organização dos espaços, nas propostas pedagógicas'),
        ] + d('Na Escola Montessori, essa visão aparece nas experiências da rotina'),
    },
    'crianças-independentes': {
        '__nao': [('re', r'\nEsta é a postura que sempre tivemos para com o Vicente…[^\n]*', '')],
        'birras': [('re', r'Na formação com o Gabriel Salomão, houve um aspeto que ele frisou muito bem: "podem não levar nada deste curso, excepto uma pequena frase: necessidades ditam comportamentos"\.',
                    'Há uma frase que resume esta ideia: "necessidades ditam comportamentos".')],
        'a-escolha-e-a-selecao-dos-brinquedos': d('Triângulos Pikler:'),
        'elogios-excessivos-aprender-a-elogiar-corretamente': d('(Do site[lamenteemeravigliosa]'),
        'how-to-delete-this-post': [('sub', ' Eis os conselhos do site americano** [**BabyCenter**](https://www.babycenter.com/)**.**', '**')],
        'metodo-waldorf-vs-montessori': [
            ('re', r'(\*\*Quais são os princípios do método Montessori e da pedagogia Waldorf\?) Perguntámos a[^\n]*', r'\1**'),
            ('cut', '### 8. PREPARAÇÃO DO PROFESSOR'), ],
        'quando-tu-te-bastas': [
            ('sub', 'Acredita em mim, Vicente, tu vales', 'Acredita em mim, tu vales')],
    },
    'montessori-brasil': {
        'a-importância-da-família': [],
        'a-saúde-das-emoções-preservando-o-equilíbrio-entre-corpo-mente-e-espírito': d('Uma adaptação do texto de Carlos Cardoso Aveline'),
        'escolas-montessori-são-excepcionalmente-bem-sucedidas-então-por-que-não-há-mais-delas': d('Uma adaptação do texto de Pascal-Emmanuel Gobry'),
        'breve-histórico-a-vida-de-montessori': d('Talita de Almeida'),
        'maria-montessori-sobre-a-escrita': d('Adaptação CPCMM - ABEM', '(Material exclusivo de estudo'),
        'linha-do-tempo-de-maria-montessori-1': d('**Quadros vivos apresentados pelo Centro Educacional'),
        'literatura-montessori': [('cut', 'Nos consulte pelo [e-mail]')] + d('● Psicogramática - Maria Montessori - em tradução'),
        'nas-salas-montessorianas-ofereça-os-livros-paradidáticos': [
            ('re', r'Para atender às solicitações de uma Bibliografia relativa aos paradidáticos, a especialista em Literatura Iva Oliveira disponibilizou a relação abaixo\..*',
             'Segue uma relação de livros paradidáticos:'),
            ('re', r'Em uma conversa com especialista em Educação Montessori, Talita de Almeida, em um de seus encontros online “Prática Montessori II” foi abordada a importância dos livros para as crianças\. Neste momento, a especialista colocou que é de suma importância',
             'É de suma importância')],
        'plano-geometria-matemática-artística': [('cut', '**Geometria II: O estudo das formas geométricas**')] + d('Quando observamos a figura abaixo'),
        'programaspré-escolaresedeescolasinfantis': [('trunc', ' E é nesse ponto'), ('cut', 'Como a ABEM pode colaborar com as crianças?')],
        'um-olhar-pós-contemporâneo-à-educação-infantil-montessori-no-brasil': d(
            'Como Mario M. Montessori desejava que o Brasil', 'Neste longo período, cursos foram criados',
            'Em nível de Brasil, a perspectiva de oferecer', 'A primeira grande colaboração latino-americana',
            'Os contatos com Carolina Gomez', 'necessidades de cada região, evitando grandes deslocamentos.',
            'Foram realizados, nesses últimos três anos, pela ABEM', 'Em 2003, durante 3º Encontro de Líderes',
            'O foco é de cada vez mais aproximar as escolas', 'educativa, cujos valores estão interligados', '## Talita de Almeida') + [
            ('sub', 'Se Maria Montessori pudesse estar aqui presente hoje, neste encontro, provavelmente', 'Se Maria Montessori pudesse estar presente hoje, provavelmente')],
    },
    'blog-montessori': {
        'montessori-e-para-ser-simples': d('nosso texto sobre princípios do método Montessori clique aqui'),
        'por-onde-comecar-a-educacao-dos-sentidos': d('recomendamos a leitura do post a respeito desta temática') + [
            ('re', r', assista ao vídeo para conhecer: <[^>]*>', '.')],
        'tabua-de-pitagoras-montessori': [('sub', ' (na foto)', '')],
        'crianca-precisa-de-brinquedo-a-diferenca-entre-os-brinquedos-e-os-materiais-montessorianos': [
            ('sub', 'Este texto não é uma apologia', 'Não se trata de uma apologia'),
            ('sub', 'Retomemos, portanto, o início deste texto e observemos', 'Retomemos, portanto, o início e observemos')],
        'adultizacao-x-infantilizacao-o-equilibrio-que-podemos-encontrar-no-metodo-montessori': [
            ('sub', 'No entanto, este texto chama a atenção para o fato', 'No entanto, é preciso chamar a atenção para o fato')] + d(
            'Para os montessorianos este texto pode soar como mais do mesmo'),
        'montessori-ultrapassado-entendendo-a-relacao-entre-o-metodo-montessori-a-psicopedagogia-e-a-neurociencia': d(
            'Compartilhe esse texto com alguém'),
        'informacao-ou-conexao-a-educacao-cosmica-em-tempos-de-alta-tecnologia': [
            ('sub', ' (e este texto não é diferente!)', ''), ('sub', ' (e nisso, desejo que este texto seja útil!)', '')],
        'ciclo-de-vida-em-miniatura-montessori': [
            ('sub', 'A Smirna Montessori tem coleções', 'Há coleções'), ('trunc', ' Veja tudo no link')],
        '5-dicas-para-iniciar-em-montessori': [
            ('sub', 'O post poderia acabar aqui, mas se busca por conselhos, não vejo mal em lhes dar.', 'Se busca por conselhos, seguem alguns.')],
        'vida-pratica-como-fazer-em-casa': [
            ('sub', 'não fique triste, essa postagem poderá lhe ajudar a compreender', 'vale compreender')],
        'alfabetarios': [
            ('sub', 'O presente texto visa pormenorizar o uso', 'Vale detalhar o uso'),
            ('sub', ' O post *Explosão da Escrita* traz as primeiras nuances do uso desses materiais, mas há relevância', ' Há relevância'),
        ] + d('consulte nosso post especial a respeito'),
        'importancia-das-5-grandes-licoes': [('sub', ' (temos um post somente sobre ele)', ''), ('sub', ' (confira nosso post sobre essa área)', '')],
        'grandes-numeros': d('Indica-se ainda o post de nosso blog'),
        'periodos-sensiveis': d('indica-se a leitura do nosso post'),
        'ambiente-preparado': [('sub', 'Conforme mencionado em nosso post “Como aplicar o método Montessori em casa?”, o ambiente', 'O ambiente')],
        'mesa-sensorial-uma-ideia-para-ampliacao-de-experimentacoes': d('Confira nosso post sobre a'),
        'tendencias-humanas': d('no post em homenagem aos 150'),
        'gramatica-sob-a-otica-de-maria-montessori': [('sub', ' (confira mais a respeito no post: Educação Cósmica)', '')],
        'montessori-em-casa-trilhando-compreensoes': [('sub', ' (entenda do que se trata na postagem “Educação Cósmica”)', '')],
        'como-aplicar-o-metodo-montessori-em-casa': [
            ('sub', ' (dos quais já falamos mais detalhadamente nesse post aqui)', ''),
            ('sub', '### E no post de hoje vamos te dar dicas de algumas atitudes simples', '### A seguir, algumas atitudes simples')],
        'metodo-montessori': [
            ('sub', ', mas nesse texto você vai encontrar os princípios básicos', ', mas é possível apresentar os princípios básicos'),
            ('trunc', ' Esperamos inspirar você')],
    },
}
