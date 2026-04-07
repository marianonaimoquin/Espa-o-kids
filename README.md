# 🎉 Espacio Kids — App de Reservas

App mobile para festas de aniversário infantil do **Espacio Kids**.

---

## 📁 Estrutura do projeto

```
espaciokids-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx       ← TODO o código do app está aqui
│   └── index.js
├── package.json
├── vercel.json
└── README.md
```

---

## 🚀 Como publicar no Vercel (grátis, 5 minutos)

### Passo 1 — Criar conta
- Acesse [vercel.com](https://vercel.com) e crie uma conta gratuita com o Google

### Passo 2 — Subir o código no GitHub
- Crie uma conta em [github.com](https://github.com) se não tiver
- Crie um repositório novo (pode ser privado)
- Faça upload de todos os arquivos desta pasta

### Passo 3 — Conectar ao Vercel
- No Vercel, clique em **"Add New Project"**
- Selecione o repositório do GitHub
- Clique em **"Deploy"**
- Pronto! Em ~2 minutos o app estará no ar

### Passo 4 — Domínio personalizado (opcional)
- No Vercel você pode adicionar um domínio próprio como `espaciokids.com.br`
- Ou usar o link gratuito gerado: `espaciokids.vercel.app`

---

## 💻 Como rodar localmente (para testar)

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm start

# Gerar versão de produção
npm run build
```

---

## 📱 Funcionalidades do app

- **Início** — Apresentação do espaço
- **Pacotes** — Básico e Festa com preços Seg-Sex e Fim de semana
- **Galeria** — Tour com fotos reais do espaço
- **Reservar** — Formulário que abre o WhatsApp com mensagem pronta + valor da sinal
- **Contato** — WhatsApp, endereço e e-mail
- **Admin** — Painel para ver reservas (senha: 1234)

---

## 🔧 Informações de contato configuradas

- **WhatsApp:** (48) 99803-2906
- **E-mail:** espaciokids@gmail.com
- **Endereço:** Rodovia João Gualberto Soares 909, dentro do Vila Futuro Lounge

---

## 📝 Notas para o desenvolvedor

- O app é feito em **React 18**
- Não usa nenhuma biblioteca externa além do React
- As imagens estão embutidas no código em base64 (não precisa de servidor de imagens)
- O WhatsApp já está configurado com o número **(48) 99803-2906**
- A senha do admin é `1234` — pode ser alterada na função `handleAdminLogin` dentro do `App.jsx`
