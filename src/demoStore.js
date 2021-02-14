export const demoStore = {
  projects: [
    {
      id: "1",
      name: "Project 1",
      description:
        "Consectetur incididunt veniam reprehenderit nisi aute cupidatat laborum irure. Ex minim Lorem ut proident ex magna. Magna voluptate incididunt nostrud est veniam officia proident consequat ut ex anim aute fugiat. Sunt eiusmod sit consequat culpa id. Cillum irure non in minim dolor ut aute nostrud do tempor.",
      budget: 100,
    },
    {
      id: "2",
      name: "Project 2",
      description:
        "Excepteur duis ut cillum excepteur eu irure sint nulla est aute sit in magna laborum. Deserunt sit et enim velit nulla nisi dolore. Magna ex duis aute reprehenderit aliquip in voluptate ea culpa laboris commodo anim adipisicing. Non consequat proident ullamco consequat qui fugiat aute.",
      budget: 2000,
    },
  ],
  scenes: [
    {
      id: 1,
      name: "Scene 1 Project 1",
      description:
        "Mollit mollit tempor magna dolor minim ex tempor dolor. Esse pariatur elit consequat nostrud aliquip sint velit fugiat elit minim adipisicing ullamco ex nisi. Anim consequat nulla enim mollit pariatur laborum proident.",
      projectId: "1",
    },
    {
      id: 2,
      name: "James and Marcus",
      description:
        "James fights fire robots. He destroys them with a plasma gun with Marcus",
      projectId: "1",
    },
    {
      id: 3,
      name: "Scene 1 Project 2",
      description:
        "Amet proident consectetur eiusmod est ullamco. Sit excepteur tempor quis est voluptate exercitation minim id nulla ex nulla. Fugiat exercitation occaecat velit nulla eu eu. Pariatur anim laboris voluptate minim fugiat laborum commodo et.",
      projectId: "2",
    },
  ],
  items: [
    {
      id: "pizza",
      name: "Pizza",
      description: "A big pepperoni pizza",
      lowEstimate: 25,
      highEstimate: 50,
      quantity: 5,
      acquired: true,
      actualCost: 25,
    projectId: "1",
    },
    {
      id: '2',
      name: 'Cardboard',
      description: 'A big pile of cardboard',
      lowEstimate: 5,
      highEstimate: 10,
      quantity: 5,
      projectId: "1",
    }
  ],
  acquisitions: [
    {
      id: '1',
      projectId: '1',
      total: 50,
      items: ['pizza']
  }
  ]
};
