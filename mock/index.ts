export interface classifyListMockType {
  title: string;
  id: number;
}

export interface articleListMockType {
  title: string;
  subTitle: string;
  classify: string;
  id: number;
  update: string;
  readNum: number;
  context: string
}

export let classifyListMock: classifyListMockType[] = [
  {
    title: "web",
    id: 1,
  },
  {
    title: "js",
    id: 2,
  },
];

export let articleListMock:articleListMockType[] = [
  {
    title: "js",
    subTitle: "js 是个什么",
    classify: "js",
    id: 1,
    update: "2022-03-27 10:00:00",
    readNum: 2000,
    context: "你好"
  },
  {
    title: "js",
    subTitle: "js 是个什么",
    classify: "js",
    id: 2,
    update: "2022-03-27 10:00:00",
    readNum: 2000,
    context: "你好"
  },
];



