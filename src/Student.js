export function Student(props){
    console.log(props)
    return (
        <div>
            
            <h1>Hello : {props.name}</h1>
            <h2>email : {props.email}</h2>
            <h2>{props.phone}</h2>
           
        </div>

    )
}

