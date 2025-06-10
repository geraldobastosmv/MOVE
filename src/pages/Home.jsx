import Button from '../components/Button';


function Home() {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of our application.</p>
            <Button props={{ text: "Click Me" }} />
        </div>
    );
}

export default Home;