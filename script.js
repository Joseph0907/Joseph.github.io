"use strict";

const lessons = [
  {
    id: "html-estrutura", track: "web", subject: "HTML & CSS", number: "01", level: "Começando", duration: "8 min",
    title: "HTML: estrutura de uma página", summary: "Entenda as tags que dão estrutura e significado ao seu site.",
    explanation: "HTML é a linguagem de marcação que organiza o conteúdo de uma página. Ele não é uma linguagem de programação: suas tags descrevem o papel de cada conteúdo para o navegador.\n\nO documento começa com <!doctype html>. Dentro de <html> ficam duas grandes partes: <head>, com configurações e informações da página, e <body>, com o que aparece para quem visita. A maioria das tags tem abertura e fechamento: <p>Texto</p>. Algumas, como <meta>, não envolvem texto.\n\nAtributos acrescentam informações às tags: lang=\"pt-BR\" informa o idioma e href indica o destino de um link. Prefira elementos com significado, como <main>, <nav> e <footer>. Use títulos em ordem e reserve <h1> para o assunto principal.",
    basics: ["<!doctype html> avisa ao navegador que o documento usa HTML moderno.", "<html lang=\"pt-BR\"> envolve a página e informa seu idioma.", "<head> guarda configurações; <title> define o texto da aba; <body> guarda o conteúdo visível.", "<h1> a <h6> representam níveis de título, e <p> representa um parágrafo.", "A maioria das tags abre e fecha: <p>...</p>. O fechamento tem uma barra antes do nome."],
    tip: "Se um texto aparece na página, ele normalmente deve estar dentro do <body>, não do <head>.",
    code: "<!doctype html>\n<html lang=\"pt-BR\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Meu primeiro site</title>\n  </head>\n  <body>\n    <main>\n      <h1>Oi, mundo!</h1>\n      <p>Estou aprendendo HTML.</p>\n    </main>\n  </body>\n</html>",
    question: "Qual tag representa o título principal de uma página?", options: ["<h1>", "<title>", "<header>"], answer: 0,
    explanationAnswer: "A tag <h1> marca o título principal visível da página. <title> define o texto da aba do navegador."
  },
  {
    id: "html-texto-links-imagens", track: "web", subject: "HTML & CSS", number: "02", level: "Começando", duration: "9 min",
    title: "Textos, links e imagens", summary: "Use parágrafos, âncoras e imagens para criar conteúdo conectado.",
    explanation: "Depois da estrutura do documento, podemos adicionar conteúdo. <p> representa um parágrafo; <strong> indica importância; e <em> dá ênfase. Use essas tags pelo significado do texto, não apenas pela aparência.\n\n<a> cria um link e o atributo href informa o destino. Para apontar para uma seção da mesma página, use href=\"#contato\" e coloque id=\"contato\" no destino. <img> mostra uma imagem: src indica o caminho do arquivo e alt descreve seu conteúdo para quem não consegue vê-la ou quando ela não carrega.\n\nCaminhos relativos, como imagens/foto.jpg, apontam para arquivos dentro do projeto. Links e imagens podem envolver texto e outros conteúdos; mantenha a estrutura corretamente fechada.",
    basics: ["Use <p> para parágrafos; <strong> para importância e <em> para ênfase.", "Um link tem a forma <a href=\"https://exemplo.com\">Visitar</a>.", "href=\"#sobre\" aponta para um elemento da mesma página com id=\"sobre\".", "Uma imagem precisa de src com o caminho e de alt descritivo: <img src=\"foto.jpg\" alt=\"...\">.", "Caminhos relativos dependem da pasta do arquivo HTML; confira o nome e a extensão do arquivo."],
    tip: "Não deixe alt vazio em imagens que comunicam algo; para imagens apenas decorativas, alt=\"\" evita ruído para leitores de tela.",
    code: "<h1>Meu portfólio</h1>\n<p>Estou aprendendo <strong>desenvolvimento web</strong>.</p>\n<p><a href=\"#projetos\">Ver projetos</a></p>\n\n<img src=\"imagens/caderno.jpg\"\n     alt=\"Caderno aberto com anotações de código\">\n\n<h2 id=\"projetos\">Projetos</h2>\n<p>Em breve, meus primeiros projetos.</p>",
    question: "Qual atributo de <a> informa o endereço que será aberto?", options: ["src", "href", "alt"], answer: 1,
    explanationAnswer: "href guarda o endereço de destino de um link. src é usado como caminho de uma imagem."
  },
  {
    id: "html-semantica", track: "web", subject: "HTML & CSS", number: "03", level: "Fundamentos", duration: "8 min",
    title: "Seções e HTML semântico", summary: "Organize as áreas da página usando tags que descrevem seu propósito.",
    explanation: "Tags semânticas comunicam o papel de uma área, tanto para quem lê o código quanto para navegadores e tecnologias assistivas. <header> pode introduzir uma página ou seção; <nav> reúne navegação principal; <main> envolve o conteúdo central; <section> agrupa um tema; <article> representa conteúdo independente; e <footer> reúne informações finais.\n\n<div> também é útil para agrupar conteúdo, mas não descreve seu propósito. Escolha um elemento semântico quando ele corresponder ao significado da área. Não é necessário usar cada tag em toda página; use a estrutura que realmente fizer sentido.",
    basics: ["<header> identifica uma área de apresentação ou cabeçalho.", "<nav> agrupa links importantes de navegação.", "<main> contém o conteúdo principal e normalmente aparece uma vez na página.", "<section> agrupa conteúdo de um mesmo tema; <article> representa conteúdo que faz sentido por si só.", "<footer> contém informações finais; <div> é um agrupador genérico sem significado próprio."],
    tip: "Semântica descreve o significado do conteúdo; CSS decide sua aparência visual.",
    code: "<header>\n  <h1>Diário de estudos</h1>\n  <nav aria-label=\"Navegação principal\">\n    <a href=\"#aulas\">Aulas</a>\n    <a href=\"#sobre\">Sobre</a>\n  </nav>\n</header>\n<main>\n  <section id=\"aulas\">\n    <h2>Aulas recentes</h2>\n    <article><h3>Minha primeira página</h3></article>\n  </section>\n</main>\n<footer>Feito para aprender.</footer>",
    question: "Qual elemento é mais adequado para envolver o conteúdo principal da página?", options: ["<main>", "<aside>", "<footer>"], answer: 0,
    explanationAnswer: "<main> envolve o conteúdo central da página. <footer> é uma área final e <aside> costuma conter conteúdo complementar."
  },
  {
    id: "html-identificadores", track: "web", subject: "HTML & CSS", number: "04", level: "Fundamentos", duration: "8 min",
    title: "Atributos id e class", summary: "Identifique elementos para aplicar estilos e encontrá-los com JavaScript.",
    explanation: "id e class são atributos que dão identificadores aos elementos HTML. Um id deve identificar um único elemento dentro da página, como o destino de um link ou um título encontrado por JavaScript. Uma class pode ser usada em muitos elementos, e um elemento pode ter mais de uma classe, separadas por espaços.\n\nCSS seleciona classes com ponto ( .cartao ) e ids com cerquilha ( #inicio ). JavaScript pode usar getElementById(\"inicio\") ou querySelector(\".cartao\"). getElementById recebe o nome puro, sem #; querySelector recebe a sintaxe de seletor CSS.",
    basics: ["id=\"inicio\" identifica um elemento específico; evite repetir o mesmo id na página.", "class=\"cartao\" pode ser aplicada a muitos elementos para compartilhar estilos.", "Um elemento pode ter várias classes, como class=\"cartao destaque\".", "No CSS, .cartao seleciona a classe e #inicio seleciona o id.", "No JavaScript, getElementById(\"inicio\") recebe o nome sem #; querySelector(\"#inicio\") aceita o seletor."],
    tip: "Use classes para aparências e grupos reutilizáveis; reserve ids para referências únicas.",
    code: "<h2 id=\"projetos\">Projetos</h2>\n<article class=\"cartao destaque\">Projeto 1</article>\n<article class=\"cartao\">Projeto 2</article>\n\n/* CSS */\n.cartao { padding: 1rem; }\n#projetos { color: rebeccapurple; }",
    question: "Qual afirmação descreve corretamente class e id?", options: ["Uma class pode se repetir; um id deve identificar um elemento único", "Um id pode se repetir; class deve ser único", "Os dois atributos só podem ser usados uma vez"], answer: 0,
    explanationAnswer: "Classes podem ser compartilhadas por vários elementos; um id deve ser único dentro do documento."
  },
  {
    id: "css-estilos", track: "web", subject: "HTML & CSS", number: "02", level: "Começando", duration: "10 min",
    title: "CSS: cores, fontes e seletores", summary: "Dê estilo à página escolhendo elementos e criando regras visuais.",
    explanation: "CSS (Folhas de Estilo em Cascata) controla a aparência: cores, fontes, tamanhos, espaços e posicionamento. Uma regra tem um seletor e um bloco de declarações. Dentro das chaves, cada declaração segue propriedade: valor; — por exemplo, color: purple;.\n\nNo HTML, class pode ser reutilizada em vários elementos e id deve identificar um elemento único. No CSS, selecionamos uma classe com ponto (.destaque) e um id com cerquilha (#topo). Também podemos selecionar uma tag, como p. O navegador combina as regras aplicáveis; se duas regras conflitarem, a cascata decide qual prevalece.\n\nUma página sem CSS continua tendo conteúdo; o CSS é a camada visual. No exemplo, rem é uma unidade de tamanho relativa à fonte base, e font-weight controla o peso das letras.",
    basics: ["Uma regra CSS é formada por seletor e declarações: seletor { propriedade: valor; }.", "color muda a cor do texto; background-color muda a cor do fundo.", "font-size muda o tamanho da fonte; margin cria espaço externo e padding cria espaço interno.", ".classe seleciona class=\"classe\"; #identificador seleciona id=\"identificador\".", "Cores aceitam nomes, hexadecimal ou rgb(); medidas comuns incluem px, rem e porcentagem.", "O HTML liga a folha externa com <link rel=\"stylesheet\" href=\"style.css\"> dentro de <head>."],
    tip: "Cada declaração precisa de dois-pontos entre propriedade e valor e, normalmente, ponto e vírgula no final.",
    code: "/* No HTML: <p class=\"destaque\">Olá!</p> */\n.destaque {\n  color: #cbf27a;\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: #111522;\n}",
    question: "Qual seletor CSS seleciona elementos com class=\"card\"?", options: ["#card", ".card", "card()"], answer: 1,
    explanationAnswer: "Classes são selecionadas com ponto: .card. O # é usado para selecionar um elemento pelo seu id."
  },
  {
    id: "css-box-model", track: "web", subject: "HTML & CSS", number: "03", level: "Fundamentos", duration: "10 min",
    title: "Espaçamento e modelo de caixa", summary: "Entenda conteúdo, preenchimento, borda e margem em cada elemento.",
    explanation: "O navegador trata cada elemento como uma caixa. No centro está o conteúdo; padding cria espaço entre o conteúdo e a borda; border desenha a borda; margin cria espaço para fora da caixa, separando-a das vizinhas.\n\nwidth e height definem dimensões. Com o box-sizing padrão (content-box), a largura definida considera apenas o conteúdo e a borda/padding são somados por fora. Com box-sizing: border-box, largura e altura já incluem padding e borda — um padrão que torna o dimensionamento mais previsível.\n\nUse px para medidas fixas pequenas, rem para dimensões relativas ao tamanho de fonte e % para dimensões relativas ao elemento pai.",
    basics: ["Conteúdo é a área interna; width e height controlam suas dimensões.", "padding cria espaço dentro da borda; margin cria espaço fora dela.", "border define a borda, por exemplo: 1px solid #444.", "content-box soma padding e borda além de width; border-box inclui esses valores na largura definida.", "rem é relativo à fonte base; % geralmente é relativo ao tamanho do elemento pai."],
    tip: "box-sizing: border-box costuma facilitar layouts porque a largura especificada é a largura externa esperada.",
    code: "* {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 280px;\n  padding: 16px;\n  border: 1px solid #444;\n  margin: 12px;\n}\n\n.titulo {\n  margin-bottom: 0.5rem;\n}",
    question: "Qual propriedade cria espaço entre o conteúdo e a borda de um elemento?", options: ["margin", "padding", "outline"], answer: 1,
    explanationAnswer: "padding cria espaço interno, entre o conteúdo e a borda. margin fica do lado de fora da caixa."
  },
  {
    id: "css-posicionamento", track: "web", subject: "HTML & CSS", number: "04", level: "Fundamentos", duration: "10 min",
    title: "Posicionamento de elementos", summary: "Conheça o fluxo normal e os usos básicos de position.",
    explanation: "Por padrão, os elementos aparecem no fluxo normal do documento: cada um ocupa seu espaço e influencia a posição dos próximos. position: static é esse comportamento padrão.\n\nrelative mantém o espaço original do elemento no fluxo e permite deslocá-lo com top, right, bottom ou left. absolute remove o elemento do fluxo e o posiciona em relação ao ancestral posicionado mais próximo (um elemento ancestral com position diferente de static). fixed prende o elemento à janela do navegador mesmo durante a rolagem.\n\nEsses modos são úteis em situações específicas, mas não substituem o layout normal. Para organizar conjuntos de elementos, recursos como Flexbox e Grid costumam ser mais apropriados.",
    basics: ["static é o posicionamento padrão; top e left não reposicionam elementos estáticos.", "relative mantém o espaço do elemento no fluxo e usa sua posição original como referência.", "absolute sai do fluxo e procura um ancestral posicionado como referência.", "fixed usa a janela do navegador como referência e permanece no mesmo lugar durante a rolagem.", "top, right, bottom e left controlam os deslocamentos de elementos posicionados."],
    tip: "Um contêiner com position: relative pode servir de referência para um filho com position: absolute.",
    code: ".cartao {\n  position: relative;\n  padding: 20px;\n}\n\n.etiqueta {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n\n.atalho-topo {\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n}",
    question: "Qual valor de position mantém o espaço original do elemento no fluxo e permite deslocá-lo?", options: ["absolute", "relative", "fixed"], answer: 1,
    explanationAnswer: "relative mantém o espaço original do elemento no fluxo e permite ajustar seu deslocamento com top, left, right ou bottom."
  },
  {
    id: "css-texto-estados", track: "web", subject: "HTML & CSS", number: "05", level: "Fundamentos", duration: "8 min",
    title: "Texto, cores e estados", summary: "Estilize a tipografia e mostre quando um link ou controle recebe interação.",
    explanation: "CSS permite ajustar a leitura e a identidade visual. color muda a cor do texto; font-family escolhe a fonte; font-size define o tamanho; font-weight ajusta o peso; text-align alinha o texto; e text-decoration controla linhas decorativas.\n\nCores podem ser escritas por nome, hexadecimal (#336699) ou rgb(). As pseudo-classes indicam estados: :hover quando o ponteiro passa sobre o elemento, :focus quando ele recebe foco pelo mouse ou teclado, e :active durante a ativação. Mantenha um foco visível para facilitar a navegação pelo teclado.",
    basics: ["color define a cor do texto; background-color define a cor do fundo.", "font-family aceita fontes de preferência e uma família genérica de reserva.", "font-size muda o tamanho; font-weight controla o peso; text-align controla o alinhamento.", "a:hover muda a apresentação do link sob o ponteiro; :focus ajuda quem navega com teclado.", "Cores podem usar nomes, valores hexadecimais ou funções rgb()."],
    tip: "Não remova o contorno de :focus sem oferecer outro estilo visível para a navegação por teclado.",
    code: "a {\n  color: #b7d978;\n  font-family: Arial, sans-serif;\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: underline;\n}\n\nbutton:focus-visible {\n  outline: 3px solid #c6a9ff;\n  outline-offset: 3px;\n}",
    question: "Qual pseudo-classe pode estilizar um link quando ele está focado pelo teclado?", options: [":hover", ":focus-visible", ":visited"], answer: 1,
    explanationAnswer: ":focus-visible permite dar um destaque visível ao elemento focado, especialmente durante a navegação pelo teclado."
  },
  {
    id: "html-listas", track: "web", subject: "HTML & CSS", number: "03", level: "Fundamentos", duration: "7 min",
    title: "Listas ordenadas e não ordenadas", summary: "Agrupe itens com listas numeradas ou com marcadores.",
    explanation: "Uma lista HTML agrupa itens relacionados. Use <ul> (unordered list) quando a ordem não muda o significado, como uma lista de materiais. Use <ol> (ordered list) para etapas ou instruções que devem ser seguidas em sequência. Dentro de qualquer uma delas, cada item é um <li>.\n\nO navegador desenha marcadores para <ul> e números para <ol> por padrão. O CSS pode mudar a aparência, mas a escolha entre lista ordenada e não ordenada deve refletir o sentido do conteúdo. Listas também podem ser aninhadas: coloque outra <ul> dentro de um <li>.",
    basics: ["Abra a lista com <ul> ou <ol> e feche com a mesma tag.", "Coloque cada item em seu próprio <li>; não use <li> solto fora de uma lista.", "Use <ul> se trocar a ordem dos itens não mudar o significado.", "Use <ol> para instruções, rankings ou outras sequências importantes; start pode escolher o número inicial.", "Use <dl> com <dt> para o termo e <dd> para sua descrição.", "Para uma lista dentro de outra, insira a lista interna dentro do <li> correspondente."],
    tip: "Escolha o tipo de lista pelo significado dos itens, não apenas pelo marcador que deseja mostrar.",
    code: "<h2>O que levar</h2>\n<ul>\n  <li>Caderno</li>\n  <li>Curiosidade</li>\n</ul>\n\n<h2>Primeiros passos</h2>\n<ol start=\"1\">\n  <li>Abra o editor</li>\n  <li>Crie um arquivo HTML</li>\n</ol>\n\n<dl>\n  <dt>HTML</dt>\n  <dd>Organiza o conteúdo de uma página.</dd>\n</dl>",
    question: "Qual tag descreve o significado de um termo em uma lista descritiva?", options: ["<dt>", "<dd>", "<li>"], answer: 1,
    explanationAnswer: "<dd> contém a descrição. <dt> contém o termo descrito e <li> é usado em listas <ul> e <ol>."
  },
  {
    id: "html-tabelas", track: "web", subject: "HTML & CSS", number: "04", level: "Fundamentos", duration: "8 min",
    title: "Tabelas para dados", summary: "Organize informações que fazem sentido em linhas e colunas.",
    explanation: "Uma tabela serve para comparar dados que têm relação entre si em linhas e colunas — por exemplo, horários ou notas. Ela não deve ser usada para posicionar partes do site; para isso, usamos CSS.\n\nA estrutura é: <table> contém a tabela; <tr> forma uma linha; <th> é uma célula de cabeçalho; <td> é uma célula de dado. <thead> e <tbody> agrupam, respectivamente, o cabeçalho e o corpo. Cada linha deve ter células correspondentes às colunas.\n\ncolspan faz uma célula ocupar mais de uma coluna e rowspan faz ocupar mais de uma linha. Cabeçalhos claros ajudam todos a entender a tabela; em tabelas simples, scope=\"col\" indica um cabeçalho de coluna.",
    basics: ["<table> abre a tabela e <tr> cria uma linha.", "<th> identifica um cabeçalho; <td> contém um dado comum.", "<thead> agrupa as linhas de cabeçalho e <tbody> as linhas de dados.", "colspan=\"2\" mescla duas colunas; rowspan=\"2\" mescla duas linhas.", "Para adicionar outra linha, crie outro <tr> com suas células.", "Use uma tabela só quando os dados forem realmente tabulares, não para montar o layout visual."],
    tip: "Use títulos de coluna que expliquem o que cada valor representa; em tabelas simples, use <th scope=\"col\">.",
    code: "<table>\n  <thead>\n    <tr><th>Linguagem</th><th>Nível</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>HTML</td><td>Iniciante</td></tr>\n    <tr><td>Python</td><td>Iniciante</td></tr>\n  </tbody>\n</table>",
    question: "Qual atributo permite que uma célula ocupe mais de uma coluna?", options: ["rowspan", "colspan", "scope"], answer: 1,
    explanationAnswer: "colspan faz uma célula se estender por várias colunas; rowspan permite que se estenda por várias linhas."
  },
  {
    id: "html-formularios", track: "web", subject: "HTML & CSS", number: "05", level: "Fundamentos", duration: "10 min",
    title: "Formulários HTML", summary: "Receba dados com campos, rótulos e botões acessíveis.",
    explanation: "Um formulário é uma área para preencher e enviar dados. <form> agrupa os campos; <label> explica o que preencher; <input> cria campos curtos; <textarea> cria uma área de texto maior; e um botão com type=\"submit\" envia o formulário.\n\nLigue o rótulo ao campo: o for do <label> deve ter o mesmo valor que o id do campo. O atributo name dá nome ao dado enviado. Escolha um type apropriado, como text, email, password ou number. required pede ao navegador que o campo seja preenchido antes do envio.\n\nHTML oferece validações básicas, como o formato de e-mail, mas não salva nem envia os dados a um servidor sozinho. JavaScript pode responder ao envio e validar melhor a experiência.",
    basics: ["<form> envolve campos e o botão de envio.", "<label for=\"email\"> deve corresponder a <input id=\"email\">.", "type=\"email\" pede um e-mail; type=\"password\" oculta caracteres; type=\"text\" recebe texto comum.", "name identifica o campo quando os dados são enviados; required torna o preenchimento obrigatório.", "Use <button type=\"submit\"> para enviar e <button type=\"button\"> para uma ação que não envia o formulário."],
    tip: "Não use placeholder como único rótulo: ele desaparece quando a pessoa começa a digitar.",
    code: "<form>\n  <label for=\"email\">Seu e-mail</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n\n  <label for=\"mensagem\">Mensagem</label>\n  <textarea id=\"mensagem\" name=\"mensagem\"></textarea>\n\n  <button type=\"submit\">Enviar</button>\n</form>",
    question: "Para que serve o atributo for de um <label>?", options: ["Para associar o rótulo ao id de um campo", "Para enviar o formulário", "Para mudar a cor do campo"], answer: 0,
    explanationAnswer: "O valor de for deve corresponder ao id do campo. Assim, clicar no rótulo também foca o campo."
  },
  {
    id: "html-controles-form", track: "web", subject: "HTML & CSS", number: "06", level: "Praticando", duration: "10 min",
    title: "Opções e campos de formulário", summary: "Monte menus, caixas de seleção, opções únicas e áreas de texto.",
    explanation: "Além de texto e e-mail, formulários podem oferecer controles diferentes para cada tipo de resposta. <select> reúne opções <option>; o valor escolhido pode ser lido por JavaScript com .value. Use uma opção inicial que explique o que escolher.\n\nCheckbox permite marcar várias opções independentes. Radio agrupa opções mutuamente exclusivas: para isso, os botões do mesmo grupo usam o mesmo atributo name e valores diferentes. <textarea> permite respostas longas. Para datas e quantidades, use types date e number; min, max e step ajudam a limitar valores numéricos.\n\nCada controle precisa de um rótulo compreensível. Para caixas de seleção e radio, associe cada label ao id correto. O comportamento e a aparência exatos de alguns controles variam conforme o navegador e o sistema.",
    basics: ["<select><option value=\"...\">...</option></select> cria uma lista suspensa; .value lê a opção selecionada.", "type=\"checkbox\" permite selecionar várias opções que não se excluem.", "type=\"radio\" representa opções únicas; agrupe-as usando o mesmo name.", "<textarea> cria um campo de texto longo; <input type=\"date\"> cria um campo de data.", "type=\"number\" aceita min, max e step para orientar o intervalo permitido."],
    tip: "Para radio, use o mesmo name nas opções do grupo e ids diferentes para cada campo.",
    code: "<label for=\"curso\">Curso</label>\n<select id=\"curso\" name=\"curso\">\n  <option value=\"\">Escolha uma opção</option>\n  <option value=\"html\">HTML</option>\n  <option value=\"python\">Python</option>\n</select>\n\n<label><input type=\"checkbox\" name=\"interesses\" value=\"web\">\n  Quero estudar web</label>\n\n<label for=\"quantidade\">Quantidade</label>\n<input id=\"quantidade\" name=\"quantidade\"\n       type=\"number\" min=\"1\" max=\"10\">",
    question: "Como agrupamos opções de radio para permitir uma única escolha?", options: ["Usando o mesmo name e valores diferentes", "Usando o mesmo id em todas as opções", "Usando type=\"checkbox\""], answer: 0,
    explanationAnswer: "Botões radio com o mesmo name fazem parte do mesmo grupo; o navegador permite selecionar apenas um deles."
  },
  {
    id: "html-validacao-form", track: "web", subject: "HTML & CSS", number: "07", level: "Praticando", duration: "9 min",
    title: "Validação básica de formulários", summary: "Use atributos HTML para pedir dados completos e de formatos adequados.",
    explanation: "O navegador já consegue verificar algumas regras simples antes do envio. required torna um campo obrigatório; type=\"email\" verifica um formato básico de e-mail; min e max limitam números; minlength e maxlength limitam o tamanho de um texto; e pattern permite uma regra de formato.\n\n<form> pode declarar action (destino do envio) e method (como os dados são enviados). GET costuma ser usado para buscas e coloca os dados na URL; POST envia os dados no corpo da requisição. Os campos precisam de name para fazer parte dos dados enviados.\n\nEssas verificações melhoram a experiência, mas não garantem que os dados recebidos sejam confiáveis. Um serviço que recebe dados precisa validá-los novamente no servidor. Nunca trate uma validação feita somente no navegador como proteção de segurança.",
    basics: ["required impede o envio vazio daquele campo pelo formulário do navegador.", "type=\"email\" e type=\"url\" ativam verificações básicas de formato.", "min, max, minlength e maxlength definem limites de quantidade ou tamanho.", "name identifica os dados do campo no envio; id identifica o elemento na página.", "GET costuma servir para buscas; POST envia dados no corpo da requisição; action define o destino."],
    tip: "A validação do navegador pode ser contornada; confirme regras importantes também no servidor.",
    code: "<form action=\"/cadastro\" method=\"post\">\n  <label for=\"email\">E-mail</label>\n  <input id=\"email\" name=\"email\"\n         type=\"email\" required>\n\n  <label for=\"idade\">Idade</label>\n  <input id=\"idade\" name=\"idade\"\n         type=\"number\" min=\"13\" max=\"120\">\n\n  <button type=\"submit\">Continuar</button>\n</form>",
    question: "Qual afirmação sobre required está correta?", options: ["Valida o campo apenas antes do envio pelo navegador", "Criptografa e protege os dados", "Substitui a validação no servidor"], answer: 0,
    explanationAnswer: "required solicita o preenchimento no navegador. Ele não criptografa os dados nem substitui verificações no servidor."
  },
  {
    id: "js-fundamentos-funcoes", track: "javascript", subject: "JavaScript", number: "08", level: "Começando", duration: "10 min",
    title: "JavaScript: arquivo, variáveis e funções", summary: "Entenda onde o JavaScript entra na página e como criar uma função.",
    explanation: "HTML descreve conteúdo, CSS cuida da apresentação e JavaScript adiciona comportamento. Uma forma organizada de carregar JavaScript é usar um arquivo .js externo. A tag <script src=\"script.js\" defer></script> baixa o arquivo e espera o HTML ser interpretado antes de executar o script.\n\nUse const para uma variável que não será reatribuída e let quando o valor precisará mudar. JavaScript é dinamicamente tipado: o valor determina o tipo. Uma função nomeia um conjunto de instruções. Parâmetros recebem dados de entrada e return devolve um resultado; para executar a função, chame seu nome com argumentos.",
    basics: ["Crie um arquivo script.js e ligue-o com <script src=\"script.js\" defer></script>.", "defer faz o navegador esperar a leitura do HTML antes de executar o arquivo.", "const declara uma referência que não será reatribuída; let permite atribuir outro valor.", "function soma(a, b) { ... } define uma função; a e b são parâmetros.", "return entrega um resultado; soma(2, 3) chama a função com argumentos e pode devolver 5."],
    tip: "Mantenha o JavaScript em arquivo separado e use defer para que os elementos HTML já existam quando o código rodar.",
    code: "function calcularDobro(numero) {\n  const resultado = numero * 2;\n  return resultado;\n}\n\nconst valor = calcularDobro(6);\nconsole.log(valor); // 12",
    question: "O que a instrução return resultado faz em uma função?", options: ["Devolve o valor para quem chamou a função", "Mostra o valor automaticamente na página", "Repete a função para sempre"], answer: 0,
    explanationAnswer: "return encerra a função e devolve o resultado para o código que a chamou."
  },
  {
    id: "js-dom", track: "javascript", subject: "JavaScript", number: "09", level: "Fundamentos", duration: "10 min",
    title: "Encontrando e alterando elementos", summary: "Selecione elementos do HTML pelo id, classe ou seletor e atualize seu conteúdo.",
    explanation: "Quando o navegador lê o HTML, ele cria uma representação de seus elementos chamada DOM (Document Object Model). JavaScript acessa o DOM através de document e pode encontrar elementos para responder a interações.\n\ndocument.getElementById(\"mensagem\") procura um id sem #. document.querySelector(\".aviso\") usa a sintaxe de seletores CSS e retorna o primeiro resultado; querySelectorAll retorna uma lista de correspondências. Os métodos getElementsByClassName e getElementsByTagName também localizam conjuntos de elementos.\n\nDepois de selecionar o elemento, textContent altera texto simples, .value lê ou define o valor de um campo, e atributos como src podem ser atualizados. Evite colocar conteúdo de usuário em innerHTML; textContent não interpreta esse conteúdo como marcação HTML.",
    basics: ["document representa o documento carregado no navegador; os elementos formam a árvore DOM.", "getElementById(\"titulo\") encontra o id e recebe o nome sem #.", "querySelector(\"#titulo\") usa um seletor CSS e retorna o primeiro elemento encontrado.", "querySelectorAll(\".item\") retorna todos os elementos correspondentes para percorrer.", "Use textContent para texto, .value para campos e .src para alterar uma imagem."],
    tip: "Confira se o seletor encontra um elemento antes de alterá-lo; querySelector pode retornar null.",
    code: "<p id=\"resultado\">Texto inicial</p>\n<input id=\"nome\" type=\"text\">\n<img id=\"foto\" src=\"foto-a.jpg\" alt=\"Paisagem\">\n\nconst resultado = document.getElementById(\"resultado\");\nconst campo = document.querySelector(\"#nome\");\nconst foto = document.querySelector(\"#foto\");\n\nresultado.textContent = \"Texto atualizado\";\nconsole.log(campo.value);\nfoto.src = \"foto-b.jpg\";",
    question: "Qual é a forma correta de chamar getElementById para encontrar id=\"aviso\"?", options: ["document.getElementById(\"#aviso\")", "document.getElementById(\"aviso\")", "document.getElementById(\".aviso\")"], answer: 1,
    explanationAnswer: "getElementById recebe o nome do id sem # ou ponto. Esses símbolos fazem parte da sintaxe de querySelector."
  },
  {
    id: "js-eventos", track: "javascript", subject: "JavaScript", number: "10", level: "Fundamentos", duration: "10 min",
    title: "Eventos e addEventListener", summary: "Faça o código reagir a cliques, digitação, seleção e movimento do mouse.",
    explanation: "Um evento representa algo que acontece na página, como um clique ou uma tecla. addEventListener associa uma função a um evento, sem precisar misturar código JavaScript dentro do HTML. O primeiro argumento é o nome do evento e o segundo é a função que será chamada.\n\nclick reage a cliques; input reage enquanto o valor de um campo muda; change reage à confirmação de uma mudança; submit acontece no envio de um formulário; mouseover e mouseout indicam entrada e saída do ponteiro; keydown ocorre quando uma tecla é pressionada. A função pode receber um objeto event com informações do ocorrido, como event.key.\n\nEvite cadastrar dois cliques para a mesma ação sem necessidade: escolha o evento que combina com o comportamento desejado.",
    basics: ["elemento.addEventListener(\"click\", funcao) registra o que fazer quando o elemento recebe um clique.", "A função de retorno pode ser escrita como () => { ... } ou function () { ... }.", "input acompanha mudanças durante a digitação; change é útil quando a seleção é confirmada.", "submit reage ao envio do formulário; preventDefault pode evitar a navegação padrão.", "mouseover/mouseout reagem ao ponteiro; keydown pode ler a tecla com event.key."],
    tip: "Prefira addEventListener a atributos onclick no HTML para separar estrutura e comportamento.",
    code: "const botao = document.querySelector(\"#botao\");\nconst campo = document.querySelector(\"#nome\");\nconst resultado = document.querySelector(\"#resultado\");\n\nbotao.addEventListener(\"click\", () => {\n  resultado.textContent = \"Botão clicado!\";\n});\n\ncampo.addEventListener(\"input\", (event) => {\n  resultado.textContent = event.currentTarget.value;\n});",
    question: "Qual evento costuma ser usado para atualizar uma mensagem enquanto a pessoa digita?", options: ["mouseout", "input", "dblclick"], answer: 1,
    explanationAnswer: "input acontece quando o valor do campo muda, permitindo atualizar a resposta durante a digitação."
  },
  {
    id: "js-estilos-classes", track: "javascript", subject: "JavaScript", number: "11", level: "Praticando", duration: "9 min",
    title: "Estilos e classes com JavaScript", summary: "Altere atributos e use classList para aplicar estados visuais.",
    explanation: "JavaScript pode alterar atributos de elementos e estilos CSS. Por exemplo, imagem.src troca uma imagem; botao.disabled habilita ou desabilita um botão; elemento.style.backgroundColor altera uma propriedade visual. Propriedades CSS com hífen são escritas em camelCase no JavaScript: background-color vira backgroundColor.\n\nPara mudar várias regras visuais de forma organizada, prefira definir uma classe no CSS e ativá-la no JavaScript com classList.add(), remove() ou toggle(). Assim, o comportamento controla o estado e a folha CSS controla a aparência. classList.contains() permite verificar se a classe já está presente.",
    basics: ["elemento.textContent altera o texto; elemento.src pode trocar o caminho de uma imagem.", "elemento.disabled = true desabilita um controle.", "elemento.style.color altera uma propriedade pontual; hífens viram camelCase, como backgroundColor.", "elemento.classList.add(\"ativo\") e remove(\"ativo\") adicionam ou removem uma classe.", "classList.toggle(\"ativo\") alterna a classe e CSS define como .ativo aparece."],
    tip: "Use classes para estados visuais reutilizáveis; reserve element.style para mudanças realmente pontuais.",
    code: "const botao = document.querySelector(\"#alternar\");\nconst cartao = document.querySelector(\"#cartao\");\n\nbotao.addEventListener(\"click\", () => {\n  cartao.classList.toggle(\"destacado\");\n});\n\n// No CSS:\n// .destacado { background-color: #e8f4c8; }\n",
    question: "Qual propriedade adiciona ou remove uma classe sem substituir as outras classes do elemento?", options: ["elemento.classList.toggle()", "elemento.className = \"\"", "elemento.style.class"], answer: 0,
    explanationAnswer: "classList.toggle() alterna uma classe e preserva as demais classes do elemento."
  },
  {
    id: "js-formularios", track: "javascript", subject: "JavaScript", number: "06", level: "Mão na massa", duration: "12 min",
    title: "JavaScript e formulários", summary: "Leia campos, valide informações e responda ao envio do formulário.",
    explanation: "JavaScript é uma linguagem de programação que roda no navegador e permite responder a ações, ler dados e atualizar a página. const cria uma referência que não será reatribuída; document.querySelector(\"#id\") encontra o elemento que tem aquele id.\n\naddEventListener(\"submit\", ...) registra uma função para rodar quando o formulário for enviado. O objeto event descreve o evento; event.preventDefault() cancela a ação padrão de recarregar ou navegar. A propriedade .value lê o que foi digitado, e .trim() remove espaços do começo e do fim. Uma condição if permite decidir o que fazer. textContent altera o texto da página com segurança.\n\nO exemplo usa os mesmos campos do laboratório logo abaixo. Abra a aula e envie um nome para ver a mensagem. A validação do navegador é útil para orientar a pessoa, mas não substitui a validação no servidor quando os dados são realmente recebidos.",
    basics: ["const nome = ... guarda uma referência em uma constante; use let quando precisar reatribuir a variável.", "document.querySelector(\"#practice-name\") procura o elemento pelo id; # é a notação de id do CSS.", "addEventListener registra uma ação. \"submit\" é o evento de envio do formulário.", "event.preventDefault() evita o recarregamento padrão, para o JavaScript tratar o envio.", ".value lê o campo, .trim() remove espaços nas pontas e textContent mostra uma mensagem.", "if (condição) { ... } executa o bloco quando a condição é verdadeira; === compara sem converter tipos."],
    tip: "Seletores do JavaScript precisam corresponder aos ids que existem no HTML; um id escrito diferente faz querySelector retornar null.",
    code: "const form = document.querySelector(\"#practice-form\");\nconst feedback = document.querySelector(\"#lab-output\");\nconst nameField = document.querySelector(\"#practice-name\");\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n  const name = nameField.value.trim();\n\n  if (name === \"\") {\n    feedback.textContent = \"Digite seu nome.\";\n    return;\n  }\n\n  feedback.textContent = `Olá, ${name}! Formulário enviado.`;\n});",
    demo: true,
    question: "O que event.preventDefault() faz no envio tradicional de um formulário?", options: ["Impede o comportamento padrão, como recarregar a página", "Apaga os campos automaticamente", "Fecha o navegador"], answer: 0,
    explanationAnswer: "preventDefault() interrompe a ação padrão do evento; no formulário, isso permite tratar o envio com JavaScript sem recarregar a página."
  },
  {
    id: "py-entrada-saida", track: "python", subject: "Python", number: "07", level: "Começando", duration: "7 min",
    title: "Entrada e saída de dados", summary: "Converse com quem usa seu programa usando input() e print().",
    explanation: "Um programa recebe dados, processa e mostra um resultado. Em Python, print() é uma saída: mostra informações no terminal. input() é uma entrada: exibe uma pergunta e espera a pessoa digitar algo. O programa pausa nessa linha até a resposta ser enviada.\n\nTudo o que input() retorna é texto (str), mesmo que a pessoa digite 12. Para fazer contas, converta com int() (inteiro, como 12) ou float() (número decimal, como 12.5). Se a entrada não puder ser convertida, Python gera ValueError — mais adiante, podemos tratar esse erro.",
    basics: ["print(\"Olá\") exibe o texto entre aspas no terminal.", "nome = input(\"Seu nome: \") mostra a pergunta e guarda a resposta em nome.", "input() sempre retorna str; \"12\" é texto, não o número 12.", "int(\"12\") converte para inteiro; float(\"12.5\") converte para número decimal.", "Uma f-string como f\"Olá, {nome}\" insere o valor da variável no texto."],
    tip: "Converta a entrada antes de somá-la: \"2\" + \"3\" junta textos e resulta em \"23\"; 2 + 3 resulta em 5.",
    code: "nome = input(\"Qual é o seu nome? \")\nprint(\"Olá,\", nome)\n\nidade_texto = input(\"Quantos anos você tem? \")\nidade = int(idade_texto)\nprint(f\"No próximo ano você terá {idade + 1}.\")",
    question: "Qual é o tipo de dado retornado por input()?", options: ["Número inteiro", "Texto (str)", "Sempre um valor lógico"], answer: 1,
    explanationAnswer: "input() retorna uma string. Use int() ou float() se precisar realizar operações numéricas com a resposta."
  },
  {
    id: "py-aritmeticos", track: "python", subject: "Python", number: "08", level: "Começando", duration: "7 min",
    title: "Operadores aritméticos", summary: "Faça contas com soma, divisão, potência e outros operadores.",
    explanation: "Operadores aritméticos fazem contas com números. + soma, - subtrai, * multiplica e / divide (o resultado é uma divisão comum, muitas vezes decimal). // divide e descarta a parte decimal, % devolve o resto da divisão e ** eleva à potência.\n\nPor exemplo, 10 / 3 é aproximadamente 3.33; 10 // 3 é 3; 10 % 3 é 1. Parênteses agrupam operações e deixam a ordem explícita: (2 + 3) * 4 resulta em 20. Dividir por zero causa ZeroDivisionError.",
    basics: ["a + b soma; a - b subtrai; a * b multiplica.", "a / b faz divisão comum; a // b faz divisão inteira; a % b devolve o resto.", "a ** b calcula a elevado a b, como 2 ** 3, que resulta em 8.", "Use parênteses para controlar a ordem, como (2 + 3) * 4.", "Operações com números recebidos por input() exigem int() ou float() antes da conta."],
    tip: "O operador % é útil para testar divisibilidade: numero % 2 == 0 verifica se o número é par.",
    code: "soma = 8 + 4       # 12\nproduto = 3 * 5    # 15\npotencia = 2 ** 3  # 8\nresto = 10 % 3     # 1\ndivisao_inteira = 10 // 3  # 3\n\nprint(soma, produto, potencia)",
    question: "Qual é o resultado de 10 % 3 em Python?", options: ["3", "1", "0"], answer: 1,
    explanationAnswer: "% devolve o resto da divisão. Como 10 dividido por 3 deixa resto 1, 10 % 3 vale 1."
  },
  {
    id: "py-funcoes", track: "python", subject: "Python", number: "09", level: "Fundamentos", duration: "10 min",
    title: "Funções, parâmetros e escopo", summary: "Reutilize código e entenda onde variáveis podem ser acessadas.",
    explanation: "Uma função é um bloco nomeado que executa uma tarefa e pode ser reutilizado. def inicia sua definição. O nome da função vem em seguida; os nomes entre parênteses são parâmetros (entradas); dois-pontos iniciam o bloco indentado.\n\nDefinir uma função não a executa: é preciso chamá-la pelo nome, passando argumentos. return encerra a função e devolve um valor para quem chamou. Sem return explícito, a função devolve None. Os parâmetros e as variáveis criados dentro da função são locais e só existem naquele escopo.\n\nNo exemplo, preco e quantidade são parâmetros; 12.5 e 3 são argumentos; total é local; valor recebe o resultado retornado.",
    basics: ["def nome_da_funcao(parametro): inicia a definição; o corpo precisa estar indentado.", "Parâmetro é o nome usado na definição; argumento é o valor enviado na chamada.", "Chame a função com nome_da_funcao(valor). Definir a função não executa seu corpo.", "return valor entrega um resultado e encerra a função.", "Variáveis locais existem dentro da função; para usar um resultado fora, retorne-o e guarde-o."],
    tip: "Prefira enviar valores como parâmetros e devolver resultados com return em vez de depender de variáveis globais.",
    code: "def calcular_total(preco, quantidade):\n    total = preco * quantidade  # variável local\n    return total\n\nvalor = calcular_total(12.5, 3)\nprint(valor)  # 37.5",
    question: "Onde uma variável local criada dentro da função fica acessível?", options: ["Em qualquer arquivo Python", "Somente no escopo da função", "Somente após o programa terminar"], answer: 1,
    explanationAnswer: "Variáveis locais são acessíveis dentro da função em que foram definidas. Use return para levar um resultado para quem chamou a função."
  },
  {
    id: "py-strings", track: "python", subject: "Python", number: "10", level: "Fundamentos", duration: "9 min",
    title: "Operações com strings", summary: "Combine textos, transforme letras e encontre partes de uma string.",
    explanation: "String (str) é o tipo de dado usado para textos. Um texto fica entre aspas simples ou duplas. + concatena (junta) strings e * repete o texto. Letras têm posições chamadas índices: começam em zero, então frase[0] é o primeiro caractere.\n\nO slicing frase[inicio:fim] extrai uma parte; inicio entra e fim não entra. Por isso, [0:8] pega os caracteres das posições 0 a 7. Strings são imutáveis: métodos não alteram a string original, mas retornam outra. .strip() remove espaços nas pontas, .lower() deixa minúsculo, .upper() deixa maiúsculo e .replace() troca trechos.\n\nUse uma f-string (f\"...\") para inserir valores entre chaves. len(texto) conta os caracteres.",
    basics: ["Escreva texto entre aspas: mensagem = \"Olá\".", "\"Olá\" + \" mundo\" junta textos; \"ha\" * 3 resulta em \"hahaha\".", "Os índices começam em zero; texto[0] é o primeiro caractere e texto[-1] é o último.", "texto[inicio:fim] seleciona do início até antes do fim; texto[:3] pega os três primeiros caracteres.", ".strip(), .lower(), .upper() e .replace() retornam uma nova string.", "f\"Olá, {nome}\" insere o valor de nome no texto; len(texto) conta caracteres."],
    tip: "Índices fora do intervalo causam IndexError; slicing fora do intervalo é permitido e retorna os caracteres disponíveis.",
    code: "frase = \"  Aprender Python  \"\nlimpa = frase.strip()\nprint(limpa.lower())\nprint(limpa.upper())\nprint(limpa[0:8])\n\nnome = \"Lia\"\nprint(f\"Olá, {nome}!\")",
    question: "Qual método remove espaços do início e do fim de uma string?", options: [".strip()", ".split()", ".replace()"], answer: 0,
    explanationAnswer: ".strip() devolve uma nova string sem espaços (e outros caracteres em branco) no início e no fim."
  },
  {
    id: "py-selecao", track: "python", subject: "Python", number: "11", level: "Fundamentos", duration: "8 min",
    title: "Seleção: if, elif e else", summary: "Faça seu programa tomar caminhos diferentes conforme uma condição.",
    explanation: "Estruturas de seleção deixam o programa escolher o que fazer. if testa uma condição: se ela for True, executa seu bloco indentado. elif (senão, se) testa outra condição apenas quando as anteriores não foram verdadeiras. else executa quando nenhuma condição anterior foi atendida; ele não recebe uma condição.\n\nOs dois-pontos : terminam cada condição e a indentação identifica o bloco. Python verifica as condições de cima para baixo e executa apenas o primeiro bloco verdadeiro. Por isso, coloque primeiro as condições mais específicas.",
    basics: ["if condicao: testa a primeira condição e exige os dois-pontos.", "Indente o bloco que deve rodar quando a condição for verdadeira (quatro espaços é comum).", "Use elif condicao: para testar outra possibilidade apenas se as anteriores falharem.", "Use else: para o caso restante; ele não precisa de uma condição.", "As condições são testadas de cima para baixo; o primeiro bloco verdadeiro é executado."],
    tip: "Uma indentação incorreta pode causar IndentationError ou mudar quais instruções fazem parte do bloco.",
    code: "nota = 8\n\nif nota >= 9:\n    resultado = \"Excelente\"\nelif nota >= 6:\n    resultado = \"Aprovado\"\nelse:\n    resultado = \"Continue praticando\"\n\nprint(resultado)",
    question: "Quando o bloco else é executado?", options: ["Sempre antes do if", "Quando as condições if e elif anteriores não são verdadeiras", "Somente quando há erro"], answer: 1,
    explanationAnswer: "else é o caminho alternativo: ele roda quando nenhuma condição anterior do if/elif foi satisfeita."
  },
  {
    id: "py-operadores", track: "python", subject: "Python", number: "12", level: "Fundamentos", duration: "9 min",
    title: "Operadores relacionais e lógicos", summary: "Compare valores e combine condições para tomar decisões.",
    explanation: "Uma comparação produz um valor lógico (bool): True (verdadeiro) ou False (falso). Os operadores relacionais são == (igual), != (diferente), > (maior), < (menor), >= (maior ou igual) e <= (menor ou igual).\n\nCombine condições com and (todas precisam ser verdadeiras) e or (pelo menos uma precisa ser verdadeira). not inverte True para False e vice-versa. Esses operadores aparecem muito em condições de if e while.\n\nAtenção: = atribui um valor a uma variável; == compara dois valores. Por exemplo, idade = 20 guarda 20; idade == 20 pergunta se idade vale 20.",
    basics: ["== compara igualdade; != compara diferença.", ">, <, >= e <= comparam qual valor é maior ou menor.", "and só resulta em True se os dois lados forem True.", "or resulta em True se pelo menos um lado for True; not inverte o resultado.", "Use parênteses para deixar combinações complexas mais fáceis de ler e não confunda = com ==."],
    tip: "Em Python, comparações encadeadas como 0 <= nota <= 10 são válidas e verificam os dois limites.",
    code: "idade = 20\npossui_ingresso = True\n\npode_entrar = idade >= 18 and possui_ingresso\nprint(pode_entrar)  # True\n\nesta_chovendo = False\nprint(not esta_chovendo)  # True",
    question: "Qual operador lógico exige que as duas condições sejam verdadeiras?", options: ["or", "not", "and"], answer: 2,
    explanationAnswer: "and resulta em True somente quando ambos os lados são verdadeiros. or precisa que apenas um dos lados seja verdadeiro."
  },
  {
    id: "py-while-for", track: "python", subject: "Python", number: "13", level: "Fundamentos", duration: "10 min",
    title: "Repetição: while e for", summary: "Repita tarefas com uma condição ou percorrendo uma sequência.",
    explanation: "Laços (loops) repetem instruções sem copiar e colar código. while executa o bloco enquanto sua condição for True. Algo dentro do bloco precisa atualizar a condição, ou o programa pode ficar preso em um laço infinito.\n\nfor percorre os itens de uma sequência, como uma string ou uma lista. range(fim) gera números do zero até antes de fim; range(inicio, fim) começa em inicio e também para antes de fim. for é útil quando queremos percorrer uma sequência; while, quando a repetição depende de uma condição.",
    basics: ["while condicao: repete o bloco enquanto a condição continuar verdadeira.", "Atualize a variável usada pela condição do while para que o laço possa terminar.", "for item in sequencia: visita cada item uma vez.", "range(3) gera 0, 1, 2; o valor final nunca é incluído.", "break encerra um laço; continue pula para a próxima repetição."],
    tip: "Antes de executar um while, confira: a condição pode se tornar falsa? Se não, o laço pode nunca terminar.",
    code: "contador = 1\nwhile contador <= 3:\n    print(contador)\n    contador += 1\n\nfor numero in range(3):\n    print(\"Volta\", numero)  # 0, 1, 2",
    question: "Quais valores são gerados por range(3)?", options: ["1, 2, 3", "0, 1, 2", "0, 1, 2, 3"], answer: 1,
    explanationAnswer: "range(3) começa em 0 e termina antes de 3: gera 0, 1 e 2."
  },
  {
    id: "py-listas", track: "python", subject: "Python", number: "14", level: "Fundamentos", duration: "9 min",
    title: "Listas", summary: "Guarde itens em sequência e adicione, acesse ou remova valores.",
    explanation: "Uma lista guarda zero ou mais itens em uma sequência, entre colchetes e separados por vírgula. Ela pode misturar tipos, mas geralmente é mais simples trabalhar com itens do mesmo tipo. Listas são mutáveis: é possível adicionar, remover e substituir itens.\n\nOs índices começam em zero: lista[0] é o primeiro item e lista[-1] é o último. .append(item) adiciona ao final; .remove(valor) remove a primeira ocorrência daquele valor; len(lista) informa quantos itens há. Percorra todos os itens com for item in lista.\n\nAcessar uma posição inexistente causa IndexError. Verifique o tamanho da lista quando a posição puder variar.",
    basics: ["Crie uma lista: frutas = [\"maçã\", \"banana\"]. Uma lista vazia é [].", "Acesse por índice: frutas[0] é o primeiro item; frutas[-1] é o último.", "frutas.append(\"uva\") adiciona um item ao final.", "frutas[0] = \"pera\" substitui o primeiro valor; frutas.remove(\"banana\") remove um valor.", "len(frutas) conta os itens; for fruta in frutas: percorre todos eles."],
    tip: "Não confunda o índice (começa em zero) com a quantidade de itens (len começa a contar em um).",
    code: "frutas = [\"maçã\", \"banana\"]\nfrutas.append(\"uva\")\n\nprint(frutas[0])  # maçã\nprint(len(frutas))  # 3\n\nfor fruta in frutas:\n    print(fruta)",
    question: "Qual método adiciona um item ao final de uma lista?", options: [".add()", ".append()", ".push()"], answer: 1,
    explanationAnswer: ".append(item) adiciona um item ao final de uma lista Python."
  },
  {
    id: "py-matrizes", track: "python", subject: "Python", number: "15", level: "Praticando", duration: "10 min",
    title: "Matrizes (listas de listas)", summary: "Represente linhas e colunas com listas dentro de outras listas.",
    explanation: "Em Python básico, uma matriz pode ser representada por listas dentro de uma lista. Pense em uma tabela: cada lista interna é uma linha, e cada item dela é uma coluna. Em matriz[linha][coluna], o primeiro índice escolhe a linha e o segundo escolhe a coluna; ambos começam em zero.\n\nNo exemplo, matriz[0][1] seleciona a primeira linha e a segunda coluna, por isso o resultado é 2. Para ler todos os valores, um for percorre as linhas e outro percorre os valores de cada linha. Para uma grade regular, cada linha normalmente deve ter o mesmo número de colunas.",
    basics: ["Uma matriz é uma lista externa que contém uma lista para cada linha.", "Acesse uma célula com matriz[indice_da_linha][indice_da_coluna].", "Ambos os índices começam em zero; matriz[1][0] significa segunda linha, primeira coluna.", "Use dois laços for: o de fora percorre linhas; o de dentro, valores da linha.", "Cada linha precisa existir e cada posição acessada precisa estar dentro dos limites."],
    tip: "Para atualizar uma célula, atribua pelo índice: matriz[0][1] = 9.",
    code: "matriz = [\n    [1, 2, 3],\n    [4, 5, 6]\n]\n\nprint(matriz[0][1])  # 2\n\nfor linha in matriz:\n    for valor in linha:\n        print(valor)",
    question: "Em matriz[1][0], o que o primeiro índice seleciona?", options: ["A segunda linha", "A primeira coluna", "O número de elementos"], answer: 0,
    explanationAnswer: "O primeiro índice escolhe a linha (índice 1 é a segunda linha); o segundo escolhe a coluna dentro dela."
  },
  {
    id: "py-dicionarios", track: "python", subject: "Python", number: "16", level: "Praticando", duration: "10 min",
    title: "Dicionários", summary: "Associe chaves a valores para organizar dados com nomes.",
    explanation: "Um dicionário guarda pares de chave e valor. Ele é útil quando queremos encontrar um dado pelo seu nome, em vez de lembrar a posição dele. As chaves ficam entre aspas e são únicas; os valores podem ser textos, números, listas ou outros dados.\n\nAcesse uma chave com dicionario[\"chave\"]. Se a chave não existir, essa forma causa KeyError. .get(\"chave\") devolve o valor ou None sem esse erro; .get(\"chave\", valor_padrao) permite escolher um padrão. Atribuir a uma chave cria ou atualiza o par. .items() permite percorrer chave e valor juntos.",
    basics: ["Crie um dicionário com chaves e valores: pessoa = {\"nome\": \"Lia\", \"idade\": 20}.", "Acesse um valor pela chave: pessoa[\"nome\"].", "Adicione ou atualize: pessoa[\"cidade\"] = \"Recife\".", ".get(\"email\") busca sem KeyError se a chave estiver ausente; pode receber um valor padrão.", "for chave, valor in pessoa.items(): percorre todos os pares."],
    tip: "Chaves precisam ser únicas e imutáveis; strings são uma escolha comum para dados identificados por nome.",
    code: "pessoa = {\n    \"nome\": \"Lia\",\n    \"idade\": 20\n}\n\nprint(pessoa[\"nome\"])\npessoa[\"cidade\"] = \"Recife\"\n\nfor chave, valor in pessoa.items():\n    print(chave, valor)",
    question: "Como acessamos o valor associado à chave \"nome\"?", options: ["pessoa.nome", "pessoa[\"nome\"]", "pessoa(0)"], answer: 1,
    explanationAnswer: "Em um dicionário, acesse o valor pela chave com colchetes: pessoa[\"nome\"]."
  }
];

