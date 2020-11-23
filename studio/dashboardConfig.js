export default {
  widgets: [
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
                  buildHookId: '5fbc0c11541f1428ed46e60c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-zendesk-cms-studio',
                  apiId: '8be1d8db-5455-4dce-9d63-40484ada3e8e'
                },
                {
                  buildHookId: '5fbc0c1182813c28f5e7b57b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-zendesk-cms',
                  apiId: '0504c3d8-a11e-425f-9c33-cc8e5daa6676'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/slymesta/sanity-kitchen-sink-zendesk-cms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-zendesk-cms.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
