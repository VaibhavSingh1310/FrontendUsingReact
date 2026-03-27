export function Wrapper({tittle,children}){
    return(
        <div>
            <h2>{tittle}</h2>
            <div>
                {children}
            </div>
        </div>
    );
}