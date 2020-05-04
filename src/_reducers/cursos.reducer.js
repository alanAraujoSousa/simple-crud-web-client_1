import { cursoConstants } from '../_constants';

const initialCursoState = {
  items:[]
}

export function cursos(state = initialCursoState, action) {
  switch (action.type) {
    case cursoConstants.CREATE_REQUEST:
        return { 
            ...state, creating: true 
        };
    case cursoConstants.CREATE_SUCCESS:
        return {
          ...state,
          items: [...state.items, action.curso],
          creating: false
        };
    case cursoConstants.CREATE_FAILURE:
        return {};
    case cursoConstants.LIST_REQUEST:
      return {
        loading: true
      };
    case cursoConstants.LIST_SUCCESS:
      return {
        items: action.cursos
      };
    case cursoConstants.LIST_FAILURE:
      return { 
        error: action.error
      };
    case cursoConstants.GET_REQUEST:
      return {
        loading: true
      };
    case cursoConstants.GET_SUCCESS:
      return {
        items: [action.curso]
      };
    case cursoConstants.GET_FAILURE:
      return { 
        error: action.error
      };
    case cursoConstants.UPDATE_REQUEST:
      return { 
          ...state, updating: true 
      };
    case cursoConstants.UPDATE_SUCCESS:
        return {
          ...state,
          items: [action.curso]
        };
    case cursoConstants.UPDATE_FAILURE:
        return {};
    case cursoConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(curso =>
          curso._id === action.id
            ? { ...curso, deleting: true }
            : curso
        )
      };
    case cursoConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(curso => curso._id !== action.id)
      };
    case cursoConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(curso => {
          if (curso._id === action.id) {
            const { deleting, ...cursoCopy } = curso;
            return { ...cursoCopy, deleteError: action.error };
          }

          return curso;
        })
      };
    default:
      return state
  }
}