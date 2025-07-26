import { useState } from "react";
let nextID = 8;

function MyList() {
  const [club, setClub] = useState("");
  const [clubs, setClubs] = useState([
    { id: 1, name: "ManUTD" },
    { id: 2, name: "LiverPool" },
    { id: 3, name: "ManCity" },
    { id: 4, name: "Real Madrid" },
    { id: 5, name: "Barcelona" },
    { id: 6, name: "Juventus" },
    { id: 7, name: "Inter Milan" },
  ]);
  const handleDeletClick = (id) => {
    const newClubs = clubs.filter((c) => {
      return c.id !== id;
    });
    setClubs(newClubs);
  };

  const handleEditClick = (id) => {
    const newClubs = clubs.map((c) => {
      if (c.id === id) {
        let newClub = { ...c, name: c.name + "0" };
        return newClub;
      } else {
        return c;
      }
    });
    setClubs(newClubs);
  };
  const clubsList = clubs.map((club) => {
    return (
      <li style={{ fontSize: "25px" }} key={club.id}>
        {club.name}{" "}
        <button
          onClick={() => {
            handleDeletClick(club.id);
          }}
        >
          Delete{" "}
        </button>
        <button
          onClick={() => {
            handleEditClick(club.id);
          }}
        >
          Edit{" "}
        </button>
      </li>
    );
  });

  const handleAddClick = () => {
    if (club === null || club === "") {
      return alert("please provide a valid input");
    }
    setClubs([...clubs, { id: nextID, name: club }]);
    nextID += 1;
  };
  return (
    <div>
      {/* <MyForm /> */}
      {clubsList}
      <div>
        <label htmlFor="">Add Club : </label>
        <input
          value={club}
          onChange={(e) => {
            setClub(e.target.value);
          }}
          type="text"
        />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}

export default MyList;
