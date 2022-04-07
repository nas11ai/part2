const Header = ({ course }) => <h1 key={course.id}>{course.name}</h1>

const Total = ({ course }) => (
    <p key={course.id}>
        <strong>
            total of {course.parts.reduce((total, item) => total += item.exercises, 0)} exercises
        </strong>
    </p>
)

const Part = ({ part }) =>
    <p key={part.id}>
        {part.name} {part.exercises}
    </p>

const Content = ({ course }) => (
    <div key={course.id}>
        {course.parts.map(x => <Part part={x} />)}
    </div>
)


const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course