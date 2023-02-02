

const Part = ({ part }) => 
<p >
  {part.name} {part.exercises}
</p>


const Content = ({ parts }) => {
    return(
        <>

        {parts.map(element=><Part key={element.id} part = {element}/>)} 
           
      </>
    )
}
//<p key = {element.id} >{element.name} {element.exercises}</p>)}
export default Content