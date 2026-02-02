# 🍔 Burger King Brasil - Site Institucional

Um site moderno e responsivo para o Burger King Brasil, desenvolvido com HTML5, CSS3 e JavaScript vanilla, seguindo as melhores práticas de desenvolvimento web.

## 🚀 Funcionalidades

### ✅ Implementadas
- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Menu Navegacional**: Com animação hamburger para dispositivos móveis
- **Hero Section**: Com contadores animados e call-to-action
- **Sistema de Promoções**: Cards interativos com preços destacados
- **Menu Interativo**: Grid de produtos com preços e descrições
- **Galeria de Imagens**: Com modal de visualização ampliada
- **Sistema de Avaliações**: Depoimentos de clientes com estrelas
- **Formulário de Contato**: Com validação robusta e feedback visual
- **FAQ Interativo**: Acordeão com perguntas frequentes
- **Newsletter**: Sistema de inscrição com validação de email
- **SEO Otimizado**: Meta tags, Open Graph e structured data
- **Acessibilidade**: ARIA labels, navegação por teclado e semântica HTML5
- **Performance**: Lazy loading, debounce/throttle e otimizações
- **Animações**: Scroll reveal, hover effects e transições suaves

### 🎨 Design Features
- **Cores BK**: Paleta oficial Burger King (vermelho, amarelo, preto)
- **Tipografia**: Fontes otimizadas para legibilidade
- **Microinterações**: Feedback visual em todos os elementos interativos
- **Loading States**: Indicadores visuais durante operações assíncronas
- **Notificações**: Sistema de toast notifications para feedback

## 📁 Estrutura do Projeto

```
landpagebk/
├── 📄 burguerk.html          # HTML principal
├── 📄 favicon.svg            # Favicon do site
├── 📄 README.md              # Documentação
├── 📁 css/                   # Stylesheets
│   ├── 📄 main.css           # CSS principal com imports
│   ├── 📄 variables.css      # Variáveis CSS customizadas
│   ├── 📄 reset.css          # Reset e estilos base
│   ├── 📁 layout/            # Layout components
│   │   ├── 📄 header.css     # Header e navegação
│   │   ├── 📄 hero.css       # Hero section
│   │   └── 📄 footer.css     # Footer
│   ├── 📁 components/        # UI components
│   │   ├── 📄 buttons.css    # Botões e variações
│   │   ├── 📄 cards.css      # Cards (promo, menu, etc)
│   │   └── 📄 forms.css      # Formulários e validação
│   └── 📁 utilities/         # Utilitários CSS
│       ├── 📄 animations.css # Animações e transições
│       └── 📄 helpers.css    # Classes utilitárias
├── 📁 js/                    # JavaScript modules
│   ├── 📄 main.js            # Script principal (ES6 modules)
│   └── 📁 utils/             # Utilitários JavaScript
│       └── 📄 helpers.js     # Funções helper reutilizáveis
└── 📁 assets/                # Assets estáticos
    ├── 📁 images/            # Imagens do site
    └── 📁 icons/             # Ícones e SVGs
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Semântico, acessível e SEO-friendly
- **CSS3**: 
  - CSS Variables para tema consistente
  - Flexbox e Grid para layout moderno
  - Animações e transições CSS
  - Media queries para responsividade
- **JavaScript ES6+**:
  - Módulos ES6 para organização
  - Classes para estrutura orientada a objetos
  - Async/await para operações assíncronas
  - Intersection Observer para performance

### Ferramentas e Padrões
- **SEO**: Meta tags, Open Graph, Structured Data (Schema.org)
- **Acessibilidade**: ARIA labels, navegação por teclado, contraste WCAG
- **Performance**: Lazy loading, debounce/throttle, otimização de assets
- **Boas Práticas**: Semântica HTML, CSS organizado, JavaScript modular

## 🚀 Como Usar

### Pré-requisitos
- Navegador moderno com suporte a ES6 modules
- Servidor web local (opcional, para desenvolvimento)

### Instalação Local
1. Clone o repositório:
```bash
git clone <repository-url>
cd landpagebk
```

2. Inicie um servidor local:
```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (se tiver instalado)
npx serve .

# Ou usando VS Code Live Server
```

3. Abra `http://localhost:8000` no navegador

### Deploy
O site é estático e pode ser deployado em qualquer plataforma:
- **GitHub Pages**: Gratuito e ideal para portfolios
- **Netlify**: Build automático e domínios personalizados
- **Vercel**: Performance otimizada
- **Firebase Hosting**: Google CDN
- **Qualquer hospedagem estática**: Upload dos arquivos

## 🎯 Personalização

### Cores e Tema
Edite `css/variables.css` para personalizar:

```css
:root {
    /* Cores do Burger King */
    --bk-red: #EC1C24;
    --bk-yellow: #FFC72C;
    --bk-black: #1a1a1a;
    --bk-white: #ffffff;
    
    /* Breakpoints responsivos */
    --mobile: 480px;
    --tablet: 768px;
    --desktop: 1024px;
}
```

