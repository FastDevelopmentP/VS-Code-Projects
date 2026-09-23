const fs=require('fs');
let html=fs.readFileSync('index.html','utf8');
const icons=[
'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="m8 10 2 2 5-5M9 16h6M11 19h2"/>',
'<rect x="5" y="4" width="14" height="18" rx="2"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="m8 11 1 1 2-2m-3 7 1 1 2-2M14 11h2M14 17h2"/>',
'<path d="M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5Z"/><path d="M8 10h8M8 14h5"/>',
'<circle cx="9" cy="7" r="4"/><path d="M2 22v-3a7 7 0 0 1 14 0v3M17 3a4 4 0 0 1 0 8M18 14a6 6 0 0 1 4 5v3"/>'
];
let i=0;
html=html.replace(/<a\s+class="offering-image-link"[\s\S]*?<\/a>|<img\s+class="offering-image[^\"]*"[\s\S]*?\/>/g,()=>`<div class="offering-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" focusable="false">${icons[i++]}</svg></div>`);
if(i!==4)throw Error('Expected four icons');
fs.writeFileSync('index.html',html);
let css=fs.readFileSync('styles.css','utf8').replace('.offering-card > a:not(.offering-image-link)', '.offering-card > a');
css=css.replace(/\.offering-image \{[\s\S]*?(?=\.offering-featured \{)/,`.offering-icon {
  display: grid;
  place-items: center;
  min-height: 148px;
  margin-bottom: 20px;
  color: var(--lime);
}
.offering-icon svg {
  width: 96px;
  height: 96px;
}
.offering-featured .offering-icon {
  color: var(--ink);
}
.offering-card h3 {
  min-height: 2.2em;
}
.offering-card > a:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 5px;
}
`);
css=css.replace(/(\.offering-card > a \{[\s\S]*?font-size:) 11px/, '$1 14px');
fs.writeFileSync('styles.css',css);
