import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should()

describe("Cadastros Negativos", function() {
  it("TC001.002 - Cadastro sem preenchimentos", async function() {
  //DADO que o usuário abra o navegador
  let driver = await new Builder().forBrowser("chrome").build()
  //E navegue até o site
  await driver.get("https://www.radiopopular.pt/")
  await sleep (1000)

  //E clique no botão "aceitar" do cookie
  await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 

  //E clique no ícone de usuário
  await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()

  //E clique no botão "Criar uma conta"
  await driver.findElement(By.id("submitcliente")).click()

  //E acessar a página "Registo" (assertion)
  let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
  .then(function(value) {
    return value
  })

  //QUANDO o usuário não preenche nenhum campo
  
  //E clica no botão "Criar Conta"
  await driver.findElement(By.id("enviar")).click()

 //Então o usuário não acessa a página "Registo Concluído" (assertion) 
 let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
 .then(function(value) {
   return value
 })
  
  //Fechar o navegador
  await driver.quit()
  })


  it("TC001.003 - Cadastro com e-mail sem @", async function() {
  //DADO que o usuário abra o navegador
  let driver = await new Builder().forBrowser("chrome").build()
  //E navegue até o site
  await driver.get("https://www.radiopopular.pt/")
  await sleep (1000)

  //E clique no botão "aceitar" do cookie
  await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 

  //E clique no ícone de usuário
  await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()

  //E clique no botão "Criar uma conta"
  await driver.findElement(By.id("submitcliente")).click()

  //E acessar a página "Registo" (assertion)
  let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
  .then(function(value) {
    return value
  })

  //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
  await driver.findElement(By.id("email")).sendKeys("worktests456gmail.com", Key.RETURN)
  
  //E preenche o campo "Palavra-passe"
  await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
  let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
  .then(function(value) {
      return value
  }) 

  //E preenche o campo "Confirmar Palavra-passe"
  await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
  let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
  .then(function(value) {
    return value
  })

  //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
  await driver.findElement(By.id("generoM")).click()
  await sleep (1000)

  //E preenche o campo "Nome" 
  await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
  let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
  .then(function(value) {
    return value
  })

  //E preenche o campo "Data de Nascimento"
  await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
  let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
  .then(function(value) {
    return value
  })

  //E preenche o campo "identificação fiscal"
  await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
  let nifText = await driver.findElement(By.id("nif")).getText()
  .then(function(value) {
    return value
  })

  //E seleciona no campo "País"
  await driver.findElement(By.id("cliente_pais")).click()

  //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
  await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
  let cp4Text = await driver.findElement(By.id("cp4")).getText()
  .then(function(value) {
    return value
  })

  await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
  let cp3Text = await driver.findElement(By.id("cp3")).getText()
  .then(function(value) {
    return value
  })
  await sleep (1000)

  //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
  let ruaText = await driver.findElement(By.id("rua")).getText()
  .then(function(value) {
    return value
  })

  //E preenche o campo "Porta / Andar"
  await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
  let portaText = await driver.findElement(By.id("porta")).getText()
  .then(function(value) {
    return value
  })

  //E preenche o campo "Localidade"
  await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
  let localidadeText = await driver.findElement(By.id("localidade")).getText()
  .then(function(value) {
    return value
  })

  //E preenche o campo "Contacto"
  await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
  let contactoText = await driver.findElement(By.id("contacto")).getText()
  .then(function(value) {
    return value
  })
  await sleep (1000)

  //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
  await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()

  //E não preenche o quadro "Reembolso por Transferência Bancária"

  //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
  //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
  //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
  //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
  //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
  await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()

  //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
  await driver.findElement(By.id("aceito_termos")).click()

  //E clica no botão "Criar Conta"
  await driver.findElement(By.id("enviar")).click()

  //Então o usuário não acessa a página "Registo Concluído" (assertion) 
  let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
  .then(function(value) {
    return value
  })
  
  //Fechar o navegador
  await driver.quit()
  })


  it("TC001.004 - Cadastro com senha contendo 7 caracteres", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)

    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 

    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()

    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()

    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
 
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail"
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
      
    //E preenche o campo "Palavra-passe" com 7 caracteres
    await driver.findElement(By.id("password")).sendKeys("Testest", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
       return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe" com 7 caracteres
    await driver.findElement(By.id("password_rep")).sendKeys("Testest", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
     return value
    })
    
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
       return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
        return value
    })
    
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
        return value
    })
    
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)

    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()

    //E não preenche o quadro "Reembolso por Transferência Bancária"

    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()

    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()

    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
        return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })


  it("TC001.005 - Cadastro com a data de nascimento incompleta", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)

    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 

    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()

    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()

    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
 
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail"
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
      
    //E preenche o campo "Palavra-passe" com 7 caracteres
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho345", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
       return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe" com 7 caracteres
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho345", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
     return value
    })
    
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
       return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
        return value
    })
    
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
        return value
    })
    
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)

    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()

    //E não preenche o quadro "Reembolso por Transferência Bancária"

    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()

    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()

    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
        return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })


  it("TC001.006 - Cadastro sem identificação fiscal", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)

    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 

    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()

    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()

    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
 
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail"
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
      
    //E preenche o campo "Palavra-passe" com 7 caracteres
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho345", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
       return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe" com 7 caracteres
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho345", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
     return value
    })
    
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
       return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
        return value
    })
    
    //E não preenche o campo "identificação fiscal"
        
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)

    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
    
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()

    //E não preenche o quadro "Reembolso por Transferência Bancária"

    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()

    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()

    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
        return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })


  it("TC001.007 - Cadastro sem código postal", async function() {
   //DADO que o usuário abra o navegador
   let driver = await new Builder().forBrowser("chrome").build()
   //E navegue até o site
   await driver.get("https://www.radiopopular.pt/")
   await sleep (1000)
 
   //E clique no botão "aceitar" do cookie
   await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
 
   //E clique no ícone de usuário
   await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
 
   //E clique no botão "Criar uma conta"
   await driver.findElement(By.id("submitcliente")).click()
 
   //E acessar a página "Registo" (assertion)
   let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
   .then(function(value) {
     return value
   })
 
   //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
   await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
   
   //E preenche o campo "Palavra-passe"
   await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
   let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
   .then(function(value) {
       return value
   }) 
 
   //E preenche o campo "Confirmar Palavra-passe"
   await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
   let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
   .then(function(value) {
     return value
   })
 
   //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
   await driver.findElement(By.id("generoM")).click()
   await sleep (1000)
 
   //E preenche o campo "Nome" 
   await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
   let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
   .then(function(value) {
     return value
   })
 
   //E preenche o campo "Data de Nascimento"
   await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
   let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
   .then(function(value) {
     return value
   })
 
   //E preenche o campo "identificação fiscal"
   await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
   let nifText = await driver.findElement(By.id("nif")).getText()
   .then(function(value) {
     return value
   })
 
   //E seleciona no campo "País"
   await driver.findElement(By.id("cliente_pais")).click()
 
   //E não preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    
   //E preenche o campo "Morada" 
     await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
   let ruaText = await driver.findElement(By.id("rua")).getText()
   .then(function(value) {
     return value
   })
 
   //E preenche o campo "Porta / Andar"
   await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
   let portaText = await driver.findElement(By.id("porta")).getText()
   .then(function(value) {
     return value
   })
 
   //E preenche o campo "Localidade"
   await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
   let localidadeText = await driver.findElement(By.id("localidade")).getText()
   .then(function(value) {
     return value
   })
 
   //E preenche o campo "Contacto"
   await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
   let contactoText = await driver.findElement(By.id("contacto")).getText()
   .then(function(value) {
     return value
   })
   await sleep (1000)
 
   //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
   await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()
 
   //E não preenche o quadro "Reembolso por Transferência Bancária"
 
   //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
   //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
   //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
   //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
   //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
   await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()
 
   //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
   await driver.findElement(By.id("aceito_termos")).click()
 
   //E clica no botão "Criar Conta"
   await driver.findElement(By.id("enviar")).click()
 
   //Então o usuário não acessa a página "Registo Concluído" (assertion) 
   let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
   .then(function(value) {
     return value
   })
   
   //Fechar o navegador
   await driver.quit()
  })


  it("TC001.008 - Cadastro sem morada", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()
  
    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
  
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
    
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
        return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe"
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E não preenche o campo "Morada" 
      
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()
  
    //E não preenche o quadro "Reembolso por Transferência Bancária"
  
    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()
  
    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()
  
    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })


  it("TC001.009 - Cadastro sem Porta/Andar", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()
  
    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
  
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
    
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
        return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe"
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
  
    //E não preenche o campo "Porta / Andar"
      
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()
  
    //E não preenche o quadro "Reembolso por Transferência Bancária"
  
    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()
  
    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()
  
    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })


  it("TC001.010 - Cadastro sem localidade", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()
  
    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
  
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
    
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
        return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe"
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
  
    //E não preenche o campo "Localidade"
      
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()
  
    //E não preenche o quadro "Reembolso por Transferência Bancária"
  
    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()
  
    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()
  
    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })


  it("TC001.011 - Cadastro sem contacto", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()
  
    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
  
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
    
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
        return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe"
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
  
    //E não preenche o campo "Contacto"
      
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()
  
    //E não preenche o quadro "Reembolso por Transferência Bancária"
  
    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()
  
    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()
  
    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })


  it("TC001.012 - Cadastro sem proteção de dados", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()
  
    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
  
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
    
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
        return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe"
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()
  
    //E não preenche o quadro "Reembolso por Transferência Bancária"
  
    //E não preenche nada no quadro "Proteção de Dados"    
  
    //E seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
    await driver.findElement(By.id("aceito_termos")).click()
  
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()
  
    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })

  
  it("TC001.013 - Cadastro sem Termos e Política de privacidade", async function() {
    //DADO que o usuário abra o navegador
    let driver = await new Builder().forBrowser("chrome").build()
    //E navegue até o site
    await driver.get("https://www.radiopopular.pt/")
    await sleep (1000)
  
    //E clique no botão "aceitar" do cookie
    await driver.findElement(By.xpath("/html/body/div[5]/div/div/div[2]/div[2]/div[2]/div[1]/button")).click() 
  
    //E clique no ícone de usuário
    await driver.findElement(By.xpath("/html/body/header/div[4]/div/div[4]/ul/li[3]")).click()
  
    //E clique no botão "Criar uma conta"
    await driver.findElement(By.id("submitcliente")).click()
  
    //E acessar a página "Registo" (assertion)
    let registo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/div/h1")).getText()
    .then(function(value) {
      return value
    })
  
    //QUANDO o usuário preenche no quadro de Identificação, o campo "Endereço de E-mail" sem @
    await driver.findElement(By.id("email")).sendKeys("worktests456@gmail.com", Key.RETURN)
    
    //E preenche o campo "Palavra-passe"
    await driver.findElement(By.id("password")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/div[3]/input")).getText()
    .then(function(value) {
        return value
    }) 
  
    //E preenche o campo "Confirmar Palavra-passe"
    await driver.findElement(By.id("password_rep")).sendKeys("Testestrabalho456", Key.RETURN)
    let passwordrepText = await driver.findElement(By.id("password_rep")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no quadro de Dados Pessoais, o campo "Sexo"
    await driver.findElement(By.id("generoM")).click()
    await sleep (1000)
  
    //E preenche o campo "Nome" 
    await driver.findElement(By.id("nome_individuo")).sendKeys("Testes Trabalho", Key.RETURN)
    let nomeText = await driver.findElement(By.id("nome_individuo")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Data de Nascimento"
    await driver.findElement(By.id("data_nascimento")).sendKeys("01-01-1991", Key.RETURN)
    let nascimentoText = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[4]/div[2]/div[2]/input")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "identificação fiscal"
    await driver.findElement(By.id("nif")).sendKeys("236305468", Key.RETURN)
    let nifText = await driver.findElement(By.id("nif")).getText()
    .then(function(value) {
      return value
    })
  
    //E seleciona no campo "País"
    await driver.findElement(By.id("cliente_pais")).click()
  
    //E preenche no quadro de Morada e Facturação, o campo "Código-Postal"
    await driver.findElement(By.id("cp4")).sendKeys("4700", Key.RETURN)
    let cp4Text = await driver.findElement(By.id("cp4")).getText()
    .then(function(value) {
      return value
    })
  
    await driver.findElement(By.id("cp3")).sendKeys("116", Key.RETURN)
    let cp3Text = await driver.findElement(By.id("cp3")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche o campo "Morada" 
    await driver.findElement(By.id("rua")).sendKeys("Rua do Cruzeiro", Key.RETURN)
    let ruaText = await driver.findElement(By.id("rua")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Porta / Andar"
    await driver.findElement(By.id("porta")).sendKeys("497", Key.RETURN)
    let portaText = await driver.findElement(By.id("porta")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Localidade"
    await driver.findElement(By.id("localidade")).sendKeys("Braga", Key.RETURN)
    let localidadeText = await driver.findElement(By.id("localidade")).getText()
    .then(function(value) {
      return value
    })
  
    //E preenche o campo "Contacto"
    await driver.findElement(By.id("contacto")).sendKeys("931429440", Key.RETURN)
    let contactoText = await driver.findElement(By.id("contacto")).getText()
    .then(function(value) {
      return value
    })
    await sleep (1000)
  
    //E preenche no quadro "Morada de Entrega", com a opção "Preencher mais tarde através da minha conta cliente."
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[8]/div[3]/input")).click()
  
    //E não preenche o quadro "Reembolso por Transferência Bancária"
  
    //E seleciona no quadro "Proteção de Dados", a 1ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 2ª mensagem com "Não"
    //E seleciona no quadro "Proteção de Dados", a 3ª mensagem com "Não"
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 1ª mensagem
    //E seleciona automaticamente no quadro inferior de "Proteção de Dados", a 2ª mensagem
    await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[13]/section/div[1]/label[2]/div")).click()
  
    //E não seleciona a mensagem "Li e aceito os Termos e Condições e Política de Privacidade e Direito à Informação do Titular dos Dados
     
    //E clica no botão "Criar Conta"
    await driver.findElement(By.id("enviar")).click()
  
    //Então o usuário não acessa a página "Registo Concluído" (assertion) 
    let preenchaCampo = await driver.findElement(By.xpath("/html/body/main/div/div[2]/form/div[2]/em")).getText()
    .then(function(value) {
      return value
    })
    
    //Fechar o navegador
    await driver.quit()
  })



  function sleep(ms){
    return new Promise (resolve =>setTimeout(resolve, ms));
  }
  })

//npx mocha --no-timeouts "test/cadastroNegativo.js" (NO TERMINAL PARA RODAR O TESTE)