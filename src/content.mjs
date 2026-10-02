// content.mjs: everything the site says, in one place. Edit this file, then run `node src/build.mjs` (see README.md).
// Newest items go first in every list. Strings in backticks may contain HTML: links, and <strong> for names such as
// papers and projects (research areas use <strong class="hl">).

export const profile = {
  name: 'Qi Guo', nameLocal: '郭琦',
  titles: ['Ph.D. Student in Computer Science'],
  affiliation: [
    { text: 'Internet Architecture Group', href: 'https://www.mpi-inf.mpg.de/departments/inet' },
    { text: 'Max Planck Institute for Informatics', href: 'https://www.mpi-inf.mpg.de' },
  ],
  location: 'Saarbrücken, Germany',
  email: 'qiguo@mpi-inf.mpg.de',
  photo: 'Qi_Guo.PNG',
  links: [
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=_v1EqjwAAAAJ&hl=en', icon: 'fa-brands fa-google-scholar' },
    { label: 'GitHub', href: 'https://github.com/jaden-qi-guo', icon: 'fa-brands fa-github' },
    { label: 'X', href: 'https://x.com/JadenQiGuo', icon: 'fa-brands fa-x-twitter' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/qi-guo-4593a6158/', icon: 'fa-brands fa-linkedin' },
    { label: 'Bluesky', href: 'https://bsky.app/profile/qiguo.bsky.social', icon: 'fa-brands fa-bluesky' },
  ],
};

// HTML allowed in these strings
export const about = [
  `I am a Ph.D. student in computer science at <a href="https://www.mpi-inf.mpg.de/home/">Max Planck Institute for Informatics</a>, advised by <a href="https://www.mpi-inf.mpg.de/departments/inet/people/anja-feldmann">Prof. Anja Feldmann</a> and <a href="https://balakrishnanc.github.io/">Prof. Balakrishnan Chandrasekaran</a>.`,
  `I am broadly interested in <strong class="hl">networked systems</strong>. Currently, my research focuses on:`,
  `At MPI, I was also fortunate to work with <a href="https://binds.ch/">Prof. Laurent Bindschaedler</a> on blockchain analytics systems (<strong>AlterEgo</strong>) during my research immersion lab.`,
  `During my Ph.D., I was a research intern at <a href="https://www.bell-labs.com/">Nokia Bell Labs</a>, where I worked on <strong>JANUS</strong>, a practical load-balancing architecture for confidential cloud services built on trusted execution environments (TEEs).`,
  `Prior to MPI, I got my B.S. degree in the joint program between <a href="https://www.qmul.ac.uk/">Queen Mary University of London</a> and <a href="https://www.bupt.edu.cn/">Beijing University of Posts and Telecommunications</a> in 2020.`,
];

// Shown as a list with coloured icons under the About paragraph that ends with a colon.
export const focus = [
  { text: 'Practical, Performant, and Cost-Efficient Video Streaming', icon: 'fa-solid fa-film', color: 'blue' },
  { text: 'Partially Reliable Transport', icon: 'fa-solid fa-route', color: 'orange' },
];

export const news = [
  { date: 'Sep 2026', html: `<strong>JANUS</strong> is accepted to <a href="https://sigops.org/s/conferences/atc/2026/index.html">ATC 2026</a>! JANUS is work from my internship at Bell Labs. Congrats to the team!` },
  { date: 'Oct 2025', html: `I started a research internship at <a href="https://www.bell-labs.com/">Nokia Bell Labs</a> in Stuttgart, working on remote attestation over TLS for confidential cloud services.` },
  { date: 'Mar 2024', html: `<strong>AlterEgo</strong> is accepted to <a href="https://edge-sys.github.io/2024/">EdgeSys 2024</a>! AlterEgo is work from my Ph.D. research immersion lab at MPI. Congrats to the team!` },
  { date: 'Sep 2023', html: `I will be a teaching assistant for the seminar Hot Topics in Data Networks next semester.` },
  { date: 'Apr 2023', html: `<strong>QSDP</strong> is accepted to <a href="https://icml.cc/Conferences/2023/Dates">ICML 2023</a>!` },
  { date: 'Apr 2023', html: `I will be a teaching assistant for the core courses <a href="https://inet-teaching.mpi-inf.mpg.de/dn_23/">Data Networks</a> and <a href="https://cms.sic.saarland/ds_ss_23">Distributed Systems</a> next semester.` },
  { date: 'Sep 2022', html: `Started my Ph.D. at the <a href="https://www.mpi-inf.mpg.de/departments/inet">INET group</a>, <a href="https://www.mpi-inf.mpg.de/home/">MPI for Informatics</a>.` },
  { date: 'Apr 2022', html: `<strong>LinkGuardian</strong> is accepted to <a href="https://conferences.sigcomm.org/events/apnet2022/index.html">APNet 2022</a>!` },
];
export const newsShown = 4;   // the rest go under "Older news"

// kind: conference | journal. selected: true also lists it under "Selected publications" on the home page.
// color: the paper's colour (blue, orange, green, purple, pink, gold); by default they take turns in list order.
// short + icon draw the picture tile until a real figure is set in thumb. Optional: code, slides, video, website, summary, award, thumb (image in images/).
export const publications = [
  { short: 'JANUS', thumb: 'pub-janus.png', selected: true, icon: 'fa-solid fa-scale-balanced', kind: 'conference', venue: "ATC '26", title: 'JANUS: Practical Load Balancing for Confidential Cloud Services',   // href: the published version, once out
    authors: ['Qi Guo', 'Alice Dethise', 'Ruichuan Chen', 'Istemi Ekin Akkus', 'Ivica Rimac', 'Lieven Trappeniers'],
    where: 'ACM SIGOPS Annual Technical Conference (ATC), 2026' },
  { short: 'AlterEgo', thumb: 'pub-alterego.png', selected: true, icon: 'fa-solid fa-cubes', kind: 'conference', venue: "EdgeSys '24", title: 'AlterEgo: A Dedicated Blockchain Node For Analytics', href: 'https://dl.acm.org/doi/10.1145/3642968.3654814',
    authors: ['Qi Guo', 'Mahdi Alizadeh', 'Ali Falahati', 'Laurent Bindschaedler'],
    where: 'International Workshop on Edge Systems, Analytics and Networking (EdgeSys), co-located with EuroSys, 2024' },
  { short: 'QSDP', thumb: 'pub-qsdp.png', selected: true, icon: 'fa-solid fa-microchip', kind: 'conference', venue: "ICML '23", title: 'Quantized Distributed Training of Large Models with Convergence Guarantees', href: 'https://proceedings.mlr.press/v202/markov23a/markov23a.pdf',
    authors: ['Ilia Markov', 'Adrian Vladu', 'Qi Guo', 'Dan Alistarh'],
    where: 'International Conference on Machine Learning (ICML), 2023' },
  { short: 'LinkGuardian', thumb: 'pub-linkguardian.png', selected: true, icon: 'fa-solid fa-shield-halved', kind: 'conference', venue: "APNet '22", title: 'LinkGuardian: Mitigating the impact of packet corruption loss with link-local retransmission', href: 'https://rajkiranjoshi.github.io/files/papers/apnet22-linkguardian.pdf',
    authors: ['Raj Joshi', 'Qi Guo', 'Nishant Budhdev', 'Ayush Mishra', 'Mun Choon Chan', 'Ben Leong'],
    where: 'Asia-Pacific Workshop on Networking (APNet), 2022' },
  { short: '5G Industrial Internet', thumb: 'pub-5g.png', icon: 'fa-solid fa-tower-cell', kind: 'conference', venue: "ICC Workshops '19", title: 'Application and Experiments of 5G Technology Powered Industrial Internet', href: 'https://ieeexplore.ieee.org/abstract/document/8757129',
    authors: ['Fangmin Xu', 'Fan Yang', 'Xinya Wu', 'Qi Guo', 'Chenglin Zhao'],
    where: 'International Conference on Communications (ICC) Workshops, 2019' },
  { short: 'Eye tracking', thumb: 'pub-eyetracking.png', icon: 'fa-regular fa-eye', kind: 'journal', venue: 'Sensors 2020', title: "Predicting spatial visualization problems' difficulty level from eye-tracking data", href: 'https://www.mdpi.com/1424-8220/20/7/1949/pdf',
    authors: ['Xiang Li', 'Rabih Younes', 'Diana Bairaktarova', 'Qi Guo'],
    where: 'Sensors, 2020' },
];

export const teaching = {
  where: 'Saarland University',
  courses: [
    { name: 'Hot Topics in Data Networks', note: '2023–24 Winter as teaching assistant, 2024–25 Winter as tutor' },
    { name: 'Distributed Systems', href: 'https://cms.sic.saarland/ds_ss_23/', note: '2022–23 Summer as teaching assistant' },
    { name: 'Data Networks', href: 'https://inet-teaching.mpi-inf.mpg.de/dn_23/', note: '2022–23 Summer as tutor' },
  ],
};

export const supervision = [
  { level: 'Master Thesis', topic: 'Layered Video Streaming', student: 'Jaideep More', where: 'Saarland University', when: '2025',
    co: `co-advised with <a href="https://www.mpi-inf.mpg.de/departments/inet/people/taha-albakour">Dr. Taha Albakour</a> and <a href="https://www.mpi-inf.mpg.de/tiago-heinrich">Dr. Tiago Heinrich</a>` },
  { level: 'Bachelor Thesis', topic: 'Video Streaming ABR Evaluation in Mobile Network', student: 'Erin Elagöz', where: 'Vrije Universiteit Amsterdam', when: '2025',
    co: `co-advised with <a href="https://balakrishnanc.github.io/">Prof. Balakrishnan Chandrasekaran</a>` },
  { level: 'Master Thesis', topic: 'Partially Reliable Transport with QUIC Datagram', student: 'Punit Lodha', where: 'Saarland University', when: '2024–25',
    co: `co-advised with <a href="https://balakrishnanc.github.io/">Prof. Balakrishnan Chandrasekaran</a>` },
  { level: 'Master Thesis', topic: 'Web Browsing with Partially Reliable Transport', student: 'Aditya N. Srivastava', where: 'Vrije Universiteit Amsterdam', when: '2024',
    co: `co-advised with <a href="https://balakrishnanc.github.io/">Prof. Balakrishnan Chandrasekaran</a>` },
];

export const education = [
  { degree: 'Ph.D. in Computer Science', html: `<a href="https://www.mpi-inf.mpg.de/home/">Max Planck Institute for Informatics</a> and <a href="https://www.uni-saarland.de/en/home.html">Saarland University</a>`, when: 'Sep 2022 – Present' },
  { degree: 'B.S. in Telecommunication Engineering', html: `<a href="https://www.qmul.ac.uk/">Queen Mary University of London</a> and <a href="https://www.bupt.edu.cn/">Beijing University of Posts and Telecommunications</a>`, when: 'Sep 2016 – Jul 2020',
    honors: ['First-Class Honours', 'Ye Peida Elite Class'] },
];
export const industry = [
  { role: 'PhD Intern', org: 'Nokia Bell Labs', where: 'Stuttgart, Germany', when: 'Oct 2025 – Dec 2025' },
  { role: 'Software Development Engineering Intern', org: 'Amazon', where: 'Beijing, China', when: 'Oct 2020 – Jul 2021' },
  { role: 'Software Development Engineering Intern', org: 'DiDi', where: 'Beijing, China', when: 'Oct 2019 – May 2020' },
];
export const service = [
  { role: 'Shadow Technical Program Committee', venue: "CoNEXT '26" },
  { role: 'Artifacts Evaluation Committee', venue: "NSDI '26" },
];

// "More" menu in the top bar. show: false hides a page from the menu and skips building it. (Empty: the menu is hidden.)
export const more = [];

// trencadis.html, a tab in the top bar: the video streaming platform (https://trencadis.dev). Kept short: the platform
// explains itself.
export const trencadis = {
  title: 'Trencadís',
  url: 'https://trencadis.dev',
  tagline: 'Play with the building blocks of video streaming',
  status: 'My personal project · live (beta)',
  intro: [
    `Trencadís is my personal side project, and one I have a lot of fun with: a small video platform where I share short videos about ideas, research and things I learn along the way.`,
    `Since video streaming is what I work on, I built it with the whole streaming pipeline exposed. While you watch, you can switch the bitrate ladder, codec, ABR algorithm and transport, and see right away what changes.`,
    `Every playback is measured (start-up delay, rebuffering, picture quality and data used), so bit by bit it is growing into a real-world testbed for comparing these choices. Come and play with it! I would love to hear what you think at <a href="mailto:contact@trencadis.dev">contact@trencadis.dev</a>.`,
  ],
  image: 'trencadis-player.jpg',
  caption: 'The player during playback, with live statistics.',
  links: [
    { text: 'Watch a video', href: 'https://trencadis.dev/demo/watch.html', icon: 'fa-solid fa-circle-play' },
    { text: 'Results', href: 'https://trencadis.dev/demo/results.html', icon: 'fa-solid fa-chart-simple' },
    { text: 'FAQ', href: 'https://trencadis.dev/demo/faq.html', icon: 'fa-solid fa-circle-question' },
  ],
};
