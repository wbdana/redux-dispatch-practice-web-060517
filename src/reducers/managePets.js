export let state;

export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
      return Object.assign({}, state, {pets: [...state.pets, action.pet]})
    case 'REMOVE_PET':
      return {pets: state.pets.filter((pet) => { return pet.id !== action.id })}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render(state)
}

export function render(){
  let lis = state.pets.map( pet => {return `<li>${pet.name}</li>`})
  document.getElementById('container').innerHTML = `<ul>${lis}</ul>`
}
