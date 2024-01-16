
import Header from '../components/Header';
import { connect } from 'react-redux';


const mapStateToProps = (state:any) => {
    return {
        selected: state.selected 
    }
}


const mapDispatchToProps = (dispatch:any) => ({
   

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
