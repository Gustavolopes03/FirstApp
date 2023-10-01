const Icon = ({ name }) => {
    const iconsList = {
      dots: '&#xe800;',
      menu: '&#xf0c9;',
      like: '&#xe800;',
      dislike: '&#xe802;',
      flash: '&#xe803;',
      marker: '&#xf031;',
      filter: '&#xf0b0;',
      user: '&#xf061;',
      circle: '&#xf039;',
      hashtag: '&#xf029;',
      calendar: '&#xf4c5;',
      chevronLeft: '&#xf004;',
      optionsV: '&#xf142;',
      optionsH: '&#xf141;',
      chat: '&#xf4ac;',
      explore: '&#xf50d;'
    };
  
    let icon = iconsList[name];
    icon = icon.substr(3);
    icon = String.fromCharCode(parseInt(icon, 16));
    console.log(icon)
  
    return icon;
  };
  
  export default Icon;