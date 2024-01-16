
import { connect } from 'react-redux';
import MainScreen from '../components/MainScreen';

const mapStateToProps = (state: any) => {
    return {
        selected: state.selected 
    }
}


const mapDispatchToProps = (dispatch: any) => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
