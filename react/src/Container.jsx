function Counter (){
    //let count = 0;
    const [count,setcount]=useState(0);
    const handleIncrement=()=>{
        setcount(count+1);
        //console. log(count);

    };
    return(
        <>
        <div className="Counter">
            <h1>count:{count}</h1>
            <button on click={handleIncrement}>Increment</button>

        </div>
        </>
    );

}   