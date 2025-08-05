# 🎁 Amigo Secreto - Sorteador Online

Um aplicativo web simples e intuitivo para sortear amigos secretos! Perfeito para organizar suas confraternizações de fim de ano, aniversários ou qualquer ocasião especial. 🎉

## 🌟 Demonstração

🔗 **[Acesse o projeto aqui](https://ruan-pablo-oli.github.io/Challange-para-processo-da-ONE/)**

![Preview do Amigo Secreto](assets/amigo-secreto.png)

## ✨ Funcionalidades

- ➕ **Adicionar amigos**: Insira os nomes dos participantes na lista
- 📝 **Lista dinâmica**: Visualize todos os amigos adicionados em tempo real
- 🎲 **Sorteio aleatório**: Clique em "Sortear amigo" para escolher alguém da lista
- ⚡ **Interface responsiva**: Design que funciona bem em desktop e mobile
- 🎨 **Design moderno**: Interface limpa e atrativa com cores vibrantes

## 🚀 Como usar

1. **Digite o nome** de um amigo no campo de entrada
2. **Clique em "Adicionar"** para incluí-lo na lista
3. **Repita o processo** para todos os participantes
4. **Clique em "Sortear amigo"** para escolher aleatoriamente um nome da lista
5. **O resultado** aparecerá na tela! 🎊

## 🛠️ Tecnologias Utilizadas

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**: Estrutura da aplicação
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3**: Estilização e layout responsivo
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript**: Lógica de programação e interatividade

## 📁 Estrutura do Projeto

```
📦 amigo-secreto/
├── 📄 index.html          # Página principal
├── 🎨 style.css           # Estilos CSS
├── ⚙️ app.js              # Lógica JavaScript
├── 📁 assets/             # Recursos visuais
│   ├── 🖼️ amigo-secreto.png
│   └── ▶️ play_circle_outline.png
└── 📖 README.md           # Este arquivo
```

## 💻 Como executar localmente

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/Ruan-Pablo-Oli/Challange-para-processo-da-ONE.git
   ```

2. **Navegue até o diretório**:
   ```bash
   cd Challange-para-processo-da-ONE
   ```

3. **Abra o arquivo `index.html`** no seu navegador favorito ou use um servidor local:
   ```bash
   # Usando Python 3
   python -m http.server 8000
   
   # Usando Node.js (se tiver o live-server instalado)
   npx live-server
   ```

4. **Acesse** `http://localhost:8000` no seu navegador

## 🎯 Funcionalidades Técnicas

### Validações implementadas:
- ✅ Não permite adicionar nomes vazios
- ✅ Remove espaços em branco no início e fim dos nomes
- ✅ Alerta quando a lista está vazia ao tentar sortear
- ✅ Interface atualizada dinamicamente

### Algoritmo de sorteio:
- 🎲 Utiliza `Math.random()` para gerar números aleatórios
- 🔢 Converte para índice válido da lista
- 📊 Garante distribuição uniforme entre os participantes

## 🎨 Design e UX

- 🎨 **Paleta de cores moderna**: Azul primário (#4B69FD) e laranja para botões (#fe652b)
- 📱 **Design responsivo**: Funciona perfeitamente em dispositivos móveis
- 🖼️ **Elementos visuais**: Ícones intuitivos e imagens ilustrativas
- ⚡ **Feedback visual**: Alertas informativos para o usuário

## 🌐 Hospedagem e Deploy

Este projeto está hospedado no **GitHub Pages**, uma plataforma gratuita de hospedagem para sites estáticos oferecida pelo GitHub.

### 🚀 Como acessar:
- **URL do projeto**: https://ruan-pablo-oli.github.io/Challange-para-processo-da-ONE/
- **Status**: ✅ Online 24/7
- **SSL/HTTPS**: ✅ Certificado automático
- **CDN Global**: ✅ Distribuição mundial

### ⚙️ Como foi configurado:
1. **GitHub Actions**: Deploy automatizado a cada push na branch `main`
2. **Workflow personalizado**: Configurado em `.github/workflows/deploy.yml`
3. **Domínio personalizado**: Disponível gratuitamente pelo GitHub
4. **Updates automáticos**: Site atualiza automaticamente com novos commits

### 📊 Vantagens do GitHub Pages:
- 🆓 **Gratuito**: Hospedagem sem custos
- ⚡ **Rápido**: CDN global do GitHub
- 🔄 **CI/CD integrado**: Deploy automático
- 🔒 **Seguro**: HTTPS automático
- 📱 **Responsivo**: Funciona em todos os dispositivos

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Para contribuir:

1. 🍴 Faça um fork do projeto
2. 🌱 Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push para a branch (`git push origin feature/AmazingFeature`)
5. 🔄 Abra um Pull Request

## 📝 Ideias para melhorias futuras

- [ ] 💾 Salvar listas no localStorage
- [ ] 📋 Histórico de sorteios
- [ ] 🎭 Evitar repetições no sorteio
- [ ] 📧 Envio por email dos resultados
- [ ] 🎵 Efeitos sonoros
- [ ] 🌙 Modo escuro/claro
- [ ] 📱 PWA (Progressive Web App)

## 👨‍💻 Autor

**Ruan Pablo** 
- GitHub: [@Ruan-Pablo-Oli](https://github.com/Ruan-Pablo-Oli)
- LinkedIn: [Conecte-se comigo](https://linkedin.com/in/seu-perfil)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Gostou do projeto? Deixe uma estrela!** ⭐

Feito com ❤️ por [Ruan Pablo](https://github.com/Ruan-Pablo-Oli)
