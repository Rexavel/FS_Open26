const Header = (props) =>{
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    
    <div>
    {/* // 1.3
    // <p>{props.parts} Number of exercises {props.exercises}</p>
    // 1.4 */}
    
      <p>{props.parts.name} Number of exercises {props.parts.exercises}</p>

    </div>
  )
}
const Content = (props) => {
  console.log(props)
  return (

    // 1.3
    // <div>
    //   <Part parts={props.part1} exercises={props.exercises1}/>
    //   <Part parts={props.part2} exercises={props.exercises2} />
    //   <Part parts={props.part3} exercises={props.exercises3} />
    // </div>
    // 1.4
    <div>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>

    {/* // 1.4 */}
    <h1> Total exercise {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</h1>
    </div>
  )
}

const App = () => {
   //1.1-1.2
  `const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
   
    <div>
      <Header course={course} />      
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )`
// PART 1.3
  // const course = 'Half Stack application development'
  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }

  // return (
  //   <div>
  //      <Header course={course} />      
  //     <Content
  //       part1={part1.name}
  //       exercises1={part1.exercises}
  //       part2={part2.name}
  //       exercises2={part2.exercises}
  //       part3={part3.name}
  //       exercises3={part3.exercises}
  //     />
  //     <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
  //   </div>
  // )

  // part 1.4

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App