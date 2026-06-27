## Sha Huang's personal website

:wave: This repository contains the files for my personal website deployed at [sha-huang.github.io](https://sha-huang.github.io)

Simple static website with HTML / CSS / JavaScript. No additional libraries required.

### Responsive design

Overall this website is organized into multiple-column layout and switch to single column on narrow screens.

### Overall structure of the pages

Each page contains:

```
HTML  
  |- <header>: navigation bar 
  |- <main>: main content 
  |- <footer>: footer 
```

Main content is divided into several sections, and each section has an optional header together with articles:

```
<main>
  |- <section>
        |- <h1> or <h2>
        |- <article>
        |- <article>
  |- <section>
        |- <h1> or <h2>
        |- <article>
        |- <article>
```

Articles have *flex: 1* to evenly distribute them.

Flex-direction alternate between sections (for 2nd section onwards), so a left-to-right flow section is followed by a right-to-left flow section.

Flex-direction is set to column on narrow screen, so the display of articles change from horizontal (multiple columns) to vertical (single column).

### Effects

<details>
  <summary>Micro interactive features</summary>
  <ul>
    <li>Icon moving up on mouse hover</li>
  </ul>
</details>