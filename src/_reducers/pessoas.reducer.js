import { pessoaConstants } from '../_constants';

const initialPessoaState = {
  items:[]
}

export function pessoas(state = initialPessoaState, action) {
  switch (action.type) {
    case pessoaConstants.CREATE_REQUEST:
        return { 
            ...state, creating: true 
        };
    case pessoaConstants.CREATE_SUCCESS:
        return {
          ...state,
          items: [...state.items, action.pessoa]
        };
    case pessoaConstants.CREATE_FAILURE:
        return {};
    case pessoaConstants.LIST_REQUEST:
      return {
        loading: true
      };
    case pessoaConstants.LIST_SUCCESS:
      return {
        items: action.pessoas
      };
    case pessoaConstants.LIST_FAILURE:
      return { 
        error: action.error
      };
    case pessoaConstants.GET_REQUEST:
      return {
        loading: true
      };
    case pessoaConstants.GET_SUCCESS:
      return {
        items: [action.pessoa]
      };
    case pessoaConstants.GET_FAILURE:
      return { 
        error: action.error
      };
    case pessoaConstants.UPDATE_REQUEST:
      return { 
          ...state, updating: true 
      };
    case pessoaConstants.UPDATE_SUCCESS:
        return {
          ...state,
          items: [action.pessoa]
        };
    case pessoaConstants.UPDATE_FAILURE:
        return {};
    case pessoaConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map(pessoa =>
          pessoa.id === action.id
            ? { ...pessoa, deleting: true }
            : pessoa
        )
      };
    case pessoaConstants.DELETE_SUCCESS:
      return {
        items: state.items.filter(pessoa => pessoa.id !== action.id)
      };
    case pessoaConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map(pessoa => {
          if (pessoa.id === action.id) {
            const { deleting, ...pessoaCopy } = pessoa;
            return { ...pessoaCopy, deleteError: action.error };
          }

          return pessoa;
        })
      };
    default:
      return state
  }
}