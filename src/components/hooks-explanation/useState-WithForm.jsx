import { useState } from "react";

const MyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    generalInfo: "",
    isStudent: false,
  });
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        width: "300px",
      }}
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
          // ...form get the prevois form value and override it with name field
          setForm({ ...form, name: event.target.value });
        }}
      />

      <hr />

      <label htmlFor="">Email : </label>
      <input
        value={form.email}
        type="text"
        onChange={(event) => {
          // ...form get the prevouis form value and override it with the email field
          setForm({ ...form, email: event.target.value });
        }}
      />

      <hr />

      <label htmlFor="">Are You A Student</label>
      <input
        type="checkbox"
        checked={form.isStudent}
        onChange={(e) => {
          setForm({ ...form, isStudent: e.target.checked });
        }}
      />

      <hr />

      <label htmlFor="">General information</label>
      <textarea
        value={form.generalInfo}
        onChange={(e) => {
          setForm({ ...form, generalInfo: e.target.value });
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default MyForm;
