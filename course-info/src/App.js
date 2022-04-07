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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course course={course} key={course.id} />)}
    </div>
  )
}

export default App