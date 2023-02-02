import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course})=>{
    console.log(course)
    console.log("part is:", course.parts)

    return (
        <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts = {course.parts}/>
        </>
    )

}

export default Course