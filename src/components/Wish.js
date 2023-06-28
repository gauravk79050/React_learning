let Wish = () => {
    let time = new Date().getHours();
    if (time < 12) {
        return <span style = {{'color':'green'}}>Good Morning</span>;
    }
    else if (time > 12 && time < 19) {
        return <span style = {{'color':'orange'}}>Good afternoon</span>;
    }
    else {
        return <span style = {{'color':'black'}}>Good Night</span>;
    }


}
export default Wish;