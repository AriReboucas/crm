<p align="center"><h1 align="center">Extra Homework</h1></p>

<p align="center">
	<img src="https://img.shields.io/github/license/AriReboucas/crm?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/AriReboucas/crm?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/AriReboucas/crm?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/AriReboucas/crm?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## 🔗 Tabela de Conteúdo

- [📍 Visão Geral](#-visão-geral)
- [👾 Funcionalidades](#-funcionalidades)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
  - [📂 Índice do Projeto](#-índice-do-projeto)
- [🚀 Começando](#-começando)
  - [☑️ Pré-requisitos](#-pré-requisitos)
  - [⚙️ Instalação](#-instalação)
  - [🤖 Uso](#🤖-uso)
  - [🧪 Testes](#🧪-testes)
- [📌 Roteiro do Projeto](#-roteiro-do-projeto)
- [🎗 Licença](#-licença)

---

## 📍 Visão Geral

Este projeto é um CRM (Customer Relationship Management) simples, mas poderoso, projetado para ajudar a gerenciar e organizar informações salas e atividades. O sistema é composto por um backend em TypeScript com Node.js, utilizando Prisma para o acesso ao banco de dados, e um frontend desenvolvido com Next.js e React.

O CRM permite o gerenciamento de cadastros de salas e atividades por professores, oferecendo uma interface amigável para realizar as principais operações CRUD (Create, Read, Update, Delete).

---

## 👾 Funcionalidades

O CRM oferece as seguintes funcionalidades:

- **Gerenciamento de Salas:**
  - Listar todas as Salas.
  - Criar novas salas, associando-as a um professor específico.
  - Visualizar detalhes de uma sala específica.
  - Editar salas existentes.
- **Gerenciamento de Atividades:**
  - Listar atividades cadastradas.
  - Criar novas atividades, associando-as a turmas específicas.
  - Visualizar detalhes de uma atividade específica.
  - Editar atividades existentes.
- **Autenticação:**
  - Sistema de login para garantir o acesso seguro ao sistema.
- **Responsividade:**
  - Interface adaptada para diferentes tamanhos de tela, proporcionando uma experiência consistente em desktops e dispositivos móveis.
- **Testes:**
  - Testes unitários e de integração abrangentes para garantir a qualidade e confiabilidade do sistema.

---

## 📁 Estrutura do Projeto

```sh
└── crm/
    ├── backend
    │   ├── .gitignore
    │   ├── .nvmrc
    │   ├── diagrams
    │   ├── jest.config.ts
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── prisma
    │   ├── src
    │   └── tsconfig.json
    ├── frontend
    │   ├── .gitignore
    │   ├── .nvmrc
    │   ├── .vscode
    │   ├── README.md
    │   ├── eslint.config.mjs
    │   ├── next.config.ts
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── public
    │   ├── src
    │   └── tsconfig.json
    └── readme.md
```

### 📂 Índice do Projeto

<details open>
	<summary><b><code>CRM/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/package-lock.json'>package-lock.json</a></b></td>
				<td>Arquivo de lock das dependências do npm. Garante que as mesmas versões das dependências sejam utilizadas em diferentes instalações.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Arquivo de configuração do TypeScript para o backend. Define as opções de compilação do TypeScript.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/jest.config.ts'>jest.config.ts</a></b></td>
				<td>Arquivo de configuração do Jest, o framework de testes utilizado no projeto.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/package.json'>package.json</a></b></td>
				<td>Arquivo que contém informações sobre o projeto, suas dependências e scripts para execução e desenvolvimento.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/.nvmrc'>.nvmrc</a></b></td>
				<td>Arquivo que especifica a versão do Node.js que deve ser utilizada para o desenvolvimento do projeto.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/server.ts'>server.ts</a></b></td>
						<td>Ponto de entrada do backend. Configura o servidor express e inicializa as rotas e middleware.</td>
					</tr>
					</table>
					<details>
						<summary><b>types</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/types/classroom.types.ts'>classroom.types.ts</a></b></td>
								<td>Definições de tipos relacionados a turmas. Define as interfaces e tipos de dados das turmas.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/types/activity.types.ts'>activity.types.ts</a></b></td>
								<td>Definições de tipos relacionados a atividades. Define as interfaces e tipos de dados das atividades.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/types/professor.types.ts'>professor.types.ts</a></b></td>
								<td>Definições de tipos relacionados a professores. Define as interfaces e tipos de dados dos professores.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/types/auth.types.ts'>auth.types.ts</a></b></td>
								<td>Definições de tipos relacionados a autenticação. Define as interfaces e tipos de dados da autenticação.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>controllers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/activity.test.ts'>activity.test.ts</a></b></td>
								<td>Testes para as funções do controller de atividades. Garante que as operações de atividades funcionem corretamente.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/classroom.test.ts'>classroom.test.ts</a></b></td>
								<td>Testes para as funções do controller de salas. Garante que as operações de salas funcionem corretamente.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/auth.test.ts'>auth.test.ts</a></b></td>
								<td>Testes para as funções do controller de autenticação. Garante que as operações de autenticação funcionem corretamente.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/professor.controller.ts'>professor.controller.ts</a></b></td>
								<td>Controller responsável por lidar com as operações relacionadas a professores (ex: criar, listar).</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/classroom.controller.ts'>classroom.controller.ts</a></b></td>
								<td>Controller responsável por lidar com as operações relacionadas a salas (ex: criar, listar, editar).</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/activity.controller.ts'>activity.controller.ts</a></b></td>
								<td>Controller responsável por lidar com as operações relacionadas a atividades (ex: criar, listar, editar).</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/professor.test.ts'>professor.test.ts</a></b></td>
								<td>Testes para as funções do controller de professores. Garante que as operações de professores funcionem corretamente.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/controllers/auth.controller.ts'>auth.controller.ts</a></b></td>
								<td>Controller responsável por lidar com as operações relacionadas a autenticação (ex: login).</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/activity.test.ts'>activity.test.ts</a></b></td>
								<td>Testes para as rotas de atividades. Garante que as rotas de atividades estejam funcionando corretamente.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/classroom.route.ts'>classroom.route.ts</a></b></td>
								<td>Rotas do backend responsáveis por lidar com as requisições relacionadas a salas.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/classroom.test.ts'>classroom.test.ts</a></b></td>
								<td>Testes para as rotas de salas. Garante que as rotas de salas estejam funcionando corretamente.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/professor.route.ts'>professor.route.ts</a></b></td>
								<td>Rotas do backend responsáveis por lidar com as requisições relacionadas a professores.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/auth.test.ts'>auth.test.ts</a></b></td>
								<td>Testes para as rotas de autenticação. Garante que as rotas de autenticação estejam funcionando corretamente.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/activity.route.ts'>activity.route.ts</a></b></td>
								<td>Rotas do backend responsáveis por lidar com as requisições relacionadas a atividades.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/index.ts'>index.ts</a></b></td>
								<td>Arquivo que define o ponto de entrada das rotas do backend, agrupando todas as rotas da aplicação.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/auth.route.ts'>auth.route.ts</a></b></td>
								<td>Rotas do backend responsáveis por lidar com as requisições relacionadas a autenticação.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/src/routes/professor.test.ts'>professor.test.ts</a></b></td>
								<td>Testes para as rotas de professores. Garante que as rotas de professores estejam funcionando corretamente.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>prisma</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/prisma/schema.prisma'>schema.prisma</a></b></td>
						<td>Schema do Prisma que define o modelo de dados e a estrutura do banco de dados.</td>
					</tr>
					</table>
					<details>
						<summary><b>migrations</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/prisma/migrations/migration_lock.toml'>migration_lock.toml</a></b></td>
								<td>Arquivo de lock para as migrações do Prisma, garantindo consistência durante o versionamento do banco de dados.</td>
							</tr>
							</table>
							<details>
								<summary><b>20250119002310_user_entity</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/prisma/migrations/20250119002310_user_entity/migration.sql'>migration.sql</a></b></td>
										<td>Arquivo SQL da migração responsável por criar a entidade de usuário no banco de dados.</td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>diagrams</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/diagrams/codeviz-diagram-2025-01-20T18-00-10.drawio'>codeviz-diagram-2025-01-20T18-00-10.drawio</a></b></td>
						<td>Diagrama do projeto, criado com Draw.io, apresentando a arquitetura e fluxo do backend.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/AriReboucas/crm/blob/master/backend/diagrams/codeviz-diagram-2025-01-20T18-00-10.drawio:Zone.Identifier'>codeviz-diagram-2025-01-20T18-00-10.drawio:Zone.Identifier</a></b></td>
						<td>Identificador de zona para o diagrama do Draw.io.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/package-lock.json'>package-lock.json</a></b></td>
				<td>Arquivo de lock das dependências do npm. Garante que as mesmas versões das dependências sejam utilizadas em diferentes instalações.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/next.config.ts'>next.config.ts</a></b></td>
				<td>Arquivo de configuração do Next.js para o frontend. Define as opções de compilação e outras configurações do Next.js.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/tsconfig.json'>tsconfig.json</a></b></td>
				<td>Arquivo de configuração do TypeScript para o frontend. Define as opções de compilação do TypeScript.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				<td>Arquivo de configuração do ESLint para o frontend. Define as regras de lint para o código.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/package.json'>package.json</a></b></td>
				<td>Arquivo que contém informações sobre o projeto, suas dependências e scripts para execução e desenvolvimento.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/.nvmrc'>.nvmrc</a></b></td>
				<td>Arquivo que especifica a versão do Node.js que deve ser utilizada para o desenvolvimento do projeto.</td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/theme.ts'>theme.ts</a></b></td>
						<td>Configura o tema da aplicação, utilizando a biblioteca Material UI para personalização de estilos.</td>
					</tr>
					</table>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/utils/api.ts'>api.ts</a></b></td>
								<td>Utilitário para facilitar as chamadas à API do backend. Centraliza a configuração do Axios.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>services</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/services/activity.service.ts'>activity.service.ts</a></b></td>
								<td>Serviço responsável por lidar com as requisições da API relacionadas a atividades.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/services/auth.service.ts'>auth.service.ts</a></b></td>
								<td>Serviço responsável por lidar com as requisições da API relacionadas a autenticação.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/services/classroom.service.ts'>classroom.service.ts</a></b></td>
								<td>Serviço responsável por lidar com as requisições da API relacionadas a turmas.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>app</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/page.module.css'>page.module.css</a></b></td>
								<td>Folha de estilo CSS para a página principal do frontend.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/layout.tsx'>layout.tsx</a></b></td>
								<td>Layout principal da aplicação. Define a estrutura base das páginas do frontend.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/globals.css'>globals.css</a></b></td>
								<td>Estilos CSS globais da aplicação.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/page.tsx'>page.tsx</a></b></td>
								<td>Página principal da aplicação. Apresenta informações sobre a funcionalidade do sistema.</td>
							</tr>
							</table>
							<details>
								<summary><b>classrooms</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/classrooms/page.tsx'>page.tsx</a></b></td>
										<td>Página que lista todas as salas cadastradas no sistema.</td>
									</tr>
									</table>
									<details>
										<summary><b>[id]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/classrooms/[id]/page.tsx'>page.tsx</a></b></td>
												<td>Página que exibe detalhes de uma sala específica, utilizando o ID como parâmetro da rota.</td>
											</tr>
											</table>
											<details>
												<summary><b>edit</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/classrooms/[id]/edit/page.tsx'>page.tsx</a></b></td>
														<td>Página para edição de uma sala específica, utilizando o ID como parâmetro da rota.</td>
													</tr>
													</table>
												</blockquote>
											</details>
											<details>
												<summary><b>activity</b></summary>
												<blockquote>
													<details>
														<summary><b>new</b></summary>
														<blockquote>
															<table>
															<tr>
																<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/classrooms/[id]/activity/new/page.tsx'>page.tsx</a></b></td>
																<td>Página para criar uma nova atividade para uma sala específica, utilizando o ID da sala como parâmetro da rota.</td>
															</tr>
															</table>
														</blockquote>
													</details>
												</blockquote>
											</details>
										</blockquote>
									</details>
									<details>
										<summary><b>new</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/classrooms/new/page.tsx'>page.tsx</a></b></td>
												<td>Página para criar uma nova sala.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
							<details>
								<summary><b>login</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/login/page.tsx'>page.tsx</a></b></td>
										<td>Página de login do sistema.</td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>activity</b></summary>
								<blockquote>
									<details>
										<summary><b>[id]</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/activity/[id]/page.tsx'>page.tsx</a></b></td>
												<td>Página que exibe detalhes de uma atividade específica, utilizando o ID como parâmetro da rota.</td>
											</tr>
											</table>
											<details>
												<summary><b>edit</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/AriReboucas/crm/blob/master/frontend/src/app/activity/[id]/edit/page.tsx'>page.tsx</a></b></td>
														<td>Página para edição de uma atividade específica, utilizando o ID como parâmetro da rota.</td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Começando

### ☑️ Pré-requisitos

Antes de começar a usar o CRM - Extra Homework, verifique se o seu ambiente de desenvolvimento atende aos seguintes requisitos:

- **Linguagem de Programação:** TypeScript
- **Gerenciador de Pacotes:** Npm

### ⚙️ Instalação

Instale o CRM utilizando um dos seguintes métodos:

**Construir a partir do código-fonte:**

1. Clone o repositório do CRM:

```sh
❯ git clone https://github.com/AriReboucas/crm
```

### 🤖 Uso

Execute o CRM usando os seguintes comandos:

**Para iniciar o backend:**

1.  Navegue até o diretório `backend`:
    ```sh
    ❯ cd backend
    ```
2.  Execute o script `start` com npm:
    ```sh
    ❯ npm run start
    ```

**Para iniciar o frontend:**

1. Navegue até o diretório `frontend`:
   ```sh
   ❯ cd frontend
   ```
2. Execute o script `dev` com npm:
   ```sh
    ❯ npm run dev
   ```

**Observação:** Certifique-se de que o backend esteja rodando antes de iniciar o frontend.

### 🧪 Testes

Execute a suíte de testes usando os seguintes comandos:

**Para o backend:**

1. Navegue até o diretório `backend`:
   ```sh
   ❯ cd backend
   ```
2. Execute o script `test` com npm:
   ```sh
   ❯ npm test
   ```

**Para o frontend:**

1. Navegue até o diretório `frontend`:
   ```sh
   ❯ cd frontend
   ```
2. Execute o script `test` com npm:
   ```sh
   ❯ npm run cy:open
   ```

---

## 📌 Roteiro do Projeto

- [x] Implementação do backend com Node.js e Prisma.
- [x] Criação das rotas e controllers para professores, salas e atividades.
- [x] Desenvolvimento do frontend com Next.js e React.
- [x] Criação de formulários para cadastro e edição de dados.
- [x] Autenticação de usuários.
- [x] Implementação de testes de interface no frontend.
- [x] Melhorias na interface do usuário.

---

## 🎗 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](https://github.com/AriReboucas/crm/blob/master/LICENSE) para obter mais informações.