const courseOrder = [
  "html-estrutura", "html-texto-links-imagens", "html-semantica", "html-identificadores",
  "html-listas", "html-tabelas", "html-formularios", "html-controles-form", "html-validacao-form",
  "css-estilos", "css-box-model", "css-posicionamento", "css-texto-estados",
  "js-fundamentos-funcoes", "js-dom", "js-eventos", "js-estilos-classes", "js-formularios"
];
const courseRank = new Map(courseOrder.map((id, index) => [id, index]));
lessons.sort((first, second) =>
  (courseRank.get(first.id) ?? courseOrder.length) - (courseRank.get(second.id) ?? courseOrder.length)
);
lessons.forEach((lesson, index) => {
  lesson.number = String(index + 1).padStart(2, "0");
});

const storageKey = "dev-a-bordo-concluidas-v1";
const grid = document.querySelector("#lesson-grid");
const searchInput = document.querySelector("#lesson-search");
const emptyState = document.querySelector("#empty-state");
const resultsCount = document.querySelector("#results-count");
const progressLabel = document.querySelector("#progress-label");
const progressFill = document.querySelector("#progress-fill");
const progressBar = document.querySelector(".progress-track");
const progressHint = document.querySelector("#progress-hint");
const storageNotice = document.querySelector("#storage-notice");
let activeFilter = "all";
let completedLessons = loadProgress();

