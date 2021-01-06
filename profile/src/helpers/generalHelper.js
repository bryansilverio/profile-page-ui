export default {
  /**
   * Convierte String a Date
   * @param {*} str
   */
  convertStringToDate(str = '') {
    let result = null
    try {
      if (str) {
        let date_aux = str.split('-')
        let year = parseInt(date_aux[0])
        let month = parseInt(date_aux[1]-1)
        let day = parseInt(date_aux[2])
        result = new Date(year, month, day)
      }
    } catch (e) {
      console.log('No se pudo convertir la fecha de algún registro')
    }
    return result
  },
  /**
   * obtiene una letra random
   */
  getWord() {
    var letras = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ]
    var numero = (Math.random() * 15).toFixed(0)
    return letras[numero]
  },
  /**
   * Genera color hexadecimal random
   */
  getColorHex() {
    var color = ''
    for (var i = 0; i < 6; i++) {
      color = color + this.getWord()
    }
    return '#' + color
  },
}
