
# Boilerplate Web - README

Este projeto é um boilerplate para aplicações web utilizando Next.js e diversas bibliotecas para otimizar o desenvolvimento.

## Dependências do Projeto

### 📦 Framework e Base
- **next**: Framework React para produção, utilizado para renderização no lado do servidor (SSR) e geração estática (SSG).
- **react** e **react-dom**: Biblioteca principal e renderizador do React.

### 🎨 UI e Componentes
- **@radix-ui/react-\***: Conjunto de componentes acessíveis e não estilizados, incluindo diálogo, menu, popover, tooltip, entre outros.
- **lucide-react**: Ícones modernos para aplicações React.
- **cmdk**: Biblioteca para criar Command Menus no estilo do Spotlight da Apple.
- **tailwindcss**: Framework CSS baseado em utilitários para estilização rápida.
- **tailwind-merge**: Ferramenta para mesclar classes do Tailwind sem conflitos.
- **tw-animate-css**: Animações CSS compatíveis com Tailwind.

### 📑 Formulários e Validação
- **react-hook-form**: Biblioteca para manipulação de formulários de maneira eficiente.
- **@hookform/resolvers**: Integração do react-hook-form com bibliotecas de validação como Zod e Yup.
- **zod**: Biblioteca para validação de schemas e tipagem segura.
- **input-otp**: Componente de entrada para códigos OTP (One Time Password).

### 📅 Datas e Formatação
- **date-fns**: Biblioteca para manipulação e formatação de datas de forma eficiente.

### 📊 Visualização de Dados
- **recharts**: Biblioteca de gráficos baseada em React.
- **react-resizable-panels**: Permite criar painéis ajustáveis na interface.

### 🚀 Utilitários e Helpers
- **class-variance-authority**: Gerenciamento avançado de classes no Tailwind.
- **clsx**: Concatenação de classes CSS de forma condicional.
- **dotenv**: Gerenciamento de variáveis de ambiente.

### 🎠 Carrosséis e Interações
- **embla-carousel-react**: Biblioteca para criação de carrosséis deslizáveis.

### 🔔 Notificações
- **sonner**: Biblioteca para exibição de notificações toast.

### 🔥 Serviços e Integrações
- **firebase**: Plataforma do Google para autenticação, banco de dados, armazenamento e funções serverless.
- **stripe**: API para processamento de pagamentos online.

## 🛠 Ferramentas de Desenvolvimento

### 🔍 Linting e Estilização de Código
- **eslint** e **eslint-config-next**: Ferramentas para padronização e análise de código.
- **@eslint/eslintrc**: Configuração do ESLint.

### 🔬 Testes
- **jest**: Framework de testes para JavaScript e TypeScript.
- **jest-environment-jsdom**: Ambiente de testes para Jest no navegador.
- **@testing-library/react** e **@testing-library/jest-dom**: Utilitários para testes de componentes React.
- **@testing-library/dom**: Métodos para teste de interações DOM.

### 🔄 Babel e TypeScript
- **@babel/preset-env** e **@babel/preset-react**: Presets do Babel para compatibilidade de código moderno.
- **ts-node**: Suporte para execução de TypeScript diretamente no Node.js.

## 📜 Scripts Disponíveis

- `dev`: Inicia o servidor de desenvolvimento usando Next.js e TurboPack.
- `build`: Compila o projeto para produção.
- `start`: Inicia a versão compilada do projeto.
- `lint`: Executa o ESLint para análise de código.
- `test`: Executa os testes com Jest.
- `test:watch`: Executa os testes em modo de observação.

---

Este boilerplate fornece uma base robusta para projetos Next.js com UI moderna, gerenciamento eficiente de estado, testes e otimizações de performance. Caso precise de mais informações sobre alguma biblioteca, consulte sua documentação oficial.


### Execute o servidor de desenvolvimento:

```bash
  npm run dev
```
Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando o arquivo app/page.js. A página será atualizada automaticamente à medida que você edita o arquivo.
