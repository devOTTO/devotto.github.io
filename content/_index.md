---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2026-07-01
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download Resume
        url: uploads/Yoonmee_Hwang_Resume.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle
  - block: resume-experience
    id: experience
    content:
      title: Experience
      username: me
    design:
      date_format: 'January 2006'
      is_education_first: false
  - block: collection
    id: projects
    content:
      title: Projects
      text: Infrastructure and ML platforms I built at Carnegie Mellon
      filters:
        folders:
          - projects
    design:
      view: article-grid
      columns: 3
  - block: resume-skills
    id: skills
    content:
      title: Skills
      username: me
  - block: resume-awards
    id: awards
    content:
      title: Certifications & Awards
      username: me
  - block: resume-languages
    content:
      title: Languages
      username: me
---
