import { useState } from "react";

const MyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    generalInfo: "",
    isStudent: false,
    country: "",
    status: "",
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
      <select
        value={form.country}
        onChange={(e) => {
          setForm({ ...form, country: e.target.value });
        }}
      >
        <option>KSA</option>
        <option>Egypt</option>
        <option>Syria</option>
      </select>
      <hr />
      <div>
        <input
          type="radio"
          name="status"
          checked={form.status === "student"}
          value="student"
          onChange={(e) => {
            setForm({ ...form, status: e.target.value });
          }}
        />
        Student
        <input
          type="radio"
          name="status"
          checked={form.status === "teacher"}
          value="teacher"
          onChange={(e) => {
            setForm({ ...form, status: e.target.value });
          }}
        />
        Teacher
      </div>
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
