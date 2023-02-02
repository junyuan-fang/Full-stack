

const Part = ({ part }) => 
<p>
  {part.name} {part.exercises}
</p>


const Content = ({ parts }) => {
    return(
        <>

        {parts.map(element=><Part part = {element}/>)}
           
      </>
    )
}

export default Content