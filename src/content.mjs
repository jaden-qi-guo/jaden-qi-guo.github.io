// content.mjs: everything the site says, in one place. Edit this file, then run `node redesign/src/build.mjs`.
// All content below is taken from the current index.html; nothing new was written.

export const profile = {
  name: 'Qi Guo', nameLocal: '郭琦',
  titles: ['Ph.D. Student in Computer Science'],
  affiliation: [
    { text: 'Department of Internet Architecture', href: 'https://www.mpi-inf.mpg.de/departments/inet' },
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
  `I am broadly interested in <strong class="hl">systems</strong> and <strong class="hl">networking</strong>. Currently, my research focuses on:`,
  `Prior to MPI, I got my B.S. degree in the joint program between <a href="https://www.qmul.ac.uk/">Queen Mary University of London</a> and <a href="https://www.bupt.edu.cn/">Beijing University of Posts and Telecommunications</a> in 2020.`,
];

// Shown as a list with coloured icons under the second About paragraph.
export const focus = [
  { text: 'Cost-efficient video streaming', icon: 'fa-solid fa-film', color: 'blue' },
  { text: 'Partially reliable transport', icon: 'fa-solid fa-route', color: 'orange' },
];

export const news = [
  { date: 'Mar 2024', html: `<i>AlterEgo</i> is accepted to <a href="https://edge-sys.github.io/2024/">EdgeSys 2024</a>!` },
  { date: 'Sep 2023', html: `I will be a teaching assistant for the seminar Hot Topics in Data Networks next semester.` },
  { date: 'Apr 2023', html: `<i>QSDP</i> is accepted to <a href="https://icml.cc/Conferences/2023/Dates">ICML 2023</a>!` },
  { date: 'Apr 2023', html: `I will be a teaching assistant for the core courses <a href="https://inet-teaching.mpi-inf.mpg.de/dn_23/">Data Networks</a> and <a href="https://cms.sic.saarland/ds_ss_23">Distributed Systems</a> next semester.` },
  { date: 'Sep 2022', html: `Start my Ph.D. study at <a href="https://www.mpi-inf.mpg.de/departments/inet">INET group</a>, <a href="https://www.mpi-inf.mpg.de/home/">MPI for Informatics</a>.` },
  { date: 'Apr 2022', html: `<i>LinkGuardian</i> is accepted to <a href="https://conferencesigcomm.org/events/apnet2022/index.html">APNet 2022</a>!` },
];
export const newsShown = 4;   // the rest go under "Older news"

// kind: conference | journal. short + icon draw the picture tile until a real figure is set in thumb. Optional: code, slides, video, website, bibtex, summary, award, thumb (image in images/).
export const publications = [
  { short: 'AlterEgo', icon: 'fa-solid fa-cubes', kind: 'conference', venue: "EdgeSys '24", title: 'AlterEgo: A Dedicated Blockchain Node For Analytics', href: 'https://dl.acm.org/doi/10.1145/3642968.3654814',
    authors: ['Qi Guo', 'Mahdi Alizadeh', 'Ali Falahati', 'Laurent Bindschaedler'],
    where: 'International Workshop on Edge Systems, Analytics and Networking (EdgeSys), co-located with EuroSys, 2024' },
  { short: 'QSDP', icon: 'fa-solid fa-microchip', kind: 'conference', venue: "ICML '23", title: 'Quantized Distributed Training of Large Models with Convergence Guarantees', href: 'https://proceedings.mlr.press/v202/markov23a/markov23a.pdf',
    authors: ['Ilia Markov', 'Adrian Vladu', 'Qi Guo', 'Dan Alistarh'],
    where: 'International Conference on Machine Learning (ICML), 2023' },
  { short: 'LinkGuardian', icon: 'fa-solid fa-shield-halved', kind: 'conference', venue: "APNet '22", title: 'LinkGuardian: Mitigating the impact of packet corruption loss with link-local retransmission', href: 'https://rajkiranjoshi.github.io/files/papers/apnet22-linkguardian.pdf',
    authors: ['Raj Joshi', 'Qi Guo', 'Nishant Budhdev', 'Ayush Mishra', 'Mun Choon Chan', 'Ben Leong'],
    where: 'Asia-Pacific Workshop on Networking (APNet), 2022' },
  { short: '5G Industrial Internet', icon: 'fa-solid fa-tower-cell', kind: 'conference', venue: "ICC Workshops '19", title: 'Application and Experiments of 5G Technology Powered Industrial Internet', href: 'https://ieeexplore.ieee.org/abstract/document/8757129',
    authors: ['Fangmin Xu', 'Fan Yang', 'Xinya Wu', 'Qi Guo', 'Chenglin Zhao'],
    where: 'International Conference on Communications (ICC) Workshops, 2019' },
  { short: 'Eye tracking', icon: 'fa-regular fa-eye', kind: 'journal', venue: 'Sensors 2020', title: "Predicting spatial visualization problems' difficulty level from eye-tracking data", href: 'https://www.mdpi.com/1424-8220/20/7/1949/pdf',
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
  { degree: 'B.S. in Telecommunication Engineering', html: `<a href="https://www.qmul.ac.uk/">Queen Mary University of London</a> and <a href="https://www.bupt.edu.cn/">Beijing University of Posts and Telecommunications</a>`, when: 'Sep 2016 – Jul 2020' },
];
export const industry = [
  { role: 'PhD Intern', org: 'Bell Labs', where: 'Stuttgart, Germany', when: 'Sep 2025 – Dec 2025' },
  { role: 'Software Development Engineering Intern', org: 'Amazon', where: 'Beijing, China', when: 'Oct 2020 – Jul 2021' },
  { role: 'Software Development Engineering Intern', org: 'DiDi', where: 'Beijing, China', when: 'Oct 2019 – May 2020' },
];
export const service = [
  { role: 'Shadow Technical Program Committee', venue: "CoNEXT '26" },
  { role: 'Artifacts Evaluation Committee', venue: "NSDI '26" },
];

// "More" menu in the top bar. show: false hides a page from the menu and skips building it.
export const more = [
  { file: 'streaming.html', title: 'Streaming platform', icon: 'fa-solid fa-circle-play', color: 'orange', show: true },
];

// streaming.html: entry page for the video streaming research platform (a draft; not launched yet)
export const streaming = {
  title: 'Streaming Platform',
  status: 'In development',
  intro: [
    `A public video-on-demand platform for studying how video delivery choices affect what viewers experience. Visitors watch short explainer videos about networking and video systems. Each viewing session is streamed with one of several delivery configurations, and the player records startup delay, stalls, video quality and data used.`,
    `The goal is to compare delivery methods on real networks and real devices, not only in lab emulation.`,
  ],
  knobsIntro: `Each session picks one option at each layer of the streaming stack:`,
  knobs: [
    { name: 'Bitrate ladder', icon: 'fa-solid fa-layer-group', color: 'blue', text: 'Which resolutions and bitrates each video is encoded at.' },
    { name: 'Adaptive bitrate (ABR)', icon: 'fa-solid fa-gauge-high', color: 'orange', text: 'The algorithm that picks the quality of each segment as network conditions change.' },
    { name: 'Codec', icon: 'fa-solid fa-film', color: 'green', text: 'Single-layer or layered (AV1 SVC) coding, error concealment, loss recovery and forward error correction.' },
    { name: 'Transport', icon: 'fa-solid fa-network-wired', color: 'purple', text: 'TCP or QUIC, with fully or partially reliable delivery.' },
  ],
  launch: `The platform is not open yet. This page will link to it when it launches.`,
};
