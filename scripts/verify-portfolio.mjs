import assert from 'node:assert/strict'
import { createServer } from 'vite'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
const warnings = []
const originalError = console.error
console.error = (...args) => warnings.push(args.join(' '))
const server = await createServer({ configLoader: 'native', server: { middlewareMode: true }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const { projects, projectsFor, filterProjects } = await server.ssrLoadModule('/src/data/projects.js')
  const { knownPages, pageFromHash } = await server.ssrLoadModule('/src/hooks/usePageNavigation.js')
  const { publications, agentProducts } = await server.ssrLoadModule('/src/siteContent.js')
  assert.equal(new Set(projects.map(p => p.slug)).size, projects.length, 'Unique project URLs')
  assert.equal(publications.length, 18, 'One consolidated academic catalogue')
  assert.ok(!projects.some(project => project.category === 'Research'), 'No paper-as-project duplicates')
  for (const agent of agentProducts.filter(agent => !agent.href)) assert.ok(projects.some(p => p.id === agent.id), 'Retain agent ' + agent.id)
  assert.equal(projectsFor('apps', 'demos').length, 1)
  assert.ok(projectsFor('apps', 'demos').every(project => project.demoUrl))
  assert.equal(projectsFor('ai-lab', 'startup-ideas').length, 6)
  assert.equal(projectsFor('research', 'notes').length, 0)
  assert.equal(filterProjects(projects, { query: 'kidney' }).length, 0)
  assert.equal(filterProjects(projects, { category: 'Geometry', tag: 'Interactive' })[0].slug, 'flow-field')
  assert.ok(filterProjects(projects, { category: 'Visualisation' }).length > 0)
  assert.equal(filterProjects(projects, { query: 'no-matching-project-123' }).length, 0)
  for (const [old, target] of [['agents','apps/agents'],['portfolio','work'],['geometry-art','art/gallery'],['research-startup-ideas','ai-lab/projects']]) assert.equal(pageFromHash('#/' + old), target)
  for (const [old, target] of [['about/experience', 'about/education'], ['about/research', 'research'], ['about/research-interests', 'research']]) assert.equal(pageFromHash('#/' + old), target)
  assert.equal(pageFromHash('#/about/publications'), 'research')
  const { publications: journalPapers, publicationYears } = await server.ssrLoadModule('/src/data/publications.js')
  assert.equal(journalPapers.length, 18)
  assert.equal(new Set(journalPapers.map(paper => paper.doi )).size, 18, 'No duplicate publications')
  assert.deepEqual(publicationYears, [2026, 2025, 2024, 2023, 2021, 2020, 2019])
  assert.ok(journalPapers.some(paper => paper.id === 'benchhub' && paper.year === 2026))
  assert.equal(pageFromHash('#/unknown'), 'not-found')
  assert.equal(pageFromHash('#/work/unknown'), 'not-found')
  const { artworks, filterArtworks } = await server.ssrLoadModule('/src/apps/geometry-art/data/geometryArt.js')
  const { collections } = await server.ssrLoadModule('/src/apps/geometry-art/data/collections.js')
  const { validArtUrl, artConfig } = await server.ssrLoadModule('/src/apps/geometry-art/data/config.js')
  assert.equal(artworks.filter(art => art.featured).length, 3)
  for (const collection of collections) assert.ok(filterArtworks(collection.filter).length > 0)
  assert.equal(validArtUrl('#', 'etsy'), null)
  assert.equal(validArtUrl('https://etsy.com.fake.test/item', 'etsy'), null)
  assert.equal(validArtUrl('javascript:alert(1)', 'youtube'), null)
  assert.equal(artConfig.etsyShopUrl, null)
  const { navigation } = await server.ssrLoadModule('/src/data/navigation.js')
  assert.deepEqual(navigation.map(group=>group.label), ['AI Lab','Data Science','Research','Creative Lab','About'])
  assert.ok(!navigation.find(group=>group.path==='about').items.some(([label])=>label==='Publications'))
  const { filterPublications } = await server.ssrLoadModule('/src/data/research/publications.js')
  assert.equal(filterPublications('BenchHub').length,1)
  assert.equal(filterPublications('Marni Torkel').length,17)
  assert.equal(filterPublications('2026').length,2)
  assert.ok(filterPublications('Benchmarking').length>0)
  assert.equal(filterPublications('unmatched-query-9876').length,0)
  const { dataScienceProjects, dataScienceCategories, filterDataScienceProjects } = await server.ssrLoadModule('/src/data/dataScience/projects.js')
  const { cheatSheets, filterReferenceCategories } = await server.ssrLoadModule('/src/data/aiGuide/cheatsheets/index.js')
  const { researchIdeas } = await server.ssrLoadModule('/src/data/aiLab/researchIdeas.js')
  assert.equal(dataScienceProjects.length, 6)
  assert.ok(dataScienceProjects.every(project => project.status === 'Planned' && !project.results && !project.demoUrl))
  for (const category of dataScienceCategories) assert.ok(filterDataScienceProjects(category).length > 0, category)
  assert.equal(cheatSheets.length, 9)
  for (const sheet of cheatSheets.filter(sheet => sheet.categories)) {
    assert.ok(sheet.categories.length >= 10)
    assert.equal(filterReferenceCategories(sheet.categories, 'no-matching-reference-98765').length, 0)
  }
  assert.equal(pageFromHash('#/ai-lab/research-ideas'), 'ai-lab/projects')
  for (const idea of researchIdeas) assert.equal(pageFromHash('#/ai-lab/research-ideas/' + idea.slug), 'ai-lab/projects/' + idea.slug)
  assert.equal(pageFromHash('#/data-science/missing'), 'not-found')
  assert.equal(pageFromHash('#/ai-lab/guide/cheatsheet/missing'), 'not-found')
  const pages = [...knownPages, ...dataScienceProjects.map(project => 'data-science/' + project.slug), ...cheatSheets.map(sheet => 'ai-lab/guide/cheatsheet/' + sheet.id), ...researchIdeas.map(idea => 'ai-lab/projects/' + idea.slug), 'ai-lab/guide/cheatsheet/first-principles', ...artworks.map(art => 'art/gallery/' + art.slug), ...collections.map(collection => 'art/collections/' + collection.id), ...projects.map(p => 'work/' + p.slug), 'not-found']
  for (const page of pages) {
    globalThis.window = { location: { hash: '#/' + (page === 'home' ? '' : page) } }
    const html = renderToStaticMarkup(React.createElement(App))
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, 'One page heading: ' + page)
    assert.ok(!/AI company|AI agency|product lab/i.test(html), 'Personal positioning: ' + page)
    for (const match of html.matchAll(/href="(#[^"]*)"/g)) {
      if (match[1] === '#main-content') continue
      assert.notEqual(pageFromHash(match[1]), 'not-found', 'Valid link ' + match[1] + ' from ' + page)
    }
    if (page.startsWith('data-science/')) {
      assert.ok(html.includes('Planned'))
      assert.ok(html.includes('What this demonstrates'))
      assert.ok(!html.includes('<h2>Results</h2>'))
      assert.ok(!html.includes('<h2>Code / Demo</h2>'))
    }
    if (page === 'research') {
      assert.equal((html.match(/<article /g) || []).length, 18)
      assert.equal(html.split('<strong>Marni Torkel</strong>').length - 1, 8)
      assert.ok(html.includes('Google Scholar'));
        assert.ok(html.includes('Graph Drawing and Network Visualisation'));
        assert.equal(html.split('<strong>Marnijati Torkel</strong>').length - 1, 9);
        for (const paper of journalPapers) { assert.ok(paper.description); assert.ok(paper.authors.length); }
        for (const paper of journalPapers) assert.ok(html.includes('href="https://doi.org/' + paper.doi + '"'))
      assert.ok(!html.includes('class="work-card'), 'No research project cards in Publications')
      assert.ok(!html.includes('Explore research projects'))
    }
    if (page === 'about/education') {
      for (const degree of ['Master of Data Science', 'Graduate Diploma in Digital Media', 'Bachelor of Computer Science']) assert.ok(html.includes(degree))
      assert.ok(!html.includes('Experience'))
    }
    if (page === 'work/kidney-transplant-support') {
      assert.ok(html.includes('Related publication'))
      assert.ok(!html.includes('Results / findings'), 'Do not invent results')
    }
  }
  assert.deepEqual(warnings, [], 'React renders without warnings')
  console.log('PASS: ' + pages.length + ' page renders, all internal links, legacy routes, publication/agent retention, filters, demo availability and conditional case-study sections.')
} finally {
  console.error = originalError
  await server.close()
  delete globalThis.window
}
