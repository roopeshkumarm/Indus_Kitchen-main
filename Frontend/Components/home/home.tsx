import './home.css';

const Home = () => {
    return (
        <section id="home">
            <div className="text">
                <h3 className="welcome-title">Welcome to Indu's Kitchen</h3>
                <div className="title">
                    <h1>We are Kitchen,</h1>
                    <h1>Not Restaurant</h1>
                </div>
                <h2 className="description">
                    <span>Home Made Guilt-Free Food</span> 
                    <span>Delivered At Your Doorstep.</span>
                </h2>
            </div>
        </section>
    );
};

export default Home;