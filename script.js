document.addEventListener("DOMContentLoaded", () => {
    // Base de dados expandida com 10 notícias completas
    const newsData = [
      {
        id: "rede-urbana",
        shortTitle: "Rede e Hierarquia Urbana",
        category: "Geografia Urbana",
        tagColor: "ocean",
        title: "Rede Urbana e Hierarquia das Cidades",
        subtitle: "Como metrópoles globais, cidades médias e centros locais se articulam em fluxos de comando, bens e serviços.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSP7IMcI2uIhpUmPvLoToMv8a9vcfZNuf_VQv_hMR4esOzXEnHE6HGlmpmCfANECCBv7GJ0EFxDVMNPNg0",
        caption: "Conexões metropolitanas e densidade de infraestrutura definem o grau de polarização de cada cidade.",
        meta: "Caderno Urbano · Leitura de 4 min",
        paragraphs: [
          "A rede urbana representa o sistema de cidades interligadas por fluxos contínuos de pessoas, mercadorias, capitais e informações. Nenhuma cidade existe isoladamente: ela depende de corredores logísticos, redes digitais e relações econômicas para abastecer sua população e escoar sua produção.",
          "Dentro dessa rede, estabelece-se uma hierarquia urbana definida pelo poder de influência e pela complexidade dos serviços oferecidos. Enquanto pequenas cidades locais oferecem comércio básico, metrópoles concentram universidades de ponta, hospitais de alta complexidade, sedes financeiras e centros de decisão.",
          "Nas últimas décadas, o avanço das telecomunicações flexibilizou a antiga rigidez hierárquica, permitindo que cidades médias estabeleçam conexões diretas com mercados internacionais sem depender exclusivamente da metrópole regional."
        ],
        roots: [
          "<strong>Teoria dos Lugares Centrais (Christaller):</strong> explica a distribuição espacial das cidades conforme o alcance dos bens e serviços.",
          "<strong>Conurbação e Megalópoles:</strong> integração física de manchas urbanas vizinhas e formação de grandes eixos como Rio–São Paulo ou BosWash.",
          "<strong>Cidades Médias:</strong> polos intermediários estratégicos que desconcentram investimentos e atraem migrantes internos."
        ]
      },
      {
        id: "urbanizacao-mundial",
        shortTitle: "Ritmos da Urbanização",
        category: "Demografia & Espaço",
        tagColor: "forest",
        title: "Ritmos e Contradições da Urbanização Mundial",
        subtitle: "As diferenças históricas entre a transição urbana gradual dos países ricos e o crescimento acelerado no Sul Global.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRn3mQOCgCcdxa_CTsdrW_P1zimWLZmOektY4fN_BexWBeES7MLhITjiSqqL4wXKahS-nZ83aV4AAYKEKc",
        caption: "O crescimento da população urbana transformou profundamente a organização territorial no século XX.",
        meta: "Caderno Demográfico · Leitura de 5 min",
        paragraphs: [
          "Urbanização não significa apenas o aumento absoluto de moradores nas cidades, mas o crescimento proporcional da população urbana em relação à população rural. Esse fenômeno ocorreu em tempos e ritmos muito distintos ao redor do planeta.",
          "Nos países de industrialização clássica, como Reino Unido e França, a urbanização acompanhou gradualmente a Revolução Industrial ao longo dos séculos XVIII e XIX, permitindo maior absorção de mão de obra e planejamento gradual de infraestrutura.",
          "Já nos países subdesenvolvidos ou emergentes, o processo foi tardio e extremamente veloz a partir de meados do século XX. Impulsionado pelo êxodo rural intenso e pela mecanização do campo, gerou metrópoles inchadas, déficit habitacional e forte segregação socioespacial."
        ],
        roots: [
          "<strong>Macrocefalia Urbana:</strong> concentração desproporcional de população e serviços em poucas metrópoles nacionais.",
          "<strong>Segregação Socioespacial:</strong> divisão do espaço urbano entre áreas dotadas de infraestrutura e periferias precarizadas.",
          "<strong>Hipertrofia do Setor Terciário:</strong> expansão rápida do comércio e dos serviços, muitas vezes marcados pela informalidade."
        ]
      },
      {
        id: "tipos-cidades",
        shortTitle: "Tipos de Cidades",
        category: "Planejamento & Função",
        tagColor: "earth",
        title: "Classificações e Funções: Os Diferentes Tipos de Cidades",
        subtitle: "De centros financeiros globais e tecnopolos a cidades portuárias, históricas e planejadas pelo Estado.",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTw02SSgi91NiygqBaaT3Nlg16_UgPDvXPEEUSOzCx8xlE7MeJkvTLZ9NStSD58nDk-w85CPJTdGTSBMBQ",
        caption: "A função predominante de uma cidade molda sua paisagem, sua economia e seu cotidiano.",
        meta: "Caderno Urbano · Leitura de 4 min",
        paragraphs: [
          "As cidades podem ser classificadas de acordo com sua função econômica predominante, sua origem histórica ou seu papel na economia internacional. Embora grandes centros acumulem múltiplas funções, geralmente há uma vocação que estrutura sua dinâmica.",
          "No topo da economia contemporânea estão as cidades globais, como Nova York, Londres, Tóquio e São Paulo. Elas funcionam como nós estratégicos do capitalismo financeiro, sediando bolsas de valores, corporações transnacionais e centros de inovação.",
          "Outras cidades destacam-se por especializações específicas: tecnopolos ligados à pesquisa universitária (como Campinas ou Vale do Silício), cidades portuárias essenciais ao comércio exterior, centros religiosos e capitais planejadas como Brasília."
        ],
        roots: [
          "<strong>Cidades Globais (Alfa, Beta, Gama):</strong> classificadas pelo grau de conectividade financeira, aérea e informacional.",
          "<strong>Tecnopolos:</strong> áreas que integram universidades, centros de P&D e indústrias de alta tecnologia.",
          "<strong>Cidades Espontâneas vs. Planejadas:</strong> contraste entre núcleos de crescimento orgânico e projetos urbanísticos pré-definidos."
        ]
      },
      {
        id: "processos-migratorios",
        shortTitle: "Processos Migratórios",
        category: "População & Geopolítica",
        tagColor: "ocean",
        title: "Migrações: Fatores de Repulsão, Atração e Geopolítica",
        subtitle: "Os deslocamentos internos e internacionais impulsionados por crises econômicas, conflitos e mudanças climáticas.",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTw02SSgi91NiygqBaaT3Nlg16_UgPDvXPEEUSOzCx8xlE7MeJkvTLZ9NStSD58nDk-w85CPJTdGTSBMBQ",
        caption: "Fluxos humanos redesenham fronteiras culturais e desafiam políticas migratórias contemporâneas.",
        meta: "Caderno População · Leitura de 5 min",
        paragraphs: [
          "Os processos migratórios correspondem ao deslocamento espacial de populações, seja de forma definitiva ou temporária. Eles resultam do equilíbrio entre fatores de repulsão na origem — como desemprego, guerras e desastres — e fatores de atração no destino.",
          "Na escala nacional, destacam-se o êxodo rural, as migrações inter-regionais em busca de novas fronteiras agrícolas ou industriais e a migração pendular, marcada pelo deslocamento diário entre cidades-dormitório e polos de emprego.",
          "Na escala internacional, o mundo vive uma contradição marcante: enquanto capitais e mercadorias circulam com rapidez, barreiras físicas e restrições legais dificultam o trânsito de trabalhadores e refugiados, incluindo os novos deslocados climáticos."
        ],
        roots: [
          "<strong>Migração Pendular e Sazonal:</strong> deslocamentos diários casa–trabalho e movimentos temporários ligados a colheitas ou turismo.",
          "<strong>Refugiados e Apátridas:</strong> pessoas protegidas por tratados internacionais por fugirem de perseguições ou conflitos armados.",
          "<strong>Fuga de Cérebros (Brain Drain):</strong> emigração de profissionais altamente qualificados de países periféricos para centros desenvolvidos."
        ]
      },
      {
        id: "globalizacao-redes",
        shortTitle: "Globalização e Redes",
        category: "Economia Global",
        tagColor: "forest",
        title: "Globalização: Compressão Espaço-Tempo e Desigualdades",
        subtitle: "Como as cadeias globais de valor e o meio técnico-científico-informacional integram e fragmentam territórios.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSlAmpt66xrC6zNT624W9YQxpJ9A5qF_rhfPsZBTaxl_OwBLl5JXWZpzKRMLCsm2Uamf7o48QDN0g_qPTk",
        caption: "Contêineres e cabos submarinos simbolizam a infraestrutura material da integração planetária.",
        meta: "Caderno Econômico · Leitura de 5 min",
        paragraphs: [
          "A globalização representa a atual fase de expansão do capitalismo, caracterizada pela integração acelerada dos mercados, das finanças, das comunicações e dos padrões culturais em escala planetária.",
          "O geógrafo Milton Santos definiu o suporte material desse período como o meio técnico-científico-informacional, no qual a ciência e a informação reorganizam o território de maneira seletiva — conectando pontos luminosos e deixando áreas opacas à margem.",
          "Na produção industrial, consolidaram-se as Cadeias Globais de Valor: um único produto tem seu design criado em um país, componentes fabricados em outros e montagem final realizada onde os custos logísticos e trabalhistas são mais vantajosos."
        ],
        roots: [
          "<strong>Compressão Espaço-Tempo:</strong> redução relativa das distâncias graças à revolução nos transportes e nas telecomunicações.",
          "<strong>Empresas Transnacionais:</strong> corporações que operam em dezenas de países, fragmentando etapas produtivas.",
          "<strong>Blocos Econômicos:</strong> acordos regionais (Mercosul, União Europeia, USMCA) para ampliar mercados e poder de negociação."
        ]
      },
      {
        id: "geopolitica-agua",
        shortTitle: "Geopolítica da Água",
        category: "Recursos Naturais",
        tagColor: "ocean",
        title: "Geopolítica dos Recursos Hídricos e Bacias Transfronteiriças",
        subtitle: "A disputa estratégica por rios compartilhados, aquíferos subterrâneos e segurança hídrica no século XXI.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSP7IMcI2uIhpUmPvLoToMv8a9vcfZNuf_VQv_hMR4esOzXEnHE6HGlmpmCfANECCBv7GJ0EFxDVMNPNg0",
        caption: "Grandes bacias hidrográficas atravessam fronteiras políticas e exigem diplomacia ambiental.",
        meta: "Caderno Geopolítica · Leitura de 4 min",
        paragraphs: [
          "Embora a água cubra cerca de 70% da superfície terrestre, menos de 3% é doce, e apenas uma pequena fração está acessível em rios, lagos e aquíferos superficiais. Essa distribuição desigual transforma a água em um recurso geopolítico de primeira ordem.",
          "Mais de 260 bacias hidrográficas no mundo são compartilhadas por dois ou mais países. Obras de barramento a montante, como grandes hidrelétricas nos rios Nilo, Tigre, Eufrates ou Mekong, frequentemente geram tensões diplomáticas com nações situadas a jusante.",
          "Além do consumo direto, o conceito de água virtual revela que países exportadores de commodities agrícolas e pecuárias transferem indiretamente bilhões de litros de água incorporados em seus produtos."
        ],
        roots: [
          "<strong>Água Virtual:</strong> volume total de água utilizado na cadeia produtiva de bens agrícolas e industriais.",
          "<strong>Aquíferos Transfronteiriços:</strong> grandes reservas subterrâneas compartilhadas, como o Sistema Aquífero Guarani na América do Sul.",
          "<strong>Estresse Hídrico:</strong> situação em que a demanda por água supera a capacidade sustentável de renovação natural."
        ]
      },
      {
        id: "transicao-energetica",
        shortTitle: "Transição Energética",
        category: "Energia & Clima",
        tagColor: "forest",
        title: "Matriz Energética Global e a Corrida pelos Minerais Críticos",
        subtitle: "Os desafios da descarbonização e a nova geografia estratégica do lítio, cobalto e terras raras.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRn3mQOCgCcdxa_CTsdrW_P1zimWLZmOektY4fN_BexWBeES7MLhITjiSqqL4wXKahS-nZ83aV4AAYKEKc",
        caption: "A transição para fontes renováveis redistribui o poder geopolítico antes concentrado no petróleo.",
        meta: "Caderno Energia · Leitura de 5 min",
        paragraphs: [
          "A substituição gradual dos combustíveis fósseis por fontes renováveis — como solar, eólica e biomassa — está redesenhando o mapa geopolítico global. Se o século XX foi marcado pelo controle das reservas de petróleo e gás natural, o século XXI inaugura a disputa pela tecnologia limpa.",
          "Essa transição, contudo, depende intensamente da extração mineral. Baterias de veículos elétricos, turbinas eólicas e painéis fotovoltaicos exigem grandes volumes de lítio, cobre, níquel, cobalto e elementos de terras raras.",
          "Como o refino desses minerais está altamente concentrado em poucos países, potências industriais buscam diversificar suas cadeias de suprimento, valorizando regiões ricas nesses recursos, como o Triângulo do Lítio na América do Sul."
        ],
        roots: [
          "<strong>Matriz Energética vs. Matriz Elétrica:</strong> diferença entre o conjunto total de fontes de energia e aquelas voltadas apenas à geração de eletricidade.",
          "<strong>Minerais Críticos:</strong> insumos indispensáveis para tecnologias de baixo carbono e semicondutores.",
          "<strong>Hidrogênio Verde:</strong> vetor energético produzido a partir da eletrólise da água com fontes renováveis."
        ]
      },
      {
        id: "questao-agraria",
        shortTitle: "Agronegócio e Campo",
        category: "Geografia Agrária",
        tagColor: "earth",
        title: "Agronegócio, Fronteiras Agrícolas e Soberania Alimentar",
        subtitle: "A modernização técnica do campo, a concentração fundiária e os impactos ambientais da expansão agropecuária.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSlAmpt66xrC6zNT624W9YQxpJ9A5qF_rhfPsZBTaxl_OwBLl5JXWZpzKRMLCsm2Uamf7o48QDN0g_qPTk",
        caption: "Sistemas logísticos de exportação conectam o interior agrícola aos grandes portos globais.",
        meta: "Caderno Agrário · Leitura de 4 min",
        paragraphs: [
          "O espaço agrário contemporâneo passa por uma profunda transformação tecnológica impulsionada pela agricultura de precisão, biotecnologia, monitoramento por satélites e integração com cadeias agroindustriais globais.",
          "No Brasil e em outros países emergentes, a expansão das fronteiras agrícolas — como o avanço sobre o Cerrado e o arco do desmatamento amazônico — elevou a produção de commodities como soja, milho e carnes, mas intensificou debates sobre conservação ambiental.",
          "Ao mesmo tempo, persiste a dualidade estrutural do campo: de um lado, grandes propriedades altamente capitalizadas voltadas à exportação; de outro, a agricultura familiar, responsável por grande parte dos alimentos que abastecem o mercado interno."
        ],
        roots: [
          "<strong>Estrutura Fundiária:</strong> forma como as propriedades rurais estão distribuídas em tamanho e posse.",
          "<strong>Complexos Agroindustriais (CAIs):</strong> integração entre produção rural, indústria de insumos, processamento e distribuição.",
          "<strong>Soberania Alimentar:</strong> direito dos povos de definir suas próprias políticas agrícolas e garantir alimentos saudáveis."
        ]
      },
      {
        id: "clima-urbano",
        shortTitle: "Clima e Ilhas de Calor",
        category: "Meio Ambiente Urbano",
        tagColor: "earth",
        title: "Ilhas de Calor e Justiça Climática nas Grandes Cidades",
        subtitle: "Como a impermeabilização do solo e a falta de áreas verdes agravam os extremos térmicos e as enchentes.",
        image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTw02SSgi91NiygqBaaT3Nlg16_UgPDvXPEEUSOzCx8xlE7MeJkvTLZ9NStSD58nDk-w85CPJTdGTSBMBQ",
        caption: "O adensamento construtivo altera o balanço de energia e cria microclimas urbanos mais quentes.",
        meta: "Caderno Ambiental · Leitura de 4 min",
        paragraphs: [
          "As grandes cidades modificam diretamente o clima local. A substituição da cobertura vegetal por asfalto, concreto e edifícios altos aumenta a absorção de calor durante o dia e dificulta sua dissipação à noite, formando as chamadas ilhas de calor urbanas.",
          "Esse fenômeno eleva as temperaturas médias nos centros adensados em vários graus acima das áreas rurais vizinhas, aumentando o consumo de energia com refrigeração e agravando problemas respiratórios e cardiovasculares.",
          "Os efeitos das mudanças climáticas nas cidades também revelam desigualdades: bairros periféricos com menor arborização e ocupação próxima a encostas ou fundos de vale sofrem de modo desproporcional com ondas de calor e inundações."
        ],
        roots: [
          "<strong>Ilhas de Calor:</strong> anomalias térmicas urbanas causadas pela redução da evapotranspiração e retenção de calor nos materiais.",
          "<strong>Impermeabilização do Solo:</strong> impedimento da infiltração da água da chuva, elevando o escoamento superficial e o risco de enchentes.",
          "<strong>Justiça Climática:</strong> conceito que evidencia como grupos vulneráveis arcam mais severamente com os impactos ambientais."
        ]
      },
      {
        id: "industria-40",
        shortTitle: "Indústria 4.0 e Trabalho",
        category: "Geografia Econômica",
        tagColor: "ocean",
        title: "Revolução 4.0, Plataformas Digitais e Nova Geografia do Trabalho",
        subtitle: "Automação, inteligência artificial e uberização transformam a localização industrial e as relações laborais.",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSP7IMcI2uIhpUmPvLoToMv8a9vcfZNuf_VQv_hMR4esOzXEnHE6HGlmpmCfANECCBv7GJ0EFxDVMNPNg0",
        caption: "Fluxos de dados e algoritmos reorganizam onde se produz e como se trabalha nas metrópoles.",
        meta: "Caderno Econômico · Leitura de 5 min",
        paragraphs: [
          "A Quarta Revolução Industrial — marcada pela robótica avançada, internet das coisas, computação em nuvem e inteligência artificial — está alterando os fatores locacionais das fábricas e dos escritórios pelo mundo.",
          "Com a automação reduzindo o peso do custo da mão de obra barata em certos setores, algumas empresas adotam o reshoring ou nearshoring, trazendo etapas produtivas para mais perto dos grandes mercados consumidores para evitar gargalos logísticos.",
          "No mercado de trabalho urbano, expandiu-se a economia de plataformas (uberização), caracterizada pelo gerenciamento algorítmico de entregadores, motoristas e trabalhadores remotos, redefinindo o uso do espaço urbano e os direitos trabalhistas."
        ],
        roots: [
          "<strong>Fatores Locacionais:</strong> critérios que orientam onde uma empresa se instala (infraestrutura, mercado, incentivos, mão de obra).",
          "<strong>Nearshoring:</strong> transferência da produção para países geograficamente próximos ao mercado consumidor.",
          "<strong>Uberização do Trabalho:</strong> mediação laboral por aplicativos digitais com flexibilização de vínculos e jornadas."
        ]
      }
    ];
  
    // Elementos do DOM
    const quickTitleNav = document.getElementById("quickTitleNav");
    const articlesGrid = document.getElementById("articlesGrid");
    const searchInput = document.getElementById("searchInput");
    const resultCount = document.getElementById("resultCount");
    const emptyState = document.getElementById("emptyState");
    const clearSearchBtn = document.getElementById("clearSearchBtn");
    const toggleCompactBtn = document.getElementById("toggleCompactBtn");
    const dateEl = document.getElementById("currentDate");
    const logoHome = document.getElementById("logoHome");
  
    // Elementos das views (Capa vs Aba da Notícia)
    const homeView = document.getElementById("homeView");
    const articleTabView = document.getElementById("articleTabView");
    const backToHomeBtn = document.getElementById("backToHomeBtn");
    const tabCategory = document.getElementById("tabCategory");
    const tabTitle = document.getElementById("tabTitle");
    const tabSubtitle = document.getElementById("tabSubtitle");
    const tabMeta = document.getElementById("tabMeta");
    const tabImage = document.getElementById("tabImage");
    const tabCaption = document.getElementById("tabCaption");
    const tabBody = document.getElementById("tabBody");
    const tabTopicsList = document.getElementById("tabTopicsList");
  
    let activeArticleId = null;
  
    // Normaliza strings (remove acentos e deixa em minúsculo) para busca precisa
    function normalizeText(text) {
      return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }
  
    // Atualiza data atual formatada
    if (dateEl) {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(now);
      dateEl.textContent = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }
  
    // Renderiza a barra de pesquisa rápida por títulos (associada às notícias)
    function renderQuickNav() {
      quickTitleNav.innerHTML = "";
  
      const allBtn = document.createElement("button");
      allBtn.type = "button";
      allBtn.className = `chip ${activeArticleId === null ? "active" : ""}`;
      allBtn.textContent = "Todas as Notícias";
      allBtn.addEventListener("click", () => showHomeView());
      quickTitleNav.appendChild(allBtn);
  
      newsData.forEach((article) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = `chip ${activeArticleId === article.id ? "active" : ""}`;
        btn.textContent = article.shortTitle;
        btn.title = article.title;
        btn.dataset.articleId = article.id;
  
        btn.addEventListener("click", () => {
          openArticleTab(article.id);
        });
  
        quickTitleNav.appendChild(btn);
      });
    }
  
    // Renderiza os cards na grade (apenas Título e Subtítulo)
    function renderCards(list) {
      articlesGrid.innerHTML = "";
  
      list.forEach((article) => {
        const card = document.createElement("article");
        card.className = "article-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Abrir notícia: ${article.title}`);
  
        card.innerHTML = `
          <div class="article-card__media">
            <img src="${article.image}" alt="${article.title}" loading="lazy" />
            <span class="tag tag--${article.tagColor}">${article.category}</span>
          </div>
          <div class="article-card__body">
            <h3>${article.title}</h3>
            <p class="article-card__subtitle">${article.subtitle}</p>
            <span class="article-card__cta">Ler matéria completa →</span>
          </div>
        `;
  
        card.addEventListener("click", () => openArticleTab(article.id));
        card.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openArticleTab(article.id);
          }
        });
  
        articlesGrid.appendChild(card);
      });
  
      resultCount.textContent =
        list.length === 1
          ? "Exibindo 1 notícia"
          : `Exibindo ${list.length} notícias`;
  
      emptyState.hidden = list.length > 0;
    }
  
    // Abre a aba própria de uma notícia específica
    function openArticleTab(articleId) {
      const article = newsData.find((item) => item.id === articleId);
      if (!article) return;
  
      activeArticleId = article.id;
  
      tabCategory.textContent = article.category;
      tabTitle.textContent = article.title;
      tabSubtitle.textContent = article.subtitle;
      tabMeta.textContent = `Redação Meridiano · ${article.meta}`;
      tabImage.src = article.image;
      tabImage.alt = article.title;
      tabCaption.textContent = article.caption;
  
      tabBody.innerHTML = article.paragraphs
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("");
  
      tabTopicsList.innerHTML = article.roots
        .map((root) => `<li>${root}</li>`)
        .join("");
  
      homeView.hidden = true;
      articleTabView.hidden = false;
  
      renderQuickNav();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  
    // Volta para a tela inicial com todas as notícias
    function showHomeView() {
      activeArticleId = null;
      articleTabView.hidden = true;
      homeView.hidden = false;
      renderQuickNav();
      filterByTitle();
    }
  
    // Pesquisa funcional a partir de qualquer parte do corpo do título
    function filterByTitle() {
      const query = normalizeText(searchInput.value.trim());
  
      // Se o usuário digitar na pesquisa enquanto lê uma aba, volta à grade para mostrar os resultados
      if (activeArticleId !== null && query.length > 0) {
        activeArticleId = null;
        articleTabView.hidden = true;
        homeView.hidden = false;
        renderQuickNav();
      }
  
      if (!query) {
        renderCards(newsData);
        return;
      }
  
      const filtered = newsData.filter((article) => {
        const normalizedTitle = normalizeText(article.title);
        return normalizedTitle.includes(query);
      });
  
      renderCards(filtered);
    }
  
    // Eventos
    searchInput.addEventListener("input", filterByTitle);
  
    clearSearchBtn.addEventListener("click", () => {
      searchInput.value = "";
      filterByTitle();
      searchInput.focus();
    });
  
    backToHomeBtn.addEventListener("click", showHomeView);
  
    logoHome.addEventListener("click", (e) => {
      e.preventDefault();
      searchInput.value = "";
      showHomeView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    toggleCompactBtn.addEventListener("click", () => {
      const isFocus = document.body.classList.toggle("focus-mode");
      toggleCompactBtn.textContent = isFocus ? "Grade em Colunas" : "Modo Leitura Focada";
    });
  
    // Inicialização
    renderQuickNav();
    renderCards(newsData);
  });