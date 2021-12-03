export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61aa41dc6eacb26a327f72bf',
                  title: 'Sanity Studio',
                  name: 'thornhill-studio',
                  apiId: '5f161832-65bf-4742-bbdd-b9198c85f677'
                },
                {
                  buildHookId: '61aa41dc35c55770384ef81e',
                  title: 'Landing pages Website',
                  name: 'thornhill-web',
                  apiId: 'f0d57fc8-7aaf-4270-bfb2-128a22b1ef36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cerfontaine/Thornhill',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://thornhill-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
