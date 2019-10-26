const initialState = {
  tasks: [
    { id: "3", name: "Поспать", date: "01.01.2014" },
    { id: "4", name: "Поработать", date: "01.01.2015" },
    { id: "5", name: "Сходить в магаз", date: "01.01.2016" },
    { id: "1", name: "Сварить кофе", date: "01.01.2012" },
    { id: "2", name: "Пообедать", date: "01.01.2013" }
  ]
}

export function lists(state = initialState) {
  return state
}