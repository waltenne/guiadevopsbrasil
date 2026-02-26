/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  Introcucao: [
    {
      type: 'category',
      label: 'Introdução',
      link: {
        type: 'doc',
        id: 'introducao',
      },
      items: [],
      },
      {
        type: 'category',
      label: 'Niveis',
      link: {
        type: 'doc',
        id: 'niveis/niveis',
      },
      collapsed: true,
      items:  [
        {
          type: 'category',
          label: 'Iniciante',
          link: {
            type: 'doc',
            id: 'niveis/iniciante/iniciante',
          },
          collapsed: true,
          items: [
            "niveis/iniciante/historia_computacao",
            "niveis/iniciante/sistemas_informacao",
            "niveis/iniciante/informatica_basica",
            "niveis/iniciante/hardware",
            {
              type: 'category',
              label: 'Sistemas Operacionais',
              link: {
                type: 'doc',
                id: 'niveis/iniciante/sistemas_operacionais/sistemas_operacionais',
              },
              collapsed: true,
              items: [
                "niveis/iniciante/sistemas_operacionais/curso_sistema_operacional",
                {
                  type: 'category',
                  label: 'Windows',
                  link: {
                    type: 'doc',
                    id: 'niveis/iniciante/sistemas_operacionais/windows/windows',
                  },
                  collapsed: true,
                  items: [
                    "niveis/iniciante/sistemas_operacionais/windows/windows_daves_tecnologia",
                  ]
                },
                {
                  type: 'category',
                  label: 'Linux',
                  link: {
                    type: 'doc',
                    id: 'niveis/iniciante/sistemas_operacionais/linux/linux',
                  },
                  collapsed: true,
                  items: [
                    "niveis/iniciante/sistemas_operacionais/linux/primeiros_passos_linux",
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Redes',
              link: {
                type: 'doc',
                id: 'niveis/iniciante/redes/redes',
              },
              collapsed: true,
              items: [
                "niveis/iniciante/redes/redes_curso_em_video",
                "niveis/iniciante/redes/redes_boson_treinamentos",
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Intermediario',
          link: {
            type: 'doc',
            id: 'niveis/intermediario/intermediario',
          },
          collapsed: true,
          items: [
            "niveis/intermediario/conceitos",
            {
              type: 'category',
              label: 'Linux',
              link: {
                type: 'doc',
                id: 'niveis/intermediario/linux/linux',
              },
              collapsed: true,
              items: [
                "niveis/intermediario/linux/linux_primeiros_passos",
                "niveis/intermediario/linux/lpi_essentials_boson_treinamentos",
                "niveis/intermediario/linux/shell_script_blau_araujo",
                "niveis/intermediario/linux/shell_script_boson_treinamentos",
              ]
            },
            {
              type: 'category',
              label: 'Logica Programação',
              link: {
                type: 'doc',
                id: 'niveis/intermediario/logica_programacao/logica_programacao',
              },
              collapsed: true,
              items: [
                "niveis/intermediario/logica_programacao/logica_programacao_boson_treinamentos",
              ]
            },
            {
              type: 'category',
              label: 'Linguagem de Programação',
              link: {
                type: 'doc',
                id: 'niveis/intermediario/linguagem_programacao/linguagem_programacao',
              },
              collapsed: true,
              items: [
                {
                  type: 'category',
                  label: 'GO',
                  link: {
                    type: 'doc',
                    id: 'niveis/intermediario/linguagem_programacao/go/go',
                  },
                  collapsed: true,
                  items: [
                    "niveis/intermediario/linguagem_programacao/go/curso_go",
                  ]
                },
                {
                  type: 'category',
                  label: 'Python',
                  link: {
                    type: 'doc',
                    id: 'niveis/intermediario/linguagem_programacao/python/python',
                  },
                  collapsed: true,
                  items: [
                    "niveis/intermediario/linguagem_programacao/python/curso_em_video",
                    "niveis/intermediario/linguagem_programacao/python/robert_silva_1",
                    "niveis/intermediario/linguagem_programacao/python/robert_silva_2",
                  ]
                },
              ]
            },
            {
              type: 'category',
              label: 'Banco de Dados',
              link: {
                type: 'doc',
                id: 'niveis/intermediario/banco_dados/banco_dados',
              },
              collapsed: true,
              items: [
                "niveis/intermediario/banco_dados/mysql_curso_em_video",
                "niveis/intermediario/banco_dados/postgresql_boson_treinamentos",
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Avançado',
          link: {
            type: 'doc',
            id: 'niveis/avancado/avancado',
          },
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Cloud',
              link: {
                type: 'doc',
                id: 'niveis/avancado/cloud/cloud',
              },
              collapsed: true,
              items: [
                "niveis/avancado/cloud/curso_aws_inventor_qualquer",
                "niveis/avancado/cloud/curso_aws_mundo_cloud",
                "niveis/avancado/cloud/primeiros_passos_cloud",
              ]
            },
            {
              type: 'category',
              label: 'Container',
              link: {
                type: 'doc',
                id: 'niveis/avancado/container/container',
              },
              collapsed: true,
              items: [
                "niveis/avancado/container/linuxtips_container_week",
                "niveis/avancado/container/linuxtips_descomplicando_docker_2016",
                "niveis/avancado/container/linuxtips_descomplicando_docker_2018",
                "niveis/avancado/container/linuxtips_descomplicando_docker_2022",
                "niveis/avancado/container/punk_devops_kubernets",
              ]
            },
            {
              type: 'category',
              label: 'Git',
              link: {
                type: 'doc',
                id: 'niveis/avancado/git/git',
              },
              collapsed: true,
              items: [
                "niveis/avancado/git/github_curso_em_video",
              ]
            },
            {
              type: 'category',
              label: 'IaC (Infra as Code)',
              link: {
                type: 'doc',
                id: 'niveis/avancado/iac/iac',
              },
              collapsed: true,
              items: [
                "niveis/avancado/iac/terraform_punk_devops",
              ]
            },
            {
              type: 'category',
              label: 'Linux',
              link: {
                type: 'doc',
                id: 'niveis/avancado/linux/linux',
              },
              collapsed: true,
              items: [
                "niveis/avancado/linux/linuxtips_descomplicando_gerenciamento_processos",
                "niveis/avancado/linux/linuxtips_descomplicando_lpi_day1",
                "niveis/avancado/linux/linuxtips_descomplicando_lpi_day2",
                "niveis/avancado/linux/linuxtips_descomplicando_lpi_day4",
                "niveis/avancado/linux/linuxtips_descomplicando_vim",
              ]
            },
            {
              type: 'category',
              label: 'Monitoramento',
              link: {
                type: 'doc',
                id: 'niveis/avancado/monitoramento/monitoramento',
              },
              collapsed: true,
              items: [
                "niveis/avancado/monitoramento/zabbix_jlcp",
                "niveis/avancado/monitoramento/zabbix_magno_monte_cerqueira",
              ]
            },
            {
              type: 'link',
              label: 'Mini-curso CI/CD',
              href: 'https://waltenne.github.io/mini-curso-cicd/',
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'LinuxTips',
      link: {
        type: 'doc',
        id: 'linuxtips/linuxtips',
      },
      collapsed: true,
      items: [
        "linuxtips/devops_extreme",
        "linuxtips/fique_em_casa_conf",
        "linuxtips/iaas_week",
        "linuxtips/linuxtips_linuxweek_2021",
        "linuxtips/python_week",
        "linuxtips/semana_devops"
      ],
    },
    {
      type: 'category',
      label: 'Dicas',
      link: {
        type: 'doc',
        id: 'dicas/dicas',
      },
      collapsed: true,
      items: [
        "dicas/linux/docker_rootless"
      ],
    },
    {
      type: 'category',
      label: 'Dúvidas',
      link: {
        type: 'doc',
        id: 'duvidas/duvidas',
      },
      collapsed: true,
      items: [],
    },
    {
      type: 'category',
      label: 'Twitter Spaces',
      link: {
        type: 'doc',
        id: 'twitter_spaces/twitter_spaces',
      },
      collapsed: true,
      items: [],
    },
  ],
};

module.exports = sidebars;
