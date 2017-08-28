# O STORYBOOK
##Ambiente de desenvolvimento de componentes para o ReacJS
```
YARN RUN STORYBOOK
```
```
https://github.com/storybooks/storybook/tree/master/app/react
ARQUIVO DE CONFIGURAÇÃO - em stories/index.js
```
##Sempre que desenvolver um componente, utilizar esta ferramenta e aplicar testes unitários.


#STYLED COMPONENTS
## Os estilos dos componentes são atribuídos através do styled-components
```
DOCUMENTAÇÃO:
https://www.styled-components.com/
```

#ESTRUTURA DE PASTAS:

 ```
.storybook                      #STORYBOOK CONFIG
│
└───src
│   └───actions                 #AÇÕES DO REDUX                
|   └───assets                  #FOOTAGE/ASSETS
|   └───components    
|        └───atoms              #MENORES PARTES DE TODOS OS COMPONENTES    
|        └───molecules          #COMBINACOES DE ATOMS  
|        └───organisms          #COMBINACOES DE MOLECULES  
|        └───styles             #COMBINACOES DE ESTILOS PARA O STYLED-COMPONENTS
|       
|   └───config                  #CONFIGURACAO DO REDUX
|   └───containers              #DEVTOOLZ PARA O REDUX
|   └───middleware              #API DE MIDDLEWARE DE REDUX DA OI
|   └───pages                   #PÁGINAS
|   └───reducers                #REDUX REDUCER
|   └───store                   #REDUX STORE
|
└─── App.js                     #COMPONENTE PRINCIPAL DO SERVER SIDE
└─── Template.js                #COMPONENTE PRINCIPAL DO CLIENT SIDE
└─── index.js                   #MAIN INDEX
└─── routes.js                  #ROTAS NO SERVER SIDE
└─── ss_routes.js               #ROTAS NO CLIENT SIDE
```


# Gerador de páginas estáticas da OI


## STACK DE DESENVOLVIMENTO

```
REACT

REDUX

STYLEDCOMPONENTS

STATICFILESGENERATOR

STORYBOOK
```


# Rodando o projeto

## DEV

    yarn install
    yarn run dev

## PASTA DIST = ARQUIVOS FINAIS
