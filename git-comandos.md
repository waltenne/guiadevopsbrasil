ls (Listar as pastas)  <br>
cd .. (voltar um diretório) <br>
CD: <br>
dir / tree /f (ver o que tem dentro da pasta) <br>
mkdir (nome da pasta) - criar novos diretórios/pastas <br>
git status (Verifica o status do repositório) <br>
git add -A (Trackear o que não foi trackeado, inserir tudo) <br>
git commit -m (Para commitar) / git commit -am <br>
Diferença do commit -m para o git commit -am <br> 
git log (lista de commits) <br> 
git reset (--soft / --mixed / --hard) <br>
git checkout (Mudar a branch atual) <br> 
git diff (Checar o que houve nas alterações) / git diff --name-only / git diff //nome do arquivo// (vê apenas a alteração feita naquele arquivo) <br>
git checkout HEAD -- "diff" //nome do arquivo// (retroceder até a posição) <br>
git push origin <br>
git pull origin <br>
git clone <br>

# Configurações iniciais do Git

# Baixando e instalando o Git
Site para instalar o Git

# Configura nome de usuário:
git config --global user.name

# Configura email de usuário:
git config --global user.email email@email.com.br

# Inicializando um repositório

# Inicializa o versionamento no respectivo diretório:
git init

# Comandos básicos para sobreviver:

# Verificando o status do repositório:
git status

# Adicionando todos os arquivos para serem commitados:
git add . / git add -A

# Commitando arquivos:
git commit -m "inserir um comentário significativo"

# Visualizando relatório de commits:
git log // todos os commits
git log --oneline // exibe log com hash e título do commit

# Adicionando um repositório remoto:
git remote add origin https://github.com/User/Repository.git

#Enviando as modificações para o repositório remoto:
git push origin

# Puxando alterações do repositório remoto:
git pull origin

# Trabalhando com branches:
git checkout -b nome-branch

#Aplicando merge em branches:
git merge nome-branch // precisa estar na branch de destino

# Visualizando todas as branches existentes no repositório:
git branch

# Deletando uma branch local:
git branch -D nome-branch
git branch -d nome-branch

#Deletando uma branch remota:
git push origin :nome-branch

# Deletando todas branch que não se encontram no repositório remoto:
git branch --merged ##
git branch -r | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin | grep -v "master") | xargs git branch -d

# Deletando todos branches no repositório local (exceto a master):
git branch | grep -v "master" | xargs git branch -D
