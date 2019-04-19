export function hitApi() {
  return function(dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        dispatch(getData(data));
      });
  };
}
export function normalAction() {
  return {
    type: "increment"
  };
}
export function getData(data) {
  return {
    type: "Data",
    data: data
  };
}
