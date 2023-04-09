import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = [
    "Bekasi",
    "Makassar",
    "Jakarta",
    "Sumbawa",
    "Bandung",
    "Surabaya",
  ];

  const selectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisibile, setAlertVisibility] = useState(false);

  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={selectedItem} /> */}
      {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
