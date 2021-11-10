export const CHANGE_FECHA = 'CHANGE_FECHA'

export const selectFecha = (payload) => {
  return {
    type: CHANGE_FECHA,
    payload
  }
}
