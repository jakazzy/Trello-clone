const data = {
  tasks: {
    card1: { id: "card1", content: "bake cake" },
    card2: { id: "card2", content: "wash utensils" },
    card3: { id: "card3", content: "Read book" },
    card4: { id: "card4", content: "complete proofread" },
    card5: { id: "card5", content: "water plants" },
    card6: { id: "card6", content: "iron dresses" },
    card7: { id: "card7", content: "Help friends" },
    card8: { id: "card8", content: "braid hair" },
    card9: { id: "card9", content: "comb hair" },
    card10: { id: "card10", content: "buy prepaid" },
    card11: { id: "card11", content: "sweep room" },
    card12: { id: "card12", content: "fetch water" },
    card13: { id: "card13", content: "watch soccer" },
    card14: { id: "card14", content: "repair meter" },
    card15: { id: "card15", content: "clean room" },
    card16: { id: "card16", content: "wash car" },
    card17: { id: "card17", content: "mob rooms" },
    card18: { id: "card18", content: "close window" },
    card19: { id: "card19", content: "run errands" },
    card20: { id: "card20", content: "water plants" }
  },
  columnsData: {
    column1: {
      id: "column1",
      title: "plan",
      taskIds: ["card1", "card2", "card3", "card4"]
    },
    column2: {
      id: "column2",
      title: "to do",
      taskIds: ["card5", "card6", "card7", "card8"]
    },
    column3: {
      id: "column3",
      title: "doing",
      taskIds: ["card9", "card10", "card11", "card12"]
    },
    column4: {
      id: "column4",
      title: "done",
      taskIds: ["card13", "card14", "card15", "card16"]
    },
    column5: {
      id: "column5",
      title: "logs",
      taskIds: ["card17", "card18", "card19", "card20"]
    }
  },
  columnOrder: ["column1", "column2", "column3", "column4", "column5"]
};
export default data;
// [
//     {
//       title: "Plan",
//       data: [
//         { content: "bake cake", id: 6 },
//         { content: "wash utensils", id: 7 },
//         { content: "Read book", id: 8 },
//         { content: "complete proofread", id: 9 }
//       ],
//       id: 1
//     },
//     {
//       title: "to do",
//       data: [
//         { content: "water plants", id: 10 },
//         { content: "iron dresses", id: 11 },
//         { content: "Help friends", id: 12 },
//         { content: "braid hair", id: 13 }
//       ],
//       id: 2
//     },
//     {
//       title: "doing",
//       data: [
//         { content: "comb hair", id: 14 },
//         { content: "buy prepaid", id: 15 },
//         { content: "sweep room", id: 16 },
//         { content: "fetch water", id: 17 }
//       ],
//       id: 3
//     },
//     {
//       title: "Done",
//       data: [
//         { content: "watch soccer", id: 18 },
//         { content: "repair meter", id: 19 },
//         { content: "clean room", id: 20 },
//         { content: "wash car", id: 21 }
//       ],
//       id: 4
//     },
//     {
//       title: "logs",
//       data: [
//         { content: "mob rooms", id: 22 },
//         { content: "close window", id: 23 },
//         { content: "run errands", id: 24 },
//         { content: "water plants", id: 25 }
//       ],
//       id: 5
//     }
//   ]
