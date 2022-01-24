function tick(){
    const element = (
        <div>
            <h1>React.js Clock</h1>
            <h2>{
                Date().toLocaleTimeString()
            }.
            </h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );

}

setInterval(tick, 1000);