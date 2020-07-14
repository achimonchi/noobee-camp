import Layout from '../components/Layout'

class Registrasi extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <Layout activeClass={this.props.url.pathname}>
                <h1>Registrasi Peserta</h1>
            </Layout>
        )
    }
} 


export default Registrasi;