export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc80826f4cd731d1d7e41c2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qynjjb21',
                  apiId: '77e74075-122a-4706-bbb7-bce42f9d7b1a'
                },
                {
                  buildHookId: '5fc808268cad301b77d0b4ed',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2cy4j8kk',
                  apiId: '11be8e4e-e63e-43d8-9f8a-8abc1a26a006'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wibbs88/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2cy4j8kk.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
