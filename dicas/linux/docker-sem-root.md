# Docker Rootless <h1>

A maior parte da documentação sobre docker por aí, [incluindo a oficial](https://docs.docker.com/engine/install/linux-postinstall/) , indica que para usá-lo sem "sudo", basta criar um grupo docker, e se adicionar a ele; só que, fazendo isso, significa somente que o usuário não está digitando sudo a cada comando, mas que ainda assim o docker é executado com privilégios elevados. Na própria documentação, são elencados perigos dessa conduta, e também o link para o **Docker-Rootless**

# Instalação <h2>

Antes de prosseguir, [verifique a documentação oficial](https://docs.docker.com/engine/security/rootless/). Essa deve ser sua primeira opção. Este documento pode não estar completamente atualizado quando você estiver lendo isso.

Em 12 de julho de 2022, segundo a documentação oficial, executar o comando abaixo, seguido de uma edição no arquivo de configuração do shell e um reinício do sistema garantiam o pleno funcionamento do Docker-Rootless na maior parte das distribuições:

    sudo touch /etc/subuid && sudo touch /etc/subgid && sudo usermod --add-subuids 165536-231072 --add-subgids 165536-231072 $USER && echo "kernel.unprivileged_userns_clone=1" | sudo tee /etc/sysctl.conf && curl -fsSL https://get.docker.com/rootless | sh

Ao final do último comando, serão apresentadas duas váriaveis de ambiente que devem ser adicionadas ao arquivo de configuração do shell do usuário.
 
 **Um profissional cuidadoso começa em hábitos seguros de utilização da própria máquina;** [leia a documentação oficial](https://docs.docker.com/engine/security/rootless/) **, ela explicará a finalidade de cada comando**

Para o docker-compose basta:

    curl -o ~/bin/docker-compose -L https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 && chmod a+x ~/bin/docker-compose

# Atualização <h3>

Até a presente data, o [Docker-Rootless](https://docs.docker.com/engine/security/rootless/) instalado via scritp oficial (como documentado aqui), não possui uma função de atualização. Felizmente, ela é possível simplesmente parando o serviço, removendo o binário principal, e reinstalando. O script abaixo pode ser colocado em um cronjob/systemd.timer **do usuário** para automatizar a atualização do docker-rootless e do docker-compose:

    #!/bin/bash
    systemctl --user stop docker
    rm -f ~/bin/dockerd
    curl -fsSL https://get.docker.com/rootless | sh
    curl -o ~/bin/docker-compose -L https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64
    chmod a+x ~/bin/docker-compose

# Integração com VSCode

Integrar o [Docker-Rootless](https://docs.docker.com/engine/security/rootless/) com a extensão Docker no VSCode é simples:

Em Configurações>Extensão>Docker, no campo Docker:Docker Path, adicione o caminho do binário do docker na sua home. Expansão de variável não é suportada, coloque o caminho inteiro, isto é, /home/seu_usuário/bin/docker .

Em Configurações>Extensão>Docker, no campo Docker:Compose Command, adicione o caminho do binário do docker-compose na sua home. Expansão de variável não é suportada, coloque o caminho inteiro, isto é, /home/seu_usuário/bin/docker-compose .

Se você usar o VSCode em formato Flatpak, uma etapa adicional é necessária:
Descubra seu id de usuário com:

    id -u $USER

Verifique, através do comando flatpak list, se o VSCode está instalado como user ou como system.

Se ele estiver instalado como user, execute:

    flatpak override --user --filesystem=/run/user/SEU_ID/docker.sock com.visualstudio.code

Se ele estiver instalado como system, execute:
    
    sudo flatpak override --filesystem=/run/user/SEU_ID/docker.sock com.visualstudio.code

Feche e reabra o VSCode.