function loadProgress() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return new Set();
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new TypeError("Formato de progresso inválido.");
    const validIds = new Set(lessons.map((lesson) => lesson.id));
    return new Set(parsed.filter((id) => typeof id === "string" && validIds.has(id)));
  } catch (error) {
    storageNotice.hidden = false;
    storageNotice.textContent = "Não foi possível carregar seu progresso salvo. Ele ficará disponível enquanto esta página estiver aberta.";
    console.error("Falha ao carregar o progresso salvo:", error);
    return new Set();
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...completedLessons]));
  } catch (error) {
    storageNotice.hidden = false;
    storageNotice.textContent = "Não foi possível salvar seu progresso neste navegador. Suas alterações continuam disponíveis enquanto esta página estiver aberta.";
    console.error("Falha ao salvar o progresso:", error);
  }
}

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function updateProgress() {
  const completed = completedLessons.size;
  const percentage = Math.round((completed / lessons.length) * 100);
  progressLabel.textContent = `${completed} de ${lessons.length} aulas`;
  progressFill.style.width = `${percentage}%`;
  progressBar.setAttribute("aria-valuemax", String(lessons.length));
  progressBar.setAttribute("aria-valuenow", String(completed));
  progressHint.textContent = completed === lessons.length
    ? "Trilha concluída. Parabéns pela jornada!"
    : completed === 0
      ? "Toda jornada começa com uma aula."
      : `${percentage}% da trilha concluída. Continue assim!`;
}

