# React + TypeScript + Vite

# CONSULTER SOLUÇÕES - SITE INSTITUCIONAL

Este é um site baseado em React para a JPM, uma empresa que fornece soluções industriais. O projeto é construído com Vite e TypeScript, e usa React Router para navegação e Styled Components para estilização.

## 🚀 Tecnologias

**Framework:** React
**Ferramenta de Build:** Vite
**Linguagem:** TypeScript
**Roteamento:** React Router
**Estilização:** Styled Components / Bootstrap
**Linting:** ESLint
**Gerenciador de Pacotes:** npm

## Convenções de Desenvolvimento

- O projeto segue a estrutura padrão de projetos React.
- Os componentes estão localizados no diretório `src/components`.
- As páginas estão localizadas no diretório `src/pages`.
- O componente principal da aplicação é o `src/App.tsx`.
- O roteamento é definido em `src/router/AppRoutes.tsx`.
- Os estilos globais são definidos em `src/assets/style/global.ts`.

## 🏷️ Versionamento da Aplicação

O projeto utiliza o número de versão definido no arquivo `package.json` como **fonte única da versão da aplicação**, permitindo que a versão exibida no sistema seja atualizada de forma centralizada.
Essa abordagem facilita manutenção, controle de releases e rastreabilidade de builds.

---

### 📁 Arquivo `src/version.ts`

Foi criado o arquivo `version.ts`, responsável por importar a versão diretamente do `package.json` e disponibilizá-la para toda a aplicação.

Para permitir a importação do arquivo `package.json` dentro do projeto React com TypeScript, foram adicionadas as seguintes opções no arquivo `tsconfig.app.json`:

{
"compilerOptions": {
"resolveJsonModule": true,
"esModuleInterop": true
}
}

### Utilização nos Componentes

A versão da aplicação pode ser utilizada em qualquer componente através da constante APP_VERSION.

Exemplo de uso no componente Footer:

import { APP_VERSION } from '../../version';

<small>Versão {APP_VERSION}</small>

---

## 🎨 Estilos Globais

### Pasta `styles` — arquivo `global.ts`

Utiliza a biblioteca **normalize.css** para padronizar o comportamento dos estilos entre navegadores.

O `GlobalStyle` define:

- Reset e normalização de CSS
- Fonte padrão do projeto
- Cores base
- Configurações globais de layout

Esse arquivo é carregado uma única vez na aplicação.

---

## 🧭 Rotas (`router`)

A pasta `router` é responsável por **centralizar a configuração de rotas da aplicação**, utilizando o React Router (`createBrowserRouter`).

---

### Funcionamento

- Define as rotas públicas do site institucional
- Utiliza um componente de `Layout` para páginas que compartilham estrutura visual comum
- As páginas são renderizadas dentro do `<Outlet />` definido no Layout

---

### Arquivo `AppRoutes.tsx`

- Responsável por mapear os caminhos (`path`) para seus respectivos componentes de página
- Permite organizar rotas com e sem layout
- Facilita a manutenção e expansão da navegação da aplicação

---

### Integração com a aplicação

O roteamento é inicializado no arquivo `App.tsx` através do componente:

<RouterProvider router={router} />

---

## 🧩 Componentes Globais

### Componente `ScrollToTop`

Componente responsável por **resetar o scroll da página ao trocar de rota**.

#### Funcionamento

- Observa a mudança do `pathname` através do `useLocation`
- Executa `window.scrollTo(0, 0)` sempre que a rota muda
- Ele força a página a rolar para o topo quando há mudança de rota.

#### Local de uso

- Importado e utilizado no componente `Layout`
- Afeta todas as páginas que utilizam esse layout

#### Objetivo

- Melhorar a experiência do usuário em navegação SPA
- Evitar que novas páginas carreguem com scroll anterior

---

## Componente `Layout`


Componente responsável por **definir o layout global da aplicação**, envolvendo todas as páginas que compartilham estrutura visual comum (Header, Footer, WhatsApp Button e ScrollToTop)

#### Funcionamento

- Renderiza elementos **fixos** da aplicação:
  - `HeaderTop`: cabeçalho superior com informações de contato
  - `HeaderMain`: menu de navegação principal
  - `Footer`: rodapé com dados de contato
  - `WhatsAppButton`: botão flutuante de WhatsApp (carregado dinamicamente)
  - `ScrollToTop`: comportamento de scroll ao topo ao navegar entre páginas

- Utiliza o componente `<Outlet />` do **React Router** para renderizar o conteúdo dinâmico das páginas

- Carrega configurações do WhatsApp via **fetch** do arquivo `/public/whatsApp.json`

---

#### Local de Uso

- Importado e utilizado na configuração de rotas (`AppRoutes.tsx`)
- Atua como rota pai para páginas que utilizam layout compartilhado

----

## Estrutura do Componente

### **Estado Interno:**
```tsx
const [whatsApp, setWhatsApp] = useState({});
```
- Armazena telefone e mensagem padrão do WhatsApp
- Carregados via `useEffect` do arquivo `whatsApp.json`

### **Renderização Condicional:**
```tsx
{whatsApp.phone && (

)}
```
- Botão WhatsApp só aparece **após** carregar os dados com sucesso

---

## Dados de Contato

O componente importa e repassa `contactData` para:
- `HeaderTop`
- `Footer`

Garantindo que informações de contato sejam **centralizadas** e **consistentes**.

---

## Estilização

### `LayoutWrapper`
- Display: **flex column**
- Min-height: **100vh** (garante que o layout ocupe pelo menos a altura da tela)

### `MainContent`
- Flex: **1** (expande para preencher o espaço disponível)
- Padding-top: **100px** (compensa altura do header fixo)
- **Responsivo**: Em `smallScreenMobile`, padding aumenta para **180px**

---

## Responsividade

- **Desktop**: `padding-top: 100px`
- **Mobile (< smallScreenMobile)**: `padding-top: 180px`
  - Compensa altura maior do header em dispositivos móveis

---

## Configuração Externa

### Arquivo `whatsApp.json` (public/)
```json
{
  "phone": "5511999999999",
  "message": "Olá! Gostaria de mais informações."
}
```

---

#### Objetivo

- ✅ **Evitar duplicação** de código (Header/Footer em cada página)
- ✅ **Garantir consistência** visual entre páginas
- ✅ **Centralizar comportamentos** globais (scroll, WhatsApp)
- ✅ **Facilitar manutenção** e evolução do layout
- ✅ **Carregar dados dinâmicos** (WhatsApp config)


---

## Observações

- O `<Outlet />` é substituído pelo conteúdo de cada rota filha
- Se o fetch do `whatsApp.json` falhar, o botão WhatsApp **não será renderizado**
- O `ScrollToTop` garante que ao navegar entre páginas, a tela **volte ao topo**
- O `contactData` deve ser exportado do módulo `Header` para funcionar corretamente

