export default function Card({ children }) {
    let style = {  margin: "10% auto", width: "500px", minHeight: "300px", background: "#36b7f4" }
    return (
        <div style={style}>
            {children}
        </div>
    )
}