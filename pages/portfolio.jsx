import Layout from '../components/Layout'

class Portfolio extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <Layout activeClass={this.props.url.pathname}>
                <h1>Portfolio Peserta</h1>
            </Layout>
        )
    }
} 


export default Portfolio;