### Conteúdo
O conteúdo está principalmente em `burguerk.html`:
- Textos e descrições
- Preços e produtos
- Informações de contato
- Links de redes sociais

### Funcionalidades
Adicione novas funcionalidades em:
- **CSS**: Novos components em `css/components/`
- **JavaScript**: Novos módulos em `js/`
- **Assets**: Imagens em `assets/images/`

## 🔧 Configuração

### Meta Tags SEO
Configure em `burguerk.html`:

```html
<meta name="description" content="Sua descrição aqui">
<meta property="og:title" content="Título para redes sociais">
<meta property="og:image" content="URL da imagem">
```

### Structured Data
Personalize o Schema.org:

```javascript
{
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Nome do Restaurante",
    "telephone": "+55-XX-XXXX-XXXX",
    "address": { /* endereço */ }
}
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### Teste em Diferentes Dispositivos
1. **DevTools**: Use o device emulator do navegador
2. **Responsivo Test**: Ferramentas online como responsivetest.net
3. **Dispositivos Reais**: Teste em smartphones e tablets

## ♿ Acessibilidade

### Implementado
- **Navegação por Teclado**: Tab, Enter, Escape
- **Screen Readers**: ARIA labels e semântica HTML5
- **Contraste**: Cores com boa relação de contraste
- **Focus Indicators**: Estados de foco visíveis
- **Skip Links**: Link para pular navegação

### Testes de Acessibilidade
- **WAVE**: wave.webaim.org
- **axe DevTools**: Extensão para Chrome
- **Lighthouse**: Auditoria do Chrome DevTools

## 🚀 Performance

### Otimizações Implementadas
- **Lazy Loading**: Imagens carregam sob demanda
- **Debounce/Throttle**: Otimização de eventos scroll/resize
- **CSS Modular**: Carregamento eficiente de estilos
- **JavaScript Otimizado**: Módulos e code splitting
- **Imagens Otimizadas**: Formatos e tamanhos adequados

### Métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Ferramentas de Performance
- **Google PageSpeed Insights**: pageSpeed.web.dev
- **GTmetrix**: gtmetrix.com
- **WebPageTest**: webpagetest.org

## 🔍 SEO

### Implementado
- **Meta Tags**: Title, description, keywords
- **Open Graph**: Facebook, LinkedIn compartilhamento
- **Twitter Cards**: Compartilhamento Twitter
- **Structured Data**: Schema.org para rich snippets
- **URLs Amigáveis**: Navegação com âncoras
- **Sitemap**: Estrutura semântica HTML5

### Ferramentas SEO
- **Google Search Console**: monitoramento Google
- **Screaming Frog**: auditoria técnica SEO
- **Ahrefs/SEMrush**: análise de competitividade

## 🐛 Troubleshooting

### Problemas Comuns

#### Menu Mobile Não Funciona
```javascript
// Verifique se o JavaScript está carregando
console.log('Script carregado');

// Verifique se os elementos existem
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
console.log(hamburger, nav);
```

#### Estilos Não Aplicando
1. Verifique o caminho dos arquivos CSS
2. Limpe o cache do navegador
3. Verifique o console por erros CSS

#### Formulário Não Envia
1. Verifique a validação JavaScript
2. Confira o console por erros
3. Teste com diferentes navegadores

### Debug Mode
Adicione ao console para debug:
```javascript
// Ativar modo debug
localStorage.setItem('debug', 'true');

// Verificar eventos
document.addEventListener('click', (e) => {
    if (localStorage.getItem('debug') === 'true') {
        console.log('Click:', e.target);
    }
});
```

## 🤝 Contribuição

### Como Contribuir
1. **Fork** o projeto
2. **Branch** para sua feature: `git checkout -b feature/nova-funcionalidade`
3. **Commit** suas mudanças: `git commit -m 'Adiciona nova funcionalidade'`
4. **Push** para o branch: `git push origin feature/nova-funcionalidade`
5. **Pull Request** para revisão

### Padrões de Código
- **HTML**: Semântico, indentado com 2 espaços
- **CSS**: BEM methodology, variáveis CSS
- **JavaScript**: ES6+, modular, comentado
- **Commits**: Conventional Commits

## 📝 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👥 Créditos

- **Desenvolvimento**: [Lucas Veiga](https://github.com/lucasveigapinheiro)
- **Design**: Inspirado na identidade visual Burger King
- **Ícones**: Emojis e SVGs otimizados

## 📞 Contato

- **Email**: contato@burgerking.com.br
- **Telefone**: (11) 3000-0000
- **Website**: https://burgerking.com.br
- **Instagram**: @burgerking.brasil

---

🔥 **Burger King Brasil - Qualidade que Reina** 🔥

*Desenvolvido com ❤️ e JavaScript vanilla*
