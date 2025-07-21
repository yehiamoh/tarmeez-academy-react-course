import { useState } from "react";

const MyForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  return (
    <div
      style={{
        paddingTop: "40px",
      }}
    >
      <form
        action=""
        onSubmit={(event) => {
          //prevent the default behavoir which is to refresh And Lose the state
          event.preventDefault();
        }}
      >
        <label htmlFor="">Name : </label>
        <input
          value={form.name}
          type="text"
          onChange={(event) => {
            setForm({ name: event.target.value });
          }}
        />
        <hr />
        <label htmlFor="">Email : </label>
        <input
          value={form.email}
          type="text"
          onChange={(event) => {
            setForm({ email: event.target.value });
          }}
        />
        <hr />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
