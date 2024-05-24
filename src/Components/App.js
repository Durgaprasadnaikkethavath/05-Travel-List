import Logo from "./Logo";
import Item from "./Item";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Item />
      <PackingList />
      <Stats />
    </div>
  );
}
