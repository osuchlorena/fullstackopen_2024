import Content from "./Content";
import Header from "./Header";

export default function Course({ course}) {
    return (
        <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        </>
    )
}