function updateLessonCounts() {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const filter = chip.dataset.filter;
    const count = filter === "all"
      ? lessons.length
      : lessons.filter((lesson) => lesson.track === filter).length;
    chip.querySelector("span").textContent = String(count);
  });
  document.querySelector("#hero-lesson-count").textContent = String(lessons.length);
  document.querySelector("#stats-lesson-count").textContent = String(lessons.length);
  document.querySelector("#stats-question-count").textContent = String(lessons.length);
}

function createLessonCard(lesson, index) {
  const isComplete = completedLessons.has(lesson.id);
  const options = lesson.options.map((option, optionIndex) => `
    <label class="quiz-option">
      <input type="radio" name="answer-${lesson.id}" value="${optionIndex}">
      <span>${escapeHTML(option)}</span>
    </label>`).join("");
  return `
    <details class="lesson-card track-${lesson.track}" data-lesson-id="${lesson.id}">
      <summary>
        <span class="lesson-number">${lesson.number}</span>
        <span class="lesson-heading">
          <span class="lesson-meta"><span class="track-label">${escapeHTML(lesson.subject)}</span><span class="meta-dot">·</span><span>${escapeHTML(lesson.level)}</span><span class="meta-dot">·</span><span>${escapeHTML(lesson.duration)}</span>${isComplete ? '<span class="completed-tag">· concluída ✓</span>' : ""}</span>
          <h3>${escapeHTML(lesson.title)}</h3>
          <span class="lesson-summary">${escapeHTML(lesson.summary)}</span>
        </span>
      </summary>
      <div class="lesson-body">
        <p class="lesson-explanation">${escapeHTML(lesson.explanation)}</p>
        <div class="lesson-basics">
          <p class="basics-title">DO ZERO, PASSO A PASSO</p>
          <ol>${lesson.basics.map((step) => `<li>${escapeHTML(step)}</li>`).join("")}</ol>
          <p class="basics-tip"><strong>Dica:</strong> ${escapeHTML(lesson.tip)}</p>
        </div>
        <p class="example-label">EXEMPLO DE CÓDIGO</p>
        <div class="code-example"><pre><code>${escapeHTML(lesson.code)}</code></pre><button class="copy-button" type="button" data-action="copy" aria-label="Copiar exemplo da aula ${lesson.number}">Copiar</button></div>
        ${lesson.demo ? `
          <div class="mini-lab">
            <p class="mini-lab-title">Experimente: envie um formulário</p>
            <form class="practice-form" id="practice-form">
              <label for="practice-name">Seu nome<input id="practice-name" name="name" type="text" placeholder="Ex.: Lia" required></label>
              <label for="practice-email">Seu e-mail<input id="practice-email" name="email" type="email" placeholder="lia@email.com" required></label>
              <button type="submit">Enviar</button>
            </form>
            <p class="lab-output" id="lab-output" role="status" aria-live="polite"></p>
          </div>` : ""}
        <div class="quiz-box">
          <p class="exercise-label">HORA DE PRATICAR</p>
          <form class="quiz-form" data-answer="${lesson.answer}" data-explanation="${escapeHTML(lesson.explanationAnswer)}">
            <p class="quiz-question">${escapeHTML(lesson.question)}</p>
            ${options}
            <button class="quiz-submit" type="submit">Conferir resposta</button>
            <p class="quiz-feedback" role="status" aria-live="polite"></p>
          </form>
        </div>
        <div class="lesson-footer">
          <p>Aula ${index + 1} de ${lessons.length}</p>
          <button class="complete-button" type="button" data-action="complete" aria-pressed="${isComplete}">${isComplete ? "✓ Aula concluída" : "Marcar como concluída"}</button>
        </div>
      </div>
    </details>`;
}

