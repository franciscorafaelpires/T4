# T4 - Gestão de Clientes

Este projeto consiste em uma aplicação de gestão de clientes, dividida em um backend (Spring Boot) e um frontend (React).

## Como Rodar a Aplicação

Siga os passos abaixo para configurar e rodar a aplicação em sua máquina local.

### Pré-requisitos

Certifique-se de ter o seguinte software instalado:

*   **Java Development Kit (JDK) 17 ou superior**
*   **Maven** (gerenciador de dependências do Java)
*   **Node.js** (versão 18 ou superior)
*   **npm** (gerenciador de pacotes do Node.js, geralmente vem com o Node.js)

### 1. Backend (Spring Boot)

1.  **Navegue até o diretório do backend:**
    ```bash
    cd backend/pl
    ```

2.  **Compile o projeto Maven:**
    ```bash
    mvn clean install
    ```

3.  **Execute a aplicação Spring Boot:**
    ```bash
    mvn spring-boot:run
    ```
    O backend estará rodando em `http://localhost:32831` (ou na porta configurada em `application.properties`).

### 2. Frontend (React)

1.  **Abra um novo terminal e navegue até o diretório do frontend:**
    ```bash
    cd frontend
    ```

2.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento do React:**
    ```bash
    npm run dev
    ```
    O frontend estará disponível em `http://localhost:5173` (ou na porta indicada pelo Vite).

Agora você pode acessar a aplicação no seu navegador e interagir com a interface de gestão de clientes.