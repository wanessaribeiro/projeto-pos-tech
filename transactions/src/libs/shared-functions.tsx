export const formatDate = (date: Date) => {
    const day  = date.getDate().toString();
    const dayF = (day.length == 1) ? '0'+day : day;
    const month  = (date.getMonth()+1).toString();
    const monthF = (month.length == 1) ? '0'+month : month;
    const yearF = date.getFullYear();
    return dayF+"/"+monthF+"/"+yearF;
  }