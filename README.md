## Projeto: Rádio Popular

### Teste Automatizado: Verificação de Funcionalidade do Cadastro

### Objetivo
O objetivo deste teste é verificar se o processo de registro de novos usuários no sistema funciona corretamente, conforme os requisitos definidos. Esse caso de teste visa assegurar que todos os campos obrigatórios sejam preenchidos adequadamente, que as validações de entrada sejam aplicadas corretamente (como formato de e-mail, tamanho de senha, etc.), e que o sistema responda de maneira apropriada em situações normais e excepcionais.

### Escopo
- Página: https://www.radiopopular.pt/
- Navegadores: Chrome Versão 125.0.6422.176 (x64 bits)
- Dispositivos: Desktop
- Sistema Operacional: Windows 10
- Ferramenta de Teste: Selenium Webdriver

### Pré-condições
1. O ambiente de teste deve estar configurado e acessível.
2. Selenium Webdriver deve estar instalado e configurado no projeto.

### Para a execução do teste:
Execute o Selenium: clicar no RUN (Para o teste Positivo)

Execute o Selenium: npx mocha --no-timeouts "test/cadastroNegativo.js" (Para o teste Negativo)

### Notas
- Em caso de falha, adicione comentários detalhados sobre o erro encontrado.
- Anexe capturas de tela, se necessário.

### Status
- **Data do Teste:** 01/08/2024
- **Testador:** Thierry Castro
