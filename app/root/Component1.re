type title =
  | Text(string)
  | Custom(unit => React.element);

let getTitle = (~title: title) => {
  switch title {
  | Text(title) => <div>{React.string(title)}</div>
  | Custom(fn) => fn()
  };
};

[@react.component]
let make = (~title: option(title)=?) => {
  <div>{
    switch title {
    | None => React.null
    | Some(title) => {getTitle(~title)}
    };
  }</div>
};
