const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export const completar_aula = (id) => ({ type: COMPLETAR_AULA, payload: id });
export const completar_curso = () => ({ type: COMPLETAR_CURSO });
export const resetar_curso = () => ({ type: RESETAR_CURSO });

const initialState = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      return state.map((aula) => {
        if (aula.id === action.payload) {
          return { ...aula, completa: true }
        };
        return { ...aula };
      });
    case COMPLETAR_CURSO:
      return state.map(item => ({ ...item, completa: true }))
    case RESETAR_CURSO:
      return state.map(item => ({ ...item, completa: false }))
    default:
      return state;
  }
}

export default reducer;