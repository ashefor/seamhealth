export const customDateFormatter = (evet: any) => {
  if (evet) {
    const regExp = '[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])';
    if (typeof (evet) == 'object') {
      return evet.toISOString().split('T')[0];
    } else {
      if (evet.match(regExp)) {
        return evet
      } else {
        return ''
      }
    }
  } else {
    return ''
  }
}
