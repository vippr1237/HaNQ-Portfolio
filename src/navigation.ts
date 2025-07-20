
export const headerData = {
  links: [
    {
      text: 'Homes',
      href:'#home',
      links: [
        // {
        //   text: 'SaaS',
        //   href: getPermalink('/homes/saas'),
        // }
      ],
    },
    {
      text: 'About',
      href: '#about'
    },
    {
      text: 'Resume',
      href: '#resume'
    },
    {
      text: 'Portfolio',
      href: '#portfolio'
    },
    {
      text: 'Github',
      href: 'https://github.com/vippr1237'
    },
  ],
  actions: [{ text: 'Contact Now', href: 'https://www.linkedin.com/in/coangha13/', target: '_blank' }],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/coangha13/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/vippr1237' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
