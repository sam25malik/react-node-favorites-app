/*Reducer for the actions*/
const data = (state = [], action) => {
    switch (action.type) {
        case 'SET_RESULTS':
            return Object.assign({}, state, {
                results: action.data.items,
            });
        case 'SET_INPUT':
            return Object.assign({}, state, {
                inputValue: action.data,
            });
        case 'SET_EMAIL':
            return Object.assign({}, state, {
                email: action.data,
            });
        case 'SET_PASSWORD':
            return Object.assign({}, state, {
                password: action.data,
            });
        case 'SET_CLEAR':
            return Object.assign({}, state, {
                inputValue: '',
                results:'',
            });
        case 'ADD_TO_LIST':
            var index = state.list.indexOf(action.data)
            if (index === -1) {
                var list_new = [...state.list,action.data];
                return Object.assign({}, state, {
                    list: list_new,
                });
            }else{
                return Object.assign({}, state, {
                    list: state.list
                });
            }
        case 'SET_ERROR':
            return Object.assign({}, state, {
                results:'',
            });

        case 'LOGGED_IN':
            return Object.assign({}, state, {
                loggedin:true,
            });
       
       case 'SET_DETAILS':
            return Object.assign({}, state, {
                gotodetails:true,
                details:action.data,
            });

       case 'GO_TO_HOME':
            return Object.assign({}, state, {
                gotodetails:false,
            });

        case 'GO_TO_LIST':
            return Object.assign({}, state, {
                list_view:action.data,
            });

        case 'REMOVE_TO_LIST':
            var list_new = [...state.list];
            var index = list_new.indexOf(action.data)
            if (index !== -1) {
                list_new.splice(index, 1);
            }
            return Object.assign({}, state, {
                list:list_new,
            });

        default:
            return state;
    }
};

export default data
