
import Categories from '../components/Categories';
import { connect } from 'react-redux';
import { getCategories } from '../api/getCategories';


const mapStateToProps = (state:any) => {
    return {
        categories: state.categories || []
    }
}


const mapDispatchToProps = (dispatch:any) => ({
  getCategories : () => dispatch(getCategories()),

   

})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
