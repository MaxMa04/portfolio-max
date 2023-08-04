const projects = [
  {
    id: 1,
    img: require("@/assets/abisax/abisax-preview.png"),
    title: "AbiSax",
    description: `Developed for upper secondary students in Saxony, 
    Germany, that simplifies grade management and accurately calculates Abitur 
    averages.`,
    type: "Mobile Application",
    stack: "Xamarin.Forms, C#, SQLite",
    time: "2022-2023",
    appstore: null,
    playstore: null,
    detailImgs: [
      require("@/assets/abisax/abisax-detail1.png"),
      require("@/assets/abisax/abisax-detail2.png"),
      require("@/assets/abisax/abisax-detail3.png"),
    ],
    objective: `My objective in creating AbiSax was to provide every high school 
    student in Saxony with a convenient app to manage their grades in a well-organized 
    manner. The app was designed to accurately calculate the final Abitur grade, 
    precisely matching the grade printed on the official Abitur certificate. 
    Additionally, AbiSax ensures compliance with all credit allocation rules, 
    regardless of the specific course selections made by the students.`,
    learnings: [
      "Mobile App Development",
      "Xamarin.Forms-Framework",
      "Functioning of Databases",
      "Large-Scale Project Planning",
      "Git/GitHub",
    ],
    challenge: [
      `I was frustrated with the incorrect handling of subject credits in 
      other grade tracking apps, which led to inaccurate calculation of the Abitur grade. 
      This was mainly because these apps were not tailored to the Saxony Abitur system. 
      Thus, I came up with the idea of developing a more accurate and specialized app 
      for Saxony. Despite having some programming experience, I had never developed a 
      complete app before. I had no idea where to start or how to plan such a project. 
      I lacked knowledge about databases and creating a well-designed user interface. 
      However, I didn't let these obstacles hold me back and worked diligently on this 
      ambitious project alongside my school commitments.`,
      `I watched numerous tutorials, made many mistakes, wrote messy and bug-prone code, 
      and had no idea about app design. But I kept learning! The slow progress motivated 
      me to keep going and not give up. Even though there were times when I took 
      months-long breaks before revisiting the code, the app started to take shape 
      gradually. Finally, when I mustered the courage to show it to my high school 
      advisor, something happened that I never expected. I received an overwhelming 
      amount of praise and encouragement from him, which boosted my motivation even 
      further.`,
      `I was more motivated than ever and worked on my app almost daily after school. 
      Even though I spent hours, sometimes late into the night, fixing bugs, the reward 
      couldn't have been greater. During the final test with my high school advisor, it 
      calculated the Abitur average with pinpoint accuracy. My app was complete! It had 
      a professional design, was user-friendly, and highly precise. I had created 
      something from scratch that was practical and beneficial for students. However, 
      that wasn't even the most important part for me. Throughout the journey, I learned 
      so much and significantly expanded my knowledge of software development. This 
      experience also guided me in making important career decisions. For instance, 
      it made it easy for me to choose my studies in business informatics.`,
    ],
    privacy: `AbiSax does not collect, store, or distribute any personal information.`,
    client: null,
  },
  {
    id: 2,
    img: require("@/assets/maislabyrinth/maislabyrinth-preview.png"),
    title: "Maislabyrinth WHS",
    description: `An interactive app that enables users to explore a corn maze, 
    allowing them to scan QR codes and answer the provided questions.`,
    type: "Mobile Application",
    stack: ".NET MAUI, C#, Firebase",
    time: "2023",
    appstore: null,
    playstore: 'https://play.google.com/store/apps/details?id=com.whs.maislabyrinthwhs',
    detailImgs: [
      require("@/assets/maislabyrinth/maislabyrinth-detail1.png"),
      require("@/assets/maislabyrinth/maislabyrinth-detail2.png"),
      require("@/assets/maislabyrinth/maislabyrinth-detail3.png"),
    ],
    objective: `The objective was to develop an app for the company Wirtschaftshof Sachsenland
    that allows users to scan at different stations within a corn maze. Upon scanning, 
    users would be presented with questions to answer. Eventually, they would 
    arrive at a final solution word, which they could submit along with their 
    contact information to participate in a contest.`,
    learnings: [
      ".NET MAUI-Framework",
      "Communication with clients",
      "Product Presentation",
      "App distribution on the App Store and Play Store",
      "Time and Deadline Management",
    ],
    challenge: [`I was in the final phase of developing my first app, AbiSax, when 
    I received the offer to create this new app for a real company with strict deadlines 
    and other requirements. I wasn't entirely sure if I could handle developing an app 
    for a large event with time constraints. Until then, I had the luxury of working at 
    my own pace, but now the success of a significant event relied on my work. 
    Nonetheless, I accepted the offer and started working on it. I set out to use the 
    new .NET MAUI framework (successor of Xamarin.Forms) for the development. 
    Additionally, I chose Firebase as the database, as it saved me time on backend 
    tasks like User Authentication and online data management.`, 
    `During my work, I noticed that writing code and planning the app's logic came 
    easily to me. The experience I gained from developing AbiSax proved to be very 
    beneficial here. After about 3 months of work (alongside my Abitur), I completed 
    the first version without significant issues. I presented this version to the client 
    and incorporated the feedback I received over the next few weeks. After conducting 
    final tests, it was time for the release. This was a new experience for me since 
    I had not released an app before (although AbiSax was complete, I wanted it to be 
    perfect).`,
    `During this process, I had to learn that the release, especially on iOS App Store, 
    was not as straightforward as I had anticipated. The first version was accepted 
    without issues on the Play Store, but for the App Store, it didn't meet the 
    standards. The testing team provided substantial feedback and criticism, which I 
    diligently addressed to the best of my abilities. However, it required multiple 
    resubmissions until the app was finally accepted and approved for the App Store. 
    This experience taught me the importance of meeting strict guidelines and quality 
    standards when submitting apps to different app marketplaces.`],
    privacy: null,
    client: `https://www.wirtschaftshof-sachsenland.com/start/`
  },
  {
    id: 3,
    img: require("@/assets/portfolio-preview.png"),
    title: "Portfolio Website",
    description:
      "A portfolio website showcasing me, my projects, skills, and experience, providing an opportunity for you to connect with me.",
    type: "Website",
    stack: "HTML, Bootstrap 5, JavaScript, Vue.js",
    time: "2023",
    appstore: null,
    playstore: null,
    detailImgs: null,
    objective: `My goal with my portfolio website was to present my projects and career 
    progression in a clear and organized manner for myself and potential stakeholders 
    (employers, etc.) on the internet. Additionally, the website allows me to look back 
    and reflect on all the accomplishments I have achieved in software development over 
    time. It serves as a professional showcase of my skills, experiences, and 
    achievements, helping to build a strong online presence and create opportunities 
    for future career growth and networking.`,
    learnings: [
      "JavaScript Fundamentals",
      "Bootstrap 5",
      "Vue.js",
      "Web Development",
    ],
    challenge: [`After several unsuccessful attempts at building websites, the idea of 
    creating a portfolio website about myself occurred to me while developing my second 
    mobile application. It was a meaningful project that I had been considering for quite some time. 
    However, I lacked the motivation to learn something new and felt overwhelmed by the 
    numerous possibilities available. With an abundance of JavaScript frameworks, I 
    ultimately decided to use Vue.js and chose Bootstrap 5 for the styling.`, 
    `So, I started watching tutorials, which bored me to a great extent. I thought it 
    was the most effective way to learn a new programming language. However, I realized 
    that this approach was wrong after abandoning the first tutorial halfway through. I 
    came to the conclusion that I learn best by doing it myself. Therefore, I began 
    experimenting on my own, and to my surprise, the development process became much 
    easier thanks to my fundamental understanding of programming and the assistance 
    from Google, Stack Overflow, and even a bit from ChatGPT. Within approximately 
    two weeks of work, I successfully completed my project without major setbacks.`, 
    `Overall, I am extremely satisfied with my portfolio website. While it may not be 
    the flashiest, it certainly fulfills its purpose and achieves the goals I set out 
    to accomplish. I am amazed at what can be achieved in just two weeks with the right 
    tools and the right mindset. It has been a valuable learning experience, and I feel 
    proud to have created a platform that showcases my work and skills in the software 
    development field. I look forward to continuing to improve and expand my portfolio 
    as I progress in my career.`],
    privacy: null,
    client: null,
  },
];

export default projects;
