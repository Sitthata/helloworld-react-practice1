
const List = () => {
  const people = ["Siri", "Alexa", "Google", "Facebook", "Twitter"];
  return (
    <div>
      <h2>List of People</h2>
      <ul className="list-inside">
        {people.map((person, index) => (
          <li className="text-lg list-disc" key={index}>
            <span>{person}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
