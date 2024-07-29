import Part from "./Part ";

export default function Content({ parts }) {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return (
      <>
        {parts.map(part => (
          <Part key={part.id} part={part.name} exercise={part.exercises} />
        ))}
        <p> <strong>total of  {total} exercises</strong></p>
      </>
    );
  }
  