function renderLessons() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const visibleLessons = lessons.filter((lesson) => {
    const matchesFilter = activeFilter === "all" || lesson.track === activeFilter;
    const searchableText = `${lesson.title} ${lesson.subject} ${lesson.summary} ${lesson.explanation} ${lesson.basics.join(" ")} ${lesson.tip}`.toLocaleLowerCase("pt-BR");
    return matchesFilter && searchableText.includes(term);
  });
  grid.innerHTML = visibleLessons.map((lesson) => createLessonCard(lesson, lessons.indexOf(lesson))).join("");
  emptyState.hidden = visibleLessons.length > 0;
  resultsCount.textContent = `${visibleLessons.length} ${visibleLessons.length === 1 ? "aula encontrada" : "aulas encontradas"}`;
  updateProgress();
}

document.querySelector(".filter-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const selected = chip === button;
    chip.classList.toggle("is-active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  updateLessonCounts();
  renderLessons();
});

searchInput.addEventListener("input", renderLessons);

grid.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const card = button.closest("[data-lesson-id]");
  const lesson = lessons.find((item) => item.id === card.dataset.lessonId);
  if (button.dataset.action === "complete") {
    if (completedLessons.has(lesson.id)) completedLessons.delete(lesson.id);
    else completedLessons.add(lesson.id);
    saveProgress();
    updateProgress();
    button.setAttribute("aria-pressed", String(completedLessons.has(lesson.id)));
    button.textContent = completedLessons.has(lesson.id) ? "✓ Aula concluída" : "Marcar como concluída";
    const tag = card.querySelector(".completed-tag");
    if (completedLessons.has(lesson.id) && !tag) {
      const meta = card.querySelector(".lesson-meta");
      meta.insertAdjacentHTML("beforeend", '<span class="completed-tag">· concluída ✓</span>');
    } else if (!completedLessons.has(lesson.id) && tag) {
      tag.remove();
    }
  }
  if (button.dataset.action === "copy") {
    try {
      await navigator.clipboard.writeText(lesson.code);
      button.textContent = "Copiado!";
      window.setTimeout(() => { button.textContent = "Copiar"; }, 1600);
    } catch (error) {
      storageNotice.hidden = false;
      storageNotice.textContent = "Não foi possível copiar o código. Selecione o exemplo e copie manualmente.";
      console.error("Falha ao copiar o exemplo:", error);
    }
  }
});

grid.addEventListener("submit", (event) => {
  const quiz = event.target.closest(".quiz-form");
  if (quiz) {
    event.preventDefault();
    const feedback = quiz.querySelector(".quiz-feedback");
    const selected = quiz.querySelector('input[type="radio"]:checked');
    if (!selected) {
      feedback.className = "quiz-feedback is-incorrect";
      feedback.textContent = "Escolha uma alternativa antes de conferir.";
      return;
    }
    const isCorrect = Number(selected.value) === Number(quiz.dataset.answer);
    feedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-incorrect"}`;
    feedback.textContent = isCorrect
      ? `Resposta certa! ${quiz.dataset.explanation}`
      : `Ainda não. ${quiz.dataset.explanation}`;
    return;
  }

  const practiceForm = event.target.closest("#practice-form");
  if (practiceForm) {
    event.preventDefault();
    const name = new FormData(practiceForm).get("name").trim();
    const output = document.querySelector("#lab-output");
    output.textContent = `Olá, ${name}! Seu formulário foi enviado.`;
    practiceForm.reset();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
});

renderLessons();